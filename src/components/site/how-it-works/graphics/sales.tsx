import * as React from "react";
import {
  AmberSpark,
  ChatBubble,
  Eyebrow,
  Halo,
  PhoneFrame,
  PillRow,
  StatusPill,
  SurfaceCard,
  WindowChrome,
} from "../primitives";
import type { GraphicProps } from "../graphics";

/* ─────────────────────────────────────────────────────────────────────
   Sales Booster — emerald hue (var(--hue-sales))
   Six brand-aligned illustrations, one per value prop.
   ───────────────────────────────────────────────────────────────────── */

/** 01 — The diagnosis on a tablet. Photo with severity-tagged issues. */
function DiagnosisOnTablet({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0">
      <Halo hue={hue} className="-top-16 -right-12 h-72 w-72" />
      <Halo hue="oklch(0.78 0.16 70)" className="-bottom-20 -left-12 h-64 w-64 opacity-30" />

      {/* Tilted tablet */}
      <div
        className="absolute inset-6 sm:inset-8"
        style={{ perspective: "1400px" }}
      >
        <div
          className="relative h-full w-full"
          style={{ transform: "rotateX(6deg) rotateY(-6deg) rotateZ(-1.5deg)", transformStyle: "preserve-3d" }}
        >
          <SurfaceCard elevated className="absolute inset-0">
            <WindowChrome label="inspection · driveway" />
            <div className="grid grid-cols-[1.4fr_1fr] gap-3 p-4 h-[calc(100%-32px)]">
              {/* Photo card */}
              <div className="relative rounded-[var(--radius)] overflow-hidden border border-[var(--border)]">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg in oklch, oklch(0.42 0.06 240) 0%, oklch(0.32 0.05 240) 60%, oklch(0.22 0.04 280) 100%)",
                  }}
                />
                {/* Stylized "equipment" silhouette */}
                <div className="absolute inset-0 flex items-end justify-center pb-3">
                  <div className="w-3/5 h-3/5 rounded-t-md bg-[oklch(0.62_0.06_240_/_0.6)] border-t-2 border-x-2 border-[oklch(1_0_0_/_0.2)]" />
                </div>
                {/* Scan line */}
                <div
                  className="absolute left-0 right-0 h-[2px] opacity-90"
                  style={{
                    top: "55%",
                    background: `linear-gradient(90deg, transparent, ${hue}, transparent)`,
                    boxShadow: `0 0 12px ${hue}`,
                  }}
                />
                {/* Tagged hot-spot */}
                <span
                  className="absolute"
                  style={{ top: "38%", left: "30%" }}
                >
                  <span
                    className="block h-3 w-3 rounded-full ring-2 ring-[oklch(1_0_0_/_0.6)]"
                    style={{ background: "oklch(0.62 0.22 25)" }}
                  />
                </span>
                <span
                  className="absolute"
                  style={{ top: "62%", right: "28%" }}
                >
                  <span
                    className="block h-2.5 w-2.5 rounded-full ring-2 ring-[oklch(1_0_0_/_0.6)]"
                    style={{ background: "oklch(0.78 0.16 65)" }}
                  />
                </span>
                <div className="absolute left-3 bottom-3">
                  <Eyebrow className="text-[oklch(1_0_0_/_0.7)]">Photo · 03/05</Eyebrow>
                </div>
              </div>

              {/* Issues panel */}
              <div className="flex flex-col gap-2">
                <Eyebrow hue={hue}>Issues found</Eyebrow>
                <IssueRow tone="critical" label="Worn capacitor" />
                <IssueRow tone="high" label="Refrigerant low" />
                <IssueRow tone="moderate" label="Filter due" />
                <div className="mt-auto rounded-md border border-dashed border-[var(--border-strong)] p-2 text-center">
                  <Eyebrow hue={hue}>3 issues · ranked</Eyebrow>
                </div>
              </div>
            </div>
          </SurfaceCard>

          <AmberSpark className="-top-1 right-4" />
        </div>
      </div>
    </div>
  );
}

