export function renderBlogArticleBlocks(blocks) {
  if (blocks.every((block) => typeof block === "string")) {
    return blocks.length > 2
      ? `<ul class="blog-check-list">${blocks.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : blocks.map((item) => `<p>${item}</p>`).join("");
  }
  return blocks.map((block) => {
    if (block.type === "p") return `<p>${block.text}</p>`;
    if (block.type === "list") return `<ul class="blog-check-list">${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    return "";
  }).join("");
}
