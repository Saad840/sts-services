import { allServices, staticPages, jobs } from "../data/index.js";
import { header, footer } from "../components/layout.js";
import { home } from "../pages/home.js";
import { servicesPage, serviceDetail, bimCoordinationPage, revitFamilyCreationPage, shopDrawingsPage, cobieServicesPage, scanToBimReferencePage, fourDBimPage, fiveDBimPage, architecturalRenderingPage, architectural3dModelingPage, architecturalBimModelingPage, revitBimServicesPage, architecturalConstructionDocsPage, modularBimServicesPage, architectural2dDraftingPage, lightingDesignServicesPage, structuralBatchPage, millworkDraftingPage, engineeringBatchPage, engineeringServiceRoutes, contractStaffingPage, mepHeroPage, mepServiceRoutes } from "../pages/services.js";
import { staticPage, contactPage, careersPage, testimonialsPage, privacyPolicyPage, termsConditionsPage, caseStudyPage, blogPage, searchResultsPage, aecServiceCategoryPage, aecServiceCategoryRoutes, articlePage, workCulturePage, lifeAtMilestonePage, faqPage, whyMilestonePage, awardsRecognitionsPage, companyOverviewPage, dataSecurityPage, aiConstructionArticlePage, constructionDocumentationArticlePage, millworkShopDrawingErrorsArticlePage, mepConstructionArticlePage, bimForArchitectsArticlePage, shopDrawingsVsAsBuiltArticlePage, bimInConstructionArticlePage, dronesConstructionArticlePage, outsourcing3dModelingArticlePage, structuralDesignProcessArticlePage, valueEngineeringConstructionArticlePage, constructionStagesArticlePage, architecturalDesignPhasesArticlePage, parametricVsGenerativeArticlePage, oemVsOdmArticlePage, lidarScanToBimArticlePage, architecturalDrawingsArticlePage, outsourcingEngineeringServicesPage, architecturalEngineeringArticlePage, architecturalDraftingArticlePage, engineeringDesignPartnerArticlePage, outsourcingEngineeringServiceArticlePage, engineeringOutsourcingIndiaArticlePage, bimOutsourcingArticlePage } from "../pages/content.js";
import { $ } from "../utils/dom.js";
import { path, titleFromPath } from "../utils/path.js";
import { bindInteractions } from "./events.js";

