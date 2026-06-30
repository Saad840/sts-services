import { allServices } from "../../data/index.js";
import {
  architectural2dDraftingPage,
  architectural3dModelingPage,
  architecturalBimModelingPage,
  architecturalConstructionDocsPage,
  architecturalRenderingPage,
  bimCoordinationPage,
  cobieServicesPage,
  contractStaffingPage,
  engineeringBatchPage,
  engineeringServiceRoutes,
  facadeGlazingPage,
  facadeGlazingServiceRoutes,
  fiveDBimPage,
  fourDBimPage,
  furnitureModelingPage,
  lightingDesignServicesPage,
  mepHeroPage,
  mepServiceRoutes,
  millworkDraftingPage,
  modularBimServicesPage,
  revitBimServicesPage,
  revitFamilyCreationPage,
  scanToBimReferencePage,
  serviceDetail,
  servicesPage,
  shopDrawingsPage,
  structuralBatchPage
} from "../../pages/services.js";

const directServiceRoutes = new Map([
  ["/service/bim-coordination/", bimCoordinationPage],
  ["/service/revit-family-creation/", revitFamilyCreationPage],
  ["/service/shop-drawings/", shopDrawingsPage],
  ["/service/cobie-services/", cobieServicesPage],
  ["/service/scan-to-bim/", scanToBimReferencePage],
  ["/service/4d-bim-construction-simulation/", fourDBimPage],
  ["/service/5d-bim-cost-estimation-quantity-takeoff/", fiveDBimPage],
  ["/service/3d-architectural-visualization-3d-rendering-services/", architecturalRenderingPage],
  ["/service/architectural-3d-modeling/", architectural3dModelingPage],
  ["/service/architectural-bim-modeling-services/", architecturalBimModelingPage],
  ["/service/revit-bim-services/", revitBimServicesPage],
  ["/service/architectural-construction-docs/", architecturalConstructionDocsPage],
  ["/service/modular-bim-services/", modularBimServicesPage],
  ["/service/architectural-2d-drafting-services/", architectural2dDraftingPage],
  ["/service/lighting-design-services/", lightingDesignServicesPage],
  ["/service/millwork-drafting-services/", millworkDraftingPage],
  ["/service/furniture-modeling/", furnitureModelingPage],
  ["/service/contract-staffing-services/", contractStaffingPage]
]);

const structuralRoutes = new Set([
  "/service/structural-bim/",
  "/service/steel-detailing/",
  "/service/precast-detailing/",
  "/service/rebar-detailing/",
  "/service/structural-shop-drawings/",
  "/service/structural-construction-document/",
  "/service/structural-3d-modeling/",
  "/service/structural-2d-drafting/"
]);

export function resolveServiceRoute(current) {
  if (
    current !== "/services/"
    && current !== "/service/"
    && !current.startsWith("/service/")
    && !engineeringServiceRoutes.includes(current)
  ) return undefined;

  const directHandler = directServiceRoutes.get(current);
  if (directHandler) return directHandler();
  if (structuralRoutes.has(current)) return structuralBatchPage(current);
  if (engineeringServiceRoutes.includes(current)) return engineeringBatchPage(current);
  if (mepServiceRoutes.includes(current)) return mepHeroPage(current);
  if (facadeGlazingServiceRoutes.includes(current)) return facadeGlazingPage(current);
  if (current === "/services/" || current === "/service/") return servicesPage();

  const service = allServices.find((item) => item.href === current);
  return service ? serviceDetail(service) : "";
}
