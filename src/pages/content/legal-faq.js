import { asset } from "../../data/index.js";

const privacySections = [
  {
    title: "1. Information We Collect",
    intro: "We may collect the following types of information:",
    columns: [
      ["Personal Information", ["Name", "Company name", "Email address", "Phone number", "Billing information", "Project or service inquiry details"]],
      ["Automatically Collected Information", ["IP address", "Browser type", "Device information", "Website usage data", "Cookies and analytics data"]]
    ]
  },
  {
    title: "2. How We Use Your Information",
    intro: "We use collected information to:",
    list: ["Provide requested services", "Respond to inquiries", "Send quotations and proposals", "Improve our website and services", "Send service updates and marketing communications", "Comply with legal obligations"]
  },
  {
    title: "3. SMS Communications & Consent",
    intro: "By providing your mobile phone number and opting in through our forms, website, or other communication channels, you consent to receive SMS/text messages from Milestone PLM Solutions.",
    columns: [
      ["These messages may include:", ["Appointment reminders", "Service notifications", "Account updates", "Promotional or marketing messages", "Customer support communications"]],
      ["SMS Consent Terms", ["Message frequency may vary.", "Message and data rates may apply.", "You can opt out at any time by replying STOP, UNSUBSCRIBE, or CANCEL.", "For assistance, reply HELP or contact us at info@milestonetech.net."]]
    ],
    paragraphs: ["Important SMS Privacy Statement", "SMS opt-in data and consent information will not be shared, sold, rented, or disclosed to third parties or affiliates for marketing or promotional purposes.", "We only use SMS information for the purposes explicitly consented to by the user."]
  },
  {
    title: "4. Sharing of Information",
    paragraphs: ["We do not sell or rent personal information.", "We may share information with:"],
    list: ["Trusted service providers assisting in business operations", "Cloud hosting and communication providers", "Legal authorities when required by law"],
    closing: "All third-party providers are required to maintain appropriate confidentiality and security measures."
  },
  {
    title: "5. Data Security",
    paragraphs: ["We implement reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, disclosure, or misuse.", "However, no internet transmission or electronic storage method is completely secure."]
  },
  {
    title: "6. Cookies & Analytics",
    intro: "Our website may use cookies and analytics tools to:",
    list: ["Improve user experience", "Analyze website traffic", "Understand visitor behavior"],
    closing: "Users may disable cookies through browser settings."
  },
  {
    title: "7. Data Retention",
    intro: "We retain personal information only as long as necessary to:",
    list: ["Provide services", "Fulfill contractual obligations", "Comply with legal requirements", "Resolve disputes"]
  },
  {
    title: "8. Your Rights",
    intro: "Depending on your jurisdiction, you may have rights to:",
    list: ["Access your personal data", "Correct inaccurate information", "Request deletion of your information", "Withdraw consent for communications"],
    closing: `To exercise these rights, contact us at <a href="mailto:info@milestonetech.net">info@milestonetech.net</a>.`
  },
  {
    title: "9. Third-Party Links",
    paragraphs: ["Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party sites."]
  },
  {
    title: "10. Changes to This Policy",
    paragraphs: ["We may update this Privacy Policy periodically. Updated versions will be posted on this page with a revised effective date."]
  },
  {
    title: "11. Contact Information",
    paragraphs: ["If you have questions regarding this Privacy Policy or our data practices, contact:", "Milestone PLM Solutions", `Email: <a href="mailto:info@milestonetech.net">info@milestonetech.net</a>`]
  }
];

export function privacyPolicyPage() {
  const renderList = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const renderSection = (section) => `
    <section class="privacy-section">
      <h2>${section.title}</h2>
      ${section.intro ? `<p>${section.intro}</p>` : ""}
      ${section.paragraphs ? section.paragraphs.map((p) => `<p>${p}</p>`).join("") : ""}
      ${section.columns ? `<div class="privacy-columns">${section.columns.map(([heading, items]) => `<div><h3>${heading}</h3>${renderList(items)}</div>`).join("")}</div>` : ""}
      ${section.list ? renderList(section.list) : ""}
      ${section.closing ? `<p>${section.closing}</p>` : ""}
    </section>`;

  return `
    <main id="main" class="privacy-policy-page">
      <section class="privacy-hero">
        <div class="container">
          <h1>Privacy Policy</h1>
          <p>The Privacy Policy outlines how we collect, use, share, and protect your information on our website and services.</p>
        </div>
      </section>
      <section class="privacy-content">
        <div class="container privacy-copy">
          <p>Welcome to Milestone PLM Solutions ("Company," "we," "our," or "us").</p>
          <p>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and share information when you visit our website or interact with our services.</p>
          ${privacySections.map(renderSection).join("")}
        </div>
      </section>
    </main>`;
}

