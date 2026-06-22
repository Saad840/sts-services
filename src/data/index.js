const assetMap = {
  "2019/09/Full-Logo-PLM.png": "/assets/images/full-logo-plm.png",
  "2019/09/slide1.jpg": "/assets/images/slide1.jpg",
  "2019/09/slide2.jpg": "/assets/images/slide2.jpg",
  "2019/09/slide3.jpg": "/assets/images/slide3.jpg",
  "2021/04/cars.jpg": "/assets/images/cars.jpg",
  "2021/04/1.jpg": "/assets/images/heavy-engineering.jpg",
  "2021/04/machinery_robotics-3.jpg": "/assets/images/machinery-robotics.jpg",
  "2021/04/cnc-laser-cutting-machine-2.jpeg": "/assets/images/precision-manufacturing.jpeg",
  "2021/04/architects-3.jpg": "/assets/images/architects.jpg",
  "2021/04/General-contractors1.jpg": "/assets/images/general-contractors.jpg",
  "2021/04/farmer-house-ponkunnam-2.jpg": "/assets/images/home-building.jpg",
  "2021/04/retailers-5.jpg": "/assets/images/retailers.jpg",
  "2023/05/Engineering-Solutions-2.jpg": "/assets/images/engineering-solutions.jpg",
  "2020/09/AEC-Services-530x432.jpg": "/assets/images/aec-services.jpg",
  "2020/09/Contract-Staffing.jpg": "/assets/images/contract-staffing.jpg",
  "2020/09/Services-background1.jpg": "/assets/images/services-background.jpg",
  "2020/07/3D-Rendering-Services.jpg": "/assets/images/3d-rendering-services.jpg",
  "2020/07/Architerural-visualization.jpg": "/assets/images/architectural-visualization.jpg",
  "2023/04/Architecture-3D-Modeling.jpg": "/assets/images/architecture-3d-modeling.jpg",
  "2023/04/Architectural-3D-Modeling.jpg": "/assets/images/architectural-3d-modeling.jpg",
  "2023/04/Architectural-2D-Drafting-Services.jpg": "/assets/images/architectural-2d-drafting-content.jpg",
  "2020/07/Architectural-BIM-Modeling-1.jpg": "/assets/images/architectural-bim-modeling-banner.jpg",
  "2023/04/Architectural-Modular-BIM-2.jpg": "/assets/images/architectural-modular-bim.jpg",
  "2023/04/Modular-BIM-Services.jpg": "/assets/images/architectural-modular-bim.jpg",
  "2023/04/Revit-BIM-Services.jpg": "/assets/images/revit-bim-services-banner.jpg",
  "2023/04/Revit-BIM-Services-1.jpg": "/assets/images/revit-bim-services.jpg",
  "2023/04/Architectural-Construction-Docs.jpg": "/assets/images/architectural-construction-docs-banner.jpg",
  "2023/04/BIM-Modeling.jpg": "/assets/images/bim-modeling.jpg",
  "2023/04/BIM-Services-BIM-Modeling.jpg": "/assets/images/bim-services-bim-modeling.jpg",
  "2023/04/BIM-Coordination.jpg": "/assets/images/bim-coordination.jpg",
  "2023/04/BIM-Coordination-1.jpg": "/assets/images/bim-coordination-banner.jpg",
  "2020/07/Revit-Families.png": "/assets/images/revit-families.png",
  "2020/07/Revit-Family-Creation.jpg": "/assets/images/revit-family-creation.jpg",
  "2023/05/BIM-Shop-Drawings.jpg": "/assets/images/bim-shop-drawings.jpg",
  "2023/05/BIM-Shop-Drawings-2.jpg": "/assets/images/bim-shop-drawings-banner.jpg",
  "2023/05/COBie-Services.jpg": "/assets/images/cobie-services.jpg",
  "2023/05/COBie-Services2.jpg": "/assets/images/cobie-services-banner.jpg",
  "2020/07/Scan-to-BIM.jpg": "/assets/images/scan-to-bim.jpg",
  "2020/07/Scan-to-BIM-1.jpg": "/assets/images/scan-to-bim-banner.jpg",
  "2023/05/4D-BIM-Construction-Simulation.jpg": "/assets/images/4d-bim-construction-simulation.jpg",
  "2023/05/4D-Bim-Construction-Simulation-1.jpg": "/assets/images/4d-bim-construction-simulation-banner.jpg",
  "2023/04/5D-BIM-Services.jpg": "/assets/images/5d-bim-services.jpg",
  "2023/04/5D-BIM-Cost-Estimation-Quantity-Takeoff.jpg": "/assets/images/5d-bim-cost-estimation-quantity-takeoff.jpg",
  "2023/04/thumbnail_why-us.png": "/assets/images/thumbnail-why-us.png",
  "2018/10/placeholder-6-50x50.gif": "/assets/images/testimonial-placeholder.gif",
  "2023/04/We-Are-Hiring.jpg": "/assets/images/engineering-solutions.jpg",
  "2020/09/Company-Overview.jpg": "/assets/images/aec-services.jpg",
  "2020/09/data-security.jpg": "/assets/images/thumbnail-why-us.png"
};

