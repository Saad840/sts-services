import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

const constructionStagesSections = [
  ["Essential Stages of Construction", [
    "A well-executed building project moves through several phases of planning, approvals, preparation, procurement, construction, and closeout. Understanding the stages of construction helps project teams manage work efficiently and deliver a high-quality project from concept to handover."
  ]],
  ["Project Conception / Initiation - Stage 1 of Construction", [
    { type: "p", text: "The beginning of any project is to take an idea and convert it into a practical plan. This phase defines the project objective, required scope, and feasibility within available budget, time, and resources." },
    { type: "p", text: "Idea Development" },
    { type: "list", items: ["Defining the purpose and vision of the project", "Establishing the project scope and key objectives"] },
    { type: "p", text: "Key Activities" },
    { type: "list", items: ["Conducting initial feasibility studies", "Assessing project requirements and potential constraints"] },
    { type: "p", text: "Challenges" },
    { type: "list", items: ["Lack of clarity in project goals", "Underestimating budget and time requirements"] }
  ]],
  ["Design & Planning (Pre-Construction Design) - Stage 2 of Construction", [
    { type: "p", text: "During design and planning, the project idea becomes a concrete set of construction documents. Concepts are developed into detailed drawings, cost estimates, and schedules so the work is planned before construction starts." },
    { type: "p", text: "Concept & Schematic Design" },
    { type: "list", items: ["Developing initial design concepts", "Creating schematic drawings to visualize the project"] },
    { type: "p", text: "Design Development & Construction Drawings" },
    { type: "list", items: ["Refining designs and preparing detailed construction drawings", "Estimating costs and scheduling construction timelines"] },
    { type: "p", text: "Key Activities" },
    { type: "list", items: ["Collaboration between architects, engineers, and clients", "Ensuring compliance with building codes and regulations"] },
    { type: "p", text: "Challenges" },
    { type: "list", items: ["Design revisions can delay the project", "Misalignment between client expectations and design feasibility"] }
  ]],
  ["Bidding / Building Permits / Approvals - Stage 3 of Construction", [
    { type: "p", text: "Once designs are ready, the project requires legal approvals and contractor selection. This stage confirms regulatory compliance and chooses the right construction team for execution." },
    { type: "p", text: "Government Approvals" },
    { type: "list", items: ["Securing building permits from local authorities", "Ensuring compliance with legal and environmental regulations"] },
    { type: "p", text: "Contractor Selection" },
    { type: "list", items: ["Sending project tenders to potential contractors", "Evaluating bids and awarding contracts"] },
    { type: "p", text: "Key Activities" },
    { type: "list", items: ["Reviewing contractor qualifications and past projects", "Confirming permit and approval documentation"] },
    { type: "p", text: "Challenges" },
    { type: "list", items: ["Delays in government approvals", "Budget overruns due to unexpected permit requirements"] }
  ]],
  ["Preconstruction - Stage 4 of Construction", [
    { type: "p", text: "Preconstruction prepares the project for on-site work. Teams are assigned, the site is evaluated, budgets are finalized, and risks are analyzed before construction begins." },
    { type: "p", text: "Team Assignment & Site Evaluation" },
    { type: "list", items: ["Forming project management and construction teams", "Conducting detailed site surveys and soil testing"] },
    { type: "p", text: "Budget Finalization & Risk Analysis" },
    { type: "list", items: ["Confirming final project budget and timelines", "Identifying risks and preparing mitigation strategies"] },
    { type: "p", text: "Key Activities" },
    { type: "list", items: ["Preparing project schedules and detailed plans", "Ensuring resources are available before construction starts"] },
    { type: "p", text: "Challenges" },
    { type: "list", items: ["Inaccurate site evaluations can cause delays", "Resource shortages may affect project readiness"] }
  ]],
  ["Procurement - Stage 5 of Construction", [
    { type: "p", text: "Procurement involves securing the materials, equipment, subcontractors, and labor required for construction. Strong procurement prevents interruptions during the building phase." },
    { type: "p", text: "Material & Equipment Procurement" },
    { type: "list", items: ["Purchasing construction materials and securing necessary equipment", "Hiring subcontractors and specialized laborers"] },
    { type: "p", text: "Supply Chain Management" },
    { type: "list", items: ["Scheduling material deliveries in alignment with construction phases", "Ensuring quality standards for all procured items"] },
    { type: "p", text: "Key Activities" },
    { type: "list", items: ["Vendor negotiation and contract management", "Inventory management to prevent delays"] },
    { type: "p", text: "Challenges" },
    { type: "list", items: ["Delays in material delivery", "Rising raw material costs impacting budget"] }
  ]],
  ["Construction & Monitoring - Stage 6 of Construction", [
    { type: "p", text: "This stage is the actual building process. It includes structural work, MEP installations, finishing, and constant monitoring of progress, quality, and safety." },
    { type: "p", text: "On-Site Execution" },
    { type: "list", items: ["Performing structural work, MEP installations, and finishing works", "Daily supervision to ensure adherence to quality standards"] },
    { type: "p", text: "Quality Control & Safety" },
    { type: "list", items: ["Conducting inspections at each stage", "Ensuring worker safety and regulatory compliance"] },
    { type: "p", text: "Key Activities" },
    { type: "list", items: ["Monitoring project progress against the timeline", "Adjusting plans to address unforeseen challenges"] },
    { type: "p", text: "Challenges" },
    { type: "list", items: ["Weather delays or site hazards", "Maintaining quality standards under tight schedules"] }
  ]],
  ["7. Post-Construction / Closeout - Final Stage of Construction", [
    { type: "p", text: "The final stage confirms that the project is complete, corrected, cleaned, documented, and ready for client handover." },
    { type: "p", text: "Final Inspections & Handover" },
    { type: "list", items: ["Conducting final walkthroughs and correcting punch list items", "Preparing the project for client handover"] },
    { type: "p", text: "Warranty & Maintenance" },
    { type: "list", items: ["Providing maintenance guidelines and warranty documentation", "Ensuring client satisfaction and resolving post-construction issues"] },
    { type: "p", text: "Key Activities" },
    { type: "list", items: ["Cleaning and final site preparation", "Documenting as-built drawings and operational manuals"] },
    { type: "p", text: "Challenges" },
    { type: "list", items: ["Defects or incomplete works needing correction", "Coordinating post-handover support efficiently"] }
  ]],
  ["Which is the Top AEC Company?", [
    "Choosing the right construction and architectural partner can make or break a project. Milestone PLM Solutions supports AEC teams with technical expertise, modern design practices, and services such as architectural 3D modeling, BIM modeling, drafting, and construction documentation."
  ]],
  ["Conclusion", [
    "It is essential to understand the seven basic stages of construction, from project conception to post-construction closeout. Each phase has specific activities and challenges that must be managed carefully.",
    "With strong project planning and the right AEC support, clients and project managers can complete projects effectively, avoid common mistakes, and deliver built assets that perform well over time."
  ]],
  ["Follow Milestone PLM Solutions for Architecture Industry Updates, CAD Tips and Global Architecture News", [
    "Milestone PLM Solutions, with its dedicated delivery center in India, is a global CAD, BIM, and architectural design services outsourcing partner serving the Architecture, Interior, and Construction industry since 2004.",
    "The Milestone team assists with architectural design, 3D modeling, drafting and detailing, BIM modeling, rendering, and more. The team supports software including AutoCAD, Revit, ArchiCAD, SketchUp, 3ds Max, and Navisworks.",
    "With state-of-the-art technology and a large talent pool of engineers, Milestone develops practical solutions for clients across the globe and supports long-term partnerships through consistent high-quality delivery."
  ]]
];

