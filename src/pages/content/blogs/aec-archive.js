import { blogArchives, blogTags } from "./shared.js";

const aecArchiveExcerpt = "Bonds and commodities are much more stable than stocks and trades. We allow our clients to invest in the right bonds & commodities.";
const aecArchivePageSize = 12;
const aecArchiveSeedPages = [
  [
    ["MEP Clash Detection Services", "/service/mep-clash-detection-services/", "November 14, 2023", "madhusudan pandey", "", aecArchiveExcerpt],
    ["structural 2D Drafting Services", "/service/structural-2d-drafting/", "July 22, 2023", "madhusudan pandey", "Structural-2D-Drafting-Services.jpg", aecArchiveExcerpt],
    ["MEP BIM Services", "/service/mep-bim-services-2/", "July 17, 2023", "madhusudan pandey", "", aecArchiveExcerpt],
    ["MEP 3D Modeling", "/service/mep-3d-modeling/", "July 17, 2023", "madhusudan pandey", "millwork.jpg", aecArchiveExcerpt],
    ["MEP BIM Services", "/service/mep-bim-services/", "May 11, 2023", "madhusudan pandey", "MEP-BIM-Services-1-1110x550.jpg", aecArchiveExcerpt],
    ["As-Built Drafting", "/service/as-built-drafting/", "May 11, 2023", "madhusudan pandey", "MEP-As-Built-Drafting-1110x550.jpg", aecArchiveExcerpt],
    ["Electrical Drawings", "/service/electrical-drawings/", "May 10, 2023", "madhusudan pandey", "MEP-Electrical-Drawings-1-1110x550.jpg", aecArchiveExcerpt],
    ["Mechanical CAD", "/service/mechanical-cad/", "May 10, 2023", "madhusudan pandey", "MEP-Mechanical-CAD-1110x550.jpg", aecArchiveExcerpt],
    ["MEP Shop Drawing Services", "/service/mep-shop-drawing/", "May 10, 2023", "madhusudan pandey", "MEP-Shop-drawing-1080x550.jpg", aecArchiveExcerpt],
    ["MEP Coordination", "/service/mep-coordination/", "May 10, 2023", "madhusudan pandey", "MEP-Coordination-1-1110x550.jpg", aecArchiveExcerpt],
    ["Structural 3D Modeling Services", "/service/structural-3d-modeling/", "May 10, 2023", "madhusudan pandey", "Structural-3D-Modeling-1110x550.jpg", aecArchiveExcerpt],
    ["Structural Construction Documentation Services", "/service/structural-construction-document/", "May 10, 2023", "madhusudan pandey", "Construction-Docs-1110x550.jpg", aecArchiveExcerpt]
  ],
  [
    ["Rebar Detailing Services", "/service/rebar-detailing/", "May 8, 2023", "madhusudan pandey", "Structural-Rebar-Detailing-1110x550.jpg", aecArchiveExcerpt],
    ["Precast Detailing", "/service/precast-detailing/", "May 8, 2023", "madhusudan pandey", "Structural-Precast-Detailing-1110x550.jpg", aecArchiveExcerpt],
    ["Steel Detailing", "/service/steel-detailing/", "May 8, 2023", "madhusudan pandey", "Structural-Steel-Detailing-1110x550.jpg", aecArchiveExcerpt],
    ["Structural BIM", "/service/structural-bim/", "May 8, 2023", "madhusudan pandey", "Structural-BIM-1110x550.jpg", aecArchiveExcerpt],
    ["Modular BIM", "/service/modular-bim-services/", "May 4, 2023", "madhusudan pandey", "Architectural-Modular-BIM-2-1110x550.jpg", aecArchiveExcerpt],
    ["Architectural Construction Docs", "/service/architectural-construction-docs/", "May 4, 2023", "madhusudan pandey", "Architectural-Construction-Docs-1110x550.jpg", aecArchiveExcerpt],
    ["4D BIM - Construction Simulation", "/service/4d-bim-construction-simulation/", "May 3, 2023", "madhusudan pandey", "4D-BIM-Construction-Simulation-1110x550.jpg", aecArchiveExcerpt],
    ["COBie Services", "/service/cobie-services/", "May 3, 2023", "madhusudan pandey", "COBie-Services-1110x550.jpg", aecArchiveExcerpt],
    ["Shop Drawings", "/service/shop-drawings/", "May 3, 2023", "madhusudan pandey", "BIM-Shop-Drawings-1110x550.jpg", aecArchiveExcerpt],
    ["Revit BIM Services", "/service/revit-bim-services/", "April 25, 2023", "madhusudan pandey", "Revit-BIM-Services-1-1110x550.jpg", aecArchiveExcerpt],
    ["Architectural 3D Modeling", "/service/architectural-3d-modeling/", "April 25, 2023", "madhusudan pandey", "Architectural-3D-Modeling-1110x550.jpg", aecArchiveExcerpt],
    ["5D BIM", "/service/5d-bim-cost-estimation-quantity-takeoff/", "April 25, 2023", "madhusudan pandey", "5D-BIM-Cost-Estimation-Quantity-Takeoff-1110x550.jpg", aecArchiveExcerpt]
  ],
  [
    ["BIM Modeling", "/service/bim-modeling/", "April 25, 2023", "madhusudan pandey", "BIM-Modeling-1110x550.jpg", aecArchiveExcerpt],
    ["Structural Shop Drawing Services", "/service/structural-shop-drawings/", "April 20, 2023", "madhusudan pandey", "Structural-Shop-Drawings-1110x550.jpg", aecArchiveExcerpt],
    ["BIM Coordination", "/service/bim-coordination/", "April 20, 2023", "madhusudan pandey", "BIM-Coordination-1110x550.jpg", aecArchiveExcerpt],
    ["Millwork Drafting Services", "/service/millwork-drafting-services/", "April 5, 2023", "milestoneindia", "Millwork-Drafting-Services-1110x550.jpg", aecArchiveExcerpt],
    ["Contract Staffing", "/service/contract-staffing-services/", "July 24, 2020", "milestoneindia", "contract_staffing1.jpg", aecArchiveExcerpt],
    ["Lighting Design Services", "/service/lighting-design-services/", "July 24, 2020", "milestoneindia", "Lighting_design1.jpg", aecArchiveExcerpt],
    ["Revit Family Creation", "/service/revit-family-creation/", "July 24, 2020", "milestoneindia", "Revit-Families.png", "Using Revit family creation services MILESTONE can create many more items like curtain wall panels, ceilings, furniture, fixtures, counters, plumbing fixtures, electrical fixtures, machine parts, elevators, insulators and HVAC pumps."],
    ["Furniture Modeling", "/service/furniture-modeling/", "July 24, 2020", "milestoneindia", "revit-Furniture.jpg", aecArchiveExcerpt],
    ["Scan to BIM", "/service/scan-to-bim/", "July 24, 2020", "milestoneindia", "Scan-to-BIM-1-1110x550.jpg", aecArchiveExcerpt],
    ["MEP Drafting", "/service/mep-drafting-services/", "July 8, 2020", "milestoneindia", "MEP-Drafting-850x550.jpg", aecArchiveExcerpt],
    ["MEP BIM Modeling", "/service/mep-bim-modeling-services/", "July 8, 2020", "milestoneindia", "MEP-BIM-Modeling.jpeg", aecArchiveExcerpt],
    ["3D Rendering Services", "/service/3d-architectural-visualization-3d-rendering-services/", "July 8, 2020", "milestoneindia", "Architerural-visualization.jpg", aecArchiveExcerpt]
  ],
  [
    ["Architectural 2D Drafting", "/service/architectural-2d-drafting-services/", "July 8, 2020", "milestoneindia", "Architerural-2d-drafting.jpg", aecArchiveExcerpt],
    ["Architectural BIM Modeling", "/service/architectural-bim-modeling-services/", "July 7, 2020", "milestoneindia", "Architectural-Modular-BIM-2-1110x550.jpg", "A specialized BIM outsourcing company, we offer BIM Architecture Services, 3D BIM modeling, 4D and 5D BIM modelling services for all AEC stakeholders."]
  ]
];