const termsSections = [
  {
    title: "1. Use of Website",
    intro: "You agree to use this website only for lawful purposes and in a manner that does not:",
    list: ["Violate any applicable laws or regulations", "Infringe the rights of others", "Interfere with website functionality or security", "Attempt unauthorized access to systems or data"],
    closing: "We reserve the right to restrict or terminate access to users who violate these Terms."
  },
  {
    title: "2. Services",
    intro: "Milestone PLM Solutions provides professional services which may include:",
    list: ["BIM Modeling", "CAD Drafting", "Digital Twin Services", "Engineering Support", "Consulting Services", "Software or Automation Solutions", "Data Analytics"],
    closing: "All services are subject to separate agreements, proposals, quotations, or statements of work where applicable."
  },
  {
    title: "3. Intellectual Property",
    intro: "All website content, including:",
    list: ["Text", "Graphics", "Logos", "Documents", "Software", "Designs", "Service materials"],
    closing: "is the property of Milestone PLM Solutions unless otherwise stated and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or commercially exploit any content without prior written permission."
  },
  {
    title: "4. Quotes, Proposals & Payments",
    intro: "Any quotations or proposals provided by us:",
    list: ["Are subject to change unless otherwise stated", "May include specific payment schedules and deliverables", "May require advance payment or milestone payments"],
    closing: "Failure to make payments may result in suspension or termination of services."
  },
  {
    title: "5. Limitation of Liability",
    intro: "To the maximum extent permitted by law, Milestone PLM Solutions shall not be liable for:",
    list: ["Indirect or consequential damages", "Loss of profits", "Business interruption", "Data loss", "Delays caused by third-party systems or providers"],
    closing: "Our total liability shall not exceed the amount paid by the client for the specific services giving rise to the claim."
  },
  {
    title: "6. Disclaimer",
    paragraphs: [
      "The website and services are provided \"as is\" and \"as available\" without warranties of any kind.",
      "We do not guarantee:",
      "All matter, text, images, and videos on this website are provided for informational purposes only. Some materials may indicate software, services, or capabilities that are used with partners or may represent future capability. Milestone PLM Solutions Pvt. Ltd. makes no warranties or conditions with respect to use of this website and disclaims implied warranties including merchantability, fitness for a particular purpose, and non-infringement. We are not liable for loss, costs, or damages arising out of website use, including harm caused by viruses or other issues affecting computer equipment, networks, or downloaded content."
    ],
    list: ["Uninterrupted website availability", "Error-free operation", "Specific business outcomes", "Compatibility with third-party systems"]
  },
  {
    title: "7. Third-Party Links",
    paragraphs: ["Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those websites."]
  },
  {
    title: "8. Privacy",
    paragraphs: [`Use of this website is also governed by our <a href="/privacy-policy/">Privacy Policy</a>. Please review it to understand how information is collected, used, and protected.`]
  },
  {
    title: "9. SMS Terms & Conditions",
    paragraphs: ["By opting in to receive SMS/text messages from Milestone PLM Solutions, you agree to these SMS Terms."],
    columns: [
      ["Consent to Receive SMS Messages", ["By providing your phone number and opting in through our website, forms, or service interactions, you consent to receive SMS/text messages from Milestone PLM Solutions.", "These communications may include service notifications, appointment reminders, project updates, customer support messages, and marketing or promotional messages."]],
      ["Message Frequency and Fees", ["Message frequency may vary depending on your interaction with us.", "Message and data rates may apply according to your carrier plan."]]
    ],
    list: ["You may opt out by replying STOP, CANCEL, or UNSUBSCRIBE.", "After opting out, you will not receive SMS messages unless you opt in again.", "For assistance, reply HELP or contact us at info@milestonetech.net.", "SMS consent is not shared with third parties or affiliates for marketing purposes."]
  },
  {
    title: "10. User Responsibilities",
    intro: "You agree that:",
    list: ["Information you provide is accurate", "You have authority to submit information", "You will not misuse our services or systems", "You will not transmit harmful code or malicious content"]
  },
  {
    title: "11. Termination",
    intro: "We reserve the right to terminate or suspend access to our services or website without notice if:",
    list: ["These Terms are violated", "Fraudulent activity is suspected", "Required by law or regulation"]
  },
  {
    title: "12. Governing Law",
    intro: "These Terms shall be governed by and interpreted in accordance with the laws of:",
    list: ["India, if operated from India", "Applicable U.S. laws for U.S.-based operations where relevant"],
    closing: "Any disputes shall be subject to the jurisdiction of appropriate courts."
  },
  {
    title: "13. Changes to Terms",
    paragraphs: ["We may update these Terms periodically. Updated versions will be posted on this page with a revised effective date.", "Continued use of the website after updates constitutes acceptance of the revised Terms."]
  },
  {
    title: "14. Contact Information",
    paragraphs: ["For questions regarding these Terms & Conditions, contact:", "Milestone PLM Solutions", `Email: <a href="mailto:info@milestonetech.net">info@milestonetech.net</a>`]
  }
];

