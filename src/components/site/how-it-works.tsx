"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ValueProp } from "@/lib/site-config";
import { getGraphicFor, type ProductSlug } from "./how-it-works/graphics";

type Props = {
  slug: ProductSlug;
  hue: string;
  steps: ValueProp[];
  title: string;
  description: string;
  eyebrow: string;
};

/**
 * Interactive, vertically-stacked "how it works" walkthrough.
 *
 * Numbered stepper at top — click any number to jump.
 * Active step expands and shows the brand-aligned illustration
 * on the right; the others collapse to a slim header strip.
 * ← / → on the keyboard moves between steps.
 * Mobile: graphic stacks above the text.
 */
export function HowItWorks({ slug, hue, steps, title, description, eyebrow }: Props) {
  const [active, setActive] = React.useState(0);
  const stepRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  const onKey = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(steps.length - 1, i + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
      }
    },
    [steps.length],
  );

  // Keyboard nav while the section is in view.
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let inView = false;
    const obs = new IntersectionObserver(([e]) => (inView = e.isIntersecting), { threshold: 0.4 });
    obs.observe(el);
    const handler = (e: KeyboardEvent) => {
      if (!inView) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      onKey(e);
    };
    window.addEventListener("keydown", handler);
    return () => {
      obs.disconnect();
      window.removeEventListener("keydown", handler);
    };
  }, [onKey]);

  return (
    <section ref={sectionRef} className="relative">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.96] text-[var(--ink)] text-balance">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] text-pretty">
          {description}
        </p>
      </div>

      {/* Stepper */}
      <div className="mt-12 sm:mt-16 -mx-2 overflow-x-auto">
        <ol
          className="flex items-stretch gap-1 sm:gap-2 px-2 min-w-max"
          role="tablist"
          aria-label="How it works steps"
        >
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.title} className="contents">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`how-panel-${i}`}
                  id={`how-tab-${i}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex flex-col items-start gap-1 px-4 sm:px-5 py-3 rounded-[var(--radius)] transition-colors duration-300 ease-[var(--ease-spring)] text-left whitespace-nowrap",
                    isActive
                      ? "bg-[var(--bg)] border border-[var(--border-strong)]"
                      : "border border-transparent hover:bg-[var(--bg)]",
                  )}
                  style={
                    isActive
                      ? { boxShadow: "0 1px 2px oklch(0 0 0 / 0.03), 0 6px 18px -8px oklch(0 0 0 / 0.10)" }
                      : undefined
                  }
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-wider"
                    style={{ color: isActive ? hue : "var(--ink-faint)" }}
                  >
                    {String(i + 1).padStart(2, "0")} · {s.category.split(" · ")[0]}
                  </span>
                  <span
                    className={cn(
                      "font-display text-sm font-semibold tracking-[-0.01em]",
                      isActive ? "text-[var(--ink)]" : "text-[var(--ink-muted)]",
                    )}
                  >
                    {shortLabel(s.title)}
                  </span>
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute -bottom-px left-4 right-4 h-[2px] rounded-full"
                      style={{ background: hue }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Steps as accordion-style panels */}
      <ol className="mt-10 list-none p-0 m-0 space-y-3">
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <li
              key={s.title}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="contents"
            >
              <div
                role="tabpanel"
                id={`how-panel-${i}`}
                aria-labelledby={`how-tab-${i}`}
                className={cn(
                  "rounded-[var(--radius-lg)] border transition-[border-color,background-color] duration-300 ease-[var(--ease-spring)]",
                  isActive
                    ? "bg-[var(--bg)] border-[var(--border-strong)]"
                    : "bg-[var(--bg-elevated)] border-[var(--border)] hover:border-[var(--border-strong)]",
                )}
                style={isActive ? { boxShadow: "var(--shadow-editorial)" } : undefined}
              >
                {/* Slim header — always visible, click to activate */}
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="w-full flex items-center gap-5 px-6 sm:px-8 py-5 text-left"
                  aria-expanded={isActive}
                >
                  <span
                    className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.035em] tabular-nums shrink-0 w-12 text-center"
                    style={{ color: hue, opacity: isActive ? 1 : 0.55 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-mono text-[10px] uppercase tracking-wider truncate"
                      style={{ color: isActive ? hue : "var(--ink-subtle)" }}
                    >
                      {s.category}
                    </p>
                    <h3
                      className={cn(
                        "mt-1 font-display tracking-[-0.025em] leading-tight text-balance",
                        isActive
                          ? "text-2xl sm:text-3xl text-[var(--ink)]"
                          : "text-lg sm:text-xl text-[var(--ink-muted)]",
                      )}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <Chevron isActive={isActive} hue={hue} />
                </button>

                {/* Expanded content */}
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500 ease-[var(--ease-spring)] motion-reduce:duration-0",
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-8 pt-2 grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start">
                      {/* Copy column */}
                      <div className="max-w-xl">
                        <p className="text-[1.05rem] sm:text-[1.1rem] leading-relaxed text-[var(--ink-muted)] text-pretty">
                          {s.body}
                        </p>
                        <div className="mt-5 pt-5 border-t border-[var(--border)] flex items-start gap-2.5">
                          <span
                            aria-hidden
                            className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: hue }}
                          />
                          <p className="text-sm text-[var(--ink-subtle)] text-pretty leading-relaxed">
                            {s.edge}
                          </p>
                        </div>
                      </div>

                      {/* Illustration column */}
                      <div className={cn("relative w-full", !isActive && "opacity-0")}>
                        {isActive ? (
                          <GraphicSlot slug={slug} index={i} hue={hue} />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function GraphicSlot({ slug, index, hue }: { slug: ProductSlug; index: number; hue: string }) {
  const Component = getGraphicFor(slug, index);
  return (
    <div
      className="relative aspect-[4/3] w-full rounded-[var(--radius-lg)] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 70% 20%, oklch(0.97 0.012 80) 0%, oklch(0.95 0.012 80) 60%, oklch(0.93 0.014 80) 100%)",
      }}
    >
      <Component hue={hue} />
    </div>
  );
}

function Chevron({ isActive, hue }: { isActive: boolean; hue: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className="shrink-0 transition-transform duration-300 ease-[var(--ease-spring)]"
      style={{
        color: isActive ? hue : "var(--ink-faint)",
        transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
      }}
      aria-hidden
    >
      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function shortLabel(title: string): string {
  // Take the first phrase up to a comma or em-dash, max ~32 chars.
  const trimmed = title.replace(/\.$/, "").split(/[,—]/)[0].trim();
  return trimmed.length > 32 ? trimmed.slice(0, 30).trimEnd() + "…" : trimmed;
}
