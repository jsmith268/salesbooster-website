---
name: image-treatment
description: De-stock photography using CSS and SVG techniques (no APIs) so images feel custom and brand-coherent. Covers duotone, film grain, color grading, depth/blur masking, glassmorphism, gradient fades. Use when the user mentions photo treatment, duotone, film grain, making images feel custom, removing the stock photo look, or unifying photography with brand palette.
version: 1.0.0
user-invocable: true
argument-hint: "[target image or component]"
---

Transform raw stock photography into bespoke, brand-coherent imagery using CSS and SVG primitives only — no external services, no API calls. This skill produces inline SVG filters, CSS classes, and treatment recipes the user can paste into a Next.js / Tailwind / shadcn project.

## MANDATORY PREPARATION

Invoke `/impeccable` and follow its **Context Gathering Protocol**. Additionally gather: brand palette (specifically two colors for duotone — a shadow color and a highlight color), surface this image will sit on (light/dark), purpose (hero / feature card / divider / testimonial portrait), and whether motion is acceptable.

If the user is also sourcing imagery, run `/stock-imagery` **before** this skill so candidate selection accounts for treatment.

---

## Core principles

1. **Always treat.** Untreated stock is the fastest signal of an unfinished or low-budget site. There is no exception.
2. **Restrict the palette.** A treated image should contribute at most 2–3 hues to the page.
3. **Add texture, subtract detail.** Grain and gentle blur make photos feel cinematic; sharpness and saturation make them feel stocky.
4. **Layer effects.** A duotone alone is dated (2018-era). 2026 = duotone + grain + gradient fade + subtle blur, all subtle.
5. **Cinema, not Instagram.** The goal is editorial — controlled, low contrast, considered — not heightened or reactive.

## Treatment recipes

Each recipe is a complete, paste-ready snippet. Pick recipes a user actually needs; do not dump all of them.

### Recipe 1 — Duotone via SVG filter (preferred — full control)

```html
<!-- Define once, reuse via filter:url(#...) -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="duotone-cinder" color-interpolation-filters="sRGB">
    <feColorMatrix type="matrix" values="
      0.33 0.33 0.33 0 0
      0.33 0.33 0.33 0 0
      0.33 0.33 0.33 0 0
      0    0    0    1 0"/>
    <feComponentTransfer>
      <feFuncR tableValues="0.05 0.95"/>
      <feFuncG tableValues="0.02 0.55"/>
      <feFuncB tableValues="0.10 0.40"/>
    </feComponentTransfer>
  </filter>
</svg>

<img src="/hero.jpg" style="filter:url(#duotone-cinder)" />
```

The first matrix desaturates. `feFuncR/G/B tableValues="<shadow> <highlight>"` remaps shadows to the first color and highlights to the second. Adjust the six values to recolor.

### Recipe 2 — Duotone via CSS blend modes (lightweight, less control)

```css
.duotone {
  position: relative;
  isolation: isolate;
}
.duotone img {
  filter: grayscale(1) contrast(1.1);
  display: block;
  width: 100%;
}
.duotone::before,
.duotone::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.duotone::before { background: #1a0b2e; mix-blend-mode: lighten; }
.duotone::after  { background: #ff6b35; mix-blend-mode: multiply; }
```

Use this when SVG filters are unavailable or when you want a quick prototype. Slight quality loss vs. SVG.

### Recipe 3 — Film grain via SVG turbulence

```html
<svg width="0" height="0" aria-hidden="true">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/>
    <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.15 0"/>
  </filter>
</svg>
```

```css
.grain-overlay {
  position: relative;
}
.grain-overlay::after {
  content: "";
  position: absolute; inset: 0;
  filter: url(#grain);
  mix-blend-mode: overlay;
  pointer-events: none;
  opacity: 0.5;
}
```

`baseFrequency` 0.7–1.2 = fine grain; 0.3 = chunky. **For hero images, bake the grain to a 256×256 PNG** and tile it — running SVG turbulence on a full-bleed hero is expensive on mobile.

