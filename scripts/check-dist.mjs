import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import config from '../astro.config.mjs';

// Verify the actual built output, including Vite's base rewriting of CSS assets.
const directory = path.resolve('dist');
const base = `${config.base.replace(/\/$/, '')}/`;
let checked = 0;
async function walk(folder) {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const file = path.join(folder, entry.name);
    if (entry.isDirectory()) { await walk(file); continue; }
    if (!/\.(html|css)$/.test(file)) continue;
    const content = await readFile(file, 'utf8');
    const references = file.endsWith('.html')
      ? [...content.matchAll(/(?:href|src)="([^"\s]+)"/g)].map(match => match[1])
      : [...content.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)].map(match => match[1]);
    for (const reference of references) {
      if (!reference.startsWith('/') || reference.startsWith('//')) continue;
      assert.ok(reference.startsWith(base), `Reference missing ${base}: ${reference} in ${file}`);
      const relative = reference.slice(base.length).split(/[?#]/)[0];
      const target = path.join(directory, relative.endsWith('/') || !relative ? `${relative}index.html` : relative);
      await access(target);
      checked++;
    }
  }
}
await walk(directory);
for (const slug of ['florecer', 'brillar', 'sentir', 'soltar']) {
  await access(path.join(directory, 'destino', slug, 'index.html'));
}
assert.ok(checked > 10, 'Expected page and asset references to be checked');
console.log(`Verified ${checked} built references under ${base} and all four destination pages.`);
