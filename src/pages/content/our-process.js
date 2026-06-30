const processSteps = [
  {
    id: "process-step-inputs",
    number: "1",
    label: "Inputs",
    title: "Clean inputs. Clean schedule.",
    text: "Most delays start before drafting begins. Missing scope, scattered pages, and unclear expectations create churn that shows up later as revisions and field questions. When you send a complete package, we quote faster, start cleaner, and stay on track.",
    bullets: [
      "Architectural drawing set in clean PDF format",
      "Scope notes with bid scope or a short list of included work",
      "Schedule drivers like approval deadline, release date, and install start",
      "Known constraints such as tolerance issues, unusual anchoring, or delegated design requirements"
    ],
    note: "If the scope is hard to explain, write it in plain language. We turn that into a controlled plan.",
    cta: ["Request a Quote", "/contact-us/"],
    image: "/assets/images/our-process/process-inputs.jpg"
  },
  {
    id: "process-step-kickoff",
    number: "2",
    label: "Kickoff",
    title: "Preview first. Rework last.",
    text: "As soon as we receive the job, we run a project preview to confirm the inputs are usable and to spot what will block progress. This is where we lock scope, confirm priorities, and set expectations so the first draft does not become an expensive round of corrections.",
    bullets: [
      "Confirm scope and level of detail before drafting begins",
      "Flag missing information and conflicts in the architectural set",
      "Confirm sequencing for phased areas or partial releases",
      "Establish one point of contact and a clear path for approvals"
    ],
    note: "Align your internal team on what complete means before we start.",
    cta: ["View Services", "/services/"],
    image: "/assets/images/our-process/process-kickoff.jpg"
  },
  {
    id: "process-step-drafting",
    number: "3",
    label: "Drafting",
    title: "Drafted for field-ready execution.",
    text: "We draft shop drawings to reduce installer guesswork and prevent avoidable RFIs. That means coordinating surrounding conditions, clarifying intent where it matters, and organizing sheets for review. During production, questions are tracked and answered against the current version so decisions do not get lost.",
    bullets: [
      "Build around install reality, not generic details",
      "Surface inconsistencies early, not during review",
      "Keep questions consolidated so answers stay consistent"
    ],
    note: "Validate the standards before you commit the schedule.",
    cta: ["View Sample Drawings", "/sample-drawings/"],
    image: "/assets/images/our-process/process-drafting.jpg"
  },
  {
    id: "process-step-revisions",
    number: "4",
    label: "Revisions",
    title: "Revision cycles that actually move forward.",
    text: "You review the draft and return comments. We revise in controlled cycles so the set moves from first issue to submittal-ready without backtracking. If timing is tight, say it early. We can plan for aggressive deadlines when markups are consolidated and scope stays clean.",
    bullets: [
      "Consolidate markups, questions, and preferences into one review package",
      "Return clean updates for review instead of layered confusion",
      "Separate baseline corrections from add-on scope when needed",
      "Call out AE review cycles or delegated design comments early"
    ],
    note: "Tell us the review cadence you expect and whether AE redlines are part of your normal flow.",
    cta: ["Request a Quote", "/contact-us/"],
    image: "/assets/images/our-process/process-revisions.jpg"
  },
  {
    id: "process-step-field-verification",
    number: "5",
    label: "Field Verification",
    title: "Built for real-world dimensions.",
    text: "Not every job starts with final field dimensions. Many teams use first-round shops to verify conditions, then update finals before fabrication release. We structure that handoff so dimension updates stay controlled and the set stays coherent.",
    bullets: [
      "Identify which assumed versus verified dimensions drive the release",
      "Mark which dimensions must be confirmed before fabrication",
      "Set a clean handoff point for final dimension updates"
    ],
    note: "Existing conditions jobs work best when field verification responsibilities are defined up front.",
    cta: ["Contact Us", "/contact-us/"],
    image: "/assets/images/our-process/process-field-verification.jpg"
  },
  {
    id: "process-step-engineering",
    number: "6",
    label: "Engineering",
    title: "Drafting coordinates. Engineering validates.",
    text: "When delegated design, anchors, or stamped calculations are required, engineering is the structural validation layer. Milestone stays focused on planning and coordination. We keep responsibilities clear so the package stays reviewable and the project stays decision-driven, not handoff-driven.",
    bullets: [
      "Drafting remains planning and coordination",
      "Engineering remains structural validation when required",
      "One clear channel for questions and decisions, not scattered handoffs"
    ],
    note: "Use this step when the project includes delegated design or structural review requirements.",
    cta: ["Engineering Support", "/service/structural-construction-document/"],
    image: "/assets/images/our-process/process-engineering.jpg"
  },
  {
    id: "process-step-delivery",
    number: "7",
    label: "Delivery",
    title: "Deliverables you can trust.",
    text: "Delivery is not just sending files. The goal is a clean, reviewable set that supports approval and reduces field questions. Before anything goes out, it runs through an internal quality check to catch avoidable issues and keep revision history clear.",
    bullets: [
      "Submittal-ready drawing set organized for review",
      "Clear revision control so teams know what changed",
      "Closeout handoff that supports fabrication release and field use"
    ],
    note: "Look at sheet organization and clarity, not just the details.",
    cta: ["View Sample Drawings", "/sample-drawings/"],
    image: "/assets/images/our-process/process-delivery.jpg"
  }
];

