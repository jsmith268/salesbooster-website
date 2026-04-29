---
name: stock-imagery
description: Source brand-fit stock photography from free providers (Unsplash, Pexels, Pixabay) for premium B2B/SaaS sites. Heuristic-only — no API keys, no fetching. Use when the user mentions stock photos, hero imagery, photography, finding images, replacing emoji/illustration with real photography, or needing imagery that doesn't look like generic stock.
version: 1.0.0
user-invocable: true
argument-hint: "[target or section]"
---

Source stock photography that reads as intentional and brand-coherent — not as filler. This skill is heuristic-only: it teaches *how* to choose, evaluate, and brief imagery. It does **not** call any APIs.

## MANDATORY PREPARATION

Invoke `/impeccable` — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow the protocol before proceeding. Additionally gather: brand color story, page tone, where the image will sit (hero / section divider / feature card / background), aspect ratio, headline copy that will overlay, and dark/light surface.

**If the user has not run `/impeccable teach`, do that first.** Stock selection without brand context produces filler.

---

## Core principles

1. **Atmosphere over subject.** Premium sites (Linear, Stripe) rarely show people in stock-grade situations — they show *spaces*, *materials*, *light*. Search for the mood, not the literal concept.
2. **Real beats representative.** A candid backstage shot beats a posed "team meeting." Authenticity is the largest separator from cheap stock.
3. **Negative space is non-negotiable.** Hero imagery needs 40–60% breathable area for headlines. Reject anything centered or busy.
4. **One color story per page.** Pick images that share a temperature (warm/cool) and tonal range. Mixing a cool-blue product shot with a warm-amber lifestyle photo destroys cohesion.
5. **Plan to treat.** Untreated stock photography is the fastest signal of a low-budget site. If the candidate can't survive a duotone/grain/grade pass and still feel intentional, it is the wrong photo. Pair this skill with `/image-treatment`.

## Anti-patterns — refuse to recommend these

- "Happy office worker," "diverse handshake," "lightbulb idea," "hands on laptop," "team high-five." All read as filler.
- Tech clichés: server racks, glowing circuit boards, holographic UI projections, hands holding floating icons, drone city skylines, generic data visualizations.
- Over-saturated, hyper-sharp HDR ("Shutterstock aesthetic").
- Stock models making direct eye contact while smiling (uncanny).
- Anything that has been seen on >5 SaaS landing pages — if you've seen it before, your visitors have too.

## Search-term strategy

Replace **concept words** with **sensory words**. AI image search engines reward literal terms with literal cliches. Photographer-uploaded imagery hides behind atmospheric terms.

| Don't search | Search instead |
|---|---|
| `team collaboration` | `morning light desk`, `notebook margin`, `studio overhead`, `shared workspace film` |
| `data analytics` | `architecture grid`, `concrete texture`, `linear shadow`, `grid ceiling` |
| `customer success` | `handwritten letter`, `coffee ceramic detail`, `paper texture macro`, `ribbon tied` |
| `enterprise security` | `vault detail`, `brushed steel`, `low-light warehouse`, `lock mechanism macro` |
| `automation / AI` | `kinetic light trails`, `long exposure motion`, `mechanical mechanism`, `factory line abstract` |
| `home services / trades` | `tool wall studio light`, `workshop morning`, `truck bed detail`, `gloved hand work` |

Layer modifiers to bias toward photographer-uploaded work:
`35mm`, `film grain`, `golden hour`, `overcast`, `single subject`, `top-down`, `shallow depth of field`, `editorial`, `studio lighting`, `available light`, `natural light interior`.

## Evaluating a candidate (six-point checklist)

For each candidate, score:

1. **Composition** — rule of thirds or strong asymmetry. Subject **not** dead-center unless explicitly symmetrical work (architecture, flat lays).
2. **Lighting** — directional, single dominant source preferred. Reject flat ring-light or HDR multi-source.
3. **Authenticity** — would a friend take this? If it reads "photoshoot," skip.
4. **Negative space** — mentally place a 60-character headline. Does it land cleanly?
5. **Color story** — sample 3 dominant hues; do they harmonize with the brand palette? If not, can `/image-treatment` reconcile via duotone?
6. **Grain / texture** — some imperfection signals a real capture. Plastic-smooth HDR usually means stock-mill.

