import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

const architecturalDrawingsSections = [
  ["What Are Architectural Drawings?", [
    "Architectural drawings are graphic representations that communicate the design intent, specifications, and construction method of a building project.",
    "In modern practice, they are commonly produced with AutoCAD, Revit BIM, ArchiCAD, Vectorworks, and related drafting or modeling platforms so architecture, structure, and MEP teams can collaborate from coordinated information.",
    "A simple way to understand them is this: without architectural drawings, there is no roadmap to construct a building."
  ]],
  ["Types of Architectural Drawings", [
    "To understand construction planning, it is important to know the major drawing types used in architecture and construction."
  ]],
  ["Site Plan Drawings", [
    { type: "p", text: "Definition: A site plan is a top view of the building lot, including the main structure and surrounding features." },
    { type: "list", items: ["Identifies property boundaries, roads, pavements, and utilities", "Helps with landscaping, parking, entrances, and access planning", "Supports urban planning, building approvals, and construction permits"] },
    { type: "p", text: "Professional insight: BIM models combined with topography and 3D site data can produce more accurate construction-site layouts with fewer errors." }
  ]],
  ["Floor Plan Drawings", [
    { type: "p", text: "Definition: A floor plan is a horizontal top-down view showing room layouts, walls, doors, windows, and circulation." },
    { type: "list", items: ["Guides interior space planning and furniture layout", "Used for residential, commercial, and retail building designs", "Helps estimate materials and understand room functionality"] },
    { type: "p", text: "Professional insight: BIM-based floor plans allow real-time updates across project stakeholders." }
  ]],
  ["Section Drawings", [
    { type: "p", text: "Definition: Section drawings show a vertical cut through a building, revealing internal structure and details of walls, floors, and other components." },
    { type: "list", items: ["Reveals hidden components such as foundations, beams, and wall assemblies", "Provides detailed construction information for materials and finishes", "Helps coordinate structural and MEP systems"] },
    { type: "p", text: "Research insight: Precise section drawings help avoid construction conflicts, save time, and reduce rework." }
  ]],
  ["Elevation Drawings", [
    { type: "p", text: "Definition: Elevations are vertical views of the exterior or interior faces of a building." },
    { type: "list", items: ["Indicate building height, facade design, window placement, door placement, and finishes", "Help understand sun orientation and exterior composition", "Support client presentations and planning approvals"] },
    { type: "p", text: "Professional insight: 3D elevations in BIM can simulate lighting, shadows, and environmental impact." }
  ]],
  ["Landscape Drawings", [
    { type: "p", text: "Definition: Landscape drawings describe the exterior environment around the building." },
    { type: "list", items: ["Show green areas, pathways, street furniture, parking, and site features", "Support functional and aesthetic landscape planning", "Help sustainable and eco-friendly design strategies"] }
  ]],
  ["Finishing Drawings", [
    { type: "p", text: "Definition: Finishing drawings detail materials, textures, colors, and decorative elements." },
    { type: "list", items: ["Specify floor patterns, ceiling designs, paint colors, plaster textures, trims, and finishes", "Ensure design consistency and visual quality during construction"] },
    { type: "p", text: "Professional insight: Finishing drawings are often used with elevations to avoid site discrepancies." }
  ]],
  ["Working Drawings", [
    { type: "p", text: "Definition: Working drawings provide the technical details required for on-site construction." },
    { type: "list", items: ["Include dimensions, material specifications, installation notes, and construction instructions", "Guide contractors in fabrication, assembly, and site execution"] },
    { type: "p", text: "Research insight: High-quality working drawings can reduce construction errors and delays." }
  ]],
  ["As-Built Drawings", [
    { type: "p", text: "Definition: As-built drawings document the building as it was actually constructed." },
    { type: "list", items: ["Record deviations from original plans due to site conditions", "Support facility management, renovations, and future expansion"] },
    { type: "p", text: "Professional insight: Digital as-built drawings integrated with BIM support maintenance and smart building management." }
  ]],
  ["MEP Coordination Drawings", [
    { type: "p", text: "Definition: MEP coordination drawings integrate mechanical, electrical, and plumbing systems into a coordinated layout." },
    { type: "list", items: ["Prevent clashes between HVAC, plumbing, electrical, and architectural elements", "Support commercial and industrial buildings with dense service systems"] },
    { type: "p", text: "Professional insight: Revit and Navisworks coordination workflows can reduce rework compared with traditional 2D-only coordination." }
  ]],
  ["Excavation Drawings", [
    { type: "p", text: "Definition: Excavation drawings show the dimensions, depth, and method for earth removal." },
    { type: "list", items: ["Guide trenching, tunneling, and foundation excavation", "Support safety and efficiency during site preparation"] }
  ]],
  ["General Notes", [
    { type: "p", text: "Definition: General notes are textual instructions that accompany the drawing set." },
    { type: "list", items: ["Include bylaws, building codes, legends, abbreviations, and construction standards", "Help ensure legal, safety, and project-standard compliance"] }
  ]],
  ["Presentation Drawings", [
    { type: "p", text: "Definition: Presentation drawings are simplified visual drawings created for clients and non-technical stakeholders." },
    { type: "list", items: ["May include concept sketches, 3D renders, illustrated plans, and visual boards", "Help clients understand the final design early in the project"] }
  ]],
  ["Tools Used for Architectural Drawings", [
    "AutoCAD - for 2D drafting and detail drawings.",
    "Revit BIM - for building information modeling with 3D and data-rich coordination.",
    "SketchUp - for conceptual and perspective drawings.",
    "ArchiCAD and Vectorworks - for advanced architectural design workflows."
  ]],
  ["Importance of Architectural Drawings in Construction", [
    "Clear communication: supports smooth collaboration among architects, engineers, contractors, and stakeholders.",
    "Accuracy and precision: reduces construction errors and delays.",
    "Visualization: lets clients preview design intent through CAD and BIM models.",
    "Legal approvals: supports permits, zoning compliance, and government submissions.",
    "Efficient project execution: saves time, cost, and construction resources."
  ]],
  ["Why Architectural Drawings Matter in 2025", [
    "Accuracy in construction prevents costly rework.",
    "Enhanced collaboration improves architect, engineer, and contractor coordination.",
    "Regulatory compliance supports permits, zoning, and safety-code reviews.",
    "Visualization power helps reduce design misunderstandings and client rejections.",
    "Integration with digital tools connects drawings with BIM, VR, and digital twins."
  ]],
  ["Best Architectural Drawings and Drafting Service Provider", [
    "Choosing the right partner for architectural drawings and CAD drafting services makes a major difference in project quality.",
    "Milestone PLM Solutions supports 2D and 3D CAD drafting, BIM modeling, architectural rendering, visualization, and construction documentation including site plans, floor plans, sections, and elevations.",
    "The team focuses on accuracy, compliance, and efficiency for architectural drawing and drafting projects."
  ]],
  ["Conclusion", [
    "Architectural drawings are the blueprint of modern construction. From site plans and floor plans to as-built and MEP coordination drawings, each type plays a role in clarity, compliance, and project success.",
    "With CAD drafting, BIM integration, and digital collaboration tools, architectural drawings bridge the gap between design and execution.",
    "A strong drawing set helps reduce errors, save cost, and improve coordination throughout the project lifecycle."
  ]],
  ["Quick Takeaway Points", [
    "Architectural drawings are the foundation of every project.",
    "Each drawing type serves a unique function in design and construction.",
    "They improve collaboration between architects, engineers, and builders.",
    "A clear understanding of drawings helps reduce errors and improve efficiency.",
    "Mastering them is essential for students, professionals, and firms working in architecture and construction."
  ]],
  ["Follow Milestone PLM Solutions for Architecture Industry Updates, CAD Tips and Global Architecture News", [
    "Milestone PLM Solutions is a global CAD, BIM, and architectural design services outsourcing partner serving the Architecture, Interior, and Construction industry since 2004.",
    "The team assists with architectural design, 3D modeling, drafting and detailing, BIM modeling, rendering, and construction documentation.",
    "Milestone supports tools including AutoCAD, Revit, ArchiCAD, SketchUp, 3ds Max, and Navisworks for project delivery."
  ]]
];

