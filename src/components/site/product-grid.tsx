import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductIcon } from "@/components/marks/product-icon";
import { Reveal } from "@/components/ui/reveal";
import { PRODUCTS } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Slug =
  | "sales-booster"
  | "referral-booster"
  | "review-booster"
  | "support-booster";

export function ProductGrid({ omit }: { omit?: Slug } = {}) {
  const items = omit ? PRODUCTS.filter((p) => p.slug !== omit) : PRODUCTS;
  return (
    <div
      className={cn(
        "grid gap-5",
        items.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"
      )}
    >
      {items.map((p, i) => (
        <Reveal key={p.slug} delay={i * 80}>
          <Link
            href={`/products/${p.slug}`}
            className={cn(
              "group relative block h-full overflow-hidden rounded-[var(--radius-lg)]",
              "bg-[var(--bg)] border border-[var(--border)] hairline",
              "p-7 sm:p-9 transition-[transform,box-shadow,border-color]",
              "duration-[var(--dur)] ease-[var(--ease-spring)]",
              "hover:-translate-y-1 hover:shadow-[var(--shadow-editorial)]",
              "hover:border-[var(--ink)]"
            )}
            style={{ minHeight: 320 }}
          >
            {/* Hue blob — appears on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{
                background: `radial-gradient(circle, color-mix(in oklch, var(${hueOf(p.slug as Slug)}) 60%, transparent), transparent 70%)`,
              }}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span
                  className="grid h-12 w-12 place-items-center rounded-[var(--radius)]"
                  style={{
                    background: `color-mix(in oklch, var(${hueOf(p.slug as Slug)}) 14%, transparent)`,
                  }}
                >
                  <ProductIcon slug={p.slug as Slug} className="h-7 w-7" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-[var(--ink-faint)] transition-[transform,color] duration-300 group-hover:text-[var(--ink)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <p
                className="mt-7 font-mono text-[11px] uppercase tracking-wider"
                style={{ color: `var(${hueOf(p.slug as Slug)})` }}
              >
                {p.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl tracking-[-0.025em] text-[var(--ink)] text-balance">
                {p.name}
              </h3>
              <p className="mt-2.5 text-[var(--ink-muted)] leading-relaxed text-pretty">
                {p.short}
              </p>

              <div className="mt-auto pt-8">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span
                    className="font-display text-2xl font-semibold tracking-[-0.02em]"
                    style={{ color: `var(${hueOf(p.slug as Slug)})` }}
                  >
                    {p.metric}
                  </span>
                  <span className="text-sm text-[var(--ink-subtle)]">
                    {p.metricLabel}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[var(--ink-subtle)] text-pretty leading-relaxed">
                  {p.mechanism}
                </p>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

function hueOf(slug: Slug) {
  switch (slug) {
    case "sales-booster":
      return "--hue-sales";
    case "referral-booster":
      return "--hue-referral";
    case "review-booster":
      return "--hue-review";
    case "support-booster":
      return "--hue-support";
  }
}
