import { blogSidebar } from "../shared.js";
import { renderBlogArticleBlocks } from "./article-rendering.js";

export function engineeringOutsourcingIndiaArticlePage() {
  const title = "Top Engineering Outsourcing Services in India";
  return `
    <main id="main" class="blog-archive-page blog-article-page">
      <div class="container blog-archive-layout">
        <article class="blog-article">
          <h1>${title}</h1>
          <div class="blog-meta"><span>July 29, 2025</span><span>Posted by: Tejas</span><span>Category: Mechanical</span><span>No Comments</span></div>
          <img class="blog-article-hero" src="/assets/images/blogs/top-engineering-outsourcing-services-in-india.webp" alt="${title}" loading="lazy">
          <p>In today's highly competitive global market, businesses are focused on innovation, quality, and cost reduction. Outsourcing has become one of the strongest strategies for improving engineering delivery, and India has become a leading global hub for this work.</p>
          <p>With a large talent pool, advanced tools, and significant cost-saving potential, India attracts companies from the USA and beyond. This guide explores the top engineering outsourcing services in India, key advantages, and how Milestone PLM Solutions, Inc. helps clients improve productivity and project outcomes.</p>
          ${engineeringOutsourcingSections.map(([heading, blocks]) => `<section><h2>${heading}</h2>${renderBlogArticleBlocks(blocks)}</section>`).join("")}
          <a href="/contact-us/"><img class="blog-consultation" src="/assets/images/blogs/free-consultation.png" alt="Free consultation" loading="lazy"></a>
          <section><h2>Frequently Asked Questions</h2>${engineeringOutsourcingFaqs.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join("")}</section>
        </article>
        ${blogSidebar()}
      </div>
    </main>`;
}
