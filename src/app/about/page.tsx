import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/ui/reveal";
import { CTABanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "About — what we're building",
  description:
    "SalesBooster is the revenue platform for home-service operators — built inside a working trades company.",
};

const PRINCIPLES = [
  {
    h: "We built it inside the work.",
    p: "Every form, every script, every report ran first inside a real home-service company. The flows you'll see were rebuilt and rejected and rebuilt again, by the people who had to live with them at 7am Monday.",
  },
  {
    h: "Operators come first.",
    p: "We design for the GM reading the dashboard at 11pm. If a feature can't be acted on the next morning, it doesn't ship.",
  },
  {
    h: "Revenue compounds. So should the platform.",
    p: "Sales, Review, Referral, Support are separate products by design. Run one. Prove the lift. Layer the next one once the first is paid back.",
  },
  {
    h: "We won't quote a number we haven't measured.",
    p: "If something's beta, we say so. If something's roadmap, we say so. The mechanism — three priced options, automated follow-up, sentiment-routed reviews — is real. The size of the lift depends on how aggressively you use it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <header className="relative pt-28 sm:pt-40 pb-20 overflow-hidden">
          <div className="container-page relative z-10 max-w-3xl">
            <Reveal>
              <p className="eyebrow">About</p>
              <h1 className="mt-5 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,5rem)] text-balance">
                The revenue platform that knows{" "}
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
                  what a service truck looks like.
                </em>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-[var(--ink-muted)] max-w-2xl leading-relaxed text-pretty">
                The platform was built inside a home-service company that runs trucks, takes calls, and sends invoices. Not in a co-working space. Not from a deck.
              </p>
            </Reveal>
          </div>
        </header>

        <Section tone="sunken">
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">How we build</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.025em] text-balance leading-[0.96]">
                Four principles.
              </h2>
              <p className="mt-4 text-[var(--ink-muted)] text-pretty">
                Not slogans. The criteria a feature has to pass before it ships.
              </p>
            </Reveal>
            <div className="space-y-8">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.h} delay={i * 80}>
                  <div className="border-l-2 border-[var(--ink)] pl-6">
                    <h3 className="font-display text-2xl tracking-[-0.02em] text-balance">
                      {p.h}
                    </h3>
                    <p className="mt-3 text-[var(--ink-muted)] text-pretty leading-relaxed">
                      {p.p}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="light">
          <div className="container-page max-w-3xl">
            <Reveal>
              <p className="eyebrow">Where we are</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-[-0.025em] text-balance leading-[0.96]">
                Built. Live. Join us as a launch partner.
              </h2>
              <div className="mt-7 space-y-4 text-[1.075rem] leading-relaxed text-[var(--ink-muted)] text-pretty">
                <p>
                  The product is in production. It connects directly to your customers, jobs, estimates, and invoices through your existing field-service software, so we hold the bar high on stability, security, and accuracy. We&rsquo;ve held it there in real shops for months.
                </p>
                <p>
                  For our public launch, we&rsquo;re selecting a small group of operators across HVAC, plumbing, electrical, and garage door. Launch partners get dedicated onboarding for their trade and FSM, a direct line to the team, and 50% off public pricing — locked for the life of the account.
                </p>
                <p>
                  The waitlist secures your launch-rate spot. The application is for operators who want priority placement in the next cohort. Once the launch group is set, public access opens and pricing rises.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  );
}
