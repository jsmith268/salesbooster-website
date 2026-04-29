"use client";

import * as React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PLANS, ENTERPRISE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function PricingTable() {
  const [annual, setAnnual] = React.useState(true);

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span
          className={cn(
            "text-sm transition-colors",
            !annual ? "text-[var(--ink)] font-medium" : "text-[var(--ink-subtle)]"
          )}
        >
          Monthly
        </span>
        <button
          role="switch"
          aria-checked={annual}
          onClick={() => setAnnual((a) => !a)}
          className={cn(
            "relative h-7 w-14 rounded-full transition-colors duration-300",
            annual ? "bg-[var(--ink)]" : "bg-[var(--border-strong)]"
          )}
        >
          <span
            className="absolute top-0.5 h-6 w-6 rounded-full bg-[var(--bg)] shadow-md transition-transform duration-300 ease-[var(--ease-spring)]"
            style={{ left: annual ? "30px" : "2px" }}
          />
        </button>
        <span
          className={cn(
            "text-sm transition-colors",
            annual ? "text-[var(--ink)] font-medium" : "text-[var(--ink-subtle)]"
          )}
        >
          Annual{" "}
          <span
            className="ml-1 px-2 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider"
            style={{
              background: "color-mix(in oklch, var(--accent) 22%, transparent)",
              color: "var(--accent-deep)",
            }}
          >
            Save ~10%
          </span>
        </span>
      </div>

      {/* Trust signals row */}
      <Reveal>
        <ul className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {[
            "No setup fee",
            "No annual contract",
            "Founding price locked",
            "Cancel anytime",
          ].map((s) => (
            <li
              key={s}
              className="px-3 py-2.5 rounded-full bg-[var(--bg-sunken)] border border-[var(--border)] text-sm text-[var(--ink-muted)]"
            >
              {s}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Plans grid */}
      <div className="grid gap-5 lg:grid-cols-3">
        {PLANS.map((plan, i) => {
          const price = annual ? plan.annual : plan.monthly;
          const featured = plan.popular;
          return (
            <Reveal key={plan.name} delay={i * 80}>
              <div
                className={cn(
                  "relative h-full rounded-[var(--radius-lg)] p-7 lg:p-8 flex flex-col",
                  featured
                    ? "bg-[var(--surface-ink)] text-[var(--ink-on-dark)] border border-[var(--surface-ink-elevated)]"
                    : "bg-[var(--bg)] border border-[var(--border)]"
                )}
                style={{
                  boxShadow: featured ? "var(--shadow-floating)" : undefined,
                }}
              >
                {featured && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider"
                    style={{
                      background: "var(--accent)",
                      color: "oklch(0.16 0.04 80)",
                    }}
                  >
                    Most chosen
                  </span>
                )}

                <div>
                  <p
                    className={cn(
                      "eyebrow",
                      featured && "text-[var(--ink-on-dark-muted)]"
                    )}
                  >
                    {plan.name}
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-sm",
                      featured ? "text-[var(--ink-on-dark-muted)]" : "text-[var(--ink-muted)]"
                    )}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mt-7 flex items-baseline gap-1.5">
                  <span className="font-display text-5xl font-semibold tracking-[-0.03em]">
                    ${price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      featured ? "text-[var(--ink-on-dark-muted)]" : "text-[var(--ink-subtle)]"
                    )}
                  >
                    {plan.per}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-2 text-xs font-mono uppercase tracking-wider",
                    featured ? "text-[var(--ink-on-dark-muted)]" : "text-[var(--ink-subtle)]"
                  )}
                >
                  {plan.locations}
                </p>

                <ul className="mt-7 space-y-3 grow">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        featured
                          ? "text-[var(--ink-on-dark)]"
                          : "text-[var(--ink-muted)]"
                      )}
                    >
                      <span
                        className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full"
                        style={{
                          background: featured
                            ? "color-mix(in oklch, var(--accent) 28%, transparent)"
                            : "color-mix(in oklch, var(--brand) 14%, transparent)",
                          color: featured ? "var(--accent-bright)" : "var(--brand)",
                        }}
                      >
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={featured ? "accent" : plan.ctaKind === "apply" ? "primary" : "outline"}
                  className="mt-9 w-full"
                >
                  <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
                </Button>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Enterprise band */}
      <Reveal delay={240}>
        <div
          className="mt-7 rounded-[var(--radius-lg)] p-8 sm:p-10 grid lg:grid-cols-[1.5fr_1fr] gap-6 items-center"
          style={{
            background:
              "linear-gradient(105deg in oklch, oklch(0.16 0.04 280), oklch(0.32 0.18 285) 60%, oklch(0.62 0.20 30) 110%)",
            color: "var(--ink-on-dark)",
          }}
        >
          <div>
            <p className="eyebrow text-[var(--ink-on-dark-muted)]">
              {ENTERPRISE.name}
            </p>
            <h3 className="mt-2 font-display text-3xl tracking-[-0.025em] text-balance">
              For multi-brand operators and franchise networks
            </h3>
            <p className="mt-3 text-[var(--ink-on-dark-muted)] text-pretty max-w-xl">
              {ENTERPRISE.description}
            </p>
          </div>
          <div className="md:text-right">
            <Button asChild size="xl" variant="accent">
              <Link href={ENTERPRISE.ctaHref}>{ENTERPRISE.ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
