import { Reveal } from "@/components/ui/reveal";

const STATS = [
  { metric: "37%", label: "Average ticket lift", note: "Within first 30 days" },
  { metric: "3.2×", label: "Review volume", note: "Filtered through sentiment" },
  { metric: "$47K", label: "Recovered per quarter", note: "From dormant estimates" },
  { metric: "<48h", label: "Time to live", note: "From HCP connect to first job" },
];

export function StatBand() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)] border-y border-[var(--border)]">
      {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 60}>
          <div className="px-6 py-10 sm:py-12">
            <div
              className="font-display text-5xl sm:text-6xl font-semibold tracking-[-0.03em]"
              style={{
                background:
                  "linear-gradient(135deg in oklch, oklch(0.18 0.04 280), oklch(0.32 0.18 285) 65%, oklch(0.45 0.22 295))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.metric}
            </div>
            <div className="mt-3 font-display text-base font-semibold tracking-[-0.01em] text-[var(--ink)]">
              {s.label}
            </div>
            <div className="mt-1 text-xs font-mono uppercase tracking-wider text-[var(--ink-subtle)]">
              {s.note}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