const architecturalDrawingsFaqs = [
  ["1. What are the most common types of architectural drawings?", "The most common types include site plans, floor plans, sections, and elevations because they are required in almost every construction project."],
  ["2. Why are as-built drawings important?", "As-built drawings record the final construction outcome and are useful for renovations, maintenance, facility management, and future expansion."],
  ["3. Which software is best for architectural drawings?", "AutoCAD is widely used for 2D drafting, while Revit BIM is commonly used for 3D modeling, coordination, and data integration."],
  ["4. What is the difference between floor plans and site plans?", "A floor plan shows the internal layout of a building level, while a site plan shows the building location, surrounding property, access, utilities, and outdoor site features."],
  ["5. Why are MEP coordination drawings important?", "MEP coordination drawings help identify and resolve clashes between mechanical, electrical, plumbing, structural, and architectural systems before construction."],
  ["6. How do architectural drawings help construction teams?", "They provide clear dimensions, design intent, materials, specifications, notes, and coordination information so contractors can build accurately."]
];

export function architecturalDrawingsArticlePage() {
  const title = "Types of Architectural Drawings - A Complete Detailed Guide";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>September 30, 2025</span><span>Posted by: Tejas</span><span>Category: Architecture</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/types-of-architectural-drawings-a-complete-detailed-guide.webp" alt="${title}" loading="lazy">
          <p>Architectural drawings are the foundation of building design and construction. They are more than plans or diagrams; they are the visual language used by architects, engineers, builders, and clients.</p>
          <p>Architectural drawings communicate layout, dimensions, materials, finishes, and assembly details. Modern drawings are developed through CAD drafting, BIM modeling, review, and coordination rather than a single sketching step.</p>
          <p>This guide explains the most important types of architectural drawings and why they are essential for construction professionals.</p>
          ${architecturalDrawingsSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
          <section><h2>Frequently Asked Questions</h2>${architecturalDrawingsFaqs.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join("")}</section>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