export const asset = (path) => assetMap[path] || `/assets/images/${path.split("/").pop()}`;

export const offices = [
  { name: "USA Office", address: "8 The Green #20190, Dover, DE 19901", hours: "Mon - Fri 08.00 am - 4.00 pm", phone: "+1 302 565 1600" },
  { name: "INDIA Office", address: "202 Siddhashram CHS, Gokhale Road, Thane", hours: "Mon - Fri 10.00 am - 6.30 pm", phone: "+91-8828427555" },
  { name: "UK Office", address: "Davidson House, Forbury Square, Reading, UK", hours: "Mon - Fri 08.00 am - 4.00 pm", phone: "+44 746 216 0012" }
];

export const navGroups = [
  {
    label: "About us",
    href: "/about-us/",
    items: [
      ["Company Overview", "/company-overview-page/"],
      ["Work Culture", "/work-culture-at-milestone/"],
      ["Life At Milestone", "/life-at-milestone/"],
      ["Awards & Recognitions", "/company-overview/awards-recognitions/"],
      ["Why Milestone", "/company-overview/why-milestone/"],
      ["Case Study", "/case-study/"],
      ["FAQ", "/faq/"]
    ]
  },
  {
    label: "Services",
    href: "/services/",
    mega: [
      ["BIM Services", [["BIM Modeling", "/service/bim-modeling/"], ["BIM Coordination", "/service/bim-coordination/"], ["Revit Family Creation", "/service/revit-family-creation/"], ["Shop Drawings", "/service/shop-drawings/"], ["COBie Services", "/service/cobie-services/"], ["Scan to BIM", "/service/scan-to-bim/"], ["4D BIM - Construction Simulation", "/service/4d-bim-construction-simulation/"], ["5D BIM", "/service/5d-bim-cost-estimation-quantity-takeoff/"]]],
      ["Architectural Services", [["3D rendering services", "/service/3d-architectural-visualization-3d-rendering-services/"], ["Architectural 3D Modeling", "/service/architectural-3d-modeling/"], ["Architectural BIM Modeling", "/service/architectural-bim-modeling-services/"], ["Revit BIM Services", "/service/revit-bim-services/"], ["Architectural Construction Docs", "/service/architectural-construction-docs/"], ["Modular BIM", "/service/modular-bim-services/"], ["Architectural 2D Drafting", "/service/architectural-2d-drafting-services/"], ["Lighting Design", "/service/lighting-design-services/"]]],
      ["Structural Services", [["Structural BIM", "/service/structural-bim/"], ["Steel Detailing", "/service/steel-detailing/"], ["Precast Detailing", "/service/precast-detailing/"], ["Structural Shop Drawing Services", "/service/structural-shop-drawings/"], ["Rebar Detailing Services", "/service/rebar-detailing/"], ["Structural Construction Documentation Services", "/service/structural-construction-document/"], ["Structural 3D Modeling Services", "/service/structural-3d-modeling/"], ["Structural 2d drafting", "/service/structural-2d-drafting/"]]],
      ["MEP Services", [["MEP BIM Services", "/service/mep-bim-services/"], ["MEP Drafting", "/service/mep-drafting-services/"], ["MEP BIM Modeling", "/service/mep-bim-modeling-services/"], ["MEP Coordination", "/service/mep-coordination/"], ["MEP Shop Drawing Services", "/service/mep-shop-drawing/"], ["Mechanical CAD", "/service/mechanical-cad/"], ["Electrical Drawings", "/service/electrical-drawings/"], ["As-Built Drafting", "/service/as-built-drafting/"]]],
      ["Engineering Solutions", [["Product Design & Development", "/service/product-design-and-development/"], ["CAD & Detailing", "/service/cad-drafting-services/"], ["Manufacturing Support", "/service/manufacturing-support/"], ["Automotive Design", "/service/automotive-design/"], ["CFD & FEA", "/service/fea-services-cfd-cae-simulation/"], ["Meshing Services", "/service/meshing-services/"], ["Aftermarket/ Engg. Documentation", "/service/technical-documentation-services/"], ["Value Engineering & Value Analysis", "/service/value-engineering-value-analysis/"], ["Rapid Prototyping", "/service/rapid-prototyping-services/"]]],
      ["Staffing", [["Contract Staffing", "/service/contract-staffing-services/"], ["Millwork Design", "/service/millwork-drafting-services/"], ["Furniture Modeling", "/service/furniture-modeling/"]]]
    ]
  },
  { label: "Blogs", href: "/blogs/" },
  { label: "Contact us", href: "/contact-us/" },
  { label: "We are hiring", href: "/careers-page/" }
];

