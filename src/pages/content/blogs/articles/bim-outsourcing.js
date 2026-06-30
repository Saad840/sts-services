import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

export function bimOutsourcingArticlePage() {
  const title = "BIM Outsourcing Services by Milestone PLM Solutions, Inc.";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>September 2, 2025</span><span>Posted by: Tejas</span><span>Category: Architecture</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/bim-outsourcing-services-by-milestone-plm-solutions.webp" alt="${title}" loading="lazy">
          <p>Milestone provides BIM outsourcing services to architectural, engineering, and construction firms that need lower costs, better accuracy, efficient turnaround, and dependable project support.</p>
          <p>The services help streamline workflows, reduce in-house workload, and keep projects on time and within budget. When teams outsource BIM design, internal staff can focus on core business operations while BIM professionals handle modeling, coordination, and documentation.</p>
          <p>With over two decades of industry experience, Milestone PLM Solutions Inc. supports BIM outsourcing for clients in India, the USA, and global markets with scalable, accurate, and cost-effective delivery.</p>
          ${bimOutsourcingSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
          <section><h2>Frequently Asked Questions (FAQs)</h2>${bimOutsourcingFaqs.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join("")}</section>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
