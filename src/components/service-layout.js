import { asset, allServices, testimonials } from "../data/index.js";

export function testimonialSection() {
  return `<section class="section testimonials"><div class="container"><h2>Testimonials</h2><div class="testimonial-grid">${testimonials.map(([name, role, quote]) => `<article><p>${quote}</p><div><img src="${asset("2018/10/placeholder-6-50x50.gif")}" alt=""><strong>${name}</strong><span>${role}</span></div></article>`).join("")}</div></div></section>`;
}

export function sidebar() {
  return `<aside class="sidebar"><div class="help-box"><h3>How can we help you?</h3><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/">Contact Us</a></div><nav class="side-nav">${allServices.slice(0, 12).map((s) => `<a href="${s.href}">${s.title}</a>`).join("")}<a href="/case-study/">Case Study</a></nav>${testimonialMini()}</aside>`;
}

const serviceFamilyConfig = {
  bim: {
    sidebarClass: "",
    heroClass: "",
    pageClass: "",
    crumbs: [["Home", "/"], ["Services", "/services/"], ["AEC", "/stm_service_category/aec-services/"], ["BIM Services", "/services/bim-services/"]],
    links: [
      ["BIM Modeling", "/service/bim-modeling/"],
      ["BIM Coordination", "/service/bim-coordination/"],
      ["Revit Family Creation", "/service/revit-family-creation/"],
      ["Shop Drawings", "/service/shop-drawings/"],
      ["COBie Services", "/service/cobie-services/"],
      ["Scan to BIM", "/service/scan-to-bim/"],
      ["4D BIM - Construction Simulation", "/service/4d-bim-construction-simulation/"],
      ["5D BIM - Cost Estimation & Quantity Takeoff", "/service/5d-bim-cost-estimation-quantity-takeoff/"],
      ["Case Study", "/case-study/"]
    ]
  },
  architectural: {
    sidebarClass: "architectural-sidebar",
    heroClass: "architectural-hero",
    pageClass: "architectural-page",
    crumbs: [["Home", "/"], ["Services", "/services/"], ["AEC", "/stm_service_category/aec-services/"]],
    links: [
      ["Architectural BIM Modeling", "/service/architectural-bim-modeling-services/"],
      ["Architectural 2D Drafting", "/service/architectural-2d-drafting-services/"],
      ["3D Rendering Services", "/service/3d-architectural-visualization-3d-rendering-services/"],
      ["Architectural Construction Docs", "/service/architectural-construction-docs/"],
      ["MEP BIM Modeling", "/service/mep-bim-modeling-services/"],
      ["MEP Drafting", "/service/mep-drafting-services/"],
      ["Scan to BIM", "/service/scan-to-bim/"],
      ["Furniture Modeling", "/service/furniture-modeling/"],
      ["Revit Family Creation", "/service/revit-family-creation/"],
      ["Millwork Drafting Services", "/service/millwork-drafting-services/"],
      ["Lighting Design", "/service/lighting-design-services/"],
      ["Case Study", "/case-study/"]
    ]
  },
  structural: {
    sidebarClass: "structural-sidebar",
    heroClass: "structural-hero",
    pageClass: "structural-page",
    crumbs: [["Home", "/"], ["Services", "/services/"], ["AEC", "/stm_service_category/aec-services/"], ["Structural", "/stm_service_category/structural-services/"]],
    links: [
      ["Structural BIM", "/service/structural-bim/"],
      ["Steel Detailing", "/service/steel-detailing/"],
      ["Precast Detailing", "/service/precast-detailing/"],
      ["Rebar Detailing", "/service/rebar-detailing/"],
      ["Shop Drawings", "/service/structural-shop-drawings/"],
      ["Construction Docs", "/service/structural-construction-document/"],
      ["Furniture Modeling", "/service/furniture-modeling/"],
      ["3D Modeling", "/service/structural-3d-modeling/"],
      ["2D Drafting", "/service/structural-2d-drafting/"],
      ["Case Study", "/case-study/"]
    ]
  },
  engineering: {
    sidebarClass: "engineering-sidebar",
    heroClass: "engineering-hero",
    pageClass: "engineering-page",
    crumbs: [["Home", "/"], ["Services", "/services/"], ["Engineering", "/stm_service_category/engineering/"]],
    links: [
      ["Product Design & Development", "/service/product-design-and-development/"],
      ["CAD & Detailing", "/service/cad-drafting-services/"],
      ["Manufacturing Support", "/service/manufacturing-support/"],
      ["Automotive Design", "/service/automotive-design/"],
      ["CFD & FEA", "/service/fea-services-cfd-cae-simulation/"],
      ["Scan to BIM", "/service/scan-to-bim/"],
      ["Meshing Services", "/service/meshing-services/"],
      ["Aftermarket / Technical Documentation", "/service/technical-documentation-services/"],
      ["Value Engineering & Value Analysis", "/service/value-engineering-value-analysis/"],
      ["Rapid Prototyping", "/service/rapid-prototyping-services/"],
      ["Case Study", "/case-study/"]
    ]
  },
  staffing: {
    sidebarClass: "staffing-sidebar",
    heroClass: "staffing-hero",
    pageClass: "staffing-page",
    crumbs: [["Home", "/"], ["Services", "/services/"], ["Contract Staffing", "/stm_service_category/contract-staffing/"]],
    links: [
      ["Contract Staffing", "/service/contract-staffing-services/"],
      ["Managed Services", "/service/contract-staffing-services/#managed-services"],
      ["Onsite Manpower", "/service/contract-staffing-services/#onsite-manpower"],
      ["Technical Hiring", "/service/contract-staffing-services/#technical-hiring"],
      ["Case Study", "/case-study/"]
    ]
  },
  mep: {
    sidebarClass: "mep-sidebar",
    heroClass: "mep-hero",
    pageClass: "mep-page",
    crumbs: [["Home", "/"], ["Services", "/services/"], ["MEP", "/stm_service_category/mep-services/"]],
    links: [
      ["MEP BIM Services", "/service/mep-bim-services/"],
      ["MEP Drafting", "/service/mep-drafting-services/"],
      ["MEP BIM Modeling", "/service/mep-bim-modeling-services/"],
      ["MEP Coordination", "/service/mep-coordination/"],
      ["MEP Shop Drawing Services", "/service/mep-shop-drawing/"],
      ["Mechanical CAD", "/service/mechanical-cad/"],
      ["Electrical Drawings", "/service/electrical-drawings/"],
      ["As-Built Drafting", "/service/as-built-drafting/"],
      ["Case Study", "/case-study/"]
    ]
  },
  facade: {
    sidebarClass: "facade-sidebar",
    heroClass: "facade-hero",
    pageClass: "facade-page",
    crumbs: [["Home", "/"], ["Services", "/services/"], ["Facade & Glazing", "/stm_service_category/facade-glazing-services/"]],
    links: [
      ["Curtain Wall Shop Drawings", "/service/curtain-wall-shop-drawings/"],
      ["Storefront Glazing Shop Drawings", "/service/storefront-glazing-shop-drawings/"],
      ["All-Glass Entrances & Partitions", "/service/all-glass-entrances-partitions/"],
      ["Metal Panel & Cladding Shop Drawings", "/service/metal-panel-cladding-shop-drawings/"],
      ["Sunshade Detailing", "/service/sunshade-detailing/"],
      ["Case Study", "/case-study/"]
    ]
  }
};