export const industries = [
  { title: "Automotive", icon: "/assets/icons/car.svg", image: asset("2021/04/cars.jpg") },
  { title: "Industrial & Heavy Equipment", icon: "/assets/icons/factory.svg", image: asset("2021/04/1.jpg") },
  { title: "Machinery & Robotics", icon: "/assets/icons/robot.svg", image: asset("2021/04/machinery_robotics-3.jpg") },
  { title: "Precision Manufacturing", icon: "/assets/icons/puzzle.svg", image: asset("2021/04/cnc-laser-cutting-machine-2.jpeg") },
  { title: "Construction", icon: "/assets/icons/crane.svg", image: asset("2021/04/architects-3.jpg") },
  { title: "General Contracting", icon: "/assets/icons/fan.svg", image: asset("2021/04/General-contractors1.jpg") },
  { title: "Residential Buildings", icon: "/assets/icons/home.svg", image: asset("2021/04/farmer-house-ponkunnam-2.jpg") },
  { title: "Commercial Buildings", icon: "/assets/icons/building.svg", image: asset("2021/04/retailers-5.jpg") }
];

export const serviceCards = [
  { title: "Engineering Solutions", image: asset("2023/05/Engineering-Solutions-2.jpg"), heading: "Integrated Engineering & Design Services", copy: "Dynamically reinvent market-driven solutions and ubiquitous interfaces. Energistically fabricate an expanded array of niche services throughout PLM process.", bullets: ["Product Design", "Engineering Analysis and Simulation", "Reverse Engineering | Drafting & Detailing | Value Engineering", "Technical Documentation"], href: "/service/product-design-and-development/" },
  { title: "AEC Services", image: asset("2020/09/AEC-Services-530x432.jpg"), heading: "Multidisciplinary BIM Services", copy: "One stop solution partner for pre-construction, high-quality CAD solutions and BIM outsourcing services to leading contractors, architects and engineers across the globe.", bullets: ["Architectural BIM | MEP BIM | Scan to BIM", "Family Creation", "Support upto LOD 500", "Lighting Design"], href: "/service/architectural-bim-modeling-services/" },
  { title: "Contract Staffing", image: asset("2020/09/Contract-Staffing.jpg"), heading: "Onsite / Contract Manpower", copy: "Milestone serves specialized technical projects with tech manpower augmentation, managed services, onsite manpower and technical hiring.", bullets: ["Managed Services", "Onsite Manpower", "Technical Hiring"], href: "/service/contract-staffing-services/" }
];

