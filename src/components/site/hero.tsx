import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroIllustration } from "./hero-illustration";
import { ProductMockup } from "./product-mockup";
import { LaunchCountdown } from "./launch-countdown";
import { SITE } from "@/lib/site-config";

export function Hero() {
  return (
    <header className="relative isolate min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden">
      <HeroIllustration />

      <div className="container-page relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 w-full">
        <Reveal>
          <LaunchCountdown variant="pill" tone="on-dark" />
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 sm:mt-7 font-display tracking-[-0.025em] leading-[1.08] text-[clamp(1.875rem,3.2vw,2.25rem)] xl:whitespace-nowrap text-[var(--ink-on-dark)]">
            <span className="whitespace-nowrap">Bigger tickets.</span>{" "}
            <span className="whitespace-nowrap">More reviews.</span>{" "}
            <span className="whitespace-nowrap">Tracked referrals.</span>{" "}
            <em
              className="not-italic font-display whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(105deg in oklch, oklch(0.85 0.16 75), oklch(0.78 0.20 50))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Recovered estimates.
            </em>
          </h1>
        </Reveal>

        <div className="mt-9 sm:mt-10 grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px] items-center">
          <div className="min-w-0">
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
                <Button asChild size="xl" variant="accent" className="w-full sm:w-auto">
                  <Link href={SITE.primaryCta.href}>{SITE.primaryCta.label}</Link>
                </Button>
                <Button asChild size="xl" variant="glass" className="w-full sm:w-auto">
                  <Link href="/apply">Apply for early access</Link>
                </Button>
                <Link
                  href="/roi"
                  className="text-sm font-medium text-[var(--ink-on-dark-muted)] hover:text-[var(--ink-on-dark)] underline-offset-4 hover:underline transition-colors sm:ml-1"
                >
                  or estimate your monthly lift →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <ul className="mt-6 sm:mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--ink-on-dark-muted)] max-w-2xl">
                <li className="inline-flex items-center gap-2">
                  <span aria-hidden className="block h-1 w-1 rounded-full bg-[var(--accent)]" />
                  No credit card
                </li>
                <li className="inline-flex items-center gap-2">
                  <span aria-hidden className="block h-1 w-1 rounded-full bg-[var(--accent)]" />
                  No demo call
                </li>
                <li className="inline-flex items-center gap-2">
                  <span aria-hidden className="block h-1 w-1 rounded-full bg-[var(--accent)]" />
                  50% off — for life
                </li>
                <li className="inline-flex items-center gap-2">
                  <span aria-hidden className="block h-1 w-1 rounded-full bg-[var(--accent)]" />
                  Live in &lt; 48h
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Product mockup illustration */}
          <Reveal delay={240} className="hidden lg:block">
            <ProductMockup />
          </Reveal>
        </div>
      </div>
    </header>
  );
}
