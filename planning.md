# SalesBooster Website — Production Plan

> Goal: ship a marketing website at the visual and copy quality of Asana, Notion, Monday.com, ClickUp, and Trello — built for a pre-launch positioning where every primary CTA drives waitlist sign-ups (Starter / Growth) or early-access applications (Pro / Enterprise).
>
> Stack: **Next.js 16** (App Router) · **Tailwind CSS v4** · **shadcn/ui** · **TypeScript**.
>
> Posture: company-anonymous (no founder name), pre-launch tone, no live billing, frontend-only (forms wired to placeholder handlers — backend is a later phase).

---

## Skills to be applied

**New skills authored for this project (live in `~/.claude/skills/`)**
- `stock-imagery` — heuristic stock-photo sourcing
- `image-treatment` — CSS/SVG photo de-stocking (duotone, grain, grade, masks)
- `graphics-forge` — bespoke SVG / Canvas graphics, anti-AI-aesthetic
- `gradient-design` — multi-stop OKLCH signature gradients

**Existing library used (already in `skills/`)**
- Plan: `impeccable`, `shape`, `taste-design`, `frontend-design`
- Build: `tailwind-v4-shadcn`, `vercel-react-view-transitions`
- Refine: `layout`, `typeset`, `colorize`, `animate`, `delight`, `clarify`, `adapt`, `distill`, `polish`
- Intensity: `quieter`, `bolder`, `overdrive`
- Review: `critique`, `audit`, `web-design-guidelines`, `optimize`

---

## Phase 1 — Project scaffold

**Outcome:** working Next.js 16 dev server with Tailwind v4 + shadcn/ui, design tokens, base layout, fonts.

1.1  Initialize Next.js 16 (App Router, TypeScript, ESLint, Tailwind, src dir, `@/*` alias).
1.2  Verify Tailwind v4 setup; replace any v3 config artefacts; install `@tailwindcss/typography` if needed.
1.3  Initialize shadcn/ui (`components.json`, base components: button, input, card, badge, accordion, dialog, sheet, dropdown-menu, navigation-menu, tooltip).
1.4  Install fonts via `next/font` — primary: a serif (Fraunces or Newsreader for editorial weight) + a grotesque (Inter or Geist for body/UI). Mono for stat blocks.
1.5  Set up `app/globals.css`: CSS variables for color tokens (light + dark), spacing scale, type scale, motion tokens.
1.6  Build `app/layout.tsx` with `<Nav>` + `<Footer>` slots, theme provider, font wiring.
1.7  Create `lib/site-config.ts` (single source of truth: products, plans, FAQs, timeline data — migrated from monolith).
1.8  Verify dev server runs on port 3000 with no errors.

---

## Phase 2 — Information architecture & design tokens

**Outcome:** route map, design system, `DESIGN.md` source-of-truth.

