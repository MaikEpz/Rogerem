import test from 'node:test';
import assert from 'node:assert/strict';
import { createDestinationService } from '../src/application/destination-service.ts';
import { staticDestinationRepository } from '../src/infrastructure/static-destination-repository.ts';
import { destinations } from '../src/infrastructure/content/destinations.ts';

test('the four entry figures resolve to unique, complete destination pages', () => {
  const service = createDestinationService(staticDestinationRepository);
  assert.equal(service.list().length, 4);
  assert.equal(new Set(service.list().map(({ slug }) => slug)).size, 4);
  assert.equal(new Set(service.list().map(({ symbol }) => symbol)).size, 4);
  assert.equal(new Set(service.list().map(({ scene }) => scene)).size, 4);
  for (const destination of service.list()) {
    assert.match(destination.slug, /^[a-z0-9-]+$/);
    assert.equal(service.find(destination.slug), destination);
    assert.ok(destination.introduction && destination.revelation && destination.catharsis);
    assert.ok(destination.tracks.length > 0);
    assert.equal(service.listeningOptions(destination.slug).length, 4);
  }
  assert.equal(service.find('no-existe'), undefined);
  assert.deepEqual(service.listeningOptions('no-existe'), []);
});

test('listening options only expose configured HTTPS URLs', () => {
  const content = {
    ...destinations[0]!,
    links: { spotify: 'https://open.spotify.com/playlist/example', bandcamp: null, appleMusic: 'javascript:alert(1)', youtubeMusic: 'http://example.com' },
  };
  const service = createDestinationService({ findAll: () => [content], findBySlug: (slug) => slug === content.slug ? content : undefined });
  const options = service.listeningOptions(content.slug);
  assert.equal(options.find(({ platform }) => platform === 'spotify')?.url, content.links.spotify);
  assert.equal(options.filter(({ url }) => url === null).length, 3);
});
