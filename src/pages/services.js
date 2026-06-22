import { asset, allServices, serviceCards } from "../data/index.js";
import { pageHero, sidebar, bimServiceShell, architecturalServiceShell, architecturalServiceSidebar, structuralServiceShell, engineeringServiceShell, staffingServiceShell, mepServiceShell } from "../components/layout.js";
import { path, titleFromPath } from "../utils/path.js";

const industryIconMap = {
  "Retail Shops": "/assets/icons/cart.svg",
  "Office & Commercial": "/assets/icons/building.svg",
  "Residential": "/assets/icons/home.svg",
  "Restaurants & Hotels": "/assets/icons/hotel.svg",
  "Educational institutions": "/assets/icons/university.svg",
  "Government buildings": "/assets/icons/building.svg",
  "Public libraries and Museums": "/assets/icons/museum.svg",
  "Healthcare facilities": "/assets/icons/healthcare.svg",
  "Construction": "/assets/icons/crane.svg",
  "Construction Services": "/assets/icons/crane.svg",
  "General Contracting": "/assets/icons/building.svg",
  "Home Building": "/assets/icons/home.svg",
  "Architects": "/assets/icons/university.svg",
  "Retail": "/assets/icons/cart.svg",
  "Commercial Building": "/assets/icons/building.svg",
  "Residential Building": "/assets/icons/home.svg",
  "Commercial": "/assets/icons/drafting.svg",
  "Public": "/assets/icons/public.svg",
  "Education": "/assets/icons/university.svg",
  "Sports": "/assets/icons/sports.svg",
  "Automotive": "/assets/icons/car.svg",
  "Industrial & Heavy Equipment": "/assets/icons/factory.svg",
  "Machinery & Robotics": "/assets/icons/robot.svg",
  "Precision Manufacturing": "/assets/icons/puzzle.svg",
  "Commercial Buildings": "/assets/icons/building.svg",
  "Residential Buildings": "/assets/icons/home.svg"
};

function industryItem([icon, label]) {
  const src = label === "General Contracting" && ["A", "△"].includes(icon)
    ? "/assets/icons/drafting.svg"
    : industryIconMap[label] || (String(icon).startsWith("/assets/") ? icon : "");
  const iconMarkup = src ? `<img src="${src}" alt="">` : icon;
  return `<div><span>${iconMarkup}</span><strong>${label}</strong></div>`;
}

export function servicesPage() {
  return `${pageHero("Services")}<main id="main" class="section"><div class="container"><div class="card-grid">${allServices.map((s, i) => `<article class="tile"><img src="${serviceCards[i % serviceCards.length].image}" alt="" loading="lazy"><h3>${s.title}</h3><p>${s.category}</p><a class="text-link" href="${s.href}">Read more</a></article>`).join("")}</div></div></main><section class="cta-band"><div class="container"><h2>Looking for a First-Class Business Plan Consultant?</h2><a class="btn" href="/contact-us/">get a quote</a></div></section>`;
}

export function serviceDetail(service) {
  const title = service?.title || titleFromPath(path());
  const related = allServices.filter((s) => s.category === (service?.category || "BIM Services")).slice(0, 5);
  if (path() === "/service/bim-modeling/") return bimModelingPage();
  const bimSections = "";
  return `${pageHero(title)}<main id="main" class="section"><div class="container content-with-sidebar">${sidebar()}<article class="content"><h2>${title}</h2><p>Milestone PLM Solutions provides precise, scalable and high-quality ${title.toLowerCase()} for engineering, construction, manufacturing and AEC teams across global markets.</p><p>Our team supports complete project lifecycles with CAD, BIM, drafting, modeling, documentation, analysis and coordination workflows. Deliverables are prepared around client standards, quality checks, security discipline and fast turnaround needs.</p><h3>${title} Includes:</h3><ul class="check-list"><li>Project setup and standards alignment</li><li>Modeling, drafting and documentation support</li><li>Quality checks by experienced engineers</li><li>Coordination with architecture, structure and MEP teams</li><li>Flexible fixed-price, dedicated-resource and time-material models</li></ul>${bimSections}<div class="related-box"><h3>Related Services</h3>${related.map((item) => `<a href="${item.href}">${item.title}</a>`).join("")}</div></article></div></main>`;
}

export function bimModelingPage() {
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
  const includes = [
    ["Architectural design", "BIM models including Wall, Windows, Door, Floor, Roof and interior details"],
    ["Structural engineering", "BIM models including foundations, beams, columns, stairs and walls."],
    ["MEP (mechanical, electrical, and plumbing) engineering", "Creating 3D models of building systems, including HVAC, plumbing, fire fighting and electrical systems."],
    ["Construction documentation", "Creating detailed construction documents, schedules, and material takeoffs."],
    ["Clash detection", "Identifying and resolving potential conflicts between different building systems and components before construction."],
    ["Facility management", "Creating 3D models of buildings for use in facility management, including space planning and maintenance schedules."]
  ];
  const content = `
    <h2>BIM Modeling Services in USA</h2>
    <p><a href="/">Milestone</a> is a one of the global Building Information Modeling Services provider. We are a team of Experienced Architects and Engineers responsible for providing quality BIM modeling services. Our BIM modeling services are allowing our clients work in more collaborative and automated environment and bridging the gap between concept and Reality. BIM Modeling enables the integration of the architecture, structural and MEP engineering into a single BIM model of buildings. We are using different software platforms like Autodesk AutoCAD, Autodesk Revit, Archicad, Vectorcad, Navisworks etc. to offer BIM modeling services for the Architectural, Structural, MEP & Fire protection domains.</p>
    <p>BIM model in the USA are often created using specialized software such as Autodesk Revit, Bentley MicroStation, or Trimble SketchUp. Revit BIM modeling services are an essential part of the construction industry in the USA. BIM models can improve efficiency, reduce errors, and enhance collaboration among stakeholders, leading to better project outcomes. BIM modelers are responsible for creating and maintaining these models, using specialized software and industry standards to ensure accuracy and compliance.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>BIM Model Includes</h2>
    <ul class="check-list coordination-includes">${includes.map(([label, text]) => `<li><strong>${label}</strong>: ${text}</li>`).join("")}</ul>
    ${serviceInfoBoxes()}`;
  return bimServiceShell({ title: "BIM Modeling", image: asset("2023/04/BIM-Services-BIM-Modeling.jpg"), activeHref: "/service/bim-modeling/" }, content);
}

