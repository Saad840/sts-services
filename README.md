# Milestone PLM Solutions Website

Static Milestone PLM Solutions website replica built with vanilla JavaScript components, shared data files, client-side routing, and responsive CSS.

The project builds into a static `dist/` folder. Each route gets a nested `index.html` shell, while the actual page content is rendered by JavaScript from `src/main/render.js`.

## Quick Start

```bash
npm.cmd run build
npm.cmd start
```

Open `http://localhost:4173`.

On Windows PowerShell, use `npm.cmd` if `npm` is blocked by the local execution policy.

## Scripts

- `npm.cmd run build` - generates the static `dist/` folder, copies `src/` and `assets/`, creates route shells, `sitemap.xml`, and `robots.txt`.
- `npm.cmd start` - serves the generated `dist/` folder on `http://localhost:4173`.

## Project Structure

```text
assets/                 Website images and icons
dist/                   Generated static build output
docs/                   Project notes and audits
src/components/         Header, footer, page heroes, service layouts, shared UI
src/constants/          Shared constants such as inline icons
src/data/               Navigation, service lists, blogs, jobs, offices, assets
src/main/               App entry, renderer, events, and route resolvers
src/pages/              Page templates grouped by section
src/pages/services/     Service landing page and service detail pages
src/styles/             CSS split by page/feature and imported by styles.css
build.mjs               Static route builder
server.mjs              Local static server
```

## Routing

The app uses route resolver files in `src/main/routes/`:

- `page-routes.js` handles home, about, contact, careers, FAQ, search, and static pages.
- `service-routes.js` handles `/services/`, `/service/`, and all service detail URLs.
- `blog-routes.js` handles blog archives, blog pages, and article URLs.
- `industry-routes.js` handles industry pages.
- `case-study-routes.js` handles case study pages.
- `sampleDrawing-routes.js` handles sample drawing pages.

`build.mjs` collects known routes from data files and route exports, then writes a matching `dist/<route>/index.html` for each path.

## Services

Service navigation starts in `src/data/navigation.js`. The header Services dropdown is rendered from `src/components/header.js`.

Current service groups include:

- BIM Services
- Architectural Services
- Structural Services
- MEP Services
- Facade & Glazing Services
- Engineering Solutions
- Staffing

The new Facade & Glazing parent section includes:

- Curtain Wall Shop Drawings
- Storefront Glazing Shop Drawings
- All-Glass Entrances & Partitions
- Metal Panel & Cladding Shop Drawings
- Sunshade Detailing

Facade and glazing pages live in `src/pages/services/facade-glazing.js` and are routed through `src/main/routes/service-routes.js`.

## Adding A New Service

1. Add the service link under the correct group in `src/data/navigation.js`.
2. If it needs a custom page, add a renderer in `src/pages/services/`.
3. Export the renderer from `src/pages/services/index.js`.
4. Register the route in `src/main/routes/service-routes.js`.
5. Add image metadata or card entries in `src/pages/services/shared.js` when needed.
6. If it should appear in the header dropdown, update `src/components/header.js`.
7. Run `npm.cmd run build` and verify the route is generated.

For simple services, the generic `serviceDetail()` fallback can render a basic page from navigation data. For important SEO/service pages, use a dedicated page renderer.

## Data Files

Most content is data-driven:

- `src/data/navigation.js` - main navigation and service menu source data.
- `src/data/services.js` - service cards and flattened service list.
- `src/data/assets.js` - maps legacy asset references to local image paths.
- `src/data/blogs.js` - blog cards and article route metadata.
- `src/data/industries.js` - industry landing and detail data.
- `src/data/jobs.js` - careers and job detail URLs.
- `src/data/offices.js` - office selector content in the header.
- `src/data/sample-drawings.js` - sample drawing cards, categories, preview image names, PDF names, and popup metadata.
- `src/data/static-pages.js` - simple static page content.

Shared exports are collected in `src/data/index.js`.

## Sample Drawings

The `/sample-drawings/` page lives in `src/pages/sample-drawings.js` and is routed through `src/main/routes/sampleDrawing-routes.js`.

