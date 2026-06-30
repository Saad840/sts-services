import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

export function architecturalDraftingArticlePage() {
  const title = "Why Architectural Drafting Still Matters in the Age of BIM";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>July 4, 2025</span><span>Posted by: madhusudan pandey</span><span>Category: Architecture</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/why-architectural-drafting-still-matters-in-the-age-of-bim.webp" alt="${title}" loading="lazy">
          <p>Building Information Modeling has changed how construction and design professionals approach architectural projects. With 3D visualization, real-time collaboration, and data-rich capabilities, BIM offers clear advantages.</p>
          <p>Even with that digital evolution, architectural drafting still holds a critical place in the design process. It continues to provide essential value that BIM alone cannot fully replace.</p>
          ${architecturalDraftingSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
