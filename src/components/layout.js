import { asset, offices, navGroups, allServices, testimonials, recentPosts } from "../data/index.js";
import { icons } from "../constants/icons.js";

export function link([label, href]) {
  return `<a href="${href}">${label}</a>`;
}

export function servicesDropdown(group) {
  const groupItems = (name) => group.mega.find(([heading]) => heading === name)?.[1] || [];
  const architectural = groupItems("Architectural Services");
  const staffing = groupItems("Staffing");
  const menu = [
    { label: "BIM Services", href: "/service/bim-modeling/", items: groupItems("BIM Services") },
    { label: "Architectural Services", href: "#", items: architectural.filter(([label]) => label !== "Millwork Design") },
    { label: "Millwork Design", href: "/service/millwork-drafting-services/" },
    { label: "Structural Services", href: "/service/structural-bim/", items: groupItems("Structural Services") },
    { label: "MEP Services", href: "/service/mep-bim-services/", items: groupItems("MEP Services") },
    { label: "Engineering Solutions", href: "/service/product-design-and-development/", items: groupItems("Engineering Solutions") },
    { label: "Contract Staffing", href: staffing[0]?.[1] || "/service/contract-staffing-services/" }
  ];

  return `<li class="has-menu services-root"><a href="${group.href}">${group.label}</a><button class="nav-submenu-toggle" type="button" aria-label="Expand ${group.label}" aria-expanded="false">+</button><div class="services-menu" role="menu">${menu.map((item) => `
    <div class="service-menu-item ${item.items?.length ? "has-subservices" : ""}">
      <a href="${item.href}" role="menuitem">${item.label}${item.items?.length ? "<span aria-hidden=\"true\">›</span>" : ""}</a>
      ${item.items?.length ? `<button class="service-submenu-toggle" type="button" aria-label="Expand ${item.label}" aria-expanded="false">+</button>` : ""}
      ${item.items?.length ? `<div class="subservices-menu">${item.items.map(link).join("")}</div>` : ""}
    </div>
  `).join("")}</div></li>`;
}

export function header() {
  const mega = navGroups.map((group) => {
    if (group.mega) {
      return servicesDropdown(group);
    }
    if (group.items) {
      return `<li class="has-menu"><a href="${group.href}">${group.label}</a><button class="nav-submenu-toggle" type="button" aria-label="Expand ${group.label}" aria-expanded="false">+</button><div class="drop-menu">${group.items.map(link).join("")}</div></li>`;
    }
    return `<li><a href="${group.href}">${group.label}</a></li>`;
  }).join("");

  return `
    <header class="site-header">
      <div class="top-bar">
        <div class="container office-bar">
          <div class="office-detail" aria-live="polite">${officeDetail(0)}</div>
          <label class="office-select-wrap"><span>Office</span><select class="office-select" aria-label="Choose office">${offices.map((office, index) => `<option value="${index}">${office.name}</option>`).join("")}</select></label>
        </div>
      </div>
      <div class="main-header">
        <div class="container nav-shell">
          <a class="brand" href="/" aria-label="Milestone PLM Solutions home"><img src="${asset("2019/09/Full-Logo-PLM.png")}" alt="Milestone PLM Solutions"></a>
          <button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span></span><b>Menu</b></button>
          <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation"><ul>${mega}</ul><div class="mobile-socials" aria-label="Social links"><a href="/contact-us/">f</a><a href="/contact-us/">in</a><a href="/contact-us/">yt</a></div></nav>
          <div class="socials" aria-label="Social links"><a href="/contact-us/">f</a><a href="/contact-us/">in</a><a href="/contact-us/">yt</a></div>
        </div>
      </div>
    </header>
  `;
}

export function officeDetail(index) {
  const office = offices[index];
  return `<span>${icons.mail}${office.address}</span><span>${icons.clock}${office.hours}</span><span>${icons.phone}${office.phone}</span>`;
}

function footerRecentPosts() {
  return [...recentPosts]
    .sort((a, b) => Date.parse(b[2] || "") - Date.parse(a[2] || ""))
    .slice(0, 3)
    .map(link)
    .join("");
}

