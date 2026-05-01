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
   Referral Booster — azure hue (var(--hue-referral))
   ───────────────────────────────────────────────────────────────────── */

/** 01 — Auto-enrollment SMS sent automatically after a job completes. */
function AutoEnrollment({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 -right-8 h-64 w-64 opacity-40" />

      {/* Job-completed badge floating above */}
      <div className="absolute top-6 left-6 sm:left-10">
        <SurfaceCard className="px-3 py-2 flex items-center gap-2">
          <span
            className="grid place-items-center h-5 w-5 rounded-full"
            style={{ background: `color-mix(in oklch, var(--success) 18%, transparent)` }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path
                d="M2 5 L4 7 L8 3"
                stroke="var(--success)"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <Eyebrow>Job completed</Eyebrow>
            <p className="text-[10px] text-[var(--ink-muted)]">Mrs. Patel · 2:14 pm</p>
          </div>
        </SurfaceCard>
      </div>

      {/* Arrow showing auto-trigger */}
      <svg
        className="absolute top-[34%] left-[26%] hidden sm:block"
        width="60"
        height="40"
        viewBox="0 0 60 40"
        aria-hidden
      >
        <path
          d="M5 8 Q 30 5, 50 30"
          stroke={hue}
          strokeWidth="1.4"
          strokeDasharray="3 3"
          fill="none"
        />
        <path d="M48 25 L 52 32 L 45 32 Z" fill={hue} />
      </svg>

      <PhoneFrame className="w-[55%] max-w-[240px]">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: hue }} />
          <Eyebrow>SMS · Outbound</Eyebrow>
        </div>
        <div className="p-3 space-y-2.5">
          <ChatBubble side="out" hue={hue}>
            Hey Sarah — thanks for trusting us with the panel upgrade today. Want to share us with neighbors? We&rsquo;ve set up a small thank-you for every job that closes.
          </ChatBubble>
          <ChatBubble side="in">Sure, send it over.</ChatBubble>
          <div className="flex items-center gap-1.5 pt-1">
            <StatusPill hue={hue}>Auto-sent</StatusPill>
            <Eyebrow>2:23 pm · 9 min after job</Eyebrow>
          </div>
        </div>
      </PhoneFrame>

      <AmberSpark className="bottom-10 left-12" />
    </div>
  );
}

/** 02 — Personal phone extension + email alias. vCard preview. */
function PersonalIdentity({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-8">
      <Halo hue={hue} className="-top-10 -right-10 h-64 w-64 opacity-40" />
      <Halo hue="oklch(0.78 0.16 70)" className="-bottom-10 -left-10 h-56 w-56 opacity-25" />

      <SurfaceCard elevated className="w-full max-w-sm">
        {/* Top photo band */}
        <div
          className="relative aspect-[5/2]"
          style={{
            background: `linear-gradient(135deg in oklch, ${hue}, oklch(0.32 0.18 285))`,
          }}
        >
          <div className="absolute inset-0 grain-overlay opacity-50" />
          <div className="absolute -bottom-6 left-5">
            <div
              className="h-12 w-12 rounded-full ring-4 ring-[oklch(0.99_0.005_80)] grid place-items-center font-display font-semibold text-lg"
              style={{
                background: "oklch(0.99 0.005 80)",
                color: hue,
              }}
            >
              SP
            </div>
          </div>
          <span
            className="absolute top-3 right-3 px-2 py-0.5 rounded-full font-mono text-[8px] uppercase tracking-wider"
            style={{ background: "oklch(1 0 0 / 0.18)", color: "white", border: "1px solid oklch(1 0 0 / 0.3)" }}
          >
            Ambassador
          </span>
        </div>

        <div className="px-5 pt-9 pb-5">
          <p className="font-display text-base font-semibold tracking-[-0.015em] text-[var(--ink)]">
            Sarah Patel
          </p>
          <Eyebrow>Sunrise Heating &amp; Air · Customer #4821</Eyebrow>

          <div className="mt-4 grid gap-2">
            <ContactRow
              icon="phone"
              hue={hue}
              label="Direct extension"
              value="(415) 555-0142 · ext. 247"
            />
            <ContactRow
              icon="mail"
              hue={hue}
              label="Personal alias"
              value="sarah@sunriseheating.com"
            />
          </div>

          <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
            <Eyebrow hue={hue}>Friends call you · credit lands here</Eyebrow>
            <span className="block h-1.5 w-1.5 rounded-full" style={{ background: "var(--success)" }} />
          </div>
        </div>
      </SurfaceCard>
      <AmberSpark className="top-12 left-14" />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  hue,
}: {
  icon: "phone" | "mail";
  label: string;
  value: string;
  hue: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-md bg-[var(--bg-sunken)] border border-[var(--border)] px-3 py-2">
      <span
        className="grid place-items-center h-6 w-6 rounded-md shrink-0"
        style={{ background: `color-mix(in oklch, ${hue} 14%, transparent)` }}
      >
        {icon === "phone" ? (
          <svg width="11" height="11" viewBox="0 0 11 11">
            <path
              d="M2 2 Q 2 9, 9 9 L 9 7 L 7 6.5 L 6 7.5 Q 4 6.5, 3.5 5 L 4.5 4 L 4 2 L 2 2 Z"
              stroke={hue}
              strokeWidth="0.9"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 11 11">
            <rect x="1.5" y="2.5" width="8" height="6" rx="0.7" stroke={hue} strokeWidth="0.9" fill="none" />
            <path d="M1.5 3 L 5.5 6 L 9.5 3" stroke={hue} strokeWidth="0.9" fill="none" />
          </svg>
        )}
      </span>
      <div className="min-w-0 flex-1">
        <Eyebrow>{label}</Eyebrow>
        <p className="text-[10px] font-medium text-[var(--ink)] truncate">{value}</p>
      </div>
    </div>
  );
}