const processFaqs = [
  ["What do you need from me to quote accurately?", "A clean architectural set, scope notes, deadlines, and any known constraints. If the scope is unclear, the quote will be unclear, so we prefer plain-language notes up front."],
  ["Can you work with partial information?", "Yes, but we identify missing information before production goes too far. The process is designed to separate what can move now from what must be confirmed before fabrication or final release."],
  ["How do revisions stay organized?", "Review comments, markups, questions, and scope changes are consolidated into controlled revision cycles so the drawing set stays coherent from first issue through submittal-ready delivery."],
  ["Can first-round drawings support field verification?", "Yes. When field dimensions are not final, we structure the drawings so assumed dimensions, verified dimensions, and fabrication release points remain clear."],
  ["Where does engineering fit?", "Drafting coordinates the package and engineering validates structural requirements when delegated design, anchors, calculations, or stamped review are required."]
];

const jumpLinks = [
  ["Inputs", "#process-step-inputs"],
  ["Kickoff", "#process-step-kickoff"],
  ["Drafting", "#process-step-drafting"],
  ["Revisions", "#process-step-revisions"],
  ["Field Verification", "#process-step-field-verification"],
  ["Engineering", "#process-step-engineering"],
  ["Delivery", "#process-step-delivery"],
  ["FAQs", "#process-faqs"]
];

function processStepCard(step) {
  return `
    <article id="${step.id}" class="our-process-step">
      <div class="our-process-step-marker" aria-hidden="true">${step.number}</div>
      <div class="our-process-step-copy">
        <p class="eyebrow">${step.label}</p>
        <h2>${step.title}</h2>
        <p>${step.text}</p>
        <ul class="check-list">${step.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p class="our-process-note">${step.note}</p>
        <a class="btn" href="${step.cta[1]}">${step.cta[0]}</a>
      </div>
      <figure>
        <img src="${step.image}" alt="${step.title}" loading="lazy">
      </figure>
    </article>
  `;
}

export function ourProcessPage() {
  return `
    <section class="our-process-hero">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> Our Process</nav>
        <p class="eyebrow">Our Process</p>
        <h1>A structured drafting workflow from intake to submittal-ready delivery</h1>
        <p>Milestone approaches shop drawings as a coordinated production system, not a handoff. Clear intake, early preview, disciplined revisions, and quality-controlled delivery help teams move with fewer surprises.</p>
        <ul class="check-list">
          <li>Clear intake so scope and price match reality</li>
          <li>Early preview to catch missing info before it turns into rework</li>
          <li>Controlled review cycles that move you to submittal-ready</li>
        </ul>
        <div class="our-process-hero-actions">
          <a class="btn" href="/contact-us/">Get Started</a>
          <a class="btn secondary" href="/sample-drawings/">View Sample Drawings</a>
        </div>
      </div>
    </section>

    <main id="main" class="our-process-page">
      <div class="container industry-detail-layout our-process-layout">
        <aside class="industry-jump-nav" aria-label="Our process sections">
          <p>Jump To</p>
          <nav>${jumpLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav>
        </aside>

        <div class="industry-detail-content our-process-content">
          <section class="section our-process-intro">
            <div class="container industry-detail-two-col">
              <div>
                <p class="eyebrow">Production Discipline</p>
                <h2>Designed to reduce avoidable drafting friction before it reaches the field</h2>
                <p>Commercial drafting projects become difficult when scope, review expectations, schedule drivers, and surrounding conditions are not aligned early. Milestone uses a controlled workflow to organize inputs, surface questions, protect revision clarity, and produce packages that support review, fabrication, and installation.</p>
                <p>The goal is simple: fewer loose assumptions, fewer scattered handoffs, and a cleaner path from architectural set to usable deliverables.</p>
              </div>
              <figure>
                <img src="/assets/images/our-process/our-process-hero.jpg" alt="Drafting and design review workspace" loading="lazy">
              </figure>
            </div>
          </section>

          <section class="section our-process-timeline" aria-label="Milestone drafting process">
            <div class="container">
              ${processSteps.map(processStepCard).join("")}
            </div>
          </section>

          <section id="process-faqs" class="section industry-detail-dark our-process-faqs">
            <div class="container industry-detail-two-col">
              <div>
                <p class="eyebrow">FAQs</p>
                <h2>Process Questions</h2>
                <p>Common questions about intake, drafting production, revisions, field verification, and delivery.</p>
                <div class="faq-list industry-detail-faqs">${processFaqs.map(([question, answer], index) => `<details ${index === 0 ? "open" : ""}><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div>
              </div>
              <aside class="industry-detail-cta-card">
                <h3>Send us a job</h3>
                <p>Attach drawings, scope, and deadline details. We will confirm the right level of detail up front.</p>
                <a class="btn" href="/contact-us/">Request a Quote</a>
                <h3>See the work first</h3>
                <p>Review sample drawing packages before sending the first project.</p>
                <a class="btn secondary" href="/sample-drawings/">View Sample Drawings</a>
              </aside>
            </div>
          </section>
        </div>
      </div>

      <section class="industry-detail-final-cta our-process-final-cta">
        <div class="container">
          <h2>Start clean. Stay on schedule.</h2>
          <p>Send the set, send the scope, and tell us the deadline that drives decisions. Milestone will build a controlled plan to reach submittal-ready delivery.</p>
          <div><a class="btn" href="/contact-us/">Request a Quote</a><a class="btn secondary" href="/sample-drawings/">View Sample Drawings</a></div>
        </div>
      </section>
    </main>
  `;
}
