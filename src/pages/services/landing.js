import { groupedServices, serviceCategoryIntros, serviceLandingCard, servicesReferenceSidebar } from "./shared.js";

export function servicesPage() {
  const groups = Array.from(groupedServices().entries());
  const totalServices = groups.reduce((count, [, services]) => count + services.length, 0);

  return `
    <main id="main" class="services-landing">
      <section class="services-landing-hero">
        <div class="container">
          <nav><a href="/">Home</a> <span>&gt;</span> Services</nav>
          <p class="eyebrow">Services</p>
          <h1>Engineering, BIM, drafting, and technical delivery services</h1>
          <p>Explore Milestone services by discipline. This page is generated from the same service data used by the navigation, so new services appear here automatically when they are added to the services menu.</p>
          <div class="services-landing-stats">
            <strong>${totalServices}</strong>
            <span>Services across ${groups.length} service families</span>
          </div>
        </div>
      </section>

      <div class="container services-landing-layout">
        <div class="services-landing-content">
          ${groups.map(([category, services]) => {
            const intro = serviceCategoryIntros[category] || {};
            return `
              <section id="services-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}" class="services-landing-section">
                <div class="services-landing-heading">
                  <img src="${intro.image || "/assets/images/home/services-background.jpg"}" alt="${category}" loading="lazy">
                  <div>
                    <p class="eyebrow">${category}</p>
                    <h2>${category}</h2>
                    <p>${intro.copy || "Specialized service support for engineering, BIM, drafting, and project delivery teams."}</p>
                  </div>
                </div>
                <div class="services-landing-grid">${services.map(serviceLandingCard).join("")}</div>
              </section>
            `;
          }).join("")}
        </div>
        ${servicesReferenceSidebar()}
      </div>
    </main>
    <section class="cta-band services-ref-cta"><div class="container"><h2>Need help choosing the right service?</h2><a class="btn" href="/contact-us/">get a quote <span aria-hidden="true">></span></a></div></section>`;
}
