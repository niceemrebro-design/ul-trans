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
