/** Keep internal links valid both on GitHub Pages and in the local preview. */
export function sitePath(path = ''): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
