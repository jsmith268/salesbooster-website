---
name: marketing-voice
description: Rewrite B2B SaaS marketing copy so it reads as if written by a human startup founder, not an AI. Strips AI tells (em-dash addiction, hedging, three-part lists, "elevate / unlock / empower" verbs, false parallelism, summary sentences) and adopts the operator-grade tone of Linear, Stripe, Vercel, Notion, Ramp, Mercury. Use when reviewing or writing landing-page copy, headlines, subheads, button labels, microcopy, FAQ answers, or trust blocks. Triggers on prompts about anti-AI language, startup voice, copy review, headline rewrite, marketing tone, "make this sound less like AI."
version: 1.0.0
user-invocable: true
argument-hint: "[file or section to rewrite]"
---

Rewrite marketing prose so a careful reader cannot tell it was drafted by an LLM. The target voice is operator-grade B2B startup writing — Linear, Stripe, Vercel, Notion, Ramp, Mercury, Replit. Confident, concrete, short. No hype, no fluff, no AI tells.

This skill does not produce code. It produces prose.

## MANDATORY PREPARATION

Invoke `/impeccable` and follow the **Context Gathering Protocol**. Additionally gather: brand voice notes (formal/casual, regional inflections), product-specific terms-of-art that should survive rewrites, audience seniority (operators vs. ICs vs. executives), and any words the user has explicitly banned.

If the user is also editing UI structure, partner with `/clarify` (microcopy) and `/typeset` (hierarchy).

---

## Core principles

1. **Specificity beats abstraction.** Replace claims with the concrete thing the claim is made of.
2. **Verbs do the work.** Cut adjectives and adverbs first. The right verb makes most modifiers redundant.
3. **One idea per sentence.** Compounds with three clauses are AI tells. Periods are free.
4. **Trust the reader.** Don't summarize what you just said. Don't pre-announce what you're about to say.
5. **Cadence varies.** Three sentences in a row at the same length is robotic. Mix short, medium, longer. Then a fragment.
6. **Use the trade words.** B2B readers know "ticket," "estimate," "AR," "dispatch." Sanitizing into "transactions" or "service interactions" is a tell.

## The 24 AI tells — refuse to ship any of them

The following patterns mark prose as LLM-drafted. Reject every one.

### Vocabulary tells
1. **"Elevate, unlock, empower, supercharge, revolutionize, leverage, harness, streamline, drive, deliver, enable."** Banned. These are filler verbs.
2. **"Seamlessly, effortlessly, intuitively, holistically, robustly, comprehensively."** Banned adverbs.
3. **"Game-changer, best-in-class, world-class, cutting-edge, next-generation, industry-leading, mission-critical, end-to-end, full-stack, all-in-one."** Banned adjectives.
4. **"Solutions" as a noun for "products" or "the thing the company sells."** Use "product," "tool," or the actual feature.
5. **"In today's fast-paced world / In an increasingly competitive landscape."** Refuse on sight.
6. **"Whether you're X or Y."** The classic AI either/or. Pick one and write to that reader.
7. **"At its core, X is..."** Refuse.
8. **"Powered by AI / AI-powered / leveraging AI."** Either describe what the AI does, or don't mention it.

### Structure tells
9. **The em-dash hedge.** "It's fast — really fast — and reliable too." Cut the parenthetical.
10. **Triadic lists.** "Faster, smarter, simpler." Pick the one that matters.
11. **False parallelism.** "Built for operators. Designed for scale. Engineered for trust." Three lines that say nothing in identical structure. Replace with one specific claim.
12. **Summary sentences.** "In short, our platform helps you grow." Delete.
13. **Pre-announcing the topic.** "Now, let's talk about pricing." Just talk about pricing.
14. **Setup-then-payoff that takes too long.** "Many companies struggle with X. That's why we built Y." Lead with Y.
15. **Lists of features in a sentence**: "with analytics, reporting, dashboards, and insights." A reader's eye glazes. Cut to the two that matter, or move to a list element.
16. **Headlines that are two parallel phrases joined by a period.** "Software that ships. Software that scales." Pick one.
17. **Bullet items that are full sentences ending in periods.** Bullets are fragments. Sentences are paragraphs.

### Tone tells
18. **Hedging.** "Helps you potentially see up to 37% more revenue." Operator copy says: "Operators are seeing 37% ticket lift."
19. **Universalizing.** "Everyone wins." "Everything just works." A real claim has a subject.
20. **The cheerful close.** "We can't wait to work with you!" Delete.
21. **The "we're different" gesture.** "Unlike other tools, we…" Show the difference, don't claim it.
22. **"Imagine if you could..."** Refuse. Don't ask the reader to imagine. Tell them what is.
23. **The exclamation point in B2B.** Almost always an AI tell. Rare exceptions: error states, success confirmations.
24. **Subhead that restates the headline.** If the subhead can be deleted without losing meaning, it should be.

