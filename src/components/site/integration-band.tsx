import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { FsmMark, type FsmKey } from "@/components/marks/fsm-icons";

/**
 * Integration band — the four FSMs the platform connects to as launch partners.
 * Each shows its brand-evocative mark and a connection-status pill.
 */
const FSMS: { key: FsmKey; name: string; status: string }[] = [
  { key: "housecall-pro", name: "Housecall Pro", status: "Connected" },
  { key: "servicetitan", name: "ServiceTitan", status: "Connected" },
  { key: "jobber", name: "Jobber", status: "Connected" },
  { key: "service-fusion", name: "Service Fusion", status: "Connected" },
];

export function IntegrationBand() {
  return (
    <Reveal>
      <div className="container-page">
        <div className="rounded-[var(--radius-lg)] bg-[var(--bg-sunken)] p-10 sm:p-14 border border-[var(--border)]">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-12">
            <div>
              <p className="eyebrow">Integrations</p>
              <h3 className="mt-3 font-display text-3xl tracking-[-0.025em] text-balance">
                Built on top of the field-service software you already run.
              </h3>
              <p className="mt-3 text-[var(--ink-muted)] text-pretty">
                Pricebook, customers, jobs, estimates, invoices — bidirectional sync, no double entry, no CSV exports. Four major systems are first-class today; others can be on-boarded by request.
              </p>
              <Link
                href="/integrations"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-bright)]"
              >
                See the full integration list →
              </Link>
            </div>

            <ul className="grid grid-cols-2 gap-3 self-center">
              {FSMS.map((f) => (
                <li
                  key={f.key}
                  className="flex items-center gap-4 rounded-[var(--radius)] bg-[var(--bg)] p-4 border border-[var(--border)]"
                >
                  <FsmMark fsm={f.key} className="h-10 w-10 shrink-0" />
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold tracking-[-0.015em] text-[var(--ink)] truncate">
                      {f.name}
                    </p>
                    <p
                      className="mt-0.5 text-[10px] font-mono uppercase tracking-wider"
                      style={{ color: "var(--success)" }}
                    >
                      ● {f.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
