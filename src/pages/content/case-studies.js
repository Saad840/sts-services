import { pageHero } from "../../components/page-title-hero.js";
import { sidebar } from "../../components/service-layout.js";

export const caseStudyItems = [
  ["Architectural Design project", "AEC", ["AEC", "Architectural"], "designproject2-350x195.jpg", "/works/architectural-design-project/"],
  ["Demolation", "AEC", ["AEC", "Architectural"], "DEMOLATION0-1-350x195.jpg", "/works/demolation/"],
  ["Co-ordination", "AEC", ["AEC", "BIM"], "AECCordination2-1-e1618220743824-350x195.jpg", "/works/co-ordination/"],
  ["Welding Fixture Design", "Product Design", ["Product Design"], "weldingfix1-350x195.jpg", "/works/welding-fixture-design/"],
  ["Washing Fixture Design", "Product Design", ["Product Design"], "washingfixture1-350x195.jpg", "/works/washing-fixture-design/"],
  ["Reverse Engineering - Console", "Reverse Engineering", ["Reverse Engineering"], "reverseeng2-e1618226106551-350x195.jpg", "/works/reverse-engineering-console/"],
  ["MOLDFLOW", "FEA", ["FEA"], "moldflow1-350x195.jpg", "/works/moldflow/"],
  ["Meshing", "FEA", ["FEA"], "meshing1-1.jpg", "/works/meshing/"],
  ["Design Optimisation", "FEA", ["FEA"], "optimisation1-350x195.jpg", "/works/design-optimisation/"],
  ["Enclosures - CAD Supports", "CAD", ["CAD"], "enclosure5-1-e1618308365706-287x195.jpg", "/works/enclosures-cad-supports/"],
  ["DFMA - SUPPORT STRUCTURE", "Value Engineering", ["Value Engineering"], "supportstructure2-1-350x195.jpg", "/works/dfma-support-structure/"],
  ["CFD - Underhood Analysis", "FEA", ["FEA"], "underhoodanalysislogo-1-302x195.png", "/works/cfd-underhood-analysis/"],
  ["CFD - Ceiling Fan", "FEA", ["FEA"], "ceilingfan1-1-e1618308635693-350x195.jpg", "/works/cfd-ceiling-fan/"],
  ["Caterpillar-Fixture Design", "Product Design", ["Product Design"], "weldingfixturedesign1-1-e1618308286715-350x195.jpg", "/works/caterpillar-fixture-design/"],
  ["Precision Mfg CUMMINS_HAYWARD_Johnson Control", "CAD", ["CAD"], "cumminshayward5-1-350x195.jpg", "/works/precision-mfg-cummins-hayward-johnson-control/"],
  ["Packaging Machineries", "Product Design", ["Product Design"], "packagingmachinery1-1-350x195.jpg", "/works/packaging-machineries/"],
  ["Industrial Equipment CAT_Komatsu_John deere", "CAD", ["CAD"], "CAT_KOMATSU4-1-e1618308480658-350x195.jpg", "/works/industrial-equipment-cat-komatsu-john-deere/"],
  ["Furniture Millwork Industry", "CAD", ["CAD"], "furniture-cadsupport3-1-350x195.jpg", "/works/furniture-millwork-industry/"],
  ["Automotive Welding Fixtures", "Product Design", ["Product Design"], "weldingfixtures1-1-350x195.jpg", "/works/automotive-welding-fixtures/"],
  ["Automotive Monroe_JLG", "CAD", ["CAD"], "productdevelopmentsupport4-350x195.jpg", "/works/automotive-monroe-jlg/"],
  ["Food Service Equipments", "CAD", ["CAD"], "foodserviceequipment-2-e1618224576768-350x195.jpg", "/works/food-service-equipments/"],
  ["Automotive Components Manufacturing Support", "CAM", ["CAM"], "ManufacturingSupport2-2-e1618308562252-334x195.jpg", "/works/automotive-components-manufacturing-support/"],
  ["Scan To BIM", "AEC", ["AEC", "BIM", "Scan to BIM"], "scantobimfocusoncore2-e1618224942956-350x195.jpg", "/works/scan-to-bim/"],
  ["CAE Product Testing", "FEA", ["FEA"], "CAE-Product-Testing-1-350x195.png", "/works/cae-product-testing/"]
].map(([title, category, categories, image, href]) => ({
  title,
  category,
  categories,
  image: `/assets/images/case-study/${image}`,
  href
}));

export function caseStudyPage() {
  const categories = ["All", "AEC", "Architectural", "BIM", "CAD", "CAM", "FEA", "Product Design", "Reverse Engineering", "Scan to BIM", "Value Engineering"];
  return `<main id="main" class="case-study-page">
      <div class="container">
        <div class="case-filters" role="tablist" aria-label="Case study filters">${categories.map((category, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-case-filter="${category}" aria-pressed="${index === 0 ? "true" : "false"}">${category}</button>`).join("")}</div>
        <div class="case-grid">${caseStudyItems.map((item) => `<article class="case-card" data-case-categories="${item.categories.join("|")}">
          <a class="case-card-image" href="${item.href}"><img src="${item.image}" alt="${item.title}" loading="lazy"></a>
          <div class="case-card-body">
            <button type="button" data-case-filter="${item.category}">${item.category} <span aria-hidden="true">&gt;</span></button>
            <h2><a href="${item.href}">${item.title}</a></h2>
          </div>
        </article>`).join("")}</div>
      </div>
    </main>
    <section class="case-study-cta"><div class="container"><h2>Looking for a more information on Price & Engagement models?</h2><a class="btn" href="/contact-us/"><img src="/assets/icons/phone-white.svg" alt="">Contact Us</a></div></section>`;
}

export const caseStudyRoutes = caseStudyItems.map((item) => item.href);

export function caseStudyDetailPage(href) {
  const item = caseStudyItems.find((entry) => entry.href === href);
  if (!item) return caseStudyPage();
  return `${pageHero(item.title)}
    <main id="main" class="section case-study-detail-page">
      <div class="container content-with-sidebar">
        ${sidebar()}
        <article class="content case-study-detail">
          <p class="case-study-detail-type">${item.category} Case Study</p>
          <h2>${item.title}</h2>
          <img class="lead-image" src="${item.image}" alt="${item.title}" loading="lazy">
          <p>Milestone PLM Solutions supported this project with disciplined engineering workflows, accurate documentation, and coordinated delivery tailored to the client's requirements.</p>
          <h3>Project capabilities</h3>
          <ul class="check-list">${item.categories.map((category) => `<li>${category}</li>`).join("")}<li>Quality-controlled engineering deliverables</li><li>Scalable project support</li></ul>
          <a class="btn" href="/contact-us/">Discuss a similar project</a>
        </article>
      </div>
    </main>`;
}
