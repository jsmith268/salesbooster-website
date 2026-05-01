import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Section } from "@/components/site/section";
import { PricingTable } from "@/components/site/pricing-table";
import { FAQ } from "@/components/site/faq";
import { Reveal } from "@/components/ui/reveal";
import { LaunchCountdown } from "@/components/site/launch-countdown";

export const metadata: Metadata = {
  title: "Pricing — limited-time launch pricing, 50% off for life",
  description:
    "Limited-time launch pricing: 50% off public rates, locked for the life of your account. Reserve your spot on the waitlist or apply for early access.",
};

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main>
        <header className="relative pt-28 sm:pt-40 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.14 70 / 0.5), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(circle, oklch(0.55 0.22 305 / 0.5), transparent 70%)",
            }}
          />

          <div className="container-page relative z-10 max-w-3xl">
            <Reveal>
              <p className="eyebrow">Limited-time launch pricing</p>
              <h1 className="mt-5 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,5rem)] text-balance">
                Half price.{" "}
                <em
                  className="not-italic"
                  style={{
                    background:
                      "linear-gradient(105deg in oklch, oklch(0.32 0.18 285), oklch(0.55 0.22 305) 60%, oklch(0.78 0.14 70))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  For life.
                </em>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-[var(--ink-muted)] max-w-xl leading-relaxed text-pretty">
                Public pricing rises as we scale. Operators who join during launch always pay 50% of whatever the public rate is — for the life of your account. Your dollar discount compounds with every price update we ship.
              </p>
              <div className="mt-7">
                <LaunchCountdown variant="block" />
              </div>
            </Reveal>
          </div>
        </header>

        <div className="container-page pb-20">
          <PricingTable />
        </div>

        <Section>
          <div className="container-page max-w-4xl">
            <Reveal>
              <p className="eyebrow">How job allotments work</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.025em] text-balance leading-[0.96]">
                One unit. No surprises.
              </h2>
              <p className="mt-6 text-lg text-[var(--ink-muted)] leading-relaxed text-pretty max-w-2xl">
                A job is one completed service appointment in your field-service software. Whichever Boosters you have running — proposals, reviews, ambassador enrollment, AR recovery, customer chat — all of it is included for the jobs you&rsquo;ve got covered. Past your monthly allotment, additional jobs bill at your tier&rsquo;s per-job rate. You set a monthly overage ceiling in your account. We won&rsquo;t bill past it without your approval.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Stat label="Starter overage" value="$2.99" sub="per additional job" />
                <Stat label="Growth overage" value="$2.49" sub="per additional job" />
                <Stat label="Pro overage" value="$1.99" sub="per additional job" />
              </div>
            </Reveal>
          </div>
        </Section>

        <Section tone="sunken">
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Pricing FAQ</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.025em] text-balance leading-[0.96]">
                Plain answers about money.
              </h2>
            </div>
            <FAQ />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg)] p-5">
      <p className="text-xs font-mono uppercase tracking-wider text-[var(--ink-subtle)]">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-sm text-[var(--ink-muted)]">{sub}</p>
    </div>
  );
}