export const testimonials = [
  ["Chris Wonder", "Engineering Manager, Leading SPM Manufacturer from UK", "MILESTONE have produced excellent CAD drawings, often at short notice. Where our client has had a change of specifications, MILESTONE have been able to provide modified drawings within an exacting timescale."],
  ["Jeff Falzone", "Engineering Director, A leading US company in Sheetmetal domain", "The team at MILESTONE complemented our design team greatly during a large project. Production of working drawings and finalization of the design package played a key part."],
  ["Brian S.", "Engineering Manager, A leading US company in Precision Manufacturing", "The service to us was swift with tool-paths being completed within the required timescale. The service offered was professional."],
  ["Rajen Parekh", "CEO, Valves Industries, India", "Working with MILESTONE is like an extension of our company. Projects are done on time and with great attention to detail."],
  ["Prashant Tillu", "Dy. General Manager, Larsen & Toubro Ltd", "Through our association since 2006, MILESTONE delivered in an accurate and timely manner, helping us manage work load."],
  ["Yatin Chinchkar", "Design Manager, Leading OEM in Consumer Products, India", "Consistent quality CAD services, quality control, and timely responses has made our clients very satisfied and continued customers."]
];

export const allServices = navGroups[1].mega.flatMap(([category, links]) =>
  links.map(([title, href]) => ({ title, href, category }))
);

