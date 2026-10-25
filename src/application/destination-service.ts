import type { DestinationRepository, Platform } from '../domain/destination.ts';

export function createDestinationService(repository: DestinationRepository) {
  return {
    list: () => repository.findAll(),
    find: (slug: string) => repository.findBySlug(slug),
    listeningOptions: (slug: string) => {
      const destination = repository.findBySlug(slug);
      if (!destination) return [];
      return Object.entries(destination.links).map(([platform, url]) => ({
        platform: platform as Platform,
        // Only web URLs may become external links in the presentation layer.
        url: url && /^https:\/\//i.test(url) ? url : null,
      }));
    },
  };
}