const constructionStagesFaqs = [
  ["1. How do I know which construction stage requires the most attention?", "Every stage is important, but planning, design, and monitoring usually demand the highest precision because they strongly affect project cost, timeline, and technical accuracy."],
  ["2. How does Milestone PLM Solutions support the design and planning stage?", "Milestone provides CAD modeling, engineering design verification, and project planning support to help ensure the design is accurate, feasible, and aligned with project goals."],
  ["3. Does Milestone PLM Solutions help with project documentation and approvals?", "Yes. Milestone assists with technical documentation, drawings, and engineering data that support approvals and smooth project coordination."],
  ["4. Why is monitoring essential during construction?", "Monitoring helps ensure structural accuracy, safety compliance, and timely progress. It also helps catch issues early so cost overruns and rework can be avoided."],
  ["5. Can a project proceed smoothly without proper preconstruction planning?", "No. Strong preconstruction planning, including site evaluation, budgeting, resource allocation, and risk analysis, is crucial to avoid delays and technical issues during construction."]
];

export function constructionStagesArticlePage() {
  const title = "7 Stages of Construction: A Complete Guide For Successful Project";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>November 19, 2025</span><span>Posted by: Tejas</span><span>Category: Architecture</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/7-stages-of-construction-a-complete-guide.webp" alt="${title}" loading="lazy">
          <p>Construction projects are major undertakings that require planning, coordination, and close supervision. Understanding the standard construction sequence helps teams manage time, effort, budget, and quality from start to finish.</p>
          <p>This guide outlines the seven critical stages of the construction process and highlights the key tasks and common challenges that need to be managed at each stage.</p>
          ${constructionStagesSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
          <section><h2>Frequently Asked Questions (FAQs)</h2>${constructionStagesFaqs.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join("")}</section>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
