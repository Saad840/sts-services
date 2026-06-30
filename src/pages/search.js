import { pageHero } from "../components/page-title-hero.js";
import { searchResultsPage } from "./content.js";

export { searchResultsPage };

export function searchPage() {
  return `
    ${pageHero("Search")}
    <main id="main" class="section search-page">
      <div class="container content-page">
        <form class="search-form" role="search">
          <label>
            <span class="sr-only">Search website</span>
            <input type="search" placeholder="Search services, blogs, careers..." autofocus>
          </label>
          <button class="btn" type="submit">Search</button>
        </form>
      </div>
    </main>
  `;
}