export const staticPages = {
  "/about-us/": { title: "About us", body: ["Milestone PLM Solutions is an engineering outsourcing company specializing in CAD, FEA, Architecture, MEP and BIM services.", "The company supports global clients with pragmatic problem solving, offshore delivery, consulting, manufacturing support and long-term partnerships."] },
  "/company-overview/": { title: "Company overview", image: asset("2020/09/Company-Overview.jpg"), body: ["Established in 2004, Milestone PLM Solutions Pvt Ltd is an Engineering Outsourcing company specializing in CAD, FEA, Architecture, MEP & BIM services.", "Milestone offers one-stop engineering solutions with high quality and timely delivery including customer-centric consulting, engineering services and manufacturing support."], bullets: ["ISO/IEC 27001:2013 and ISO 9001:2015 Certified company", "100+ clients across India, USA, Europe & Middle-East", "Focused long term relationships, 80% recurring clients", "More than 25% of employees with 5+ years of association"] },
  "/company-overview-page/": { title: "Company overview", body: ["Milestone PLM Solutions company overview page."] },
  "/work-culture-at-milestone/": { title: "Work Culture", body: ["Milestone promotes collaborative delivery, employee development, process discipline and quality ownership across engineering teams."], bullets: ["Five-day work culture", "Cultural events and celebrations", "Professional development", "Employee recognition programs"] },
  "/life-at-milestone/": { title: "Life At Milestone", image: asset("2023/04/We-Are-Hiring.jpg"), body: ["Life at Milestone centers on learning, accountability, wellness, celebration and long-term growth for engineering professionals."] },
  "/company-overview/awards-recognitions/": { title: "Awards & Recognitions", body: ["Milestone highlights ISO certifications, Autodesk Authorized Training Centre recognition and industry acknowledgements."], bullets: ["ISO/IEC 27001:2013 Certified", "ISO 9001:2015 Certified", "Autodesk Authorized Training Centre"] },
  "/company-overview/why-milestone/": { title: "Why Milestone PLM Solutions", body: ["Milestone offers broad CAD-CAM-FEA-BIM outsourcing capabilities, infrastructure and delivery resources in India.", "Clients gain maximized business performance, enhanced margins, unified technology priorities, reduced costs and flexible delivery."], bullets: ["Plug and play setup", "Largest resource pool", "Strong management", "Time zone advantage", "Cost-effective and competitive engagement models"] },
  "/faq/": { title: "Frequently Asked Questions", faqs: [["How long have you are in the business?", "Milestone is in this business since 2004."], ["Where is your office location?", "We have our corporate office and a production center at Mumbai, India."], ["What are your normal working hours?", "Teams can work round the clock in shifts and adapt hours for emergency projects."]] },
  "/data-security-confidentiality/": { title: "Data Security & Confidentiality", image: asset("2020/09/data-security.jpg"), body: ["Milestone follows ISO 27001:2013 guidelines for IT security, data security and confidentiality."], bullets: ["Strict NDA and non-compete agreements", "Protected document storage", "Restricted system access", "Client data remains confidential property of the client", "Raw and processed data can be destroyed after approval"] },
  "/privacy-policy/": { title: "Privacy Policy", body: ["This replica preserves the privacy-policy route and summarizes the public policy surface. Production deployments should replace this with reviewed legal copy."] },
  "/terms-and-conditions/": { title: "Terms & Conditions", body: ["This route mirrors the original terms page location. Replace with legally approved terms before commercial deployment."] },
  "/resources/": { title: "Resources", body: ["Resources, guides and articles are grouped under blog-style pages and industry categories."] },
  "/training/": { title: "Training", body: ["The original links training to an external Milestone training property."] },
  "/services/aec-services/": { title: "AEC Services", body: ["AEC services include BIM modeling, BIM coordination, Revit family creation, shop drawings, COBie services, Scan to BIM, 4D BIM and 5D BIM support."] },
  "/services/bim-services/": { title: "BIM Services", body: ["BIM Services include BIM Modeling, BIM Coordination, Revit Family Creation, Shop Drawings, COBie Services, Scan to BIM, 4D BIM construction simulation and 5D BIM cost estimation support."] },
  "/outsourcing-engineering-services/": { title: "Outsourcing Engineering Services", body: ["Milestone provides scalable engineering outsourcing support for CAD, BIM, product design, simulation, documentation, and dedicated engineering team requirements."] }
};

export const jobs = [
  ["HR Recruiter", "Thane, Mumbai, India", "Human Resources", "May 26, 2026", "/careers_archive/hr-recruiter/"],
  ["Jr. MEP BIM Engineer", "Thane, Mumbai, India", "Accounts Executive", "April 30, 2026", "/careers_archive/mep-bim-engineer/"],
  ["Business Development Manager (Engineering Design Services)", "Pune, Thane", "Business Development", "April 29, 2026", "/careers_archive/business-development-manager-engineering-design-services/"],
  ["Jr. BIM Engineer", "Thane, Mumbai, India", "AEC", "April 29, 2026", "/careers_archive/bim-engineer/"],
  ["Civil Draughtsman", "Thane, Mumbai, India", "Civil Draughtsman", "April 29, 2026", "/careers_archive/civil-draughtsman/"],
  ["Business Development Manager (Architectural Services)", "Pune, Thane", "Business Development", "April 29, 2026", "/careers_archive/business-development-manager-architectural-services/"],
  ["CAD Engineer", "Thane, Mumbai India", "Engineering Design", "April 29, 2026", "/careers_archive/cad-engineer/"],
  ["Jr. Architect", "Thane, Mumbai, India", "AEC", "April 29, 2026", "/careers_archive/jr-architect/"],
  ["Team Lead Architecture", "Thane, Mumbai, India", "AEC", "April 29, 2026", "/careers_archive/team-lead-architecture/"],
  ["Team Lead MEP", "Thane, Mumbai, India", "AEC", "April 29, 2026", "/careers_archive/team-lead-mep/"],
  ["Business Development Executive", "Pune, Thane", "Business Development", "January 29, 2025", "/careers_archive/business-development-executive/"]
];

