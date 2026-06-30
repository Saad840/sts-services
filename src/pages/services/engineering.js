import { engineeringServiceShell } from "../../components/service-layout.js";
import { serviceAccordions, serviceIndustries } from "./shared.js";

export const engineeringIndustries = [
  ["@", "Industrial & Heavy Equipment"],
  ["L", "Machinery & Robotics"],
  ["$", "Precision Manufacturing"],
  ["=", "Heavy Engineering"],
  ["+", "Medical Devices"],
  [">", "Consumer Products"],
  ["-", "Electric Enclosure and Transformer"],
  ["S", "Sheet Metal and Fabrication"],
  ["T", "Static Equipment"]
];

export const analysisIndustries = [
  ["@", "Automotive"],
  ["plug", "Electronics"],
  ["$", "Heavy Engineering"],
  ["cart", "Consumer Products"],
  ["#", "Industrial & Heavy Equipment"]
];

export const engineeringBatchPages = {
  "/service/product-design-and-development/": {
    title: "Product Design & Development",
    image: "/assets/images/services/detail/product-design-and-development-hero.jpg",
    heading: "Product Design & Development",
    intro: [
      "Our insightful product design services experience of more than a decade helps us assist product design and development firms looking for fast pace development of their most complex sheet metal components or machinery. Our product design services team has developed world-class products for our customers that involve rigorous research, design study, detail engineering, prototyping, and testing.",
      "We can manage an entire development program from receipt of the design concepts, through design engineering and data production, to tool design, mold-flow analysis and onwards to prototyping, using some of the most experienced engineers."
    ],
    sections: [
      { title: "Jigs & Fixture Design", body: ["Whether jigs and fixtures are used for repeatability and exact duplication of a part for reproduction, or for holding objects in place and clamp them for machining, they are very important devices for the manufacturing industry. Milestone supports fixture concepts, detailing, manufacturing drawings and validation support for production-ready tooling."], bullets: ["Welding Fixture Design", "Testing Fixture Design", "Machining Fixture Design"] },
      { title: "Special Purpose Machine Design", body: ["MILESTONE strives to offer the best services in custom design machinery completed with the best effective solutions that could be found on the market. Our team supports the design of individual pieces of equipment, integrated machine assemblies, material handling systems and automation-oriented mechanisms around customer process requirements."] },
      { title: "Mold Design", body: ["As part of our full services offerings, at MILESTONE, we also provide plastic mold design services that utilize a number of advanced molding processes. We help customers review part geometry, draft requirements, manufacturability, tooling concepts and mold-flow considerations before production decisions are made."] },
      { title: "Casting Design", body: ["Milestone supports casting design and development for components that need practical manufacturing feasibility, controlled wall thickness, draft, ribs, bosses, machining allowances and pattern or tooling considerations. Our team helps refine casting geometry for cost, weight, strength and production quality."] },
      { title: "Sheet Metal Design / Fabrication", body: ["At MILESTONE, we have always delivered high-quality robust designs that are compliant with the international standards. Our sheet metal design support includes enclosures, cabinets, brackets, guards, frames, panels, data center racks, industrial equipment parts and fabricated assemblies." ] },
      { title: "Plastic Product Design", body: ["Our skillsets are mated with our years of real world manufacturing experience, and can deliver comprehensive solutions, and a clear cost effective development and manufacturing path. We support concept refinement, CAD modeling, part detailing, manufacturability review and prototype-ready data preparation."] },
      { title: "Material Selection And Product Costing", body: ["Material selection and costing decisions influence product performance, manufacturing process, durability and total cost. Milestone helps review design alternatives, material options, part count, manufacturability, assembly approach and value engineering opportunities to support better product decisions."] },
      { title: "Reverse Engineering", body: ["The process of duplicating an existing component, subassembly, or product, without the aid of drawings, documentation. Milestone can capture existing geometry, convert scan data into CAD models and prepare usable engineering data for redesign, manufacturing or documentation."], bullets: ["White Light Scanning", "Point cloud to 3d modeling", "Point cloud and 3d model inspection"] },
      { title: "Virtual Reality", body: ["Virtual reality and digital visualization help teams review product concepts, assemblies, layouts and design intent before physical prototypes are built. These workflows support stakeholder review, design communication, ergonomics checks and faster decision-making during product development."] }
    ]
  },
  "/service/cad-drafting-services/": {
    title: "CAD & Detailing",
    image: "/assets/images/services/detail/cad-drafting-services-hero.jpg",
    heading: "CAD & Detailing",
    intro: [
      "MILESTONE offers multi-disciplinary Engineering Design and Drafting Services using latest and state of art technology Tools. Our Expert team of engineers having rich experience in industries like Automotive, Machinery & Robotics, Heavy Engineering, Industrial equipment and Aerospace.",
      "We know that engineering detailing is the key strength of high quality, cost and time-effective manufacturing. Getting the detail design right has become critical than ever before along with the product development life-cycle is shrinking."
    ],
    sectionTitle: "Our expertise in Engineering CAD Design and Detailing includes:",
    bullets: ["3D modeling and Assembly", "Sheetmetal Object designs", "Complex surface design", "General Arrangements & Layout preparation", "Intelligent part/sub-assembly/assembly/drawing creation", "Geometric Dimensioning & Tolerance, Tolerance Stack-up", "Hydraulic, Pneumatic Circuits & Piping Drawings", "Machining, Fabrication, Weldment drawings for Manufacturing", "BOM/Part list", "Spare/Operation/Maintenance Manuals", "Packaging drawing"]
  },
  "/service/manufacturing-support/": {
    title: "Manufacturing Support",
    image: "/assets/images/services/detail/manufacturing-support-hero.jpg",
    heading: "Manufacturing Support:",
    intro: [
      "We at MILESTONE, know engineering detailing is the key strength of high quality, cost and time-effective manufacturing support. Getting the correct manufacturing support services has become critical than ever before along with the product development life-cycle is shrinking.",
      "MILESTONE offers multi-disciplinary Engineering Design and Detailing Services using latest and state of art technology tools and manufacturing support. Our Expert team of engineers having rich experience in industries like Automotive, Machinery & Robotics, Heavy Engineering, Industrial equipment and Aerospace.",
      "Our best-in-class CAD & detailing services are managed through integrated engineering workflows and applications for mechanical and electrical elements, piping, and instrumentation projects. With more than 50+ engineers working, we engage with our customers as per the requirement. In comparison to by hiring additional in-house resources, we deliver your project cost-effectively and quickly than you could typically achieve."
    ],
    industries: [
      ["@", "Industrial & Heavy Equipment"],
      ["L", "Machinery & Robotics"],
      ["$", "Precision Manufacturing"],
      ["=", "Heavy Engineering"],
      ["+", "Medical Devices"],
      [">", "Consumer Products"]
    ],
    sectionTitle: "Our Manufacturing Support includes:",
    bullets: ["Computer Aided Manufacturing (CAM) Support : Tool-path generation upto 4 Axis", "Machining Fixture Design", "Wash Fixture Design", "Testing Fixture Design", "Welding Fixture Design", "Bubble prints", "Weld sequence SOP", "Packing List and drawing", "BOM/Part list", "Spare/Operation/Maintenance Manuals", "Assembly Sequence animation"]
  },
  "/service/automotive-design/": {
    title: "Automotive Design",
    image: "/assets/images/services/detail/automotive-design-reference-Automotive-Design-Services.jpg",
    heading: "Automotive Design Services",
    intro: [
      "Are you falling short of the expertise to plan and implement new automobile designs with a high-level of perfection? Are you finding it challenging to find design specifications, interior, exterior, design prototype and the final rendering of the model? Then, the best option for your organization would be to outsource automotive design and styling services to an experienced and skilled service provider.",
      "Milestone PLM Solutions is one such service provider who can be your one-stop-shop for all your automotive design requirements. Our team of automotive designers hail from some of the top design institutes and excel in their work. We tend to understand the client requirements with ease and provide the services accordingly."
    ],
    industries: [["@", "Automotive"], ["L", "Machinery & Robotics"], ["$", "Precision Manufacturing"]],
    sectionTitle: "Our Automotive Design Services includes:",
    groups: [
      { title: "Interior Trim:", bullets: ["Instrument & Cluster", "Centre console & Cup holder", "Cowl trim", "Pillar trims", "Door panel", "Headliner", "Carpet trims"] },
      { title: "Exterior Trims", bullets: ["Front & Rear Bumpers", "Grill", "Under body moldings", "Spoilers", "Mirrors", "Body Side Moldings", "Roof Rails"] },
      { title: "BIW Fixture Design", bullets: ["Welding fixture designing for Side body, under body, Enclosures etc.", "Designing of series production welding fixtures", "Designing of welding stations", "Side body framing station", "Checking and Setting fixtures", "Hemming fixtures", "Robotic Grippers"] }
    ],
    sections: [
      {
        title: "Design Process:",
        bullets: [
          "Design Capture - Vehicle Data, 2D Drawing/3D CAD model, Reverse Engineered Data",
          "3D Modelling, Detailing, Should Costing",
          "FE Modelling, Meshing, Modal Analysis, Dynamic Analysis",
          "Detail Manufacturing Drawings (3D and 2D)",
          "Engineering Change Management",
          "Technical Publication",
          "Design of Jigs, Fixtures & Gauges for Second Operations & Checking"
        ]
      }
    ]
  },
  "/service/fea-services-cfd-cae-simulation/": {
    title: "CFD & FEA",
    image: "/assets/images/services/detail/fea-services-cfd-cae-simulation-hero.jpg",
    heading: "CFD & FEA Services: Computer Aided Engineering",
    intro: [
      "At MILESTONE, we collaborate with design engineers to evaluate product design right from early design stages and minimize prototyping trials. Our FEA Services can provide key insights on the product performance under given boundary conditions to predict possible pre-mature failure. Additionally, we deliver design optimization solutions for existing products to reduce resource utilization while keeping product designs efficient.",
      "We offer quality FEA services at competitive rates which will help you overcome all the challenges and stay ahead of the competition.",
      "CFD (Computational Fluid Dynamics) and FEA (Finite Element Analysis) are two powerful tools used in engineering and scientific fields to simulate and analyze physical phenomena.",
      "CFD and FEA services are offered by specialized companies like us who provide their clients with accurate and reliable simulation results. These services can help clients optimize their designs, reduce prototyping costs, and improve the overall performance of their products. With the advancement in computer technology, CFD and FEA simulations have become faster, more accurate, and more affordable, making them an essential tool for engineering design and analysis."
    ],
    industries: analysisIndustries,
    sectionTitle: "CFD & Finite Element Analysis (FEA) Services Includes:",
    bullets: ["Static analysis", "Linear analysis", "Non-linearity (Time, Contact, Material & geometry)", "Dynamic boundary conditions", "Buckling", "Fatigue", "Thermal analysis", "CFD (Computational Fluid Dynamics)", "Design Optimization (Size, Shape & Topology)", "Electro-magnetics", "Multibody dynamic analysis", "Drop Test"],
    sections: [
      {
        title: "Prototype Testing And Validation:",
        body: ["In conjunction with a strategic partner, Milestone can manage and undertake combined physical test and FEA co-relation. This service includes the measurement and analysis of dynamic strains, loads, vibrations and displacements."]
      },
      {
        title: "Electronic Cooling Analysis:",
        body: ["Optimize the cooling strategy for electronic components concurrent to the design process using the Electronic Cooling Analysis. These capabilities include:"],
        bullets: ["Airflow Optimization", "Product Thermal Design", "Heat sink Selection/Design", "PCB Thermal Simulation", "Fan Selection"]
      }
    ]
  },
  "/service/meshing-services/": {
    title: "Meshing Services",
    image: "/assets/images/services/detail/meshing-services-hero.jpg",
    heading: "Meshing Services",
    intro: [
      "Using the latest meshing software tools, Milestone offer a complete meshing services for FEA, CFD, Boundary Element or any other discredited methods. We can work with either your provided CAD file as a starting point or allow us to generate both the underlying geometry & the mesh.",
      "Previous meshing projects undertaken have ranged from a few hours to months. All types of structured & unstructured meshes can be generated, from shells to tetrahedral & hex elements."
    ],
    industries: analysisIndustries,
    sectionTitle: "Meshing Services Includes:",
    paragraphs: [
      "<strong>Subcontract Services</strong> - If you prefer, a Milestone engineer can work on-site to supplement your current CAE team.",
      "<strong>Extensive Solver Support</strong> - Meshes can be exported to over 100 popular FEA & CFD codes, including NASTRAN, ABAQUS, ANSYS, LS-DYNA, FLUENT, STAR-CD & ANSYS CFX.",
      "<strong>Geometry Healing</strong> - Mesh generation problems are often caused by poorly defined geometry. We can fix geometry errors such as cracks, holes, thin slivers, duplicate surfaces, gaps and incorrect surface topology before meshing starts.",
      "<strong>Surfacing / Midplane Extraction</strong> - Solid model meshing of thin parts is generally not suitable for accurate FEA. We can generate mid-surfaces and extract suitable shell representations for thin-walled parts and assemblies.",
      "<strong>100% Pure or Hybrid Meshes</strong> - Hexahedral meshes can be generated for demanding FEA & CFD applications. Where a pure mesh is not practical, hybrid meshes can be created to meet customer specified quality standards.",
      "<strong>Mesh Morphing</strong> - We can morph your original mesh to improve quality, generate rapid shape changes and reuse existing analysis models without rebuilding the mesh from scratch.",
      "<strong>STL/Faceted Surface Handling</strong> - Faceted scan or STL data can be repaired, cleaned and prepared for simulation workflows so legacy meshes can be modified or reused for analysis."
    ]
  },
  "/service/technical-documentation-services/": {
    title: "Aftermarket / Technical Documentation",
    image: "/assets/images/services/detail/technical-documentation-services-hero.jpg",
    heading: "Aftermarket / Engineering Documentation:",
    intro: [
      "Our Technical Documentation services team works with clients to produce service and operation manuals for products ranging from washing machines to airplanes. The Engineering Documentation team also creates part illustrations and manufacturing instructions for components across industries.",
      "Milestone supports aftermarket and engineering documentation teams with clear, structured, and production-ready technical content. We help convert engineering inputs, CAD models, assembly information, and legacy documents into manuals, procedures, illustrations, and documentation packages that are easier to use, maintain, and update."
    ],
    industries: analysisIndustries,
    sectionTitle: "Aftermarket / Technical Documentation Services Includes:",
    bullets: ["SOP for Assembly of complex product", "SOP for service or maintenance procedure", "Animation of Assembly sequences", "Exploded Views for maintenance manuals", "High class/ Real-life rendering of your product", "Parts Management / ECR", "Manual Development", "Translation & Localization", "Document Conversion / Editing", "Technical Illustrations", "SOP Development"],
    sections: [
      {
        title: "Manual Development:",
        body: ["We prepare operation manuals, maintenance manuals, service manuals, installation guides, assembly instructions, training material, and product documentation that helps end users, technicians, and service teams understand the product clearly."]
      },
      {
        title: "Technical Illustrations And Exploded Views:",
        body: ["Our documentation team creates clear illustrations, exploded views, rendered visuals, part callouts, and assembly graphics from CAD data or engineering inputs so complex product information can be communicated in a simple and usable format."]
      },
      {
        title: "SOP Development And Assembly Sequences:",
        body: ["Milestone develops standard operating procedures for assembly, servicing, maintenance, inspection, and repair workflows. These documents help teams follow consistent processes, reduce ambiguity, and improve shop-floor and service performance."]
      },
      {
        title: "Document Conversion, Editing And Localization:",
        body: ["We support document conversion, editing, formatting, translation, localization, and engineering change updates so product documentation stays aligned with current product configurations and regional requirements."]
      },
      {
        title: "2D To 3D Conversion (Legacy Conversion / Data Migration):",
        body: ["Milestone offers a complete range of highly accurate and high-quality 2D to 3D legacy data conversion services. Legacy drawings, scanned inputs, and older product data can be converted into structured digital assets for engineering, manufacturing, and documentation workflows."]
      }
    ]
  },
  "/service/value-engineering-value-analysis/": {
    title: "Value Engineering & Value Analysis",
    image: "/assets/images/services/detail/value-engineering-value-analysis-hero.jpg",
    heading: "Value Engineering & Value Analysis:",
    intro: [
      "Each product design team and manufacturing units want to reduce design cycle time and bring their products to the market early to beat the competition.",
      "Value Engineering as a term originated in the early days of manufacturing, when material shortages and cost pressures created the need to achieve the required function at the lowest practical cost without sacrificing quality.",
      "Current product development teams can use the same value engineering principles with a digital approach of designing, simulation and optimization to reduce cost, weight and development time while improving product performance.",
      "We ensure our customer will get exact equilibrium between cost and quality using our Value Engineering and Value Analysis to maximize the value for you."
    ],
    industries: analysisIndustries,
    sectionTitle: "Our Services Includes:",
    bullets: ["Engineering Design Optimization:", "Product Weight and Cost Reduction:", "Product Operational performance optimization through Computer Aided Engineering", "Product Re-Engineering", "FMEA - Failure Mode Effective Analysis", "DFM - Design for Manufacturing", "DFA - Design for Assembly", "DFR - Design for Reliability", "Value Analysis & Value Engineering"],
    after: [
      "Our commitment to excellence in providing value engineering services is possible due to our well-equipped engineering facility, and a team of VE specialists to develop cost-effective strategies for our clients.",
      "Milestone delivers strategic partnership with industry experts and value engineering specialists who help customers identify practical opportunities for cost reduction, design improvement and manufacturing efficiency."
    ]
  },
  "/service/rapid-prototyping-services/": {
    title: "Rapid Prototyping",
    image: "/assets/images/services/detail/rapid-prototyping-services-hero.jpg",
    heading: "Rapid Prototyping:",
    intro: [
      "From concept to prototyping, Milestones' team of highly skilled design engineers will turn your design concept into a working rapid prototype. Our rapid prototyping services team will work with you to develop a rapid prototyping that meets your needs.",
      "If you have a CAD model, we will inspect your design for drafts, radius and possible interference and will do the required modifications.",
      "Rapid prototyping helps product teams validate form, fit, function and user experience before committing to production tooling. Milestone supports the complete prototype development path with CAD review, design refinement, engineering inputs and prototype-ready data preparation."
    ],
    industries: analysisIndustries,
    sections: [
      { title: "Our Prototyping Expertise:", body: ["Our highly qualified and experienced engineering team will guide you through the design, from concept to prototype. We use the appropriate prototyping solution for your application, including additive processes and subtractive processes.", "Our team can support prototype design review, CAD cleanup, manufacturability checks, material recommendations, tolerance review, assembly validation and documentation for prototype builds."] },
      { title: "Proof-of-Principle Prototype", body: ["Using this prototype, we help you prove your potential approach and test whether the intended concept can work before larger engineering or manufacturing investment begins."] },
      { title: "User Experience Prototype", body: ["Our user experience prototypes allow your stakeholders to view and experience the basic look, scale, ergonomics and functional intent of the product before the design is finalized."] },
      { title: "Visual Prototype", body: ["We use 3D CAD software and physical models to provide a visual prototype that allows design engineers, product teams and decision makers to refine shape, proportions, styling and presentation quality."] },
      { title: "Functional Prototype", body: ["When functional aspects of the design are important, our functional prototypes allow you to validate and improve mechanical behavior, fit, assembly, motion, usability and product performance."] }
    ]
  }
};