export function termsConditionsPage() {
  const renderList = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const renderSection = (section) => `
    <section class="privacy-section">
      <h2>${section.title}</h2>
      ${section.intro ? `<p>${section.intro}</p>` : ""}
      ${section.paragraphs ? section.paragraphs.map((p) => `<p>${p}</p>`).join("") : ""}
      ${section.columns ? `<div class="privacy-columns">${section.columns.map(([heading, items]) => `<div><h3>${heading}</h3>${renderList(items)}</div>`).join("")}</div>` : ""}
      ${section.list ? renderList(section.list) : ""}
      ${section.closing ? `<p>${section.closing}</p>` : ""}
    </section>`;

  return `
    <main id="main" class="privacy-policy-page">
      <section class="privacy-hero">
        <div class="container">
          <h1>Terms & Conditions</h1>
          <p>Effective Date: May 12, 2026</p>
        </div>
      </section>
      <section class="privacy-content">
        <div class="container privacy-copy">
          <p>Welcome to Milestone PLM Solutions ("Company," "we," "our," or "us").</p>
          <p>These Terms & Conditions govern your use of this website and related services provided by Milestone PLM Solutions. By accessing or using this website, you agree to comply with these Terms.</p>
          <p>This website is provided for informational purposes. Content on the website is copyright protected and may be used only for non-commercial purposes when left unmodified and with copyright references preserved. Website content may not be sold, reproduced, or distributed commercially without permission.</p>
          ${termsSections.map(renderSection).join("")}
        </div>
      </section>
    </main>`;
}

const faqJumpLinks = [
  ["Overview", "#faq-overview"],
  ["Coordination and engineering", "#faq-coordination-engineering"],
  ["Deliverables and level of detail", "#faq-deliverables-detail"],
  ["Getting a quote and getting started", "#faq-quote-start"],
  ["Revisions and A/E redlines", "#faq-revisions-redlines"],
  ["Timing and turnaround", "#faq-timing-turnaround"]
];

const faqHighlights = [
  "Are A/E redlines included?",
  "Are there expediting options for engineering?",
  "Can you handle schedule compression?",
  "Can you keep it to one PO?",
  "Can you work from partial information?"
];

const faqSections = [
  {
    id: "faq-coordination-engineering",
    eyebrow: "FAQ Section",
    title: "Coordination and Engineering",
    intro: "Planning is primary. When engineering is required, it is structural validation. It does not replace the shop drawing set as the coordination document, and Milestone does not replace a PE.",
    items: [
      ["Are there expediting options for engineering?", "Often, yes. We work with different engineering partners and can help find the path with the best lead times for your project. If stamped calculations are not required, we quote the applicable lead time because drafting and engineering tasks often move independently."],
      ["Can you keep it to one PO?", "Yes. Milestone can coordinate with the PE and pay them directly so the glazing contractor PM can keep the work under a single PO."],
      ["Do you provide engineering?", "We coordinate engineering services through our network of engineers when a project requires it."],
      ["Does that mean Milestone replaces a PE?", "No. Engineering is performed by a PE as required. Milestone coordinates the process and keeps the drafting scope and engineering scope clear."]
    ]
  },
  {
    id: "faq-deliverables-detail",
    eyebrow: "FAQ Section",
    title: "Deliverables and Level of Detail",
    intro: "Output should match phase. If the job is moving fast and inputs are incomplete, Quick Draw may be appropriate. If the goal is approval and field clarity, Typical Detail is the standard. If design is evolving, Advanced Detailing support helps prevent downstream rework.",
    items: [
      ["What do I receive?", "A structured shop drawing set scoped to your phase and review path."],
      ["What is the difference between Quick Draw and Typical Detail?", "Quick Draw is streamlined for early-phase speed. Typical Detail is built for submittal readiness with more complete coordination and clarity."],
      ["When does Advanced Detailing make sense?", "Advanced Detailing is needed when over-and-above services are required, such as design-assist support, 3D modeling, help through tough details, or active coordination while the design is still developing."]
    ]
  },
  {
    id: "faq-quote-start",
    eyebrow: "FAQ Section",
    title: "Getting a Quote and Getting Started",
    intro: "The fastest starts happen when scope is clear up front. If we understand what you are drafting, what level of detail you need, and how approvals run, we can quote accurately and avoid churn later.",
    items: [
      ["Can you work from partial information?", "Yes, but missing inputs change the level of detail and what can be verified. If the plan is field verification later, we scope the first set accordingly."],
      ["Do you offer a file upload option?", "Yes. Our request form includes a file upload field."],
      ["What do you need from me to quote?", "Send everything you have, especially items that confirm scope. A highlighted drawing, quote form, and notes that clarify exclusions help prevent mis-scoped work."]
    ]
  },
  {
    id: "faq-revisions-redlines",
    eyebrow: "FAQ Section",
    title: "Revisions and A/E Redlines",
    intro: "Revisions are part of the job. The difference is whether revisions stay clean, controlled, and predictable, or whether they turn into chaos.",
    items: [
      ["Are A/E redlines included?", "We typically include one round of A/E redlines in the quote. If your project needs more time included, let us know on the quote form so there are no surprises later."],
      ["How do revisions work?", "Revision requests are logged and tracked. When possible, the same drafter handles the revision so the set stays consistent."],
      ["How do you keep revisions from getting messy?", "Clean deltas, updated callouts, and controlled sheets. The goal is that anyone can see what changed without hunting."]
    ]
  },
  {
    id: "faq-timing-turnaround",
    eyebrow: "FAQ Section",
    title: "Timing and Turnaround",
    intro: "Timing depends on scope, level of detail, and the review path. The goal is not just speed. The goal is fewer surprises and fewer revision loops.",
    items: [
      ["Can you handle schedule compression?", "Yes, when expectations are scoped correctly. If your approval path requires a faster-than-normal turnaround, share that on the quote form so we can build it into the plan."],
      ["Do you slot a project to protect lead time?", "If you want a predictable start, ask us to slot the project. It keeps lead times from drifting when multiple jobs land at once."]
    ]
  }
];

