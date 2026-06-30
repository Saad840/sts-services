import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

const structuralDesignProcessSections = [
  ["7 Core Steps of Structural Design of Building", [
    { type: "p", text: "The structural design process makes buildings safe, stable, and durable through a series of coordinated steps including architectural plan review, loading, structural analysis, member design, detailing, and construction supervision." },
    { type: "p", text: "A disciplined workflow gives engineers and project teams a roadmap for efficient, cost-effective, and long-life structures while reducing design errors and optimizing materials." }
  ]],
  ["Step 1: Conceptual Design", [
    { type: "p", text: "Before detailed structural design begins, engineers study the architectural plan and work with architects to make sure the proposed structure can be supported efficiently." },
    { type: "list", items: ["Building layout and floor plans", "Column placements and wall systems", "Stairs, openings, and lift shafts", "Intended usage, such as residential, commercial, or industrial", "Choice of materials such as RCC, steel, or composite systems"] },
    { type: "p", text: "Strong conceptual design aligns the architectural vision with structural realities and reduces revisions during later project stages." }
  ]],
  ["Step 2: Load Analysis", [
    { type: "p", text: "Accurate load analysis is essential because every structure must safely carry permanent, temporary, lateral, and environmental forces." },
    { type: "list", items: ["Dead loads: permanent self-weight from slabs, beams, columns, walls, finishes, and fixed systems", "Live loads: temporary and movable forces from occupants, furniture, equipment, and usage", "Wind loads: lateral forces influenced by building height, location, and terrain", "Seismic loads: earthquake forces considered for lateral stability", "Additional loads: temperature, snow, construction, and environmental forces"] },
    { type: "p", text: "Engineers evaluate these loads according to applicable codes and standards such as IS, ACI, and Eurocodes." }
  ]],
  ["Step 3: Structural Analysis", [
    { type: "p", text: "Structural analysis determines how the proposed building will respond to loads and how forces move through slabs, beams, columns, walls, and foundations." },
    { type: "p", text: "Common analysis tools include ETABS, STAAD Pro, SAP2000, and Tekla Structural Designer." },
    { type: "list", items: ["Bending moments", "Shear forces", "Axial forces", "Deflections and displacements", "Load distribution paths"] },
    { type: "p", text: "This analysis confirms that the structural members can safely carry the expected forces before drawings and detailing are finalized." }
  ]],
  ["Step 4: Structural System Design", [
    { type: "p", text: "The structural system is selected based on building type, usage, site conditions, height, construction method, and budget." },
    { type: "list", items: ["RCC frame structures", "Shear wall systems", "Steel frame structures", "Flat slab or ribbed slab systems", "Composite systems"] },
    { type: "p", text: "The right system balances safety, cost-effectiveness, constructability, and long-term performance." }
  ]],
  ["Step 5: Design of Structural Elements", [
    { type: "p", text: "Once the structural system is chosen, each building component is designed to transfer loads safely to the foundation." },
    { type: "list", items: ["Slabs, including one-way, two-way, flat, and ribbed slabs", "Beams designed for bending, shear, and torsion", "Columns designed for axial loads, bending, and slenderness", "Foundations such as isolated, combined, raft, or pile foundations depending on soil conditions", "Shear walls and core walls for lateral stability"] },
    { type: "p", text: "Element design turns analysis results into practical member sizes, reinforcement requirements, and construction-ready structural intent." }
  ]],
  ["Step 6: Detailing, Drafting, and BIM Coordination", [
    { type: "p", text: "Detailing converts engineering design into construction drawings that contractors and fabricators can follow on site." },
    { type: "list", items: ["Reinforcement detailing, including bar sizes, spacing, lap lengths, anchorage, and cover", "Beam-column connection details", "Plans, elevations, sections, reinforcement details, schedules, and notes"] },
    { type: "p", text: "Revit and Tekla BIM coordination help structural teams coordinate with architecture and MEP disciplines, reduce clashes, and avoid documentation errors." }
  ]],
  ["Step 7: Construction Administration and Quality Control", [
    { type: "p", text: "Structural engineers support the construction phase to make sure the approved design is implemented correctly." },
    { type: "list", items: ["Reviewing shop drawings", "Verifying reinforcement and formwork placement", "Monitoring concrete quality and curing", "Checking specifications and safety-code compliance", "Updating as-built drawings"] },
    { type: "p", text: "Active supervision and quality control help the final structure perform as intended throughout its service life." }
  ]],
  ["Common Mistakes to Avoid in Structural Design", [
    { type: "p", text: "Even well-planned structures can face cost, safety, and schedule problems when common design mistakes are missed." },
    { type: "list", items: ["Ignoring soil investigation and site conditions", "Miscalculating loads or overlooking seismic and wind effects", "Poor detailing of joints and reinforcements", "Lack of coordination with architects and MEP teams", "Neglecting BIM coordination or software validation", "Skipping site supervision and quality checks"] },
    { type: "p", text: "Avoiding these issues reduces construction failures, project delays, rework, and unnecessary cost." }
  ]],
  ["Best Practices for Successful Structural Design", [
    "Start structural design planning early and coordinate it with the architectural concept.",
    "Use BIM and advanced structural analysis software for better accuracy and coordination.",
    "Maintain detailed documentation of calculations, drawings, and revisions.",
    "Use peer review or third-party checks for complex projects.",
    "Coordinate regularly with architects, MEP teams, contractors, and fabricators.",
    "Follow relevant building codes, material standards, and safety requirements."
  ]],
  ["Conclusion", [
    "The step-by-step workflow for structural design is a comprehensive journey that helps deliver buildings that are safe, durable, and cost-effective.",
    "From conceptual design and load analysis to system selection, detailing, BIM coordination, and construction supervision, every step contributes to a reliable final structure.",
    "By following best practices and avoiding common mistakes, engineering teams can deliver structural designs that meet project goals, international standards, and long-term performance expectations."
  ]],
  ["Looking to Outsource Structural Design and Modeling Services for Your Next Project?", [
    "Choosing the right outsourcing partner for structural modeling and design can save time, reduce cost, and improve documentation accuracy.",
    "Milestone PLM Solutions supports AEC and engineering firms with structural design, modeling, drafting, detailing, and BIM coordination services for projects worldwide.",
    "Our team helps streamline structural workflows, improve accuracy, optimize schedules, and support project teams with reliable engineering documentation."
  ]]
];

