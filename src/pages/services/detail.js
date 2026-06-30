import { allServices } from "../../data/index.js";
import { pageHero } from "../../components/page-title-hero.js";
import { sidebar } from "../../components/service-layout.js";
import { path, titleFromPath } from "../../utils/path.js";
import { bimModelingPage } from "./bim.js";

export function serviceDetail(service) {
  const title = service?.title || titleFromPath(path());
  const related = allServices.filter((s) => s.category === (service?.category || "BIM Services")).slice(0, 5);
  if (path() === "/service/bim-modeling/") return bimModelingPage();
  const bimSections = "";
  return `${pageHero(title)}<main id="main" class="section"><div class="container content-with-sidebar">${sidebar()}<article class="content"><h2>${title}</h2><p>Milestone PLM Solutions provides precise, scalable and high-quality ${title.toLowerCase()} for engineering, construction, manufacturing and AEC teams across global markets.</p><p>Our team supports complete project lifecycles with CAD, BIM, drafting, modeling, documentation, analysis and coordination workflows. Deliverables are prepared around client standards, quality checks, security discipline and fast turnaround needs.</p><h3>${title} Includes:</h3><ul class="check-list"><li>Project setup and standards alignment</li><li>Modeling, drafting and documentation support</li><li>Quality checks by experienced engineers</li><li>Coordination with architecture, structure and MEP teams</li><li>Flexible fixed-price, dedicated-resource and time-material models</li></ul>${bimSections}<div class="related-box"><h3>Related Services</h3>${related.map((item) => `<a href="${item.href}">${item.title}</a>`).join("")}</div></article></div></main>`;
}