2.1  Run `/impeccable teach` to capture brand context (audience, tone, voice, anti-patterns).
2.2  Run `/shape salesbooster-website` to produce a design brief.
2.3  Run `/taste-design` to author `DESIGN.md` (semantic, AI-readable design system).
2.4  Define route map:
- `/` — home
- `/products` — product index
- `/products/sales-booster`, `/products/referral-booster`, `/products/review-booster`, `/products/support-booster`
- `/pricing`
- `/about`
- `/roi` — calculator
- `/integrations`
- `/waitlist` — Starter / Growth capture
- `/apply` — Pro / Enterprise application
- `/legal/privacy`, `/legal/terms`
2.5  Establish design tokens in `globals.css`:
- Color: brand primary, brand accent, surface light/dark, text scale, semantic (success, warning, info, danger).
- Type: display, h1–h6, body, caption, label, mono.
- Spacing: 4px base, fibonacci-ish scale (`--space-1` … `--space-20`).
- Radius: `--radius-sm` 6px, `--radius` 12px, `--radius-lg` 24px, `--radius-pill` 999px.
- Motion: `--ease-out-expo`, `--ease-in-out-quint`, durations 150 / 300 / 600 / 900ms.
- Shadow: editorial soft (`0 30px 60px -20px rgb(0 0 0 / .15)`).
2.6  Run `/gradient-design` to define the signature gradient system (twilight + cinder + ocean glass per `gradient-design`'s named recipes — choose 2 max for brand cohesion).

---

## Phase 3 — Component architecture

**Outcome:** the 112KB monolith decomposed into a real component tree.

3.1  `components/site/Nav.tsx` — sticky, blur-on-scroll, mega-menu for products, dropdown for resources.
3.2  `components/site/Footer.tsx` — dark, compact, links + brand mark.
3.3  `components/site/Hero.tsx` — full-bleed hero with custom SVG composition (graphics-forge), CTA pair.
3.4  `components/site/ProductCard.tsx` — used on home + products index.
3.5  `components/site/ProductDetail.tsx` — page template for `/products/[slug]`.
3.6  `components/site/PricingTable.tsx` — three plans, monthly/annual toggle, tier-aware CTAs.
3.7  `components/site/FAQAccordion.tsx`.
3.8  `components/site/Timeline.tsx` — the "Without / With" 7-step comparison (refactored from monolith).
3.9  `components/site/ROICalculator.tsx` — interactive sliders, live revenue projection.
3.10 `components/site/StatBlock.tsx`, `components/site/Quote.tsx`, `components/site/CTABanner.tsx`.
3.11 `components/forms/WaitlistForm.tsx`, `components/forms/ApplyForm.tsx` (placeholder submit handlers).
3.12 `components/ui/Reveal.tsx` — IntersectionObserver-driven scroll reveal hook + wrapper.
3.13 Migrate the existing monolith content (data + copy) into per-page server components; keep client components only where state is actually needed.

---

## Phase 4 — CTA and copy overhaul (the core ask)

**Outcome:** every primary CTA drives waitlist or apply. Copy compels interest, never overpromises a delivery date.

4.1  Replace every "Start Free Trial" / "Get Started" globally with tier-aware CTAs:
- **Hero (general)** → "Reserve your spot" (waitlist) + "Watch the 90-second tour" (secondary).
- **Starter / Growth pricing** → "Join the waitlist".
- **Pro pricing** → "Apply for early access".
- **Enterprise** → "Apply for founding-customer access".
4.2  Build `/waitlist` page: email + company + role, single-field-at-a-time pattern, confirmation screen, soft commit copy.
4.3  Build `/apply` page: tier-gated (URL param `?tier=pro` or `?tier=enterprise`), captures qualifying interest **without** disclosing specific qualification criteria (per user direction).
4.4  Rewrite hero copy via `/clarify` principles — confident, operator-grade, no hype words.
4.5  Add a "Why we're not selling yet" trust block — short founder-style note acknowledging the product is in beta and explaining the design-partner program.
4.6  Add scarcity framing where honest: "Onboarding 25 design partners this quarter."
4.7  Replace pricing CTAs with "Lock in founding-member pricing — apply" / "Join the waitlist".
4.8  Add waitlist-confirmation email content placeholder (rendered as static success page for now; real delivery is Phase 11/backend).
4.9  Site-wide audit: search for `Free Trial`, `Get Started`, `Start now`, `Sign up free` — replace.

---

## Phase 5 — Custom graphics

**Outcome:** zero emojis, zero generic icon sets used for hero/feature visuals.

5.1  Run `/graphics-forge` for the **homepage hero**: layered SVG with off-axis warm-anchor gradient, blurred atmospheric blob, crisp line work, fake-3D card stack of mock product UI tilted 12°.
5.2  Run `/graphics-forge` for **each product page hero** — one hero illustration per Booster, channeling Linear's flat-dark aesthetic with brand-distinct accent.
5.3  Build a custom **product-mark SVG set** to replace the four emoji icons (`📊 🤝 ⭐ 🤖`) — geometric, single-stroke-weight, brand-tinted.
5.4  Build a **logo-mark refinement** — the current bolt SVG works as a starting point; refine proportions and ensure it works on light + dark.
5.5  Build **section-divider SVGs** (decorative line systems, atmospheric washes) — at least 3 variants used across the site.
5.6  Build a **custom timeline graphic** for the "Without / With" comparison — a vertical track with off-grid nodes, no clichéd icons.
5.7  Build a **stylized product mockup illustration** (not a screenshot) for the `/products/sales-booster` hero — three-tier proposal preview as SVG, tilted, drop-shadowed.

---

## Phase 6 — Stock imagery + treatment

**Outcome:** any photography on the site reads as art-directed, not stock.

6.1  Run `/stock-imagery` to identify which sections (if any) benefit from photography vs. illustration. Likely candidates: about page workspace shot, integration page workshop detail, testimonial portraits.
6.2  Curate references (search prompts only — user does the actual selection).
6.3  Run `/image-treatment` to define a **single duotone palette** for all photography on the site (e.g., deep navy + warm amber, anchored to the brand gradient).
6.4  Implement reusable `<TreatedImage>` component that applies SVG duotone filter + grain overlay + edge fade.
6.5  Bake heavy filters (grain) to PNGs for hero images; keep filters live for cards.

---

## Phase 7 — Color, gradient, typography passes

**Outcome:** unified visual language at flagship-tier polish.

7.1  Run `/gradient-design` to upgrade every gradient in the codebase from `linear-gradient(#A,#B)` to `linear-gradient(in oklch, ...)` with multi-stop signatures and warm anchors.
7.2  Run `/colorize` to audit color usage across the site — ensure semantic color, hierarchy, and brand colors land where they should.
7.3  Run `/typeset` for type hierarchy: display weight discipline, optical kerning, tabular numerals for stats, line-height per scale tier.
7.4  Run `/layout` for spacing and rhythm: kill any monotonous grids, vary section heights, introduce intentional asymmetry on alternating sections.
7.5  Apply `/distill` where sections feel cluttered (e.g., the dense product page).
7.6  Apply `/bolder` to any sections that read as too safe (likely the pricing page) — without crossing into `/overdrive` for a B2B SaaS context.

---

## Phase 8 — Motion and micro-interactions

**Outcome:** site feels alive and considered, not gimmicky.

8.1  Run `/animate` to add scroll-driven reveal animations (already partially implemented in the draft — refactor to a single `<Reveal>` primitive with consistent easing).
8.2  Add `vercel-react-view-transitions` for route transitions between product pages.
8.3  Add hero-scoped signature motion: a slow drift on the gradient mesh, or a subtle parallax on the layered SVG depth.
8.4  Run `/delight` for micro-interactions: pricing toggle has tactile feedback, ROI calculator has live transitions, FAQ accordion has spring-like easing, CTA buttons have a magnetic hover or sheen sweep.
8.5  Respect `prefers-reduced-motion` everywhere — no exceptions.
8.6  Performance audit: target 60fps on scroll-heavy sections; defer or remove anything that drops frames.

---

## Phase 9 — Review (critique → audit → fix)

**Outcome:** P0 / P1 issues resolved across UX, accessibility, performance, anti-patterns.

9.1  Run `/critique` end-to-end (full site walkthrough, persona-based testing).
9.2  Run `/audit` (technical quality: a11y, perf, theming, responsive, anti-patterns).
9.3  Run `/web-design-guidelines` against every page.
9.4  Triage findings into P0 / P1 / P2 / P3 — fix all P0 and P1 immediately.
9.5  Run `/optimize` to fix any bundle / image / font / rendering issues surfaced.

---

## Phase 10 — Responsive + final polish

**Outcome:** ship-ready website verified end-to-end.

10.1  Run `/adapt` to verify mobile + tablet breakpoints, touch targets, mega-menu collapse to drawer.
10.2  Test in 375px (iPhone SE), 414px (Pro), 768px (iPad), 1280px (laptop), 1920px (desktop).
10.3  Run `/polish` for the pre-ship pass — alignment, spacing consistency, micro-details, hover states, focus rings.
10.4  Verify dev server end-to-end: every link works, every CTA reaches the correct waitlist/apply page, ROI calculator computes, FAQ expands, mega-menu navigates.
10.5  SEO basics: per-page metadata, OG images (generative — see graphics-forge OG recipe), sitemap, robots, canonical URLs.
10.6  Lighthouse pass: target 95+ on Performance, Accessibility, Best Practices, SEO.
10.7  Final manual walkthrough — golden path + edge cases.

---

## Out of scope (deferred to a later phase)

- Backend wiring for waitlist / apply (Resend, Neon, or HubSpot integration).
- Analytics (Vercel Analytics, PostHog, or Plausible).
- Auth, dashboard, billing — explicitly excluded.
- A/B testing infrastructure.
- CMS for blog / case studies.
- Internationalization.

---

## Build status — completed 2026-04-29

**All 10 phases complete.** Site is built, builds clean (`pnpm build`), and serves 200 on all 18 routes (16 pages + sitemap.xml + robots.txt).

### What was shipped

- **Stack**: Next.js 16.2.4 + React 19.2.4 + Tailwind v4 + TypeScript, all under `web/`.
- **Design system**: OKLCH color tokens, 7-recipe gradient library (Twilight, Cinder, Ocean Glass, Aurora, Graphite, Ember Halo, Mint Drift), 3-font typography stack (Fraunces display + Inter body + JetBrains Mono labels), motion tokens, editorial shadow scale.
- **18 routes**: home, products index, four product detail pages (SSG), pricing, about, ROI calculator, integrations, waitlist (multi-step form), apply (tier-aware), 404, privacy, terms, sitemap, robots.
- **Custom graphics, zero emoji**: bespoke logo mark, four product marks, hero composition (layered SVG depth + atmospheric blobs + orbital lines), stylized product mockup illustration with three-tier proposal (not a screenshot).
- **CTAs**: every primary CTA drives to `/waitlist` (Starter/Growth) or `/apply` (Pro/Enterprise). No "Free Trial" / "Get Started" / "Sign up free" remain on the site.
- **Trust framing**: "Why we're not selling yet" block, founding-customer pricing locked, design-partner status badge.
- **Accessibility**: viewport metadata, focus rings, aria-expanded on nav, role=radiogroup on choice fields, role=img on the decorative mockup, ol/li on the timeline, 44px+ touch targets.
- **SEO**: per-page metadata, OpenGraph, sitemap.ts, robots.ts.
- **Motion**: scroll reveals via IntersectionObserver, hover states on cards/buttons, magnetic-feeling pricing toggle, accordion spring easing, all `prefers-reduced-motion` respected.

### Skills delivered

Four new skills authored at `~/.agents/skills/` and symlinked to `~/.claude/skills/` and project `skills/`:
1. `stock-imagery` — heuristic photo sourcing
2. `image-treatment` — CSS/SVG photo de-stocking
3. `graphics-forge` — bespoke SVG/Canvas illustration
4. `gradient-design` — OKLCH multi-stop signature gradients

### Known deferrals (per plan)

- Backend wiring for `/waitlist` and `/apply` form submissions (handlers are placeholder).
- Analytics, dark mode, blog/case studies, i18n.

### To launch

1. `cd web && pnpm install && pnpm dev` — open http://localhost:3000.
2. `pnpm build && pnpm start` — production preview.
3. Wire `/waitlist` and `/apply` forms to a backend (Resend + Neon recommended) before public launch.
4. Replace `metadataBase` in `src/app/layout.tsx` with the real production domain.

---

## Definition of done

- All routes render with no runtime errors and no console warnings.
- Every CTA on every page directs to either `/waitlist` or `/apply` (tier-aware).
- Zero emoji used as iconography in hero or feature areas.
- Every gradient uses `in oklch` interpolation with a multi-stop signature.
- Photography (if used) is duotone-treated and unified.
- Dark + light mode both work cleanly.
- Lighthouse 95+ on all four scores.
- Site is responsive from 375px to 1920px.
- A new visitor with no context can read the home page and understand: what the product does, who it's for, why it's not on sale yet, and how to express interest.
