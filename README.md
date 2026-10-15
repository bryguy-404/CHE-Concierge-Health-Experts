# Concierge Health Experts

Four-page Astro website preview for ConciergeHealthExperts.com, prepared for deployment as static assets on Cloudflare. The approved homepage design now extends to Employers, Associations, and Individuals & Families.

## Local commands

- `npm install`
- `npm run dev` — Astro development server (see the folder-name limitation below)
- `npm run check` — Astro and TypeScript diagnostics
- `npm run build` — static output in `dist/`
- `npm run preview` — preview the static build

Scripts invoke Astro through Node because the project folder contains a colon, which otherwise breaks npm's executable PATH lookup on macOS. The installed Vite also rejects source and font paths containing a colon in its development server. For this checkout, use `npm run build` followed by `npm run preview -- --port 4321`; rebuild after source edits. This serves the actual production output with all styles and fonts, while keeping Vite's filesystem protections intact. A future checkout in a folder without a colon can use normal development mode.

## Design and source decisions

- Use Luke's `CHE FINAL .docx` for the four-page content architecture and FAQs, with the October 3 meeting recap guiding the simple audience choice and provider handoff.
- Brand colors: navy `#021652`, teal `#49B7C4`, blue `#214EA2`, magenta `#CC3366`, cloud `#F3F5F8`, white.
- Sora headings and Inter body typography are served locally from Fontsource packages.
- Logos and favicon are original assets from `CHE_Complete_Logo_Package.zip`. The package README identifies the horizontal full-color asset for website headers. The supplied PNG is displayed to preserve the exact lettering; the original SVG is also retained.
- The package's logo differs from the illustration in the style guide. This preview follows the production package; confirm that selection with Luke before launch.
- The lifestyle image is an AI-generated placeholder, not a real patient, clinician, or testimonial. Optimized WebP versions are served at responsive sizes.
- Brand documents are kept in ignored `source-materials/`, outside the public build.

## Current behavior

- Homepage cards, header links, footer links, and related-audience links navigate to `/employers`, `/associations`, and `/individuals-and-families`.
- Each audience page includes the supplied audience-specific benefits, services, FAQs, and conversion copy. The employer page covers the Lean Health Plan; the association page explains group arrangements and individual opt-in; the individual page includes college-student support.
- Employer and association calls to action use the exact provider destinations forwarded by Luke. Both returned HTTP 200 and displayed inquiry forms during browser verification on October 5, 2026. No form submissions were made.
- Following the October 3 meeting's provider-handoff direction, inquiry forms are hosted by Amaze. The document's local form and thank-you-page copy is therefore not implemented as a separate local submission flow. No Resend integration is needed for this approach.
- The individual/family page's Enroll now and Continue to secure enrollment buttons use the exact Amaze reseller URL Suzu supplied and Luke forwarded on October 13. The `referencecode=ACLIDL5H` query parameter is preserved. The enrollment FAQ now describes the active handoff to Amaze. All provider destinations are maintained in `src/data/site.ts`.
- Tentative prices are omitted as instructed in the source document. Current pricing and eligibility are confirmed through Amaze.
- FAQs use native disclosure elements. The mobile menu supports Escape, focus restoration, outside-click dismissal, and closing after choosing a link.
- Unique titles, descriptions, canonical URLs, visible audience-page updated dates, Organization/WebSite structured data, and internal-page breadcrumbs are implemented.
- No local payments, patient records, or email delivery are implemented.
- Preview pages are deliberately `noindex, nofollow`. Remove this before public launch, after content and routing are confirmed.

## Source records

The supplied brand guide, website copy, and private email references are retained locally in ignored `source-materials/`. They are not included in this repository or the website build.

## Remaining before launch

1. Obtain Luke's final website approval and confirm the publication details listed in the source document: pricing/eligibility, availability, clinical provider disclosures, service limitations, Lean Health Plan wording, claims, and inquiry follow-up ownership. The site remains a non-indexed preview pending these confirmations.
2. Supply approved privacy/terms material and confirm the production domain, logo, and placeholder imagery. Add the production sitemap and indexing settings when launch details are final.
3. Connect the main domain to the existing Cloudflare Pages deployment and verify the live domain and provider handoffs. All three audience destinations are now connected. Future educational articles from the document are a later content phase, not missing pages in the current four-page scope.

## Cloudflare

`wrangler.jsonc` describes a static Workers deployment of `dist/`. No Node.js server or framework adapter is required for this static website. The same `dist/` output is deployed through Cloudflare Pages at https://che-concierge-health-experts.pages.dev/. The GitHub `main` branch supplies the site source; the main-domain launch remains pending.

## Verification for this milestone

- Astro check: zero errors, warnings, or hints.
- Production static build: passed.
- Browser checks cover all four pages at 320, 390, 768, and 1440 pixels, image/font loading, metadata, structured data, links, and horizontal overflow.
- Interaction checks cover homepage-to-audience navigation, breadcrumbs, FAQ mouse/keyboard toggles, mobile menus, Escape focus restoration, anchor targets, and the custom 404 response. The October 15 enrollment update adds the active individual/family handoff with the supplied reseller reference code.
- Browser screenshots and verification results are in ignored `qa/`. The production-build preview remains available on port 4321.