export function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <section class="footer-contact">
          <h3>Contact</h3>
          <p><span class="footer-location-icon" aria-hidden="true"></span>8 The Green #20190, Dover, DE 19901</p>
          <p><img src="/assets/icons/clock.svg" alt="">Mon - Fri 08.00 AM - 04:00 PM</p>
          <p><img src="/assets/icons/phone.svg" alt="">+1 302 565 1600</p>
          <p><img src="/assets/icons/mail.svg" alt=""><a href="mailto:info@milestonetech.net">info@milestonetech.net</a></p>
        </section>
        <section>
          <h3>Quick Links</h3>
          <div class="footer-links">${[["Testimonials", "/testimonials1/"], ["Blogs", "/blogs/"], ["Careers", "/careers-page/"], ["Case Study", "/case-study/"], ["Privacy Policy", "/privacy-policy/"], ["Awards & Recognitions", "/company-overview/awards-recognitions/"], ["Terms & Conditions", "/terms-and-conditions/"], ["Data Security & Confidentiality", "/data-security-confidentiality/"], ["Training", "/training/"]].map(link).join("")}</div>
        </section>
        <section>
          <h3>Recent Posts</h3>
          <div class="footer-links">${footerRecentPosts()}</div>
        </section>
        <section>
          <h3>Search</h3>
          <form class="search-form" role="search"><label><span class="sr-only">Search</span><input type="search" placeholder="Search..."></label><button type="submit">⌕</button></form>
        </section>
      </div>
      <div class="copyright">© 2026 Milestone PLM Solutions Pvt Ltd. All Rights Reserved.</div>
    </footer>
  `;
}

export function testimonialSection() {
  return `<section class="section testimonials"><div class="container"><h2>Testimonials</h2><div class="testimonial-grid">${testimonials.map(([name, role, quote]) => `<article><p>${quote}</p><div><img src="${asset("2018/10/placeholder-6-50x50.gif")}" alt=""><strong>${name}</strong><span>${role}</span></div></article>`).join("")}</div></div></section>`;
}

export function pageHero(title) {
  return `<section class="page-title"><div class="container"><h1>${title}</h1></div></section>`;
}

export function sidebar() {
  return `<aside class="sidebar"><div class="help-box"><h3>How can we help you?</h3><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/">Contact Us</a></div><nav class="side-nav">${allServices.slice(0, 12).map((s) => `<a href="${s.href}">${s.title}</a>`).join("")}<a href="/case-study/">Case Study</a></nav>${testimonialMini()}</aside>`;
}

