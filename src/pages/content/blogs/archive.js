import { pageHero } from "../../../components/page-title-hero.js";
import { blogArchives, blogPosts, blogSidebar, olderBlogTitles } from "./shared.js";

function olderBlogPosts(page) {
  const imagePool = blogPosts.map((post) => post.image);
  return olderBlogTitles.map((title, index) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const month = blogArchives[(page + index) % blogArchives.length];
    return {
      title,
      href: `/${slug}/`,
      date: month,
      category: index % 3 === 0 ? "Manufacturing Support Services" : "Architecture",
      image: imagePool[(page + index) % imagePool.length],
      excerpt: "Milestone PLM Solutions shares practical insights for engineering, BIM, CAD, construction documentation, and manufacturing teams working on demanding global projects."
    };
  });
}

function blogPagination(page) {
  const total = 33;
  const href = (value) => value === 1 ? "/blogs/" : `/blogs/page/${value}/`;
  const pages = page <= 2 ? [1, 2, 3] : page >= total - 1 ? [1, total - 2, total - 1, total] : [1, page - 1, page, page + 1, total];
  const items = [];
  let previous = 0;
  pages.forEach((value) => {
    if (value - previous > 1) items.push("<span>...</span>");
    items.push(`<a class="${value === page ? "active" : ""}" href="${href(value)}">${value}</a>`);
    previous = value;
  });
  if (page < total) items.push(`<a href="${href(page + 1)}" aria-label="Next page">&gt;</a>`);
  return `<nav class="blog-pagination" aria-label="Blog pages">${items.join("")}</nav>`;
}

export function blogPage(page = 1) {
  const posts = page === 1 ? blogPosts : olderBlogPosts(page);
  return `${pageHero("Blogs")}
    <main id="main" class="blog-archive-page">
      <div class="container blog-archive-layout">
        <section class="blog-post-list">${posts.map((post) => `<article class="blog-post-card">
          <h2><a href="${post.href}">${post.title}</a></h2>
          <div class="blog-meta"><span>${post.date}</span><span>Posted by: Tejas</span><span>Category: ${post.category}</span><span>No Comments</span></div>
          <a href="${post.href}"><img src="${post.image}" alt="${post.title}" loading="lazy"></a>
          <p>${post.excerpt}</p>
          <a class="blog-read-more" href="${post.href}">Read more <span aria-hidden="true">&gt;</span></a>
        </article>`).join("")}
          ${blogPagination(page)}
        </section>
        ${blogSidebar()}
      </div>
    </main>`;
}
