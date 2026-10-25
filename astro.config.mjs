import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maikepz.github.io',
  base: '/Rogerem',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
