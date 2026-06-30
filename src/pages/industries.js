import { industryLinks, industries } from "../data/index.js";
import { industryLinkCards, industrySectorGrid } from "../components/industries/industry-landing-grid.js";
import { pageHero } from "../components/page-title-hero.js";

export function industriesPage() {
  return `
    ${pageHero("Industries")}
    <main id="main" class="section industries-page">
      <div class="container content-page">
        <p>Milestone supports AEC, manufacturing, engineering, and commercial project teams with focused drafting, BIM, documentation, and coordination support across industry-specific workflows.</p>
        ${industryLinkCards(industryLinks)}
        <h2>Additional Sectors</h2>
        ${industrySectorGrid(industries)}
      </div>
    </main>
  `;
}

export {
  aecServiceCategoryPage,
  aecServiceCategoryRoutes,
  educationIndustryPage,
  healthcareIndustryPage,
  hospitalityIndustryPage,
  municipalIndustryPage,
  officeBuildingsIndustryPage,
  retailMixedUseIndustryPage
} from "./content.js";