## Voice references — study before rewriting

| Brand | What to channel | Sample move |
|---|---|---|
| **Linear** | Confident, terse, slightly cool | "The issue tracking tool you'll enjoy using." Six words. No marketing verbs. |
| **Stripe** | Editorial, substantive, builder-to-builder | Long sentences when needed; uses precise nouns ("authorization," "settlement") because the reader knows them |
| **Vercel** | Technical, deadpan, slightly arrogant | "Develop. Preview. Ship." Fragments earn their period. |
| **Notion** | Warm, plainspoken, lowercase-friendly | "the all-in-one workspace" — but they earned the right with execution; you have not |
| **Ramp** | Operator-grade financial voice | "Save more. Close books faster." Specific verbs against measured outcomes |
| **Mercury** | Calm, premium, controlled | Never sells; describes. "Banking that does more." |
| **Replit** | Builder-energetic but specific | Talks about *what* you build, not abstract empowerment |

**Anti-references** (don't channel these): Salesforce, Oracle, ServiceNow, IBM. Their voice is enterprise wallpaper.

## Voice rules

### Headlines
- 6–11 words for hero h1; 4–8 for section h2.
- Specific noun + active verb + concrete object. No abstractions.
- Banned headline shapes: "The future of X." "X, reimagined." "X for everyone." "Where X meets Y." "X. For [audience]."
- Italic emphasis is allowed for *one* phrase per headline maximum, and only when it carries the surprise.

### Subheads
- One sentence. ≤ 22 words.
- Either: (a) name the audience and the outcome, or (b) name the trade-off this product resolves. Never restate the h1.
- No "for forward-thinking teams who…" — that's an AI tell of audience self-flattery.

### Body copy
- Paragraphs 2–4 sentences. Vary length sentence to sentence. Ratio: short, medium, short-fragment, longer.
- Use numerals, not words: "37%", "$1,180", "24 hours."
- When you state a number, attribute or scope it: "Operators in early access average 37%." Not "Up to 37%."
- Trade vocabulary stays. Translate only when a non-operator stakeholder is the audience.

### Buttons / CTAs
- Two-to-four words. Verbs in imperative.
- Specific over generic. "Reserve your spot" beats "Sign up." "Apply for early access" beats "Get started."
- Match the user's commitment level: low-friction first, escalating second.

### FAQ answers
- Lead with the answer, not "Great question." or restating the question.
- One direct sentence first, then a sentence of nuance if needed. Stop.

## Rewrite procedure

When invoked on existing copy:

1. **Read the section out loud (mentally).** If you trip on rhythm or hit two consecutive sentences of the same length, flag.
2. **Mark the AI tells.** Underline every banned word/phrase/structure from the lists above.
3. **Compress to the load-bearing claim.** What single thing is this section trying to land?
4. **Write the new headline first, then the subhead, then the body.** In that order, because the headline disciplines everything below.
5. **Vary cadence.** Read the rewrite back. If three sentences in a row are the same length, break one.
6. **Cut 25%.** Almost every first draft is 25% too long. Make a pass deleting words that don't carry weight.
7. **Verify trade specificity.** Did you keep "estimate," "ticket," "pricebook"? Did you avoid sanitizing into "transactions" or "service interactions"?
8. **Refuse to add a summary line at the end.** When the copy is done, stop typing.

## Output format

When invoked on a page or component, return:

1. **Diagnosis** (≤ 5 bullets) — what's wrong with the current copy in voice terms (specific tells found).
2. **Rewrite** — the new copy, formatted to drop straight into the file.
3. **Cuts made** — what you deleted and why, in one line each. (E.g., "Killed 'seamless' — banned filler.")
4. **What you kept** — claims, numbers, or trade terms that survive because they're load-bearing.

Do not add commentary, justifications, or marketing-speak about the rewrite itself. Plain delivery.

## Decision rules

- If the user has copy that *works* (specific, concrete, in-voice), say so and don't rewrite. Confirmed-working copy is a feature.
- If a sentence cannot be rewritten without losing a real claim, say so and leave it.
- If you find yourself adding flourish, you are off-voice. Stop and cut.
- An honest "we don't know yet" beats a confident generic claim.
- The copy is done when no sentence could be removed without losing information.

**One-line test:** if you can imagine the same sentence on a Salesforce or HubSpot landing page, rewrite it.
