import { allServices, jobs, staticPages } from "../../../data/index.js";
import { caseStudyItems } from "../case-studies.js";
import { aecArchiveServices } from "./aec-archive.js";
import { blogPosts, blogSidebar } from "./shared.js";

const searchPageSize = 12;

function searchIndex() {
  const serviceArchiveByHref = new Map(aecArchiveServices.map((service) => [service.href, service]));
  const serviceEntries = allServices.map((service) => {
    const archive = serviceArchiveByHref.get(service.href);
    return {
      title: service.title,
      href: service.href,
      type: "Service",
      category: service.category,
      date: archive?.date || "",
      author: archive?.author || "",
      image: archive?.image || "",
      excerpt: archive?.excerpt || `${service.title} is part of Milestone's ${service.category} capabilities.`,
      searchText: `${service.title} ${service.category}`
    };
  });
  const generalEntries = [
    ...serviceEntries,
    ...jobs.map(([title, location, category, date, href]) => ({
      title,
      href,
      type: "Career",
      category,
      date,
      author: "Tejas",
      image: "",
      excerpt: `${title} career opportunity in ${location}. Department: ${category}.`,
      searchText: `${title} ${location} ${category}`
    })),
    ...caseStudyItems.map((item) => ({
      title: item.title,
      href: item.href,
      type: "Case Study",
      category: item.category,
      date: "",
      author: "",
      image: item.image,
      excerpt: `${item.title} project showcasing Milestone's ${item.categories.join(", ")} capabilities.`,
      searchText: `${item.title} ${item.category} ${item.categories.join(" ")}`
    })),
    ...blogPosts.map((post) => ({ ...post, type: "Article", author: "Tejas", searchText: `${post.title} ${post.category} ${post.excerpt}` })),
    ...Object.entries(staticPages).map(([href, page]) => ({
      title: page.title,
      href,
      type: "Page",
      date: "",
      author: "",
      category: "",
      image: page.image || "",
      excerpt: page.body?.[0] || "",
      searchText: [page.title, ...(page.body || []), ...(page.bullets || []), ...(page.faqs || []).flat()].join(" ")
    })),
    { title: "Services", href: "/services/", type: "Page", category: "", date: "", author: "", image: "", excerpt: "Explore Milestone's engineering, BIM, architectural, structural, MEP, and staffing services.", searchText: "services engineering BIM architectural structural MEP staffing" },
    { title: "Careers", href: "/careers-page/", type: "Page", category: "", date: "", author: "", image: "", excerpt: "Explore current career opportunities and life at Milestone PLM Solutions.", searchText: "careers jobs openings hiring employment" },
    { title: "Contact Us", href: "/contact-us/", type: "Page", category: "", date: "", author: "", image: "", excerpt: "Contact Milestone PLM Solutions for engineering and BIM project inquiries.", searchText: "contact office phone email inquiry quote" }
  ];
  const seen = new Set();
  return generalEntries.filter((entry) => {
    if (seen.has(entry.href)) return false;
    seen.add(entry.href);
    return true;
  });
}

function searchScore(entry, normalizedQuery, terms) {
  const title = entry.title.toLocaleLowerCase();
  const category = entry.category?.toLocaleLowerCase() || "";
  const text = `${entry.searchText || ""} ${entry.excerpt || ""}`.toLocaleLowerCase();
  const matchedTerms = terms.filter((term) => `${title} ${category} ${text}`.includes(term)).length;
  if (!matchedTerms) return -1;
  if (title === normalizedQuery) return 1000;
  if (title.startsWith(normalizedQuery)) return 900;
  if (title.includes(normalizedQuery)) return 800;
  if (terms.every((term) => title.includes(term))) return 700;
  if (category.includes(normalizedQuery)) return 600;
  return (matchedTerms * 100) + (entry.type === "Service" ? 30 : entry.type === "Career" ? 20 : 0);
}

function searchPagination(query, page, totalPages) {
  if (totalPages <= 1) return "";
  const href = (value) => `${value === 1 ? "/" : `/page/${value}/`}?s=${encodeURIComponent(query)}`;
  const visible = totalPages <= 5 ? Array.from({ length: totalPages }, (_, index) => index + 1) : [1, 2, 3, totalPages];
  const items = [];
  let previous = 0;
  visible.forEach((value) => {
    if (value - previous > 1) items.push("<span>...</span>");
    items.push(value === page
      ? `<span class="active" aria-current="page">${value}</span>`
      : `<a href="${href(value)}">${value}</a>`);
    previous = value;
  });
  if (page < totalPages) items.push(`<a href="${href(page + 1)}" aria-label="Next page">&gt;</a>`);
  return `<nav class="blog-pagination search-pagination" aria-label="Search result pages">${items.join("")}</nav>`;
}

export function searchResultsPage(query, requestedPage = 1) {
  const normalizedQuery = query.toLocaleLowerCase();
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const results = searchIndex()
    .map((entry) => ({ ...entry, score: searchScore(entry, normalizedQuery, terms) }))
    .filter((entry) => entry.score >= 0)
    .sort((a, b) => b.score - a.score || Date.parse(b.date || 0) - Date.parse(a.date || 0) || a.title.localeCompare(b.title));
  const totalPages = Math.max(1, Math.ceil(results.length / searchPageSize));
  const page = Math.min(Math.max(1, requestedPage), totalPages);
  const posts = results.slice((page - 1) * searchPageSize, page * searchPageSize);
  const resultLabel = query.replace(/[<>&"']/g, "");

  return `<section class="service-archive-title search-results-title">
      <div class="container">
        <nav><a href="/">Home</a> <span>&gt;</span> Search results for '${resultLabel}'</nav>
        <h1>Search Results</h1>
      </div>
    </section>
    <main id="main" class="blog-archive-page search-results-page">
      <div class="container blog-archive-layout">
        <section class="blog-post-list search-result-list">${posts.length ? posts.map((post) => `<article class="blog-post-card search-result-card">
          <h2><a href="${post.href}">${post.title}</a></h2>
          <div class="blog-meta">
            ${post.date ? `<span>${post.date}</span>` : ""}
            ${post.author ? `<span>Posted by: ${post.author}</span>` : ""}
            <span>Type: ${post.type}</span>
            ${post.category ? `<span>Category: ${post.category}</span>` : ""}
            <span>No Comments</span>
          </div>
          ${post.image ? `<a href="${post.href}"><img src="${post.image}" alt="${post.title}" loading="lazy"></a>` : ""}
          ${post.excerpt ? `<p>${post.excerpt}</p>` : ""}
          <a class="blog-read-more" href="${post.href}">Read more <span aria-hidden="true">&gt;</span></a>
        </article>`).join("") : `<p class="search-no-results">No results were found for '${resultLabel}'. Try another search term.</p>`}
          ${searchPagination(query, page, totalPages)}
        </section>
        ${blogSidebar().replace('placeholder="Search..."', `placeholder="Search..." value="${resultLabel}"`)}
      </div>
    </main>`;
}
