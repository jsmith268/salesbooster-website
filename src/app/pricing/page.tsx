import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Section } from "@/components/site/section";
import { PricingTable } from "@/components/site/pricing-table";
import { FAQ } from "@/components/site/faq";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Pricing — founding-customer access",
  description:
    "Founding-customer pricing for design partners. Reserve a Starter or Growth waitlist spot, or apply for Pro / Enterprise.",
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
              <p className="eyebrow">Founding-customer pricing</p>
              <h1 className="mt-5 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,5rem)] text-balance">
                Lock your price{" "}
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
                  before public launch.
                </em>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-[var(--ink-muted)] max-w-xl leading-relaxed text-pretty">
                The number you see today is the number you keep. For the lifetime of your account, if you join before public sales open.
              </p>
            </Reveal>
          </div>
        </header>

        <div className="container-page pb-20">
          <PricingTable />
        </div>

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