function IssueRow({ tone, label }: { tone: "critical" | "high" | "moderate"; label: string }) {
  const palette = {
    critical: { bg: "oklch(0.62 0.22 25)", tag: "FIX NOW" },
    high: { bg: "oklch(0.78 0.16 50)", tag: "SOON" },
    moderate: { bg: "oklch(0.78 0.14 95)", tag: "WATCH" },
  }[tone];
  return (
    <div className="flex items-center gap-2 rounded-md bg-[oklch(0.97_0.008_80)] border border-[var(--border)] px-2 py-1.5">
      <span className="block h-2 w-2 rounded-full shrink-0" style={{ background: palette.bg }} />
      <span className="flex-1 text-[10px] font-medium text-[var(--ink)]">{label}</span>
      <span
        className="font-mono text-[8px] uppercase tracking-wider"
        style={{ color: palette.bg }}
      >
        {palette.tag}
      </span>
    </div>
  );
}

/** 02 — Three priced options. Good / Better / Best card stack. */
function ThreeTierProposal({ hue }: GraphicProps) {
  const tiers = [
    { name: "Good", color: "oklch(0.62 0.16 155)", price: "$580", offset: "translate-y-3" },
    { name: "Better", color: "oklch(0.55 0.18 250)", price: "$1,180", offset: "-translate-y-2", recommended: true },
    { name: "Best", color: "oklch(0.55 0.22 305)", price: "$1,840", offset: "translate-y-3" },
  ];

  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-16 right-0 h-72 w-72 opacity-40" />
      <Halo hue="oklch(0.55 0.22 305)" className="-bottom-20 -left-10 h-64 w-64 opacity-30" />

      <div className="relative grid grid-cols-3 gap-3 w-full max-w-md">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative ${tier.offset} transition-transform`}
          >
            <SurfaceCard
              elevated={tier.recommended}
              className="relative"
              style={{
                borderColor: tier.recommended ? tier.color : undefined,
                background: tier.recommended
                  ? `color-mix(in oklch, ${tier.color} 6%, oklch(0.99 0.005 80))`
                  : undefined,
              }}
            >
              {tier.recommended && (
                <span
                  className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full font-mono text-[8px] uppercase tracking-wider whitespace-nowrap"
                  style={{ background: "var(--accent)", color: "oklch(0.16 0.04 80)" }}
                >
                  ★ Recommended
                </span>
              )}
              <div className="px-3 pt-3 pb-2.5">
                <Eyebrow hue={tier.color}>{tier.name}</Eyebrow>
                <p
                  className="mt-1 font-display text-base sm:text-lg font-semibold tracking-[-0.02em]"
                  style={{ color: "var(--ink)" }}
                >
                  {tier.price}
                </p>
                <div className="mt-2.5 space-y-1.5">
                  <PillRow width={70} tone="muted" />
                  <PillRow width={55} tone="muted" />
                  <PillRow width={60} tone="muted" />
                </div>
                <div
                  className="mt-3 h-1.5 rounded-full opacity-50"
                  style={{
                    background: `linear-gradient(90deg, ${tier.color}, color-mix(in oklch, ${tier.color} 30%, transparent))`,
                  }}
                />
              </div>
            </SurfaceCard>
          </div>
        ))}
        <AmberSpark className="-top-2 right-4" />
      </div>
    </div>
  );
}

/** 03 — Estimates that come back warm. Phone with chat + tier strip. */
function EstimateComesBack({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 -right-8 h-64 w-64 opacity-40" />

      <PhoneFrame className="w-[60%] max-w-[260px]">
        <div className="px-4 pt-4 pb-3">
          <Eyebrow hue={hue}>Your proposal</Eyebrow>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {["Good", "Better", "Best"].map((t, i) => (
              <div
                key={t}
                className="rounded-md p-1.5 text-center border"
                style={{
                  borderColor: i === 1 ? hue : "var(--border)",
                  background:
                    i === 1
                      ? `color-mix(in oklch, ${hue} 10%, transparent)`
                      : "transparent",
                }}
              >
                <p
                  className="font-mono text-[8px] uppercase tracking-wider"
                  style={{ color: i === 1 ? hue : "var(--ink-subtle)" }}
                >
                  {t}
                </p>
                <p className="mt-0.5 text-[9px] font-semibold tabular-nums">
                  {["$580", "$1,180", "$1,840"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-3 pb-3 space-y-1.5">
          <ChatBubble side="in">Let me think on it.</ChatBubble>
          <ChatBubble side="out" hue={hue}>
            Took another look — the Better tier covers the warranty too. Want me to schedule it?
          </ChatBubble>
          <div className="flex items-center gap-1.5 pl-1 pt-1">
            <span className="block h-1 w-1 rounded-full bg-[var(--accent)]" />
            <Eyebrow>9:47 PM · Tuesday</Eyebrow>
          </div>
        </div>
      </PhoneFrame>

      <div className="absolute right-6 sm:right-10 bottom-8 hidden sm:block">
        <SurfaceCard className="px-3 py-2">
          <Eyebrow hue={hue}>Working while you sleep</Eyebrow>
        </SurfaceCard>
      </div>
    </div>
  );
}

/** 04 — Video walkthrough player with chapter strip. */
function VideoWalkthrough({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-8">
      <Halo hue={hue} className="-top-12 left-1/2 -translate-x-1/2 h-72 w-[80%] opacity-30" />

      <SurfaceCard elevated className="w-full max-w-md">
        {/* Video frame */}
        <div className="relative aspect-video bg-[oklch(0.18_0.025_280)]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg in oklch, oklch(0.32 0.18 285) 0%, oklch(0.16 0.04 280) 100%)",
            }}
          />
          {/* Soft moving lines */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 200 120" preserveAspectRatio="none" className="h-full w-full">
              <path d="M-20 60 Q 50 30, 100 60 T 220 60" stroke="white" strokeWidth="0.6" fill="none" />
              <path d="M-20 75 Q 50 55, 100 80 T 220 70" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
            </svg>
          </div>
          {/* Play button */}
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="grid place-items-center h-12 w-12 rounded-full backdrop-blur-md"
              style={{ background: "oklch(1 0 0 / 0.18)", border: "1px solid oklch(1 0 0 / 0.3)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M4 2 L12 7 L4 12 Z" fill="white" />
              </svg>
            </div>
          </div>
          {/* Top-right share badge */}
          <div className="absolute top-3 right-3">
            <StatusPill hue="var(--accent-bright)">Forwarded · 2m ago</StatusPill>
          </div>
        </div>

        {/* Chapter strip */}
        <div className="grid grid-cols-4 gap-1 px-3 py-2.5 bg-[var(--bg-sunken)]">
          {["Diagnosis", "Good", "Better", "Best"].map((c, i) => (
            <div
              key={c}
              className="text-center rounded-md py-1.5 border"
              style={{
                borderColor: i === 2 ? hue : "var(--border)",
                background:
                  i === 2
                    ? `color-mix(in oklch, ${hue} 10%, transparent)`
                    : "transparent",
              }}
            >
              <p
                className="font-mono text-[8px] uppercase tracking-wider"
                style={{ color: i === 2 ? hue : "var(--ink-subtle)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p
                className="text-[9px] font-medium"
                style={{ color: i === 2 ? "var(--ink)" : "var(--ink-muted)" }}
              >
                {c}
              </p>
            </div>
          ))}
        </div>
      </SurfaceCard>

      <AmberSpark className="bottom-12 right-12" />
    </div>
  );
}

/** 05 — The 11pm answer. Chat exchange between customer and agent. */
function LateAnswer({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-8">
      <Halo hue={hue} className="-top-10 -left-8 h-64 w-64 opacity-35" />
      <Halo hue="oklch(0.78 0.16 70)" className="-bottom-12 right-0 h-56 w-56 opacity-30" />

      <SurfaceCard elevated className="w-full max-w-md">
        <WindowChrome label="customer chat · 11:14 pm" />
        <div className="p-4 space-y-2.5">
          <ChatBubble side="in">
            Does the Better tier include the warranty extension?
          </ChatBubble>
          <ChatBubble side="out" hue={hue}>
            Yes — 5-year parts &amp; labor on the new compressor. Full breakdown here.
            <span className="mt-1 block">
              <Eyebrow hue="oklch(1 0 0 / 0.85)">AI · ${"<"}1s</Eyebrow>
            </span>
          </ChatBubble>
          <ChatBubble side="in">
            Can someone call me tomorrow to confirm?
          </ChatBubble>
          <ChatBubble side="out" hue={hue}>
            I&rsquo;ll have Mike ring you at 9 am. Sound good?
          </ChatBubble>

          <div className="flex items-center gap-2 pt-2 border-t border-[var(--border)] mt-2">
            <span
              className="grid place-items-center h-5 w-5 rounded-full"
              style={{ background: `color-mix(in oklch, ${hue} 18%, transparent)` }}
            >
              <svg width="9" height="9" viewBox="0 0 9 9">
                <path d="M2 4.5L4 6.5L7.5 2.5" stroke={hue} strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <Eyebrow hue={hue}>Handed off to Mike · cleanly</Eyebrow>
          </div>
        </div>
      </SurfaceCard>
    </div>
  );
}

/** 06 — The connection ring. SalesBooster ↔ FSMs. */
function ConnectionRing({ hue }: GraphicProps) {
  const fsms = [
    { name: "Housecall Pro", color: "oklch(0.78 0.18 55)" },
    { name: "ServiceTitan", color: "oklch(0.55 0.20 25)" },
    { name: "Jobber", color: "oklch(0.62 0.16 155)" },
    { name: "Service Fusion", color: "oklch(0.42 0.16 250)" },
  ];

  return (
    <div className="absolute inset-0 grid place-items-center px-8">
      <Halo hue={hue} className="inset-8 opacity-25" />

      <div className="relative w-full max-w-md aspect-square">
        {/* Concentric rings */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
          <defs>
            <radialGradient id="centergrad-sales" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={hue} stopOpacity="0.4" />
              <stop offset="100%" stopColor={hue} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="78" fill="none" stroke="var(--border-strong)" strokeWidth="0.6" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="var(--border-strong)" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.6" />
          <circle cx="100" cy="100" r="32" fill="url(#centergrad-sales)" />
        </svg>

        {/* Center logo block */}
        <div className="absolute inset-0 grid place-items-center">
          <SurfaceCard elevated className="px-4 py-3 text-center">
            <Eyebrow hue={hue}>SalesBooster</Eyebrow>
            <p className="mt-1 font-display text-sm font-semibold tracking-[-0.015em]">Platform</p>
            <div className="mt-2 flex items-center justify-center gap-1">
              <span className="block h-1 w-1 rounded-full bg-[var(--success)]" />
              <Eyebrow>Synced 2m ago</Eyebrow>
            </div>
          </SurfaceCard>
        </div>

        {/* Orbiting FSM tiles */}
        {fsms.map((f, i) => {
          const angle = (i / fsms.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + 38 * Math.cos(angle);
          const y = 50 + 38 * Math.sin(angle);
          return (
            <div
              key={f.name}
              className="absolute w-[34%] -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${y}%`, left: `${x}%` }}
            >
              <SurfaceCard className="px-2 py-1.5 text-center">
                <span
                  className="block h-1.5 w-1.5 rounded-full mx-auto"
                  style={{ background: f.color }}
                />
                <p className="mt-1 text-[9px] font-semibold text-[var(--ink)] truncate">
                  {f.name}
                </p>
              </SurfaceCard>
            </div>
          );
        })}

        <AmberSpark className="top-1/4 left-1/4" />
        <AmberSpark className="bottom-1/4 right-1/4" />
      </div>
    </div>
  );
}

export const SalesGraphics = [
  DiagnosisOnTablet,
  ThreeTierProposal,
  EstimateComesBack,
  VideoWalkthrough,
  LateAnswer,
  ConnectionRing,
];
