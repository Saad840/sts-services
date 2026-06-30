import { staticPages } from "../data/index.js";
import { staticPage, awardsRecognitionsPage, companyOverviewPage, dataSecurityPage, lifeAtMilestonePage, whyMilestonePage, workCulturePage } from "./content.js";

export function aboutPage() {
  return staticPage(staticPages["/about-us/"]);
}

export {
  awardsRecognitionsPage,
  companyOverviewPage,
  dataSecurityPage,
  lifeAtMilestonePage,
  whyMilestonePage,
  workCulturePage
};