export function bimCoordinationPage() {
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
  const includes = [
    "Coordination between the architectural and structural elements · Coordination of the MEP/HVAC elements with the architectural and structural elements",
    "The coordination between the structural elements and façade elements is essential to ensure their proper integration.",
    "clash detection, report generation and clash resolution"
  ];
  const accordions = [
    {
      title: "What is BIM coordination services, and how does it benefit construction projects in Boston?",
      open: true,
      body: "bim coordination services boston using Building Information Modeling (BIM) to facilitate collaboration and communication among various stakeholders in a construction project. It allows architects, engineers, contractors, and other team members to work on a unified digital platform, minimizing errors and enhancing efficiency. Benefits include improved project visualization, clash detection, and a streamlined construction process, ultimately leading to cost savings and faster project delivery."
    },
    { title: "Pricing And Consulting Engagement Options" },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];

  const content = `
          <h2>BIM Coordination Services</h2>
          <p><a href="/">Milestone</a> is service provider of BIM coordination services. <a href="/service/bim-coordination/">BIM Coordination</a> is a Building Information Modeling process that enhances collaboration among architectural plans, structural engineering, and MEP engineering to ensure seamless coordination.</p>
          <p>BIM coordination services Boston provide small businesses with the expertise and resources needed to ensure that their construction projects are successful. By working with a qualified BIM coordinator, businesses can ensure that their projects are accurately coordinated, integrated, and completed on time and within budget.</p>

          <h2>Range of industries</h2>
          <div class="coordination-industries">${industries.map(industryItem).join("")}</div>

          <hr>
          <h2>BIM Coordination Services Includes :</h2>
          <ul class="check-list coordination-includes">${includes.map((item) => `<li>${item}</li>`).join("")}</ul>

          <section class="coordination-accordions">${accordions.map((item) => `
            <article class="coordination-accordion ${item.open ? "open" : ""}">
              <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
              ${item.open ? `<p>${item.body}</p>` : ""}
            </article>
          `).join("")}</section>`;
  return bimServiceShell({ title: "BIM Coordination", image: asset("2023/04/BIM-Coordination-1.jpg"), activeHref: "/service/bim-coordination/" }, content);
}

