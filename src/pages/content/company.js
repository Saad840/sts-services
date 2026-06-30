
const securityPolicyFeatures = [
  "Strict NDA and Non-compete agreements binding to all employees",
  "Entry of unauthorized persons into MILESTONE's premises is strictly prohibited.",
  "Document storage area is well protected.",
  "No unauthorized access in the systems area.",
  "No Media can be taken inside the premises without written permission.",
  "Each personnel has access to his given computer/workstation only thru password.",
  "Responsibilities are strictly defined and therefore there are no overlapping areas of work."
];

const securityConfidentialityFeatures = [
  "All data and information provided by a client will be confidential and strictly the property of the client unless it is present in open domain.",
  "MILESTONE agrees that neither the company nor its staff will disclose any information about the project to any third party without the prior consent of the customer",
  "MILESTONE agrees that neither the company nor its staff will reproduce in any way or divulge any tangible or intangible property whatsoever which could reasonably be construed as constituting confidential information of the client.",
  "All raw data, directories, printouts, processed data and finalized product will solely be the property of the client.",
  "Once the data is approved, MILESTONE will destroy all raw and processed data."
];

function securityCheckList(items) {
  return `<ul class="data-security-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

export function dataSecurityPage() {
  return `
    <section class="data-security-title">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> Data Security & Confidentiality</nav>
        <h1>Data Security & Confidentiality</h1>
      </div>
    </section>
    <main id="main" class="data-security-page">
      <div class="container data-security-content">
        <div class="data-security-images">
          <img src="/assets/images/company/data-security-hero.jpg" alt="Data security" loading="lazy">
          <figure>
            <img src="/assets/images/company/iso-27001-small.jpg" alt="ISO 27001 and UKAS certification" loading="lazy">
            <figcaption>URS is a member of Registrar of Standards (Holdings) Ltd.</figcaption>
          </figure>
        </div>
        <section>
          <h2>IT SECURITY, DATA SECURITY & CONFIDENTIALITY</h2>
          <p>Our office/production facility is custom-bond. We strictly follow ISO 27001:2013 guidelines for IT Security and Data security and confidentiality.</p>
        </section>
        <section>
          <h2>THE SALIENT FEATURES OF MILESTONE'S SECURITY POLICY INCLUDE:</h2>
          ${securityCheckList(securityPolicyFeatures)}
        </section>
        <section>
          <h2>THE SALIENT FEATURES INCLUDE:</h2>
          ${securityCheckList(securityConfidentialityFeatures)}
        </section>
      </div>
    </main>`;
}

const workCultureSections = [
  {
    title: "WORK CULTURE AT MILESTONE",
    paragraphs: [
      "<strong>We are achievers, not simply chiefs. Every last one of us straightforwardly adds to the income and development of the company, cites Mr. Amit Gurjal, Managing Director, Milestone PLM Solutions.</strong>",
      "Milestone highly esteems its association. Headed by a youthful, unique top supervisory crew of individuals who show others how its done and go where expected to take care of business, it is an organization with a totally involved way to deal with getting things done.",
      "Anyone can appear in a director's room, or rather, work area, to share an idea or examine a better approach for getting things done. The availability gives opportunity with responsibility and discipline, and enables individuals to understand their maximum capacity."
    ]
  },
  {
    title: "REPRESENTATIVE STRENGTHING",
    paragraphs: [
      "\"We have faith in self-propelled individuals who propel themselves harder than any other person can - individuals who are continually working upwards in the evening,\" says Amit Gunjal. There's no space for laid back Under-Performer here in Milestone. Our folks are decided by results.",
      "Business Tops of our Specialty Units run their focuses of greatness with a drawn out essential viewpoint while guaranteeing month-on-month productivity through Administration by Goal and standard objective coordinated business arranging in light of examination and measurements."
    ]
  },
  {
    title: "COOPERATIVE CLIMATE",
    paragraphs: [
      "Cross-useful groups pool their aggregate insight and invigorate innovative idea to further develop execution, establishing a boundary less ambience where thoughts stream to deliver positive outcomes.",
      "Every worker is a \"Holon\" - an entire with an unmistakable personality, engaged to make interesting individual commitments and take free choices to take care of business. Simultaneously, every worker is a natural piece of a larger entire, one of the Free Specialty Units that make up the still bigger holarchy, Milestone PLM Solutions, the KPO holarchy of holarchies, offering combined business process re-appropriating administrations under one rooftop."
    ]
  },
  {
    title: "THIS APPROACH EMPOWERS:",
    paragraphs: [
      "Self-sorting out and independent groups: It isn't so much that there are no superior here, it's simply that each part is a expert in some space and liable for their commitment to a given outcome. It resembles in a subterranean insect state, perhaps of nature's best group, the sovereign focuses on her occupation of generation, not on controlling what different insects do. The actual group has a unique kind of energy separate from its individuals.",
      "Concentration around Actions: Take the choice, get the work done, take care of business. More noteworthy dexterity and speed of reaction at crucial times.",
      "Faster data stream and great correspondence between colleagues."
    ]
  },
  {
    title: "Our Main Management crew",
    subtitle: "VCD - Valuable chances to develop",
    paragraphs: [
      "We put resources into on-going preparation and abilities improvement through classes and studios led by industry experts, and give high weightage to data sharing both inside practical groups and between groups working in various business areas.",
      "At Milestone, our folks have quick track career development choices and potential chances to develop and learn. The broadness and profundity of their jobs and occupation capabilities empowers them to be presented to various work circumstances, so they can choose the region that matches their expertise and abilities.",
      "At Milestone, it is entirely expected to find an individual who has begun with information section benefits and has proceeded to deal with web showcasing or examination. We urge our people to wear various caps and get a balanced perspective on the business."
    ]
  },
  {
    title: "OFFER YOUR BUSINESS A CHANCE TO DEVELOPE WITH MILESTONE",
    blocks: [
      ["Unstopabble learning", [
        "Each project has its extraordinary necessities and training is given to all colleagues at the beginning, to accomplish anticipated results. Our clients look for complete business solutions.",
        "- they characterize the \"what\" and leave the \"how\" to us.",
        "For the people who as of now have a cycle set up, we duplicate their current interaction while we progress it seaward. This limits factors and upgrades the possibility of progress. When the re-appropriating process is laid out, we at Milestone frequently propose a more successful approach to getting things done.",
        "While our work includes consistent learning, you could say our clients also are ceaselessly getting taught from us!"
      ]],
      ["Representative Motivation", [
        "Milestone offers services in different spaces with center around unambiguous business verticals from mechanical to architectural. This sets out open doors for development and roads for exploration where our kin can do various types of work, overhaul and improve their abilities and move into new areas of interest.",
        "Pro-activeness, discipline and best execution is compensated with incentives, benefit sharing plans and other creative techniques."
      ]],
      ["Training", [
        "Seminars and workshops on an on-going premise level up our kin's abilities in essential reasoning, arranging, people management and conflict management.",
        "Each new project additionally requires its own particular kind of preparing to guarantee conveyance to exclusive expectations of value inside time and cost boundaries.",
        "Data sharing",
        "In particular spaces like information process outsourcing, our senior experts meet and offer industry bits of knowledge and updates in various fields where innovation and its application is changing at a quick speed."
      ]],
      ["Client focus", [
        "At Milestone, we approach business according to a client's perspective. As opposed to promoting the work we offer, we comprehend your remarkable business needs and afterward go all on a mission to meet them.",
        "We handle each business query as though it were our last. That is the means by which we've developed hugely at a time.",
        "In particular, we fabricate trust through genuineness, uprightness, open conversations and transparency. Clients can cooperate with individuals really accomplishing the work."
      ]],
      ["Roles to Exhibit Capacity", [
        "Milestone's cross-function groups work in cooperative energy to deliver results, many times, utilizing and refining processes where jobs and working frameworks are distinct for consistency in quality. The jobs our kin fill are basically as differed and testing as the re-evaluating system itself."
      ]]
    ]
  },
  {
    title: "Allow the Milestone to group be a piece of your business world!",
    blocks: [
      ["Qualified to succeed", [
        "Milestone takes pride in introducing its group of profoundly qualified and experienced experts and advisors, fit for giving greatness in tasks and conveyance to the principles of worldwide organizations.",
        "Our workers hold proficient or post advanced educations in different subject streams.",
        "Engineers with specializations in civil, mechanical, electronics, electrical engineers, architects and Interior designers make up the rich ability base of Milestone solutions.",
        "Interface with the expert individuals for your work. Contact Milestone PLM Solutions immediately."
      ]],
      ["Activity. Enthusiasm. Energy. Results.", [
        "All combining towards business without limitations in Milestone PLM Solutions That is Milestone for you."
      ]]
    ]
  }
];

const workCultureRoles = [
  "Business Heads",
  "Business Development Chiefs",
  "Domain specialist/experts",
  "Sales Managers/Account managers/Customer relationship managers",
  "Project managers/Migration chiefs",
  "Project Leads/Team Leads",
  "Process Leaders/Program managers",
  "Client assistance experts/Representatives/Agents",
  "Team leaders/Supervisors",
  "Quality managers/Operations managers",
  "Quality coaches/Quality controllers/Quality assurance supervisors",
  "Voice/Accent/Culture Trainers",
  "Product and process trainers",
  "Shift supervisors/Managers"
];

function contentTitle(title) {
  return `<h2>${title}</h2>`;
}

function sectionBlock({ title, subtitle, paragraphs = [], blocks }) {
  return `<section class="work-culture-section">
    ${contentTitle(title)}
    ${subtitle ? `<h3>${subtitle}</h3>` : ""}
    ${paragraphs.map((p) => `<p>${p}</p>`).join("")}
    ${blocks ? blocks.map(([heading, copy]) => `<div class="work-culture-subsection"><h3>${heading}</h3>${copy.map((p) => `<p>${p}</p>`).join("")}${heading === "Roles to Exhibit Capacity" ? `<ul class="check-list work-culture-roles">${workCultureRoles.map((role) => `<li>${role}</li>`).join("")}</ul>` : ""}</div>`).join("") : ""}
  </section>`;
}

export function workCulturePage() {
  return `
    <section class="work-culture-hero">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> Work Culture</nav>
        <h1>Work Culture</h1>
      </div>
    </section>
    <main id="main" class="work-culture-main">
      <div class="container work-culture-content">
        ${workCultureSections.map(sectionBlock).join("")}
      </div>
    </main>
  `;
}

const lifeHighlights = [
  ["Work Environment", "Open communication, supportive leadership, and a collaborative team structure where ideas matter."],
  ["Global Exposure", "Work with international clients and gain hands-on experience with global BIM standards."],
  ["Learning & Growth", "Structured BIM training, live projects, and opportunities to grow into leadership roles."],
  ["Celebrations", "Festivals, team outings, birthdays, and engagement activities create a vibrant workplace."]
];

const lifeDayItems = [
  "Morning team discussions and planning",
  "Working on live international BIM projects",
  "Collaboration with engineers and designers",
  "Learning new tools and international workflows",
  "Client coordination and project discussions"
];

const lifeImages = [
  "/assets/images/company/milestone-office-culture-11.webp",
  "/assets/images/company/milestone-office-culture-7.webp",
  "/assets/images/company/milestone-office-culture-14.webp",
  "/assets/images/company/milestone-office-culture-6.webp",
  "/assets/images/company/milestone-office-culture-13.webp",
  "/assets/images/company/milestone-office-culture-8.webp",
  "/assets/images/company/milestone-office-culture-1.webp",
  "/assets/images/company/milestone-office-culture-12.webp",
  "/assets/images/company/milestone-office-culture-2.webp",
  "/assets/images/company/milestone-office-culture-5.webp",
  "/assets/images/company/milestone-office-culture-3.webp",
  "/assets/images/company/milestone-office-culture-4.webp"
];

const employeeVoices = [
  ["Celebrating 8 years", "/assets/images/company/milestone-office-culture-7.webp"],
  ["Celebrating 15 incredible years", "/assets/images/company/milestone-office-culture-14.webp"],
  ["Celebrating 7 incredible years", "/assets/images/company/milestone-office-culture-6.webp"],
  ["Celebrating 5 incredible years", "/assets/images/company/milestone-office-culture-13.webp"],
  ["Celebrating 5 incredible years", "/assets/images/company/milestone-office-culture-8.webp"]
];

export function lifeAtMilestonePage() {
  return `
    <section class="life-hero">
      <div class="container">
        <div class="life-hero-copy">
          <h1>Build Your Future with Milestone</h1>
          <p>Where engineering talent meets global opportunities. Work on international BIM and engineering projects, enhance your skills, and become part of a team that values people, performance, and progress.</p>
          <a class="life-btn" href="/careers-page/">Explore Opportunities</a>
        </div>
      </div>
    </section>
    <main id="main" class="life-page">
      <section class="life-section">
        <div class="container life-intro">
          <div>
            <h2>Who We Are</h2>
            <p>Milestone PLM Solutions Pvt Ltd is a fast-growing engineering and BIM services company delivering high-quality solutions to global clients, particularly in the United States. Our team works on complex BIM modeling, drafting, and engineering projects while maintaining global standards and delivering real value to clients.</p>
          </div>
          <img src="/assets/images/company/milestone-office-culture-11.webp" alt="Milestone team celebration" loading="lazy">
        </div>
      </section>
      <section class="life-section life-soft">
        <div class="container">
          <h2>Life at Milestone</h2>
          <p class="life-lead">Our culture is built on learning, collaboration, and innovation.</p>
          <div class="life-card-grid">${lifeHighlights.map(([title, copy]) => `<article><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div>
        </div>
      </section>
      <section class="life-section">
        <div class="container life-day">
          <h2>A Day at Milestone</h2>
          <ul class="check-list">${lifeDayItems.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </section>
      <section class="life-section life-videos">
        <div class="container">
          <h2>Employee Voices</h2>
          <div class="life-video-grid">${employeeVoices.map(([title, image]) => `<article class="life-video-card"><img src="${image}" alt="${title}" loading="lazy"><span aria-hidden="true"></span><h3>Milestone PLM Solutions | ${title}</h3></article>`).join("")}</div>
        </div>
      </section>
      <section class="life-section life-gallery-section">
        <div class="container">
          <h2>Our Culture in Action</h2>
          <p class="life-lead">Moments from our workplace</p>
          <div class="life-gallery">${lifeImages.map((image, index) => `<img src="${image}" alt="Life at Milestone moment ${index + 1}" loading="lazy">`).join("")}</div>
        </div>
      </section>
      <section class="life-join">
        <div class="container">
          <h2>Join Our Team</h2>
          <p>Be part of a company where your work creates global impact and long-term career growth.</p>
          <a class="life-btn" href="/careers-page/">View Open Positions</a>
        </div>
      </section>
    </main>
  `;
}

const whyMilestonePillars = [
  {
    title: "Plug And Play Set Up",
    points: [
      "Let us know your project specifications and leave the infrastructure and resource worries to us. We will start operating from the very next day!",
      "Features of our infrastructure setup include best in class backup and disaster recovery systems. With ISO 27001:2013 certified information & Data protection processes & security systems (Physical, network and data) that exceed client expectations and campus operating with top-of-the-line hardware and software tools in a secure atmosphere.",
      "No capital infrastructure costs, no resource hiring, training and management worries: just utilize MILESTONE' best-in-class infrastructure facilities for your CAD-CAM-FEA-BIM Conversion Services. Outsource to India, hassle-free."
    ]
  },
  {
    title: "Largest Resource Pool",
    points: [
      "Situated India's Business capital, Mumbai, MILESTONE makes use of India's large pool of computer literate, English speaking engineers. Engineers who graduate from various top universities such as the Indian Institute of Technology (IIT) are well recognized for their domain, IT Knowledge and communication skills.",
      "We train and deploy our engineers to specific project types, so that they acquire domain specializations within the specific sector. MILESTONE' strong team of domain specialists help clients gain the edge with their attention to detail and end-to-end capabilities."
    ]
  },
  {
    title: "Strong Management",
    lead: "We have a superb team of project managers. Experienced in working for MNCs, our project managers ably assist clients to extract the best from our Services teams. Various Project and process management techniques used by our managers include:",
    points: [
      "Regular and ad-hoc reporting and metrics",
      "Documentation of project, process and progress",
      "Access Control Card System for all our premises",
      "Predefined escalation channels",
      "Adherence to international standards such as ASME, BS, AIA, NFPA and any others specified by our clients in our Services projects",
      "Regular training and re-training of employees",
      "Transition models include: Subject Matter Experts on location, or client representative and a reporting matrix"
    ]
  }
];

const whyRecognitionCards = [
  ["ISO/IEC 27001:2013 Certified", "/assets/images/company/iso-27001-certified.jpg"],
  ["Autodesk Authorized Training Centre", "/assets/images/company/autodesk-authorized-training-centre.png"],
  ["ISO 9001:2015 Certified", "/assets/images/company/iso-9001-certified.jpg"]
];

const whyStats = [
  ["3000+", "Projects Completed"],
  ["19", "Awards"],
  ["100", "Employees"],
  ["300+", "Satisfied Customers"]
];

export function whyMilestonePage() {
  return `
    <main id="main" class="why-milestone-page">
      <section class="why-reference-section">
        <div class="container why-reference-content">
          <h1>Why Milestone PLM Solutions</h1>
          <p>MILESTONE offers the broadest and deepest capabilities and infrastructure when you outsource your CAD-CAM-FEA-BIM conversion services to India. There are compelling reasons why you should outsource to us and why you should engage with MILESTONE for your outsourcing services needs. Milestone offers a complete spectrum of infrastructure; where clients can expect maximized business performance, enhanced margins, unified technology and business priorities, reduced costs, amplified service speeds and flexibility to attain long-term success. Milestone is well equipped with state-of-the-art infrastructure to ensure; we stay abreast latest technological evolvements to offer a robust delivery platform.</p>

          ${whyMilestonePillars.map((item) => `<section class="why-reference-block">
            <h2>${item.title}:</h2>
            ${item.lead ? `<p>${item.lead}</p>` : ""}
            <ul class="why-reference-list">${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
          </section>`).join("")}

          <blockquote class="why-reference-quote">
            <section>
              <h2>The Time Zone Advantage:</h2>
              <ul class="why-reference-list">
                <li>Being strategically located on the other side of the globe, we offer a unique time zone advantage (8 to 12 hours) to most locations in North America and Western Europe.</li>
                <li>This allows us to make super faster deliveries to clients - we called it next day delivery.</li>
                <li>Many customers utilize this "The Next Day Delivery" model with tight deadline projects.</li>
              </ul>
            </section>
            <section>
              <h2>Cost-Effective And Competitive:</h2>
              <p>When everything else being more or less equal, then things boils down to price. MILESTONE offers multiple options in our pricing model, including:</p>
              <ul class="why-reference-list">
                <li>Time and Materials (Effort Based)</li>
                <li>Fixed price (Milestone Based)</li>
                <li>Full Time Equivalent (Dedicated Resource at Milestone OR at Customer Location)</li>
              </ul>
            </section>
          </blockquote>
        </div>
      </section>
      <section class="why-recognitions-section">
        <div class="container why-reference-content">
          <h2 class="why-centered-title">Our Recognitions</h2>
          <div class="why-recognition-grid">
            ${whyRecognitionCards.map(([title, image]) => `<article>
              <h3>${title}</h3>
              <img src="${image}" alt="${title}" loading="lazy">
            </article>`).join("")}
          </div>
        </div>
      </section>
      <section class="why-milestone-experience">
        <div class="container why-reference-content why-experience-grid">
          <div>
            <h2>More than 20 Years of Experience</h2>
            <p>Milestone works with ambitious leaders who want reliable engineering support and measurable project outcomes.</p>
          </div>
          <div class="why-stats-grid">
            ${whyStats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}
          </div>
        </div>
      </section>
    </main>`;
}

export function awardsRecognitionsPage() {
  const awardsRecognitionCards = [
    ["ISO/IEC 27001:2013 Certified", "/assets/images/company/awards-iso-27001-recognition.jpg"],
    ["Autodesk Authorised Training Centre", "/assets/images/company/awards-autodesk-atc.png"],
    ["ISO 9001:2015 Certified", "/assets/images/company/awards-iso-9001-recognition.jpg"]
  ];
  const awardPhotos = [
    [
      "/assets/images/company/awards-recognitions-apprentice-award.jpg",
      "Milestone apprentice receiving recognition",
      "Milestone's Apprentice Ms. Ravina being awarded by Honorable Prime Minister at Vigyan Bhavan, New Delhi on 16th Oct 2014."
    ],
    [
      "/assets/images/company/awards-recognitions-director-ceremony.jpg",
      "Milestone director at award ceremony",
      "Milestone's Director Mr. Amit Gunjal (Third from Right) along with Union Labour Minister Shri. Kamlesh Mishra & Shri. Naredra Tomar, Minister of State (Labour) at Vigyan Bhavan, New Delhi on 16th Oct 2014."
    ]
  ];

  return `
    <main id="main" class="awards-page">
      <section class="awards-intro-section">
        <div class="container awards-intro">
          <blockquote>
            <p><strong>Milestone PLM Solutions Pvt Ltd Received Mandate For The Scheme: "Apprenticeship Protsahan Yojana" From Government Of India</strong></p>
          </blockquote>
          <div class="awards-photo-grid">
            ${awardPhotos.map(([image, alt, caption]) => `<figure>
              <img src="${image}" alt="${alt}" loading="lazy">
              <figcaption>${caption}</figcaption>
            </figure>`).join("")}
          </div>
        </div>
      </section>

      <section class="awards-recognitions-section">
        <div class="container">
          <h2 class="why-centered-title">Our Recognitions</h2>
          <div class="why-recognition-grid awards-recognition-grid">
            ${awardsRecognitionCards.map(([title, image]) => `<article>
              <h3>${title}</h3>
              <img src="${image}" alt="${title}" loading="lazy">
            </article>`).join("")}
          </div>
        </div>
      </section>

      <section class="company-overview-stats awards-stats">
        <div class="container why-experience-grid">
          <div>
            <h2>More than 20 Years<br>of Experience</h2>
            <p>We work with ambitious leaders who want their future to be successful and help them achieve extraordinary outcomes.</p>
          </div>
          <div class="why-stats-grid">
            ${whyStats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}
          </div>
        </div>
      </section>
    </main>`;
}

const milestoneTodayItems = [
  "ISO/IEC 27001:2013 and ISO 9001:2015 Certified company",
  "Revenue growth above CRISIL's estimate of 15-20%",
  "Ranked among Top Engineering consulting companies",
  "100+ clients across India, USA, Europe & Middle-East",
  "Focused long term relationships, 80% recurring clients.",
  "50+ professionals at offices in India",
  "More than 25% of employees with 5+ years of association",
  "Senior management with average span of 12+ years of experience"
];

export function companyOverviewPage() {
  return `
    <main id="main" class="company-overview-page">
      <section class="company-overview-section">
        <div class="container company-overview-grid">
          <div class="company-overview-copy">
            <h1>Company overview</h1>
            <p>Established in 2004, Milestone PLM Solutions Pvt Ltd is an Engineering Outsourcing company specializing in <strong>CAD, FEA, Architecture, MEP & BIM services.</strong> MILESTONE offers a range of outsourced engineering services that are tailored to suit the specific needs of companies operating in diverse industry domains.</p>
            <p>We are a preferred engineering services partner for clients across the world because of our pragmatic approach to problem solving, proven offshore delivery model. This also ensures close engagements with our customers. From designing new products to solving complex engineering analysis, our multi-disciplinary team works closely with you to engineer solutions for a wide range of business requirements.</p>
            <p><strong class="blue-word">MILESTONE</strong> offers you one-stop engineering solutions experience along with high quality and timely delivery including highly customer-centric consulting, engineering services and manufacturing support. Outsourcing your engineering and manufacturing support activities to us empowers you to focus on your core activities, dedicate more time for your customer service and overall increase your productivity and profitability.</p>
          </div>
          <div class="company-overview-visual">
            <img src="/assets/images/company/company-overview-illustration.jpg" alt="Company overview illustration" loading="lazy">
          </div>
        </div>
      </section>
      <section class="company-overview-section company-overview-today">
        <div class="container company-overview-grid">
          <div>
            <h2>Milestone Today:</h2>
            <ul class="why-reference-list">${milestoneTodayItems.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div class="company-video-card" aria-label="Milestone PLM Solutions overview video preview">
            <img src="/assets/images/company/company-overview-video-thumbnail.png" alt="Milestone PLM Solutions overview video preview" loading="lazy">
          </div>
        </div>
      </section>
      <section class="company-holder-section">
        <div class="container company-holder-grid">
          <div>
            <h2>Our Passionate Company Holder</h2>
            <div class="company-holder-photo">
              <img src="/assets/images/company/amit-gunjal-managing-director.jpg" alt="Amit Gunjal - Managing Director" loading="lazy">
              <span>View Profile</span>
            </div>
          </div>
          <div class="company-holder-copy">
            <h3>Amit Gunjal</h3>
            <h4>Managing Director of Milestone PLM Solutions</h4>
            <p>We are achievers, not simply chiefs. Every last one of us straightforwardly adds to the growth and development of the company. Milestone holds its association in high regard. Led by a dynamic and exceptional top management team, composed of individuals who lead by example and are willing to go the extra mile. It is a company that adopts a fully engaged approach to accomplishing tasks.</p>
          </div>
        </div>
      </section>
      <section class="company-quality-section">
        <div class="container company-quality-content">
          <blockquote>
            <h2>Our Quality</h2>
            <p>The primary focus at MILESTONE is to deliver quality standard that is expected within the International market. This focus has resulted in repeat business and many referrals from existing customers during last many years. Delivering quality output in every project is our primary commitment to quality assurance. In most cases we create bespoke quality standards and requirements for a set of projects based on our clients' expectations and standards. We ensure that all CAD Drawings, Reports and CAD modelling work is independently checked and verified for accuracy and submitted within completion within committed date to our clients. We use customer specific checklist for each project.</p>
          </blockquote>
          <blockquote>
            <h2>Quality Statement</h2>
            <p>Our quality statement is integral to everything that we strive to achieve:</p>
            <p><strong>'We are committed to making constant efforts in achieving to our customer's goals in terms of the highest levels of quality and timely delivery of projects to their full satisfaction'</strong></p>
          </blockquote>
        </div>
      </section>
      <section class="company-overview-stats">
        <div class="container why-experience-grid">
          <div>
            <h2>More than 20 Years<br>of Experience</h2>
            <p>We work with ambitious leaders who want their future to be successful and help them achieve extraordinary outcomes.</p>
          </div>
          <div class="why-stats-grid">
            <div><strong>3000+</strong><span>Projects Delivered</span></div>
            <div><strong>100</strong><span>Employees</span></div>
            <div><strong>19</strong><span>awards winning</span></div>
            <div><strong>60+</strong><span>satisfied customers</span></div>
          </div>
        </div>
      </section>
    </main>`;
}
