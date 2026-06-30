import { architecturalServiceShell, architecturalServiceSidebar } from "../../components/service-layout.js";

export function architecturalRenderingPage() {
  const industries = [
    ["▦", "Construction Services"],
    ["▥", "Commercial Building"],
    ["⌂", "Residential Buildings"],
    ["▤", "Architects"],
    ["△", "General Contracting"]
  ];
  const services = [
    "3D Architectural rendering along with light and shadow analysis",
    "3D Interior & exterior rendering for photo realistic look",
    "Interactive Walkthroughs and Flythrough for residential, commercial and industrial buildings",
    "Interactive renderings for VR, AR or MR",
    "3D Walkthrough of architectural sites",
    "3D Floor plans rendering of residential, commercial and industrial buildings",
    "Furniture rendering of 3D CAD models with textures",
    "3D Product rendering for efficient design communication"
  ];
  const buildingTypes = [
    "Residential & Commercial Buildings",
    "Industrial Buildings",
    "High & Low-rise Buildings",
    "Educational Institutions",
    "Parking Garages",
    "Restaurants and Hotels"
  ];
  const uses = [
    "Securing Permits and Local Body Approvals",
    "Advertising",
    "Ongoing Marketing",
    "Quick Financing",
    "Better Communication",
    "Reduce Development Costs"
  ];
  const related = [
    "Architectural Visualization",
    "3D Rendering Services",
    "Exterior 3D Renderings",
    "Walkthrough",
    "3D architectural rendering services",
    "Architectural 3D rendering.",
    "Architectural visualization."
  ];
  const accordions = [
    {
      title: "Pricing And Consulting Engagement Options",
      open: true,
      bullets: [
        "Hourly- rates are available, based on your volume of work and type of work",
        "Full-time Equivalent – rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>3D Rendering Services and Architectural Visualization:</h2>
    <p>Milestone assists you with high-quality <a href="/service/3d-architectural-visualization-3d-rendering-services/">3D Architectural visualization</a> services, 3D Rendering, and Animation Services spanning residential, commercial, or institutional structures. Our high-quality 3D Renderings and animations have been an enabler for showcasing high-quality photo-realistic output to prospective clients before the actual commencement of the project.</p>
    <p>We strive to add maximum value to Architects and Realtors by equipping all with high-quality 3D architectural visualization services, 3D renderings services in the least timeframe, and optimum pricing. Get in touch with us to see how you can accentuate your property marketing efforts by utilizing high-quality visuals across platforms like Instagram, Facebook, and YouTube.<br>3D rendering services are also used to create product renderings. Manufacturers use 3D rendering to create realistic product models that can be used in marketing materials and product design.<br>One of the main advantages of 3D rendering services is the ability to create accurate and detailed CAD drawings. CAD drawings are essential in the construction industry, as they provide a precise representation of a building or product.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries revit-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Our services for 3D Rendering and Animation includes:</h2>
    <ul class="check-list coordination-includes">${services.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>We Provide Renderings & Animations for different types of buildings:</h2>
    <ul class="check-list coordination-includes">${buildingTypes.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>Common Uses for 3D Renders:</h2>
    <ul class="check-list coordination-includes">${uses.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>Other Related Services</h2>
    <ul class="check-list coordination-includes">${related.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return architecturalServiceShell({
    title: "3D Rendering Services",
    image: asset("2020/07/3D-Rendering-Services.jpg"),
    activeHref: "/service/3d-architectural-visualization-3d-rendering-services/"
  }, content);
}

export function architectural3dModelingPage() {
  const industries = [
    ["🛒", "Retail Shops"],
    ["▦", "Office & Commercial"],
    ["⌂", "Residential"],
    ["▥", "Restaurants & Hotels"],
    ["▣", "Educational institutions"],
    ["▤", "Government buildings"],
    ["♟", "Public libraries and Museums"],
    ["✚", "Healthcare facilities"]
  ];
  const services = [
    "We provide accurate 3D modeling in softwares like Revit, Archicad, Vectorworks, Sketchup and 3DS max etc.",
    "3D Architectural Modeling",
    "3D interior Modeling",
    "3D Modeling for Structural Elements",
    "3D MEP Modeling",
    "3D furniture modeling",
    "BIM family modeling",
    "Scan to BIM – Modeling from Point cloud",
    "2D to 3D conversion"
  ];
  const accordions = [
    {
      title: "Pricing And Consulting Engagement Options",
      open: true,
      bullets: [
        "Hourly rates are available, based on your volume of work and type of work",
        "Full-time Equivalent – rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>Architectural 3D Modeling services in USA</h2>
    <p><a href="/">Milestone PLM Solutions</a> provide Architectural 3D Modeling services in USA. This is a basic service that we offer to our client's such as architects, general contractors, owners and builders. A building 3D model offers better visualization, accurate interpretation of building facility and minimize the errors in construction also ensures that There is a smooth communication between the architect and the structural & MEP engineers in understanding the complete requirement of the client. 3D models are widely used for Presentations to the builders and owners and also for approval of project from the local authority.</p>
    <p>We provide Architectural 3D Modeling services in USA that allows a multidisciplinary team of product developers, engineers, and designers to share a single <a href="/top-benefits-of-3d-modeling-for-design-development-and-manufacturing/">3D model</a> that includes all design elements.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Our Services</h2>
    <ul class="check-list coordination-includes">${services.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return architecturalServiceShell({
    title: "Architectural 3D Modeling",
    image: asset("2023/04/Architecture-3D-Modeling.jpg"),
    activeHref: "/service/architectural-3d-modeling/"
  }, content);
}

export function architecturalBimModelingPage() {
  const industries = [
    ["▦", "Construction Services"],
    ["▥", "Commercial Building"],
    ["⌂", "Residential Building"],
    ["▤", "Architects"],
    ["△", "General Contracting"]
  ];
  const benefits = ["Reduced change orders", "Optimized Schedule", "Enhanced quality work", "Quick handover", "Competitive prices"];
  const schematic = [
    "Exterior view of the building",
    "Interior view of the building",
    "3D Visualization",
    "Intelligent libraries for different building components with various styles and specifications"
  ];
  const development = [
    "Elevations",
    "Floor plans",
    "Building schemes",
    "4D BIM – Construction Simulation",
    "5D BIM – Cost Estimation",
    "Level of Detail LOD (100, 200, 300, 350, 400 & 500)",
    "Information on material specifications, quantities, time schedules and costs"
  ];
  const documents = ["Building Sections", "Staircase/Vertical Circulation details", "Construction details"];
  const other = [
    "Architectural BIM services",
    "construction documents",
    "Architectural Revit 3D Modeling",
    "CAD Drafting to Architectural BIM",
    "Revit Family Creation",
    "Site Modeling",
    "4D and 5D BIM",
    "Architectural Interior Modeling",
    "Scan to BIM",
    "Revit BIM 3D Modeling",
    "BIM Coordination",
    "Point Cloud Modeling"
  ];
  const accordions = [
    {
      title: "Pricing And Consulting Engagement Options",
      open: true,
      bullets: [
        "Hourly- rates are available, based on your volume of work and type of work",
        "Full-time Equivalent – rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>High-quality and Cost-Effective Architectural BIM Services:</h2>
    <p>Milestone offers a complete solution for architects, construction companies, contractors, and builders. Our services range from initial architectural CAD and BIM offerings to Scan to BIM, construction drawing sets, 3D renderings, and 2D drawings, providing an end-to-end solution for our clients.</p>
    <p>We are a BIM outsourcing company with a specialization in providing BIM Architectural Services, 3D BIM modeling, and 4D/5D BIM modeling services. Our services cater to a broad range of AEC stakeholders such as designers, contractors, engineers, testers, trainers, and engineering companies. Similarly, Domain expertise, extensive experience, and a talented BIM technology team are our key strengths</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries revit-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Key Benefits to Customers</h2>
    <ul class="check-list coordination-includes">${benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
    <p><a href="/">Milestone</a> ensures that delivery of our BIM Architecture Services is accurate and up-to-date mark with respect to the design specifications, quantities and all other properties of the building components.</p>
    <p>Our architectural BIM modeling services extends to managing all design changes as project updates. So, the Principal architect can take better well-informed decisions that will help to reduce design errors thus cost. Our proficient team can create a blend of drawings and documentation that guarantee smooth integration between design, analysis, engineering, construction, and operations throughout the construction site's entire life-cycle.</p>
    <p>Architectural BIM Services assist architects throughout the design and construction process, entailing the creation of precise 3D models that offer a comprehensive understanding of the final building design's architectural perspective.</p>

    <h2>Architectural BIM Modeling Services Includes:</h2>
    <h3>SCHEMATIC DESIGN</h3>
    <ul class="check-list coordination-includes">${schematic.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3>DESIGN DEVELOPMENT</h3>
    <ul class="check-list coordination-includes">${development.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3>CONSTRUCTION DOCUMENT</h3>
    <ul class="check-list coordination-includes">${documents.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3>Other Services</h3>
    <ul class="check-list coordination-includes">${other.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return architecturalServiceShell({
    title: "Architectural BIM Modeling",
    image: asset("2020/07/Architectural-BIM-Modeling-1.jpg"),
    activeHref: "/service/architectural-bim-modeling-services/"
  }, content);
}

export function revitBimServicesPage() {
  const industries = [
    ["🛒", "Retail Shops"],
    ["▦", "Office & Commercial"],
    ["⌂", "Residential"],
    ["▥", "Restaurants & Hotels"],
    ["▣", "Educational institutions"],
    ["▤", "Government buildings"],
    ["♟", "Public libraries and Museums"],
    ["✚", "Healthcare facilities"]
  ];
  const services = [
    "Revit BIM Architectural, structural and MEP Modeling",
    "AutoCAD to Revit Conversion",
    "Hand Drawn Sketches to Revit Modeling",
    "Sketchup to Revit Conversion",
    "Scan to BIM",
    "Revit family creation",
    "Construction Documents",
    "Schedule and Quantities"
  ];
  const accordions = [
    {
      title: "Pricing And Consulting Engagement Options",
      open: true,
      bullets: [
        "Hourly rates are available, based on your volume of work and type of work",
        "Full-time Equivalent – rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>Revit BIM Services in USA</h2>
    <p>Milestone is a leading global BIM service provider specialized in offering Autodesk Revit BIM services to a wide range of customer such as Architects, General contractors, Builders, Owner, manufacturers & fabricators.<br>Our Revit BIM services are focused on helping our customers in the various phases of project such as design development, shop drawing, drafting and detailing, preparation of construction documentation and As-Built modelling.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Our Revit BIM Services</h2>
    <ul class="check-list coordination-includes">${services.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return architecturalServiceShell({
    title: "Revit BIM Services",
    image: asset("2023/04/Revit-BIM-Services.jpg"),
    activeHref: "/service/revit-bim-services/"
  }, content);
}

export function architecturalConstructionDocsPage() {
  const industries = [
    ["$", "Retail Shops"],
    ["#", "Office & Commercial"],
    ["^", "Residential"],
    ["%", "Restaurants & Hotels"],
    ["=", "Educational institutions"],
    ["[]", "Government buildings"],
    ["*", "Public libraries and Museums"],
    ["+", "Healthcare facilities"]
  ];
  const architecturalDrawings = [
    "Site Plan",
    "Floor Plans",
    "Roof plans",
    "Elevations",
    "Door and windows schedule sheet",
    "Interior elevations",
    "Reflected Ceiling Plans (RCP)",
    "Building Sections",
    "Wall sections",
    "Area Plan"
  ];
  const structuralDrawings = [
    "Foundation details",
    "Beam Layout",
    "Framing plans",
    "Foundation Plan",
    "Column Layout",
    "Slab Layout",
    "Roof Layout"
  ];
  const mepDrawings = [
    "Mechanical ( HVAC )",
    "Electrical",
    "Plumbing",
    "Firefighting"
  ];
  const accordions = [
    {
      title: "Pricing And Consulting Engagement Options",
      open: true,
      bullets: [
        "Hourly rates are available, based on your volume of work and type of work",
        "Full-time Equivalent - rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>CONSTRUCTION DOCUMENTATION- CD sets</h2>
    <p>Architectural Construction Docs are prepared in detail by our experts - CD sets from Design Model or from the input information given by our customer that help our customer to draft total information associated with the building project. We utilize our BIM services to prepare comprehensive and accurate detailed Construction Documents- CD sets for various architectural building projects that helps our client to communicate the design intent in accurate manner.</p>
    <p>Construction documentation -CD sets is the process of creating and documenting design drawings with accurate detailing such as material & Finishes, Project and installation information. Construction documents - CD sets, provide essential information of the building design and construction and use for building permit application and construction administration for various building type such as single-family residences, multifamily residences, small commercials, high rise buildings, public building etc</p>
    <p>We provide accurate Architectural Construction Docs - CD sets for architectural design model, structural engineering Model and MEP systems model using different software tools like AutoCAD, Revit, Archicad and vectorworks etc.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Construction documents - CD sets</h2>
    <h3>Architectural Construction Drawings</h3>
    <ul class="check-list coordination-includes">${architecturalDrawings.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3>Structural Construction Drawings</h3>
    <ul class="check-list coordination-includes">${structuralDrawings.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3>MEP Construction Drawings</h3>
    <ul class="check-list coordination-includes">${mepDrawings.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "-" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return architecturalServiceShell({
    title: "Architectural Construction Docs",
    image: "/assets/images/services/detail/architectural-construction-docs-reference-Architectural-Construction-Docs-1.jpg",
    activeHref: "/service/architectural-construction-docs/"
  }, content);
}

export function modularBimServicesPage() {
  const industries = [
    ["$", "Retail Shops"],
    ["#", "Office & Commercial"],
    ["^", "Residential"],
    ["%", "Restaurants & Hotels"],
    ["=", "Educational institutions"],
    ["[]", "Government buildings"],
    ["*", "Public libraries and Museums"],
    ["+", "Healthcare facilities"]
  ];
  const services = [
    "Moduler sub assemblies and erection drawings",
    "Component fabrication drawing",
    "Model and drawing for steel assemblies and precast member",
    "Material takeoffs"
  ];
  const accordions = [
    {
      title: "Pricing And Consulting Engagement Options",
      open: true,
      bullets: [
        "Hourly rates are available, based on your volume of work and type of work",
        "Full-time Equivalent - rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>Modular BIM Services in USA</h2>
    <p>Milestone offers Modular BIM Services in USA .BIM model helps architect, Builder, owner and contractor to communicate & collaborate in a clear and precise way. Milestone offers design development modeling, construction documentation, coordination model, shop drawings & installation drawings for modular assemblies & prefabricated structural components to manufacturers, fabricators and contractors. We provide complete and accurate BIM model</p>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Our Modular BIM Services :</h2>
    <ul class="check-list coordination-includes">${services.map((item) => `<li>${item}</li>`).join("")}</ul>
    <p>A 3D-modeled building is a buildable model that lasts throughout a project's lifecycle and teams. It also lets the designer make decisions about design options. Therefore, a design can be visualized in three dimensions using three-dimensional modeling, which also helps with planning and communication. Plan, sections, and elevation views in both 2D and 3D allow the client to examine the model and interact with it.</p>
    <p><a href="/">Milestone</a> has been providing Modular BIM Services in USA and digital models for more than a decade, including prestigious projects for clients all over the world. Our designing group learns and update themselves consistently with the most recent and most developed 3D programming in the business to convey better 3D models. Additionally, projects that benefit from our streamlined processes are more profitable.</p>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "-" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return architecturalServiceShell({
    title: "Modular BIM",
    image: asset("2023/04/Architectural-Modular-BIM-1.jpg"),
    activeHref: "/service/modular-bim-services/"
  }, content);
}

export function architectural2dDraftingPage() {
  const industries = [
    ["|", "Construction Services"],
    ["#", "Commercial Building"],
    ["^", "Residential Building"],
    ["=", "Architects"],
    ["A", "General Contracting"]
  ];
  const draftingServices = [
    "CAD drawings of architectural site elevations, floor plans & sections.",
    "CAD drawings of drainage and piping",
    "Full construction drawing set preparation",
    "Conversion of paper drawings to CAD (Raster to vector conversion)"
  ];
  const buildingTypes = [
    "Residential & Commercial Buildings",
    "Industrial Buildings",
    "High & Low-rise Buildings",
    "Educational Institutions",
    "Parking Garages",
    "Restaurants and Hotels"
  ];
  const outsourceReasons = [
    "Use of the latest 2D draft tools and 3D CAD drawing",
    "Experienced designers can add necessary annotations such as text, size and table to better understand",
    "Expert in translating hand-drawn drawings into digital format",
    "Ability to provide in detail 2D design and 3D for a large industrial project without difficulty",
    "Worked more than 200+ Drafting projects."
  ];
  const accordions = [
    {
      title: "Pricing And Consulting Engagement Options",
      open: true,
      bullets: [
        "Hourly rates are available, based on your volume of work and type of work",
        "Full-time Equivalent - rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>Architectural 2D Drafting Services:</h2>
    <p><a href="/">Milestone</a> offers a variety of <a href="/service/architectural-2d-drafting-services/">Architectural 2D Drafting</a> & detailing services for the global customers in Architecture, Construction and Engineering domain.</p>
    <p>By outsourcing most of the time-consuming design work to Milestone, architects/clients can focus on the most important design issues. Our experienced team of engineers, knowledgeable in architectural design and construction values, can work as your extended team to ensure the quality of architectural 2d designs and details.</p>
    <p>Architectural 2D drafting service are essential in the planning and construction of any architectural project. These services offer a wide range of benefits, including accuracy, speed, and cost-effectiveness. Whether you require 2D CAD drafting services, BIM coordination services, casework, or facade design services, it is crucial to work with a professional firm that can provide the level of development required for your specific project needs.</p>
    <p><strong>For example,</strong> 2D CAD drafting service may be used for creating detailed floor plans, elevations, and sections, while BIM coordination services may be used to create detailed models of the entire building. Case work and facade design services may be used to create detailed designs for specific elements of the building, such as windows, doors, and cladding systems.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries revit-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Our Architectural Drafting services includes:</h2>
    <ul class="check-list coordination-includes">${draftingServices.map((item) => `<li>${item}</li>`).join("")}</ul>
    <p>Contractors, architects, and engineers can rely heavily on our drafting services for their need for design, transformation, analysis in architecture and building design.</p>
    <p>At Milestone, we have proven our value by improving quality design, and enhanced communication through documentation, to our customers worldwide. As your AutoCAD and Revit drafting service provider, even though we are in different time zones, we guarantee work on your projects, even when you are not there, which is why - 24x7. Our experts make sure they don't have to compromise on the quality of work, while also saving your company from the financial burden of hiring full-time draft persons.</p>
    <h2>We Provide drafting services for different types of buildings:</h2>
    <ul class="check-list coordination-includes">${buildingTypes.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>Why outsource architectural drafting services to Milestone:</h2>
    <ul class="check-list coordination-includes">${outsourceReasons.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "-" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return architecturalServiceShell({
    title: "Architectural 2D Drafting",
    image: "/assets/images/services/detail/architectural-2d-drafting-content.jpg",
    activeHref: "/service/architectural-2d-drafting-services/"
  }, content);
}

export function lightingDesignServicesPage() {
  const markets = [
    ["|", "Commercial"],
    ["oo", "Public"],
    ["^", "Residential"],
    ["=", "Education"],
    ["$", "Retail"],
    ["v", "Sports"]
  ];
  const projectServices = [
    "Interactions with the clients, architects, and end-users (if relevant)",
    "Followed by conceptualization of design",
    "Proposing budget specific lighting schemes,",
    "Lighting level analysis",
    "Analysis with respect to power consumption and efficient alternatives",
    "Working drawings",
    "Technical specifications,",
    "Technical assistance in procurement of lighting hardware and finally"
  ];
  const expertise = [
    "Lighting Design",
    "Light Modelling",
    "Lighting Audits",
    "Light pollution studies",
    "Lighting strategy across multiple portfolios and sites",
    "Daylighting",
    "Road Lighting",
    "Sports Lighting",
    "Expert witness or opinion",
    "Energy calculations and compliance",
    "Facade Lighting",
    "Visual Design",
    "Ecological lighting design",
    "LEED assistance",
    "Backspill control",
    "Multi-level designs",
    "Up-lighting",
    "Drawings",
    "Glare control"
  ];
  const content = `
    <h2>High-quality and Cost Effective Lighting Design Services:</h2>
    <p>Milestone is a company capable of offering a comprehensive range of LED <strong>Lighting Design Services</strong> prior to any commercial or industrial installation. Our computer-aided, LED lighting design capabilities give our clients the ability to visualize the lighting effects, lux levels prior to the procurement and installation of fixtures. Milestone will typically design the layout to achieve recommended lux levels thus ensuring your investment is compliant with standard practices. Our Engineers can also provide alternative designs to suit your custom lux levels, if your organisation has specific requirements.</p>
    <p>We execute projects in varying scales in a whole range categories right from facade to landscape, commercial to residential complex, industrial to heritage, mall to museum & educational institution to sports stadium.</p>

    <h2>Markets Served</h2>
    <div class="coordination-industries">${markets.map(industryItem).join("")}</div>
    <hr>
    <h2>Our Services In A Project Includes :</h2>
    <ul class="check-list coordination-includes">${projectServices.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>Area of Expertise:</h2>
    <ul class="check-list coordination-includes">${expertise.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  return `
    <main id="main" class="section coordination-page architectural-page lighting-page">
      <div class="container coordination-layout">
        ${architecturalServiceSidebar("/service/lighting-design-services/")}
        <article class="coordination-content">${content}</article>
      </div>
    </main>
    <section class="pilot-cta"><div class="container"><h2>Try us with FREE PILOT Project</h2><a class="btn" href="/contact-us/">Contact Us</a></div></section>
  `;
}
