import { searchResultsPage } from "../../pages/search.js";

export function resolveSearchRoute(current, searchQuery) {
  const searchPageMatch = current.match(/^\/page\/([2-9]\d*)\/$/);
  if (!searchQuery || (current !== "/" && !searchPageMatch)) return undefined;

  return searchResultsPage(searchQuery, Number(searchPageMatch?.[1] || 1));
}
