# Milestone PLM Solutions Website Replica

Modern static replica of `https://www.milestonetech.net/`, built with reusable vanilla JavaScript components and responsive CSS.

## Run Locally

```bash
npm run build
npm start
```

Open `http://localhost:4173`.

## Deploy

1. Run `npm run build`.
2. Deploy the `dist/` folder to any static host.
3. Configure clean URL fallback to `index.html` if your host does not serve generated nested `index.html` files automatically.
4. The generated sitemap uses relative paths so the project contains no external runtime links.

## Production Notes

- Connect the quote/contact form to a backend, CRM or form provider.
- Add real CAPTCHA validation if the form is public.
- Replace the template blog/case-study content with full CMS content if editorial parity is required.
- Consider copying reused WordPress images into `public/` for asset ownership and long-term reliability.
