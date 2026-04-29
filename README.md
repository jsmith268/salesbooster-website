# SalesBooster

Marketing website for SalesBooster — a pre-launch revenue platform for home-service operators (HVAC, plumbing, electrical, garage door).

The site is in design-partner mode: every primary CTA drives to a waitlist or an early-access application. Public sales are not yet open.

---

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with OKLCH-based design tokens
- **shadcn/ui** primitives (Radix under the hood)
- Custom SVG illustration system (no stock graphics, no emojis as iconography)
- Self-hosted fonts via `next/font`: Fraunces (display), Inter (body), JetBrains Mono (labels)

---

## Repository layout

```
.
├── web/                       # The deployable Next.js app — Vercel root directory
│   ├── src/
│   │   ├── app/               # App Router routes (home, products, pricing, about, roi, integrations, waitlist, apply, legal)
│   │   ├── components/        # site/, ui/, marks/, forms/
│   │   └── lib/               # site-config (single source of truth for content), utils
│   ├── public/
│   └── package.json
├── skills/                    # Claude Code skills used during build (design system + voice + graphics)
├── initial-website-draft/     # Original single-file JSX prototype, kept for reference
├── planning.md                # Phased build plan + completion notes
└── README.md
```

---

## Local development

The app lives under `web/`.

```bash
cd web
pnpm install
pnpm dev          # starts on http://localhost:3000 (or pass --port 3010 to avoid conflicts)
```

Production build:

```bash
pnpm build
pnpm start
```

---

## Deploying to Vercel

1. Import this repository on [vercel.com/new](https://vercel.com/new).
2. **Root Directory** → set to `web`. Vercel will autodetect Next.js.
3. **Build & Output**: leave defaults (`pnpm build`, `.next`).
4. **Environment Variables**: none required for v1. Form handlers in `/waitlist` and `/apply` are placeholder client-side stubs — wire to a backend (Resend + Neon recommended) in a follow-up commit.
5. **Domain**: assign once the deploy is green.

Once **Root Directory** is set to `web`, Vercel reads `web/package.json` directly — no `vercel.json` is needed for this project.

---

## Status

| Area | State |
|---|---|
| Visual design | Production-ready |
| Copy | Production-ready (anti-AI voice pass complete) |
| Mobile + tablet responsive | Verified at 375 / 414 / 768 / 1024 / 1280 / 1440 |
| Accessibility | Viewport, focus rings, aria-expanded on nav, role=radiogroup on choice fields, ol/li on timeline, 44px+ touch targets |
| SEO | Per-page metadata, OpenGraph, sitemap.xml, robots.txt |
| Forms backend | **Placeholder** — submit handlers are client-side only. Wire to Resend + Neon (or equivalent) before public launch |
| Analytics | Not yet wired |

See `planning.md` for the full phased build log and what's deferred.
