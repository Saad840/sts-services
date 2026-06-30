import { asset, allServices, recentPosts, testimonials } from "../../data/index.js";

export const serviceCategoryIntros = {
  "BIM Services": {
    image: "/assets/images/services/detail/bim-services-bim-modeling.jpg",
    copy: "BIM modeling, coordination, family creation, scan-to-BIM, scheduling and quantity workflows for construction teams."
  },
  "Architectural Services": {
    image: "/assets/images/services/detail/architectural-bim-modeling-banner.jpg",
    copy: "Architectural visualization, BIM modeling, construction documentation, drafting and design support."
  },
  "Structural Services": {
    image: "/assets/images/services/detail/structural-bim-hero.jpg",
    copy: "Structural BIM, detailing, shop drawings, rebar, precast and construction documentation services."
  },
  "MEP Services": {
    image: "/assets/images/services/detail/mep-bim-services-reference-MEP-BIM-Services-2.jpg",
    copy: "Coordinated mechanical, electrical and plumbing BIM, drafting, shop drawing and as-built support."
  },
  "Facade & Glazing Services": {
    image: "/assets/images/services/detail/bim-shop-drawings.jpg",
    copy: "Curtain wall, storefront, glass entrance, cladding, sunshade and facade detailing support for commercial building teams."
  },
  "Engineering Solutions": {
    image: "/assets/images/services/detail/engineering-solutions.jpg",
    copy: "Product design, CAD detailing, manufacturing support, simulation, documentation and rapid prototyping."
  },
  "Staffing": {
    image: "/assets/images/services/detail/contract-staffing-services-hero.jpg",
    copy: "Flexible engineering staffing, millwork drafting and modeling support for specialized delivery needs."
  }
};

export const serviceImageMap = {
  "BIM Modeling": "/assets/images/services/detail/bim-modeling.jpg",
  "BIM Coordination": "/assets/images/services/detail/bim-coordination.jpg",
  "Revit Family Creation": "/assets/images/services/detail/revit-families.png",
  "Shop Drawings": "/assets/images/services/detail/bim-shop-drawings.jpg",
  "COBie Services": "/assets/images/services/detail/cobie-services.jpg",
  "Scan to BIM": "/assets/images/services/detail/scan-to-bim.jpg",
  "4D BIM - Construction Simulation": "/assets/images/services/detail/4d-bim-construction-simulation.jpg",
  "5D BIM": "/assets/images/services/detail/5d-bim-services.jpg",
  "3D rendering services": "/assets/images/services/detail/3d-rendering-services.jpg",
  "Architectural 3D Modeling": "/assets/images/services/detail/architectural-3d-modeling.jpg",
  "Architectural BIM Modeling": "/assets/images/services/detail/architectural-bim-modeling-banner.jpg",
  "Revit BIM Services": "/assets/images/services/detail/revit-bim-services.jpg",
  "Architectural Construction Docs": "/assets/images/services/detail/architectural-construction-docs-reference-Architectural-Construction-Docs.jpg",
  "Modular BIM": "/assets/images/services/detail/architectural-modular-bim.jpg",
  "Architectural 2D Drafting": "/assets/images/services/detail/architectural-2d-drafting-content.jpg",
  "Lighting Design": "/assets/images/services/detail/architectural-visualization.jpg",
  "Structural BIM": "/assets/images/services/detail/structural-bim-hero.jpg",
  "Steel Detailing": "/assets/images/services/detail/steel-detailing-hero.jpg",
  "Precast Detailing": "/assets/images/services/detail/precast-detailing-hero.jpg",
  "Structural Shop Drawing Services": "/assets/images/services/detail/structural-shop-drawings-reference-Structural-Shop-Drawings.jpg",
  "Rebar Detailing Services": "/assets/images/services/detail/rebar-detailing-hero.jpg",
  "Structural Construction Documentation Services": "/assets/images/services/detail/structural-construction-document-reference-Construction-Docs.jpg",
  "Structural 3D Modeling Services": "/assets/images/services/detail/structural-3d-modeling-hero.jpg",
  "Structural 2d drafting": "/assets/images/services/detail/structural-2d-drafting-hero.jpg",
  "MEP BIM Services": "/assets/images/services/detail/mep-bim-services-reference-MEP-BIM-Services-2.jpg",
  "MEP Drafting": "/assets/images/services/detail/mep-drafting-services-reference-MEP-Drafting.jpg",
  "MEP BIM Modeling": "/assets/images/services/detail/mep-bim-modeling-services-reference-MEP-BIM-Modeling.jpeg",
  "MEP Coordination": "/assets/images/services/detail/mep-coordination-reference-MEP-Coordination.jpg",
  "MEP Shop Drawing Services": "/assets/images/services/detail/mep-shop-drawing-reference-MEP-SHOP-DRAWINGS.jpg",
  "Mechanical CAD": "/assets/images/services/detail/mechanical-cad-reference-MEP-Mechanical-CAD.jpg",
  "Electrical Drawings": "/assets/images/services/detail/electrical-drawings-reference-ELECTRICAL-DRAWINGS.jpg",
  "As-Built Drafting": "/assets/images/services/detail/as-built-drafting-reference-AS-BUILT-DRAFTING-1.jpg",
  "Curtain Wall Shop Drawings": "/assets/images/services/detail/bim-shop-drawings.jpg",
  "Storefront Glazing Shop Drawings": "/assets/images/services/detail/architectural-construction-docs-reference-Architectural-Construction-Docs.jpg",
  "All-Glass Entrances & Partitions": "/assets/images/services/detail/architectural-3d-modeling.jpg",
  "Metal Panel & Cladding Shop Drawings": "/assets/images/services/detail/structural-shop-drawings-hero.jpg",
  "Sunshade Detailing": "/assets/images/services/detail/architectural-2d-drafting-content.jpg",
  "Product Design & Development": "/assets/images/services/detail/product-design-and-development-hero.jpg",
  "CAD & Detailing": "/assets/images/services/Structural-2D-Drafting-Services-255x182.jpg",
  "Manufacturing Support": "/assets/images/case-study/ManufacturingSupport2-2-e1618308562252-334x195.jpg",
  "Automotive Design": "/assets/images/case-study/meshing1-1.jpg",
  "CFD & FEA": "/assets/images/case-study/CAE-Product-Testing-1-350x195.png",
  "Meshing Services": "/assets/images/case-study/moldflow1-350x195.jpg",
  "Aftermarket/ Engg. Documentation": "/assets/images/services/Construction-Docs-255x182.jpg",
  "Value Engineering & Value Analysis": "/assets/images/case-study/designproject2-350x195.jpg",
  "Rapid Prototyping": "/assets/images/case-study/packagingmachinery1-1-350x195.jpg",
  "Contract Staffing": "/assets/images/services/detail/contract-staffing-services-hero.jpg",
  "Millwork Design": "/assets/images/services/detail/millwork-drafting-services-hero.jpg",
  "Furniture Modeling": "/assets/images/case-study/furniture-cadsupport3-1-350x195.jpg"
};

