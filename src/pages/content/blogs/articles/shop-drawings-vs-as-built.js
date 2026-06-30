import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

const shopVsAsBuiltRows = [
  ["Project Stage", "Created before construction begins", "Created after construction is completed"],
  ["Primary Purpose", "Guide fabrication and installation", "Document the final constructed condition"],
  ["Content Focus", "Planned dimensions, materials, sections, and assembly details", "Actual dimensions, locations, and site modifications"],
  ["Nature of Information", "Predictive and instructional", "Historical and record-based"],
  ["Revisions", "Revised during coordination and approvals", "Finalized after construction"],
  ["Prepared By", "Contractors, subcontractors, fabricators, BIM teams", "Contractors or BIM engineers"],
  ["Usage", "On-site execution and fabrication", "Maintenance, renovation, and facility management"],
  ["Clash Detection", "Used to identify and resolve clashes before construction", "Reflects resolved and executed systems"],
  ["Legal/Record Value", "Supporting document for construction", "Official project record after handover"]
];

const shopVsAsBuiltSections = [
  ["What Are Shop Drawings?", [
    { type: "p", text: "Shop drawings are detailed technical drawings that the contractor, fabricator, supplier, or BIM engineer prepares before construction. These drawings transform design intent into fabrication-ready and installation-ready details." },
    { type: "p", text: "Unlike architectural or consultant drawings, shop drawings provide the exact dimensions, materials, tolerances, and connection details needed for execution on site." },
    { type: "p", text: "Key components of shop drawings include:" },
    { type: "list", items: ["Identifying components by tags and references", "Exact dimensions and coordinates", "Specifications of materials and finish", "Clearance and interference specifications", "Sectional views and installation steps"] },
    { type: "p", text: "Shop drawings also go through a review and approval process before actual fabrication is carried out." },
    { type: "p", text: "Their importance lies in preventing construction errors by helping teams:" },
    { type: "list", items: ["Reduce conflicts and rework", "Enhance coordination of trade activities", "Optimize fabrication accuracy", "Minimize project delays and cost overruns", "Support smooth on-site execution"] },
    { type: "p", text: "They are the bridge between design and construction." }
  ]],
  ["What Are As-Built Drawings?", [
    { type: "p", text: "As-built drawings are the final record drawings produced after construction is completed. They show what actually exists at the end of the project, including changes made during construction that differ from the approved drawings." },
    { type: "p", text: "Also called record drawings or redline drawings, as-builts reflect the actual constructed condition of the building." },
    { type: "p", text: "Key components of as-built drawings include:" },
    { type: "list", items: ["Actual locations of walls, equipment, and systems", "Field modifications and rerouted services", "Material substitutions", "Dimensional and elevation changes", "Final installation details"] },
    { type: "p", text: "Teams typically prepare as-built drawings using site markings and updated BIM models." },
    { type: "p", text: "As-built drawings play an important role in building ownership and facility management by helping teams:" },
    { type: "list", items: ["Support maintenance and repairs", "Assist in detecting hidden systems", "Facilitate safe renovation and expansion", "Support emergency planning", "Maintain permanent records of construction"] },
    { type: "p", text: "They provide long-term clarity even after project handover." }
  ]],
  ["Shop Drawings vs As-Built Drawings: Key Differences Explained", [
    { type: "table", rows: shopVsAsBuiltRows }
  ]],
  ["Best Practices for Shop Drawings and As-Built Drawings", [
    "Use BIM-based coordination to identify clashes early.",
    "Use standard drawing practices and naming conventions.",
    "Update redlines periodically.",
    "Verify site conditions before finalizing as-built drawings.",
    "Approve all shop drawings before fabrication.",
    "Following best practices helps ensure accuracy during the complete project lifecycle."
  ]],
  ["Which company provides best shop drawing and as-built drawing services?", [
    { type: "p", text: "Milestone PLM Solutions provides end-to-end shop drawing services and as-built drawing services for architectural, structural, and MEP projects." },
    { type: "p", text: "Our service capabilities include:" },
    { type: "list", items: ["Fabrication-ready 2D and 3D shop drawings: AutoCAD and Revit-based drawings with high dimensional accuracy.", "Accurate as-built documentation: updated drawings reflecting real on-site conditions.", "BIM coordination and clash detection: coordinating multi-disciplinary models to eliminate errors before execution.", "Fast turnaround and scalable support: reliable delivery aligned with project schedules."] },
    { type: "p", text: "Milestone helps bridge the gap between design intent and construction reality." }
  ]],
  ["Conclusion", [
    "Understanding shop drawings vs as-built drawings is critical to the success of the construction process.",
    "Shop drawings support proper execution, while as-built drawings record the actual condition of what has been built.",
    "Together they reduce risk, enhance coordination, and support long-term building performance. Milestone PLM Solutions supports correct BIM-driven documentation at every project stage."
  ]]
];

const shopVsAsBuiltFaqs = [
  ["1. What is the main difference between shop drawings and as-built drawings?", "Shop drawings are created before construction to guide fabrication and installation, while as-built drawings are prepared after construction to document actual on-site conditions and changes."],
  ["2. Are shop drawings required for MEP projects?", "Yes. Shop drawings are commonly required for MEP projects because they clarify installation details, coordination requirements, fabrication information, and system routing."],
  ["3. Are as-built drawings mandatory after project completion?", "In most commercial and infrastructure projects, as-built drawings are required for handover, facility management, future renovations, and compliance documentation."],
  ["4. Can shop drawings be converted into as-built drawings?", "Yes. Approved shop drawings can be updated with site redlines, field modifications, and final installations to create accurate as-built drawings at project completion."],
  ["5. How do BIM models improve shop drawings and as-built drawings?", "BIM helps minimize errors, optimize scheduling, detect clashes early, and provide accurate quantity takeoffs and budgeting, reducing both cost and delays."]
];

export function shopDrawingsVsAsBuiltArticlePage() {
  const title = "Shop Drawings vs As-Built Drawings: Differences, Importance, and Best Practices";
  const renderBlocks = (blocks) => blocks.map((block) => {
    if (block.type === "table") {
      return `<div class="blog-table-wrap"><table class="blog-compare-table"><thead><tr><th>Aspect</th><th>Shop Drawings</th><th>As-Built Drawings</th></tr></thead><tbody>${block.rows.map(([aspect, shop, asBuilt]) => `<tr><td>${aspect}</td><td>${shop}</td><td>${asBuilt}</td></tr>`).join("")}</tbody></table></div>`;
    }
    return renderBlogArticleBlocks([block]);
  }).join("");
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>January 13, 2026</span><span>Posted by: Tejas</span><span>Category: Architecture</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/shop-drawings-vs-as-built-drawings-differences-importance-and-best-practices.webp" alt="${title}" loading="lazy">
          <p>In current-day construction, inaccurate documentation can affect project cost, quality, and duration. One common confusion in project documentation is shop drawings vs as-built drawings, which are often assumed to be the same.</p>
          <p>They are used for distinctly different purposes at different stages of the project. This article explains the complete difference between shop drawings and as-built drawings.</p>
          ${shopVsAsBuiltSections.map(([heading, paragraphs]) => `<section><h2>${heading}</h2>${renderBlocks(paragraphs)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
          <section><h2>Frequently Asked Questions</h2>${shopVsAsBuiltFaqs.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join("")}</section>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
