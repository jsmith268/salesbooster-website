import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Section, SectionHeader } from "@/components/site/section";
import { Reveal } from "@/components/ui/reveal";
import { CTABanner } from "@/components/site/cta-banner";
import { FsmMark, AdjacentMark, type FsmKey } from "@/components/marks/fsm-icons";

export const metadata: Metadata = {
  title: "Integrations — the field-service systems we connect to",
  description:
    "SalesBooster connects directly to Housecall Pro, ServiceTitan, Jobber, and Service Fusion, plus the adjacent tools you already run.",
};

const FSMS: {
  key: FsmKey;
  name: string;
  status: string;
  description: string;
  capabilities: string[];
}[] = [
  {
    key: "housecall-pro",
    name: "Housecall Pro",
    status: "Connected",
    description:
      "First-class connection. Pricebook, customers, jobs, estimates, invoices — all of it syncs both ways in real time. Setup in under 48 hours.",
    capabilities: [
      "Bi-directional pricebook",
      "Job → estimate handoff",
      "Tier-pick → estimate push",
      "Invoice & payment mirror",
    ],
  },
  {
    key: "servicetitan",
    name: "ServiceTitan",
    status: "Connected",
    description:
      "First-class connection for ServiceTitan operators. Pricebook, customers, jobs, estimates, and invoices flow both ways with full membership and add-on attribution.",
    capabilities: [
      "Bi-directional pricebook",
      "Membership attribution",
      "Add-on capture",
      "Invoice & payment mirror",
    ],
  },
  {
    key: "jobber",
    name: "Jobber",
    status: "Connected",
    description:
      "First-class connection for Jobber. Quotes, jobs, customers, and invoices stay in sync — your techs work in Jobber, the platform works around it.",
    capabilities: [
      "Bi-directional pricebook",
      "Quote → estimate handoff",
      "Customer & address sync",
      "Invoice & payment mirror",
    ],
  },
  {
    key: "service-fusion",
    name: "Service Fusion",
    status: "Connected",
    description:
      "First-class connection for Service Fusion shops. Service items, customers, jobs, and invoices sync bi-directionally without any CSV step.",
    capabilities: [
      "Bi-directional service-item sync",
      "Job & dispatch handoff",
      "Customer & address sync",
      "Invoice & payment mirror",
    ],
  },
];

const ECOSYSTEM = [
  { name: "Google Reviews", note: "Per-location routing for Review Booster" },
  { name: "Stripe Billing", note: "Subscription and per-job billing" },
  { name: "Twilio SMS", note: "TCPA-compliant messaging" },
  { name: "QuickBooks Online", note: "Bookkeeping export" },
  { name: "Slack / Teams", note: "Estimate-status notifications" },
  { name: "Zapier", note: "Custom workflow triggers" },
];

export default function IntegrationsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <header className="relative pt-28 sm:pt-40 pb-20 overflow-hidden">
          <div className="container-page relative z-10 max-w-3xl">
            <Reveal>
              <p className="eyebrow">Integrations</p>
              <h1 className="mt-5 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,4.75rem)] text-balance">
                Built on top of the{" "}
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
                  software you already run.
                </em>
              </h1>
              <p className="mt-7 text-lg text-[var(--ink-muted)] max-w-2xl text-pretty">
                Four major field-service systems are first-class today. The platform reads from and writes to your existing system of record — no double entry, no CSV exports, no spreadsheets.
              </p>
            </Reveal>
          </div>
        </header>

        {/* Four FSM cards, equal weight */}
        <div className="container-page pb-20">
          <Reveal>
            <p className="eyebrow mb-6">Field-service software · first-class</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {FSMS.map((f, i) => (
              <Reveal key={f.key} delay={i * 60}>
                <div className="relative h-full rounded-[var(--radius-lg)] bg-[var(--bg)] border border-[var(--border)] p-7 sm:p-9 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <FsmMark fsm={f.key} className="h-12 w-12 shrink-0" />
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider whitespace-nowrap"
                      style={{
                        background: "color-mix(in oklch, var(--success) 16%, transparent)",
                        color: "var(--success)",
                      }}
                    >
                      ● {f.status}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-2xl sm:text-3xl tracking-[-0.025em] text-[var(--ink)] text-balance">
                    {f.name}
                  </h2>
                  <p className="mt-3 text-[var(--ink-muted)] text-pretty leading-relaxed">
                    {f.description}
                  </p>
                  <ul className="mt-6 space-y-2 grow">
                    {f.capabilities.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2.5 text-sm text-[var(--ink-muted)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--accent)" }}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={260}>
            <p className="mt-6 text-sm text-[var(--ink-subtle)] text-pretty">
              On a different field-service system? We run an integration sprint per launch partner. Tell us what you&rsquo;re on when you reserve your spot — most modern FSMs with an API can be on-boarded inside the first month.
            </p>
          </Reveal>
        </div>

        <Section tone="sunken">
          <div className="container-page">
            <Reveal>
              <SectionHeader
                eyebrow="Adjacent integrations"
                title="What else we sync with."
                description="The tools that round out the workflow — connected and available."
              />
            </Reveal>

            <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ECOSYSTEM.map((e, i) => (
                <Reveal key={e.name} delay={i * 40}>
                  <div className="rounded-[var(--radius-lg)] bg-[var(--bg)] border border-[var(--border)] p-6 flex items-start gap-4">
                    <AdjacentMark name={e.name} className="h-10 w-10" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold tracking-[-0.015em]">
                        {e.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-[var(--ink-muted)] text-pretty">
                        {e.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  );
}
