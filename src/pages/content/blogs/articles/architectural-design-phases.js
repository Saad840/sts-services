import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

const architecturalDesignPhasesSections = [
  ["What Are Architectural Design Phases?", [
    { type: "p", text: "Architectural design phases are the systematic stages architects and designers use to coordinate, develop, and deliver a building project." },
    { type: "list", items: ["The project vision is understood clearly", "Technical detailing is accurate", "Costs and timelines stay under control", "Stakeholders can track progress at every step"] },
    { type: "p", text: "These phases create transparency in the design process and help everyone involved make informed decisions." }
  ]],
  ["Why Design Stages Matter in Architecture", [
    { type: "p", text: "The architectural design process has a beginning, middle, and end. Each stage builds on the previous one, helping teams avoid errors, save time, and improve project quality." },
    { type: "p", text: "Key Benefits:" },
    { type: "list", items: ["Ensures better coordination across teams", "Provides a clear roadmap for execution", "Improves cost control and resource management", "Enhances design quality through multiple review cycles", "Reduces project risks and construction delays"] },
    { type: "p", text: "Design stages work as checkpoints that help architects deliver a building according to requirements, function, and appearance." }
  ]],
  ["The 5 Key Phases of Architectural Design", [
    "Most architectural projects move through five core design phases before and during construction."
  ]],
  ["1. Pre-Design / Programming Phase", [
    { type: "p", text: "This foundation stage collects the essential inputs architects need before creating drawings." },
    { type: "p", text: "Objectives:" },
    { type: "list", items: ["Identify client goals, vision, and expectations", "Understand the site's surroundings, zoning, and constraints", "Establish essential project parameters"] },
    { type: "p", text: "Deliverables:" },
    { type: "list", items: ["Site survey reports", "Program brief or project requirements document", "Initial timeline and budget framework"] },
    { type: "p", text: "This phase prevents miscommunication and aligns the full team with the project objectives." }
  ]],
  ["2. Schematic Design (SD)", [
    { type: "p", text: "Schematic Design transforms the information gathered in pre-design into early visual concepts." },
    { type: "p", text: "Objectives:" },
    { type: "list", items: ["Test different design ideas and alternatives", "Establish building layout, form, and massing", "Explore circulation, space flow, and style"] },
    { type: "p", text: "Deliverables:" },
    { type: "list", items: ["Concept sketches", "Basic floor plans, elevations, and sections", "Early 3D concept models"] },
    { type: "p", text: "At this stage, clients get the first clear glimpse of their project." }
  ]],
  ["3. Design Development (DD)", [
    { type: "p", text: "Design Development takes the schematic concept and adds technical clarity." },
    { type: "p", text: "Objectives:" },
    { type: "list", items: ["Finalize designs with more accurate dimensions", "Integrate structural, electrical, and mechanical systems", "Select materials and finishes"] },
    { type: "p", text: "Deliverables:" },
    { type: "list", items: ["Fully developed plans, elevations, and sections", "Material palettes and finish schedules", "Updated 3D visualizations"] },
    { type: "p", text: "This is where creativity meets technical accuracy." }
  ]],
  ["4. Construction Documents (CD)", [
    { type: "p", text: "Construction Documents are the most detailed and technical part of the design process." },
    { type: "p", text: "Objectives:" },
    { type: "list", items: ["Create drawings and documents required for building", "Provide contractors with precise construction instructions", "Ensure full compliance with local codes"] },
    { type: "p", text: "Deliverables:" },
    { type: "list", items: ["Complete architectural drawing set including plans, details, and schedules", "Structural and MEP coordination drawings", "Specifications for materials and components"] },
    { type: "p", text: "These documents form the legal and instructional basis for construction." }
  ]],
  ["5. Bidding & Construction Administration", [
    { type: "p", text: "Once the design is complete, the project moves toward contractor selection and construction execution." },
    { type: "p", text: "Bidding:" },
    { type: "list", items: ["Contractors review drawings and submit cost proposals", "The architect assists the client in comparing and selecting bids"] },
    { type: "p", text: "Construction Administration:" },
    { type: "list", items: ["Architect oversees progress to ensure design compliance", "Approves materials and shop drawings", "Conducts site visits and quality checks"] },
    { type: "p", text: "This stage helps make sure the building is constructed as designed." }
  ]],
  ["Additional Phase 1: Feasibility & Concept Validation", [
    { type: "p", text: "Before full-scale design begins, many firms include a feasibility check to evaluate whether the project is viable." },
    { type: "p", text: "Objectives:" },
    { type: "list", items: ["Analyze project cost versus available budget", "Evaluate site feasibility such as soil, environment, and access", "Check legal constraints, zoning rules, and approvals"] },
    { type: "p", text: "Deliverables:" },
    { type: "list", items: ["Feasibility report", "Concept options and recommendations", "Risk assessment document"] },
    { type: "p", text: "This phase helps clients make confident decisions before investing further." }
  ]],
  ["Additional Phase 2: Post-Construction & Handover", [
    { type: "p", text: "After construction, a final stage confirms that the building operates smoothly and the client receives the required documentation." },
    { type: "p", text: "Objectives:" },
    { type: "list", items: ["Inspect for defects or pending touch-ups", "Ensure all systems function correctly", "Train users on building operations"] },
    { type: "p", text: "Deliverables:" },
    { type: "list", items: ["Final walkthrough report", "As-built drawings", "Warranty manuals and maintenance guides"] },
    { type: "p", text: "This phase supports long-term building performance and client satisfaction." }
  ]],
  ["Which is the Top Architecture Design and Architectural Construction Documentation Service Provider?", [
    "Choosing the right partner for architectural design and architectural construction documentation can improve project quality and accuracy. Milestone PLM Solutions supports Schematic Design, Design Development, and Construction Documentation packages with a structured approach that helps architects, designers, and contractors coordinate smoothly."
  ]],
  ["Conclusion", [
    "Every architectural project moves from ideas to sketches, refined designs, technical plans, and finally a completed structure.",
    "By understanding the architectural design phases, clients and architects gain clarity, make better decisions, and maintain a streamlined workflow from start to finish."
  ]],
  ["Follow Milestone PLM Solutions for Architecture Industry Updates, CAD Tips and Global Architecture News", [
    "Milestone PLM Solutions, with its dedicated delivery center in India, is a global CAD, BIM, and architectural design services outsourcing partner serving the Architecture, Interior, and Construction industry since 2004.",
    "The Milestone team assists with architectural design, 3D modeling, drafting and detailing, BIM modeling, rendering, and more. The team supports software including AutoCAD, Revit, ArchiCAD, SketchUp, 3ds Max, and Navisworks.",
    "With state-of-the-art technology and a large talent pool of engineers, Milestone develops practical solutions for clients across the globe and supports long-term partnerships through consistent high-quality delivery."
  ]]
];

