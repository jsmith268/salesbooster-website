import Link from "next/link";
import { BrandLockup } from "@/components/marks/logo-mark";
import { PRODUCTS, SITE } from "@/lib/site-config";
import { LaunchCountdown } from "./launch-countdown";

const COLUMNS = [
  {
    heading: "Products",
    links: PRODUCTS.map((p) => ({
      label: p.name,
      href: `/products/${p.slug}`,
    })),
  },
  {
    heading: "Explore",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "ROI calculator", href: "/roi" },
      { label: "Integrations", href: "/integrations" },
      { label: "About", href: "/about" },
    ],
  },
  {
    heading: "Get access",
    links: [
      { label: "Join the waitlist", href: "/waitlist" },
      { label: "Apply for early access", href: "/apply" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative surface-ink mt-32 overflow-hidden">
      {/* Atmospheric gradient blob, off-axis */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--grad-twilight)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain-overlay"
      />

      <div className="container-page relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div className="max-w-sm text-[var(--ink-on-dark)]">
            <BrandLockup />
            <p className="mt-5 text-sm text-[var(--ink-on-dark-muted)] leading-relaxed text-pretty">
              {SITE.tagline} Built. Live. Selecting launch partners for the first cohort.
            </p>
            <div className="mt-6">
              <LaunchCountdown variant="pill" tone="on-dark" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--ink-on-dark-muted)] mb-5">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-[var(--ink-on-dark)] opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-on-dark)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--ink-on-dark-muted)]">
            © {new Date().getFullYear()} SalesBooster, Inc. All rights reserved.
          </p>
          <p className="text-xs text-[var(--ink-on-dark-muted)] font-mono uppercase tracking-wider">
            Built for operators
          </p>
        </div>
      </div>
    </footer>
  );
}
