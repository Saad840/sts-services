import { structuralServiceShell, architecturalServiceShell } from "../../components/service-layout.js";
import { industryItem, serviceAccordions, serviceIndustries, serviceInfoBoxes } from "./shared.js";

export const commonBuildingIndustries = [
  ["$", "Retail Shops"],
  ["#", "Office & Commercial"],
  ["^", "Residential"],
  ["%", "Restaurants & Hotels"],
  ["=", "Educational institutions"],
  ["[]", "Government buildings"],
  ["*", "Public libraries and Museums"],
  ["+", "Healthcare facilities"]
];

export const commonConstructionIndustries = [
  ["|", "Construction Services"],
  ["#", "Commercial Building"],
  ["^", "Residential Building"],
  ["=", "Architects"],
  ["A", "General Contracting"]
];

export const structuralBatchPages = {
  "/service/structural-bim/": {
    title: "Structural BIM",
    heading: "Structural BIM Services",
    image: "/assets/images/services/detail/structural-bim-candidate-Structural-BIM-1.jpg",
    intro: [
      "We are offering Structural BIM services for both concrete & steel structure of building design to our clients on various Structural BIM projects like Residential, Commercial and Industrial structures. We transform your schematic designs-SD or Hand Drawn Sketches into Accurate BIM model (Design Development Phase) and construction documents- CD set.",
      "Structural BIM services typically involve the creation of 3D models of structural components such as beams, columns, and foundations. These models can be used to analyze the structural performance of a building, identify potential design issues, and optimize the design for efficiency and safety.",
      "Structural BIM model developed by our engineers can be used to calculate building material and resources required to complete the project and also to ensure efficient cost and proper time management.",
      "We have a well-experienced team of Civil Engineers, structural engineers, structural BIM modelers and structural Draftsmen with sound knowledge of building standards and codes of the international project location.",
      "Structural engineering BIM modeling facilitates better coordination and collaboration with the architectural & MEP system."
    ],
    sectionTitle: "Structural BIM services in USA :",
    bullets: ["Structural BIM Modeling", "Precast Modeling & Detailing", "Steel Structure Detailing", "Rebar Detailing", "Coordination with Architectural and MEP Model", "Structural Shop Drawings", "Construction Documentation", "Creation of Parametric families of Structural elements.", "As-Built Modeling", "Point Cloud data to Structural BIM Modeling.", "Accurate BOQ Preparation"]
  },
  "/service/steel-detailing/": {
    title: "Steel Detailing",
    heading: "Steel Detailing Services",
    image: "/assets/images/services/detail/steel-detailing-hero.jpg",
    intro: [
      "Milestone offers variety of steel detailing services to steel fabricators, contractors, and structural engineers as per international industry standards in steel detailing which includes AISC, ANSI, OSHA & RSIO/RSIC. We have a professional and experienced team of civil engineers, structural engineers, structural BIM modelers and steel detailers.",
      "Steel detailing services typically include the preparation of detailed shop drawings that provide a comprehensive set of instructions for the steel fabricator. Our civil and structural engineers work with our clients to give the best possible solutions with detailed steel shop drawings."
    ],
    sectionTitle: "Our Steel Detailing Services includes :",
    bullets: ["Structural Steel Detailing", "Structural 3D Modeling & 2D Drafting", "Bill Of Quantity & Material Take-off", "Shop / Fabrication Drawings for different structural components like column, beam, brace, stair, handrail, ladders, etc", "Steel Connection Detailing and Fittings Drawings", "Steel Joist & Deck Detailing", "Erection Drawings for Connection"]
  },
  "/service/precast-detailing/": {
    title: "Precast Detailing",
    heading: "Precast detailing services :",
    image: "/assets/images/services/detail/precast-detailing-hero.jpg",
    intro: [
      "Milestone offers Precast Detailing services for residential buildings, commercial buildings, institutional buildings, multi-storey buildings, industrial structures, foundation structures, bridges, and modular structures.",
      "With extensive experience we carry out our clients precast detailing work by keeping the highest standards of quality and consistency with efficient workflow to deliver project on time and to the customer satisfaction.",
      "Precast detailing services include the preparation of detailed shop drawings that provide a complete set of instructions for the precast fabricator."
    ],
    sectionTitle: "Precast Detailing Services we offer",
    bullets: ["Wall panel detailing", "Stairs detailing", "Precast Embedment plan Detailing", "Lifting leg locations details", "Beam & Column Detailing", "Bar bending schedule", "Slab detailing", "Erection drawings", "Bill of Quantity and material take-off"]
  },
  "/service/rebar-detailing/": {
    title: "Rebar Detailing Services",
    heading: "Rebar Details Services",
    image: "/assets/images/services/detail/rebar-detailing-hero.jpg",
    intro: [
      "Milestone offers variety of rebar modelling, rebar detailing and rebar quantity estimation services. Our team comprises proficient rebar detailers who specialize in offering comprehensive rebar modelling, detailing, and estimation services.",
      "Our solutions are tailored to meet the needs of civil and structural engineers, rebar fabricators, general contractors, and designers. With our expertise, we guarantee to provide top-notch services to our clients.",
      "We prepare detail shop drawings for the placement of the reinforcing steel with accurate details on size, spacing, location, bends, shapes and lap of steel to meet the client's specific requirement of Building project."
    ],
    sectionTitle: "Rebar Detailing Includes",
    bullets: ["Framing and Foundation details", "Rebar shop drawings", "Rebar 2D drafting & 3D modelling in AutoCAD and Revit", "Bar bending schedules", "Footing detailing", "Grade beam detailing", "Retaining walls detailing", "Concrete joint and slab details", "Roof truss and joint details", "Bill of Quantity and material take-offs"]
  },
  "/service/structural-shop-drawings/": {
    title: "Structural Shop Drawing Services",
    heading: "Structural Shop Drawings",
    image: "/assets/images/services/detail/structural-shop-drawings-reference-Structural-shop-Drawings-2.jpg",
    intro: [
      "We provide various structural shop drawings services including steel structures shop drawings, detailed plans of fabricated elements, trusses, reinforced concrete and precast concrete.",
      "Our structural team of highly qualified and experienced Structural engineers and draftsmen work with our clients to give the best possible solution on every building project which in turn saves lot of time, cost, labor, and materials.",
      "Our structural shop drawings services produce accurate and reliable drawings for steel, concrete and wood structures, ensuring that all components fit and functions correctly."
    ],
    sectionTitle: "Our Services",
    bullets: ["Steel Structure Shop drawings", "Stair case and Handrail Shop Drawing", "Steel Fabrication Drawing", "Erection & GA diagrams", "Cabinets Shop Drawing", "precast concrete shop drawing"],
    extraTitle: "International Standards we Work with:",
    extraBullets: ["AWI (Architectural Woodwork Institute)", "AWMAC (Architectural Woodwork Manufacturers Association of Canada)", "NAAWS (North American Architectural Woodwork Standards)", "AWS (American Welding Society)", "NKBA (National Kitchen & Bath Association)"]
  },
  "/service/structural-construction-document/": {
    title: "Structural Construction Documentation Services",
    heading: "Structural Construction Doc",
    image: "/assets/images/services/detail/structural-construction-document-reference-Engineering-Services1-e1618664644886.jpg",
    intro: [
      "We provide complete set of structural Construction documents along with the construction schedules and material takeoffs from design model that our customers needs to convey the design concept to the Construction professionals to complete the design Process of any building project.",
      "Structural construction document set consists of several structural detailed sheets, each sheet includes drawings with all dimensions, notes and schedules for the building design project.",
      "Construction documents set preparation is the last stage of the design process. Construction document set includes the civil, architectural, structural, and MEP drawings."
    ],
    industries: [["@", "Automotive"], ["plug", "Electronics"], ["$", "Heavy Engineering"], ["cart", "Consumer Products"], ["#", "Industrial & Heavy Equipment"]],
    sectionTitle: "Structural Construction Drawings :",
    bullets: ["Foundation details", "Beam Layout", "Framing plans", "Foundation Plan", "Column Layout", "Slab Layout", "Roof Layout", "Floor plan & Elevations", "Building Section", "Stair Plan and Section", "Connection details", "Wall Section", "Typ. Roof Detail"]
  },
  "/service/structural-3d-modeling/": {
    title: "Structural 3D Modeling Services",
    heading: "Structural 3D Modeling Services in USA",
    image: "/assets/images/services/detail/structural-3d-modeling-candidate-Structural-3D-Modeling-1.jpg",
    intro: [
      "We offer Structural 3D Modeling services in which we generate accurate 3D model from the client inputs such as hand drawn sketches, scanned images, Schematic design, Sketchup Model and markup drawings facilitating our client visualization of structure and helping our clients convey their design concepts through accurate 3D models to their construction team.",
      "Structural 3D Modeling allows architects and engineers to create accurate digital representations of buildings and structures, optimizing design and reducing errors."
    ],
    sectionTitle: "Our Services :",
    bullets: ["Structural framing modeling", "Reinforced concrete modeling", "Steel framing modeling", "As built modelling", "Precast modeling", "Connection modeling", "Foundation modeling", "Rebar modeling", "Structural stair modeling", "Parametric family modelling", "Scan to CAD and Scan to BIM"]
  },
  "/service/structural-2d-drafting/": {
    title: "structural 2D Drafting Services",
    heading: "Structural 2D Drafting Services:",
    image: "/assets/images/services/detail/structural-2d-drafting-hero.jpg",
    intro: [
      "Milestone offer high quality Structural 2D drafting Services to our global client base. Our structural 2D drafting services include structural detailing for single family, Multifamily residential, commercial buildings, Public Building and different construction projects.",
      "Our team consists of well qualified and skilled structural engineer and draftsmen with proper experience in an area in Structural 2D Drafting. We can generate Detailed 2D Drawing from the client inputs such as hand drawn sketches, scanned images, Schematic design, Sketchup and Revit Model and markup drawings."
    ],
    industries: commonConstructionIndustries,
    sectionTitle: "Our Structural 2D Drafting services includes:",
    bullets: ["General Arrangement Drawing or Erection Drawings for construction", "Connection & Fittings Drawings", "Steel detailing drawing", "Shop/ Fabrication Drawings"],
    sidebar: "architectural"
  }
};