export const serviceImagePositionMap = {};

export const industryIconMap = {
  "Retail Shops": "/assets/icons/cart.svg",
  "Office & Commercial": "/assets/icons/building.svg",
  "Residential": "/assets/icons/home.svg",
  "Restaurants & Hotels": "/assets/icons/hotel.svg",
  "Educational institutions": "/assets/icons/university.svg",
  "Government buildings": "/assets/icons/building.svg",
  "Public libraries and Museums": "/assets/icons/museum.svg",
  "Healthcare facilities": "/assets/icons/healthcare.svg",
  "Construction": "/assets/icons/crane.svg",
  "Construction Services": "/assets/icons/crane.svg",
  "General Contracting": "/assets/icons/building.svg",
  "Home Building": "/assets/icons/home.svg",
  "Architects": "/assets/icons/university.svg",
  "Retail": "/assets/icons/cart.svg",
  "Commercial Building": "/assets/icons/building.svg",
  "Residential Building": "/assets/icons/home.svg",
  "Commercial": "/assets/icons/drafting.svg",
  "Public": "/assets/icons/public.svg",
  "Education": "/assets/icons/university.svg",
  "Sports": "/assets/icons/sports.svg",
  "Automotive": "/assets/icons/car.svg",
  "Industrial & Heavy Equipment": "/assets/icons/factory.svg",
  "Machinery & Robotics": "/assets/icons/robot.svg",
  "Precision Manufacturing": "/assets/icons/puzzle.svg",
  "Commercial Buildings": "/assets/icons/building.svg",
  "Residential Buildings": "/assets/icons/home.svg"
};

