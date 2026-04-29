import { Reveal } from "@/components/ui/reveal";
import { TIMELINE } from "@/lib/site-config";

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical track — off-grid, with subtle gradient */}
      <div
        aria-hidden
        className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, var(--border-strong) 8%, var(--border-strong) 92%, transparent 100%)",
        }}
      />

      <ol className="space-y-20 md:space-y-32 list-none p-0 m-0">
        {TIMELINE.map((step, i) => (
          <Reveal key={step.num} delay={i * 60} as="li">
            <div className="relative" aria-label={`Step ${step.num} — ${step.stage}`}>
              {/* Stage label band */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-3 inline-flex items-center gap-3 mb-8 md:mb-0 px-3 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border-strong)]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-subtle)]">
                  {step.num}
                </span>
                <span className="font-display text-sm font-semibold tracking-[-0.01em]">
                  {step.stage}
                </span>
              </div>

              <div className="grid md:grid-cols-2 md:gap-16 gap-5 mt-6 md:mt-12">
                {/* Without — left, sunken, muted */}
                <div className="md:pr-2 md:text-right">
                  <div className="inline-block md:block max-w-md md:max-w-none md:ml-auto p-7 rounded-[var(--radius-lg)] bg-[var(--bg-sunken)] border border-[var(--border)]">
                    <p className="eyebrow mb-3" style={{ color: "var(--ink-subtle)" }}>
                      Without SalesBooster
                    </p>
                    <h3 className="font-display text-xl tracking-[-0.02em] text-[var(--ink)] mb-2 text-balance">
                      {step.without.head}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[var(--ink-muted)] text-pretty">
                      {step.without.body}
                    </p>
                  </div>
                </div>

                {/* With — right, elevated, hue-tinted */}
                <div className="md:pl-2">
                  <div
                    className="relative max-w-md p-7 rounded-[var(--radius-lg)] bg-[var(--bg)] border border-[var(--border-strong)] transition-[transform,box-shadow] duration-[var(--dur)] ease-[var(--ease-spring)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-floating)]"
                    style={{
                      boxShadow: "var(--shadow-editorial)",
                    }}
                  >
                    {/* Off-axis accent */}
                    <span
                      aria-hidden
                      className="absolute -top-3 -right-3 h-2 w-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <p className="eyebrow mb-3" style={{ color: "var(--brand)" }}>
                      With SalesBooster
                    </p>
                    <h3 className="font-display text-xl tracking-[-0.02em] text-[var(--ink)] mb-2 text-balance">
                      {step.with.head}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[var(--ink-muted)] text-pretty">
                      {step.with.body}
                    </p>

                    <div className="mt-5 pt-5 border-t border-[var(--border)] flex items-baseline justify-between gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-subtle)]">
                        {step.with.product}
                      </span>
                      <span className="font-display text-sm font-semibold tracking-[-0.01em] text-[var(--brand)] text-right">
                        {step.with.gain}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
