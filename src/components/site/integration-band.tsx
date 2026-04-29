import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

/**
 * Integration band — bespoke wordmarks for the FSMs and adjacent tools we sync with.
 * No third-party logos (avoids licensing friction pre-launch). Stylized type marks
 * with monoline strokes — Linear-style.
 */
const INTEGRATIONS = [
  { name: "Housecall Pro", status: "Live · MAX plan", primary: true },
  { name: "ServiceTitan", status: "Q4 2026" },
  { name: "Jobber", status: "Q4 2026" },
  { name: "Google Reviews", status: "Live" },
  { name: "Stripe Billing", status: "Live" },
  { name: "QuickBooks", status: "Q1 2027" },
];

export function IntegrationBand() {
  return (
    <Reveal>
      <div className="container-page">
        <div className="rounded-[var(--radius-lg)] bg-[var(--bg-sunken)] p-10 sm:p-14 border border-[var(--border)]">
          <div className="grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-12">
            <div>
              <p className="eyebrow">Integrations</p>
              <h3 className="mt-3 font-display text-3xl tracking-[-0.025em] text-balance">
                Built on top of the FSM you already run.
              </h3>
              <p className="mt-3 text-[var(--ink-muted)] text-pretty">
                The pricebook, customer list, jobs, estimates, and invoices sync both ways. Nothing to re-enter. Nothing to export.
              </p>
              <Link
                href="/integrations"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-bright)]"
              >
                See the full integration list →
              </Link>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {INTEGRATIONS.map((i) => (
                <li
                  key={i.name}
                  className="rounded-[var(--radius)] bg-[var(--bg)] p-4 border border-[var(--border)]"
                >
                  <p className="font-display text-sm font-semibold tracking-[-0.015em] text-[var(--ink)]">
                    {i.name}
                  </p>
                  <p
                    className="mt-1 text-[10px] font-mono uppercase tracking-wider"
                    style={{
                      color: i.primary
                        ? "var(--success)"
                        : i.status.startsWith("Live")
                        ? "var(--success)"
                        : "var(--ink-subtle)",
                    }}
                  >
                    {i.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
