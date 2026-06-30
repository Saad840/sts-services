import { bimServiceShell } from "../../components/service-layout.js";
import { asset } from "../../data/index.js";
import { industryItem, serviceInfoBoxes, servicesReferenceSidebar } from "./shared.js";

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