export const engineeringPageAliases = {
  "/service/manufacturing_support/": "/service/manufacturing-support/",
  "/service/cfd-fea/": "/service/fea-services-cfd-cae-simulation/",
  "/services/meshing-services/": "/service/meshing-services/",
  "/service/aftermath-engg-documentation/": "/service/technical-documentation-services/",
  "/services/value-engineering-value-analysis/": "/service/value-engineering-value-analysis/"
};

export const engineeringServiceRoutes = [
  ...Object.keys(engineeringBatchPages),
  ...Object.keys(engineeringPageAliases)
];

export function engineeringContent(page) {
  return `
    <h2>${page.heading}</h2>
    ${(page.intro || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
    ${serviceIndustries(page.industries || engineeringIndustries)}
    ${page.sectionTitle ? `<h2>${page.sectionTitle}</h2>` : ""}
    ${page.bullets ? `<ul class="check-list coordination-includes">${page.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    ${page.groups ? page.groups.map((group) => `<h3>${group.title}</h3><ul class="check-list coordination-includes">${group.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`).join("") : ""}
    ${page.paragraphs ? page.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("") : ""}
    ${(page.sections || []).map((section) => `<h2>${section.title}</h2>${(section.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}${section.bullets ? `<ul class="check-list coordination-includes">${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}`).join("")}
    ${(page.after || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
    ${serviceAccordions()}`;
}

export function engineeringBatchPage(currentPath) {
  const canonicalPath = engineeringPageAliases[currentPath] || currentPath;
  const page = engineeringBatchPages[canonicalPath];
  if (!page) return "";
  return engineeringServiceShell({
    title: page.title,
    image: page.image,
    activeHref: canonicalPath
  }, engineeringContent(page));
}
