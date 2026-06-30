import { asset, industries } from "../data/index.js";
import { testimonialSection } from "../components/service-layout.js";

export const homeServiceTabs = [
  {
    id: "engineering",
    label: "Engineering Solutions",
    image: asset("2023/05/Engineering-Solutions-2.jpg"),
    heading: "Integrated Engineering & Design Services",
    copy: "Dynamically reinvent market-driven solutions and ubiquitous interfaces. Energistically fabricate an expanded array of niche services throughout PLM process.",
    bullets: ["Product Design", "Engineering Analysis and Simulation", "Reverse Engineering | Drafting & Detailing | Value Engineering", "Technical Documentation"],
    cta: "Learn more",
    href: "/service/product-design-and-development/"
  },
  {
    id: "aec",
    label: "AEC Services",
    image: asset("2020/09/AEC-Services-530x432.jpg"),
    heading: "Multidisciplinary BIM Services",
    copy: "One stop solution partner for pre-construction, high-quality CAD solutions and BIM outsourcing services to leading contractors, architects and engineers across the globe.",
    bullets: ["Architectural BIM | MEP BIM | Scan to BIM", "Family Creation", "Support upto LOD 500", "Lighting Design"],
    cta: "Learn more",
    href: "/service/architectural-bim-modeling-services/"
  },
  {
    id: "staffing",
    label: "Contract Staffing",
    image: asset("2020/09/Contract-Staffing.jpg"),
    heading: "Onsite / Contract Manpower",
    copy: "Over the years, MILESTONE has served the niche market of specialized technical projects to great success. We offer impeccable service for tech manpower augmentation.",
    bullets: ["Managed Services", "Onsite Manpower", "Technical Hiring"],
    cta: "get a quote",
    href: "/service/contract-staffing-services/"
  }
];

export function home() {
  return `
    <section class="hero-slider home-hero" aria-label="Milestone highlights">
      <article class="hero-slide active" style="background-image:url('${asset("2019/09/slide1.jpg")}')"><div class="container hero-copy"><p>Meet Milestone</p><h1>Helping<br>companies<br>Navigate<br>CHANGE</h1><a class="yellow-btn" href="/case-study/">Explore Case study</a></div></article>
    </section>
    <section class="cta-band"><div class="container"><h2>Looking for an Engineering Design Services / BIM Services Company?</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
    <section class="section industries"><div class="container"><h2>Industries We Serve</h2><div class="industry-grid">${industries.map((item) => `<article tabindex="0" aria-label="${item.title}"><div class="industry-default"><img src="${item.icon}" alt="" loading="lazy"><h3>${item.title}</h3></div><div class="industry-hover" aria-hidden="true"><img src="${item.image}" alt="" loading="lazy"></div></article>`).join("")}</div></div></section>
    <section class="services-showcase">
      <div class="services-heading" style="background-image:url('${asset("2020/09/Services-background1.jpg")}')"><h2>Engineering Design & BIM Services</h2></div>
      <div class="container service-tabs" role="tablist" aria-label="Homepage services">${homeServiceTabs.map((tab, index) => `<button type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" class="${index === 0 ? "active" : ""}" data-service-tab="${tab.id}">${tab.label}</button>`).join("")}</div>
      <div class="container service-feature">
        <img data-service-image src="${homeServiceTabs[0].image}" alt="${homeServiceTabs[0].label}" loading="lazy">
        <div><h2 data-service-heading>${homeServiceTabs[0].heading}</h2><p data-service-copy>${homeServiceTabs[0].copy}</p><ul class="check-list" data-service-bullets>${homeServiceTabs[0].bullets.map((item) => `<li>${item}</li>`).join("")}</ul><a class="btn" data-service-cta href="${homeServiceTabs[0].href}">${homeServiceTabs[0].cta}</a></div>
      </div>
    </section>
    <section class="section split why home-why">
      <div class="container split-grid">
        <div><h2>Milestone | Your Trusted Outsourcing Partner</h2><p>We understand the commercial realities of bringing new products to market and the pressure you’re under to design within budget and ahead of forecast.</p><p>At <a href="/">Milestone</a>, we are committed to provide quality Engineering Design & BIM Services at competitive rates so that you can always stay ahead of your competition.</p><ul class="check-list"><li><strong>20+ Years In Industry</strong></li><li>ISO 9001:2015 & ISO 27001:2013 Certified Company</li><li>Ranked among Top Engineering consulting companies</li><li>More than 25% of employees with 5+ years of association</li><li>Senior management with average span of 12+ years of experience</li></ul><a class="btn" href="/company-overview/why-milestone/">Learn more</a></div>
        <img src="${asset("2023/04/thumbnail_why-us.png")}" alt="Why choose Milestone" loading="lazy">
      </div>
    </section>
    ${testimonialSection()}
  `;
}
