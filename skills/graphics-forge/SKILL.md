---
name: graphics-forge
description: Hand-author SVG/Canvas custom graphics — isometrics, hero illustrations, abstract product mockups, decorative marks — that look intentionally designed, not AI-generated. Use when the user mentions custom graphics, custom illustration, hero art, product mockups, replacing emoji icons, or wanting visuals that don't look AI-generated.
version: 1.0.0
user-invocable: true
argument-hint: "[target component or section]"
---

Author bespoke SVG and Canvas graphics that read as designed, not generated. This skill produces inline code (SVG, CSS, occasionally minimal JS) that the user can drop into a Next.js / React project. It is ruthlessly anti-AI-aesthetic.

## MANDATORY PREPARATION

Invoke `/impeccable` and follow its **Context Gathering Protocol**. Additionally gather: brand palette (tokens), where the graphic will live (hero / section / icon / divider), required size, dark/light surface, motion permission. If a `DESIGN.md` exists from `/taste-design`, treat it as authoritative.

For palette/gradient work, partner with `/gradient-design`. For accompanying photography, partner with `/stock-imagery` and `/image-treatment`.

---

## Core principles

1. **Asymmetry over symmetry.** AI-generated illustration centers everything. Push subjects off-axis; leave one quadrant empty.
2. **Occlusion implies depth.** Shapes overlapping shapes (with intentional partial hiding) read as composed; floating shapes read as generated.
3. **Off-grid placement.** Snap to a grid for layout, but rotate or nudge individual elements 1–3° off true. Perfection is the AI tell.
4. **Limited palette discipline.** 3–5 colors maximum. AI illustrations use 12+ pastel gradients.
5. **Stroke OR fill, rarely both.** Pick a system per illustration and commit.
6. **One stroke weight per illustration** (e.g., 1.5px). Vary length, not weight.

## The "AI illustration" look — refuse to produce these

The AI-illustration aesthetic comes from a fixed set of moves. Reject every one:

1. Pastel gradients on every shape.
2. Perfect isometric cubes stacked in a corner.
3. Generic floating "tech" icons (clouds, gears, lightbulbs) arranged radially.
4. Glassy spheres with rainbow refractions.
5. Bezier curves that all bend the same way at the same radius.
6. Midjourney-style "3D plasticine" rendering.
7. Centered hero subject with radial bloom behind it.
8. Tiny floating sparkles, abstract dots, "magic" glints.
9. Gradient mesh on every surface, no flat fills.
10. Generic "diversity" illustration of stylized people with oversized heads.

If the brief or output drifts toward any of these, reframe.

## Counter-moves (what to do instead)

- Flat fills, OR a **single gradient direction** consistent across the whole composition.
- Real perspective vanishing points (not isometric defaults).
- Specific subjects (a particular tool, a particular UI fragment) — not generic icons.
- Off-center anchoring (rule of thirds or extreme edge placement).
- Varied curve weights (not all bezier handles equal).
- Hard edges next to soft atmospherics — the **contrast** is the depth cue.

## Reference systems (study before authoring)

| Brand | Aesthetic | When to channel it |
|---|---|---|
| **Linear** | Flat, dark, abstract orbital + gridline graphics; gradient washes behind crisp geometric line work; restrained palette of black, violet, teal | Premium B2B, infrastructure tools, "method" sections |
| **Stripe** | Signature multi-stop gradient blobs on light backgrounds, vector product mockups (never real screenshots), conic gradients as light sources | Light-mode hero, financial/operational software |
| **Vercel** | Geometric brutalism: grayscale, sharp triangles/circles, hard edges, monospace labels, generative OG images | Developer-tool aesthetic, technical depth |
| **Notion** | Hand-drawn doodle, imperfect strokes, friendly characters, off-white paper backgrounds | Friendly, accessible, knowledge/productivity |
| **Figma** | Iso-grid schematic illustrations of "fake UI" with confident color blocking | Showing software workflows |
| **Arc** | Playful 3D-ish blobs, soft shadows, candy color | Consumer-leaning, expressive products |

Pick one as the **dominant** reference per project. Mixing reads as confused.

## Composition recipes

### Recipe 1 — Layered SVG depth (atmospheric hero)