export const servicesReferenceCards = [
  ["structural 2D Drafting Services", "/service/structural-2d-drafting/", "/assets/images/services/Structural-2D-Drafting-Services-255x182.jpg"],
  ["MEP 3D Modeling", "/service/mep-3d-modeling/", "/assets/images/services/millwork-255x182.jpg"],
  ["MEP BIM Services", "/service/mep-bim-services/", "/assets/images/services/MEP-BIM-Services-1-255x182.jpg"],
  ["As-Built Drafting", "/service/as-built-drafting/", "/assets/images/services/MEP-As-Built-Drafting-255x182.jpg"],
  ["Electrical Drawings", "/service/electrical-drawings/", "/assets/images/services/MEP-Electrical-Drawings-1-255x182.jpg"],
  ["Mechanical CAD", "/service/mechanical-cad/", "/assets/images/services/MEP-Mechanical-CAD-255x182.jpg"],
  ["MEP Shop Drawing Services", "/service/mep-shop-drawing/", "/assets/images/services/MEP-Shop-drawing-255x182.jpg"],
  ["MEP Coordination", "/service/mep-coordination/", "/assets/images/services/MEP-Coordination-1-255x182.jpg"],
  ["Structural 3D Modeling Services", "/service/structural-3d-modeling/", "/assets/images/services/Structural-3D-Modeling-255x182.jpg"],
  ["Structural Construction Documentation Services", "/service/structural-construction-document/", "/assets/images/services/Construction-Docs-255x182.jpg"],
  ["Rebar Detailing Services", "/service/rebar-detailing/", "/assets/images/services/Structural-Rebar-Detailing-255x182.jpg"],
  ["Precast Detailing", "/service/precast-detailing/", "/assets/images/services/Structural-Precast-Detailing-255x182.jpg"],
  ["Steel Detailing", "/service/steel-detailing/", "/assets/images/services/Structural-Steel-Detailing-255x182.jpg"],
  ["Structural BIM", "/service/structural-bim/", "/assets/images/services/Structural-BIM-255x182.jpg"],
  ["Curtain Wall Shop Drawings", "/service/curtain-wall-shop-drawings/", "/assets/images/services/BIM-Shop-Drawings-255x182.jpg"],
  ["Storefront Glazing Shop Drawings", "/service/storefront-glazing-shop-drawings/", "/assets/images/services/Architectural-Construction-Docs-255x182.jpg"],
  ["All-Glass Entrances & Partitions", "/service/all-glass-entrances-partitions/", "/assets/images/services/Architectural-Modular-BIM-2-255x182.jpg"],
  ["Metal Panel & Cladding Shop Drawings", "/service/metal-panel-cladding-shop-drawings/", "/assets/images/services/Structural-Steel-Detailing-255x182.jpg"],
  ["Sunshade Detailing", "/service/sunshade-detailing/", "/assets/images/services/Architectural-Construction-Docs-255x182.jpg"],
  ["Modular BIM", "/service/modular-bim-services/", "/assets/images/services/Architectural-Modular-BIM-2-255x182.jpg"],
  ["Architectural Construction Docs", "/service/architectural-construction-docs/", "/assets/images/services/Architectural-Construction-Docs-255x182.jpg"],
  ["4D BIM - Construction Simulation", "/service/4d-bim-construction-simulation/", "/assets/images/services/4D-BIM-Construction-Simulation-255x182.jpg"],
  ["COBie Services", "/service/cobie-services/", "/assets/images/services/COBie-Services-255x182.jpg"],
  ["Shop Drawings", "/service/shop-drawings/", "/assets/images/services/BIM-Shop-Drawings-255x182.jpg"]
];

export const servicesNewsDates = ["March 31, 2026", "February 27, 2026"];

export function servicesReferenceCard([title, href, image]) {
  return `<a class="services-ref-card" href="${href}">
    <img src="${image}" alt="${title}" loading="lazy">
    <span class="services-ref-card-overlay"></span>
    <span class="services-ref-card-copy"><strong>${title}</strong><em>Read more</em></span>
  </a>`;
}

export function servicesReferenceSidebar() {
  const [name, role, quote] = testimonials[0];
  return `<aside class="services-ref-sidebar">
    <section class="services-ref-help">
      <h3>How can we help you?</h3>
      <p>Contact us or submit a business inquiry online.</p>
      <a class="services-ref-contact" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a>
    </section>
    <a class="services-ref-presentation" href="/company-overview/">Company Presentation</a>
    <section class="services-ref-testimonial">
      <p>${quote}</p>
      <div>
        <img src="${asset("2018/10/placeholder-6-50x50.gif")}" alt="">
        <strong>${name}</strong>
        <span>${role}</span>
      </div>
    </section>
    <section class="services-ref-news">
      <h2>Recent News</h2>
      ${recentPosts.slice(0, 2).map(([title, href], index) => `<article><a href="${href}">${title}</a><span>${servicesNewsDates[index]}</span></article>`).join("")}
    </section>
  </aside>`;
}