If a candidate scores below 5/6, find another. Do not "settle."

## Spotting AI-generated stock (2026)

Both Unsplash and Pexels now flag AI-generated content, but the filters miss. Look for:

- Hands with wrong joint counts, fused fingers, melted jewelry.
- Text on signs/screens that's gibberish or warped.
- Hair strands fading into the background unnaturally.
- Symmetric faces, poreless skin, identical catchlights in both eyes.
- Backgrounds where architectural lines don't converge correctly.
- Reflections that don't match light direction.
- Repetition: identical leaves, identical bricks, identical book spines.

When in doubt, zoom in to the corners and edges — AI artifacts cluster where the model "didn't think to look."

## When stock is wrong → use illustration

Recommend `/graphics-forge` instead of stock photography when:

- The concept is abstract (security, speed, AI inference, "platform") — no honest photo exists.
- Showing a product feature — never photograph a screenshot; build a stylized SVG.
- The brand color must dominate — photos rarely match exactly, even after duotone.
- Editorial section dividers — custom SVG outperforms stock at small scale.
- Anywhere a literal photo would be too on-the-nose ("we sell software, here's a server").

## Licensing (verify before launch)

| Source | Commercial use | Attribution | Caveats |
|---|---|---|---|
| **Unsplash License** | Yes | Not required (encouraged) | Cannot resell unmodified or build a competing stock service |
| **Pexels License** | Yes | Not required | Cannot depict identifiable people in defamatory contexts or imply endorsement |
| **Pixabay Content License** | Yes | Not required | Recognizable people / brands / trademarks need separate releases for advertising |

For all three: get model and property releases yourself if depicting identifiable people in advertising. Stock licenses cover the photo, not the right of publicity.

## What "great" looks like — named references

- **Linear** — almost no stock; when used, deeply treated abstract textures.
- **Stripe** — editorial photography with cinematic color grading, often product detail shots and architectural negative space.
- **Notion** — illustration over photography; stock used sparingly and always treated.
- **Vercel** — generative/abstract art over photography.
- **Asana** — lifestyle photography but heavily art-directed, never raw stock.
- **Figma** — community photography of designers' workspaces, treated.

## Output format — what to deliver to the user

When invoked, do NOT just list images. Produce a **shoot brief** the user can paste into Unsplash/Pexels search OR send to a photographer:

```
SECTION: Hero
PURPOSE: Evoke confident execution + craft
ASPECT: 21:9, allow 60% negative space top-left for headline
TONE: Warm, slightly desaturated, single dominant light source
COLOR STORY: Anchored on brand violet (#5B3FFF); image must contribute amber/warm-neutral midtones
SUBJECT: Avoid people. Workshop or studio still life — tools, materials, surfaces.

SEARCH PROMPTS (paste into Unsplash):
  "workshop overhead morning light"
  "tool wall studio film"
  "brushed steel detail 35mm"

REJECT IF: people present, ring-light/HDR, centered subject, brand-color clash that duotone cannot save.

POST-PROCESSING (handoff to /image-treatment):
  - Duotone: deep navy + amber
  - Grain: 0.18 opacity
  - Grade: saturate 0.85, contrast 1.08, slight sepia 0.1
```

Always provide:
1. Three to five **search prompts** (sensory terms, modifiers).
2. **Reject conditions** (when to pass on a candidate).
3. **Post-processing handoff** (parameters for `/image-treatment`).
4. **License reminder** for the chosen source.
5. If imagery cannot deliver the intent, **explicitly recommend `/graphics-forge`**.

## Decision rule

If you cannot describe the *feeling* of the photograph in one sentence without using the literal subject of the page, the photo is wrong.
