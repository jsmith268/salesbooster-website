import * as React from "react";
import {
  AmberSpark,
  ChatBubble,
  Eyebrow,
  Halo,
  StatusPill,
  SurfaceCard,
  WindowChrome,
} from "../primitives";
import type { GraphicProps } from "../graphics";

/* ─────────────────────────────────────────────────────────────────────
   Support Booster — magenta-violet hue (var(--hue-support))
   ───────────────────────────────────────────────────────────────────── */

/** 01 — Cold-estimate revival timeline. Cadence adapts to customer signals. */
function ColdEstimateRevival({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 -right-10 h-64 w-64 opacity-35" />

      <SurfaceCard elevated className="w-full max-w-md">
        <div className="px-5 pt-4 pb-3 border-b border-[var(--border)] flex items-center justify-between">
          <Eyebrow hue={hue}>Cold-estimate revival · adaptive</Eyebrow>
          <StatusPill hue="var(--success)">Recovered</StatusPill>
        </div>

        <div className="p-5">
          {/* Horizontal timeline */}
          <div className="relative">
            <div
              className="absolute top-3 left-1 right-1 h-px"
              style={{ background: "var(--border-strong)" }}
            />
            <div className="grid grid-cols-4 gap-1 relative">
              {[
                { day: "Day 0", tone: "Hello", active: true },
                { day: "Day 3", tone: "Pause · 'thinking'", paused: true },
                { day: "Day 7", tone: "Resume", active: true },
                { day: "Day 12", tone: "Closed", success: true },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <span
                    className="mx-auto block h-2.5 w-2.5 rounded-full ring-2"
                    style={{
                      background: s.success ? "var(--success)" : s.paused ? "var(--bg)" : hue,
                      boxShadow: s.active
                        ? `0 0 12px color-mix(in oklch, ${hue} 60%, transparent)`
                        : undefined,
                      borderColor: s.paused ? hue : "transparent",
                    }}
                  />
                  <Eyebrow className="mt-2 block">{s.day}</Eyebrow>
                  <p className="mt-0.5 text-[9px] font-medium text-[var(--ink-muted)]">
                    {s.tone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Conversation snippets */}
          <div className="mt-5 grid gap-2">
            <ChatBubble side="out" hue={hue}>
              Hey Anita — checking in on the panel-upgrade quote. Any questions I can answer?
            </ChatBubble>
            <ChatBubble side="in">Thinking on it. Need a few days.</ChatBubble>
            <div className="flex items-center gap-2 text-[var(--ink-muted)]">
              <span className="block h-1.5 w-1.5 rounded-full" style={{ background: hue }} />
              <Eyebrow>Cadence paused · 4 days</Eyebrow>
            </div>
            <ChatBubble side="out" hue={hue}>
              No rush. Whenever you&rsquo;re ready, here&rsquo;s a quick walkthrough of the work.
            </ChatBubble>
            <ChatBubble side="in">Let&rsquo;s schedule it.</ChatBubble>
          </div>
        </div>
      </SurfaceCard>

      <AmberSpark className="top-10 right-14" />
    </div>
  );
}

/** 02 — AR cadence stepper. 7/14/21/30 day rhythm with tone escalation. */
function ArCadence({ hue }: GraphicProps) {
  const steps = [
    { day: 7, label: "Friendly", tone: "soft" },
    { day: 14, label: "Reminder", tone: "neutral", current: true },
    { day: 21, label: "Firm", tone: "firmer" },
    { day: 30, label: "Manager", tone: "handoff" },
  ];
  return (
    <div className="absolute inset-0 grid place-items-center px-8">
      <Halo hue={hue} className="-top-12 left-1/2 -translate-x-1/2 h-64 w-[70%] opacity-35" />

      <SurfaceCard elevated className="w-full max-w-md">
        <div className="px-5 pt-4 pb-3 border-b border-[var(--border)] flex items-center justify-between">
          <Eyebrow hue={hue}>Overdue invoice · #INV-2204</Eyebrow>
          <span className="font-display text-base font-semibold tracking-[-0.02em] tabular-nums text-[var(--ink)]">
            $1,180
          </span>
        </div>

        <div className="px-5 py-6">
          {/* Stepper */}
          <div className="relative">
            <div
              className="absolute top-3 left-3 right-3 h-[2px]"
              style={{ background: "var(--border-strong)" }}
            />
            <div
              className="absolute top-3 left-3 h-[2px] rounded-full"
              style={{
                width: "33%",
                background: `linear-gradient(90deg, ${hue}, color-mix(in oklch, ${hue} 70%, oklch(0.78 0.14 70)))`,
              }}
            />
            <div className="relative grid grid-cols-4 gap-1">
              {steps.map((s) => (
                <div key={s.day} className="text-center">
                  <span
                    className="mx-auto block h-2.5 w-2.5 rounded-full ring-2"
                    style={{
                      background: s.current ? hue : s.day < 14 ? hue : "var(--bg)",
                      borderColor: s.current ? hue : "var(--border-strong)",
                      boxShadow: s.current
                        ? `0 0 14px color-mix(in oklch, ${hue} 70%, transparent)`
                        : undefined,
                    }}
                  />
                  <Eyebrow className="mt-2 block" hue={s.current ? hue : undefined}>
                    Day {s.day}
                  </Eyebrow>
                  <p
                    className="mt-0.5 text-[9px] font-medium"
                    style={{ color: s.current ? "var(--ink)" : "var(--ink-muted)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Active SMS */}
          <div className="mt-6">
            <Eyebrow hue={hue}>Now sending · Day 14</Eyebrow>
            <ChatBubble side="out" hue={hue} className="mt-2">
              Hi Anita — friendly reminder on invoice #INV-2204 ($1,180). Tap here to pay in 30 seconds.
            </ChatBubble>
            <div className="mt-2 flex items-center gap-2">
              <span
                className="rounded-md px-2 py-1"
                style={{ background: `color-mix(in oklch, ${hue} 12%, transparent)` }}
              >
                <Eyebrow hue={hue}>1-tap pay link</Eyebrow>
              </span>
              <Eyebrow>Manager paged at Day 30 if unpaid</Eyebrow>
            </div>
          </div>
        </div>
      </SurfaceCard>

      <AmberSpark className="bottom-12 right-12" />
    </div>
  );
}

/** 03 — Membership renewal personalized to actual usage. */
function MembershipRenewal({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-8">
      <Halo hue={hue} className="-top-12 -right-8 h-64 w-64 opacity-30" />
      <Halo hue="oklch(0.78 0.16 70)" className="-bottom-10 -left-10 h-56 w-56 opacity-25" />

      <SurfaceCard elevated className="w-full max-w-md">
        {/* Top stripe — expiring */}
        <div
          className="flex items-center justify-between px-5 py-2"
          style={{
            background: "linear-gradient(90deg, color-mix(in oklch, oklch(0.78 0.14 70) 22%, transparent), transparent)",
          }}
        >
          <Eyebrow hue="oklch(0.62 0.14 60)">Expiring · 14 days</Eyebrow>
          <span className="block h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.14_70)]" />
        </div>

        <div className="px-5 pt-4 pb-5">
          <Eyebrow hue={hue}>Member · Comfort Plan</Eyebrow>
          <p className="mt-1 font-display text-base font-semibold tracking-[-0.015em] text-[var(--ink)]">
            Anita Voss · 4 years with you
          </p>

          {/* Usage strip */}
          <div className="mt-4 rounded-md bg-[var(--bg-sunken)] border border-[var(--border)] p-3">
            <Eyebrow>What this membership earned her</Eyebrow>
            <ul className="mt-2 grid gap-1.5">
              {[
                { label: "Tune-ups attended", value: "6" },
                { label: "Priority dispatch saves", value: "2" },
                { label: "Member discount", value: "$340" },
              ].map((u) => (
                <li key={u.label} className="flex items-center justify-between">
                  <span className="text-[10px] text-[var(--ink-muted)]">{u.label}</span>
                  <span
                    className="font-mono text-[10px] tabular-nums"
                    style={{ color: hue }}
                  >
                    {u.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personalized renewal pitch */}
          <ChatBubble side="out" hue={hue} className="mt-4">
            Hey Anita — your Comfort Plan covered 6 tune-ups and saved you $340 this year. Renew before the 14th to keep priority scheduling.
          </ChatBubble>

          <div className="mt-4 flex items-center justify-between">
            <Eyebrow>Renewal pitch · auto-personalized</Eyebrow>
            <span
              className="rounded-full px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider"
              style={{
                background: `color-mix(in oklch, ${hue} 18%, transparent)`,
                color: hue,
              }}
            >
              Renew →
            </span>
          </div>
        </div>
      </SurfaceCard>

      <AmberSpark className="top-12 left-14" />
    </div>
  );
}

/** 04 — KB auto-suggestion: pattern detected → suggest article. */
function KbAutoSuggest({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-8">
      <Halo hue={hue} className="-top-10 -right-10 h-64 w-64 opacity-30" />

      <div className="relative w-full max-w-md grid gap-3">
        {/* Pattern observations */}
        <SurfaceCard className="px-4 py-3">
          <Eyebrow hue={hue}>Pattern detected · last 7 days</Eyebrow>
          <ul className="mt-2 space-y-1.5">
            {[
              { who: "Anita V.", q: "Does the warranty cover the compressor?" },
              { who: "Marco D.", q: "How long is the parts warranty?" },
              { who: "Lin K.", q: "What does the warranty include exactly?" },
            ].map((q) => (
              <li key={q.who} className="flex items-baseline gap-2 text-[10px] text-[var(--ink-muted)]">
                <span
                  className="block h-1 w-1 rounded-full mt-1 shrink-0"
                  style={{ background: hue }}
                />
                <span>
                  <span className="font-semibold text-[var(--ink)]">{q.who}:</span> &ldquo;
                  {q.q}&rdquo;
                </span>
              </li>
            ))}
          </ul>
        </SurfaceCard>

        {/* Connector */}
        <div className="flex items-center gap-2 text-[var(--ink-faint)] px-2">
          <span className="block h-px flex-1 bg-[var(--border-strong)]" />
          <Eyebrow hue={hue}>Suggesting</Eyebrow>
          <span className="block h-px flex-1 bg-[var(--border-strong)]" />
        </div>

        {/* Suggested article card */}
        <SurfaceCard
          elevated
          style={{
            borderColor: `color-mix(in oklch, ${hue} 50%, transparent)`,
            borderWidth: 1.5,
          }}
        >
          <div className="px-4 py-3">
            <Eyebrow hue={hue}>New knowledge article</Eyebrow>
            <p className="mt-1 font-display text-sm font-semibold tracking-[-0.015em] text-[var(--ink)]">
              Compressor warranty: what&rsquo;s covered, what&rsquo;s not
            </p>
            <p className="mt-1.5 text-[10px] leading-relaxed text-[var(--ink-muted)]">
              Drafted from your team&rsquo;s last 12 answers · 320 words · ready to publish.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                className="rounded-md px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider"
                style={{ background: hue, color: "white" }}
              >
                Approve
              </button>
              <button
                type="button"
                className="rounded-md border border-[var(--border-strong)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[var(--ink-muted)]"
              >
                Dismiss
              </button>
              <span className="ml-auto">
                <Eyebrow>Self-improving</Eyebrow>
              </span>
            </div>
          </div>
        </SurfaceCard>

        <AmberSpark className="-top-2 right-12" />
      </div>
    </div>
  );
}

/** 05 — Manager takeover banner over a live thread. */
function ManagerTakeover({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-10 -right-10 h-64 w-64 opacity-30" />

      <SurfaceCard elevated className="w-full max-w-md">
        <WindowChrome label="customer thread · taken over" />

        {/* Takeover banner */}
        <div
          className="px-4 py-2 flex items-center gap-2 border-b border-[var(--border)]"
          style={{
            background: `color-mix(in oklch, oklch(0.78 0.14 70) 16%, transparent)`,
          }}
        >
          <span
            className="grid place-items-center h-5 w-5 rounded-full"
            style={{ background: "oklch(0.78 0.14 70)" }}
          >
            <svg width="9" height="9" viewBox="0 0 9 9">
              <path d="M2 5.5 L 4 7 L 7 2.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          <div className="flex-1">
            <Eyebrow hue="oklch(0.62 0.14 60)">Manager · Alex took over · 2m ago</Eyebrow>
            <p className="text-[10px] font-medium text-[var(--ink)]">AI paused · human on the line</p>
          </div>
          <Eyebrow>Resume AI</Eyebrow>
        </div>

        <div className="p-4 space-y-2">
          <ChatBubble side="in">Why was the part out of stock again?</ChatBubble>
          <div className="relative">
            <ChatBubble side="out" hue={hue}>
              Anita — Alex here. Picked up where the assistant left off; we ordered the part overnight and I&rsquo;ll be the one delivering it tomorrow. Sorry for the delay.
            </ChatBubble>
            <span
              aria-hidden
              className="absolute right-1 -top-1.5 px-1.5 py-0.5 rounded-full font-mono text-[7px] uppercase tracking-wider"
              style={{
                background: "oklch(0.78 0.14 70)",
                color: "oklch(0.16 0.04 80)",
              }}
            >
              Human
            </span>
          </div>

          {/* Recommended action card */}
          <div className="mt-3 rounded-md border border-dashed border-[var(--border-strong)] p-2.5">
            <Eyebrow hue={hue}>Recommended next action</Eyebrow>
            <p className="mt-1 text-[10px] text-[var(--ink-muted)] leading-relaxed">
              Comp the visit fee. High-value member · 4 years.
            </p>
          </div>
        </div>
      </SurfaceCard>

      <AmberSpark className="top-12 left-14" />
    </div>
  );
}

/** 06 — Unified inbox: SMS / email / chat in one frame. */
function UnifiedInbox({ hue }: GraphicProps) {
  const channels = [
    { label: "SMS", count: 12, glyph: "sms", active: true },
    { label: "Email", count: 4, glyph: "mail" },
    { label: "Web chat", count: 7, glyph: "chat" },
  ];
  const threads = [
    { who: "Anita V.", channel: "SMS", preview: "Got the link, paying now.", time: "2m" },
    { who: "Marco D.", channel: "Email", preview: "Re: payment plan options for INV-2200", time: "12m" },
    { who: "Lin K.", channel: "Web chat", preview: "Will ext. 247 still work after I move?", time: "28m" },
    { who: "Tom B.", channel: "SMS", preview: "Yeah, let's reschedule for Tues.", time: "1h" },
  ];

  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-10 -right-10 h-64 w-64 opacity-30" />

      <SurfaceCard elevated className="w-full max-w-md">
        <WindowChrome label="inbox · all channels" />

        {/* Channel tabs */}
        <div className="grid grid-cols-3 gap-1 px-4 py-2 border-b border-[var(--border)]">
          {channels.map((c) => (
            <div
              key={c.label}
              className="rounded-md px-2 py-1.5 text-center border"
              style={{
                borderColor: c.active ? hue : "var(--border)",
                background: c.active
                  ? `color-mix(in oklch, ${hue} 10%, transparent)`
                  : "transparent",
              }}
            >
              <div className="flex items-center justify-center gap-1.5">
                <Glyph type={c.glyph} hue={c.active ? hue : "var(--ink-muted)"} />
                <Eyebrow hue={c.active ? hue : undefined}>{c.label}</Eyebrow>
              </div>
              <p
                className="mt-0.5 font-mono text-[9px] tabular-nums"
                style={{ color: c.active ? "var(--ink)" : "var(--ink-muted)" }}
              >
                {c.count}
              </p>
            </div>
          ))}
        </div>

        {/* Threads */}
        <ul className="divide-y divide-[var(--border)]">
          {threads.map((t, i) => (
            <li
              key={t.who}
              className={`px-4 py-2.5 flex items-center gap-3 ${i === 0 ? "bg-[var(--bg-sunken)]" : ""}`}
            >
              <span
                className="block h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: i === 0 ? hue : "var(--ink-faint)" }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[10px] font-semibold text-[var(--ink)] truncate">{t.who}</p>
                  <Eyebrow>{t.channel}</Eyebrow>
                </div>
                <p className="mt-0.5 text-[10px] text-[var(--ink-muted)] truncate">{t.preview}</p>
              </div>
              <Eyebrow className="shrink-0">{t.time}</Eyebrow>
            </li>
          ))}
        </ul>

        {/* Composer */}
        <div className="border-t border-[var(--border)] px-4 py-2.5 flex items-center gap-2">
          <div className="flex-1 h-7 rounded-md bg-[var(--bg-sunken)] border border-[var(--border)]" />
          <button
            type="button"
            className="rounded-md px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider"
            style={{ background: hue, color: "white" }}
          >
            Send
          </button>
        </div>
      </SurfaceCard>

      <AmberSpark className="bottom-12 right-12" />
    </div>
  );
}

function Glyph({ type, hue }: { type: string; hue: string }) {
  if (type === "sms") {
    return (
      <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
        <path
          d="M2 3 L 9 3 Q 9.5 3, 9.5 3.5 L 9.5 7 Q 9.5 7.5, 9 7.5 L 6 7.5 L 4 9 L 4 7.5 L 2 7.5 Q 1.5 7.5, 1.5 7 L 1.5 3.5 Q 1.5 3, 2 3 Z"
          stroke={hue}
          strokeWidth="0.9"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "mail") {
    return (
      <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
        <rect x="1.5" y="2.5" width="8" height="6" rx="0.7" stroke={hue} strokeWidth="0.9" fill="none" />
        <path d="M1.5 3 L 5.5 6 L 9.5 3" stroke={hue} strokeWidth="0.9" fill="none" />
      </svg>
    );
  }
  // chat
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
      <path
        d="M2 2.5 L 9 2.5 Q 9.5 2.5, 9.5 3 L 9.5 6.5 Q 9.5 7, 9 7 L 4.5 7 L 2 9 L 2.5 7 Q 1.5 7, 1.5 6.5 L 1.5 3 Q 1.5 2.5, 2 2.5 Z"
        stroke={hue}
        strokeWidth="0.9"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const SupportGraphics = [
  ColdEstimateRevival,
  ArCadence,
  MembershipRenewal,
  KbAutoSuggest,
  ManagerTakeover,
  UnifiedInbox,
];
