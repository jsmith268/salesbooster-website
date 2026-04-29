import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Section, SectionHeader } from "@/components/site/section";
import { ProductGrid } from "@/components/site/product-grid";
import { Timeline } from "@/components/site/timeline";
import { StatBand } from "@/components/site/stat-band";
import { TrustBlock } from "@/components/site/trust-block";
import { IntegrationBand } from "@/components/site/integration-band";
import { FAQ } from "@/components/site/faq";
import { CTABanner } from "@/components/site/cta-banner";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />

        <div className="container-page mt-[-1px]">
          <StatBand />
        </div>

        <Section tone="light">
          <div className="container-page">
            <Reveal>
              <SectionHeader
                eyebrow="The platform · 4 products"
                title={
                  <>
                    Four engines.{" "}
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
                      One platform.
                    </em>
                  </>
                }
                description="Each Booster fixes a specific revenue leak. Most operators start with one. The lifts stack."
              />
            </Reveal>
            <div className="mt-16">
              <ProductGrid />
            </div>
          </div>
        </Section>

        <TrustBlock />

        <Section tone="sunken">
          <div className="container-page">
            <Reveal>
              <SectionHeader
                eyebrow="A day in the field"
                title="Seven moments where revenue walks out the door."
                description="Operators lose money in the same seven moments on every job. The platform takes each one back."
              />
            </Reveal>
            <div className="mt-20">
              <Timeline />
            </div>
          </div>
        </Section>

        <div className="py-24 sm:py-32">
          <IntegrationBand />
        </div>

        <Section tone="light">
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <Reveal>
              <SectionHeader
                eyebrow="Questions"
                title="Asked and answered."
                description="If yours isn't here, send it over. We don't do canned responses."
              />
            </Reveal>
            <Reveal delay={120}>
              <FAQ />
            </Reveal>
          </div>
        </Section>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  );
}
