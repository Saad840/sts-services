import { $ } from "../utils/dom.js";
import { homeServiceTabs } from "../pages/home.js";
import { officeDetail } from "../components/header.js";

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
    positionOpenSubservices();
  });

  bindAdaptiveSubservices(primaryNav);

  $(".office-select")?.addEventListener("change", (event) => {
    $(".office-detail").innerHTML = officeDetail(Number(event.currentTarget.value));
  });

  $(".quote-form")?.addEventListener("submit", submitContactForm);

  document.querySelectorAll(".search-form").forEach((form) => {
    form.querySelector("input")?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      form.requestSubmit();
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = event.currentTarget.querySelector("input").value.trim();
      if (query) window.location.href = `/?s=${encodeURIComponent(query)}`;
    });
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

  bindIndustryJumpNav();
  bindSampleDrawingPagination();
  bindSampleDrawingModal();

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

function bindAdaptiveSubservices(primaryNav) {
  if (!primaryNav) return;

  primaryNav.querySelectorAll(".service-menu-item.has-subservices").forEach((item) => {
    item.addEventListener("mouseenter", () => positionSubservices(item));
    item.addEventListener("focusin", () => positionSubservices(item));
    item.addEventListener("mouseleave", () => resetSubservices(item));
  });
}

function positionOpenSubservices() {
  document.querySelectorAll(".service-menu-item.has-subservices:hover, .service-menu-item.has-subservices:focus-within").forEach(positionSubservices);
}

function positionSubservices(item) {
  if (!window.matchMedia("(min-width: 1021px)").matches) {
    resetSubservices(item);
    return;
  }

  const menu = item.querySelector(".subservices-menu");
  if (!menu) return;

  menu.style.setProperty("--subservices-offset-y", "0px");
  const itemRect = item.getBoundingClientRect();
  const menuHeight = menu.offsetHeight;
  const viewportPadding = 12;
  const overflow = itemRect.top + menuHeight + viewportPadding - window.innerHeight;
  const offset = overflow > 0 ? -Math.min(overflow, Math.max(0, itemRect.top - viewportPadding)) : 0;
  menu.style.setProperty("--subservices-offset-y", `${offset}px`);
}

function resetSubservices(item) {
  item.querySelector(".subservices-menu")?.style.removeProperty("--subservices-offset-y");
}

function bindSampleDrawingModal() {
  const modal = document.querySelector("[data-sample-modal]");
  if (!modal) return;

  const image = modal.querySelector("[data-sample-modal-image]");
  const title = modal.querySelector("[data-sample-modal-title]");
  const tier = modal.querySelector("[data-sample-modal-tier]");
  const project = modal.querySelector("[data-sample-modal-project]");
  const purpose = modal.querySelector("[data-sample-modal-purpose]");
  const highlight = modal.querySelector("[data-sample-modal-highlight]");
  const pdfLink = modal.querySelector("[data-sample-modal-pdf]");
  const closeButtons = modal.querySelectorAll("[data-sample-modal-close]");
  let lastTrigger = null;

  const setText = (node, value) => {
    if (node) node.textContent = value || "Not specified";
  };

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("sample-modal-open");
    lastTrigger?.focus();
  };

  const open = (trigger) => {
    lastTrigger = trigger;
    const preview = trigger.dataset.modalPreview || "";
    if (image) {
      image.src = preview;
      image.alt = trigger.dataset.modalTitle || "Sample drawing preview";
    }
    setText(title, trigger.dataset.modalTitle);
    setText(tier, trigger.dataset.modalTier);
    setText(project, trigger.dataset.modalProject);
    setText(purpose, trigger.dataset.modalPurpose);
    setText(highlight, trigger.dataset.modalHighlight);
    if (pdfLink) {
      const pdf = trigger.dataset.modalPdf || "";
      pdfLink.href = pdf || "#";
      pdfLink.hidden = !pdf;
    }
    modal.hidden = false;
    document.body.classList.add("sample-modal-open");
    modal.querySelector("[data-sample-modal-close]")?.focus();
  };

  document.querySelectorAll("[data-sample-modal-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", () => open(trigger));
  });

  closeButtons.forEach((button) => button.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (!modal.hidden && event.key === "Escape") close();
  });
}

