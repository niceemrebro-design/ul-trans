# UL TRANS

German transport company website built with Vite, vanilla JavaScript and CSS. Fonts are self-hosted.

## Development

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy `dist/` to a static host. No server secrets are needed. The contact form validates required fields then opens an email draft; it does not send mail from a backend.

## Before public launch

Supply confirmed legal company identity, representative and registration details for the imprint, plus an appropriate privacy notice. No legal text was fabricated. Verify company copy and contact details. Import `niceemrebro-design/ul-trans` in Vercel using branch `main`. The root contains `vercel.json` with the Vite build configuration. No environment variables are required.

## Design and validation

Applied installed frontend-design, Impeccable, Emil animation and Vercel interface guidance. See DESIGN.md and PRODUCT.md. Desktop/mobile browser checks cover navigation, vehicle tabs, ADR exclusions, truck journey and reduced motion, widths 320/390/768/1440 and JavaScript errors.

## Pages

Static Vite multi-page build: `/`, `/leistungen/`, `/fuhrpark/`, `/unternehmen/`, `/kontakt/`, `/impressum/`, `/datenschutz/`. Each route has its own HTML entry in vite.config.js and works on direct navigation. No catch-all rewrite is required.

Run `npm run build`, then `npm run preview -- --port 4173`, then `npm run test:site`. Tests use /usr/bin/chromium, overridable with CHROMIUM_PATH; SITE_URL defaults to http://localhost:4173.

Legal pages remain explicit noindex drafts until the owner confirms legal entity, representative, business address, applicable registration/tax/authority details and actual hosting/email arrangements. Do not describe them as complete. The inquiry form remains an email-draft generator and does not transmit form data to a server.

The homepage includes the interactive fleet; navigation links to `/#fuhrpark`. The separate `/fuhrpark/` URL remains available. Run `node tests/motion.mjs` against the preview server to check interior-page autoplay/replay, reduced motion and keyboard vehicle selection on the homepage.
