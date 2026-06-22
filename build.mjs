import { cp, mkdir, copyFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { allServices, staticPages, jobs, recentPosts, extraBlogSlugs } from "./src/data/index.js";
import { engineeringServiceRoutes } from "./src/pages/services.js";

const routes = new Set([
  "/",
  "/services/",
  "/service/",
  "/contact-us/",
  "/careers-page/",
  "/careers_archive/",
  "/testimonials1/",
  "/case-study/",
  "/works/",
  "/blogs/",
  "/news/",
  "/blogs-2/",
  "/ai-in-construction/",
  "/ai-in-construction-key-benefits-challenges-applications-and-future-trends/",
  ...Array.from({ length: 32 }, (_, index) => `/blogs/page/${index + 2}/`),
  ...allServices.map((s) => s.href),
  ...engineeringServiceRoutes,
  ...Object.keys(staticPages),
  ...jobs.map((j) => j[4]),
  ...recentPosts.map((p) => p[1]),
  ...extraBlogSlugs.map((slug) => `/${slug}/`)
]);

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await copyFile("index.html", "dist/index.html");
await cp("src", "dist/src", { recursive: true });
await cp("assets", "dist/assets", { recursive: true });

for (const route of routes) {
  if (route === "/") continue;
  const file = join("dist", route, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await copyFile("index.html", file);
}

await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset>\n${[...routes].map((route) => `  <url><loc>${route}</loc></url>`).join("\n")}\n</urlset>\n`);
await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n");
console.log(`Built ${routes.size} routes into dist/`);