function bindSampleDrawingPagination() {
  const pagination = document.querySelector("[data-sample-pagination]");
  const cards = [...document.querySelectorAll("[data-sample-card]")];
  const filterButtons = [...document.querySelectorAll("[data-sample-filter]")];
  if (!pagination || !cards.length) return;

  const pageSize = Number(pagination.dataset.pageSize || 8);
  const pageList = pagination.querySelector("[data-sample-page-list]");
  const prevButton = pagination.querySelector("[data-sample-prev]");
  const nextButton = pagination.querySelector("[data-sample-next]");
  let activePage = 1;
  let activeFilter = "All";

  const visibleCards = () => cards.filter((card) => activeFilter === "All" || card.dataset.sampleCategory === activeFilter);

  const renderPageButtons = (totalPages) => {
    if (!pageList) return;
    pageList.innerHTML = Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      return `<button type="button" data-sample-page="${page}" ${page === activePage ? `class="active" aria-current="page"` : ""}>${page}</button>`;
    }).join("");
    pageList.querySelectorAll("[data-sample-page]").forEach((button) => {
      button.addEventListener("click", () => update(Number(button.dataset.samplePage)));
    });
  };

  const update = (page = 1) => {
    const filteredCards = visibleCards();
    const totalPages = Math.max(1, Math.ceil(filteredCards.length / pageSize));
    activePage = Math.min(Math.max(page, 1), totalPages);
    const start = (activePage - 1) * pageSize;
    const end = start + pageSize;

    cards.forEach((card, index) => {
      const filteredIndex = filteredCards.indexOf(card);
      card.hidden = filteredIndex < start || filteredIndex >= end;
    });

    renderPageButtons(totalPages);
    if (prevButton) prevButton.disabled = activePage === 1;
    if (nextButton) nextButton.disabled = activePage === totalPages;
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.sampleFilter || "All";
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      update(1);
    });
  });

  prevButton?.addEventListener("click", () => update(activePage - 1));
  nextButton?.addEventListener("click", () => update(activePage + 1));
  update(1);
}

function bindIndustryJumpNav() {
  const nav = document.querySelector(".industry-jump-nav");
  const layout = document.querySelector(".industry-detail-layout");
  if (!nav || !layout) return;

  const topOffset = 92;
  const desktopQuery = window.matchMedia("(min-width: 901px)");
  const links = [...nav.querySelectorAll("a[href^='#']")];
  const sections = links
    .map((link) => [link, document.querySelector(link.getAttribute("href"))])
    .filter(([, section]) => section);
  let frame = 0;

  const setActiveLink = () => {
    const marker = window.scrollY + topOffset + 80;
    let activeLink = links[0];
    sections.forEach(([link, section]) => {
      if (section.offsetTop <= marker) activeLink = link;
    });
    links.forEach((link) => {
      const active = link === activeLink;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  const reset = () => {
    nav.classList.remove("is-fixed", "is-bottom");
    nav.style.removeProperty("--industry-jump-left");
    nav.style.removeProperty("--industry-jump-width");
  };

  const update = () => {
    frame = 0;
    setActiveLink();
    if (!desktopQuery.matches) {
      reset();
      return;
    }

    const layoutRect = layout.getBoundingClientRect();
    const navHeight = nav.offsetHeight;
    const layoutTop = layoutRect.top + window.scrollY;
    const layoutBottom = layoutTop + layout.offsetHeight;
    const fixedStart = layoutTop + 72 - topOffset;
    const fixedEnd = layoutBottom - navHeight - topOffset;

    if (window.scrollY < fixedStart) {
      reset();
      return;
    }

    if (window.scrollY >= fixedEnd) {
      nav.classList.remove("is-fixed");
      nav.classList.add("is-bottom");
      nav.style.removeProperty("--industry-jump-left");
      nav.style.removeProperty("--industry-jump-width");
      return;
    }

    const navColumn = layout.getBoundingClientRect();
    nav.classList.remove("is-bottom");
    nav.classList.add("is-fixed");
    nav.style.setProperty("--industry-jump-left", `${navColumn.left}px`);
    nav.style.setProperty("--industry-jump-width", "220px");
  };

  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
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
