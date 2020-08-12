type Pagination = {
  page: number | null;
  current: boolean;
  excerpt: boolean;
};

export function generatePagination(
  current: number,
  pages: number
): Pagination[] {
  return Array.from(Array(pages))
    .filter((it) => it !== 1 && it !== pages && Math.abs(current - it) <= 2)
    .map((it) => ({
      page: Math.abs(current - it) === 2 ? null : it,
      current: it === current,
      excerpt: Math.abs(current - it) === 2,
    }));
}
