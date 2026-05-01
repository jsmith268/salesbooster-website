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
            "50% off for life",
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
      <div className="grid gap-5 lg:grid-cols-3 items-stretch pt-4">
        {PLANS.map((plan, i) => {
          const price = annual ? plan.annual : plan.monthly;
          const partner = price / 2;
          const annualSavings = annual
            ? Math.round((plan.monthly * 12 - partner * 12))
            : Math.round(plan.monthly * 12 * 0.5);
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
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider whitespace-nowrap"
                    style={{
                      background: "var(--accent)",
                      color: "oklch(0.16 0.04 80)",
                    }}
                  >
                    Best value
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

                {/* Discount badge */}
                <span
                  className="mt-6 self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider"
                  style={{
                    background: featured
                      ? "color-mix(in oklch, var(--accent) 22%, transparent)"
                      : "color-mix(in oklch, var(--brand) 12%, transparent)",
                    color: featured ? "var(--accent-bright)" : "var(--brand)",
                  }}
                >
                  <span aria-hidden>●</span>
                  Launch rate · 50% off for life
                </span>

                {/* Discount price (dominant) */}
                <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                  <span className="font-display text-6xl font-semibold tracking-[-0.035em] tabular-nums">
                    ${partner.toFixed(2).replace(/\.00$/, "")}
                  </span>
                  <span
                    className={cn(
                      "text-base",
                      featured ? "text-[var(--ink-on-dark-muted)]" : "text-[var(--ink-subtle)]"
                    )}
                  >
                    {plan.per}
                  </span>
                </div>

                {/* Standard rate (de-emphasized, struck through) */}
                <p
                  className={cn(
                    "mt-2 text-sm flex items-baseline gap-2",
                    featured ? "text-[var(--ink-on-dark-muted)]" : "text-[var(--ink-subtle)]"
                  )}
                >
                  <span className="line-through tabular-nums opacity-80">
                    ${price}{plan.per}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider opacity-90">
                    standard
                  </span>
                </p>

                {/* Savings */}
                <p
                  className={cn(
                    "mt-3 text-xs font-mono uppercase tracking-wider",
                    featured ? "text-[var(--accent-bright)]" : "text-[var(--brand)]"
                  )}
                >
                  You save ${annualSavings.toLocaleString()} / year per location
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

      {/* Feature-comparison table */}
      <Reveal delay={200}>
        <div className="mt-12 sm:mt-16 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg)] overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left p-5 font-mono text-[10px] uppercase tracking-wider text-[var(--ink-subtle)] font-medium">
                  Compare plans
                </th>
                {PLANS.map((p) => (
                  <th
                    key={p.name}
                    className="text-left p-5 font-display text-base font-semibold tracking-[-0.015em] text-[var(--ink)]"
                  >
                    {p.name}
                    {p.popular && (
                      <span
                        className="ml-2 px-1.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider align-middle"
                        style={{
                          background: "var(--accent)",
                          color: "oklch(0.16 0.04 80)",
                        }}
                      >
                        Best value
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <CompareRow
                label="Launch price (50% off, for life)"
                values={PLANS.map((p) => `$${(p.annual / 2).toFixed(2)}${p.per}`)}
                strong
              />
              <CompareRow
                label="Standard public price"
                values={PLANS.map((p) => (
                  <span key={p.name} className="line-through text-[var(--ink-subtle)] tabular-nums">
                    ${p.annual}{p.per}
                  </span>
                ))}
              />
              <CompareRow
                label="Boosters included"
                values={["Any 1 of 4", "All 4", "Any 2 of 4"]}
              />
              <CompareRow
                label="Jobs per location / month"
                values={["100", "500", "250"]}
              />
              <CompareRow
                label="Per-job overage"
                values={["$2.99", "$1.99", "$2.49"]}
              />
              <CompareRow
                label="Field-service software sync"
                values={[true, true, true]}
              />
              <CompareRow
                label="AI chat & customer portal"
                values={[false, true, true]}
              />
              <CompareRow
                label="Advanced analytics"
                values={[false, true, true]}
              />
              <CompareRow
                label="Custom proposal templates"
                values={[false, true, false]}
              />
              <CompareRow
                label="Dedicated onboarding"
                values={[false, true, false]}
              />
              <CompareRow
                label="Support level"
                values={["Email", "Phone & chat", "Priority"]}
              />
            </tbody>
          </table>
        </div>
      </Reveal>

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
              For companies, equity groups, and agencies
            </h3>
            <p className="mt-3 text-[var(--ink-on-dark-muted)] text-pretty max-w-xl">
              {ENTERPRISE.description}
            </p>
            <p className="mt-3 text-xs font-mono uppercase tracking-wider text-[var(--accent-bright)]">
              {ENTERPRISE.pricingHint}
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

function CompareRow({
  label,
  values,
  strong,
}: {
  label: string;
  values: (string | boolean | React.ReactNode)[];
  strong?: boolean;
}) {
  return (
    <tr>
      <td
        className={cn(
          "p-5 align-top text-[var(--ink-muted)]",
          strong && "text-[var(--ink)] font-medium"
        )}
      >
        {label}
      </td>
      {values.map((v, i) => (
        <td
          key={i}
          className={cn(
            "p-5 align-top tabular-nums",
            strong ? "text-[var(--ink)] font-display font-semibold" : "text-[var(--ink-muted)]"
          )}
        >
          {typeof v === "boolean" ? (
            v ? (
              <span
                className="inline-grid h-5 w-5 place-items-center rounded-full"
                style={{
                  background: "color-mix(in oklch, var(--success) 18%, transparent)",
                  color: "var(--success)",
                }}
                aria-label="Included"
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
            ) : (
              <span aria-label="Not included" className="text-[var(--ink-faint)]">
                —
              </span>
            )
          ) : (
            v
          )}
        </td>
      ))}
    </tr>
  );
}