export function renderRoute() {
  const current = path();
  const service = allServices.find((s) => s.href === current);
  const job = jobs.find((j) => j[4] === current);
  const blogPageMatch = current.match(/^\/blogs\/page\/([2-9]|[12]\d|3[0-3])\/$/);
  const searchPageMatch = current.match(/^\/page\/([2-9]\d*)\/$/);
  const aecCategoryMatch = current.match(/^\/stm_service_category\/aec-services\/(?:(?:page\/([2-9]\d*)\/)|(?:archive\/([a-z]+-\d{4})\/(?:page\/([2-9]\d*)\/)?))?$/);
  const searchQuery = new URLSearchParams(window.location.search).get("s")?.trim() || "";
  let body;
  if (searchQuery && (current === "/" || searchPageMatch)) body = searchResultsPage(searchQuery, Number(searchPageMatch?.[1] || 1));
  else if (current === "/") body = home();
  else if (current === "/service/bim-coordination/") body = bimCoordinationPage();
  else if (current === "/service/revit-family-creation/") body = revitFamilyCreationPage();
  else if (current === "/service/shop-drawings/") body = shopDrawingsPage();
  else if (current === "/service/cobie-services/") body = cobieServicesPage();
  else if (current === "/service/scan-to-bim/") body = scanToBimReferencePage();
  else if (current === "/service/4d-bim-construction-simulation/") body = fourDBimPage();
  else if (current === "/service/5d-bim-cost-estimation-quantity-takeoff/") body = fiveDBimPage();
  else if (current === "/service/3d-architectural-visualization-3d-rendering-services/") body = architecturalRenderingPage();
  else if (current === "/service/architectural-3d-modeling/") body = architectural3dModelingPage();
  else if (current === "/service/architectural-bim-modeling-services/") body = architecturalBimModelingPage();
  else if (current === "/service/revit-bim-services/") body = revitBimServicesPage();
  else if (current === "/service/architectural-construction-docs/") body = architecturalConstructionDocsPage();
  else if (current === "/service/modular-bim-services/") body = modularBimServicesPage();
  else if (current === "/service/architectural-2d-drafting-services/") body = architectural2dDraftingPage();
  else if (current === "/service/lighting-design-services/") body = lightingDesignServicesPage();
  else if (current === "/service/millwork-drafting-services/") body = millworkDraftingPage();
  else if ([
    "/service/structural-bim/",
    "/service/steel-detailing/",
    "/service/precast-detailing/",
    "/service/rebar-detailing/",
    "/service/structural-shop-drawings/",
    "/service/structural-construction-document/",
    "/service/structural-3d-modeling/",
    "/service/structural-2d-drafting/"
  ].includes(current)) body = structuralBatchPage(current);
  else if (engineeringServiceRoutes.includes(current)) body = engineeringBatchPage(current);
  else if (mepServiceRoutes.includes(current)) body = mepHeroPage(current);
  else if (current === "/service/contract-staffing-services/") body = contractStaffingPage();
  else if (current === "/services/" || current === "/service/") body = servicesPage();
  else if (service) body = serviceDetail(service);
  else if (current === "/contact-us/") body = contactPage();
  else if (current === "/careers-page/" || current === "/careers_archive/") body = careersPage();
  else if (current === "/testimonials1/") body = testimonialsPage();
  else if (current === "/privacy-policy/") body = privacyPolicyPage();
  else if (current === "/terms-and-conditions/") body = termsConditionsPage();
  else if (job) body = articlePage(job[0]);
  else if (current === "/case-study/" || current === "/works/") body = caseStudyPage();
  else if (current === "/blogs/" || current === "/news/" || current === "/blogs-2/") body = blogPage();
  else if (blogPageMatch) body = blogPage(Number(blogPageMatch[1]));
  else if (aecCategoryMatch && aecServiceCategoryRoutes.includes(current)) body = aecServiceCategoryPage(Number(aecCategoryMatch[1] || aecCategoryMatch[3] || 1), aecCategoryMatch[2] || "");
  else if (current === "/ai-in-construction/" || current === "/ai-in-construction-key-benefits-challenges-applications-and-future-trends/") body = aiConstructionArticlePage();
  else if (current === "/construction-documentation-errors/") body = constructionDocumentationArticlePage();
  else if (current === "/millwork-shop-drawing-errors/") body = millworkShopDrawingErrorsArticlePage();
  else if (current === "/mep-in-construction/") body = mepConstructionArticlePage();
  else if (current === "/bim-for-architects/") body = bimForArchitectsArticlePage();
  else if (current === "/shop-drawings-vs-as-built-drawings/") body = shopDrawingsVsAsBuiltArticlePage();
  else if (current === "/bim-in-construction/") body = bimInConstructionArticlePage();
  else if (current === "/drones-in-construction-key-uses-benefits-applications/" || current === "/drone-in-construction/") body = dronesConstructionArticlePage();
  else if (current === "/outsourcing-3d-modeling-services-for-aec-and-engineering-projects/") body = outsourcing3dModelingArticlePage();
  else if (current === "/structural-design-process-of-buildings/" || current === "/step-by-step-process-for-structural-design-of-buildings-projects/") body = structuralDesignProcessArticlePage();
  else if (current === "/value-engineering-in-construction-stages-benefits/") body = valueEngineeringConstructionArticlePage();
  else if (current === "/7-stages-of-construction-a-complete-guide-for-successful-project/" || current === "/7-stages-of-construction-a-complete-guide/") body = constructionStagesArticlePage();
  else if (current === "/architectural-design-phases/") body = architecturalDesignPhasesArticlePage();
  else if (current === "/parametric-modeling-vs-generative-modeling/") body = parametricVsGenerativeArticlePage();
  else if (current === "/oem-vs-odm/") body = oemVsOdmArticlePage();
  else if (current === "/3d-lidar-scanning-is-the-backbone-of-scan-to-bim-process/") body = lidarScanToBimArticlePage();
  else if (current === "/types-of-architectural-drawings/") body = architecturalDrawingsArticlePage();
  else if (current === "/outsourcing-engineering-services/") body = outsourcingEngineeringServicesPage();
  else if (current === "/role-of-architectural-engineering/") body = architecturalEngineeringArticlePage();
  else if (current === "/architectural-drafting/") body = architecturalDraftingArticlePage();
  else if (current === "/right-engineering-design-partner/") body = engineeringDesignPartnerArticlePage();
  else if (current === "/outsourcing-engineering-service/") body = outsourcingEngineeringServiceArticlePage();
  else if (current === "/top-engineering-outsourcing-services-in-india/") body = engineeringOutsourcingIndiaArticlePage();
  else if (current === "/top-bim-outsourcing-services/") body = bimOutsourcingArticlePage();
  else if (current === "/work-culture-at-milestone/") body = workCulturePage();
  else if (current === "/life-at-milestone/") body = lifeAtMilestonePage();
  else if (current === "/faq/") body = faqPage();
  else if (current === "/company-overview-page/") body = companyOverviewPage();
  else if (current === "/company-overview/awards-recognitions/") body = awardsRecognitionsPage();
  else if (current === "/company-overview/why-milestone/") body = whyMilestonePage();
  else if (current === "/data-security-confidentiality/") body = dataSecurityPage();
  else if (staticPages[current]) body = staticPage(staticPages[current]);
  else body = articlePage(titleFromPath(current));
  $("#app").innerHTML = `${header()}${body}${footer()}`;
  document.title = searchQuery
    ? `Search results for '${searchQuery}' | Milestone PLM Solutions`
    : `${titleFromPath(current === "/" ? "Engineering Design & BIM Services" : current)} | Milestone PLM Solutions`;
  bindInteractions();
}
