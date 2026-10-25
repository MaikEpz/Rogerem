export const platforms = ['bandcamp', 'appleMusic', 'youtubeMusic', 'spotify'] as const;
export type Platform = (typeof platforms)[number];
export type Symbol = 'flower' | 'star' | 'eye' | 'moon';

export interface Destination {
  readonly slug: string;
  readonly symbol: Symbol;
  readonly name: string;
  readonly number: string;
  readonly color: string;
  readonly mood: string;
  readonly title: string;
  readonly introduction: string;
  readonly revelation: string;
  readonly catharsis: string;
  readonly scene: 'garden' | 'rooftop' | 'room' | 'night';
  readonly tracks: readonly { title: string; artist: string; duration: string }[];
  readonly links: Readonly<Record<Platform, string | null>>;
}

export interface DestinationRepository {
  findAll(): readonly Destination[];
  findBySlug(slug: string): Destination | undefined;
}
