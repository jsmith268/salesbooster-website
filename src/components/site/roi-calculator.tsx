"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * ROI sandbox — your inputs, your assumptions, your forecast.
 * No hard-coded "industry averages". The user owns every multiplier.
 */

type Slider = {
  key: keyof Inputs;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  hint?: string;
};

type Inputs = {
  techs: number;
  jobsPerTech: number;
  avgTicket: number;
  ticketLiftPct: number;
  recoveryPct: number;
};

const SLIDERS: Slider[] = [
  { key: "techs", label: "Active technicians", unit: "techs", min: 1, max: 50, step: 1 },
  { key: "jobsPerTech", label: "Jobs per tech / week", unit: "jobs", min: 5, max: 50, step: 1 },
  { key: "avgTicket", label: "Average ticket today", unit: "$", min: 200, max: 2000, step: 50 },
  {
    key: "ticketLiftPct",
    label: "Expected ticket lift you'd model",
    unit: "%",
    min: 0,
    max: 50,
    step: 1,
    hint: "Move this to whatever you'd find believable. We don't pick it for you.",
  },
  {
    key: "recoveryPct",
    label: "Estimate-recovery rate you'd model",
    unit: "%",
    min: 0,
    max: 30,
    step: 1,
    hint: "Share of cold estimates you'd expect to bring back.",
  },
];

export function ROICalculator() {
  const [v, setV] = React.useState<Inputs>({
    techs: 6,
    jobsPerTech: 18,
    avgTicket: 480,
    ticketLiftPct: 15,
    recoveryPct: 10,
  });

  const weeklyJobs = v.techs * v.jobsPerTech;
  const monthlyJobs = weeklyJobs * 4.33;

  // Pure, user-driven math. Nothing asserted by us.
  const ticketLift = v.avgTicket * (v.ticketLiftPct / 100);
  const monthlyTicketLift = monthlyJobs * ticketLift;
  // Recovery: assume 25% of jobs end with an unsold estimate (conservative shape, user can flatten by setting recovery to 0)
  const recoveryLift =
    monthlyJobs * 0.25 * v.avgTicket * (v.recoveryPct / 100);
  const monthlyTotal = monthlyTicketLift + recoveryLift;
  const annualTotal = monthlyTotal * 12;

  return (
    <Reveal>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Inputs */}
        <div className="space-y-7">
          {SLIDERS.map((s) => {
            const value = v[s.key];
            const pct = ((value - s.min) / (s.max - s.min)) * 100;
            return (
              <label key={s.key} className="block">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-sm font-medium text-[var(--ink)]">{s.label}</span>
                  <span className="font-display text-xl font-semibold tracking-[-0.02em] tabular-nums">
                    {s.unit === "$" ? "$" : ""}
                    {Number.isInteger(value) ? value : value.toFixed(1)}
                    {s.unit !== "$" && (
                      <span className="ml-1 text-xs font-mono uppercase tracking-wider text-[var(--ink-subtle)]">
                        {s.unit}
                      </span>
                    )}
                  </span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={value}
                  onChange={(e) =>
                    setV((cur) => ({ ...cur, [s.key]: Number(e.target.value) }))
                  }
                  className={cn(
                    "w-full h-1.5 rounded-full appearance-none cursor-pointer",
                    "[&::-webkit-slider-thumb]:appearance-none",
                    "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5",
                    "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--ink)]",
                    "[&::-webkit-slider-thumb]:shadow-[0_2px_8px_oklch(0_0_0_/_0.2)]",
                    "[&::-webkit-slider-thumb]:transition-transform",
                    "[&::-webkit-slider-thumb]:hover:scale-110"
                  )}
                  style={{
                    background: `linear-gradient(to right, var(--ink) 0%, var(--ink) ${pct}%, var(--border-strong) ${pct}%, var(--border-strong) 100%)`,
                  }}
                />
                {s.hint && (
                  <p className="mt-2 text-xs text-[var(--ink-subtle)] text-pretty">
                    {s.hint}
                  </p>
                )}
              </label>
            );
          })}
        </div>

        {/* Output */}
        <div
          className="relative rounded-[var(--radius-lg)] p-8 sm:p-12 lg:p-14 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg in oklch, oklch(0.16 0.04 280), oklch(0.32 0.18 285) 60%, oklch(0.55 0.22 305) 110%)",
            color: "var(--ink-on-dark)",
          }}
        >
          <div aria-hidden className="absolute inset-0 grain-overlay opacity-50" />
          <div className="relative">
            <p className="eyebrow text-[var(--ink-on-dark-muted)]">
              Your modelled monthly lift
            </p>
            <p className="mt-3 font-display text-6xl sm:text-7xl font-semibold tracking-[-0.04em] tabular-nums">
              ${Math.round(monthlyTotal).toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-[var(--ink-on-dark-muted)]">
              ≈ <span className="tabular-nums">${Math.round(annualTotal).toLocaleString()}</span> per year, on the assumptions you set
            </p>

            <div className="mt-8 grid gap-3 text-sm">
              <Row
                label={`Ticket lift (${v.ticketLiftPct}% on ${Math.round(monthlyJobs).toLocaleString()} jobs)`}
                value={`+$${Math.round(monthlyTicketLift).toLocaleString()}/mo`}
              />
              <Row
                label={`Estimate recovery (${v.recoveryPct}% of cold estimates)`}
                value={`+$${Math.round(recoveryLift).toLocaleString()}/mo`}
              />
            </div>

            <Button asChild size="lg" variant="accent" className="mt-9 w-full sm:w-auto">
              <Link href="/waitlist?source=roi">Reserve your launch spot</Link>
            </Button>

            <p className="mt-4 text-xs text-[var(--ink-on-dark-muted)] text-pretty">
              This is a sandbox, not a guarantee. Every multiplier above is your assumption. The platform creates the mechanism — bigger tickets, more reviews, tracked referrals, recovered estimates — but the size of the lift is a function of how aggressively your team uses it.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-t border-[oklch(1_0_0_/_0.08)] pt-3 gap-3">
      <span className="text-[var(--ink-on-dark-muted)] text-pretty">{label}</span>
      <span className="font-medium tabular-nums whitespace-nowrap">{value}</span>
    </div>
  );
}