const architecturalDesignPhasesFaqs = [
  ["1. What are the main phases of architectural design?", "The main phases include pre-design or programming, schematic design, design development, construction documents, bidding, and construction administration."],
  ["2. Why are architectural design phases important?", "They structure the project, maintain transparency, control cost, and help ensure the finished building aligns with the design intent, needs, and functionality."],
  ["3. What happens during the Schematic Design (SD) phase?", "In SD, architects translate ideas into visual concepts through basic floor plans, elevations, and early 3D models to establish the overall design direction."],
  ["4. What is the purpose of the Design Development (DD) phase?", "DD develops the approved concept with correct dimensions, material selections, and coordination with structural and MEP systems."],
  ["5. What is included in the Construction Documents (CD) phase?", "CD includes detailed drawings, specifications, and schedules that contractors use to construct the project according to the approved design."],
  ["6. Which company provides reliable SD, DD and CD support services?", "Milestone PLM Solutions provides precise and detailed SD, DD, and CD packages that support smoother project execution."]
];

export function architecturalDesignPhasesArticlePage() {
  const title = "Architectural Design Phases: A Complete Guide to Design Stages";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>November 14, 2025</span><span>Posted by: Tejas</span><span>Category: Architecture</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/architectural-design-phases-a-complete-guide-to-design-stages.webp" alt="${title}" loading="lazy">
          <p>Designing a building is not just about drawing lines on paper. It is a thoughtful evolution of study, iteration, coordination, and implementation.</p>
          <p>The architectural design phases transform an idea into a physically constructed project. When each stage is handled clearly and accurately, the project becomes smoother, risks are reduced, rework is minimized, and clients gain confidence in the process.</p>
          <p>This guide explains the major architectural design stages, what happens in each one, and why they matter for successful project delivery.</p>
          ${architecturalDesignPhasesSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
          <section><h2>Frequently Asked Questions</h2>${architecturalDesignPhasesFaqs.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join("")}</section>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
