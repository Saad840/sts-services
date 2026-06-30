import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

export function outsourcingEngineeringServiceArticlePage() {
  const title = "How Outsourcing Engineering Services Can Transform Your Project Delivery";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>July 8, 2025</span><span>Posted by: madhusudan pandey</span><span>Category: Mechanical</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/how-outsourcing-engineering-services-can-transform-your-project-delivery.webp" alt="${title}" loading="lazy">
          <p>In today's fast-moving construction and manufacturing markets, project efficiency, cost-effectiveness, and timely delivery are critical benchmarks for success. Building an in-house team for every specialized engineering task can be costly and difficult to manage.</p>
          <p>Outsourcing engineering services gives businesses access to external expertise, streamlined operations, lower delivery costs, and stronger technical output. With the right partner, outsourcing becomes a practical way to complete projects faster and to a higher standard.</p>
          ${outsourcingEngineeringServiceSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
