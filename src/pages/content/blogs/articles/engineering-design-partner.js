import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

export function engineeringDesignPartnerArticlePage() {
  const title = "How the Right Engineering Design Partner Can Elevate Your Project Outcomes";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>July 7, 2025</span><span>Posted by: madhusudan pandey</span><span>Category: Mechanical</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/how-the-right-engineering-design-partner-can-elevate-your-project-outcomes.webp" alt="${title}" loading="lazy">
          <p>In a fast-changing and competitive engineering environment, projects must stay consistent on time, cost, and accuracy. Selecting the right engineering design partner is one of the most important factors in project success.</p>
          <p>The design phase establishes the direction for everything that follows, whether the project is a commercial complex, industrial plant, or housing development. A strong decision at this stage can improve technical, financial, and operational outcomes.</p>
          ${engineeringDesignPartnerSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