export function industryItem([icon, label]) {
  const src = label === "General Contracting" && ["A", "â–³"].includes(icon)
    ? "/assets/icons/drafting.svg"
    : industryIconMap[label] || (String(icon).startsWith("/assets/") ? icon : "");
  const iconMarkup = src ? `<img src="${src}" alt="">` : icon;
  return `<div><span>${iconMarkup}</span><strong>${label}</strong></div>`;
}

export function groupedServices() {
  return allServices.reduce((groups, service) => {
    if (!groups.has(service.category)) groups.set(service.category, []);
    groups.get(service.category).push(service);
    return groups;
  }, new Map());
}

export function serviceLandingCard(service) {
  const image = serviceImageMap[service.title] || serviceCategoryIntros[service.category]?.image || "/assets/images/home/services-background.jpg";
  const imagePosition = serviceImagePositionMap[service.title];
  return `
    <a class="services-landing-card" href="${service.href}" aria-label="Open ${service.title}">
      <img src="${image}" alt="${service.title}" loading="lazy"${imagePosition ? ` style="object-position: ${imagePosition};"` : ""}>
      <span>${service.category}</span>
      <h3>${service.title}</h3>
      <b>Read more</b>
    </a>`;
}

export const pricingAccordions = [
  {
    title: "Pricing And Consulting Engagement Options",
    open: true,
    bullets: [
      "Hourly rates are available, based on your volume of work and type of work",
      "Full-time Equivalent - rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
      "Refer outsourcing model for more details."
    ]
  },
  { title: "Data Security & Confidentiality" },
  { title: "Quality Philosophy" }
];

export const commonBuildingIndustries = [
  ["$", "Retail Shops"],
  ["#", "Office & Commercial"],
  ["^", "Residential"],
  ["%", "Restaurants & Hotels"],
  ["=", "Educational institutions"],
  ["[]", "Government buildings"],
  ["*", "Public libraries and Museums"],
  ["+", "Healthcare facilities"]
];

export function serviceAccordions() {
  return `<section class="coordination-accordions">${pricingAccordions.map((item) => `
    <article class="coordination-accordion ${item.open ? "open" : ""}">
      <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "-" : "+"}</button></div>
      ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
    </article>
  `).join("")}</section>`;
}

export function serviceIndustries(items = commonBuildingIndustries) {
  return `<h2>Range of industries</h2><div class="coordination-industries ${items.length <= 5 ? "revit-industries" : ""}">${items.map(industryItem).join("")}</div><hr>`;
}

export function serviceInfoBoxes() {
  const boxes = [
    {
      title: "What are BIM modeling services, and how do they benefit the construction industry?",
      body: ["BIM modeling services involve the creation and management of digital representations of the physical and functional characteristics of a building or infrastructure. These services facilitate collaboration among various stakeholders in the construction process. Benefits include improved project visualization, enhanced coordination, reduced errors, and better decision-making throughout the project lifecycle."]
    },
    {
      title: "Pricing And Consulting Engagement Options",
      bullets: [
        "Hourly rates are available, based on your volume of work and type of work",
        "Full-time Equivalent – rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    {
      title: "Data Security & Confidentiality",
      lead: "Being ISO/IEC 27001 Certified:",
      bullets: [
        "Milestone Systematically examine the customer’s information security risks, taking account of the threats, vulnerabilities, and impacts;",
        "Design and implement a coherent and comprehensive suite of information security controls and",
        "Adopt an overarching management process to ensure that the information security controls continue to meet the customers’s information security needs on an ongoing basis."
      ]
    },
    {
      title: "Quality Philosophy",
      bullets: [
        "Standards and methodologies for project management quality assurance",
        "Effective processes to support arrangements for good governance and accountability;",
        "Input from individuals with the appropriate subject or technical expertise to ensure the development of outputs that are fit for the purpose."
      ]
    }
  ];

  return `<section class="service-info-boxes">${boxes.map((box, index) => `
    <article class="service-info-box ${index === 0 ? "open" : ""}">
      <div class="service-info-title"><h3>${box.title}</h3><button type="button" aria-label="${index === 0 ? "Collapse" : "Expand"} ${box.title}">${index === 0 ? "–" : "+"}</button></div>
      <div class="service-info-content">
        ${box.lead ? `<p class="service-info-lead">${box.lead}</p>` : ""}
        ${(box.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
        ${box.bullets ? `<ul class="check-list service-info-list">${box.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `).join("")}</section>`;
}
