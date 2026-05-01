import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { ApplyForm } from "@/components/forms/apply-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Apply for early access — SalesBooster launch",
  description:
    "Apply for launch access to SalesBooster. Limited slots for Pro and Enterprise operators.",
};

const COPY: Record<"pro" | "enterprise", { eyebrow: string; title: string; body: string }> = {
  pro: {
    eyebrow: "Pro · Early access",
    title: "Apply for early access.",
    body:
      "Pro runs all four Boosters. We onboard a small number of new operators each month. A few questions and we'll get back to you.",
  },
  enterprise: {
    eyebrow: "Enterprise · Launch partner",
    title: "Apply for launch access.",
    body:
      "For companies, equity groups, and agencies managing service across more than 10 locations. We write a custom contract, run dedicated infrastructure, and assign a named integration team. A handful of launch-partner seats open each quarter.",
  },
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const sp = await searchParams;
  const tier: "pro" | "enterprise" = sp.tier === "enterprise" ? "enterprise" : "pro";
  const c = COPY[tier];

  return (
    <>
      <SiteNav />
      <main>
        <header className="relative pt-28 sm:pt-40 pb-12 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.14 70 / 0.5), transparent 70%)",
            }}
          />
          <div className="container-page relative z-10 max-w-2xl mx-auto text-center">
            <Reveal>
              <p className="eyebrow">{c.eyebrow}</p>
              <h1 className="mt-5 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,4.5rem)] text-balance">
                {c.title}
              </h1>
              <p className="mt-6 text-lg text-[var(--ink-muted)] text-pretty">
                {c.body}
              </p>
            </Reveal>
          </div>
        </header>

        <div className="container-page pb-24">
          <div
            className="rounded-[var(--radius-xl)] bg-[var(--bg)] border border-[var(--border)] p-10 sm:p-14 max-w-2xl mx-auto"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <ApplyForm tier={tier} />
          </div>

          <div className="mt-10 max-w-2xl mx-auto grid sm:grid-cols-2 gap-3">
            <SwitchCard
              active={tier === "pro"}
              href="/apply?tier=pro"
              title="Pro"
              note="All four Boosters · 500 jobs / loc / mo"
            />
            <SwitchCard
              active={tier === "enterprise"}
              href="/apply?tier=enterprise"
              title="Enterprise"
              note="Companies · equity groups · agencies"
            />
          </div>

          <p className="mt-10 text-center text-sm text-[var(--ink-subtle)]">
            Just want the 50%-off launch rate?{" "}
            <Link
              href="/waitlist"
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-bright)] underline-offset-2 hover:underline"
            >
              Reserve your spot →
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function SwitchCard({
  href,
  title,
  note,
  active,
}: {
  href: string;
  title: string;
  note: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-[var(--radius-lg)] p-5 border-2 transition-colors ${
        active
          ? "border-[var(--ink)] bg-[var(--bg)] shadow-[0_0_0_4px_oklch(0.18_0.02_280_/_0.06)]"
          : "border-[var(--border)] bg-[var(--bg-sunken)] hover:border-[var(--border-strong)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-semibold tracking-[-0.015em]">
          {title}
        </span>
        {active && (
          <span
            className="px-2 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-wider"
            style={{ background: "var(--ink)", color: "var(--ink-on-dark)" }}
          >
            Selected
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-[var(--ink-muted)]">{note}</p>
    </Link>
  );
}
