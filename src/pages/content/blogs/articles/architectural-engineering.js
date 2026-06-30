import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

export function architecturalEngineeringArticlePage() {
  const title = "Smart Buildings and the Role of Architectural Engineering";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>July 3, 2025</span><span>Posted by: madhusudan pandey</span><span>Category: Architecture</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/smart-buildings-and-the-role-of-architectural-engineering.webp" alt="${title}" loading="lazy">
          <p>In an age defined by connectivity, sustainability, and automation, smart buildings have become a cornerstone of modern infrastructure.</p>
          <p>These intelligent structures use technologies such as IoT, AI, and building automation systems to improve energy efficiency, comfort, and operational performance. The success of any smart building relies heavily on architectural engineering.</p>
          ${architecturalEngineeringSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
