import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { LaunchCountdown } from "./launch-countdown";

/**
 * Confidence + exclusivity. The product is built and live.
 * We're choosing initial launch partners and offering them 50% off for life.
 */
export function TrustBlock() {
  return (
    <Reveal>
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20 items-start">
          <div>
            <p className="eyebrow">Why this is different</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.96] text-[var(--ink)] text-balance">
              Built. Live. Picking launch partners.
            </h2>
          </div>

          <div className="space-y-5 text-[1.075rem] leading-relaxed text-[var(--ink-muted)] text-pretty max-w-2xl">
            <p>
              The platform is built and running in production. It connects directly to your existing field-service software, reads your jobs and pricebook, and works the revenue moments your team can't be in the room for — proposals at the door, follow-up at midnight, review requests, referral attribution, AR recovery.
            </p>
            <p>
              For launch, we&rsquo;re selecting a small group of operators across HVAC, plumbing, electrical, and garage door. Launch partners get 50% off public pricing — locked for the life of the account — and a direct line to the team building the product.
            </p>
            <p>
              Reserve a spot on the waitlist or apply for early access. Public access opens once the launch group is set.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <LaunchCountdown variant="block" />
              <Link
                href="/pricing"
                className="text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-bright)] underline-offset-2 hover:underline"
              >
                See launch pricing →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
