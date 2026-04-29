# Design & UI Skills — Portable Library

A drop-in library of Claude Code skills for designing, building, refining, and
auditing web interfaces. Copy this folder into any project and Claude Code
will pick them up automatically.

---

## How to use in a new project

Claude Code loads skills from two places. Pick whichever fits:

**Option A — Project-scoped (recommended, travels with the repo)**
```bash
# From the root of your new project:
cp -R /path/to/this/skills ./.claude/skills
```
Only that project sees the skills.

**Option B — User-scoped (available in every project on your machine)**
```bash
cp -R /path/to/this/skills/* ~/.claude/skills/
```

**Option C — Symlink (stay in sync with this library)**
```bash
ln -s /absolute/path/to/this/skills ./.claude/skills
```

Once installed, invoke a skill in Claude Code with `/skill-name` (e.g.
`/impeccable`, `/polish`, `/critique`). Most skills also auto-activate when
their trigger phrases show up in a prompt.

> Tip: run `/impeccable teach` **once** at the start of a new project. It
> gathers design context (purpose, audience, tone, constraints) that every
> other skill in the library reads from. Skip this step and the refinement
> skills will ask for the same context each time.

---

## The library at a glance

```
Plan → Build → Refine → Review → Ship
 shape   frontend-design   layout/typeset/colorize/...   critique/audit   polish
         impeccable
```

Each skill is single-purpose. Compose them instead of reaching for one monster
command.

---

## Core — start here

### `impeccable` *(the root skill — everything else extends it)*
Creates distinctive, production-grade interfaces and holds the shared design
principles, anti-patterns, and **Context Gathering Protocol** that all other
skills invoke.
- `/impeccable teach` — one-time project design context setup
- `/impeccable craft` — shape-then-build a feature
- `/impeccable extract` — pull reusable components/tokens into a design system

### `frontend-design`
The original Anthropic skill that `impeccable` is based on. Use when you want
a bold, opinionated aesthetic direction committed up front before any code.
Good for landing pages, posters, artful components.

### `shape`
Plan UX and UI **before writing code**. Runs a discovery interview and emits a
design brief that guides implementation. Use for anything non-trivial.
- `/shape [feature name]`

---

## Build — producing new interfaces

### `tailwind-v4-shadcn`
Production-tested setup recipe for Tailwind CSS v4 + shadcn/ui + Vite + React.
Covers `@theme inline`, CSS variable architecture, dark mode with
`ThemeProvider`, and common v4 gotchas. Reach for this when bootstrapping a
new React project or debugging theming issues.

### `vercel-react-view-transitions`
Implement smooth page/route/shared-element animations with React's native
`<ViewTransition>` API. Use for navigation animations and list reorders
without pulling in a motion library.

### `taste-design`
Generates a `DESIGN.md` file — a semantic, AI-readable design system —
optimized for Google Stitch screen generation but useful as a single source
of truth for any AI-assisted design work.

---

## Refine — targeted improvement passes

Each of these takes a `[target]` argument (a file, component, or page) and
runs a focused pass. They're intentionally narrow — stack them for compound
effects.

| Skill | When to use |
|---|---|
| `layout` | Monotonous grids, weak hierarchy, inconsistent spacing, crowded UI |
| `typeset` | Fonts feel generic, hierarchy flat, sizing/weight off, readability issues |
| `colorize` | Design is too gray/monochromatic, lacks warmth or personality |
| `animate` | Add purposeful motion, micro-interactions, hover effects |
| `delight` | Add personality, moments of joy, memorable touches |
| `clarify` | Unclear copy, confusing labels, bad error messages, weak microcopy |
| `adapt` | Make a design responsive across devices, screen sizes, or platforms |
| `distill` | Simplify, declutter, strip to essentials |
| `polish` | Final pre-ship pass — alignment, spacing, consistency, micro-details |

### Intensity dial

Three skills form a spectrum for adjusting visual intensity:

- `quieter` — tone down aggressive/loud designs without losing quality
- `bolder` — amplify safe/boring designs, add personality and impact
- `overdrive` — push past conventional limits: shaders, spring physics,
  scroll-driven reveals, 60fps motion. For when you want to wow.

Pick the one that matches the direction of the gap.

---

## Review — evaluate what you have

### `critique`
UX evaluation with quantitative scoring, persona-based testing, anti-pattern
detection, and actionable feedback. Use for "is this any good?"
- `/critique [area]`

### `audit`
Technical quality checks — accessibility, performance, theming, responsive
design, anti-patterns. Produces a scored report with P0–P3 severity and a
plan. Doesn't fix issues; feeds them to other skills.
- `/audit [area]`

### `web-design-guidelines`
Reviews UI code against the Vercel **Web Interface Guidelines** (a11y, UX,
best practices). Use when asked to "review my UI" or "check accessibility".
- `/web-design-guidelines <file-or-pattern>`

### `optimize`
Diagnoses and **fixes** UI performance issues — loading speed, rendering,
animations, images, bundle size. Use when something feels slow, laggy, or
janky.

---

## Suggested workflows

**Greenfield feature**
```
/impeccable teach        → establish design context (once per project)
/shape <feature>         → design brief
/impeccable craft        → build it
/polish                  → final pass before shipping
```

**Inherited UI that feels off**
```
/critique                → find what's weak
/audit                   → find what's broken
/layout  /typeset  /colorize   (pick based on critique)
/polish
```

**"Make it feel more alive"**
```
/animate                 → add motion
/delight                 → personality touches
/overdrive               → if you want to go all out
```

**Responsive / cross-device**
```
/adapt <target> mobile
/audit                   → verify nothing regressed
```

---

## Inventory

All skills in this folder:

- adapt
- animate
- audit
- bolder
- clarify
- colorize
- critique
- delight
- distill
- frontend-design
- impeccable  *(core)*
- layout
- optimize
- overdrive
- polish
- quieter
- shape
- tailwind-v4-shadcn
- taste-design
- typeset
- vercel-react-view-transitions
- web-design-guidelines

Each folder contains a `SKILL.md` — the actual instructions Claude Code loads.
Open it to see the full behavior, argument hints, and internal protocols.

---

## Updating the library

These were copied from `~/.claude/skills/` on the machine that built this
folder. To refresh to the latest versions:

```bash
SRC=~/.claude/skills
DST=/path/to/this/skills
for d in "$DST"/*/; do
  name=$(basename "$d")
  [ -d "$SRC/$name" ] && rm -rf "$d" && cp -R "$SRC/$name" "$d"
done
```

Or replace individual skills as needed.
