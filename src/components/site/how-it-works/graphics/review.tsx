import * as React from "react";
import {
  AmberSpark,
  ChatBubble,
  Eyebrow,
  Halo,
  PhoneFrame,
  StatusPill,
  SurfaceCard,
  WindowChrome,
} from "../primitives";
import type { GraphicProps } from "../graphics";

/* ─────────────────────────────────────────────────────────────────────
   Review Booster — amber hue (var(--hue-review))
   ───────────────────────────────────────────────────────────────────── */

function Star({ filled, hue, size = 10 }: { filled?: boolean; hue: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" aria-hidden>
      <path
        d="M5 1 L 6.2 3.6 L 9 4 L 7 6 L 7.5 9 L 5 7.5 L 2.5 9 L 3 6 L 1 4 L 3.8 3.6 Z"
        fill={filled ? hue : "transparent"}
        stroke={filled ? hue : "var(--ink-faint)"}
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 01 — Sentiment routing. SMS reply → either Google or Manager queue. */
function SentimentRouting({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 -right-12 h-64 w-64 opacity-35" />
      <Halo hue="oklch(0.62 0.22 25)" className="-bottom-10 -left-12 h-56 w-56 opacity-20" />

      <SurfaceCard elevated className="w-full max-w-md">
        <WindowChrome label="post-job sms · sentiment-aware" />
        <div className="p-5 grid gap-4">
          {/* Positive case */}
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3">
            <div>
              <ChatBubble side="in">Mike was great — fixed it first try.</ChatBubble>
            </div>
            <SentimentMeter value={0.92} positive hue="var(--success)" />
            <DestinationPill icon="google" label="Google" hue="var(--success)" />
          </div>

          {/* Negative case */}
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 pt-3 border-t border-[var(--border)]">
            <div>
              <ChatBubble side="in">Honestly disappointed. Was late and rushed.</ChatBubble>
            </div>
            <SentimentMeter value={0.21} positive={false} hue="oklch(0.62 0.22 25)" />
            <DestinationPill icon="alert" label="Manager" hue="oklch(0.62 0.22 25)" />
          </div>

          <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
            <Eyebrow hue={hue}>Trained on home-service language</Eyebrow>
            <StatusPill hue={hue}>Live</StatusPill>
          </div>
        </div>
      </SurfaceCard>

      <AmberSpark className="top-10 right-14" />
    </div>
  );
}

function SentimentMeter({ value, positive, hue }: { value: number; positive: boolean; hue: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-1.5 w-14 rounded-full bg-[var(--bg-sunken)] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${Math.round(value * 100)}%`, background: hue }}
        />
      </div>
      <Eyebrow hue={hue}>
        {positive ? "Positive" : "Negative"} · {value.toFixed(2)}
      </Eyebrow>
    </div>
  );
}

function DestinationPill({ icon, label, hue }: { icon: "google" | "alert"; label: string; hue: string }) {
  return (
    <div
      className="flex items-center gap-1.5 rounded-md border px-2 py-1"
      style={{
        borderColor: `color-mix(in oklch, ${hue} 30%, transparent)`,
        background: `color-mix(in oklch, ${hue} 10%, transparent)`,
      }}
    >
      {icon === "google" ? (
        <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
          <circle cx="5.5" cy="5.5" r="4" stroke={hue} strokeWidth="1" fill="none" />
          <path d="M5.5 3 L 5.5 6 L 8 6" stroke={hue} strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      ) : (
        <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
          <path
            d="M5.5 1 L 10 9 L 1 9 Z"
            stroke={hue}
            strokeWidth="1"
            fill="none"
            strokeLinejoin="round"
          />
          <line x1="5.5" y1="4.5" x2="5.5" y2="6.5" stroke={hue} strokeWidth="1" strokeLinecap="round" />
        </svg>
      )}
      <Eyebrow hue={hue}>{label}</Eyebrow>
    </div>
  );
}

/** 02 — Multi-location Google Business profiles each rising on their own. */
function MultiLocation({ hue }: GraphicProps) {
  const locations = [
    { name: "Dallas", rating: 4.8, count: 218 },
    { name: "Plano", rating: 4.7, count: 142 },
    { name: "Frisco", rating: 4.9, count: 96 },
    { name: "Arlington", rating: 4.6, count: 73 },
  ];
  return (
    <div className="absolute inset-0 px-6 py-6">
      <Halo hue={hue} className="-top-12 -right-10 h-64 w-64 opacity-30" />

      {/* Stylized topo background */}
      <div className="absolute inset-6 rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] bg-[oklch(0.97_0.012_80)]">
        <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-50">
          {[20, 35, 55, 78, 100, 120].map((r, i) => (
            <circle
              key={r}
              cx="100"
              cy="80"
              r={r}
              stroke="var(--border-strong)"
              strokeWidth="0.4"
              strokeDasharray="2 3"
              fill="none"
              opacity={0.7 - i * 0.08}
            />
          ))}
          <path d="M 0 30 Q 60 60, 100 50 T 200 70" stroke="var(--border-strong)" strokeWidth="0.4" fill="none" opacity="0.5" />
        </svg>

        <div className="relative h-full grid grid-cols-2 gap-3 p-4 sm:p-5 content-center">
          {locations.map((l, i) => (
            <SurfaceCard
              key={l.name}
              className="px-3 py-2.5"
              elevated={i === 0}
            >
              <div className="flex items-center justify-between">
                <Eyebrow hue={hue}>{l.name}</Eyebrow>
                <span
                  className="block h-1.5 w-1.5 rounded-full"
                  style={{ background: hue }}
                />
              </div>
              <div className="mt-1 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} filled={k < Math.round(l.rating)} hue={hue} />
                ))}
                <span className="ml-1 font-display text-[10px] font-semibold tabular-nums text-[var(--ink)]">
                  {l.rating}
                </span>
              </div>
              <p className="mt-1 text-[9px] text-[var(--ink-muted)]">
                {l.count} reviews · this location
              </p>
            </SurfaceCard>
          ))}
        </div>
      </div>

      <AmberSpark className="top-10 left-14" />
      <AmberSpark className="bottom-12 right-12" />
    </div>
  );
}

/** 03 — Detractor intercepted before it goes public. */
function NegativeIntercept({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 -left-10 h-64 w-64 opacity-25" />
      <Halo hue="oklch(0.62 0.22 25)" className="-bottom-10 right-0 h-56 w-56 opacity-25" />

      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3 w-full max-w-lg">
        {/* Customer reply */}
        <SurfaceCard className="px-3 py-3">
          <Eyebrow>Reply detected</Eyebrow>
          <ChatBubble side="in" className="mt-2">
            Disappointed. Was late and the price kept changing.
          </ChatBubble>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-[oklch(0.62_0.22_25)]" />
            <Eyebrow hue="oklch(0.62 0.22 25)">Sentiment · negative</Eyebrow>
          </div>
        </SurfaceCard>

        {/* Shield in the middle */}
        <div className="relative">
          <div
            className="grid place-items-center h-14 w-14 rounded-full"
            style={{
              background: `color-mix(in oklch, ${hue} 16%, transparent)`,
              border: `1.5px solid ${hue}`,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              <path
                d="M11 2 L 19 5 V 12 C 19 17, 14.5 19.5, 11 21 C 7.5 19.5, 3 17, 3 12 V 5 Z"
                stroke={hue}
                strokeWidth="1.4"
                fill="none"
                strokeLinejoin="round"
              />
              <path d="M7 11 L 10 14 L 15 8" stroke={hue} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Eyebrow className="block text-center mt-1.5" hue={hue}>
            Intercepted
          </Eyebrow>
        </div>

        {/* Two destinations */}
        <div className="space-y-2">
          {/* Crossed-out public form */}
          <SurfaceCard className="px-3 py-2 relative opacity-60">
            <div className="flex items-center gap-2">
              <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
                <circle cx="5.5" cy="5.5" r="4" stroke="var(--ink-muted)" strokeWidth="1" fill="none" />
              </svg>
              <Eyebrow>Public Google form</Eyebrow>
            </div>
            <span
              aria-hidden
              className="absolute left-2 right-2 top-1/2 h-px"
              style={{ background: "var(--ink-muted)" }}
            />
          </SurfaceCard>
          {/* Active manager queue */}
          <SurfaceCard
            className="px-3 py-2"
            style={{ borderColor: `color-mix(in oklch, ${hue} 50%, transparent)` }}
          >
            <Eyebrow hue={hue}>Manager · resolution form</Eyebrow>
            <p className="mt-1 text-[10px] font-medium text-[var(--ink)]">Open ticket</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="block h-1 w-1 rounded-full bg-[var(--success)]" />
              <Eyebrow hue="var(--success)">Owner: Alex</Eyebrow>
            </div>
          </SurfaceCard>
        </div>
      </div>

      <AmberSpark className="top-10 right-12" />
    </div>
  );
}

/** 04 — Tech leaderboard with avatars + bonuses. */
function TechLeaderboard({ hue }: GraphicProps) {
  const techs = [
    { name: "Mike R.", initials: "MR", stars: 12, bonus: 360, leader: true },
    { name: "Sarah L.", initials: "SL", stars: 8, bonus: 240 },
    { name: "Tom B.", initials: "TB", stars: 5, bonus: 150 },
  ];
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-10 -right-10 h-64 w-64 opacity-35" />

      <SurfaceCard elevated className="w-full max-w-sm">
        <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-[var(--border)]">
          <Eyebrow hue={hue}>Tech leaderboard · this month</Eyebrow>
          <span className="font-display text-xs font-semibold text-[var(--ink)]">$750 paid</span>
        </div>
        <ul className="divide-y divide-[var(--border)]">
          {techs.map((t, i) => (
            <li key={t.name} className="px-5 py-3 flex items-center gap-3 relative">
              {t.leader && (
                <span
                  aria-hidden
                  className="absolute inset-0 -z-0"
                  style={{
                    background: `linear-gradient(90deg, color-mix(in oklch, ${hue} 8%, transparent), transparent)`,
                  }}
                />
              )}
              <span
                className="font-mono text-[9px] uppercase tracking-wider tabular-nums w-5"
                style={{ color: t.leader ? hue : "var(--ink-faint)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="h-9 w-9 rounded-full grid place-items-center font-display text-xs font-semibold shrink-0"
                style={{
                  background: t.leader
                    ? `color-mix(in oklch, ${hue} 18%, transparent)`
                    : "var(--bg-sunken)",
                  color: t.leader ? hue : "var(--ink-muted)",
                }}
              >
                {t.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-[var(--ink)]">{t.name}</p>
                <div className="mt-0.5 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} filled hue={hue} size={8} />
                  ))}
                  <span className="ml-1 font-mono text-[9px] tabular-nums text-[var(--ink-muted)]">
                    × {t.stars}
                  </span>
                </div>
              </div>
              <span
                className="font-display text-sm font-semibold tracking-[-0.015em] tabular-nums"
                style={{ color: t.leader ? hue : "var(--ink)" }}
              >
                ${t.bonus}
              </span>
            </li>
          ))}
        </ul>
        <div className="px-5 py-2.5 flex items-center justify-between border-t border-[var(--border)]">
          <Eyebrow>Auto-paid when finance approves</Eyebrow>
          <span className="block h-1 w-1 rounded-full bg-[var(--accent)]" />
        </div>
      </SurfaceCard>

      <AmberSpark className="-top-1 right-14" />
    </div>
  );
}

/** 05 — Negative ticket detail with full context. */
function TicketDetail({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 -right-10 h-64 w-64 opacity-30" />
      <Halo hue="var(--hue-support)" className="-bottom-10 -left-10 h-56 w-56 opacity-25" />

      <div className="relative w-full max-w-md">
        <div
          aria-hidden
          className="absolute -inset-1 rounded-[var(--radius-lg)] opacity-40 blur-xl"
          style={{
            background: `linear-gradient(135deg, var(--hue-support), ${hue})`,
          }}
        />
        <SurfaceCard
          elevated
          className="relative"
          style={{
            borderColor: "var(--hue-support)",
            borderWidth: 1.5,
          }}
        >
          <div className="px-5 pt-4 pb-3 border-b border-[var(--border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="block h-2 w-2 rounded-full"
                style={{ background: "var(--hue-support)" }}
              />
              <Eyebrow hue="var(--hue-support)">Critical urgency</Eyebrow>
            </div>
            <StatusPill hue="oklch(0.62 0.22 25)">Open</StatusPill>
          </div>

          <div className="p-5">
            <p className="font-display text-base font-semibold tracking-[-0.015em] text-[var(--ink)]">
              Anita Voss
            </p>
            <Eyebrow>HVAC repair · Tuesday · Tech: Mike R.</Eyebrow>

            <div className="mt-3 rounded-md bg-[var(--bg-sunken)] border border-[var(--border)] p-3">
              <Eyebrow>Complaint summary</Eyebrow>
              <p className="mt-1 text-[10px] leading-relaxed text-[var(--ink)]">
                Service window was missed. Tech arrived 90 minutes late without a heads-up call. Felt rushed during the visit.
              </p>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <ContextChip label="3rd repair" />
              <ContextChip label="Member" />
              <ContextChip label="High value" />
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <Eyebrow hue={hue}>Owner · Alex (Manager)</Eyebrow>
              <span
                className="px-2 py-0.5 rounded-full font-mono text-[8px] uppercase tracking-wider"
                style={{
                  background: `color-mix(in oklch, ${hue} 18%, transparent)`,
                  color: hue,
                }}
              >
                Resolve →
              </span>
            </div>
          </div>
        </SurfaceCard>
        <AmberSpark className="-top-2 right-6" />
      </div>
    </div>
  );
}

function ContextChip({ label }: { label: string }) {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--bg-sunken)] px-2 py-1 text-center">
      <Eyebrow>{label}</Eyebrow>
    </div>
  );
}

/** 06 — Re-engagement calendar with TCPA quiet hours. */
function ReEngagementCalendar({ hue }: GraphicProps) {
  const days = Array.from({ length: 21 }, (_, i) => i);
  // Random-stable distribution of "asks" for the illustration
  const asks = new Set([2, 4, 7, 9, 13, 16, 18]);
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 left-1/2 -translate-x-1/2 h-72 w-[80%] opacity-30" />

      <SurfaceCard elevated className="w-full max-w-md">
        <div className="px-5 pt-4 pb-3 border-b border-[var(--border)] flex items-center justify-between">
          <Eyebrow hue={hue}>Re-engagement · this month</Eyebrow>
          <Eyebrow>3 weeks shown</Eyebrow>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-7 gap-1.5">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <Eyebrow key={i} className="text-center">
                {d}
              </Eyebrow>
            ))}
            {days.map((d) => (
              <div
                key={d}
                className="aspect-square rounded-sm border border-[var(--border)] bg-[var(--bg-sunken)] flex items-center justify-center"
                style={
                  asks.has(d)
                    ? {
                        background: `color-mix(in oklch, ${hue} 14%, transparent)`,
                        borderColor: `color-mix(in oklch, ${hue} 50%, transparent)`,
                      }
                    : undefined
                }
              >
                {asks.has(d) && (
                  <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden>
                    <rect x="1" y="2" width="7" height="5" rx="0.6" stroke={hue} strokeWidth="0.7" fill="none" />
                    <path d="M1 3 L 4.5 5 L 8 3" stroke={hue} strokeWidth="0.7" fill="none" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Quiet hours band */}
          <div className="mt-4 rounded-md border border-dashed border-[var(--border-strong)] px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                <circle cx="6" cy="6" r="4.5" stroke="var(--ink-muted)" strokeWidth="0.9" fill="none" />
                <path d="M6 3 V 6 L 8 7" stroke="var(--ink-muted)" strokeWidth="0.9" strokeLinecap="round" fill="none" />
              </svg>
              <Eyebrow>Quiet hours respected · 9pm–9am</Eyebrow>
            </div>
            <Eyebrow hue={hue}>TCPA-clean</Eyebrow>
          </div>
        </div>
      </SurfaceCard>

      <AmberSpark className="bottom-12 right-12" />
    </div>
  );
}

export const ReviewGraphics = [
  SentimentRouting,
  MultiLocation,
  NegativeIntercept,
  TechLeaderboard,
  TicketDetail,
  ReEngagementCalendar,
];
