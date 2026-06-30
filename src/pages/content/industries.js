import { asset } from "../../data/index.js";
import { industryDetailPage } from "../../components/industries/industry-detail-layout.js";

const officeRiskCards = [
  ["Multiple review audiences", "Architects, GCs, fabricators, and installers all need to work from the same set with different priorities and different stages."],
  ["Mixed glazing scope", "Ground-floor storefront, upper curtain wall, entrances, and interior glass often appear in the same package and need coordinated documentation."],
  ["Tight schedules", "Submittals are often on deadline and revision cycles do not have room for a second round caused by avoidable drawing gaps."]
];

const officeCoordinationCards = [
  ["Complete dimensioning", "Sizes, quantities, layout dimensions, and in and out references that eliminate the most common questions before fabrication and installation begin."],
  ["Fastener clarity", "Attachment conditions tied to actual surrounding structure rather than left vague. This reduces the most common field and review surprises on office building work."],
  ["Structured kickoff", "Questions captured early through a kickoff and project preview process so avoidable issues are resolved before production is underway."]
];

const officeNeedRows = [
  ["For review", "Professional presentation, organized sheets, complete notes"],
  ["For fabrication", "Complete dimensions, accurate conditions, clear sizes and quantities"],
  ["For the field", "Layout clarity, column lines, in and out references, fastener intent"]
];

const officeProcessSteps = [
  ["1", "Intake and kickoff", "Architectural drawings, scope, and project-specific preferences gathered early to reduce assumptions before production starts."],
  ["2", "Project preview", "Early review to identify missing information and potential hold-ups before they create schedule problems later in production."],
  ["3", "Controlled production and revision", "Questions handled through production, revisions tracked, and the set kept coherent from first pass through submittal readiness."]
];

const officeSystems = [
  ["Storefront", "Ground-floor storefront systems with complete dimensions, entrance coordination, and condition sheets coordinated to the architectural set.", "/service/architectural-construction-docs/"],
  ["Curtain Wall", "Upper-level curtain wall systems with column line coordination, anchorage detailing, and surrounding condition clarity.", "/service/architectural-bim-modeling-services/"],
  ["All-Glass Entrances & Partitions", "Entrance and interior glass coordination with hardware, clearances, and layout references that support review and installation.", "/service/shop-drawings/"]
];

const officeClarityChecks = [
  "Missing information surfaced before production is deep into the set",
  "Architectural inconsistencies caught before they become field conflicts",
  "Revision cycles kept organized so the set stays coherent through approval",
  "Fabricators and installers inherit a package they can trust"
];

const officeFaqs = [
  ["Do you support both storefront and curtain wall scope on office building projects?", "Yes. Office building glazing packages often combine storefront, curtain wall, entrances, interior glass, and perimeter conditions. We organize the scope into a coordinated drawing path so review, fabrication, and field teams can work from one clear package."],
  ["What makes office building shop drawings harder to get right?", "The drawing set has to hold up across multiple review points. Architects, GCs, fabricators, and installers each need different levels of clarity, and mixed conditions can create questions if dimensions, fasteners, column lines, and surrounding conditions are not shown cleanly."],
  ["Can you help if our current drafting source is backed up?", "Yes. We can help stabilize the documentation queue by reviewing the project scope, confirming available information, and producing coordinated shop drawing support around the current deadline."],
  ["Do your drawings help reduce field confusion?", "The goal is to reduce avoidable field questions by clarifying layout, dimensions, in and out references, fastener intent, and conditions before fabrication and installation begin."],
  ["Do we need engineering before shop drawings?", "Engineering requirements depend on the project scope and local review needs. When engineering is required, engineering remains structural validation while drafting remains the coordination layer that turns the project into a coherent, reviewable set."],
  ["What do you need from us to get started on an office building project?", "We typically need architectural drawings, glazing scope, specifications, deadlines, available markups, and project-specific preferences. A kickoff review helps surface missing information early."],
  ["Can you handle architect markups and revisions?", "Yes. Revisions can be tracked and incorporated so the set stays organized through review comments, architect markups, and field verification updates."],
  ["How do we know the drawings will be professional enough for review?", "We focus on organized sheets, complete notes, dimension clarity, readable layout references, and a review path that reduces preventable questions before submittal."]
];

const officeJumpLinks = [
  ["Overview", "#mpOfficeBuildingsContentTitle"],
  ["Project Pressure", "#office-buildings-pressure"],
  ["Coordination Risks", "#office-buildings-risks"],
  ["What PMs Need", "#office-buildings-pms"],
  ["How MP Supports", "#office-buildings-support"],
  ["Relevant Systems", "#office-buildings-systems"],
  ["Early Clarity", "#office-buildings-clarity"],
  ["FAQs", "#page-faqs"]
];

