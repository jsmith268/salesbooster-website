import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { ROICalculator } from "@/components/site/roi-calculator";
import { Reveal } from "@/components/ui/reveal";
import { CTABanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "ROI calculator — how much you're leaving on the table",
  description:
    "Estimate the monthly and annual revenue lift SalesBooster delivers based on your team size, ticket count, and average sale.",
};

export default function ROIPage() {
  return (
    <>
      <SiteNav />
      <main>
        <header className="relative pt-28 sm:pt-40 pb-12 overflow-hidden">
          <div className="container-page relative z-10 max-w-3xl">
            <Reveal>
              <p className="eyebrow">ROI calculator</p>
              <h1 className="mt-5 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,4.75rem)] text-balance">
                See what you're{" "}
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
                  leaving on the truck.
                </em>
              </h1>
              <p className="mt-6 text-lg text-[var(--ink-muted)] max-w-2xl text-pretty">
                Drag the sliders to match your operation. The number on the right is the monthly lift across the four Boosters, based on what early operators are actually seeing.
              </p>
            </Reveal>
          </div>
        </header>

        <div className="container-page pb-24">
          <ROICalculator />
        </div>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  );
}
