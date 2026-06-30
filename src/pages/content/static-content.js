import { pageHero } from "../../components/page-title-hero.js";

export function staticPage(page) {
  return `${pageHero(page.title)}<main id="main" class="section"><div class="container content-page">${page.image ? `<img class="lead-image" src="${page.image}" alt="${page.title}" loading="lazy">` : ""}${(page.body || []).map((p) => `<p>${p}</p>`).join("")}${page.bullets ? `<ul class="check-list">${page.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}${page.faqs ? `<div class="faq-list">${page.faqs.map(([q, a]) => `<details open><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>` : ""}${stats()}</div></main>`;
}

export function stats() {
  return `<section class="stats"><div><strong>20+</strong><span>Years of Experience</span></div><div><strong>100+</strong><span>Clients</span></div><div><strong>50+</strong><span>Professionals</span></div><div><strong>80%</strong><span>Recurring Clients</span></div></section>`;
}