### Recipe 4 — Cinematic color grade

```css
.cinematic {
  filter:
    saturate(0.85)
    contrast(1.08)
    brightness(0.95)
    sepia(0.15)
    hue-rotate(-8deg);
}
```

The `sepia(0.15) hue-rotate(-8deg)` pair is the "teal-and-orange" trick at low intensity. Pair with a warm gradient overlay for richer effect.

### Recipe 5 — Depth / blur masking (fake tilt-shift)

```css
.depth-mask {
  -webkit-mask-image: radial-gradient(ellipse at 30% 50%, #000 30%, transparent 80%);
          mask-image: radial-gradient(ellipse at 30% 50%, #000 30%, transparent 80%);
  filter: blur(0.5px);
}
```

Use a sharp foreground layer and a blurred background layer of the same image to fake depth-of-field. Cheap, effective.

### Recipe 6 — Glass overlay (UI on photo)

```css
.glass {
  background: color-mix(in oklch, white 12%, transparent);
  backdrop-filter: blur(24px) saturate(1.4);
  border: 1px solid color-mix(in oklch, white 18%, transparent);
  box-shadow: 0 30px 60px -20px rgb(0 0 0 / 0.4);
}
```

For dark-on-light backgrounds, swap `white` for `black` in the `color-mix` calls.

### Recipe 7 — Gradient edge fade

```css
.fade-edges {
  -webkit-mask-image: linear-gradient(180deg,
    transparent 0%, #000 12%, #000 88%, transparent 100%);
          mask-image: linear-gradient(180deg,
    transparent 0%, #000 12%, #000 88%, transparent 100%);
}
```

Bleeds the image into the page background — eliminates the "photo on a card" feel for editorial layouts.

## Cropping / composition rules

- **Aspect ratios**: hero `21/9` or `16/7`, never square. Editorial sections `4/5`. Testimonial portraits `3/4`. Avoid `1/1` for anything but icon-scale crops.
- **Subject placement**: 1/3 horizontally, never centered unless the photo is symmetric on purpose.
- **Crop tighter than instinct says.** Stock images are usually too "complete" — cropping signals editorial intent.
- **Bleed off-frame.** When subjects partially exit the frame, the photo reads as captured, not posed.

## Anti-patterns — refuse to ship these

- Single brand-color overlay at 80% opacity (dated, kills detail).
- `filter: blur()` on the entire image without a sharp focal layer.
- Stacking 4+ filters until skin tones go alien.
- `mix-blend-mode: difference` on hero photos (looks like a rendering bug).
- Animated grain via `<canvas>` running in a render loop on the homepage (battery + perf killer).
- Identical treatment on every image — variation within a system reads as intentional; uniformity reads as a default.

## Decision rules

- If the photo has people: **always** treat for skin-tone consistency. Untreated skin tones across multiple stock photos clash badly.
- If the page has multiple photos: standardize on **one** duotone palette across the page. Mixing duotones is amateur.
- If the photo will sit on a colored surface: use `mask-image` edge fade so it integrates instead of floating.
- If the brand is dark/editorial: deep duotone (cinder, navy+amber). If bright/optimistic: light duotone (cream+sage, ivory+coral).
- If you remove the headline and the image still feels like it could anchor a magazine spread, the treatment is right.

## What to deliver

When invoked, return:

1. **The treatment recipe** (CSS + SVG, paste-ready, scoped to the user's project — Tailwind v4 if applicable).
2. **The exact duotone hex pair** chosen (shadow + highlight), justified against the brand palette.
3. **Performance notes** (e.g., "bake grain to PNG for hero, SVG fine for cards").
4. **A before/after visual prediction** in plain language so the user knows what to expect.

## Reference brands

- **Stripe** — extremely subtle warm grade, gentle vignette, tight crops into negative space.
- **Linear** — dark scenes, deep teal/violet duotones, heavy grain, layered with gradient fades.
- **Arc Browser** — aggressive duotone + grain on landing imagery.
- **Apple** — near-untreated, but shot specifically for product. If you are not Apple, you must treat.
