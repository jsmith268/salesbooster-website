import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Section, SectionHeader } from "@/components/site/section";
import { Reveal } from "@/components/ui/reveal";
import { CTABanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Integrations — Housecall Pro and the tools you already run",
  description:
    "SalesBooster syncs bidirectionally with Housecall Pro and integrates with Google Reviews, Stripe, QuickBooks, and more.",
};

const PRIMARY = {
  name: "Housecall Pro",
  status: "Live · Required · MAX plan",
  description:
    "Pricebook, customers, jobs, estimates, invoices — all of it syncs both ways in real time. Setup takes under 48 hours from the moment you connect the account.",
  capabilities: [
    "Pricebook sync (instant)",
    "Customer and address sync",
    "Job → estimate handoff",
    "Tier-pick → estimate push",
    "Invoice and payment status mirror",
    "Membership and add-on attribution",
  ],
};

const ECOSYSTEM = [
  { name: "Google Reviews", status: "Live", note: "Per-location routing for Review Booster" },
  { name: "Stripe Billing", status: "Live", note: "Founding-customer subscriptions" },
  { name: "Twilio SMS", status: "Live", note: "TCPA-compliant messaging" },
  { name: "QuickBooks Online", status: "Q1 2027", note: "Bookkeeping export" },
  { name: "ServiceTitan", status: "Q4 2026", note: "Pricebook + jobs sync" },
  { name: "Jobber", status: "Q4 2026", note: "Pricebook + jobs sync" },
  { name: "FieldEdge", status: "Roadmap", note: "On request from design partners" },
  { name: "Slack / Teams", status: "Q1 2027", note: "Estimate-status notifications" },
  { name: "Zapier", status: "Q1 2027", note: "Custom workflow triggers" },
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
                  FSM you already run.
                </em>
              </h1>
              <p className="mt-7 text-lg text-[var(--ink-muted)] max-w-2xl text-pretty">
                No double entry. No CSV exports. No spreadsheets. The platform reads from and writes to your existing system of record.
              </p>
            </Reveal>
          </div>
        </header>

        {/* Primary integration */}
        <div className="container-page pb-24">
          <Reveal>
            <div
              className="relative isolate overflow-hidden rounded-[var(--radius-xl)] p-10 sm:p-14 text-[var(--ink-on-dark)]"
              style={{ background: "var(--surface-ink)" }}
            >
              <div
                aria-hidden
                className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.65 0.16 155 / 0.6), transparent 70%)",
                }}
              />
              <div aria-hidden className="absolute inset-0 grain-overlay opacity-50" />
              <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[oklch(1_0_0_/_0.08)] border border-[oklch(1_0_0_/_0.16)] font-mono text-[10px] uppercase tracking-wider">
                    <span
                      className="block h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--success)" }}
                    />
                    Live · Required
                  </span>
                  <h2 className="mt-5 font-display text-5xl tracking-[-0.03em] leading-[0.96] text-balance">
                    {PRIMARY.name}
                  </h2>
                  <p className="mt-4 text-[var(--ink-on-dark-muted)] text-pretty leading-relaxed max-w-md">
                    {PRIMARY.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {PRIMARY.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-[var(--ink-on-dark)]"
                    >
                      <span
                        className="mt-1.5 block h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Section tone="sunken">
          <div className="container-page">
            <Reveal>
              <SectionHeader
                eyebrow="Ecosystem"
                title="What else we sync with."
                description="Live and on the roadmap. Design partners get to vote on what ships next."
              />
            </Reveal>

            <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ECOSYSTEM.map((e, i) => {
                const live = e.status === "Live";
                return (
                  <Reveal key={e.name} delay={i * 40}>
                    <div className="rounded-[var(--radius-lg)] bg-[var(--bg)] border border-[var(--border)] p-6">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-lg font-semibold tracking-[-0.015em]">
                          {e.name}
                        </h3>
                        <span
                          className="font-mono text-[10px] uppercase tracking-wider shrink-0"
                          style={{
                            color: live
                              ? "var(--success)"
                              : "var(--ink-subtle)",
                          }}
                        >
                          {e.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[var(--ink-muted)] text-pretty">
                        {e.note}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Section>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  );
}
