import { sampleDrawingCategories, sampleDrawings } from "../data/index.js";
import { sampleDrawingCard } from "../components/sample-drawing-card.js";
import { sampleDrawingModal } from "../components/sample-drawing-modal.js";

const samplePageSize = 8;
const contactHref = "/contact-us/";

const detailLevels = [
  {
    label: "Level 1",
    title: "Quick Draw",
    sampleTitle: "Quick Draw Example",
    description: "Fast, streamlined drawings for early-stage or budget-sensitive work.",
    bullets: ["Basic system details", "Generic conditions", "Faster Lead Times"]
  },
  {
    label: "Level 2",
    title: "Typical Detail",
    badge: "Brand Standard",
    sampleTitle: "Conflict Resolution Example",
    description: "Our standard for most commercial submittals.",
    bullets: ["Accurate surrounding conditions", "Correct fasteners matched to the condition", "Coordination dimensions and column line references", "Clear notes"]
  },
  {
    label: "Level 3",
    title: "Advanced Detailing",
    sampleTitle: "Design Build Example",
    description: "Expanded drafting support for projects requiring more.",
    bullets: ["Design Assist services", "3D Isometrics or option detailing", "Studies for complex conditions", "Drawings using client standards or templates"]
  }
];

const sampleFaqs = [
  ["Are fasteners fully specified?", "In Typical Detail, fasteners are matched to conditions. In Quick Draw, placeholders can be used when conditions are not final."],
  ["Can you draft to spec-required detail levels?", "Yes. We align the level of detail to the project's review expectations and requirements."],
  ["Do these samples represent what I will actually get?", "Yes. The Typical Detail samples reflect our standard output for most commercial submittals."],
  ["Do you provide engineering?", "We can coordinate engineering support when required. Engineering is structural validation and does not replace the planning and coordination within the shop drawings."],
  ["How do you handle revisions?", "Revisions stay controlled with clear deltas and updated callouts that do not clutter the sheet."],
  ["What makes these drawings field-ready?", "Layout references, in/out dimensions, and clear surrounding conditions reduce guessing and rework."]
];

function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function modalTriggerAttrs(item) {
  const modal = item?.modal || {};
  return `
    data-sample-modal-trigger
    data-modal-title="${escapeAttr(item?.title)}"
    data-modal-category="${escapeAttr(item?.category)}"
    data-modal-preview="${escapeAttr(modal.preview || item?.image)}"
    data-modal-pdf="${escapeAttr(modal.pdf)}"
    data-modal-tier="${escapeAttr(modal.tier)}"
    data-modal-project="${escapeAttr(modal.projectName)}"
    data-modal-purpose="${escapeAttr(modal.purpose)}"
    data-modal-highlight="${escapeAttr(modal.highlight)}"
  `;
}

function sampleButton(href, label, variant = "") {
  return `<a class="sample-action ${variant}" href="${href}">${label}</a>`;
}

function sampleFilters() {
  return `
    <div class="sample-drawing-filters" role="tablist" aria-label="Sample drawing categories" data-sample-filters>
      ${sampleDrawingCategories.map((category, index) => `
        <button type="button" role="tab" data-sample-filter="${category}" aria-selected="${index === 0 ? "true" : "false"}" class="${index === 0 ? "active" : ""}">
          ${category}
        </button>
      `).join("")}
    </div>
  `;
}

function samplePagination() {
  const totalPages = Math.ceil(sampleDrawings.length / samplePageSize);
  return `
    <nav class="sample-drawing-pagination" aria-label="Sample drawing pages" data-sample-pagination data-page-size="${samplePageSize}">
      <button type="button" data-sample-prev disabled>Previous</button>
      <div data-sample-page-list>
        ${Array.from({ length: totalPages }, (_, index) => `<button type="button" data-sample-page="${index + 1}" ${index === 0 ? `class="active" aria-current="page"` : ""}>${index + 1}</button>`).join("")}
      </div>
      <button type="button" data-sample-next>Next</button>
    </nav>
  `;
}