function serviceFamilySidebar(family, activeHref) {
  const config = serviceFamilyConfig[family];
  return `<aside class="coordination-sidebar ${config.sidebarClass}">
    <h3>How can we help you?</h3>
    <div class="coordination-help"><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></div>
    <a class="presentation-btn" href="/company-overview/">Company Presentation</a>
    <nav>${config.links.map(([label, href]) => `<a class="${label === "Case Study" ? "case-link" : ""} ${href === activeHref ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
    ${testimonialMini()}
  </aside>`;
}

function breadcrumbTrail(items, current) {
  return [...items.map(([label, href]) => `<a href="${href}">${label}</a>`), current].join(" <span>&gt;</span> ");
}

function serviceFamilyHero(family, { title, image, crumb = title, heroClass = "" }) {
  const config = serviceFamilyConfig[family];
  return `<section class="coordination-hero ${config.heroClass} ${heroClass}" style="background-image:url('${image}')">
    <div class="container">
      <nav>${breadcrumbTrail(config.crumbs, crumb)}</nav>
      <h1>${title}</h1>
    </div>
  </section>`;
}

function serviceFamilyShell(family, config, inner) {
  const familyConfig = serviceFamilyConfig[family];
  return `
    ${serviceFamilyHero(family, config)}
    <main id="main" class="section coordination-page ${familyConfig.pageClass}">
      <div class="container coordination-layout">
        ${serviceFamilySidebar(family, config.activeHref)}
        <article class="coordination-content">${inner}</article>
      </div>
    </main>
    <section class="pilot-cta"><div class="container"><h2>Try us with FREE PILOT Project</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
  `;
}

export function bimServiceSidebar(activeHref) {
  return serviceFamilySidebar("bim", activeHref);
}

export function testimonialMini() {
  return `<div class="mini-testimonial"><p>${testimonials[0][2]}</p><strong>${testimonials[0][0]}</strong><span>${testimonials[0][1]}</span></div>`;
}

export function bimHero({ title, image, crumb = title }) {
  return serviceFamilyHero("bim", { title, image, crumb });
}

export function bimServiceShell(config, inner) {
  return serviceFamilyShell("bim", config, inner);
}

export function architecturalServiceSidebar(activeHref) {
  return serviceFamilySidebar("architectural", activeHref);
}

export function architecturalHero({ title, image, crumb = title, heroClass = "" }) {
  return serviceFamilyHero("architectural", { title, image, crumb, heroClass });
}

export function architecturalServiceShell(config, inner) {
  return serviceFamilyShell("architectural", config, inner);
}

export function structuralServiceSidebar(activeHref) {
  return serviceFamilySidebar("structural", activeHref);
}

export function structuralHero({ title, image, crumb = title }) {
  return serviceFamilyHero("structural", { title, image, crumb });
}

export function structuralServiceShell(config, inner) {
  return serviceFamilyShell("structural", config, inner);
}

export function engineeringServiceSidebar(activeHref) {
  return serviceFamilySidebar("engineering", activeHref);
}

export function engineeringHero({ title, image, crumb = title }) {
  return serviceFamilyHero("engineering", { title, image, crumb });
}

export function engineeringServiceShell(config, inner) {
  return serviceFamilyShell("engineering", config, inner);
}

export function staffingServiceSidebar(activeHref) {
  return serviceFamilySidebar("staffing", activeHref);
}

export function staffingHero({ title, image, crumb = title }) {
  return serviceFamilyHero("staffing", { title, image, crumb });
}

export function staffingServiceShell(config, inner) {
  return serviceFamilyShell("staffing", config, inner);
}

export function mepServiceSidebar(activeHref) {
  return serviceFamilySidebar("mep", activeHref);
}

export function mepHero({ title, image, crumb = title }) {
  return serviceFamilyHero("mep", { title, image, crumb });
}

export function mepServiceShell(config, inner) {
  return serviceFamilyShell("mep", config, inner);
}

export function facadeServiceSidebar(activeHref) {
  return serviceFamilySidebar("facade", activeHref);
}

export function facadeHero({ title, image, crumb = title }) {
  return serviceFamilyHero("facade", { title, image, crumb });
}

export function facadeServiceShell(config, inner) {
  return serviceFamilyShell("facade", config, inner);
}
