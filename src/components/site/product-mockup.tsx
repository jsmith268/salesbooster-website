/**
 * Stylized product mockup as illustration — NOT a screenshot.
 * Per /graphics-forge: increased line weight, abstracted text as pill shapes,
 * tilt 8–15°, drop shadow, layered depth.
 *
 * Shows a "Good / Better / Best" three-tier proposal — the core Sales Booster moment.
 */
export function ProductMockup() {
  return (
    <div
      role="img"
      aria-label="Stylized illustration of a Good, Better, Best service proposal — the customer is choosing the Better tier at $1,180."
      className="relative w-full max-w-[520px] mx-auto"
      style={{ perspective: "1600px" }}
    >
      <div
        className="relative"
        style={{
          transform: "rotateX(8deg) rotateY(-12deg) rotateZ(-2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow halo */}
        <div
          aria-hidden
          className="absolute -inset-12 rounded-full blur-3xl opacity-50"
          style={{
            background:
              "conic-gradient(from 220deg at 50% 50% in oklch, oklch(0.78 0.16 70), oklch(0.55 0.22 305), oklch(0.62 0.24 290), oklch(0.78 0.16 70))",
          }}
        />

        {/* Card frame */}
        <div
          className="relative bg-[oklch(0.99_0.005_80)] rounded-[var(--radius-lg)] overflow-hidden"
          style={{
            boxShadow:
              "0 60px 100px -30px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(1 0 0 / 0.05)",
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-[var(--border)] bg-[var(--bg-sunken)]">
            <span className="block h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.12_25)]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.13_85)]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.13_145)]" />
            <span className="ml-3 text-[10px] font-mono uppercase tracking-wider text-[var(--ink-subtle)]">
              proposal · 04
            </span>
          </div>

          {/* Header band */}
          <div className="px-6 pt-6 pb-4 border-b border-[var(--border)]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--ink-subtle)] mb-2">
              Diagnosis
            </div>
            <div className="h-3 rounded-full bg-[var(--ink)]" style={{ width: "70%" }} />
            <div className="mt-2 h-2 rounded-full bg-[var(--ink-faint)]" style={{ width: "45%" }} />
          </div>

          {/* Three tiers */}
          <div className="p-5 grid grid-cols-3 gap-3">
            {[
              { label: "Good", tint: "oklch(0.62 0.16 240)", price: "$580", h: 78 },
              { label: "Better", tint: "oklch(0.55 0.22 305)", price: "$1,180", h: 112, popular: true },
              { label: "Best", tint: "oklch(0.78 0.14 70)", price: "$1,840", h: 144 },
            ].map((tier) => (
              <div
                key={tier.label}
                className="relative rounded-[var(--radius)] p-3 border"
                style={{
                  background: tier.popular
                    ? `color-mix(in oklch, ${tier.tint} 8%, transparent)`
                    : "transparent",
                  borderColor: tier.popular ? tier.tint : "var(--border)",
                }}
              >
                {tier.popular && (
                  <span
                    className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-wider"
                    style={{ background: tier.tint, color: "white" }}
                  >
                    Pick
                  </span>
                )}
                <div
                  className="text-[10px] font-mono uppercase tracking-wider"
                  style={{ color: tier.tint }}
                >
                  {tier.label}
                </div>
                <div className="mt-1 font-display text-base font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  {tier.price}
                </div>
                <div className="mt-3 space-y-1.5">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full bg-[var(--ink-faint)]"
                      style={{ width: `${60 + i * 12}%` }}
                    />
                  ))}
                </div>
                <div
                  className="mt-3 rounded-md"
                  style={{
                    height: tier.h * 0.4,
                    background: `linear-gradient(180deg, ${tier.tint}, transparent)`,
                    opacity: 0.18,
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA bar */}
          <div className="border-t border-[var(--border)] px-5 py-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--ink-subtle)]">
                Selected
              </div>
              <div className="font-display font-semibold text-[var(--ink)]">
                Better — $1,180
              </div>
            </div>
            <div
              className="h-9 px-4 rounded-full inline-flex items-center font-medium text-sm text-white"
              style={{ background: "var(--ink)" }}
            >
              Approve & sign
            </div>
          </div>
        </div>

        {/* Floating sub-card (occlusion = depth, off-grid placement) */}
        <div
          className="absolute -bottom-12 -left-10 w-44 rounded-[var(--radius)] bg-[var(--bg)] p-3"
          style={{
            transform: "translateZ(40px) rotate(-4deg)",
            boxShadow: "0 30px 60px -20px oklch(0 0 0 / 0.4)",
          }}
        >
          <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--ink-subtle)] mb-1.5">
            Avg ticket lift
          </div>
          <div className="font-display text-3xl font-semibold tracking-[-0.03em]" style={{
            background: "linear-gradient(105deg in oklch, oklch(0.55 0.22 305), oklch(0.78 0.14 70))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            +37%
          </div>
          <div className="mt-2 flex items-end gap-1 h-8">
            {[28, 38, 32, 56, 48, 72, 64].map((h, i) => (
              <span
                key={i}
                className="block w-2 rounded-sm bg-[var(--brand)] opacity-70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
