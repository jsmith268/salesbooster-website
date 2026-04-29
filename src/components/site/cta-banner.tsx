import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export function CTABanner() {
  return (
    <section className="container-page py-24 sm:py-32">
      <div
        className="relative isolate overflow-hidden rounded-[var(--radius-xl)] px-8 py-20 sm:py-28 sm:px-16 text-[var(--ink-on-dark)]"
        style={{ background: "var(--surface-ink)" }}
      >
        {/* Atmospheric gradient blob */}
        <div
          aria-hidden
          className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-65"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.16 70 / 0.7), oklch(0.55 0.22 305 / 0.5) 50%, transparent 75%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle, oklch(0.62 0.24 290 / 0.7), transparent 75%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 grain-overlay opacity-60" />

        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow text-[var(--ink-on-dark-muted)]">
            Founding-customer access
          </p>
          <h2 className="mt-4 font-display text-balance leading-[0.94] tracking-[-0.035em] text-4xl sm:text-5xl lg:text-6xl">
            We're not selling yet.{" "}
            <em className="not-italic" style={{
              background: "linear-gradient(105deg in oklch, oklch(0.85 0.16 75), oklch(0.78 0.20 50))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              We're picking partners.
            </em>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-[var(--ink-on-dark-muted)] text-pretty max-w-2xl">
            Two ways in. Join the waitlist and your founding price is locked. Apply, and we'll consider you for the next design-partner cohort.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <Button asChild size="xl" variant="accent" className="w-full sm:w-auto">
              <Link href={SITE.primaryCta.href}>{SITE.primaryCta.label}</Link>
            </Button>
            <Button asChild size="xl" variant="glass" className="w-full sm:w-auto">
              <Link href="/apply">Apply for early access</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
