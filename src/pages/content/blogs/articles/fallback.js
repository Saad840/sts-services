import { pageHero } from "../../../../components/page-title-hero.js";
import { sidebar } from "../../../../components/service-layout.js";

export function articlePage(title) {
  return `${pageHero(title)}<main id="main" class="section"><div class="container content-with-sidebar">${sidebar()}<article class="content"><h2>${title}</h2><p>Milestone PLM Solutions shares practical guidance for engineering, CAD, BIM, construction and manufacturing teams. This replicated article route preserves the user flow and archive structure of the live WordPress website.</p><p>The original site contains a large body of blog content; this template keeps the same page hierarchy, sidebar behavior, recent-post links and call-to-action flow for deployment-ready navigation.</p><h3>How Milestone Helps</h3><ul class="check-list"><li>Engineering and BIM outsourcing</li><li>CAD drafting and detailing</li><li>Construction documentation</li><li>Product design and development</li><li>Quality-focused delivery processes</li></ul></article></div></main>`;
}
