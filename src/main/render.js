import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { articlePage } from "../pages/blogs.js";
import { $ } from "../utils/dom.js";
import { path, titleFromPath } from "../utils/path.js";
import { bindInteractions } from "./events.js";
import { resolveBlogRoute } from "./routes/blog-routes.js";
import { resolveCaseStudyRoute } from "./routes/case-study-routes.js";
import { resolveIndustryRoute } from "./routes/industry-routes.js";
import { resolvePageRoute } from "./routes/page-routes.js";
import { resolveSampleDrawingRoute } from "./routes/sampleDrawing-routes.js";
import { resolveSearchRoute } from "./routes/search-routes.js";
import { resolveServiceRoute } from "./routes/service-routes.js";

function resolveRouteBody(current, searchQuery) {
  return resolveSearchRoute(current, searchQuery)
    ?? resolveServiceRoute(current)
    ?? resolveIndustryRoute(current)
    ?? resolveSampleDrawingRoute(current)
    ?? resolvePageRoute(current)
    ?? resolveCaseStudyRoute(current)
    ?? resolveBlogRoute(current)
    ?? articlePage(titleFromPath(current));
}

export function renderRoute() {
  const current = path();
  const searchQuery = new URLSearchParams(window.location.search).get("s")?.trim() || "";
  const body = resolveRouteBody(current, searchQuery);

  $("#app").innerHTML = `${header(current)}${body}${footer()}`;
  document.title = searchQuery
    ? `Search results for '${searchQuery}' | Milestone PLM Solutions`
    : `${titleFromPath(current === "/" ? "Engineering Design & BIM Services" : current)} | Milestone PLM Solutions`;
  bindInteractions();
}
