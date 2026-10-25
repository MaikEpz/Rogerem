import type { DestinationRepository } from '../domain/destination.ts';
import { destinations } from './content/destinations.ts';

export const staticDestinationRepository: DestinationRepository = {
  findAll: () => destinations,
  findBySlug: (slug) => destinations.find((destination) => destination.slug === slug),
};
