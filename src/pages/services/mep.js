import { mepServiceShell } from "../../components/service-layout.js";

export const mepHeroPages = {
  "/service/mep-bim-services/": {
    title: "MEP BIM Services",
    image: "/assets/images/services/detail/mep-bim-services-reference-MEP-BIM-Services-2.jpg"
  },
  "/service/mep-drafting-services/": {
    title: "MEP Drafting",
    image: "/assets/images/services/detail/mep-drafting-services-reference-MEP-Drafting-1.jpg"
  },
  "/service/mep-bim-modeling-services/": {
    title: "MEP BIM Modeling",
    image: "/assets/images/services/detail/mep-bim-modeling-services-reference-MEP-BIM-MODELING-1.jpg"
  },
  "/service/mep-coordination/": {
    title: "MEP Coordination",
    image: "/assets/images/services/detail/mep-coordination-reference-MEP-Coordination.jpg"
  },
  "/service/mep-shop-drawing/": {
    title: "MEP Shop Drawing Services",
    image: "/assets/images/services/detail/mep-shop-drawing-reference-MEP-SHOP-DRAWINGS.jpg"
  },
  "/service/mechanical-cad/": {
    title: "Mechanical CAD",
    image: "/assets/images/services/detail/mechanical-cad-reference-MECHANICAL-CAD-1.jpg"
  },
  "/service/electrical-drawings/": {
    title: "Electrical Drawings",
    image: "/assets/images/services/detail/electrical-drawings-reference-ELECTRICAL-DRAWINGS.jpg"
  },
  "/service/as-built-drafting/": {
    title: "As-Built Drafting",
    image: "/assets/images/services/detail/as-built-drafting-reference-AS-BUILT-DRAFTING-1.jpg"
  }
};

export const mepServiceRoutes = Object.keys(mepHeroPages);

export function mepHeroPage(currentPath) {
  const page = mepHeroPages[currentPath];
  if (!page) return "";
  const content = `
    <h2>${page.title}</h2>
    <p>Milestone PLM Solutions provides precise, scalable and high-quality ${page.title.toLowerCase()} for engineering, construction, manufacturing and AEC teams across global markets.</p>
    <p>Our team supports complete project lifecycles with CAD, BIM, drafting, modeling, documentation, analysis and coordination workflows. Deliverables are prepared around client standards, quality checks, security discipline and fast turnaround needs.</p>
    <h3>${page.title} Includes:</h3>
    <ul class="check-list">
      <li>Project setup and standards alignment</li>
      <li>Modeling, drafting and documentation support</li>
      <li>Quality checks by experienced engineers</li>
      <li>Coordination with architecture, structure and MEP teams</li>
      <li>Flexible fixed-price, dedicated-resource and time-material models</li>
    </ul>`;
  return mepServiceShell({
    title: page.title,
    image: page.image,
    activeHref: currentPath
  }, content);
}