The page includes:

- Intro and CTA sections.
- A reusable Sample Library grid.
- Category filters.
- Pagination with 8 cards per page.
- Reusable sample drawing popup/modal.
- Detail-level example buttons.
- FAQ and final CTA sections.

Reusable pieces:

- `src/components/sample-drawing-card.js` renders each sample drawing card and stores popup data in `data-modal-*` attributes.
- `src/components/sample-drawing-modal.js` renders the shared popup.
- `src/main/events.js` binds sample drawing filtering, pagination, popup open/close behavior, and PDF links.
- `src/styles/sample-drawings.css` contains the page, card, pagination, detail-level, FAQ, and modal styles.

Assets are stored in:

```text
assets/sample-drawings/previews/   High-quality preview images used by cards and popups
assets/sample-drawings/pdfs/       PDF files opened by the popup button
```

The local server in `server.mjs` serves PDF files as `application/pdf` with `Content-Disposition: inline`, so the "Open Sample Drawing" button opens PDFs in a new browser tab instead of downloading them.

## Adding A New Sample Drawing

1. Add the preview image to `assets/sample-drawings/previews/`.
2. Add the PDF to `assets/sample-drawings/pdfs/`.
3. Keep the filenames URL-safe and consistent, for example:

```text
my-new-sample.jpg
my-new-sample.pdf
```

4. Add a row to `sampleDrawingRows` in `src/data/sample-drawings.js`:

```js
[
  "My New Sample",
  "Detail Samples",
  "my-new-sample.jpg",
  "my-new-sample.pdf",
  "Typical Detail",
  "PROJECT NAME",
  "Purpose text shown in the popup",
  "Highlight text shown in the popup"
]
```

The row order is:

```text
title, category, preview filename, PDF filename, tier level, project name, purpose, highlight
```

5. Use one of the existing categories unless you are intentionally adding a new filter:

```text
Coordination & Revisions
Detail Levels
Detail Samples
Full Sets
Industries
```

6. If you add a new category, also add it to `sampleDrawingCategories` in `src/data/sample-drawings.js`.
7. Run `npm.cmd run build`.
8. Open `/sample-drawings/` and verify:

- The card appears in the correct category.
- Pagination still shows a maximum of 8 cards per page.
- Clicking the card opens the popup.
- The popup preview image is high quality.
- "Open Sample Drawing" opens the correct PDF in a new tab.

The three detail-level "See Example" buttons are configured in `src/pages/sample-drawings.js`. If those examples need to change, update the `sampleTitle` values in the `detailLevels` array. The title must exactly match a `sampleDrawingRows` title.

## Styling

The main stylesheet is `src/styles/styles.css`, which imports the feature-specific CSS files.

Use the closest existing CSS file for edits:

- Header changes: `src/styles/header.css`
- Footer changes: `src/styles/footer.css`
- Service pages: `src/styles/services.css`
- Home page: `src/styles/home.css`
- Responsive overrides: `src/styles/responsive.css`

## Forms And Interactions

Client-side interactions are bound in `src/main/events.js`, including:

- Mobile navigation and service submenu toggles
- Office selector updates
- Search form redirects
- Home service tabs
- Case study filters
- Contact/quote form behavior

The contact form currently uses front-end behavior only. Connect it to a backend, CRM, or form provider before production use.

## Deployment

1. Run `npm.cmd run build`.
2. Deploy the generated `dist/` folder to a static host.
3. Make sure the host serves nested `index.html` files for clean URLs.
4. If the host does not support nested clean URLs automatically, configure fallback to `index.html`.

The build also generates `dist/sitemap.xml` and `dist/robots.txt`.

## Production Notes

- Replace any placeholder/service copy with final marketing-approved copy.
- Use owned/licensed images for all service and blog assets.
- Connect quote/contact forms to a real backend or CRM.
- Add CAPTCHA or spam protection before public launch.
- Review generated sitemap routes after major navigation changes.
- Keep `src/data/navigation.js`, `src/components/header.js`, and `src/main/routes/service-routes.js` aligned when adding major service sections.
