const renderParagraphs = (paragraphs = []) => paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");

const renderCards = (cards = []) => cards.map(([title, text, href]) => `<article><h3>${title}</h3><p>${text}</p>${href ? `<a class="btn" href="${href}">View Service</a>` : ""}</article>`).join("");

const renderSteps = (steps = []) => steps.map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("");

const renderNeedRows = (rows = []) => rows.map(([label, text]) => `<div><strong>${label}</strong><span>${text}</span></div>`).join("");

const renderFaqs = (faqs = []) => faqs.map(([question, answer], index) => `<details ${index === 0 ? "open" : ""}><summary>${question}</summary><p>${answer}</p></details>`).join("");

function industryJumpNav(page) {
  const jumpLinks = [
    ["Overview", `#${page.ids.overview}`],
    ["Project Pressure", `#${page.ids.pressure}`],
    ["Coordination Risks", `#${page.ids.risks}`],
    ["What PMs Need", `#${page.ids.pms}`],
    ["How MP Supports", `#${page.ids.support}`],
    ["Relevant Systems", `#${page.ids.systems}`],
    ["Early Clarity", `#${page.ids.clarity}`],
    ["If You Are Managing", `#${page.ids.managing}`],
    ["FAQs", `#${page.ids.faqs}`]
  ];

  return `<aside class="industry-jump-nav" aria-label="${page.title} page sections">
    <p>Jump To</p>
    <nav>${jumpLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav>
  </aside>`;
}

export function industryDetailPage(page) {
  return `
    <section class="industry-detail-hero" style="background-image: linear-gradient(90deg, rgba(0,46,91,.88), rgba(0,46,91,.56)), url('${page.heroImage}')">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> <a href="${page.route}">Industries</a> <span>&gt;</span> ${page.title}</nav>
        <p class="eyebrow">${page.title}</p>
        <h1>${page.heroTitle}</h1>
        <p>${page.heroText}</p>
        <ul class="check-list">${page.heroBullets.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </section>
    <main id="main" class="industry-detail-page">
      <div class="container industry-detail-layout">
        ${industryJumpNav(page)}
        <div class="industry-detail-content">
          <section id="${page.ids.overview}" class="section industry-detail-intro">
            <div class="container industry-detail-two-col">
              <div>
                <p class="eyebrow">Overview</p>
                <h2>${page.overviewTitle}</h2>
                ${renderParagraphs(page.overviewParagraphs)}
              </div>
              <figure>
                <img src="${page.overviewImage}" alt="${page.overviewImageAlt}" loading="lazy">
              </figure>
            </div>
          </section>

          <section id="${page.ids.pressure}" class="section industry-detail-dark">
            <div class="container industry-detail-two-col">
              <div>
                <h2>Why This Project Type Creates Pressure</h2>
                ${renderParagraphs(page.pressureParagraphs)}
              </div>
              <div class="industry-detail-card-stack">${renderCards(page.pressureCards)}</div>
            </div>
          </section>

          <section id="${page.ids.risks}" class="section industry-detail-section">
            <div class="container">
              <div class="industry-detail-centered">
                <h2>Common Coordination Risks</h2>
                <p>${page.risksIntro}</p>
              </div>
              <div class="industry-detail-grid">${renderCards(page.coordinationCards)}</div>
              <div class="industry-detail-split-cards">${page.riskSplitCards.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
            </div>
          </section>

          <section id="${page.ids.pms}" class="section industry-detail-dark">
            <div class="container industry-detail-two-col">
              <div>
                <h2>What Experienced PMs Need From Shop Drawings</h2>
                ${renderParagraphs(page.pmParagraphs)}
              </div>
              <div class="industry-detail-need-box">
                <p class="eyebrow">What the set needs to accomplish</p>
                ${renderNeedRows(page.needRows)}
                <a class="btn" href="/case-study/">View Sample Drawings</a>
              </div>
            </div>
          </section>

          <section id="${page.ids.support}" class="section industry-detail-section">
            <div class="container industry-detail-two-col">
              <div>
                <h2>How Milestone Supports This Industry</h2>
                ${renderParagraphs(page.supportParagraphs)}
              </div>
              <div class="industry-detail-steps">${renderSteps(page.processSteps)}</div>
            </div>
          </section>

          <section id="${page.ids.systems}" class="section industry-detail-dark industry-detail-systems">
            <div class="container industry-detail-two-col">
              <div>
                <h2>Relevant Systems and Scope</h2>
                <p>${page.systemsIntro}</p>
                <p>Typical project scope may include:</p>
                <ul class="check-list industry-detail-scope-list">${page.scopeItems.map((item) => `<li>${item}</li>`).join("")}</ul>
                <p>${page.systemsFooter}</p>
                <a class="btn secondary" href="/services/">View All Shop Drawing Services</a>
              </div>
              <div class="industry-detail-card-stack">${renderCards(page.systemCards)}</div>
            </div>
          </section>

          <section id="${page.ids.clarity}" class="section industry-detail-section">
            <div class="container industry-detail-two-col">
              <div>
                <h2>Where Early Clarity Prevents Delays</h2>
                ${renderParagraphs(page.clarityParagraphs)}
              </div>
              <div class="industry-detail-proof">
                <img src="${page.clarityImage}" alt="${page.clarityImageAlt}" loading="lazy">
                <ul class="check-list">${page.clarityChecks.map((item) => `<li>${item}</li>`).join("")}</ul>
              </div>
            </div>
          </section>

          <section id="${page.ids.managing}" class="section industry-detail-dark industry-detail-managing">
            <div class="container">
              ${renderParagraphs(page.managingParagraphs)}
              <a class="btn" href="/case-study/">View Sample Drawings</a>
            </div>
          </section>

          <section id="${page.ids.faqs}" class="section industry-detail-section">
            <div class="container industry-detail-two-col">
              <div>
                <p class="eyebrow">FAQs</p>
                <h2>${page.faqTitle}</h2>
                <p>${page.faqIntro}</p>
                <div class="faq-list industry-detail-faqs light">${renderFaqs(page.faqs)}</div>
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
          <h2>${page.finalTitle}</h2>
          <p>${page.finalText}</p>
          <div><a class="btn" href="/contact-us/">Request a Quote</a><a class="btn secondary" href="/case-study/">View Sample Drawings</a></div>
        </div>
      </section>
    </main>`;
}