export function faqPage() {
  return `
    <section class="industry-detail-hero faq-detail-hero" style="background-image: linear-gradient(90deg, rgba(0,46,91,.9), rgba(0,46,91,.58)), url('${asset("2020/09/AEC-Services-530x432.jpg")}')">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> FAQ</nav>
        <p class="eyebrow">Common Questions</p>
        <h1>FAQ</h1>
        <p>If you are considering a new drafting partner, these are the questions that matter. Clear inputs. Clear scope. Clean revisions. Drawings you can submit and build from.</p>
        <ul class="check-list">
          <li>Clear answers about engineering coordination, POs, and PE responsibilities</li>
          <li>Level-of-detail guidance for Quick Draw, Typical Detail, and Advanced Detailing</li>
          <li>Revision, redline, quote, startup, timing, and turnaround expectations</li>
        </ul>
      </div>
    </section>
    <main id="main" class="industry-detail-page faq-detail-page">
      <div class="container industry-detail-layout">
        <aside class="industry-jump-nav" aria-label="FAQ page sections">
          <p>Jump To</p>
          <nav>${faqJumpLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav>
        </aside>
        <div class="industry-detail-content">
          <section id="faq-overview" class="section industry-detail-intro">
            <div class="container industry-detail-two-col">
              <div>
                <p class="eyebrow">Common Questions</p>
                <h2>The questions we see repeatedly</h2>
                <p>These are common inbound questions from PMs who are trying to lock scope, timing, and approval readiness. Use the sections below to jump directly to the part of the process you need clarified first.</p>
                <p>Include your deadline, review path, and current scope assumptions when you reach out so we can point you to the right level of detail faster.</p>
                <div class="faq-detail-actions">
                  <a class="btn" href="/contact-us/">Request a Quote</a>
                  <a class="btn secondary" href="/case-study/">Learn Our Process</a>
                </div>
              </div>
              <aside class="faq-detail-highlight-card">
                ${faqHighlights.map((item) => `<p>&ldquo;${item}&rdquo;</p>`).join("")}
              </aside>
            </div>
          </section>

          ${faqSections.map((section, sectionIndex) => `
            <section id="${section.id}" class="section ${sectionIndex % 2 === 0 ? "industry-detail-dark" : "industry-detail-section"}">
              <div class="container industry-detail-two-col">
                <div>
                  <p class="eyebrow">${section.eyebrow}</p>
                  <h2>${section.title}</h2>
                  <p>${section.intro}</p>
                </div>
                <div class="faq-list industry-detail-faqs ${sectionIndex % 2 === 0 ? "" : "light"}">
                  ${section.items.map(([question, answer], itemIndex) => `<details ${itemIndex === 0 ? "open" : ""}><summary>${question}</summary><p>${answer}</p></details>`).join("")}
                </div>
              </div>
            </section>
          `).join("")}
        </div>
      </div>

      <section class="industry-detail-final-cta">
        <div class="container">
          <h2>Need clearer answers before you send a job?</h2>
          <p>Send the project scope, drawings, deadline, and review path. Milestone will help align the right level of detail and surface the right questions early.</p>
          <div><a class="btn" href="/contact-us/">Request a Quote</a><a class="btn secondary" href="/case-study/">View Sample Drawings</a></div>
        </div>
      </section>
    </main>`;
}
