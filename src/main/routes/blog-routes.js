import {
  aiConstructionArticlePage,
  architecturalDesignPhasesArticlePage,
  architecturalDraftingArticlePage,
  architecturalDrawingsArticlePage,
  architecturalEngineeringArticlePage,
  bimForArchitectsArticlePage,
  bimInConstructionArticlePage,
  bimOutsourcingArticlePage,
  blogPage,
  constructionDocumentationArticlePage,
  constructionStagesArticlePage,
  dronesConstructionArticlePage,
  engineeringDesignPartnerArticlePage,
  engineeringOutsourcingIndiaArticlePage,
  lidarScanToBimArticlePage,
  mepConstructionArticlePage,
  millworkShopDrawingErrorsArticlePage,
  oemVsOdmArticlePage,
  outsourcing3dModelingArticlePage,
  outsourcingEngineeringServiceArticlePage,
  outsourcingEngineeringServicesPage,
  parametricVsGenerativeArticlePage,
  shopDrawingsVsAsBuiltArticlePage,
  structuralDesignProcessArticlePage,
  valueEngineeringConstructionArticlePage
} from "../../pages/blogs.js";
import { aecServiceCategoryPage, aecServiceCategoryRoutes } from "../../pages/industries.js";

const articleRoutes = new Map([
  ["/ai-in-construction/", aiConstructionArticlePage],
  ["/ai-in-construction-key-benefits-challenges-applications-and-future-trends/", aiConstructionArticlePage],
  ["/construction-documentation-errors/", constructionDocumentationArticlePage],
  ["/millwork-shop-drawing-errors/", millworkShopDrawingErrorsArticlePage],
  ["/mep-in-construction/", mepConstructionArticlePage],
  ["/bim-for-architects/", bimForArchitectsArticlePage],
  ["/shop-drawings-vs-as-built-drawings/", shopDrawingsVsAsBuiltArticlePage],
  ["/bim-in-construction/", bimInConstructionArticlePage],
  ["/drones-in-construction-key-uses-benefits-applications/", dronesConstructionArticlePage],
  ["/drone-in-construction/", dronesConstructionArticlePage],
  ["/outsourcing-3d-modeling-services-for-aec-and-engineering-projects/", outsourcing3dModelingArticlePage],
  ["/structural-design-process-of-buildings/", structuralDesignProcessArticlePage],
  ["/step-by-step-process-for-structural-design-of-buildings-projects/", structuralDesignProcessArticlePage],
  ["/value-engineering-in-construction-stages-benefits/", valueEngineeringConstructionArticlePage],
  ["/7-stages-of-construction-a-complete-guide-for-successful-project/", constructionStagesArticlePage],
  ["/7-stages-of-construction-a-complete-guide/", constructionStagesArticlePage],
  ["/architectural-design-phases/", architecturalDesignPhasesArticlePage],
  ["/parametric-modeling-vs-generative-modeling/", parametricVsGenerativeArticlePage],
  ["/oem-vs-odm/", oemVsOdmArticlePage],
  ["/3d-lidar-scanning-is-the-backbone-of-scan-to-bim-process/", lidarScanToBimArticlePage],
  ["/types-of-architectural-drawings/", architecturalDrawingsArticlePage],
  ["/outsourcing-engineering-services/", outsourcingEngineeringServicesPage],
  ["/role-of-architectural-engineering/", architecturalEngineeringArticlePage],
  ["/architectural-drafting/", architecturalDraftingArticlePage],
  ["/right-engineering-design-partner/", engineeringDesignPartnerArticlePage],
  ["/outsourcing-engineering-service/", outsourcingEngineeringServiceArticlePage],
  ["/top-engineering-outsourcing-services-in-india/", engineeringOutsourcingIndiaArticlePage],
  ["/top-bim-outsourcing-services/", bimOutsourcingArticlePage]
]);

export function resolveBlogRoute(current) {
  const blogPageMatch = current.match(/^\/blogs\/page\/([2-9]|[12]\d|3[0-3])\/$/);
  const aecCategoryMatch = current.match(/^\/stm_service_category\/aec-services\/(?:(?:page\/([2-9]\d*)\/)|(?:archive\/([a-z]+-\d{4})\/(?:page\/([2-9]\d*)\/)?))?$/);

  if (current === "/blogs/" || current === "/news/" || current === "/blogs-2/") return blogPage();
  if (blogPageMatch) return blogPage(Number(blogPageMatch[1]));
  if (aecCategoryMatch && aecServiceCategoryRoutes.includes(current)) {
    return aecServiceCategoryPage(Number(aecCategoryMatch[1] || aecCategoryMatch[3] || 1), aecCategoryMatch[2] || "");
  }

  const articleHandler = articleRoutes.get(current);
  return articleHandler ? articleHandler() : undefined;
}