```html
<svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <radialGradient id="sun" cx="70%" cy="30%">
      <stop offset="0%"  stop-color="#ffb37c"/>
      <stop offset="60%" stop-color="#ff5e8a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="600" fill="#0b0a1a"/>
  <circle cx="840" cy="180" r="320" fill="url(#sun)"/>
  <g filter="blur(40px)" opacity="0.6">
    <ellipse cx="300" cy="500" rx="400" ry="80" fill="#5b3fff"/>
  </g>
  <g stroke="#fff" stroke-opacity="0.13" fill="none" stroke-width="1">
    <path d="M0,420 Q400,380 800,440 T1200,420"/>
    <path d="M0,460 Q400,420 800,480 T1200,460"/>
  </g>
</svg>
```

Three layers: hard ground, blurred atmospheric blob, crisp line work on top. The **blur + sharp** combo is the depth cue. Always stack at least three depth layers.

### Recipe 2 — CSS perspective fake-3D (cheaper than WebGL)

```css
.card-stack {
  transform-style: preserve-3d;
  transform: perspective(1200px) rotateX(18deg) rotateY(-22deg);
}
.card-stack > * { transform: translateZ(var(--z)); }
```

Stack flat SVG planes at varied `--z` for a Linear-style floating UI exploded view.

### Recipe 3 — Conic gradient as light

```css
.lit {
  background: conic-gradient(from 220deg at 70% 30%,
    #ff6b9d, #c54bdb, #5b3fff, #00d4ff, #ff6b9d);
  filter: blur(60px);
}
```

Place behind a crisp-edged foreground for Stripe-style luminance. **Always blur conic gradients heavily** — sharp conics look like color wheels.

### Recipe 4 — Blur-stacked atmospherics

Layer 3 versions of the same gradient with `filter: blur(N)` at increasing N (8px, 24px, 80px) and decreasing opacity. Reads as volumetric haze.

### Recipe 5 — Product mockup as illustration

Never screenshot a real app for marketing. Build it as SVG:

- Headers, key data points, brand-colored bars.
- Strip text where possible; replace with abstract pill shapes.
- Use **1.5–2× the line weight** of the real UI for legibility at hero scale.
- Tilt 8–15° and add a soft drop-shadow.
- Layer two or three slightly offset variants for the "stack of screens" hero.

### Recipe 6 — Decorative line system (orbital / gridline)

Linear-style: thin, precise lines suggesting scale and method. Vary path lengths and radii; do not space them evenly. One filled accent shape (a node, a small chip) anchors the system.

## Decision matrix — SVG vs Canvas vs Lottie vs WebGL

| Use case | Tech | Why |
|---|---|---|
| Static hero, icon, mockup, divider, decorative mark | **SVG** | Scales, accessible, cheap. Default. |
| Particle systems, generative noise fields, >500 animated nodes | **Canvas** | DOM can't handle that node count |
| Multi-step character animation exported from After Effects | **Lottie** | Designer hand-off; avoid for ambient hero loops (heavy) |
| Genuine 3D (Stripe Sessions hero, Vercel ship) | **WebGL / three.js** | Overkill for 90% of marketing pages |

When in doubt, SVG.

## Color, stroke, fill discipline

- Limit gradients to **backgrounds and atmospheric layers**; foreground shapes use flat fill.
- One stroke weight per illustration. One linecap (`round` OR `square`) consistently.
- If using multiple colors, define them as CSS variables (`--ink-1`, `--ink-2`, …) so they swap with theme.
- Test the illustration in **both** light and dark mode if the site supports both. AI illustrations only ever look right in one mode.

## Performance

- Inline SVG that is reused → define `<symbol>` once, reference with `<use>`.
- Filters (`feTurbulence`, `feGaussianBlur`) are expensive — bake to PNG for hero-scale assets.
- Animated SVGs: prefer CSS animations over SMIL.
- Lottie files: keep under 100KB; lazy-load below the fold.

## Output format — what to deliver

When invoked, deliver:

1. **The graphic itself** — inline SVG or a React component, drop-in ready.
2. **A composition note** — what the graphic communicates, why this composition, which reference brand it channels.
3. **Color tokens used** — referenced as CSS variables, not hardcoded.
4. **Motion notes** (if applicable) — what should animate, how subtle, what triggers.
5. **Anti-AI checklist confirmation** — explicitly note which AI-illustration moves were rejected.

## Decision rule

If the graphic could be lifted into a print magazine and still feel intentional — ship it. If it only works because of motion/glow on a website, it is compensating.