/** 03 — Native share sheet around a contact card. */
function ShareSheet({ hue }: GraphicProps) {
  const targets = [
    { label: "Messages", color: "oklch(0.62 0.16 155)", glyph: "💬" },
    { label: "Mail", color: "oklch(0.55 0.20 240)", glyph: "✉" },
    { label: "WhatsApp", color: "oklch(0.65 0.18 145)", glyph: "📱" },
    { label: "AirDrop", color: "oklch(0.55 0.22 305)", glyph: "◎" },
  ];

  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-10 left-1/2 -translate-x-1/2 h-72 w-[80%] opacity-30" />

      <PhoneFrame className="w-[60%] max-w-[260px]">
        <div className="px-4 pt-3 pb-2">
          <Eyebrow>Share contact</Eyebrow>
        </div>
        {/* Contact card preview at top */}
        <div className="mx-3 mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-sunken)] p-3 flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-full grid place-items-center font-display text-sm font-semibold shrink-0"
            style={{
              background: `color-mix(in oklch, ${hue} 18%, transparent)`,
              color: hue,
            }}
          >
            SH
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold text-[var(--ink)] truncate">
              Sunrise Heating &amp; Air
            </p>
            <p className="text-[9px] text-[var(--ink-muted)] truncate">
              via Sarah · ext. 247
            </p>
          </div>
        </div>
        {/* Share targets */}
        <div className="grid grid-cols-4 gap-2 px-3 pb-2">
          {targets.map((t) => (
            <div key={t.label} className="text-center">
              <div
                className="mx-auto h-9 w-9 rounded-[12px] grid place-items-center"
                style={{
                  background: `color-mix(in oklch, ${t.color} 16%, var(--bg-sunken))`,
                  color: t.color,
                }}
              >
                <span className="text-base">{t.glyph}</span>
              </div>
              <p className="mt-1 text-[8px] text-[var(--ink-muted)] truncate">{t.label}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--border)] px-3 py-2.5 flex items-center justify-between">
          <Eyebrow hue={hue}>Two taps</Eyebrow>
          <span className="block h-1 w-1 rounded-full bg-[var(--accent)]" />
        </div>
      </PhoneFrame>
      <AmberSpark className="top-10 right-12" />
    </div>
  );
}

