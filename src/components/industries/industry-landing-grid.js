export function industryLinkCards(industryLinks) {
  return `<div class="card-grid">
    ${industryLinks.map(([title, href]) => `<article><h3>${title}</h3><p>Explore project support, coordination risks, and drawing needs for ${title.toLowerCase()} work.</p><a class="text-link" href="${href}">View industry</a></article>`).join("")}
  </div>`;
}

export function industrySectorGrid(industries) {
  return `<div class="industry-grid">${industries.map((item) => `<article tabindex="0" aria-label="${item.title}"><div class="industry-default"><img src="${item.icon}" alt="" loading="lazy"><h3>${item.title}</h3></div><div class="industry-hover" aria-hidden="true"><img src="${item.image}" alt="" loading="lazy"></div></article>`).join("")}</div>`;
}
