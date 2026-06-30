import {
  educationIndustryPage,
  healthcareIndustryPage,
  hospitalityIndustryPage,
  industriesPage,
  municipalIndustryPage,
  officeBuildingsIndustryPage,
  retailMixedUseIndustryPage
} from "../../pages/industries.js";

const industryRoutes = new Map([
  ["/industries/office-buildings/", officeBuildingsIndustryPage],
  ["/industries/healthcare/", healthcareIndustryPage],
  ["/industries/education/", educationIndustryPage],
  ["/industries/retail-mixed-use/", retailMixedUseIndustryPage],
  ["/industries/hospitality/", hospitalityIndustryPage],
  ["/industries/municipal/", municipalIndustryPage]
]);

export function resolveIndustryRoute(current) {
  if (current === "/industries/") return industriesPage();

  const industryHandler = industryRoutes.get(current);
  return industryHandler ? industryHandler() : undefined;
}