// Add new AEC archive entries here. Pagination and static build routes are derived automatically.
const aecArchiveAdditionalRows = [
  // ["New Service Title", "/service/new-service/", "June 23, 2026", "author name", "local-image.jpg", aecArchiveExcerpt]
];

export const aecArchiveServices = [...aecArchiveSeedPages.flat(), ...aecArchiveAdditionalRows].map(([title, href, date, author, image, excerpt]) => ({
  title,
  href,
  date,
  author,
  image: image ? `/assets/images/aec-category/${image}` : "",
  excerpt
}));

function chunkServices(services) {
  return Array.from(
    { length: Math.ceil(services.length / aecArchivePageSize) },
    (_, index) => services.slice(index * aecArchivePageSize, (index + 1) * aecArchivePageSize)
  );
}

const monthNumber = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11
};

const aecArchivePages = chunkServices(aecArchiveServices);
const aecArchiveRoute = (page, archiveSlug = "") => {
  const base = archiveSlug ? `/stm_service_category/aec-services/archive/${archiveSlug}/` : "/stm_service_category/aec-services/";
  return page === 1 ? base : `${base}page/${page}/`;
};
const aecArchiveDateGroups = Object.values(aecArchiveServices.reduce((groups, service) => {
  const [, month, year] = service.date.match(/^([A-Za-z]+)\s+\d{1,2},\s+(\d{4})$/) || [];
  if (!month || !year) return groups;
  const label = `${month} ${year}`;
  const slug = label.toLowerCase().replace(/\s+/g, "-");
  if (!groups[slug]) groups[slug] = { label, slug, dateValue: new Date(Number(year), monthNumber[month.toLowerCase()] ?? 0, 1), services: [] };
  groups[slug].services.push(service);
  return groups;
}, {})).sort((a, b) => b.dateValue - a.dateValue);
const aecArchiveSidebarGroups = blogArchives.map((label) => {
  const [month, year] = label.split(" ");
  const slug = label.toLowerCase().replace(/\s+/g, "-");
  const sourceGroup = aecArchiveDateGroups.find((group) => group.slug === slug);
  return {
    label,
    slug,
    dateValue: new Date(Number(year), monthNumber[month.toLowerCase()] ?? 0, 1),
    services: sourceGroup?.services || []
  };
});
const aecArchiveDatePages = Object.fromEntries(aecArchiveSidebarGroups.map((group) => [group.slug, chunkServices(group.services)]));

