import { caseStudyPage, caseStudyDetailPage, caseStudyRoutes } from "../../pages/content.js";

export function resolveCaseStudyRoute(current) {
  if (current === "/case-study/" || current === "/works/") return caseStudyPage();
  if (caseStudyRoutes.includes(current)) return caseStudyDetailPage(current);

  return undefined;
}
