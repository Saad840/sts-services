import { asset, offices, navGroups, headerActions } from "../data/index.js";
import { icons } from "../constants/icons.js";
import { link } from "./navigation-link.js";

function isActiveNav(group, current = "/") {
  if (group.href === "/services/") return current === "/services/" || current.startsWith("/service/");
  if (group.href === "/industries/") return current === "/industries/" || current.startsWith("/industries/");
  if (group.href === "/blogs/") return current === "/blogs/" || current.startsWith("/blog/");
  if (group.href === "/about-us/") {
    return [
      "/about-us/",
      "/company-overview-page/",
      "/work-culture-at-milestone/",
      "/life-at-milestone/",
      "/company-overview/awards-recognitions/",
      "/company-overview/why-milestone/",
      "/case-study/"
    ].some((href) => current === href || current.startsWith(href));
  }
  if (group.href === "/careers-page/") return current === "/careers-page/" || current.startsWith("/careers_archive/");
  return group.href === current;
}

export function servicesDropdown(group, current = "/") {
  const groupItems = (name) => group.mega.find(([heading]) => heading === name)?.[1] || [];
  const architectural = groupItems("Architectural Services");
  const staffing = groupItems("Staffing");
  const menu = [
    { label: "BIM Services", href: "/service/bim-modeling/", items: groupItems("BIM Services") },
    { label: "Architectural Services", href: "#", items: architectural.filter(([label]) => label !== "Millwork Design") },
    { label: "Millwork Design", href: "/service/millwork-drafting-services/" },
    { label: "Structural Services", href: "/service/structural-bim/", items: groupItems("Structural Services") },
    { label: "MEP Services", href: "/service/mep-bim-services/", items: groupItems("MEP Services") },
    { label: "Facade & Glazing Services", href: "/service/curtain-wall-shop-drawings/", items: groupItems("Facade & Glazing Services") },
    { label: "Engineering Solutions", href: "/service/product-design-and-development/", items: groupItems("Engineering Solutions") },
    { label: "Contract Staffing", href: staffing[0]?.[1] || "/service/contract-staffing-services/" }
  ];

  return `<li class="has-menu services-root ${isActiveNav(group, current) ? "is-active" : ""}"><button class="nav-menu-label" type="button" aria-disabled="true">${group.label}</button><button class="nav-submenu-toggle" type="button" aria-label="Expand ${group.label}" aria-expanded="false">+</button><div class="services-menu" role="menu">${menu.map((item) => `
    <div class="service-menu-item ${item.items?.length ? "has-subservices" : ""}">
      <a href="${item.href}" role="menuitem">${item.label}${item.items?.length ? "<span aria-hidden=\"true\">&rsaquo;</span>" : ""}</a>
      ${item.items?.length ? `<button class="service-submenu-toggle" type="button" aria-label="Expand ${item.label}" aria-expanded="false">+</button>` : ""}
      ${item.items?.length ? `<div class="subservices-menu">${item.items.map(link).join("")}</div>` : ""}
    </div>
  `).join("")}</div></li>`;
}

export function officeDetail(index) {
  const office = offices[index];
  return `<span>${icons.mail}${office.address}</span><span>${icons.clock}${office.hours}</span><span>${icons.phone}${office.phone}</span>`;
}

export function header(current = "/") {
  const mega = navGroups.map((group) => {
    const activeClass = isActiveNav(group, current) ? " is-active" : "";
    if (group.mega) return servicesDropdown(group, current);
    if (group.items) {
      const dropdownOnly = ["Industries", "About Us"].includes(group.label);
      const label = group.href && !dropdownOnly
        ? `<a href="${group.href}">${group.label}</a>`
        : `<button class="nav-menu-label" type="button" aria-disabled="true">${group.label}</button>`;
      return `<li class="has-menu${activeClass}">${label}<button class="nav-submenu-toggle" type="button" aria-label="Expand ${group.label}" aria-expanded="false">+</button><div class="drop-menu">${group.items.map(link).join("")}</div></li>`;
    }
    return `<li class="${activeClass.trim()}"><a href="${group.href}">${group.label}</a></li>`;
  }).join("");
  const actions = headerActions.map(([label, href]) => `<a class="header-action" href="${href}">${label}</a>`).join("");

  return `
    <header class="site-header">
      <div class="top-bar">
        <div class="container office-bar">
          <div class="office-detail" aria-live="polite">${officeDetail(0)}</div>
          <label class="office-select-wrap"><span>Office</span><select class="office-select" aria-label="Choose office">${offices.map((office, index) => `<option value="${index}">${office.name}</option>`).join("")}</select></label>
        </div>
      </div>
      <div class="main-header">
        <div class="container nav-shell">
          <a class="brand" href="/" aria-label="Milestone PLM Solutions home"><img src="${asset("2019/09/Full-Logo-PLM.png")}" alt="Milestone PLM Solutions"></a>
          <button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span></span><b>Menu</b></button>
          <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation"><ul>${mega}</ul>${actions ? `<div class="header-actions">${actions}</div>` : ""}<div class="mobile-socials" aria-label="Social links"><a href="/contact-us/">f</a><a href="/contact-us/">in</a><a href="/contact-us/">yt</a></div></nav>
          <div class="socials" aria-label="Social links"><a href="/contact-us/">f</a><a href="/contact-us/">in</a><a href="/contact-us/">yt</a></div>
        </div>
      </div>
    </header>
  `;
}
