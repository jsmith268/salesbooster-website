import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroIllustration } from "./hero-illustration";
import { ProductMockup } from "./product-mockup";
import { LaunchCountdown } from "./launch-countdown";
import { SITE } from "@/lib/site-config";

export function Hero() {
  return (
    <header className="relative isolate min-h-[640px] sm:min-h-[760px] lg:min-h-[880px] flex items-center overflow-hidden">
      <HeroIllustration />

      <div className="container-page relative z-10 pt-28 pb-24 sm:pt-40 sm:pb-36 lg:pb-40 grid gap-12 lg:gap-20 xl:gap-24 lg:grid-cols-[1.15fr_0.85fr] items-center w-full">
        <div className="max-w-[640px]">
          <Reveal>
            <LaunchCountdown variant="pill" tone="on-dark" />
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 font-display tracking-[-0.04em] leading-[0.94] text-[clamp(2.75rem,6.4vw,5.6rem)] text-[var(--ink-on-dark)] text-balance">
              Bigger tickets. More reviews. Tracked referrals.{" "}
              <em
                className="not-italic font-display"
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

          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg sm:text-[1.2rem] leading-relaxed text-[var(--ink-on-dark-muted)] text-pretty">
              The platform reads every job and works what your team can&rsquo;t get to: bigger tickets at the door, reviews and referrals after, cold estimates that don&rsquo;t die. Plugs into the field-service software you already run. Built by operators, for operators. Join us as a launch partner today.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
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

          <Reveal delay={480}>
            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--ink-on-dark-muted)] max-w-xl">
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
        <Reveal delay={300} className="hidden lg:block lg:pl-4 xl:pl-0">
          <ProductMockup />
        </Reveal>
      </div>
    </header>
  );
}