export function bimServiceSidebar(activeHref) {
  const links = [
    ["BIM Modeling", "/service/bim-modeling/"],
    ["BIM Coordination", "/service/bim-coordination/"],
    ["Revit Family Creation", "/service/revit-family-creation/"],
    ["Shop Drawings", "/service/shop-drawings/"],
    ["COBie Services", "/service/cobie-services/"],
    ["Scan to BIM", "/service/scan-to-bim/"],
    ["4D BIM – Construction Simulation", "/service/4d-bim-construction-simulation/"],
    ["5D BIM – Cost Estimation & Quantity Takeoff", "/service/5d-bim-cost-estimation-quantity-takeoff/"],
    ["Case Study", "/case-study/"]
  ];
  return `<aside class="coordination-sidebar">
    <h3>How can we help you?</h3>
    <div class="coordination-help"><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></div>
    <a class="presentation-btn" href="/company-overview/">Company Presentation</a>
    <nav>${links.map(([label, href]) => `<a class="${label === "Case Study" ? "case-link" : ""} ${href === activeHref ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
    ${testimonialMini()}
  </aside>`;
}

export function testimonialMini() {
  return `<div class="mini-testimonial"><p>${testimonials[0][2]}</p><strong>${testimonials[0][0]}</strong><span>${testimonials[0][1]}</span></div>`;
}

export function bimHero({ title, image, crumb = title }) {
  return `<section class="coordination-hero" style="background-image:url('${image}')">
    <div class="container">
      <nav><a href="/">Home</a> <span>&gt;</span> <a href="/services/">Services</a> <span>&gt;</span> <a href="/stm_service_category/aec-services/">AEC</a> <span>&gt;</span> <a href="/services/bim-services/">BIM Services</a> <span>&gt;</span> ${crumb}</nav>
      <h1>${title}</h1>
    </div>
  </section>`;
}

export function bimServiceShell(config, inner) {
  return `
    ${bimHero(config)}
    <main id="main" class="section coordination-page">
      <div class="container coordination-layout">
        ${bimServiceSidebar(config.activeHref)}
        <article class="coordination-content">${inner}</article>
      </div>
    </main>
    <section class="pilot-cta"><div class="container"><h2>Try us with FREE PILOT Project</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
  `;
}

export function architecturalServiceSidebar(activeHref) {
  const links = [
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
  ];
  return `<aside class="coordination-sidebar architectural-sidebar">
    <h3>How can we help you?</h3>
    <div class="coordination-help"><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></div>
    <a class="presentation-btn" href="/company-overview/">Company Presentation</a>
    <nav>${links.map(([label, href]) => `<a class="${label === "Case Study" ? "case-link" : ""} ${href === activeHref ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
    ${testimonialMini()}
  </aside>`;
}

export function architecturalHero({ title, image, crumb = title, heroClass = "" }) {
  return `<section class="coordination-hero architectural-hero ${heroClass}" style="background-image:url('${image}')">
    <div class="container">
      <nav><a href="/">Home</a> <span>&gt;</span> <a href="/services/">Services</a> <span>&gt;</span> <a href="/stm_service_category/aec-services/">AEC</a> <span>&gt;</span> ${crumb}</nav>
      <h1>${title}</h1>
    </div>
  </section>`;
}

export function architecturalServiceShell(config, inner) {
  return `
    ${architecturalHero(config)}
    <main id="main" class="section coordination-page architectural-page">
      <div class="container coordination-layout">
        ${architecturalServiceSidebar(config.activeHref)}
        <article class="coordination-content">${inner}</article>
      </div>
    </main>
    <section class="pilot-cta"><div class="container"><h2>Try us with FREE PILOT Project</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
  `;
}

export function structuralServiceSidebar(activeHref) {
  const links = [
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
  ];
  return `<aside class="coordination-sidebar structural-sidebar">
    <h3>How can we help you?</h3>
    <div class="coordination-help"><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></div>
    <a class="presentation-btn" href="/company-overview/">Company Presentation</a>
    <nav>${links.map(([label, href]) => `<a class="${label === "Case Study" ? "case-link" : ""} ${href === activeHref ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
    ${testimonialMini()}
  </aside>`;
}

export function structuralHero({ title, image, crumb = title }) {
  return `<section class="coordination-hero structural-hero" style="background-image:url('${image}')">
    <div class="container">
      <nav><a href="/">Home</a> <span>&gt;</span> <a href="/services/">Services</a> <span>&gt;</span> <a href="/stm_service_category/aec-services/">AEC</a> <span>&gt;</span> <a href="/stm_service_category/structural-services/">Structural</a> <span>&gt;</span> ${crumb}</nav>
      <h1>${title}</h1>
    </div>
  </section>`;
}

export function structuralServiceShell(config, inner) {
  return `
    ${structuralHero(config)}
    <main id="main" class="section coordination-page structural-page">
      <div class="container coordination-layout">
        ${structuralServiceSidebar(config.activeHref)}
        <article class="coordination-content">${inner}</article>
      </div>
    </main>
    <section class="pilot-cta"><div class="container"><h2>Try us with FREE PILOT Project</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
  `;
}

export function engineeringServiceSidebar(activeHref) {
  const links = [
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
  ];
  return `<aside class="coordination-sidebar engineering-sidebar">
    <h3>How can we help you?</h3>
    <div class="coordination-help"><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></div>
    <a class="presentation-btn" href="/company-overview/">Company Presentation</a>
    <nav>${links.map(([label, href]) => `<a class="${label === "Case Study" ? "case-link" : ""} ${href === activeHref ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
    ${testimonialMini()}
  </aside>`;
}

export function engineeringHero({ title, image, crumb = title }) {
  return `<section class="coordination-hero engineering-hero" style="background-image:url('${image}')">
    <div class="container">
      <nav><a href="/">Home</a> <span>&gt;</span> <a href="/services/">Services</a> <span>&gt;</span> <a href="/stm_service_category/engineering/">Engineering</a> <span>&gt;</span> ${crumb}</nav>
      <h1>${title}</h1>
    </div>
  </section>`;
}

export function engineeringServiceShell(config, inner) {
  return `
    ${engineeringHero(config)}
    <main id="main" class="section coordination-page engineering-page">
      <div class="container coordination-layout">
        ${engineeringServiceSidebar(config.activeHref)}
        <article class="coordination-content">${inner}</article>
      </div>
    </main>
    <section class="pilot-cta"><div class="container"><h2>Try us with FREE PILOT Project</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
  `;
}

export function staffingServiceSidebar(activeHref) {
  const links = [
    ["Contract Staffing", "/service/contract-staffing-services/"],
    ["Managed Services", "/service/contract-staffing-services/#managed-services"],
    ["Onsite Manpower", "/service/contract-staffing-services/#onsite-manpower"],
    ["Technical Hiring", "/service/contract-staffing-services/#technical-hiring"],
    ["Case Study", "/case-study/"]
  ];
  return `<aside class="coordination-sidebar staffing-sidebar">
    <h3>How can we help you?</h3>
    <div class="coordination-help"><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></div>
    <a class="presentation-btn" href="/company-overview/">Company Presentation</a>
    <nav>${links.map(([label, href]) => `<a class="${label === "Case Study" ? "case-link" : ""} ${href === activeHref ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
    ${testimonialMini()}
  </aside>`;
}

export function staffingHero({ title, image, crumb = title }) {
  return `<section class="coordination-hero staffing-hero" style="background-image:url('${image}')">
    <div class="container">
      <nav><a href="/">Home</a> <span>&gt;</span> <a href="/services/">Services</a> <span>&gt;</span> <a href="/stm_service_category/contract-staffing/">Contract Staffing</a> <span>&gt;</span> ${crumb}</nav>
      <h1>${title}</h1>
    </div>
  </section>`;
}

export function staffingServiceShell(config, inner) {
  return `
    ${staffingHero(config)}
    <main id="main" class="section coordination-page staffing-page">
      <div class="container coordination-layout">
        ${staffingServiceSidebar(config.activeHref)}
        <article class="coordination-content">${inner}</article>
      </div>
    </main>
    <section class="pilot-cta"><div class="container"><h2>Try us with FREE PILOT Project</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
  `;
}

export function mepServiceSidebar(activeHref) {
  const links = [
    ["MEP BIM Services", "/service/mep-bim-services/"],
    ["MEP Drafting", "/service/mep-drafting-services/"],
    ["MEP BIM Modeling", "/service/mep-bim-modeling-services/"],
    ["MEP Coordination", "/service/mep-coordination/"],
    ["MEP Shop Drawing Services", "/service/mep-shop-drawing/"],
    ["Mechanical CAD", "/service/mechanical-cad/"],
    ["Electrical Drawings", "/service/electrical-drawings/"],
    ["As-Built Drafting", "/service/as-built-drafting/"],
    ["Case Study", "/case-study/"]
  ];
  return `<aside class="coordination-sidebar mep-sidebar">
    <h3>How can we help you?</h3>
    <div class="coordination-help"><p>Submit a business inquiry online.</p><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></div>
    <a class="presentation-btn" href="/company-overview/">Company Presentation</a>
    <nav>${links.map(([label, href]) => `<a class="${label === "Case Study" ? "case-link" : ""} ${href === activeHref ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
    ${testimonialMini()}
  </aside>`;
}

export function mepHero({ title, image, crumb = title }) {
  return `<section class="coordination-hero mep-hero" style="background-image:url('${image}')">
    <div class="container">
      <nav><a href="/">Home</a> <span>&gt;</span> <a href="/services/">Services</a> <span>&gt;</span> <a href="/stm_service_category/mep-services/">MEP</a> <span>&gt;</span> ${crumb}</nav>
      <h1>${title}</h1>
    </div>
  </section>`;
}

export function mepServiceShell(config, inner) {
  return `
    ${mepHero(config)}
    <main id="main" class="section coordination-page mep-page">
      <div class="container coordination-layout">
        ${mepServiceSidebar(config.activeHref)}
        <article class="coordination-content">${inner}</article>
      </div>
    </main>
    <section class="pilot-cta"><div class="container"><h2>Try us with FREE PILOT Project</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
  `;
}