const structuralDesignProcessFaqs = [
  ["1. What is the structural design process in building construction?", "It is the process of analyzing and designing the load-bearing components of a building to make sure the structure is safe, stable, and able to withstand expected loads."],
  ["2. What are the key steps involved in structural design?", "Key steps include conceptual planning, load calculations, structural analysis, material selection, member design, detailing, and preparation of structural drawings."],
  ["3. Why are load calculations important in structural engineering?", "Load calculations determine the forces a structure must resist and help engineers design safe, durable, and code-compliant buildings."],
  ["4. What software is commonly used for structural analysis and design?", "Common tools include ETABS, STAAD Pro, SAFE, SAP2000, Tekla Structures, and Revit Structure."],
  ["5. How do structural engineers ensure a building is safe?", "They follow design codes, perform simulations, verify load combinations, check deflections, review detailing, and coordinate construction documentation."],
  ["6. What information is included in structural construction drawings?", "Structural drawings include plans, sections, elevations, reinforcement details, member sizes, connection details, notes, schedules, and specifications."]
];

export function structuralDesignProcessArticlePage() {
  const title = "Step-by-Step Workflow for Structural Design of Buildings Projects";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>December 10, 2025</span><span>Posted by: Tejas</span><span>Category: Architecture</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/step-by-step-process-for-structural-design-of-buildings-projects.webp" alt="${title}" loading="lazy">
          <p>The structural design process develops a building structure that is safe, reliable, and effective in supporting loads and environmental conditions. It includes analysis, planning, and design of structural elements according to current standards and engineering best practices.</p>
          <p>Structural engineers use technical knowledge and practical experience to create reliable designs, detailed drawings, and workable solutions for buildings and infrastructure. Their role goes beyond calculations and includes problem-solving, material selection, coordination, and long-term structural quality.</p>
          ${structuralDesignProcessSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
          <section><h2>Frequently Asked Questions (FAQs)</h2>${structuralDesignProcessFaqs.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join("")}</section>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
