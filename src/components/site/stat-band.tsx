import { Reveal } from "@/components/ui/reveal";

/**
 * Mechanism cards — what changes after the platform is connected, and why.
 * Evidence/logic-based: each card describes the mechanism, not a fabricated number.
 */
const MECHANISMS = [
  {
    outcome: "Bigger tickets",
    where: "At the door",
    mechanism:
      "Three priced options with photos let customers self-select up instead of accepting or refusing one verbal price.",
  },
  {
    outcome: "More reviews",
    where: "After every job",
    mechanism:
      "Every customer is asked. Sentiment-filtered routing sends happy ones to Google and detractors to a private resolution flow.",
  },
  {
    outcome: "Tracked referrals",
    where: "Every closed job",
    mechanism:
      "Each customer gets a unique attribution path, so word-of-mouth becomes a measurable channel with automatic rewards.",
  },
  {
    outcome: "Recovered revenue",
    where: "While you sleep",
    mechanism:
      "Cold estimates, lapsed memberships, and overdue invoices get follow-up automatically — work no human had time for.",
  },
];

export function StatBand() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)] border-y border-[var(--border)]">
      {MECHANISMS.map((m, i) => (
        <Reveal key={m.outcome} delay={i * 60}>
          <div className="px-6 py-10 sm:py-12 h-full flex flex-col">
            <div
              className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.025em]"
              style={{
                background:
                  "linear-gradient(135deg in oklch, oklch(0.18 0.04 280), oklch(0.32 0.18 285) 65%, oklch(0.45 0.22 295))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {m.outcome}
            </div>
            <div className="mt-2 text-xs font-mono uppercase tracking-wider text-[var(--ink-subtle)]">
              {m.where}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)] text-pretty">
              {m.mechanism}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
