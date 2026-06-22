# Milestone Live-Site Audit

## Sitemap

Discovered from `https://www.milestonetech.net/sitemap.xml`.

- `page-sitemap.xml`: home, about, company overview, work culture, awards, why Milestone, case study, FAQ, contact, careers, resources, privacy, terms, training and several legacy pages.
- `stm_service-sitemap.xml`: service root plus BIM, architectural, structural, MEP, engineering, staffing, millwork and furniture-modeling service pages.
- `stm_careers-sitemap.xml`: careers archive and individual job listings.
- `stm_works-sitemap.xml`: works/case-study archive and case-study detail routes.
- `post-sitemap.xml`: large blog archive with hundreds of article URLs.
- Taxonomy sitemaps: categories, tags, authors and custom taxonomy archive routes.

The replica preserves the public hierarchy with generated static routes for the main public page types and representative article routes. The live homepage contained unrelated casino copy; it was treated as source-site contamination and excluded.

## Assets, Fonts, Dependencies

- Fonts: Poppins, Roboto, Abril Fatface via Google Fonts.
- Primary colors: navy `#002e5b`, yellow `#fde428`, red accent `#ff3a2d`, white, light gray sections, dark footer.
- Public images reused from `/wp-content/uploads/`: logo, slider images, industry images, service images, hiring image, testimonial placeholder.
- Original dependencies observed: WordPress, Yoast SEO, W3 Total Cache, Visual Composer/WPBakery, Revolution Slider, Elementor-related styles, Contact Form 7, Google reCAPTCHA, Font Awesome, YouTube embeds, social links.

## Backend/API Functionality

- Contact/request quote form submission requires WordPress Contact Form 7 or equivalent CRM/backend endpoint.
- CAPTCHA validation requires Google reCAPTCHA keys.
- Search requires WordPress search or a static search index.
- Careers/job applications require applicant tracking or email/backend workflow.
- YouTube embeds, social links, analytics, cache plugins and SEO plugins are external services.
- CMS editing, comments and admin functionality are not part of the static replica.

## Differences and Limitations

- This is a clean static implementation rather than a WordPress theme clone.
- Blog and case-study detail pages use production-ready templates instead of copying every full article body.
- Form submissions are intentionally disabled and show a local static notice.
- Some original lazy-loaded/slider/plugin animations are recreated with lightweight JavaScript.
- Images are referenced from the live public WordPress uploads path; if those URLs change, download them into `public/` and update `src/data.js`.
