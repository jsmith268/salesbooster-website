import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Reserve your spot — SalesBooster launch waitlist",
  description:
    "Reserve your spot on the SalesBooster launch waitlist and lock 50% off public pricing — for the life of your account.",
};

export default async function WaitlistPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; product?: string; source?: string }>;
}) {
  const sp = await searchParams;

  return (
    <>
      <SiteNav />
      <main>
        <header className="relative pt-28 sm:pt-40 pb-12 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(circle, oklch(0.55 0.22 305 / 0.5), transparent 70%)",
            }}
          />
          <div className="container-page relative z-10 max-w-2xl mx-auto text-center">
            <Reveal>
              <p className="eyebrow">Waitlist</p>
              <h1 className="mt-5 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,4.5rem)] text-balance">
                Reserve your spot.
              </h1>
              <p className="mt-6 text-lg text-[var(--ink-muted)] text-pretty">
                Five questions. No demo call. Your 50%-off launch rate locks the moment you submit — for the life of your account.
              </p>
            </Reveal>
          </div>
        </header>

        <div className="container-page pb-32">
          <div className="rounded-[var(--radius-xl)] bg-[var(--bg)] border border-[var(--border)] p-10 sm:p-14 max-w-2xl mx-auto" style={{ boxShadow: "var(--shadow-card)" }}>
            <WaitlistForm defaultPlan={sp.plan} />
          </div>

          <p className="mt-8 text-center text-sm text-[var(--ink-subtle)]">
            Multi-brand or franchise operator?{" "}
            <Link
              href="/apply?tier=enterprise"
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-bright)] underline-offset-2 hover:underline"
            >
              Apply for launch access →
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
