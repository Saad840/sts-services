function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function sampleDrawingCard(item, index) {
  const modal = item.modal || {};
  return `
    <article class="sample-drawing-card" data-sample-card data-sample-index="${index}" data-sample-category="${item.category}">
      <button
        class="sample-drawing-card__button"
        type="button"
        data-sample-modal-trigger
        data-modal-title="${escapeAttr(item.title)}"
        data-modal-category="${escapeAttr(item.category)}"
        data-modal-preview="${escapeAttr(modal.preview || item.image)}"
        data-modal-pdf="${escapeAttr(modal.pdf)}"
        data-modal-tier="${escapeAttr(modal.tier)}"
        data-modal-project="${escapeAttr(modal.projectName)}"
        data-modal-purpose="${escapeAttr(modal.purpose)}"
        data-modal-highlight="${escapeAttr(modal.highlight)}"
      >
        <span class="sample-drawing-card__frame">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </span>
        <span class="sample-drawing-card__caption">
          <span class="sample-drawing-card__category">${item.category}</span>
          <span class="sample-drawing-card__title">${item.title}</span>
        </span>
      </button>
    </article>
  `;
}
