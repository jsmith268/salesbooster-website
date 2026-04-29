import { Reveal } from "@/components/ui/reveal";

/**
 * "Why we're not selling yet" — a founder-style trust block.
 * Sets expectations honestly: pre-launch, design partners only, founding pricing locked.
 * Per user direction: company-anonymous (no founder name).
 */
export function TrustBlock() {
  return (
    <Reveal>
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20 items-start">
          <div>
            <p className="eyebrow">A note on timing</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.96] text-[var(--ink)] text-balance">
              Why we're not selling yet.
            </h2>
          </div>

          <div className="space-y-5 text-[1.075rem] leading-relaxed text-[var(--ink-muted)] text-pretty max-w-2xl">
            <p>
              The numbers on this site are real. Every flow shipped first inside a working home-service company — tested on actual techs, actual customers, actual invoices. None of it came out of a pitch deck.
            </p>
            <p>
              Public sales open later this year. Until then, the door is open to a small group: 25 design partners across HVAC, plumbing, electrical, and garage door. Join now and you keep founding pricing for the lifetime of the account, plus a direct line to the people building it.
            </p>
            <p>
              There's nothing to log into yet, so there's no sign-up form. There's a waitlist. And there's an application. Pick the one that matches where you are.
            </p>
            <div className="pt-3 flex items-center gap-4">
              <span
                className="block h-px w-12"
                style={{ background: "var(--ink)" }}
              />
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink-subtle)]">
                The team
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