export const works = ["Architectural Design project", "Demolation", "Co-ordination", "Welding Fixture Design", "Washing Fixture Design", "Reverse Engineering - Console", "MOLDFLOW", "Meshing", "Design Optimisation", "Enclosures - CAD Supports", "DFMA - SUPPORT STRUCTURE", "CFD - Underhood Analysis", "CFD - Ceiling Fan", "Scan To BIM", "CAE Product Testing"];

export const recentPosts = [
  ["Construction Documentation Errors That Lead to Costly Rework", "/construction-documentation-errors/"],
  ["Millwork Shop Drawing Errors That Lead to Costly Rework and Project Delays", "/millwork-shop-drawing-errors/"],
  ["MEP in Construction: Systems, Coordination & Best Practices for Efficient Buildings", "/mep-in-construction/"],
  ["BIM for Architects: Improve Design, Collaboration & Project Efficiency", "/bim-for-architects/"],
  ["Shop Drawings vs As-Built Drawings: Differences, Importance, and Best Practices", "/shop-drawings-vs-as-built-drawings/"],
  ["BIM in Construction: A Complete Guide to BIM for Modern Projects", "/bim-in-construction/"],
  ["Drones in Construction: Key Uses, Benefits, Applications [2026]", "/drones-in-construction-key-uses-benefits-applications/"],
  ["Step-by-Step Workflow for Structural Design of Buildings Projects", "/structural-design-process-of-buildings/"],
  ["Outsourcing 3D Modeling Services for AEC & Engineering", "/outsourcing-3d-modeling-services-for-aec-and-engineering-projects/"],
  ["7 Stages of Construction: A Complete Guide For Successful Project", "/7-stages-of-construction-a-complete-guide-for-successful-project/"],
  ["Architectural Design Phases: A Complete Guide to Design Stages", "/architectural-design-phases/"],
  ["Parametric Modeling vs Generative Modeling: A Complete Comparison", "/parametric-modeling-vs-generative-modeling/"],
  ["OEM vs ODM: What's the Difference in Engineering Design?", "/oem-vs-odm/"],
  ["Why 3D LiDAR Scanning is the Backbone of the Scan to BIM Process", "/3d-lidar-scanning-is-the-backbone-of-scan-to-bim-process/"],
  ["Types of Architectural Drawings - A Complete Detailed Guide", "/types-of-architectural-drawings/"],
  ["Smart Buildings and the Role of Architectural Engineering", "/role-of-architectural-engineering/"],
  ["Why Architectural Drafting Still Matters in the Age of BIM", "/architectural-drafting/"],
  ["How the Right Engineering Design Partner Can Elevate Your Project Outcomes", "/right-engineering-design-partner/"],
  ["How Outsourcing Engineering Services Can Transform Your Project Delivery", "/outsourcing-engineering-service/"],
  ["Top Engineering Outsourcing Services in India", "/top-engineering-outsourcing-services-in-india/"],
  ["BIM Outsourcing Services by Milestone PLM Solutions, Inc.", "/top-bim-outsourcing-services/"],
  ["Static Equipment Modelling Services", "/static-equipment-modelling-services/"],
  ["Value Engineering in Construction: Key Stages and Benefits", "/value-engineering-in-construction-stages-benefits/"]
];

export const extraBlogSlugs = [
  "medical-equipment-design", "trends-in-mechanical-engineering", "top-benefits-of-3d-modeling-for-design-development-and-manufacturing",
  "benefits-of-rapid-prototyping", "bim-improves-construction-safety", "additive-manufacturing", "cad-vs-bim",
  "role-of-bim-in-architectural-design", "drone-in-construction", "latest-3d-cad-design-innovations", "engineering-design-and-drafting-services",
  "architectural-design-process", "step-by-step-process-for-structural-design-of-buildings-projects", "7-stages-of-construction-a-complete-guide", "bim-implementation", "bim-collaboration-tools", "maximizing-bim-roi"
];