export const aecServiceCategoryRoutes = [
  ...aecArchivePages.map((_, index) => aecArchiveRoute(index + 1)),
  ...aecArchiveSidebarGroups.flatMap((group) => {
    const pageCount = Math.max(1, aecArchiveDatePages[group.slug].length);
    return Array.from({ length: pageCount }, (_, index) => aecArchiveRoute(index + 1, group.slug));
  })
];

function serviceArchiveSidebar(activeArchive = "") {
  return `<aside class="blog-sidebar service-archive-sidebar">
    <form class="blog-search search-form" role="search"><label><span class="sr-only">Search</span><input type="search" placeholder="Search..."></label><button type="submit" aria-label="Search"><img src="/assets/icons/search-white.svg" alt=""></button></form>
    <section><h3>Categories</h3><div class="blog-sidebar-links"><a href="/category/architecture/">Architecture</a><a href="/category/manufacturing-support-services/">Manufacturing Support Services</a><a href="/category/mechanical/">Mechanical</a></div></section>
    <section class="service-archive-help"><h3>How can we help you?</h3><p>Contact us or submit a business inquiry online.</p><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></section>
    <section><h3>Archives</h3><div class="blog-sidebar-links">${aecArchiveSidebarGroups.map((archive) => `<a class="${archive.slug === activeArchive ? "active" : ""}" href="${aecArchiveRoute(1, archive.slug)}">${archive.label}</a>`).join("")}</div></section>
    <section><h3>Tags</h3><div class="blog-tags">${blogTags.map((tag) => `<a href="/tag/${tag.replaceAll(" ", "-")}/">${tag}</a>`).join("")}</div></section>
  </aside>`;
}

function serviceArchivePagination(page, pages, archiveSlug = "") {
  const total = pages.length;
  const items = [];
  if (page > 1) items.push(`<a href="${aecArchiveRoute(page - 1, archiveSlug)}" aria-label="Previous page">&lt;</a>`);
  for (let value = 1; value <= total; value += 1) {
    items.push(value === page ? `<span class="active" aria-current="page">${value}</span>` : `<a href="${aecArchiveRoute(value, archiveSlug)}">${value}</a>`);
  }
  if (page < total) items.push(`<a href="${aecArchiveRoute(page + 1, archiveSlug)}" aria-label="Next page">&gt;</a>`);
  return `<nav class="blog-pagination service-archive-pagination" aria-label="AEC archive pages">${items.join("")}</nav>`;
}

export function aecServiceCategoryPage(page = 1, archiveSlug = "") {
  const archive = archiveSlug ? aecArchiveSidebarGroups.find((group) => group.slug === archiveSlug) : null;
  const pages = archive ? aecArchiveDatePages[archive.slug] : aecArchivePages;
  const posts = pages[page - 1] || pages[0] || [];
  return `<section class="service-archive-title">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> <a href="/services/">Services</a> <span>&gt;</span> <a href="/stm_service_category/aec-services/">AEC</a>${archive ? ` <span>&gt;</span> ${archive.label}` : ""}</nav>
        <h1>AEC</h1>
        ${archive ? `<p class="service-archive-filter">Showing services from ${archive.label}</p>` : ""}
      </div>
    </section>
    <main id="main" class="blog-archive-page service-archive-page">
      <div class="container blog-archive-layout service-archive-layout">
        <section class="blog-post-list service-archive-list">${posts.length ? posts.map((post) => `<article class="blog-post-card service-archive-card">
          <h2><a href="${post.href}">${post.title}</a></h2>
          <div class="blog-meta service-archive-meta"><span>${post.date}</span><span>Posted by: ${post.author}</span><span>Categories:</span><span>No Comments</span></div>
          ${post.image ? `<a href="${post.href}"><img src="${post.image}" alt="${post.title}" loading="lazy"></a>` : ""}
          <p>${post.excerpt}</p>
          <a class="blog-read-more" href="${post.href}">Read more <span aria-hidden="true">&gt;</span></a>
        </article>`).join("") : `<p class="service-archive-empty">No AEC services were posted in ${archive?.label || "this archive"}.</p>`}
          ${pages.length > 1 ? serviceArchivePagination(page, pages, archive?.slug || "") : ""}
        </section>
        ${serviceArchiveSidebar(archive?.slug || "")}
      </div>
    </main>`;
}
