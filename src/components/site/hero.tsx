import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroIllustration } from "./hero-illustration";
import { ProductMockup } from "./product-mockup";
import { SITE } from "@/lib/site-config";

export function Hero() {
  return (
    <header className="relative isolate min-h-[640px] sm:min-h-[760px] lg:min-h-[860px] flex items-end overflow-hidden">
      <HeroIllustration />

      <div className="container-page relative z-10 pt-28 pb-20 sm:pt-40 sm:pb-32 grid gap-12 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr] items-end w-full">
        <div className="max-w-[640px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[oklch(1_0_0_/_0.08)] backdrop-blur-md border border-[oklch(1_0_0_/_0.14)] text-[var(--ink-on-dark)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent-bright)] opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider opacity-90">
                {SITE.status.short} · Q3 2026
              </span>
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 font-display tracking-[-0.04em] leading-[0.94] text-[clamp(2.75rem,6.4vw,5.6rem)] text-[var(--ink-on-dark)] text-balance">
              Every job is{" "}
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
                three revenue moments.
              </em>{" "}
              You're capturing one.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg sm:text-[1.2rem] leading-relaxed text-[var(--ink-on-dark-muted)] text-pretty">
              The platform reads your Housecall Pro jobs and works the parts your techs don't. Bigger tickets at the door. Reviews and referrals after. Estimates pulled back from the dead. We're not selling yet — we're onboarding 25 design partners.
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
            </div>
          </Reveal>

          <Reveal delay={480}>
            <p className="mt-7 text-sm text-[var(--ink-on-dark-muted)] max-w-md">
              No credit card. No demo call. Your founding price is locked the moment you join.
            </p>
          </Reveal>
        </div>

        {/* Product mockup illustration */}
        <Reveal delay={300} className="hidden lg:block">
          <ProductMockup />
        </Reveal>
      </div>
    </header>
  );
}