export function structuralBatchPage(currentPath) {
  const page = structuralBatchPages[currentPath];
  if (!page) return "";
  const content = `
    <h2>${page.heading}</h2>
    ${page.intro.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    ${serviceIndustries(page.industries)}
    <h2>${page.sectionTitle}</h2>
    <ul class="check-list coordination-includes">${page.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
    ${page.extraTitle ? `<h2>${page.extraTitle}</h2><ul class="check-list coordination-includes">${page.extraBullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    ${serviceAccordions()}`;
  if (page.sidebar === "architectural") {
    return architecturalServiceShell({ title: page.title, image: page.image, activeHref: currentPath }, content);
  }
  return structuralServiceShell({ title: page.title, image: page.image, activeHref: currentPath }, content);
}

export function millworkDraftingPage() {
  const services = ["Commercial cabinet Drafting", "Architectural woodwork drawings", "Cabinet / casework construction drawings", "Door & Trim casings", "Custom Kitchen & Closet drawings", "Bathroom vanities drawings", "AutoCAD Shop Drawings", "Microvellum Shop Drawings", "AutoCAD Woodwork Drafting", "Architectural casework drawings", "Millwork design drafting", "Woodwork Assembly Drawings", "Wooden stairs & framing", "Estimation & Quantity Take Off", "Cabinet Vision Shop Drawings"];
  const standards = ["AWI (Architectural Woodwork Institute)", "AWMAC (Architectural Woodwork Manufacturers Association of Canada)", "NAAWS (North American Architectural Woodwork Standards)", "AWS (American Welding Society)", "NKBA (National Kitchen & Bath Association)"];
  const content = `
    <h2>Millwork Drafting Services in USA</h2>
    <p>Milestone helps Millwork Drafting Services to companies and fabricators to visualize what they are building by providing quality Shop drawings and 3D modeling. Architectural Millwork & Cabinet shop drawings eliminates any possible errors and enable accurate & timely production and installation of custom vanity, closets, doors and other millwork products.</p>
    <p>The millwork detailing team in Milestone has a wide experience in <strong>Millwork modelling & drafting services</strong>. They have not only a good understanding of the millwork design and production processes but also of automated machining process. Over many years, we are providing a diverse range of millwork detailing services for our global customers.</p>
    <h2>Industries we Serve</h2>
    <div class="coordination-industries">${commonBuildingIndustries.map(industryItem).join("")}</div>
    <hr>
    <h2>Our Millwork Drafting services includes:</h2>
    <ol class="two-column-list">${services.map((item) => `<li>${item}</li>`).join("")}</ol>
    <p><strong>Architectural Space Enhancement through Custom Millwork Drafting Solutions :</strong> Our millwork Engineers are highly trained to generate shop drawings & 3D models within a short turnaround time. Millwork or casework 3D models can be used to generate 2D drawings directly or extract from them.</p>
    <h2>International Standards we Work with:</h2>
    <ul class="check-list coordination-includes">${standards.map((item) => `<li>${item}</li>`).join("")}</ul>
    ${serviceAccordions()}`;
  return architecturalServiceShell({
    title: "Millwork Drafting Services",
    image: "/assets/images/services/detail/millwork-drafting-services-candidate-Millwork-Drafting-Services-1.jpg",
    activeHref: "/service/millwork-drafting-services/",
    heroClass: "millwork-hero"
  }, content);
}

export function furnitureModelingPage() {
  const services = [
    "3D furniture modeling",
    "Parametric furniture families",
    "Casework and cabinet modeling",
    "Custom furniture components",
    "Furniture shop drawing support",
    "Modeling from sketches, PDFs or CAD files",
    "Material, finish and hardware coordination",
    "Presentation and visualization models",
    "Manufacturing-ready model cleanup",
    "BOM and quantity support"
  ];
  const content = `
    <h2>Furniture Modeling Services</h2>
    <p>Milestone provides furniture modeling services for architects, designers, millwork teams, manufacturers and contractors who need accurate digital furniture models for design coordination, visualization, documentation and production support.</p>
    <p>Our team creates detailed 3D furniture models from sketches, reference images, CAD drawings, PDFs, site inputs and design intent. These models help teams review form, proportion, material, finish, hardware, joinery and installation requirements before fabrication or procurement begins.</p>
    <h2>Industries we Serve</h2>
    <div class="coordination-industries">${commonBuildingIndustries.map(industryItem).join("")}</div>
    <hr>
    <h2>Our Furniture Modeling services includes:</h2>
    <ul class="check-list coordination-includes">${services.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>Furniture Modeling For Better Coordination</h2>
    <p>Furniture models can be used for architectural coordination, interior planning, BIM integration, renderings, shop drawing preparation, manufacturing review and client presentations. Accurate models reduce ambiguity between design, procurement, fabrication and installation teams.</p>
    <p>Milestone can support individual custom furniture items as well as large libraries of repeated furniture, fixtures and casework elements. Models can be prepared around project standards, level-of-detail requirements, software workflows and downstream documentation needs.</p>
    ${serviceAccordions()}`;
  return architecturalServiceShell({
    title: "Furniture Modeling",
    image: "/assets/images/services/detail/millwork-drafting-services-candidate-Millwork-Drafting-Services-1.jpg",
    activeHref: "/service/furniture-modeling/",
    heroClass: "millwork-hero"
  }, content);
}