function sampleHero() {
  return `
    <section class="sample-hero">
      <div class="sample-hero__media">
        <img src="/assets/sample-drawings/previews/storefront-elevation-full-set.jpg" alt="Sample storefront elevation drawing" loading="eager">
      </div>
      <div class="container sample-hero__content">
        <p class="eyebrow">Proof of Quality</p>
        <h1>Sample Drawings</h1>
        <p>See the standard before you commit. These samples represent the level of coordination, dimensioning, and detail that goes into every MP Drafting set.</p>
        <div class="sample-actions">
          ${sampleButton(contactHref, "Get Started", "sample-action--light")}
          ${sampleButton("#sample-library", "View Sample Drawings", "sample-action--ghost-light")}
        </div>
      </div>
    </section>
  `;
}

function sampleIntro() {
  const features = [
    ["Full dimensioning clarity", "IN/OUT dimensions, column line references, and layout grid throughout."],
    ["Fastener specificity", "Fasteners matched to condition type, not listed as \"verify in field.\""],
    ["Coordination strength", "Surrounding conditions integrated from the architectural set, not assumed."]
  ];

  return `
    <section class="sample-section sample-section--intro" aria-label="Sample drawings introduction">
      <div class="container sample-split">
        <div class="sample-copy">
          <p class="eyebrow">What You're Looking At</p>
          <h2>What you're looking at.</h2>
          <p>A PM knows immediately. Dimensions are complete. Fasteners are specified. Column lines are referenced. Surrounding conditions are drawn, not assumed. Clarifying notes explain what's estimated or missing.</p>
          <p>This is what "architect-ready" actually looks like. Browse by system type below.</p>
          <div class="sample-actions">
            ${sampleButton("/our-process/", "Learn Our Process")}
          </div>
          <p class="sample-note">See how intake, questions, and revisions stay controlled.</p>
        </div>
        <div class="sample-feature-list">
          ${features.map(([title, copy]) => `
            <article class="sample-feature">
              <span aria-hidden="true">-></span>
              <div>
                <h3>${title}</h3>
                <p>${copy}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function samplePackage() {
  const fullSet = sampleDrawings.find((item) => item.title === "Storefront Elevation - Full Set");
  return `
    <section class="sample-section sample-section--package" aria-label="Sample drawing next steps">
      <div class="container sample-split">
        <div class="sample-copy">
          <p class="eyebrow">Full Sample Package</p>
          <h2>Want the full set?</h2>
          <p>The thumbnails above show the type and level of detail. If you want to review a complete sample drawing set with full dimensions, notes, and fastener callouts, request a full sample package and we will send one relevant to your system type.</p>
          <ul class="sample-bullets">
            <li>Select your primary system type: Curtain Wall, Storefront, All-Glass, Handrail, Metal Panel, or Sunshade.</li>
            <li>Tell us what you want to verify: fasteners, column lines, revision approach, or submittal structure.</li>
          </ul>
          <div class="sample-actions">
            ${sampleButton(contactHref, "Request Sample Package")}
            ${sampleButton(contactHref, "Request a Quote", "sample-action--outline")}
          </div>
          <p class="sample-note">We send a complete set, not screenshots. If you have a live job, quoting is faster than vetting.</p>
        </div>
        <button class="sample-package-preview" type="button" ${modalTriggerAttrs(fullSet)} aria-label="Open Storefront Elevation Full Set sample drawing">
          <img src="${fullSet.image}" alt="${fullSet.title}" loading="lazy">
          <span>
            <small>Sample Package</small>
            <strong>${fullSet.title}</strong>
            <em>${fullSet.category}</em>
          </span>
        </button>
      </div>
    </section>
  `;
}

function sampleIncludes() {
  const included = [
    "Full resolution detail sheets",
    "Title block and revision tracking",
    "Full dimensioning, including in/out and key layout references",
    "Fastener callouts matched to condition",
    "Surrounding conditions shown clearly",
    "Clarifying notes where inputs are missing or still being confirmed"
  ];

  return `
    <section class="sample-section sample-section--includes" aria-label="What the full sample includes">
      <div class="container sample-split">
        <div class="sample-copy">
          <p class="eyebrow">What's Included</p>
          <h2>What a full sample includes.</h2>
          <p>This is the completeness most teams want to confirm before switching.</p>
          <div class="sample-actions">
            ${sampleButton(contactHref, "Request Sample Package")}
          </div>
          <p class="sample-note">We tailor the sample to the system you actually build.</p>
        </div>
        <article class="sample-check-card">
          <p>Included in the package</p>
          <ul>
            ${included.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>
  `;
}

function sampleDetailLevels() {
  return `
    <section class="sample-section sample-levels" aria-labelledby="sample-detail-levels-title">
      <div class="container">
        <div class="sample-section__heading">
          <h2 id="sample-detail-levels-title">Three Levels of Detail, Based on Project Phase</h2>
          <p>Not every job needs the same output. These examples show the difference between streamlined approval-focused sets and fully coordinated submittal sets, plus design-build support when the design is still changing.</p>
        </div>
        <div class="sample-level-grid">
          ${detailLevels.map((level) => {
            const sample = sampleDrawings.find((item) => item.title === level.sampleTitle);
            return `
              <article class="sample-level">
                <div class="sample-level__top">
                  <span>${level.label}</span>
                  ${level.badge ? `<strong>${level.badge}</strong>` : ""}
                </div>
                <h3>${level.title}</h3>
                <p>${level.description}</p>
                <ul>
                  ${level.bullets.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="sample-level__actions">
                  <button class="sample-action sample-action--light" type="button" ${modalTriggerAttrs(sample)}>See Example</button>
                  ${sampleButton(contactHref, "Send Us a Job", "sample-action--ghost-light")}
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </div>
    </section>
  `;
}

function sampleFaqSection() {
  return `
    <section class="sample-section sample-faqs" aria-label="Sample drawing questions">
      <div class="container sample-faq-layout">
        <div class="sample-faq-main">
          <p class="eyebrow">FAQs</p>
          <h2>Common Questions Before You Switch Drafting Partners</h2>
          <div class="sample-faq-list">
            ${sampleFaqs.map(([question, answer]) => `
              <details class="sample-faq-item">
                <summary>${question}</summary>
                <p>${answer}</p>
              </details>
            `).join("")}
          </div>
          <p class="sample-more"><a href="/faq/">View Complete FAQs -></a><span>More questions answered clearly.</span></p>
        </div>
        <aside class="sample-faq-sidebar">
          <section>
            <p>Send Us a Job</p>
            <span>Attach drawings and scope. We will confirm the right level of detail up front.</span>
            ${sampleButton(contactHref, "Send Us a Job")}
          </section>
          <section>
            <p>See the Work First</p>
            <span>Request a sample curtain wall set to validate output quality before the first job.</span>
            ${sampleButton(contactHref, "Request a Sample Set", "sample-action--outline")}
          </section>
        </aside>
      </div>
    </section>
  `;
}

function sampleFinalCta() {
  return `
    <section class="sample-final-cta" aria-labelledby="sample-final-cta-title">
      <div class="container">
        <h2 id="sample-final-cta-title">Seen Enough to Move Forward?</h2>
        <p>Send your project and we will quote the right level of detail up front. The goal is simple: get coordinated drawings you can submit and build from, without managing every step.</p>
        <div class="sample-actions">
          ${sampleButton(contactHref, "Request a Quote", "sample-action--light")}
          ${sampleButton("/our-process/", "View Our Process", "sample-action--ghost-light")}
        </div>
      </div>
    </section>
  `;
}

export function sampleDrawingsPage() {
  return `
    <main id="main" class="sample-drawings-page">
      ${sampleHero()}
      ${sampleIntro()}
      <section class="sample-library" id="sample-library">
        <div class="container">
          <div class="sample-library__heading">
            <p class="eyebrow">Sample Library</p>
            <h1>Browse sample drawings by category.</h1>
            <p>Sample sheets showing the details contractors and architects actually look for: dimensioning clarity, fastener specificity, column line references, and a clean annotation hierarchy.</p>
          </div>
          ${sampleFilters()}
          <div class="sample-drawing-grid" data-sample-grid>
            ${sampleDrawings.map(sampleDrawingCard).join("")}
          </div>
          ${samplePagination()}
        </div>
      </section>
      ${samplePackage()}
      ${sampleIncludes()}
      ${sampleDetailLevels()}
      ${sampleFaqSection()}
      ${sampleFinalCta()}
      ${sampleDrawingModal()}
    </main>
  `;
}
