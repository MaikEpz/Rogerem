import { createDestinationService } from '../application/destination-service.ts';
import { staticDestinationRepository } from '../infrastructure/static-destination-repository.ts';

export const destinationService = createDestinationService(staticDestinationRepository);