export function revitFamilyCreationPage() {
  const industries = [["▥", "Construction"], ["▦", "General Contracting"], ["⌂", "Home Building"], ["▤", "Architects"], ["⌁", "Retail"]];
  const includes = [
    "Foundation families",
    "Door, Window and walls Families",
    "Ceiling families",
    "Stair, Railing families",
    "Column, struss families",
    "Joist families",
    "Kitchen accessories families",
    "Electrical fixtures families",
    "Sanitary ware families",
    "Pipes & fixtures families",
    "Furniture Families",
    "Glass panel system families"
  ];
  const procedure = ["Choose suitable family template", "Plan the parameters", "Assign the object subcategories", "Create the model geometry", "Set up the optimum geometry visibility rules", "Create family types"];
  const accordions = [
    {
      title: "What is the Importance of creating custom revit family creation in Construction projects?",
      open: true,
      body: "Custom revit family creation play a crucial role in Construction projects as they allow for the creation of highly specific and accurate 3D models and documentation. By tailoring families to project requirements, engineers can ensure that their designs are accurately represented in the Building Information Modeling (BIM) environment. This not only enhances visualization but also facilitates better collaboration among project stakeholders, leading to more efficient decision-making during the various stages of construction."
    },
    { title: "Pricing And Consulting Engagement Options" },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>Revit Family creation Services:</h2>
    <p><a href="/">MILESTONE</a> is a prominent BIM Outsourcing Company based in the USA that offers <a href="/service/revit-family-creation/">Revit Family Creation Services</a> customized to clients’ specific requirements and readily available for global use. We work for Realtors, Architects and General Contractors and product designers, manufacturers who have an ongoing requirement of <strong>Architectural, Structural, Interior and MEP components</strong>. Product specifications, 3D geometry from Revit families can help Architects, Designers & Planners to deliver designs faster.</p>
    <p>MILESTONE is one of India’s leading Revit Family Creation service providers and a trusted partner to deliver all of your BIM content production and product designing needs. Our extensive experience of collaborating with esteemed construction companies and product designers has established us as a trusted outsourcing partner for all BIM content services, renowned for our reliability.</p>
    <h2>Range of industries</h2>
    <div class="coordination-industries revit-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Custom Revit Family Creations includes:</h2>
    <ul class="check-list coordination-includes">${includes.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>Family Creation Procedure:</h2>
    <ul class="check-list coordination-includes">${procedure.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.open ? `<p>${item.body}</p>` : ""}
      </article>
    `).join("")}</section>`;
  return bimServiceShell({ title: "Revit Family Creation", image: asset("2020/07/Revit-Family-Creation.jpg"), activeHref: "/service/revit-family-creation/" }, content);
}

export function shopDrawingsPage() {
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
  const includes = ["Architectural Shop Drawings", "Structural Shop Drawings", "MEP & HVAC Shop Drawings", "Construction shop drawing"];
  const accordions = [
    {
      title: "What are Shop Drawings services and why are they crucial in BIM Services?",
      open: true,
      body: "Shop Drawings service are detailed, dimensioned illustrations that showcase the fabrication and installation of components used in construction projects. In the realm of BIM Services, these drawings provide a comprehensive visual representation of the design intent, including intricate details, materials, dimensions, and other relevant information. They serve as a crucial communication tool between various stakeholders, such as architects, engineers, contractors, and manufacturers."
    },
    { title: "Pricing And Consulting Engagement Options" },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>Shop Drawings and Fabrication Drawing Services</h2>
    <p><a href="/">Milestone</a> offers a variety of detailing services for the global customers in Architecture, Engineering domain and Construction Domain. We generate highly precise and accurate set of shop drawings using latest software tools in short turnaround time.</p>
    <p>The shop drawings generated by milestone helps architects, contractors, sub-contractors, fabricators, manufacturers, suppliers, owners, and developers during various stages of the project. Our vast experience in working with single family, multi-family residential, commercial, public, industrial, School, government, and infrastructural projects make us your best solution partner for all of your shop & fabrication drawing needs.</p>
    <p><a href="/service/shop-drawings/">Fabrication drawing services</a> play a crucial role in the construction and manufacturing industry, providing a vital link between architects, MEP designers, fabricators, and builders. By ensuring that accurate and detailed drawings are produced, fabrication drawing services help to ensure that projects are completed on time, within budget, and to the required quality standards.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Our Shop Drawings services includes:</h2>
    <ul class="check-list coordination-includes">${includes.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.open ? `<p>${item.body}</p>` : ""}
      </article>
    `).join("")}</section>`;
  return bimServiceShell({ title: "Shop Drawings", image: asset("2023/05/BIM-Shop-Drawings-2.jpg"), activeHref: "/service/shop-drawings/" }, content);
}

export function cobieServicesPage() {
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
  const advantages = ["Ease of Data Management", "Quick and enhance Data Sharing", "Operation Planning", "Quick Transfer of Information"];
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
    <h2>COBie Services</h2>
    <p><a href="/">Milestone</a> is provider of COBie Modeling Services for any of our clients project in accordance with the client requirement. COBie (Construction Operations Building Information Exchange) is a non-proprietary data format used in the data gathering of a facility during its different design and construction phases. This digital information is transferred to the operations and maintenance team for further maintenance of facility.</p>
    <p><a href="/service/cobie-services/">COBie Modeling Services</a> includes important building project data such as sheets, equipment lists, warranties, spare parts lists etc. This information is very important to support operations, maintenance, and asset management once the building facility is in service.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Advantages of COBie in Construction</h2>
    <ul class="check-list coordination-includes">${advantages.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>International Standards we Work with:</h2>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return bimServiceShell({ title: "COBie Services", image: asset("2023/05/COBie-Services2.jpg"), activeHref: "/service/cobie-services/" }, content);
}

export function scanToBimPage() {
  const industries = [["▥", "Construction"], ["▦", "General Contracting"], ["⌂", "Home Building"], ["▤", "Architects"], ["⌁", "Retail"]];
  const benefits = ["Reduced change orders", "Optimized Schedule", "Enhanced quality work", "Quick handover", "Competitive price"];
  const services = [
    ["3D Models from Laser-Scan Raw Data:", "If you already have scan data, MILESTONE’s engineers can create architectural and MEP models from that. We have all the software tools needed to do any complex conversions, checks, and drawings that may be needed."],
    ["3D BIM Models using Revit:", "MILESTONE engineers can create accurate 3D BIM models using Revit Architecture and MEP. For example, We can create 3d models of commercial building in Revit Architecture, and the electrical and Fire and drainage services contained within them can be built in Revit MEP."],
    ["BIM Modeling using Point Cloud data:", "Scanned BIM models proves very important to provide final as-builts or for retrofit or renovation purposes. Models include all structural and MEP components, including columns, beams, roof, floor, MEP adjustment, and installation, etc."],
    ["Extraction of information from BIM models:", "The unique features of the BIM model have data and properties configured in it. For example, a column may contain building materials, cross section, dimensional details and cost. MILESTONE can extract data from a BIM model that can be used for future reference."]
  ];
  const accordions = [
    {
      title: "What is Scan to BIM services, and how does it benefit the construction industry?",
      open: true,
      body: "Scan to BIM services, short for Scan to Building Information Modeling, is a process that involves converting point cloud data obtained from laser scans of physical structures into a 3D BIM model. This model provides a digital representation of the existing building or infrastructure. The benefits of Scan to BIM include enhanced accuracy in as-built documentation, improved project visualization, clash detection, and efficient renovation or retrofit planning. It streamlines the design and construction process by providing a comprehensive and accurate digital twin of the actual site."
    },
    { title: "Pricing And Consulting Engagement Options" },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>Scan to BIM | Point Cloud to BIM Modeling Services:</h2>
    <p><a href="/">MILESTONE</a> offer Scan on BIM <a href="/service/scan-to-bim/">3D modeling services</a>. Using state of the art technology to convert point cloud and laser data to complex 3D <a href="/service/bim-modeling/">BIM model</a> for architects, retailers and main contractors. We also offer MEP Scan in BIM consulting services to engineers, MEP developers and MEP contractors. The main advantage of Scan to BIM is its ability to analyze the differences between point cloud data and model geometry.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries revit-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Key Benefits to Customers</h2>
    <ul class="check-list coordination-includes">${benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
    <p>Milestone ensures that delivery of our Scan to BIM modeling services is accurate and up-to-date mark with respect to the design specifications, quantities and all other properties of the building components. Our <a href="/service/architectural-bim-modeling-services/">architectural BIM modeling services</a> extends to managing all design changes as project updates. So, the Principal architect can take better well-informed decisions that will help to reduce design errors thus cost. As a result, our expert team can develop a combination of drawings and documentation that provide seamless integration between design, analysis, engineering, construction and operations for the entire life-cycle of construction sites.</p>
    <h2>Our wide range of Scan to BIM services include following:</h2>
    <ul class="check-list coordination-includes scan-services">${services.map(([strong, text]) => `<li><strong>${strong}</strong> ${text}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.open ? `<p>${item.body}</p>` : ""}
      </article>
    `).join("")}</section>`;
  return bimServiceShell({ title: "Scan to BIM", image: asset("2020/07/Scan-to-BIM-1.jpg"), activeHref: "/service/scan-to-bim/" }, content);
}

export function scanToBimReferencePage() {
  const industries = [["|", "Construction"], ["#", "General Contracting"], ["^", "Home Building"], ["=", "Architects"], ["A", "Retail"]];
  const benefits = ["Reduced change orders", "Optimized Schedule", "Enhanced quality work", "Quick handover", "Competitive price"];
  const services = [
    ["3D Models from Laser-Scan Raw Data:", "If you already have scan data, MILESTONEs' engineers can create architectural and MEP models from that. We have all the software tools needed to do any complex conversions, checks, and drawings that may be needed."],
    ["3D BIM Models using Revit:", "MILESTONE engineers can create accurate 3D BIM models using Revit Architecture and MEP. For example, We can create 3D models of commercial building in Revit Architecture, and the electrical and Fire and drainage services contained within them can be built in Revit MEP."],
    ["BIM Modeling using Point Cloud data:", "Scanned BIM models proves very important to provide final as-builts or for retrofit or renovation purposes. Models include all structural and MEP components, including columns, beams, roof, floor, MEP adjustment, and installation, etc."],
    ["Extraction of information from BIM models:", "The unique features of the BIM model have data and properties configured in it. For example, a column may contain building materials, cross section, dimensional details and cost. MILESTONE can extract data from a BIM model that can be used for future reference."]
  ];
  const accordions = [
    {
      title: "What is Scan to BIM services, and how does it benefit the construction industry?",
      open: true,
      body: "Scan to BIM services, short for Scan to Building Information Modeling, is a process that involves converting point cloud data obtained from laser scans of physical structures into a 3D BIM model. This model provides a digital representation of the existing building or infrastructure. The benefits of Scan to BIM include enhanced accuracy in as-built documentation, improved project visualization, clash detection, and efficient renovation or retrofit planning. It streamlines the design and construction process by providing a comprehensive and accurate digital twin of the actual site."
    },
    {
      title: "Pricing And Consulting Engagement Options",
      bullets: [
        "Hourly rates are available, based on your volume of work and type of work",
        "Full-time Equivalent - rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    {
      title: "Data Security & Confidentiality",
      lead: "Being ISO/IEC 27001 Certified:",
      bullets: [
        "Milestone Systematically examine the customer's information security risks, taking account of the threats, vulnerabilities, and impacts;",
        "Design and implement a coherent and comprehensive suite of information security controls and",
        "Adopt an overarching management process to ensure that the information security controls continue to meet the customers's information security needs on an ongoing basis."
      ]
    },
    {
      title: "Quality Philosophy",
      bullets: [
        "Standards and methodologies for project management quality assurance",
        "Effective processes to support arrangements for good governance and accountability;",
        "Input from individuals with the appropriate subject or technical expertise to ensure the development of outputs that are fit for the purpose."
      ]
    }
  ];
  const content = `
    <h2>Scan to BIM | Point Cloud to BIM Modeling Services:</h2>
    <p><a href="/">MILESTONE</a> offer Scan on BIM <a href="/service/scan-to-bim/">3D modeling services</a>. Using state of the art technology to convert point cloud and laser data to complex 3D <a href="/service/bim-modeling/">BIM model</a> for architects, retailers and main contractors. We also offer MEP Scan in BIM consulting services to engineers, MEP developers and MEP contractors. The main advantage of Scan to BIM is its ability to analyze the differences between point cloud data and model geometry.</p>
    <h2>Range of industries</h2>
    <div class="coordination-industries revit-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Key Benefits to Customers</h2>
    <ul class="check-list coordination-includes">${benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
    <p>Milestone ensures that delivery of our Scan to BIM modeling services is accurate and up-to-date mark with respect to the design specifications, quantities and all other properties of the building components. Our <a href="/service/architectural-bim-modeling-services/">architectural BIM modeling services</a> extends to managing all design changes as project updates. So, the Principal architect can take better well-informed decisions that will help to reduce design errors thus cost. As a result, our expert team can develop a combination of drawings and documentation that provide seamless integration between design, analysis, engineering, construction and operations for the entire life-cycle of construction sites.</p>
    <h2>Our wide range of Scan to BIM services include following:</h2>
    <ul class="check-list coordination-includes scan-services">${services.map(([strong, text]) => `<li><strong>${strong}</strong> ${text}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "-" : "+"}</button></div>
        ${item.body ? `<p>${item.body}</p>` : ""}
        ${item.lead ? `<div class="accordion-body"><p class="accordion-lead">${item.lead}</p></div>` : ""}
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return bimServiceShell({ title: "Scan to BIM", image: asset("2020/07/Scan-to-BIM.jpg"), activeHref: "/service/scan-to-bim/" }, content);
}

export function fourDBimPage() {
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
  const benefits = [
    "As a result of proper collaboration and communication 4D BIM in construction of facility provides a risk reduction in work environment.",
    "Due to 4D BIM simulation, Construction professionals can monitor the progress of their construction facility remotely.",
    "4D BIM gives a clear-cut understanding of the timeline of the project to the management team.",
    "4D BIM provides a realistic time schedule of construction project.",
    "4D BIM Reduces the chances of rework.",
    "The integration of 4D BIM in facility construction can eradicate uncertainties related to time."
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
    <h2>4D BIM – Construction Simulation Services</h2>
    <p><a href="/">Milestone</a> is one of the best global BIM services provider, enable real-time visualization of the actual progress of construction activities in specific time through accurate scheduling and simulation during development of construction facility.</p>
    <p>4D BIM –Construction Simulation is a process for intelligently linking a <a href="/service/bim-modeling/">BIM model</a> to time or schedule-related data in a common data environment. In the context of construction, 4D BIM entails comprehensive information regarding lead-time, construction, installation, as well as allowances for curing and drying, and the order in which these activities must be sequenced. 4D BIM is gaining traction throughout the AEC industry bringing out numerous benefits to the Architects and Engineers.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>Benefits of 4D BIM</h2>
    <ul class="check-list coordination-includes">${benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      </article>
    `).join("")}</section>`;
  return bimServiceShell({ title: "4D BIM – Construction Simulation", image: asset("2023/05/4D-Bim-Construction-Simulation-1.jpg"), activeHref: "/service/4d-bim-construction-simulation/" }, content);
}

export function fiveDBimPage() {
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
  const includes = [
    "Overall Project Cost estimation",
    "Accurate Quantity takeoffs",
    "Real time Collaboration",
    "Cost adjustment",
    "Common Data Environment (CDE)"
  ];
  const benefits = [
    "Automatic generation of Quantity take-offs eliminates the human errors.",
    "It becomes easier for our client to provide competitive bids for the project.",
    "Increases the efficiency of procurement and purchasing process."
  ];
  const accordions = [
    {
      title: "What is the significance of performing a detailed quantity takeoff in construction projects, and how does it contribute to accurate cost estimating?",
      open: true,
      body: "A detailed quantity takeoff is a crucial step in construction projects as it involves systematically measuring and quantifying all the materials, labor, and resources required for the project. This process allows for a precise understanding of the scope of work, enabling accurate cost estimating. By breaking down the project into specific quantities, it becomes easier to calculate costs associated with materials, labor, equipment, and overhead. This detailed analysis minimizes the risk of underestimating or overestimating project costs, providing stakeholders with a reliable basis for budgeting and decision-making."
    },
    { title: "Pricing And Consulting Engagement Options" },
    { title: "Data Security & Confidentiality" },
    { title: "Quality Philosophy" }
  ];
  const content = `
    <h2>5D BIM - Cost Estimation & Quantity Takeoff</h2>
    <p>Milestone offers 5D- Cost Estimation & Quantity Take-off services along with a virtual design model (BIM) of facility to manage the construction cost. Our 5D BIM Services enables our customer to extract accurate BOM, generate request for information-RFI and construction document set for tenders. we use Revit and Navisworks software to check the impact of changes in building materials on the overall project cost. we helps our clients to work with Cost Estimation & Quantity Takeoff as it gives complete information about the quantities that the will need to complete the project.</p>
    <p>We at <a href="/">Milestone</a> understand how 5D- Cost Estimation & Quantity Takeoff from a set of drawings is time consuming. Our 5D BIM teams can collaborate and integrate entire information about the project so that the quantities and cost of the project get dynamically readjusted and it is easier for the our client to manage the cost of the project. Our 5D BIM - Cost Estimation & Quantity Take-off Services, we ensure accurate cost estimation for projects by computing quantity takeoffs and material estimates. This involves calculating the quantities and costs of purchase and installation of different building materials utilized during construction.</p>

    <h2>Range of industries</h2>
    <div class="coordination-industries">${industries.map(industryItem).join("")}</div>
    <hr>
    <h2>5D BIM - Cost Estimation & Quantity Takeoff services includes</h2>
    <ul class="check-list coordination-includes">${includes.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h2>Benefits of 5D BIM</h2>
    <ul class="check-list coordination-includes">${benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
    <section class="coordination-accordions">${accordions.map((item) => `
      <article class="coordination-accordion ${item.open ? "open" : ""}">
        <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "–" : "+"}</button></div>
        ${item.open ? `<p>${item.body}</p>` : ""}
      </article>
    `).join("")}</section>`;
  return bimServiceShell({ title: "5D BIM", image: asset("2023/04/5D-BIM-Services.jpg"), activeHref: "/service/5d-bim-cost-estimation-quantity-takeoff/" }, content);
}

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
    image: "/assets/images/architectural-construction-docs-reference-Architectural-Construction-Docs-1.jpg",
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
    image: asset("2023/04/Modular-BIM-Services.jpg"),
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
    image: "/assets/images/architectural-2d-drafting-content.jpg",
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

const commonBuildingIndustries = [
  ["$", "Retail Shops"],
  ["#", "Office & Commercial"],
  ["^", "Residential"],
  ["%", "Restaurants & Hotels"],
  ["=", "Educational institutions"],
  ["[]", "Government buildings"],
  ["*", "Public libraries and Museums"],
  ["+", "Healthcare facilities"]
];

const commonConstructionIndustries = [
  ["|", "Construction Services"],
  ["#", "Commercial Building"],
  ["^", "Residential Building"],
  ["=", "Architects"],
  ["A", "General Contracting"]
];

const pricingAccordions = [
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

const structuralBatchPages = {
  "/service/structural-bim/": {
    title: "Structural BIM",
    heading: "Structural BIM Services",
    image: "/assets/images/structural-bim-candidate-Structural-BIM-1.jpg",
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
    image: "/assets/images/steel-detailing-hero.jpg",
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
    image: "/assets/images/precast-detailing-hero.jpg",
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
    image: "/assets/images/rebar-detailing-hero.jpg",
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
    image: "/assets/images/structural-shop-drawings-reference-Structural-shop-Drawings-2.jpg",
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
    image: "/assets/images/structural-construction-document-reference-Engineering-Services1-e1618664644886.jpg",
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
    image: "/assets/images/structural-3d-modeling-candidate-Structural-3D-Modeling-1.jpg",
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
    image: "/assets/images/structural-2d-drafting-hero.jpg",
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

function serviceAccordions() {
  return `<section class="coordination-accordions">${pricingAccordions.map((item) => `
    <article class="coordination-accordion ${item.open ? "open" : ""}">
      <div><h3>${item.title}</h3><button type="button" aria-label="${item.open ? "Collapse" : "Expand"} ${item.title}">${item.open ? "-" : "+"}</button></div>
      ${item.bullets ? `<ul class="check-list coordination-includes accordion-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
    </article>
  `).join("")}</section>`;
}

function serviceIndustries(items = commonBuildingIndustries) {
  return `<h2>Range of industries</h2><div class="coordination-industries ${items.length <= 5 ? "revit-industries" : ""}">${items.map(industryItem).join("")}</div><hr>`;
}

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
    image: "/assets/images/millwork-drafting-services-candidate-Millwork-Drafting-Services-1.jpg",
    activeHref: "/service/millwork-drafting-services/"
  }, content);
}

const engineeringIndustries = [
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

const analysisIndustries = [
  ["@", "Automotive"],
  ["plug", "Electronics"],
  ["$", "Heavy Engineering"],
  ["cart", "Consumer Products"],
  ["#", "Industrial & Heavy Equipment"]
];

const engineeringBatchPages = {
  "/service/product-design-and-development/": {
    title: "Product Design & Development",
    image: "/assets/images/product-design-and-development-hero.jpg",
    heading: "Product Design & Development",
    intro: [
      "Our insightful product design services experience of more than a decade helps us assist product design and development firms looking for fast pace development of their most complex sheet metal components or machinery. Our product design services team has developed world-class products for our customers that involve rigorous research, design study, detail engineering, prototyping, and testing.",
      "We can manage an entire development program from receipt of the design concepts, through design engineering and data production, to tool design, mold-flow analysis and onwards to prototyping, using some of the most experienced engineers."
    ],
    sections: [
      { title: "Jigs & Fixture Design", body: ["Whether jigs and fixtures are used for repeatability and exact duplication of a part for reproduction, or for holding objects in place and clamp them for machining, they are very important devices for the manufacturing industry."], bullets: ["Welding Fixture Design", "Testing Fixture Design", "Machining Fixture Design"] },
      { title: "Special Purpose Machine Design", body: ["MILESTONE strives to offer the best services in custom design machinery completed with the best effective solutions that could be found on the market."] },
      { title: "Mold Design", body: ["As part of our full services offerings, at MILESTONE, we also provide plastic mold design services that utilize a number of advanced molding processes."] },
      { title: "Sheet Metal Design / Fabrication", body: ["At MILESTONE, we have always delivered high-quality robust designs that are compliant with the international standards."] },
      { title: "Plastic Product Design", body: ["Our skillsets are mated with our years of real world manufacturing experience, and can deliver comprehensive solutions, and a clear cost effective development and manufacturing path."] },
      { title: "Reverse Engineering", body: ["The process of duplicating an existing component, subassembly, or product, without the aid of drawings, documentation."], bullets: ["White Light Scanning", "Point cloud to 3d modeling", "Point cloud and 3d model inspection"] }
    ]
  },
  "/service/cad-drafting-services/": {
    title: "CAD & Detailing",
    image: "/assets/images/cad-drafting-services-hero.jpg",
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
    image: "/assets/images/manufacturing-support-hero.jpg",
    heading: "Manufacturing Support:",
    intro: [
      "We at MILESTONE, know engineering detailing is the key strength of high quality, cost and time-effective manufacturing support. Getting the correct manufacturing support services has become critical than ever before along with the product development life-cycle is shrinking.",
      "MILESTONE offers multi-disciplinary Engineering Design and Detailing Services using latest and state of art technology tools and manufacturing support."
    ],
    sectionTitle: "Our Manufacturing Support includes:",
    bullets: ["Computer Aided Manufacturing (CAM) Support : Tool-path generation upto 4 Axis", "Machining Fixture Design", "Wash Fixture Design", "Testing Fixture Design", "Welding Fixture Design", "Bubble prints", "Weld sequence SOP", "Packing List and drawing", "BOM/Part list", "Spare/Operation/Maintenance Manuals", "Assembly Sequence animation"]
  },
  "/service/automotive-design/": {
    title: "Automotive Design",
    image: "/assets/images/automotive-design-reference-Automotive-Design-Services.jpg",
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
    image: "/assets/images/fea-services-cfd-cae-simulation-hero.jpg",
    heading: "CFD & FEA Services: Computer Aided Engineering",
    intro: [
      "At MILESTONE, we collaborate with design engineers to evaluate product design right from early design stages and minimize prototyping trials. Our FEA Services can provide key insights on the product performance under given boundary conditions to predict possible pre-mature failure.",
      "CFD and FEA services are offered by specialized companies like us who provide their clients with accurate and reliable simulation results."
    ],
    industries: analysisIndustries,
    sectionTitle: "CFD & Finite Element Analysis (FEA) Services Includes:",
    bullets: ["Static analysis", "Linear analysis", "Non-linearity (Time, Contact, Material & geometry)", "Dynamic boundary conditions", "Buckling", "Fatigue", "Thermal analysis", "CFD (Computational Fluid Dynamics)", "Design Optimization (Size, Shape & Topology)", "Electro-magnetics", "Multibody dynamic analysis", "Drop Test"],
    sections: [{ title: "Prototype Testing And Validation:", body: ["Simulation and validation help reduce physical prototypes and bring reliable products to market faster."] }]
  },
  "/service/meshing-services/": {
    title: "Meshing Services",
    image: "/assets/images/meshing-services-hero.jpg",
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
      "<strong>Geometry Healing</strong> - Mesh generation problems are often caused by poorly defined geometry. We can fix geometry errors.",
      "<strong>Surfacing / Midplane Extraction</strong> - Solid model meshing of thin parts is generally not suitable for accurate FEA.",
      "<strong>100% Pure or Hybrid Meshes</strong> - Hexahedral meshes can be generated for demanding FEA & CFD applications.",
      "<strong>Mesh Morphing</strong> - We can morph your original mesh to improve quality and generate rapid shape changes."
    ]
  },
  "/service/technical-documentation-services/": {
    title: "Aftermarket / Technical Documentation",
    image: "/assets/images/technical-documentation-services-hero.jpg",
    heading: "Aftermarket / Engineering Documentation:",
    intro: ["Our Technical Documentation services team works with clients to produce service and operation manuals for products ranging from washing machines to airplanes. The Engineering Documentation team also creates part illustrations and manufacturing instructions for components across industries."],
    industries: analysisIndustries,
    sectionTitle: "Aftermarket / Technical Documentation Services Includes:",
    bullets: ["SOP for Assembly of complex product", "SOP for service or maintenance procedure", "Animation of Assembly sequences", "Exploded Views for maintenance manuals", "High class/ Real-life rendering of your product", "Parts Management / ECR", "Manual Development", "Translation & Localization", "Document Conversion / Editing", "Technical Illustrations", "SOP Development"],
    sections: [{ title: "2D To 3D Conversion (Legacy Conversion / Data Migration):", body: ["Milestone offers a complete range of highly accurate and high-quality 2D to 3D legacy data conversion services."] }]
  },
  "/service/value-engineering-value-analysis/": {
    title: "Value Engineering & Value Analysis",
    image: "/assets/images/value-engineering-value-analysis-hero.jpg",
    heading: "Value Engineering & Value Analysis:",
    intro: [
      "Each product design team and manufacturing units want to reduce design cycle time and bring their products to the market early to beat the competition.",
      "We ensure our customer will get exact equilibrium between cost and quality using our Value Engineering and Value Analysis to maximize the value for you."
    ],
    industries: analysisIndustries,
    sectionTitle: "Our Services Includes:",
    bullets: ["Engineering Design Optimization:", "Product Weight and Cost Reduction:", "Product Operational performance optimization through Computer Aided Engineering", "Product Re-Engineering", "FMEA - Failure Mode Effective Analysis", "DFM - Design for Manufacturing", "DFA - Design for Assembly", "DFR - Design for Reliability", "Value Analysis & Value Engineering"],
    after: ["Our commitment to excellence in providing value engineering services is possible due to our well-equipped engineering facility, and a team of VE specialists to develop cost-effective strategies for our clients."]
  },
  "/service/rapid-prototyping-services/": {
    title: "Rapid Prototyping",
    image: "/assets/images/rapid-prototyping-services-hero.jpg",
    heading: "Rapid Prototyping:",
    intro: [
      "From concept to prototyping, Milestones' team of highly skilled design engineers will turn your design concept into a working rapid prototype. Our rapid prototyping services team will work with you to develop a rapid prototyping that meets your needs.",
      "If you have a CAD model, we will inspect your design for drafts, radius and possible interference and will do the required modifications."
    ],
    industries: analysisIndustries,
    sections: [
      { title: "Our Prototyping Expertise:", body: ["Our highly qualified and experienced engineering team, will guide you through the design, from concept to prototype. We use the appropriate prototyping solution for your application, including Additive Processes and Subtractive Processes."] },
      { title: "Proof-of-Principle Prototype", body: ["Using this Prototype, we will help you to prove your potential approach and test the intended purpose."] },
      { title: "User Experience Prototype", body: ["Our User Experience Prototypes allow your stakeholders to view and experience the basic look and function of the product."] },
      { title: "Visual Prototype", body: ["We use 3D CAD software and physical models to provide a visual prototype that allows designer engineers to refine their design."] },
      { title: "Functional Prototype", body: ["When functional aspects of the design is of the utmost importance, our Functional Prototypes allow you to validate as well improve the functionality of your design."] }
    ]
  }
};

const engineeringPageAliases = {
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

function engineeringContent(page) {
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

export function contractStaffingPage() {
  const content = `
    <h2>Contract Staffing:</h2>
    <p>Over the years, MILESTONE has served the niche market of specialized technical projects to great success. We offer impeccable service for tech manpower augmentation.</p>
    <h2 id="managed-services">Managed Services:</h2>
    <p>We provide tailored Onsite contract staffing services to suit our client's technology manpower needs. We act like an extended business support function allowing you to focus on your core business activities. We manage the hiring, retention, and performance of onsite staff as per agreed SLAs.</p>
    <h2 id="onsite-manpower">Onsite Manpower:</h2>
    <p>We are entrusted by many global clients for over a decade to augment their onsite technical resources need. We offer high-caliber professionals having the CAD and FEA Tools expertise to deliver projects on time with quality output, best practices, and use the most modern software.</p>
    <h2 id="technical-hiring">Tech Hiring:</h2>
    <p>Input from individuals with the appropriate subject or technical expertise to ensure the development of outputs that are fit for the purpose.</p>
    ${serviceAccordions()}`;

  return staffingServiceShell({
    title: "Contract Staffing Services",
    image: "/assets/images/contract-staffing-services-hero.jpg",
    activeHref: "/service/contract-staffing-services/"
  }, content);
}

const mepHeroPages = {
  "/service/mep-bim-services/": {
    title: "MEP BIM Services",
    image: "/assets/images/mep-bim-services-reference-MEP-BIM-Services-2.jpg"
  },
  "/service/mep-drafting-services/": {
    title: "MEP Drafting",
    image: "/assets/images/mep-drafting-services-reference-MEP-Drafting-1.jpg"
  },
  "/service/mep-bim-modeling-services/": {
    title: "MEP BIM Modeling",
    image: "/assets/images/mep-bim-modeling-services-reference-MEP-BIM-MODELING-1.jpg"
  },
  "/service/mep-coordination/": {
    title: "MEP Coordination",
    image: "/assets/images/mep-coordination-reference-MEP-Coordination.jpg"
  },
  "/service/mep-shop-drawing/": {
    title: "MEP Shop Drawing Services",
    image: "/assets/images/mep-shop-drawing-reference-MEP-SHOP-DRAWINGS.jpg"
  },
  "/service/mechanical-cad/": {
    title: "Mechanical CAD",
    image: "/assets/images/mechanical-cad-reference-MECHANICAL-CAD-1.jpg"
  },
  "/service/electrical-drawings/": {
    title: "Electrical Drawings",
    image: "/assets/images/electrical-drawings-reference-ELECTRICAL-DRAWINGS.jpg"
  },
  "/service/as-built-drafting/": {
    title: "As-Built Drafting",
    image: "/assets/images/as-built-drafting-reference-AS-BUILT-DRAFTING-1.jpg"
  }
};

export const mepServiceRoutes = Object.keys(mepHeroPages);

export function mepHeroPage(currentPath) {
  const page = mepHeroPages[currentPath];
  if (!page) return "";
  const content = `
    <h2>${page.title}</h2>
    <p>Milestone PLM Solutions provides precise, scalable and high-quality ${page.title.toLowerCase()} for engineering, construction, manufacturing and AEC teams across global markets.</p>
    <p>Our team supports complete project lifecycles with CAD, BIM, drafting, modeling, documentation, analysis and coordination workflows. Deliverables are prepared around client standards, quality checks, security discipline and fast turnaround needs.</p>
    <h3>${page.title} Includes:</h3>
    <ul class="check-list">
      <li>Project setup and standards alignment</li>
      <li>Modeling, drafting and documentation support</li>
      <li>Quality checks by experienced engineers</li>
      <li>Coordination with architecture, structure and MEP teams</li>
      <li>Flexible fixed-price, dedicated-resource and time-material models</li>
    </ul>`;
  return mepServiceShell({
    title: page.title,
    image: page.image,
    activeHref: currentPath
  }, content);
}

export function serviceInfoBoxes() {
  const boxes = [
    {
      title: "What are BIM modeling services, and how do they benefit the construction industry?",
      body: ["BIM modeling services involve the creation and management of digital representations of the physical and functional characteristics of a building or infrastructure. These services facilitate collaboration among various stakeholders in the construction process. Benefits include improved project visualization, enhanced coordination, reduced errors, and better decision-making throughout the project lifecycle."]
    },
    {
      title: "Pricing And Consulting Engagement Options",
      bullets: [
        "Hourly rates are available, based on your volume of work and type of work",
        "Full-time Equivalent – rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.",
        "Refer outsourcing model for more details."
      ]
    },
    {
      title: "Data Security & Confidentiality",
      lead: "Being ISO/IEC 27001 Certified:",
      bullets: [
        "Milestone Systematically examine the customer’s information security risks, taking account of the threats, vulnerabilities, and impacts;",
        "Design and implement a coherent and comprehensive suite of information security controls and",
        "Adopt an overarching management process to ensure that the information security controls continue to meet the customers’s information security needs on an ongoing basis."
      ]
    },
    {
      title: "Quality Philosophy",
      bullets: [
        "Standards and methodologies for project management quality assurance",
        "Effective processes to support arrangements for good governance and accountability;",
        "Input from individuals with the appropriate subject or technical expertise to ensure the development of outputs that are fit for the purpose."
      ]
    }
  ];

  return `<section class="service-info-boxes">${boxes.map((box, index) => `
    <article class="service-info-box ${index === 0 ? "open" : ""}">
      <div class="service-info-title"><h3>${box.title}</h3><button type="button" aria-label="${index === 0 ? "Collapse" : "Expand"} ${box.title}">${index === 0 ? "–" : "+"}</button></div>
      <div class="service-info-content">
        ${box.lead ? `<p class="service-info-lead">${box.lead}</p>` : ""}
        ${(box.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
        ${box.bullets ? `<ul class="check-list service-info-list">${box.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `).join("")}</section>`;
}

