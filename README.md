# Monroe Alumnae Chapter website

Milestone one: a statically rendered Next.js App Router homepage with TypeScript, React, Tailwind CSS, ESLint, and Lucide React. Responsive navigation, a photographic hero, a clearly labeled future-section placeholder, and a basic footer are implemented. No backend, CMS, authentication, or database is included.

## Local development

Use Node.js 20.9 or later (verified with Node 24.10) and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To verify and serve the production build:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Webpack and the standard Tailwind PostCSS plugin are selected because the local sandbox blocks the process port required by the generated Turbopack CSS loader. This does not change App Router or static rendering.

## Structure and editing

- `src/app/`: root metadata, homepage composition, global styles and design tokens.
- `src/components/layout/`: sticky responsive Navbar and Footer.
- `src/components/home/`: Hero and HomepageFoundation placeholder.
- `src/config/navigation.ts`: verified existing Wix destinations and navigation entries. Replace an external URL with `/your-route` when that page is migrated.
- `src/config/site.ts`: chapter identity, contact information and verified social URLs.
- `src/data/homepage.ts`: editable hero copy and image references.
- `public/images/`: local chapter assets optimized through Next Image.

Only the Navbar uses client JavaScript. Native disclosure elements support keyboard dropdowns; the mobile toggle exposes its state, Escape closes the dropdown/menu and restores focus, and a skip link provides direct access to the main content. Fonts use Georgia and system sans-serif without remote font dependencies. Motion is limited to hover transitions with reduced-motion support. A single hero image is deliberate: additional approved images should precede any carousel implementation.

## Source review (October 13, 2026)

Reference: https://wdcacdst.org/ — grouped navigation over a full-width photographic carousel, large type, crimson/white identity, followed by events, president, impact, image collections, legacy, testimonials and partners. The new foundation uses its photographic emphasis and generous spacing without copying text, code, or photographs. Desktop appearance was inspected; reference hover animations and mobile behavior were not fully audited.

Chapter: https://www.dstmonroealumnae.org/ — logo, chapter group photograph, navigation, president welcome, programs and contact information were reviewed. Existing verified destinations: `/about-us`, `/portfolio`, `/gallery`, `/membership`, `/contact`. All remain on the Wix domain. The About page verifies the March 25, 1955 charter; no numerical impact claims are used. The homepage legacy paragraph mentions the nation’s capital and founders in wording inconsistent with Monroe, so it is intentionally excluded. The homepage and some older pages list different email addresses; this foundation uses the current homepage address. Confirm current leadership, service area and editorial copy before a later content milestone.

Asset sources:
- Logo: https://static.wixstatic.com/media/b376c6_7a501cc221344a138dae209e69f7a8b9~mv2.png
- Group photograph: https://static.wixstatic.com/media/b376c6_6a2580f95fd444d8b28ab73945826302~mv2.jpg

These are chapter assets from the existing site. Confirm publication approval and preferred high-resolution originals before launch. Hero headline and introduction are proposed editorial copy, not quotations. The remaining-section area is explicitly a preview placeholder; no events, statistics or leadership details are fabricated. No Washington assets are used.

## Verification and known issue

Production build prerenders `/` statically. Desktop and 390px mobile layouts were reviewed in the browser, with no horizontal overflow on mobile. Menu toggle, Enter to open the About dropdown, Escape to close it and Escape to close the menu were checked. Lint and TypeScript checks are run separately from the build.

`npm audit --omit=dev` reports zero vulnerabilities. Full audit reports five high-severity entries in a single development-tool dependency chain (`eslint-config-next` → `fast-glob` → `micromatch` → `braces`). The reported advisory is https://github.com/advisories/GHSA-vfj7-8cjw-p6xm; npm currently offers no patched braces release. Recheck before deployment; do not apply the suggested forced Next ESLint downgrade without compatibility review.

## Future milestones

After review and explicit approval: upcoming events, president welcome, programs/community impact, and chapter legacy. Obtain approved assets and current content first. Sanity, database features, additional routes and production deployment are deferred. Vercel is the intended host; no deployment, Wix modification, DNS change, or domain change has been performed. Establish the deployment URL before adding canonical and social-preview URLs.