/** 04 — Attribution funnel: Lead → Quote → Closed → $ to Ambassador. */
function AttributionFunnel({ hue }: GraphicProps) {
  const stages = [
    { label: "Sarah refers Mike", sub: "via personal extension", width: 100 },
    { label: "Mike calls", sub: "Tuesday · 4:12 pm", width: 88 },
    { label: "Quote sent", sub: "Better tier · $1,180", width: 72 },
    { label: "Paid invoice", sub: "Thursday · $1,180", width: 60 },
  ];

  return (
    <div className="absolute inset-0 grid place-items-center px-8">
      <Halo hue={hue} className="-top-10 -right-8 h-72 w-72 opacity-30" />

      <SurfaceCard elevated className="w-full max-w-md">
        <div className="px-5 pt-4 pb-3 border-b border-[var(--border)] flex items-center justify-between">
          <Eyebrow hue={hue}>Attribution · end-to-end</Eyebrow>
          <StatusPill hue="var(--success)">Closed</StatusPill>
        </div>
        <div className="p-5 space-y-2.5">
          {stages.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-6 shrink-0 text-center">
                <span
                  className="font-mono text-[9px] uppercase tracking-wider tabular-nums"
                  style={{ color: hue }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[10px] font-semibold text-[var(--ink)]">{s.label}</span>
                  <Eyebrow>{s.sub}</Eyebrow>
                </div>
                <div className="h-2 rounded-full bg-[var(--bg-sunken)] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.width}%`,
                      background: `linear-gradient(90deg, ${hue}, color-mix(in oklch, ${hue} 50%, oklch(0.78 0.14 70)))`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
            <div>
              <Eyebrow>Reward fired</Eyebrow>
              <p className="mt-0.5 text-[11px] font-semibold text-[var(--ink)]">
                $50 → Sarah · auto-paid
              </p>
            </div>
            <div className="font-display text-2xl font-semibold tracking-[-0.025em]" style={{ color: hue }}>
              $1,180
            </div>
          </div>
        </div>
      </SurfaceCard>

      <AmberSpark className="bottom-12 right-14" />
    </div>
  );
}

/** 05 — Reward rule + auto-paid history. */
function RewardRule({ hue }: GraphicProps) {
  const history = [
    { name: "Sarah P.", amount: "$50", date: "May 1" },
    { name: "Marco D.", amount: "$50", date: "Apr 28" },
    { name: "Lin K.", amount: "$75", date: "Apr 24" },
    { name: "Tom R.", amount: "$50", date: "Apr 19" },
  ];

  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 left-1/2 -translate-x-1/2 h-64 w-[80%] opacity-30" />

      <div className="grid gap-3 w-full max-w-md">
        {/* Rule card */}
        <SurfaceCard elevated>
          <div className="px-5 py-4 flex items-center gap-4">
            <span
              className="grid place-items-center h-10 w-10 rounded-md shrink-0"
              style={{ background: `color-mix(in oklch, ${hue} 14%, transparent)` }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <rect x="2" y="4" width="14" height="10" rx="2" stroke={hue} strokeWidth="1.2" fill="none" />
                <path d="M2 7 L 16 7" stroke={hue} strokeWidth="1.2" />
              </svg>
            </span>
            <div className="flex-1">
              <Eyebrow hue={hue}>Reward rule · active</Eyebrow>
              <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-[var(--ink)]">
                <strong>When</strong> a referred invoice is paid · <strong>Pay</strong>{" "}
                <span style={{ color: hue }} className="font-semibold">$50 cash</span> to
                the ambassador
              </p>
            </div>
            <StatusPill hue="var(--success)">Auto</StatusPill>
          </div>
        </SurfaceCard>

        {/* History list */}
        <SurfaceCard>
          <div className="px-5 pt-3 pb-2 border-b border-[var(--border)] flex items-center justify-between">
            <Eyebrow>Auto-paid · last 30 days</Eyebrow>
            <Eyebrow hue={hue}>$225 total</Eyebrow>
          </div>
          <ul className="divide-y divide-[var(--border)]">
            {history.map((h) => (
              <li key={h.name} className="flex items-center justify-between px-5 py-2">
                <div className="flex items-center gap-2">
                  <span
                    className="block h-1.5 w-1.5 rounded-full"
                    style={{ background: hue }}
                  />
                  <p className="text-[10px] font-medium text-[var(--ink)]">{h.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Eyebrow>{h.date}</Eyebrow>
                  <p className="text-[10px] font-mono tabular-nums text-[var(--ink)]">
                    {h.amount}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SurfaceCard>
      </div>
      <AmberSpark className="-top-1 right-12" />
    </div>
  );
}

/** 06 — Ambassador-facing portal scoreboard. */
function AmbassadorPortal({ hue }: GraphicProps) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6">
      <Halo hue={hue} className="-top-12 -right-10 h-72 w-72 opacity-35" />
      <Halo hue="oklch(0.78 0.16 70)" className="-bottom-10 -left-10 h-56 w-56 opacity-25" />

      <SurfaceCard elevated className="w-full max-w-md">
        <WindowChrome label="ambassadors.sunrise.com" />
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <Eyebrow hue={hue}>Your ambassador status</Eyebrow>
              <p className="mt-1 font-display text-base font-semibold tracking-[-0.015em] text-[var(--ink)]">
                Welcome back, Sarah.
              </p>
            </div>
            <div
              className="h-9 w-9 rounded-full grid place-items-center font-display text-xs font-semibold"
              style={{
                background: `color-mix(in oklch, ${hue} 18%, transparent)`,
                color: hue,
              }}
            >
              SP
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              { label: "Referrals", value: "5", hue },
              { label: "Active", value: "2", hue: "oklch(0.78 0.14 70)" },
              { label: "Earned", value: "$250", hue: "var(--success)" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-sunken)] p-2.5 text-center"
              >
                <Eyebrow>{s.label}</Eyebrow>
                <p
                  className="mt-1 font-display text-base font-semibold tracking-[-0.02em] tabular-nums"
                  style={{ color: s.hue }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Eyebrow>Recent referrals</Eyebrow>
            <ul className="mt-2 space-y-1.5">
              {[
                { name: "Mike R.", status: "Paid · $50", tone: "success" },
                { name: "Anita V.", status: "Quote sent", tone: "neutral" },
                { name: "James T.", status: "Calling", tone: "neutral" },
              ].map((r) => (
                <li
                  key={r.name}
                  className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--bg-sunken)] px-2.5 py-1.5"
                >
                  <p className="text-[10px] font-medium text-[var(--ink)]">{r.name}</p>
                  <Eyebrow hue={r.tone === "success" ? "var(--success)" : "var(--ink-muted)"}>
                    {r.status}
                  </Eyebrow>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SurfaceCard>

      <AmberSpark className="top-10 left-14" />
    </div>
  );
}

export const ReferralGraphics = [
  AutoEnrollment,
  PersonalIdentity,
  ShareSheet,
  AttributionFunnel,
  RewardRule,
  AmbassadorPortal,
];
