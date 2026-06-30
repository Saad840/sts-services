import { industryLinks } from "./industries.js";

export const navGroups = [
  {
    label: "Services",
    href: "/services/",
    mega: [
      ["BIM Services", [["BIM Modeling", "/service/bim-modeling/"], ["BIM Coordination", "/service/bim-coordination/"], ["Revit Family Creation", "/service/revit-family-creation/"], ["Shop Drawings", "/service/shop-drawings/"], ["COBie Services", "/service/cobie-services/"], ["Scan to BIM", "/service/scan-to-bim/"], ["4D BIM - Construction Simulation", "/service/4d-bim-construction-simulation/"], ["5D BIM", "/service/5d-bim-cost-estimation-quantity-takeoff/"]]],
      ["Architectural Services", [["3D rendering services", "/service/3d-architectural-visualization-3d-rendering-services/"], ["Architectural 3D Modeling", "/service/architectural-3d-modeling/"], ["Architectural BIM Modeling", "/service/architectural-bim-modeling-services/"], ["Revit BIM Services", "/service/revit-bim-services/"], ["Architectural Construction Docs", "/service/architectural-construction-docs/"], ["Modular BIM", "/service/modular-bim-services/"], ["Architectural 2D Drafting", "/service/architectural-2d-drafting-services/"], ["Lighting Design", "/service/lighting-design-services/"]]],
      ["Structural Services", [["Structural BIM", "/service/structural-bim/"], ["Steel Detailing", "/service/steel-detailing/"], ["Precast Detailing", "/service/precast-detailing/"], ["Structural Shop Drawing Services", "/service/structural-shop-drawings/"], ["Rebar Detailing Services", "/service/rebar-detailing/"], ["Structural Construction Documentation Services", "/service/structural-construction-document/"], ["Structural 3D Modeling Services", "/service/structural-3d-modeling/"], ["Structural 2d drafting", "/service/structural-2d-drafting/"]]],
      ["MEP Services", [["MEP BIM Services", "/service/mep-bim-services/"], ["MEP Drafting", "/service/mep-drafting-services/"], ["MEP BIM Modeling", "/service/mep-bim-modeling-services/"], ["MEP Coordination", "/service/mep-coordination/"], ["MEP Shop Drawing Services", "/service/mep-shop-drawing/"], ["Mechanical CAD", "/service/mechanical-cad/"], ["Electrical Drawings", "/service/electrical-drawings/"], ["As-Built Drafting", "/service/as-built-drafting/"]]],
      ["Facade & Glazing Services", [["Curtain Wall Shop Drawings", "/service/curtain-wall-shop-drawings/"], ["Storefront Glazing Shop Drawings", "/service/storefront-glazing-shop-drawings/"], ["All-Glass Entrances & Partitions", "/service/all-glass-entrances-partitions/"], ["Metal Panel & Cladding Shop Drawings", "/service/metal-panel-cladding-shop-drawings/"], ["Sunshade Detailing", "/service/sunshade-detailing/"]]],
      ["Engineering Solutions", [["Product Design & Development", "/service/product-design-and-development/"], ["CAD & Detailing", "/service/cad-drafting-services/"], ["Manufacturing Support", "/service/manufacturing-support/"], ["Automotive Design", "/service/automotive-design/"], ["CFD & FEA", "/service/fea-services-cfd-cae-simulation/"], ["Meshing Services", "/service/meshing-services/"], ["Aftermarket/ Engg. Documentation", "/service/technical-documentation-services/"], ["Value Engineering & Value Analysis", "/service/value-engineering-value-analysis/"], ["Rapid Prototyping", "/service/rapid-prototyping-services/"]]],
      ["Staffing", [["Contract Staffing", "/service/contract-staffing-services/"], ["Millwork Design", "/service/millwork-drafting-services/"], ["Furniture Modeling", "/service/furniture-modeling/"]]]
    ]
  },
  { label: "Industries", href: "/industries/", items: industryLinks },
  { label: "Sample Drawings", href: "/sample-drawings/" },
  { label: "Our Process", href: "/our-process/" },
  {
    label: "About Us",
    href: "/about-us/",
    items: [
      ["Contact Us", "/contact-us/"],
      ["Company Overview", "/company-overview-page/"],
      ["Work Culture", "/work-culture-at-milestone/"],
      ["Life At Milestone", "/life-at-milestone/"],
      ["Awards & Recognitions", "/company-overview/awards-recognitions/"],
      ["Why Milestone", "/company-overview/why-milestone/"],
      ["Case Study", "/case-study/"]
    ]
  },
  { label: "Blogs", href: "/blogs/" },
  { label: "FAQs", href: "/faq/" },
  { label: "We are hiring", href: "/careers-page/" }
];

export const headerActions = [];
