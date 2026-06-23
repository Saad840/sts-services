import { $ } from "../utils/dom.js";
import { homeServiceTabs } from "../pages/home.js";
import { officeDetail } from "../components/layout.js";

const CONTACT_FORM_EMAIL = "info@milestonetech.net";

export function bindInteractions() {
  const menuToggle = $(".menu-toggle");
  const primaryNav = $(".primary-nav");
  const closeMenu = () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    primaryNav?.classList.remove("open");
    primaryNav?.querySelectorAll(".submenu-open").forEach((item) => item.classList.remove("submenu-open"));
    primaryNav?.querySelectorAll(".nav-submenu-toggle, .service-submenu-toggle").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      button.textContent = "+";
    });
  };

  menuToggle?.addEventListener("click", (event) => {
    const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!expanded));
    primaryNav?.classList.toggle("open", !expanded);
  });

  primaryNav?.addEventListener("click", (event) => {
    const serviceToggle = event.target.closest(".service-submenu-toggle");
    if (serviceToggle) {
      event.preventDefault();
      const item = serviceToggle.closest(".service-menu-item");
      const shouldOpen = !item.classList.contains("submenu-open");
      item.parentElement?.querySelectorAll(".service-menu-item.submenu-open").forEach((panel) => {
        if (panel !== item) {
          panel.classList.remove("submenu-open");
          const button = panel.querySelector(".service-submenu-toggle");
          button?.setAttribute("aria-expanded", "false");
          if (button) button.textContent = "+";
        }
      });
      item.classList.toggle("submenu-open", shouldOpen);
      serviceToggle.setAttribute("aria-expanded", String(shouldOpen));
      serviceToggle.textContent = shouldOpen ? "×" : "+";
      return;
    }

    const submenuToggle = event.target.closest(".nav-submenu-toggle");
    if (submenuToggle) {
      event.preventDefault();
      const item = submenuToggle.closest(".has-menu");
      const shouldOpen = !item.classList.contains("submenu-open");
      primaryNav.querySelectorAll(":scope > ul > .has-menu.submenu-open").forEach((panel) => {
        if (panel !== item) {
          panel.classList.remove("submenu-open");
          const button = panel.querySelector(":scope > .nav-submenu-toggle");
          button?.setAttribute("aria-expanded", "false");
          if (button) button.textContent = "+";
        }
      });
      item.classList.toggle("submenu-open", shouldOpen);
      submenuToggle.setAttribute("aria-expanded", String(shouldOpen));
      submenuToggle.textContent = shouldOpen ? "×" : "+";
      return;
    }

    if (event.target.closest("a") && window.matchMedia("(max-width: 1020px)").matches) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1021px)").matches) closeMenu();
  });

  $(".office-select")?.addEventListener("change", (event) => {
    $(".office-detail").innerHTML = officeDetail(Number(event.currentTarget.value));
  });

  $(".quote-form")?.addEventListener("submit", submitContactForm);

  $(".search-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = event.currentTarget.querySelector("input").value.trim();
    if (query) window.location.href = `/blogs/?s=${encodeURIComponent(query)}`;
  });

  document.querySelectorAll("[data-service-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = homeServiceTabs.find((item) => item.id === button.dataset.serviceTab);
      if (!tab) return;
      document.querySelectorAll("[data-service-tab]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      const image = $("[data-service-image]");
      image.src = tab.image;
      image.alt = tab.label;
      $("[data-service-heading]").textContent = tab.heading;
      $("[data-service-copy]").textContent = tab.copy;
      $("[data-service-bullets]").innerHTML = tab.bullets.map((item) => `<li>${item}</li>`).join("");
      const cta = $("[data-service-cta]");
      cta.href = tab.href;
      cta.textContent = tab.cta;
      cta.classList.toggle("btn", tab.id !== "staffing");
      cta.classList.toggle("yellow-btn", tab.id === "staffing");
    });
  });

  document.querySelectorAll("[data-case-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.caseFilter;
      document.querySelectorAll(".case-filters [data-case-filter]").forEach((item) => {
        const active = item.dataset.caseFilter === filter;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll(".case-card").forEach((card) => {
        const categories = (card.dataset.caseCategories || "").split("|");
        const visible = filter === "All" || categories.includes(filter);
        card.hidden = !visible;
      });
    });
  });

  const faqItems = [...document.querySelectorAll(".faq-item")];
  if (faqItems.length) {
    faqItems.forEach((item) => {
      updateFaqItem(item);
      item.querySelector(".faq-question")?.addEventListener("click", () => {
        const shouldOpen = !item.classList.contains("open");
        faqItems.forEach((panel) => {
          panel.classList.remove("open");
          updateFaqItem(panel);
        });
        if (shouldOpen) {
          item.classList.add("open");
          updateFaqItem(item);
        }
      });
    });
  }

  document.querySelectorAll(".coordination-accordions, .service-info-boxes").forEach((group) => {
    const panels = [...group.querySelectorAll(".coordination-accordion, .service-info-box")];
    panels.forEach((panel) => {
      const button = panel.querySelector("button");
      if (!button) return;
      ensureAccordionContent(panel);
      updateAccordionButton(panel);
      button.addEventListener("click", () => {
        const shouldOpen = !panel.classList.contains("open");
        panels.forEach((item) => {
          item.classList.remove("open");
          updateAccordionButton(item);
        });
        if (shouldOpen) {
          panel.classList.add("open");
          ensureAccordionContent(panel);
          updateAccordionButton(panel);
        }
      });
    });
  });

  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".slider-dots button")];
  if (slides.length > 1 && dots.length === slides.length) {
    let active = 0;
    setInterval(() => {
      slides[active].classList.remove("active");
      dots[active].classList.remove("active");
      active = (active + 1) % slides.length;
      slides[active].classList.add("active");
      dots[active].classList.add("active");
    }, 5200);
  }
}

function submitContactForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const note = form.querySelector("[data-form-note]");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const company = String(data.get("company") || "").trim();
  const subject = `Website inquiry from ${name}${company ? ` - ${company}` : ""}`;
  const lines = [
    "New request a quote submission",
    "",
    `Name: ${name}`,
    `Email: ${String(data.get("email") || "").trim()}`,
    `Phone: ${String(data.get("phone") || "").trim() || "Not provided"}`,
    `Company: ${company || "Not provided"}`,
    `Project Duration: ${String(data.get("duration") || "").trim()}`,
    `Company Size: ${String(data.get("companySize") || "").trim() || "Not provided"}`,
    `Preferred Contact: ${data.getAll("connect").map((item) => String(item).trim()).filter(Boolean).join(", ") || "Not provided"}`,
    `Text Consent: ${data.get("consent") ? "Yes" : "No"}`,
    "",
    "Project Message:",
    String(data.get("message") || "").trim()
  ];
  const mailto = `mailto:${CONTACT_FORM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  window.location.href = mailto;
  if (note) note.textContent = `Your email app should open with the message addressed to ${CONTACT_FORM_EMAIL}.`;
}

function updateFaqItem(item) {
  const open = item.classList.contains("open");
  const answer = item.querySelector(".faq-answer");
  const button = item.querySelector(".faq-question");
  const marker = item.querySelector(".faq-question b");
  if (answer) answer.style.maxHeight = open ? `${answer.scrollHeight}px` : "0px";
  if (button) button.setAttribute("aria-expanded", String(open));
  if (marker) marker.textContent = open ? "-" : "+";
}

function ensureAccordionContent(panel) {
  if (panel.matches(".service-info-box")) return;
  if (panel.querySelector("p, .accordion-list")) return;
  const title = panel.querySelector("h3")?.textContent.trim() || "";
  const html = defaultAccordionContent(title);
  if (html) panel.insertAdjacentHTML("beforeend", html);
}

function defaultAccordionContent(title) {
  if (title === "Pricing And Consulting Engagement Options") {
    return `<ul class="check-list coordination-includes accordion-list"><li>Hourly rates are available, based on your volume of work and type of work</li><li>Full-time Equivalent – rates can be provided for larger projects, ensuring your project will be completed within a fixed budget.</li><li>Refer outsourcing model for more details.</li></ul>`;
  }
  if (title === "Data Security & Confidentiality") {
    return `<div class="accordion-body"><p><strong>Being ISO/IEC 27001 Certified:</strong></p><ul class="check-list coordination-includes accordion-list"><li>Milestone systematically examine the customer’s information security risks, taking account of the threats, vulnerabilities, and impacts;</li><li>Design and implement a coherent and comprehensive suite of information security controls and</li><li>Adopt an overarching management process to ensure that the information security controls continue to meet the customers’s information security needs on an ongoing basis.</li></ul></div>`;
  }
  if (title === "Quality Philosophy") {
    return `<ul class="check-list coordination-includes accordion-list"><li>Standards and methodologies for project management quality assurance</li><li>Effective processes to support arrangements for good governance and accountability;</li><li>Input from individuals with the appropriate subject or technical expertise to ensure the development of outputs that are fit for the purpose.</li></ul>`;
  }
  return "";
}

function updateAccordionButton(panel) {
  const button = panel.querySelector("button");
  const title = panel.querySelector("h3")?.textContent.trim() || "section";
  if (!button) return;
  const open = panel.classList.contains("open");
  button.textContent = open ? "–" : "+";
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", `${open ? "Collapse" : "Expand"} ${title}`);
}