export function officeBuildingsIndustryPage() {
  return `
    <section class="industry-detail-hero" style="background-image: linear-gradient(90deg, rgba(0,46,91,.88), rgba(0,46,91,.56)), url('${asset("2021/04/retailers-5.jpg")}')">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> <a href="/industries/office-buildings/">Industries</a> <span>&gt;</span> Office Buildings</nav>
        <p class="eyebrow">Office Buildings</p>
        <h1>Shop Drawing Support for Office Building Glazing Projects</h1>
        <p>Milestone supports office building storefront, curtain wall, entrances, and related glazing scope with coordinated shop drawings built for architect review, revision clarity, and fewer downstream field questions.</p>
        <ul class="check-list">
          <li>Complete dimensioning, column lines, and in and out layout clarity</li>
          <li>Coordinated drawing packages for review, fabrication, and field teams</li>
          <li>Early project clarification to reduce preventable revision churn</li>
        </ul>
      </div>
    </section>
    <main id="main" class="industry-detail-page">
      <div class="container industry-detail-layout">
        <aside class="industry-jump-nav" aria-label="Office buildings page sections">
          <p>Jump To</p>
          <nav>${officeJumpLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav>
        </aside>
        <div class="industry-detail-content">
      <section id="mpOfficeBuildingsContentTitle" class="section industry-detail-intro">
        <div class="container industry-detail-two-col">
          <div>
            <p class="eyebrow">Overview</p>
            <h2>Office building glazing projects create a particular kind of pressure</h2>
            <p>The submittal has to move, revisions have to stay organized, and the drawing set has to work for more than one audience at the same time. Architects want a professional package. Fabricators want complete dimensions. Field crews need layout clarity they can trust.</p>
            <p>That is where Milestone fits. We are not positioned as a commodity drafting vendor. We are a precision planning partner focused on coordination, documentation discipline, and drawing sets that reduce questions before fabrication and installation begin.</p>
            <p>For experienced glazing PMs, the issue is usually not finding someone to draw. The issue is finding someone who understands the job, communicates clearly, and does not create more work for the team.</p>
          </div>
          <figure>
            <img src="${asset("2021/04/retailers-5.jpg")}" alt="Office building facade" loading="lazy">
          </figure>
        </div>
      </section>

      <section id="office-buildings-pressure" class="section industry-detail-dark">
        <div class="container industry-detail-two-col">
          <div>
            <h2>Why This Project Type Creates Pressure</h2>
            <p>Office building projects put more pressure on glazing documentation because the drawing set has to hold up across multiple review points. The job may involve ground-floor storefront, upper-level curtain wall, entrances, interior glass, and a mix of perimeter and infill conditions that all need to read clearly in one coordinated package.</p>
            <p>That pressure grows when the schedule is already tight. PMs are trying to keep submittals moving, answer review comments, coordinate with the architect, and avoid handing the field a set that creates preventable questions. In that environment, shop drawings are not just paperwork. They are the planning layer that helps the project move without constant rework.</p>
          </div>
          <div class="industry-detail-card-stack">${officeRiskCards.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
        </div>
      </section>

      <section id="office-buildings-risks" class="section industry-detail-section">
        <div class="container">
          <div class="industry-detail-centered">
            <h2>Common Coordination Risks</h2>
            <p>On office building jobs, drawing problems rarely stay isolated. Here is where they start and where they end up.</p>
          </div>
          <div class="industry-detail-grid">${officeCoordinationCards.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
          <div class="industry-detail-split-cards">
            <article><h3>Size, quantity, and condition gaps</h3><p>If sizes are wrong, frames may not fit. If quantities are wrong, fabrication and installation can be affected. If joints are missed, openings that looked workable on paper can stop working in the field. If conditions are not shown clearly, installers are left filling in gaps that should have been resolved earlier.</p></article>
            <article><h3>Inconsistency in the architectural set</h3><p>A condition may be shown one way on a floor plan and another way on an elevation. A door opening may seem fine until joint requirements are accounted for. When those conflicts are not surfaced during drafting, they usually reappear later as review comments, fabrication questions, field issues, or revision churn. Fastener coordination is another risk point that is often underestimated on office building scope.</p></article>
          </div>
        </div>
      </section>

      <section id="office-buildings-pms" class="section industry-detail-dark">
        <div class="container industry-detail-two-col">
          <div>
            <h2>What Experienced PMs Need From Shop Drawings</h2>
            <p>Experienced PMs are not looking for impressive language. They want a set they can trust. That means complete dimensioning, clear frame locations, in and out placement clarity, and column line references that help installers verify they are putting the system in the right place.</p>
            <p>They also need a drafting partner who understands that office building work is collaborative. Great shop drawings do not come from assumptions. They come from clear scope, project-specific input, and early clarification of what could hold the job up.</p>
            <p>For many PMs, confidence comes from drawings that look professional, read cleanly, and generate fewer questions from architects, general contractors, fabricators, and the field.</p>
          </div>
          <div class="industry-detail-need-box">
            <p class="eyebrow">What the set needs to accomplish</p>
            ${officeNeedRows.map(([label, text]) => `<div><strong>${label}</strong><span>${text}</span></div>`).join("")}
            <a class="btn" href="/case-study/">View Sample Drawings</a>
          </div>
        </div>
      </section>

      <section id="office-buildings-support" class="section industry-detail-section">
        <div class="container industry-detail-two-col">
          <div>
            <h2>How Milestone Supports This Industry</h2>
            <p>Milestone supports office building glazing projects with a structured approach built around precision planning. We start with the architectural drawings, specifications, and project information needed to understand the job clearly. From there, we use a kickoff and project preview process to identify missing information, surface questions early, and reduce back and forth later.</p>
            <p>Our role is coordination. We align architectural conditions, fabrication-level detail, installer layout clarity, and revision discipline into one organized drawing path. When engineering is required, engineering remains structural validation. Drafting remains the coordination layer that turns the project into a coherent, reviewable set.</p>
            <p>This matters on office building work because the job usually cannot tolerate vague documentation. Reviewers need a professional submittal. Fabricators need complete dimensions. Installers need conditions and layout that make sense in the field.</p>
          </div>
          <div class="industry-detail-steps">${officeProcessSteps.map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
        </div>
      </section>

      <section id="office-buildings-systems" class="section industry-detail-dark industry-detail-systems">
        <div class="container">
          <div class="industry-detail-centered">
            <h2>Relevant Systems and Scope</h2>
            <p>Office building glazing scope can vary, but the documentation pressures are familiar across system types.</p>
          </div>
          <div class="industry-detail-grid">${officeSystems.map(([title, text, href]) => `<article><h3>${title}</h3><p>${text}</p><a class="btn" href="${href}">View Service</a></article>`).join("")}</div>
        </div>
      </section>

      <section id="office-buildings-clarity" class="section industry-detail-section">
        <div class="container industry-detail-two-col">
          <div>
            <h2>Where Early Clarity Prevents Delays</h2>
            <p>Early clarity prevents delays when missing information is identified before the set is deep into production. It prevents delays when architectural inconsistencies are caught before they become field conflicts. It prevents delays when fasteners, surrounding conditions, and layout references are shown clearly enough that fabricators and installers are not forced to fill in the gaps later.</p>
            <p>It also prevents delays during revisions. Office building jobs often move through review comments, architect markups, and field verification updates. The cleaner the original set and the clearer the revision structure, the easier it is to keep the project moving without losing control of the documentation.</p>
            <p>That is why Milestone treats shop drawings as a planning discipline. The goal is not just to produce sheets. The goal is to reduce the avoidable issues that slow office building projects down.</p>
          </div>
          <div class="industry-detail-proof">
            <img src="${asset("2020/09/AEC-Services-530x432.jpg")}" alt="AEC documentation sample" loading="lazy">
            <ul class="check-list">${officeClarityChecks.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
      </section>

      <section id="page-faqs" class="section industry-detail-dark">
        <div class="container industry-detail-two-col">
          <div>
            <p class="eyebrow">FAQs</p>
            <h2>Office Building Shop Drawing Questions</h2>
            <p>Common questions about coordinating glazing shop drawings on office building projects.</p>
            <div class="faq-list industry-detail-faqs">${officeFaqs.map(([question, answer], index) => `<details ${index === 0 ? "open" : ""}><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div>
          </div>
          <aside class="industry-detail-cta-card">
            <h3>Have a live job?</h3>
            <p>Send the project scope, drawings, and deadline. We will help align the right level of detail up front.</p>
            <a class="btn" href="/contact-us/">Request a Quote</a>
            <h3>See the work first</h3>
            <p>Validate output quality before the first job by reviewing a sample drawing set.</p>
            <a class="btn secondary" href="/case-study/">View Sample Drawings</a>
          </aside>
        </div>
      </section>
        </div>
      </div>

      <section class="industry-detail-final-cta">
        <div class="container">
          <h2>Need office building shop drawings that are easier to review and easier to use?</h2>
          <p>Send the project scope, drawings, and deadline. Milestone will help you align the right level of detail, surface missing information early, and move toward a cleaner submittal path.</p>
          <div><a class="btn" href="/contact-us/">Request a Quote</a><a class="btn secondary" href="/case-study/">View Sample Drawings</a></div>
        </div>
      </section>
    </main>`;
}

const healthcareRiskCards = [
  ["Multiple review stakeholders", "Healthcare teams, architects, owners, fabricators, and field crews need to work from the same set, each with different priorities and different stages in the outcome."],
  ["Mixed and phased scope", "Entrances, storefront, curtain wall, windows, interior glass, and renovation conditions often appear in the same package and need coordinated documentation throughout."],
  ["Tight schedules with limited revision tolerance", "Submittals are often on deadline and revision cycles do not have room for a second round caused by avoidable drawing gaps."]
];

const healthcareCoordinationCards = [
  ["Coordinated drawings", "Complete dimensions, condition detail, and opening references that eliminate the most common questions before fabrication and installation begin."],
  ["Fastener clarity", "Attachment conditions coordinated to actual surrounding structure rather than left vague. This reduces the most common field and review surprises on healthcare work."],
  ["Structured revisions", "Organized revision handling with clear communication so the set stays coherent through multiple review rounds without drifting into confusion."]
];

const healthcareNeedRows = [
  ["For review", "Professional presentation, organized sheets, complete notes that reduce comment volume"],
  ["For fabrication", "Complete dimensions, accurate conditions, clear sizes and quantities matched to scope"],
  ["For the field", "Usable layout and condition detail that does not require interpretation to install correctly"]
];

const healthcareSystems = [
  ["Storefront", "Entry-level and lobby storefront with complete dimensions, entrance coordination, and conditions matched to the architectural set.", "/service/architectural-construction-docs/"],
  ["Curtain Wall", "Curtain wall systems with anchorage detailing, surrounding condition clarity, and organized documentation for multi-party review.", "/service/architectural-bim-modeling-services/"],
  ["All-Glass Entrances & Partitions", "Entrance and interior glass coordination with hardware, clearances, and layout references that support review and installation.", "/service/shop-drawings/"]
];

const healthcareScopeItems = [
  "Storefront systems",
  "Entrances and entry sequences",
  "Curtain wall conditions",
  "Window packages",
  "Interior glass and framing applications",
  "Renovation and replacement glazing scope",
  "Associated detail sheets, elevations, schedules, and revision updates"
];

const healthcareClarityChecks = [
  "Missing information surfaced before production is deep into the set",
  "Architectural inconsistencies caught before they become field conflicts",
  "Revision cycles kept organized so the set stays coherent through approval",
  "Fabricators and field crews inherit a package they can trust"
];

const healthcareFaqs = [
  ["Do you support both exterior and interior glazing scope on healthcare projects?", "Yes. Healthcare glazing packages may include storefront, curtain wall, windows, entrances, interior glass, renovation areas, and replacement scope. We organize the drawing set so the full package can move through review, fabrication, and field use with less confusion."],
  ["What makes healthcare shop drawings harder to get right?", "Healthcare work often has tighter coordination needs, phased work, owner review, and revision pressure. Conditions must be clear enough for reviewers, fabricators, and field teams without leaving room for interpretation."],
  ["Can you help if our current drafting source is backed up?", "Yes. We can review the available drawings, scope, specifications, and deadlines, then help create a structured drawing path for the project."],
  ["Do your drawings help reduce field confusion?", "The goal is to reduce field confusion by clarifying dimensions, conditions, fastener intent, openings, and layout references before fabrication and installation begin."],
  ["Do we need engineering before shop drawings?", "Engineering requirements depend on the project and jurisdiction. When engineering is required, engineering remains structural validation while shop drawings organize the coordinated fabrication and installation information."],
  ["What do you need from us to get started on a healthcare project?", "We typically need architectural drawings, glazing scope, specifications, deadlines, available markups, and project-specific preferences. A kickoff review helps identify missing information early."],
  ["Can you handle architect markups and revisions?", "Yes. Revisions can be incorporated and tracked so the set remains organized through review comments, architect markups, and coordination updates."],
  ["How do we know the drawings will be professional enough for review?", "We focus on professional presentation, organized sheets, complete notes, dimension clarity, and coordinated details that reduce preventable comments and questions."]
];

const healthcareJumpLinks = [
  ["Overview", "#mpHealthcareContentTitle"],
  ["Project Pressure", "#healthcare-pressure"],
  ["Coordination Risks", "#healthcare-risks"],
  ["What PMs Need", "#healthcare-pms"],
  ["How MP Supports", "#healthcare-support"],
  ["Relevant Systems", "#healthcare-systems"],
  ["Early Clarity", "#healthcare-clarity"],
  ["If You Are Managing", "#healthcare-managing"],
  ["FAQs", "#healthcare-faqs"]
];

export function healthcareIndustryPage() {
  return `
    <section class="industry-detail-hero" style="background-image: linear-gradient(90deg, rgba(0,46,91,.88), rgba(0,46,91,.56)), url('${asset("2020/09/AEC-Services-530x432.jpg")}')">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> <a href="/industries/healthcare/">Industries</a> <span>&gt;</span> Healthcare</nav>
        <p class="eyebrow">Healthcare</p>
        <h1>Clear shop drawings for healthcare glazing work that cannot afford confusion</h1>
        <p>Milestone supports healthcare glazing scope with coordinated shop drawings built for architect review, revision clarity, and fewer downstream field questions across clinics, medical office buildings, and hospital-related projects.</p>
        <ul class="check-list">
          <li>Thorough, coordinated drawings built for review, fabrication, and field use</li>
          <li>Clear condition details for exterior and interior glazing scope</li>
          <li>Organized revisions for healthcare projects with limited tolerance for confusion</li>
        </ul>
      </div>
    </section>
    <main id="main" class="industry-detail-page">
      <div class="container industry-detail-layout">
        <aside class="industry-jump-nav" aria-label="Healthcare page sections">
          <p>Jump To</p>
          <nav>${healthcareJumpLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav>
        </aside>
        <div class="industry-detail-content">
          <section id="mpHealthcareContentTitle" class="section industry-detail-intro">
            <div class="container industry-detail-two-col">
              <div>
                <p class="eyebrow">Overview</p>
                <h2>Healthcare glazing projects create a particular kind of pressure</h2>
                <p>The submittal has to move, revisions have to stay organized, and the drawing set has to work for more than one audience at the same time. Reviewers want a professional package. Fabricators need complete dimensions and condition clarity. Field teams need drawings they can use without stopping to interpret what was meant.</p>
                <p>That is where Milestone fits. We are not positioned as a commodity drafting vendor. We are a precision planning partner focused on coordination, documentation discipline, and drawing sets that reduce questions before fabrication and installation begin.</p>
                <p>For experienced glazing PMs, the issue is usually not finding someone to draw. The issue is finding someone who understands the job, communicates clearly, and does not create more work for the team. This page is built for healthcare projects where glazing scope needs to move through review, revision, and execution with less confusion.</p>
              </div>
              <figure>
                <img src="${asset("2020/09/AEC-Services-530x432.jpg")}" alt="Healthcare glazing documentation" loading="lazy">
              </figure>
            </div>
          </section>

          <section id="healthcare-pressure" class="section industry-detail-dark">
            <div class="container industry-detail-two-col">
              <div>
                <h2>Why This Project Type Creates Pressure</h2>
                <p>Healthcare projects put more pressure on glazing documentation because the drawing set has to support tight coordination, clean approvals, and controlled revisions. The work may involve entrances, storefront, curtain wall areas, interior glazing, replacement scopes, or phased renovation conditions that all need to read clearly in one organized package.</p>
                <p>That pressure grows when schedules are already tight and the project team has little tolerance for drawing confusion. PMs are trying to keep submittals moving, answer review comments, coordinate with the architect, and avoid handing the field a set that creates preventable questions. In that environment, shop drawings are not just paperwork. They are the planning layer that helps the project move without constant rework.</p>
              </div>
              <div class="industry-detail-card-stack">${healthcareRiskCards.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
            </div>
          </section>

          <section id="healthcare-risks" class="section industry-detail-section">
            <div class="container">
              <div class="industry-detail-centered">
                <h2>Common Coordination Risks</h2>
                <p>On healthcare jobs, drawing problems rarely stay isolated. Here is where they start and where they end up.</p>
              </div>
              <div class="industry-detail-grid">${healthcareCoordinationCards.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
              <div class="industry-detail-split-cards">
                <article><h3>Size, quantity, and condition gaps</h3><p>If sizes are wrong, frames may not fit. If quantities are wrong, material ordering can be affected. If surrounding conditions are not shown clearly, fabrication and installation questions usually show up later when they are harder to solve. If fasteners are not coordinated to actual conditions, the field may be left trying to resolve issues that should have been addressed earlier.</p></article>
                <article><h3>Inconsistency in the architectural set and revision risk</h3><p>A condition may be shown one way on a plan and another way on an elevation. Opening information may look workable until real joint or layout requirements are considered. When those conflicts are not surfaced during drafting, they usually reappear later as review comments, redraws, or field slowdowns. Revision control is another risk point: healthcare work often moves through multiple review cycles, and if the original set is not organized well, every revision becomes harder to manage and easier to misunderstand.</p></article>
              </div>
            </div>
          </section>

          <section id="healthcare-pms" class="section industry-detail-dark">
            <div class="container industry-detail-two-col">
              <div>
                <h2>What Experienced PMs Need From Shop Drawings</h2>
                <p>Experienced PMs are not looking for impressive language. They want a set they can trust. That means complete dimensioning, clear frame locations, usable notes, and detail that reflects actual conditions instead of generic assumptions.</p>
                <p>They also need a drafting partner who understands that healthcare work leaves little room for loose coordination. Great shop drawings do not come from assumptions. They come from clear scope, project-specific input, and early clarification of what could hold the job up. The goal is not to make the PM manage every detail twice. The goal is to build the right questions into the process early so the review and submittal path stays cleaner.</p>
                <p>For many PMs, confidence comes from drawings that look professional, read clearly, and generate fewer questions from architects, fabricators, and field teams.</p>
              </div>
              <div class="industry-detail-need-box">
                <p class="eyebrow">What the set needs to accomplish</p>
                ${healthcareNeedRows.map(([label, text]) => `<div><strong>${label}</strong><span>${text}</span></div>`).join("")}
                <a class="btn" href="/case-study/">View Sample Drawings</a>
              </div>
            </div>
          </section>

          <section id="healthcare-support" class="section industry-detail-section">
            <div class="container industry-detail-two-col">
              <div>
                <h2>How Milestone Supports This Industry</h2>
                <p>Milestone supports healthcare glazing projects with a structured approach built around precision planning. We start with the architectural drawings, specifications, and project information needed to understand the job clearly. From there, we use a kickoff and project preview process to identify missing information, surface questions early, and reduce back and forth later.</p>
                <p>Our role is coordination. We align architectural conditions, fabrication-level detail, installer layout clarity, and revision discipline into one organized drawing path. When engineering is required, engineering remains structural validation. Drafting remains the coordination layer that turns the project into a coherent, reviewable set.</p>
                <p>This matters on healthcare work because the job usually cannot tolerate vague documentation. Reviewers need a professional submittal. Fabricators need complete dimensions. Installers need conditions that make sense in the field.</p>
              </div>
              <div class="industry-detail-steps">${officeProcessSteps.map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text.replace("later in production.", "later in production or review.")}</p></article>`).join("")}</div>
            </div>
          </section>

          <section id="healthcare-systems" class="section industry-detail-dark industry-detail-systems">
            <div class="container industry-detail-two-col">
              <div>
                <h2>Relevant Systems and Scope</h2>
                <p>Healthcare glazing scope can vary, but the documentation pressures are familiar.</p>
                <p>Typical project scope may include:</p>
                <ul class="check-list industry-detail-scope-list">${healthcareScopeItems.map((item) => `<li>${item}</li>`).join("")}</ul>
                <p>The common thread is not a single system. It is the need for coordinated shop drawings that help multiple parties work from the same understanding of the job. If the scope is still evolving, Milestone can also align the level of detail to the project phase so the deliverable matches what the job actually needs.</p>
                <a class="btn secondary" href="/services/">View All Shop Drawing Services</a>
              </div>
              <div class="industry-detail-card-stack">${healthcareSystems.map(([title, text, href]) => `<article><h3>${title}</h3><p>${text}</p><a class="btn" href="${href}">View Service</a></article>`).join("")}</div>
            </div>
          </section>

          <section id="healthcare-clarity" class="section industry-detail-section">
            <div class="container industry-detail-two-col">
              <div>
                <h2>Where Early Clarity Prevents Delays</h2>
                <p>Early clarity prevents delays when missing information is identified before the set is deep into production. It prevents delays when architectural inconsistencies are caught before they become fabrication or field conflicts. It prevents delays when fasteners, surrounding conditions, and dimensions are shown clearly enough that downstream teams are not forced to fill in the gaps later.</p>
                <p>It also prevents delays during revisions. Healthcare projects often move through review comments, architect markups, and coordination updates. The cleaner the original set and the clearer the revision structure, the easier it is to keep the project moving without losing control of the documentation.</p>
                <p>That is why Milestone treats shop drawings as a planning discipline. The goal is not just to produce sheets. The goal is to reduce the avoidable issues that slow healthcare glazing projects down.</p>
              </div>
              <div class="industry-detail-proof">
                <img src="${asset("2020/09/AEC-Services-530x432.jpg")}" alt="Healthcare facilities drawing sample" loading="lazy">
                <ul class="check-list">${healthcareClarityChecks.map((item) => `<li>${item}</li>`).join("")}</ul>
              </div>
            </div>
          </section>

          <section id="healthcare-managing" class="section industry-detail-dark industry-detail-managing">
            <div class="container">
              <p>If you are managing a healthcare glazing project, the real question is not whether drawings will be produced. The question is whether the set will help the job move cleanly through review, revision, fabrication, and installation.</p>
              <p>Milestone is built for teams that need the work done right and do not have time to babysit the process. If your current provider is overloaded, the project is too important for vague documentation, or you need a more structured path to submittal, this is a practical place to start.</p>
              <a class="btn" href="/case-study/">View Sample Drawings</a>
            </div>
          </section>

          <section id="healthcare-faqs" class="section industry-detail-section">
            <div class="container industry-detail-two-col">
              <div>
                <p class="eyebrow">FAQs</p>
                <h2>Healthcare Shop Drawing Questions</h2>
                <p>Common questions about coordinating glazing shop drawings on healthcare projects.</p>
                <div class="faq-list industry-detail-faqs light">${healthcareFaqs.map(([question, answer], index) => `<details ${index === 0 ? "open" : ""}><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div>
              </div>
              <aside class="industry-detail-cta-card light">
                <h3>Have a live job?</h3>
                <p>Send the project scope, drawings, and deadline. We will help align the right level of detail up front.</p>
                <a class="btn" href="/contact-us/">Request a Quote</a>
                <h3>See the work first</h3>
                <p>Validate output quality before the first job by reviewing a sample drawing set.</p>
                <a class="btn secondary" href="/case-study/">View Sample Drawings</a>
              </aside>
            </div>
          </section>
        </div>
      </div>

      <section class="industry-detail-final-cta">
        <div class="container">
          <h2>Need healthcare shop drawings that are easier to review and easier to use?</h2>
          <p>Send the project scope, drawings, and deadline. Milestone will help you align the right level of detail, surface missing information early, and move toward a cleaner submittal path.</p>
          <div><a class="btn" href="/contact-us/">Request a Quote</a><a class="btn secondary" href="/case-study/">View Sample Drawings</a></div>
        </div>
      </section>
    </main>`;
}

const educationIndustryData = {
  title: "Education",
  route: "/industries/education/",
  heroImage: asset("2021/04/architects-3.jpg"),
  overviewImage: asset("2021/04/architects-3.jpg"),
  overviewImageAlt: "Education building glazing",
  clarityImage: asset("2020/09/AEC-Services-530x432.jpg"),
  clarityImageAlt: "Education glazing drawing sample",
  ids: {
    overview: "mpEducationContentTitle",
    pressure: "education-pressure",
    risks: "education-risks",
    pms: "education-pms",
    support: "education-support",
    systems: "education-systems",
    clarity: "education-clarity",
    managing: "education-managing",
    faqs: "education-faqs"
  },
  heroTitle: "Clear shop drawings for education glazing work that cannot afford confusion",
  heroText: "Milestone supports education glazing scope with coordinated shop drawings built for architect review, revision clarity, and fewer downstream field questions across schools, campuses, and academic facilities.",
  heroBullets: [
    "Thorough, coordinated drawings built for review, fabrication, and field use",
    "Clear condition details for entrances, storefront, curtain wall, windows, and interior glazing",
    "Organized revisions for campus and academic projects with limited tolerance for confusion"
  ],
  overviewTitle: "Education glazing projects create a particular kind of pressure",
  overviewParagraphs: [
    "The submittal has to move, revisions have to stay organized, and the drawing set has to work for more than one audience at the same time. Reviewers want a professional package. Fabricators need complete dimensions and condition clarity. Field teams need drawings they can use without stopping to interpret what was meant.",
    "That is where Milestone fits. We are not positioned as a commodity drafting vendor. We are a precision planning partner focused on coordination, documentation discipline, and drawing sets that reduce questions before fabrication and installation begin.",
    "For experienced glazing PMs, the issue is usually not finding someone to draw. The issue is finding someone who understands the job, communicates clearly, and does not create more work for the team. This page is built for education projects where glazing scope needs to move through review, revision, and execution with less confusion."
  ],
  pressureParagraphs: [
    "Education projects put more pressure on glazing documentation because the drawing set often has to satisfy architects, consultants, general contractors, and internal stakeholders who all expect clarity. The work may involve entrances, storefront, curtain wall areas, window packages, interior glazing, or renovation conditions that all need to read clearly in one organized package.",
    "That pressure grows when schedules are already tight and the project team has little tolerance for drawing confusion. PMs are trying to keep submittals moving, answer review comments, coordinate with the architect, and avoid handing the field a set that creates preventable questions. In that environment, shop drawings are not just paperwork. They are the planning layer that helps the project move without constant rework."
  ],
  pressureCards: [
    ["Multiple review stakeholders", "Architects, consultants, general contractors, and internal stakeholders all need to work from the same set, each with different priorities and different stakes in the outcome."],
    ["Mixed scope across building types", "Entrances, storefront, curtain wall, windows, interior glass, and renovation conditions often appear in the same package and need coordinated documentation throughout."],
    ["Tight schedules with limited revision tolerance", "Submittals are often on deadline and revision cycles do not have room for a second round caused by avoidable drawing gaps."]
  ],
  risksIntro: "On education jobs, drawing problems rarely stay isolated. Here is where they start and where they end up.",
  coordinationCards: [
    ["Coordinated drawings", "Complete dimensions, condition detail, and opening references that eliminate the most common questions before fabrication and installation begin."],
    ["Fastener clarity", "Attachment conditions coordinated to actual surrounding structure rather than left vague. This reduces the most common field and review surprises on education work."],
    ["Structured revisions", "Organized revision handling with clear communication so the set stays coherent through multiple review rounds without drifting into confusion."]
  ],
  riskSplitCards: [
    ["Size, quantity, and condition gaps", "If sizes are wrong, frames may not fit. If quantities are wrong, material ordering can be affected. If surrounding conditions are not shown clearly, fabrication and installation questions usually show up later when they are harder to solve. If fasteners are not coordinated to actual conditions, the field may be left trying to resolve issues that should have been addressed earlier."],
    ["Inconsistency in the architectural set and revision risk", "A condition may be shown one way on a plan and another way on an elevation. Opening information may look workable until real joint or layout requirements are considered. When those conflicts are not surfaced during drafting, they usually reappear later as review comments, redraws, or field slowdowns. Revision control is another risk point: education projects often move through multiple review cycles, and if the original set is not organized well, every revision becomes harder to manage and easier to misunderstand."]
  ],
  pmParagraphs: [
    "Experienced PMs are not looking for impressive language. They want a set they can trust. That means complete dimensioning, clear frame locations, usable notes, and detail that reflects actual conditions instead of generic assumptions.",
    "They also need a drafting partner who understands that education work leaves little room for loose coordination. Great shop drawings do not come from assumptions. They come from clear scope, project-specific input, and early clarification of what could hold the job up. The goal is not to make the PM manage every detail twice. The goal is to build the right questions into the process early so the review and submittal path stays cleaner.",
    "For many PMs, confidence comes from drawings that look professional, read clearly, and generate fewer questions from architects, fabricators, and field teams."
  ],
  needRows: [
    ["For review", "Professional presentation, organized sheets, complete notes that reduce comment volume"],
    ["For fabrication", "Complete dimensions, accurate conditions, clear sizes and quantities matched to scope"],
    ["For the field", "Usable layout and condition detail that does not require interpretation to install correctly"]
  ],
  supportParagraphs: [
    "Milestone supports education glazing projects with a structured approach built around precision planning. We start with the architectural drawings, specifications, and project information needed to understand the job clearly. From there, we use a kickoff and project preview process to identify missing information, surface questions early, and reduce back and forth later.",
    "Our role is coordination. We align architectural conditions, fabrication-level detail, installer layout clarity, and revision discipline into one organized drawing path. When engineering is required, engineering remains structural validation. Drafting remains the coordination layer that turns the project into a coherent, reviewable set.",
    "This matters on education work because the job usually cannot tolerate vague documentation. Reviewers need a professional submittal. Fabricators need complete dimensions. Installers need conditions that make sense in the field."
  ],
  processSteps: [
    ["1", "Intake and kickoff", "Architectural drawings, scope, and project-specific preferences gathered early to reduce assumptions before production starts."],
    ["2", "Project preview", "Early review to identify missing information and potential hold-ups before they create schedule problems later in production or review."],
    ["3", "Controlled production and revision", "Questions handled through production, revisions tracked, and the set kept coherent from first pass through submittal readiness."]
  ],
  systemsIntro: "Education glazing scope can vary, but the documentation pressures are familiar.",
  scopeItems: [
    "Storefront systems",
    "Entrances and entry sequences",
    "Curtain wall conditions",
    "Window packages",
    "Interior glass and framing applications",
    "Renovation and replacement glazing scope",
    "Associated detail sheets, elevations, schedules, and revision updates"
  ],
  systemsFooter: "The common thread is not a single system. It is the need for coordinated shop drawings that help multiple parties work from the same understanding of the job. If the scope is still evolving, Milestone can also align the level of detail to the project phase so the deliverable matches what the job actually needs.",
  systemCards: [
    ["Storefront", "Entry-level and lobby storefront with complete dimensions, entrance coordination, and conditions matched to the architectural set.", "/service/architectural-construction-docs/"],
    ["Curtain Wall", "Curtain wall systems with anchorage detailing, surrounding condition clarity, and organized documentation for multi-party review.", "/service/architectural-bim-modeling-services/"],
    ["All-Glass Entrances & Partitions", "Entrance and interior glass coordination with hardware, clearances, and layout references that support review and installation.", "/service/shop-drawings/"]
  ],
  clarityParagraphs: [
    "Early clarity prevents delays when missing information is identified before the set is deep into production. It prevents delays when architectural inconsistencies are caught before they become fabrication or field conflicts. It prevents delays when fasteners, surrounding conditions, and dimensions are shown clearly enough that downstream teams are not forced to fill in the gaps later.",
    "It also prevents delays during revisions. Education projects often move through review comments, architect markups, and coordination updates. The cleaner the original set and the clearer the revision structure, the easier it is to keep the project moving without losing control of the documentation.",
    "That is why Milestone treats shop drawings as a planning discipline. The goal is not just to produce sheets. The goal is to reduce the avoidable issues that slow education glazing projects down."
  ],
  clarityChecks: [
    "Missing information surfaced before production is deep into the set",
    "Architectural inconsistencies caught before they become field conflicts",
    "Revision cycles kept organized so the set stays coherent through approval",
    "Fabricators and field crews inherit a package they can trust"
  ],
  managingParagraphs: [
    "If you are managing an education glazing project, the real question is not whether drawings will be produced. The question is whether the set will help the job move cleanly through review, revision, fabrication, and installation.",
    "Milestone is built for teams that need the work done right and do not have time to babysit the process. If your current provider is overloaded, the project is too important for vague documentation, or you need a more structured path to submittal, this is a practical place to start."
  ],
  faqTitle: "Education Shop Drawing Questions",
  faqIntro: "Common questions about coordinating glazing shop drawings on education projects.",
  faqs: [
    ["Do you support both exterior and interior glazing scope on education projects?", "Yes. Education glazing packages may include storefront, curtain wall, windows, entrances, interior glass, renovation areas, and replacement scope. We organize the drawing set so the full package can move through review, fabrication, and field use with less confusion."],
    ["What makes education shop drawings harder to get right?", "Education work often involves several review audiences, varied building conditions, and revision pressure. Conditions must be clear enough for reviewers, fabricators, and field teams without leaving room for interpretation."],
    ["Can you help if our current drafting source is backed up?", "Yes. We can review the available drawings, scope, specifications, and deadlines, then help create a structured drawing path for the project."],
    ["Do your drawings help reduce field confusion?", "The goal is to reduce field confusion by clarifying dimensions, conditions, fastener intent, openings, and layout references before fabrication and installation begin."],
    ["Do we need engineering before shop drawings?", "Engineering requirements depend on the project and jurisdiction. When engineering is required, engineering remains structural validation while shop drawings organize the coordinated fabrication and installation information."],
    ["What do you need from us to get started on an education project?", "We typically need architectural drawings, glazing scope, specifications, deadlines, available markups, and project-specific preferences. A kickoff review helps identify missing information early."],
    ["Can you handle architect markups and revisions?", "Yes. Revisions can be incorporated and tracked so the set remains organized through review comments, architect markups, and coordination updates."],
    ["How do we know the drawings will be professional enough for review?", "We focus on professional presentation, organized sheets, complete notes, dimension clarity, and coordinated details that reduce preventable comments and questions."]
  ],
  finalTitle: "Need education shop drawings that are easier to review and easier to use?",
  finalText: "Send the project scope, drawings, and deadline. Milestone will help you align the right level of detail, surface missing information early, and move toward a cleaner submittal path."
};

export function educationIndustryPage() {
  return industryDetailPage(educationIndustryData);
}

const retailMixedUseIndustryData = {
  title: "Retail & Mixed-Use",
  route: "/industries/retail-mixed-use/",
  heroImage: asset("2021/04/retailers-5.jpg"),
  overviewImage: asset("2021/04/retailers-5.jpg"),
  overviewImageAlt: "Retail and mixed-use glazing",
  clarityImage: asset("2023/05/BIM-Shop-Drawings.jpg"),
  clarityImageAlt: "Retail storefront shop drawing sample",
  ids: {
    overview: "mpRetailMixedUseContentTitle",
    pressure: "retail-mixed-use-pressure",
    risks: "retail-mixed-use-risks",
    pms: "retail-mixed-use-pms",
    support: "retail-mixed-use-support",
    systems: "retail-mixed-use-systems",
    clarity: "retail-mixed-use-clarity",
    managing: "retail-mixed-use-managing",
    faqs: "retail-mixed-use-faqs"
  },
  heroTitle: "Retail and mixed-use projects move fast. Your drawings still need to be right.",
  heroText: "Milestone supports retail and mixed-use glazing scope with coordinated shop drawings built for architect review, revision clarity, and fewer downstream field questions across tenant spaces, storefront conditions, and phased commercial environments.",
  heroBullets: [
    "Clear layout dimensions, notes, and surrounding-condition coordination"
  ],
  overviewTitle: "Retail and mixed-use glazing projects create a specific kind of pressure",
  overviewParagraphs: [
    "The schedule moves quickly, the conditions vary from space to space, and the drawing set has to work for more than one audience at once. Reviewers need a professional submittal. Fabricators need complete dimensions and condition clarity. Field teams need drawings they can actually use without stopping to reinterpret what was intended.",
    "That is where Milestone fits. We are not positioned as a commodity drafting vendor. We are a precision planning partner focused on coordination, documentation discipline, and drawing sets that reduce questions before fabrication and installation begin.",
    "For experienced glazing PMs, the issue is usually not finding someone to draft the job. The issue is finding someone who communicates clearly, handles revisions in a controlled way, and does not create more work for the team. This page is built for retail and mixed-use projects where glazing scope needs to move through review, revision, and execution with less confusion."
  ],
  pressureParagraphs: [
    "Retail and mixed-use projects often look manageable at bid time, then become coordination-heavy once the drawing work starts. A single job may include multiple storefront conditions, separate tenant spaces, interior and exterior transitions, phased turnover requirements, and architectural information that is still changing. Even when the glazing scope seems straightforward, the documentation rarely stays simple for long.",
    "That pressure increases when approvals are moving quickly and the details are still shifting. PMs are trying to keep submittals moving, answer review comments, coordinate evolving conditions, and avoid handing the field a set that creates preventable questions. In that environment, shop drawings are not just paperwork. They are the planning layer that helps the project move without constant rework."
  ],
  pressureCards: [
    ["Fast schedules, shifting conditions", "Approvals move quickly while architectural information keeps changing. Drawing sets need to stay organized through a process that is rarely linear."],
    ["Multiple spaces, multiple conditions", "Separate tenant spaces, interior and exterior transitions, and phased turnover requirements all need consistent documentation in a single coordinated package."],
    ["Revision pressure that does not slow down", "Retail and mixed-use jobs often go through repeated clarifications as the project develops. Revision discipline is not optional; it is what keeps the job on track."]
  ],
  risksIntro: "On retail and mixed-use jobs, small documentation gaps can create larger downstream problems. Here is where they typically start.",
  coordinationCards: [
    ["Coordinated drawings", "Complete dimensions, condition detail, and opening references that eliminate the most common questions before fabrication and installation begin."],
    ["Fastener clarity", "Attachment conditions coordinated to actual surrounding structure rather than left vague. This reduces the most common field and review surprises on retail work."],
    ["Structured revisions", "Organized revision handling with clear communication so the set stays coherent through fast-moving review rounds without drifting into confusion."]
  ],
  riskSplitCards: [
    ["Size, quantity, and condition gaps", "If sizes are wrong, frames may not fit. If quantities are wrong, material ordering can be affected. If surrounding conditions are not shown clearly, fabrication and installation questions usually show up later when they are harder to solve. If fasteners are not coordinated to actual conditions, the field may be left trying to resolve issues that should have been addressed earlier."],
    ["Inconsistency, revision pressure, and evolving scope", "A condition may read one way on a plan and another way on an elevation. Opening information may appear workable until joint sizing, layout requirements, or adjacent conditions are reviewed more closely. When those conflicts are not surfaced during drafting, they usually come back later as review comments, redraws, or field slowdowns. Retail schedules move fast, and many mixed-use jobs go through repeated clarifications as the project develops. If the original set is not organized well, every revision becomes harder to manage and easier to misunderstand."]
  ],
  pmParagraphs: [
    "Experienced PMs are not looking for flashy drawings. They want a set they can trust. That means complete dimensioning, clear frame locations, usable notes, and detail that reflects actual conditions instead of generic assumptions.",
    "They also need a drafting partner who understands that retail and mixed-use work leaves little room for loose coordination. Good shop drawings do not come from assumptions. They come from clear scope, project-specific input, and early clarification of what could hold the job up. The goal is not to make the PM manage every detail twice. The goal is to build the right questions into the process early so the review and submittal path stays cleaner.",
    "For many PMs, confidence comes from drawings that look professional, read clearly, and generate fewer questions from architects, fabricators, and field teams."
  ],
  needRows: [
    ["For review", "Professional presentation, organized sheets, complete notes that reduce comment volume"],
    ["For fabrication", "Complete dimensions, accurate conditions, clear sizes and quantities matched to each space"],
    ["For the field", "Usable layout and condition detail that does not require interpretation to install correctly"]
  ],
  supportParagraphs: [
    "Milestone supports retail and mixed-use glazing projects with a structured approach built around precision planning. We start with the architectural drawings, specifications, and project information needed to understand the job clearly. From there, we use a kickoff and project preview process to identify missing information, surface questions early, and reduce back and forth later.",
    "Our role is coordination. We align architectural conditions, fabrication-level detail, installer layout clarity, and revision discipline into one organized drawing path. When engineering is required, engineering remains structural validation. Drafting remains the coordination layer that turns the project into a coherent, reviewable set.",
    "This matters on retail and mixed-use work because the job usually cannot tolerate vague documentation. Reviewers need a professional submittal. Fabricators need complete dimensions. Installers need conditions that make sense in the field."
  ],
  processSteps: [
    ["1", "Intake and kickoff", "Architectural drawings, scope, and project-specific preferences gathered early, including phased conditions, multiple tenant spaces, and any field verification workflow expectations."],
    ["2", "Project preview", "Early review to identify missing information and potential hold-ups before they create schedule problems in a project that is already moving quickly."],
    ["3", "Controlled production and revision", "Questions handled through production, revisions tracked, and the set kept coherent through fast-moving review and into submittal readiness."]
  ],
  systemsIntro: "Retail and mixed-use glazing scope can vary, but the documentation pressures are familiar.",
  scopeItems: [
    "Exterior storefront systems",
    "Interior storefront conditions",
    "Entrances and door and frame coordination",
    "Mixed opening conditions across multiple retail spaces",
    "Projects requiring phased review, revision, or field verification workflows",
    "Associated detail sheets, elevations, schedules, and revision updates"
  ],
  systemsFooter: "The common thread is not a single system. It is the need for coordinated shop drawings that help multiple parties work from the same understanding of the job. If the scope is still evolving, Milestone can also align the level of detail to the project phase so the deliverable matches what the job actually needs.",
  systemCards: [
    ["Storefront", "Exterior and interior storefront systems with complete dimensions, entrance coordination, and conditions documented for review, fabrication, and field use.", "/service/architectural-construction-docs/"],
    ["Curtain Wall", "Mixed-use facade and curtain wall conditions with surrounding-condition clarity, anchorage coordination, and organized documentation for review.", "/service/architectural-bim-modeling-services/"],
    ["Engineering & Technical Support", "Structural validation and engineering coordination when the project requires it, while keeping engineering and drafting in the right roles through the submittal process.", "/service/structural-construction-document/"]
  ],
  clarityParagraphs: [
    "Early clarity prevents delays when missing information is identified before the set is deep into production. It prevents delays when architectural inconsistencies are caught before they become fabrication or field conflicts. It prevents delays when fasteners, surrounding conditions, and dimensions are shown clearly enough that downstream teams are not forced to fill in the gaps later.",
    "It also prevents delays during revisions. Retail and mixed-use projects often move through review comments, architect markups, and coordination updates. The cleaner the original set and the clearer the revision structure, the easier it is to keep the project moving without losing control of the documentation.",
    "On some jobs, first-round shop drawings may also support field verification before final dimensions are locked. When that workflow is expected, it needs to be addressed early so the process stays organized instead of reactive."
  ],
  clarityChecks: [
    "Missing information surfaced before production is deep into the set",
    "Architectural inconsistencies caught before they become field conflicts",
    "Revision cycles kept organized so the set stays coherent through approval",
    "Field verification workflows built into the process from the beginning, not added reactively"
  ],
  managingParagraphs: [
    "If you are managing a retail or mixed-use glazing project, the real question is not whether drawings will be produced. The question is whether the set will help the job move cleanly through review, revision, fabrication, and installation.",
    "Milestone is built for teams that need the work done right and do not have time to babysit the process. If your current provider is overloaded, the project is moving too fast for vague documentation, or you need a more structured path to submittal, this is a practical place to start."
  ],
  faqTitle: "Retail and Mixed-Use Shop Drawing Questions",
  faqIntro: "Common questions about coordinating glazing shop drawings on retail and mixed-use projects.",
  faqs: [
    ["Do you support both retail storefront packages and mixed-use projects?", "Yes. Retail and mixed-use glazing packages may include exterior storefront, interior storefront, entrances, door and frame coordination, phased tenant spaces, and adjacent conditions. We organize the set so review, fabrication, and field teams can work from one clear package."],
    ["What makes retail and mixed-use shop drawings harder to get right?", "The pace is usually fast and the scope can keep shifting. Multiple spaces, evolving conditions, review comments, and phased turnover requirements all need disciplined coordination so the drawing set does not drift into confusion."],
    ["Can you help if our current drafting source is backed up?", "Yes. We can review the available drawings, scope, specifications, deadlines, and project constraints, then help create a structured drawing path for the job."],
    ["Can your drawings support architect review and redline revisions?", "Yes. We can incorporate architect markups, redlines, and revision updates while keeping the set organized and readable through the review process."],
    ["Do your drawings help reduce field confusion?", "The goal is to reduce field confusion by clarifying layout, dimensions, conditions, fastener intent, openings, and surrounding references before fabrication and installation begin."],
    ["Do we need engineering before shop drawings?", "Engineering requirements depend on the project and jurisdiction. When engineering is required, engineering remains structural validation while shop drawings organize the coordinated fabrication and installation information."],
    ["What do you need from us to get started on a retail or mixed-use project?", "We typically need architectural drawings, glazing scope, specifications, deadlines, available markups, tenant or phasing information, and project-specific preferences. A kickoff review helps identify missing information early."],
    ["Can first-round shop drawings be used for field verification?", "Yes, when that workflow is expected. The key is to define it early so the drawings support verification cleanly and revisions can be managed without losing control of the set."]
  ],
  finalTitle: "Need retail or mixed-use shop drawings that are easier to review and easier to use?",
  finalText: "Send the project scope, drawings, and deadline. Milestone will help you align the right level of detail, surface missing information early, and move toward a cleaner submittal path."
};

export function retailMixedUseIndustryPage() {
  return industryDetailPage(retailMixedUseIndustryData);
}

const hospitalityIndustryData = {
  title: "Hospitality",
  route: "/industries/hospitality/",
  heroImage: asset("2021/04/retailers-5.jpg"),
  overviewImage: asset("2020/09/AEC-Services-530x432.jpg"),
  overviewImageAlt: "Hospitality building glazing",
  clarityImage: asset("2023/05/BIM-Shop-Drawings.jpg"),
  clarityImageAlt: "Hospitality fastener detail drawing sample",
  ids: {
    overview: "mpHospitalityContentTitle",
    pressure: "hospitality-pressure",
    risks: "hospitality-risks",
    pms: "hospitality-pms",
    support: "hospitality-support",
    systems: "hospitality-systems",
    clarity: "hospitality-clarity",
    managing: "hospitality-managing",
    faqs: "hospitality-faqs"
  },
  heroTitle: "Hospitality projects cannot afford drawing confusion once approvals and field work start moving.",
  heroText: "Milestone supports hospitality glazing scope with coordinated shop drawings built for architect review, revision clarity, and fewer downstream field questions across hotel entrances, guestroom openings, public-facing spaces, and renovation conditions.",
  heroBullets: [
    "Clear documentation for hospitality glazing scope that has to move through review and field use without confusion"
  ],
  overviewTitle: "Hospitality glazing projects create a specific kind of pressure",
  overviewParagraphs: [
    "The schedule is active, the approval path can be sensitive, and the drawings often need to serve multiple project realities at once. Reviewers need a clean submittal. Fabricators need complete dimensions and condition clarity. Field teams need drawings they can actually use across renovation areas, public-facing spaces, and repeated conditions without stopping to reinterpret what was intended.",
    "That is where Milestone fits. We are not positioned as a commodity drafting vendor. We are a precision planning partner focused on coordination, documentation discipline, and drawing sets that reduce questions before fabrication and installation begin.",
    "For experienced glazing PMs, the issue is usually not finding someone to draft the job. The issue is finding someone who communicates clearly, handles revisions in a controlled way, and does not create more work for the team. This page is built for hospitality projects where glazing scope needs to move through review, revision, and execution with less confusion."
  ],
  pressureParagraphs: [
    "Hospitality projects often look repetitive at a distance, then become coordination-heavy once the drawing work starts. A single job may include guestroom openings, lobby and entrance conditions, amenity spaces, renovation areas, first-floor public-facing glazing, and scope that needs to be separated clearly from existing or excluded work. Even when portions of the glazing package repeat, the documentation rarely stays simple for long.",
    "That pressure increases when approvals are moving quickly and the details are still shifting. PMs are trying to keep submittals moving, answer review comments, coordinate renovation conditions, and avoid handing the field a set that creates preventable questions. In that environment, shop drawings are not just paperwork. They are the planning layer that helps the project move without constant rework."
  ],
  pressureCards: [
    ["False simplicity in repeated conditions", "Jobs that look standardized at bid time often require careful documentation once guestroom openings, renovation scope, public spaces, and phased release requirements are sorted out."],
    ["Renovation and existing-condition complexity", "Renovation areas, selective replacement scope, and phased coordination require more documentation precision than new construction with clean conditions throughout."],
    ["Fast approvals with shifting details", "Architect markups, clarification cycles, and coordination updates arrive while schedule pressure is already high. Drawing sets need to absorb revisions without losing coherence."]
  ],
  risksIntro: "On hospitality jobs, drawing problems rarely stay isolated. Here is where they typically start.",
  coordinationCards: [
    ["Coordinated drawings", "Complete dimensions, condition detail, and opening references that eliminate the most common questions before fabrication and installation begin."],
    ["Condition clarity", "Surrounding conditions documented to actual project circumstances rather than assumed. This is particularly important where renovation and new work intersect."],
    ["Structured revisions", "Organized revision handling with clear communication so the set stays coherent through architect markups and coordination cycles without drifting into confusion."]
  ],
  riskSplitCards: [
    ["Existing conditions and opening gaps", "Existing conditions may be less clear than expected. Opening information may look workable until adjacent finishes, joint sizing, or actual field dimensions are reviewed more closely. If surrounding conditions are not shown clearly, fabrication and installation questions usually show up later when they are harder to solve."],
    ["False simplicity, revision pressure, and scope separation", "Repeated openings can make the job seem more standardized than it really is. Public spaces, entrance conditions, selective renovation scope, and phased release requirements still need to be coordinated carefully. When those differences are not surfaced during drafting, they often come back later as review comments, redraws, fabrication issues, or field slowdowns. If the original set is not organized well, every revision becomes harder to manage and easier to misunderstand."]
  ],
  pmParagraphs: [
    "Experienced PMs are not looking for flashy drawings. They want a set they can trust. That means complete dimensioning, clear frame locations, usable notes, and detail that reflects actual conditions instead of generic assumptions.",
    "They also need a drafting partner who understands that hospitality work leaves little room for loose coordination. Good shop drawings do not come from assumptions. They come from clear scope, project-specific input, and early clarification of what could hold the job up. The goal is not to make the PM manage every detail twice. The goal is to build the right questions into the process early so the review and submittal path stays cleaner.",
    "For many PMs, confidence comes from drawings that look professional, read clearly, and generate fewer questions from architects, fabricators, and field teams."
  ],
  needRows: [
    ["For review", "Professional presentation, organized sheets, complete notes that reduce comment volume"],
    ["For fabrication", "Complete dimensions, accurate conditions, clear scope separation across renovation and new work"],
    ["For the field", "Usable layout and condition detail across repeated openings that does not require interpretation to install correctly"]
  ],
  supportParagraphs: [
    "Milestone supports hospitality glazing projects with a structured approach built around precision planning. We start with the architectural drawings, specifications, and project information needed to understand the job clearly. From there, we use a kickoff and project preview process to identify missing information, surface questions early, and reduce back and forth later.",
    "Our role is coordination. We align architectural conditions, fabrication-level detail, installer layout clarity, and revision discipline into one organized drawing path. When engineering is required, engineering remains structural validation. Drafting remains the coordination layer that turns the project into a coherent, reviewable set.",
    "This matters on hospitality work because the job usually cannot tolerate vague documentation. Reviewers need a professional submittal. Fabricators need complete dimensions. Installers need conditions that make sense in the field."
  ],
  processSteps: [
    ["1", "Intake and kickoff", "Architectural drawings, scope, and project-specific preferences gathered early, including renovation limits, repeated openings, public-facing spaces, and field verification workflow expectations."],
    ["2", "Project preview", "Early review to identify missing information and potential hold-ups before they create problems in a project where schedule pressure is already active."],
    ["3", "Controlled production and revision", "Questions handled through production, revisions tracked, and the set kept coherent through architect markups and coordination cycles into submittal readiness."]
  ],
  systemsIntro: "Hospitality glazing scope can vary, but the documentation pressures are familiar.",
  scopeItems: [
    "Hotel entrance and first-floor storefront conditions",
    "Lobby and public-area glazing",
    "Guestroom window and opening packages",
    "Amenity-space glazing conditions",
    "Renovation scope requiring field verification or phased release workflows",
    "Associated detail sheets, elevations, schedules, and revision updates"
  ],
  systemsFooter: "The common thread is not a single system. It is the need for coordinated shop drawings that help multiple parties work from the same understanding of the job. If the scope is still evolving, Milestone can also align the level of detail to the project phase so the deliverable matches what the job actually needs.",
  systemCards: [
    ["Storefront", "Hotel entrance, lobby, and first-floor storefront conditions with complete dimensions, opening references, and surrounding-condition clarity.", "/service/architectural-construction-docs/"],
    ["Curtain Wall", "Hospitality facade and curtain wall conditions with organized documentation for review, fabrication, and field coordination.", "/service/architectural-bim-modeling-services/"],
    ["Engineering & Technical Support", "Structural validation and engineering coordination when the project requires it, while keeping engineering and drafting in the right roles through the submittal process.", "/service/structural-construction-document/"]
  ],
  clarityParagraphs: [
    "Early clarity prevents delays when missing information is identified before the set is deep into production. It prevents delays when architectural inconsistencies are caught before they become fabrication or field conflicts. It prevents delays when dimensions, surrounding conditions, and installation assumptions are shown clearly enough that downstream teams are not forced to fill in the gaps later.",
    "It also prevents delays during revisions. Hospitality projects often move through review comments, architect markups, and coordination updates. The cleaner the original set and the clearer the revision structure, the easier it is to keep the project moving without losing control of the documentation.",
    "On some jobs, first-round shop drawings may also support field verification before final dimensions are locked. When that workflow is expected, it needs to be addressed early so the process stays organized instead of reactive."
  ],
  clarityChecks: [
    "Missing information surfaced before production is deep into the set",
    "Renovation and new-work conditions documented clearly and separately",
    "Revision cycles kept organized so the set stays coherent through approval",
    "Field verification workflows built into the process from the beginning, not added reactively"
  ],
  managingParagraphs: [
    "If you are managing a hospitality glazing project, the real question is not whether drawings will be produced. The question is whether the set will help the job move cleanly through review, revision, fabrication, and installation.",
    "Milestone is built for teams that need the work done right and do not have time to babysit the process. If your current provider is overloaded, the project is moving too fast for vague documentation, or you need a more structured path to submittal, this is a practical place to start."
  ],
  faqTitle: "Hospitality Shop Drawing Questions",
  faqIntro: "Common questions about coordinating glazing shop drawings on hospitality projects.",
  faqs: [
    ["Do you support hospitality renovation projects as well as new construction?", "Yes. Hospitality glazing packages may include renovation scope, replacement openings, guestroom windows, lobby glazing, entrances, public-facing storefront, and phased release requirements. We organize the drawing set so review, fabrication, and field teams can work from one clear package."],
    ["What makes hospitality shop drawings harder to get right?", "Hospitality projects can look repetitive, but renovation areas, guestroom openings, public spaces, existing conditions, and fast approval cycles create coordination risk. The set has to separate scope clearly and stay organized through revisions."],
    ["Can you help if our current drafting source is backed up?", "Yes. We can review the available drawings, scope, specifications, deadlines, and project constraints, then help create a structured drawing path for the job."],
    ["Can your drawings support architect review and redline revisions?", "Yes. We can incorporate architect markups, redlines, and revision updates while keeping the set organized and readable through the review process."],
    ["Do your drawings help reduce field confusion?", "The goal is to reduce field confusion by clarifying layout, dimensions, conditions, opening references, renovation limits, and surrounding details before fabrication and installation begin."],
    ["Do we need engineering before shop drawings?", "Engineering requirements depend on the project and jurisdiction. When engineering is required, engineering remains structural validation while shop drawings organize the coordinated fabrication and installation information."],
    ["What do you need from us to get started on a hospitality project?", "We typically need architectural drawings, glazing scope, specifications, deadlines, available markups, renovation or phasing information, and project-specific preferences. A kickoff review helps identify missing information early."],
    ["Can first-round shop drawings be used for field verification?", "Yes, when that workflow is expected. The key is to define it early so the drawings support verification cleanly and revisions can be managed without losing control of the set."]
  ],
  finalTitle: "Need hospitality shop drawings that are easier to review and easier to use?",
  finalText: "Send the project scope, drawings, and deadline. Milestone will help you align the right level of detail, surface missing information early, and move toward a cleaner submittal path."
};

export function hospitalityIndustryPage() {
  return industryDetailPage(hospitalityIndustryData);
}

const municipalIndustryData = {
  title: "Municipal",
  route: "/industries/municipal/",
  heroImage: asset("2021/04/architects-3.jpg"),
  overviewImage: asset("2021/04/architects-3.jpg"),
  overviewImageAlt: "Municipal building glazing",
  clarityImage: asset("2023/05/BIM-Shop-Drawings.jpg"),
  clarityImageAlt: "Municipal engineering coordination drawing sample",
  ids: {
    overview: "mpMunicipalContentTitle",
    pressure: "municipal-pressure",
    risks: "municipal-risks",
    pms: "municipal-pms",
    support: "municipal-support",
    systems: "municipal-systems",
    clarity: "municipal-clarity",
    managing: "municipal-managing",
    faqs: "municipal-faqs"
  },
  heroTitle: "Shop Drawings for Municipal Glazing Projects",
  heroText: "Municipal projects cannot afford drawing confusion once approvals, revisions, and field coordination start moving. Milestone supports municipal glazing scope with coordinated shop drawings built for architect review, revision clarity, and fewer downstream field questions across public buildings, phased work, accountability-heavy approval paths, and condition-sensitive project environments.",
  heroBullets: [
    "Clear dimensions, notes, and surrounding-condition coordination"
  ],
  overviewTitle: "Municipal glazing projects create a specific kind of pressure",
  overviewParagraphs: [
    "The approval path is often more formal, the documentation carries more weight, and the drawings may need to stand up to multiple rounds of review without creating confusion for fabrication or the field. Reviewers need a clean submittal. Fabricators need complete dimensions and condition clarity. Installers need drawings they can actually use without stopping to reinterpret what was intended.",
    "That is where Milestone fits. We are not positioned as a commodity drafting vendor. We are a precision planning partner focused on coordination, documentation discipline, and drawing sets that reduce questions before fabrication and installation begin.",
    "For experienced glazing PMs, the issue is usually not finding someone to draft the job. The issue is finding someone who communicates clearly, handles revisions in a controlled way, and does not create more work for the team. This page is built for municipal projects where glazing scope needs to move through review, revision, and execution with less confusion."
  ],
  pressureParagraphs: [
    "Municipal projects often raise the cost of unclear documentation. Public-sector work tends to involve more formal review, more accountability around revisions, and less tolerance for drawing gaps that create downstream questions. A single project may include public entrances, security-sensitive openings, phased renovation areas, occupied conditions, or multiple stakeholders reviewing the same submittal set. Even when the glazing scope looks straightforward on paper, the coordination burden is usually higher once the job is moving.",
    "That pressure increases when PMs are trying to keep approvals moving while also protecting fabrication and installation from preventable issues. If dimensions are vague, surrounding conditions are not shown clearly, or comments are handled loosely, the job slows down. In that environment, shop drawings are not just paperwork. They are the planning layer that helps the project move without constant rework."
  ],
  pressureCards: [
    ["Formal approval paths", "Public-sector submittals often move through more formal approval paths. Drawing gaps generate comments that are harder to resolve quickly and create more schedule exposure."],
    ["Sensitive conditions and occupied scope", "Public entrances, security-sensitive openings, phased renovation areas, and occupied conditions require more documentation precision than clean new construction environments."],
    ["Multiple stakeholders, one submittal set", "Architects, GCs, owner representatives, and agency reviewers may all review the same package. Each drawing gap is an opportunity for conflicting interpretations."]
  ],
  risksIntro: "On municipal jobs, small documentation gaps can create larger downstream problems. Here is where they typically start.",
  coordinationCards: [
    ["Thorough drawing sets", "Complete dimensions, condition detail, and opening references that reduce preventable questions before fabrication and installation begin."],
    ["Responsive communication", "Questions, comments, and revisions handled clearly so architect review and municipal approval paths do not drift into avoidable confusion."],
    ["Structured kickoff and preview", "Missing information surfaced early through a more organized start to the job, especially where occupied conditions, phased work, and formal review matter."]
  ],
  riskSplitCards: [
    ["Opening gaps and condition ambiguity", "Opening information may appear workable until adjacent conditions, anchorage requirements, or actual field realities are reviewed more closely. If surrounding conditions are not shown clearly, fabrication and installation questions usually show up later when they are harder to solve. Municipal work has less tolerance for those gaps than most commercial project types."],
    ["Approval drag and revision control", "Public-sector projects often involve more back and forth around comments, redlines, and clarification requests. If the original drawing set is too generic or not organized well, every revision becomes harder to manage and easier to misunderstand. What should be a controlled update turns into more PM follow-up, more redraw time, and more schedule exposure. If the set is not structured well from the beginning, every revision round becomes more disruptive than it needs to be."]
  ],
  pmParagraphs: [
    "Experienced PMs are not looking for flashy drawings. They want a set they can trust. That means complete dimensioning, clear frame locations, usable notes, and detail that reflects actual project conditions instead of generic assumptions.",
    "They also need a drafting partner who understands that municipal work leaves little room for loose coordination. Good shop drawings do not come from assumptions. They come from clear scope, project-specific input, and early clarification of what could hold the job up. The goal is not to make the PM manage every detail twice. The goal is to build the right questions into the process early so the review and submittal path stays cleaner.",
    "For many PMs, confidence comes from drawings that look professional, read clearly, and generate fewer questions from architects, fabricators, and field teams. That is the standard this page is written to support."
  ],
  needRows: [
    ["For review", "Professional presentation, organized sheets, complete notes that hold up to formal approval scrutiny"],
    ["For fabrication", "Complete dimensions, accurate conditions, clear documentation that does not leave gaps to resolve later"],
    ["For the field", "Usable layout and condition detail across sensitive and phased areas that does not require interpretation to install correctly"]
  ],
  supportParagraphs: [
    "Milestone supports municipal glazing projects with a structured approach built around precision planning. We start with the architectural drawings, specifications, and project information needed to understand the job clearly. From there, we use a kickoff and project preview process to identify missing information, surface questions early, and reduce back and forth later.",
    "Our role is coordination. We align architectural conditions, fabrication-level detail, installer layout clarity, and revision discipline into one organized drawing path. When engineering is required, engineering remains structural validation. Drafting remains the coordination layer that turns the project into a coherent, reviewable set.",
    "This matters on municipal work because the job usually cannot tolerate vague documentation. Reviewers need a professional submittal. Fabricators need complete dimensions. Installers need conditions that make sense in the field."
  ],
  processSteps: [
    ["1", "Intake and kickoff", "Architectural drawings, scope, and project-specific preferences gathered early, including occupied conditions, phased release requirements, and any field verification workflow expectations."],
    ["2", "Project preview", "Early review to identify missing information and potential hold-ups before they create problems in a project where formal review and accountability are already elevated."],
    ["3", "Controlled production and revision", "Questions handled through production, revisions tracked, and the set kept coherent through formal review cycles and architect markups into submittal readiness."]
  ],
  systemsIntro: "Municipal glazing scope can vary, but the documentation pressures are familiar.",
  scopeItems: [
    "Public entrance and storefront conditions",
    "Administrative and civic-building glazing packages",
    "Renovation scope requiring field verification or phased release workflows",
    "Interior glazed systems and condition-sensitive openings",
    "Associated detail sheets, elevations, schedules, and revision updates",
    "Coordination-heavy openings where surrounding conditions matter as much as the frame itself"
  ],
  systemsFooter: "The common thread is not a single system. It is the need for coordinated shop drawings that help multiple parties work from the same understanding of the job. If the scope is still evolving, Milestone can also align the level of detail to the project phase so the deliverable matches what the job actually needs.",
  systemCards: [
    ["Storefront", "Public entrance and civic storefront systems with complete dimensions, entrance coordination, and conditions documented for review, fabrication, and field use.", "/service/architectural-construction-docs/"],
    ["Curtain Wall", "Municipal facade and curtain wall conditions with surrounding-condition clarity, anchorage coordination, and organized documentation for formal review.", "/service/architectural-bim-modeling-services/"],
    ["Engineering & Technical Support", "Structural validation and engineering coordination when public-sector requirements call for it, while keeping engineering and drafting in the right roles through the submittal process.", "/service/structural-construction-document/"]
  ],
  clarityParagraphs: [
    "Early clarity prevents delays when missing information is identified before the set is deep into production. It prevents delays when architectural inconsistencies are caught before they become fabrication or field conflicts. It prevents delays when dimensions, surrounding conditions, and installation assumptions are shown clearly enough that downstream teams are not forced to fill in the gaps later.",
    "It also prevents delays during revisions. Municipal projects often move through review comments, architect markups, and coordination updates. The cleaner the original set and the clearer the revision structure, the easier it is to keep the project moving without losing control of the documentation.",
    "On some jobs, first-round shop drawings may also support field verification before final dimensions are locked. When that workflow is expected, it needs to be addressed early so the process stays organized instead of reactive."
  ],
  clarityChecks: [
    "Missing information surfaced before production is deep into the set",
    "Architectural inconsistencies caught before they become field or approval conflicts",
    "Revision cycles kept organized so the set holds up through formal review rounds",
    "Field verification workflows built into the process from the beginning, not added reactively"
  ],
  managingParagraphs: [
    "If you are managing a municipal glazing project, the real question is not whether drawings will be produced. The question is whether the set will help the job move cleanly through review, revision, fabrication, and installation.",
    "Milestone is built for teams that need the work done right and do not have time to babysit the process. If your current provider is overloaded, the approval path is too sensitive for vague documentation, or you need a more structured path to submittal, this is a practical place to start."
  ],
  faqTitle: "Municipal Shop Drawing Questions",
  faqIntro: "Common questions about coordinating glazing shop drawings on municipal projects.",
  faqs: [
    ["Do you support municipal renovation projects as well as new construction?", "Yes. Municipal glazing packages may include public entrances, administrative and civic building glazing, occupied renovation areas, interior glazed systems, and phased release requirements. We organize the drawing set so review, fabrication, and field teams can work from one clear package."],
    ["What makes municipal shop drawings harder to get right?", "Municipal projects often involve formal approval paths, multiple stakeholders, public-facing spaces, occupied conditions, and less tolerance for vague documentation. The drawing set has to hold up through review without creating preventable questions later."],
    ["Can you help if our current drafting source is backed up?", "Yes. We can review the available drawings, scope, specifications, deadlines, and project constraints, then help create a structured drawing path for the job."],
    ["Can your drawings support architect review and redline revisions?", "Yes. We can incorporate architect markups, redlines, and revision updates while keeping the set organized and readable through the review process."],
    ["Do your drawings help reduce field confusion?", "The goal is to reduce field confusion by clarifying layout, dimensions, conditions, opening references, phased scope, and surrounding details before fabrication and installation begin."],
    ["Do we need engineering before shop drawings?", "Engineering requirements depend on the project and jurisdiction. When engineering is required, engineering remains structural validation while shop drawings organize the coordinated fabrication and installation information."],
    ["What do you need from us to get started on a municipal project?", "We typically need architectural drawings, glazing scope, specifications, deadlines, available markups, phasing or occupancy information, approval requirements, and project-specific preferences. A kickoff review helps identify missing information early."],
    ["Can first-round shop drawings be used for field verification?", "Yes, when that workflow is expected. The key is to define it early so the drawings support verification cleanly and revisions can be managed without losing control of the set."]
  ],
  finalTitle: "Need municipal shop drawings that are easier to review and easier to use?",
  finalText: "Send the project scope, drawings, and deadline. Milestone will help you align the right level of detail, surface missing information early, and move toward a cleaner submittal path."
};

export function municipalIndustryPage() {
  return industryDetailPage(municipalIndustryData);
}
