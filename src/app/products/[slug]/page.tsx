import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Section, SectionHeader } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProductIcon } from "@/components/marks/product-icon";
import { ProductGrid } from "@/components/site/product-grid";
import { CTABanner } from "@/components/site/cta-banner";
import { HowItWorks } from "@/components/site/how-it-works";
import type { ProductSlug } from "@/components/site/how-it-works/graphics";
import { PRODUCTS } from "@/lib/site-config";

type Slug =
  | "sales-booster"
  | "referral-booster"
  | "review-booster"
  | "support-booster";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCTS.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.detail,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const hue = `var(${hueOf(product.slug as Slug)})`;

  return (
    <>
      <SiteNav />
      <main>
        {/* Product hero */}
        <header
          className="relative isolate overflow-hidden pt-28 sm:pt-40 pb-24 sm:pb-32"
          style={{
            background:
              "linear-gradient(180deg in oklch, oklch(0.10 0.02 280), oklch(0.16 0.04 280) 100%)",
            color: "var(--ink-on-dark)",
          }}
        >
          {/* Hue glow specific to product */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-[640px] w-[640px] rounded-full blur-3xl opacity-50"
            style={{
              background: `radial-gradient(circle, color-mix(in oklch, ${hue} 70%, transparent), transparent 70%)`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.14 70 / 0.5), transparent 70%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 grain-overlay opacity-50" />

          <div className="container-page relative z-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--ink-on-dark-muted)] flex items-center gap-3">
                  <span
                    className="block h-1.5 w-1.5 rounded-full"
                    style={{ background: hue }}
                  />
                  {product.tag}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,4.75rem)] text-balance">
                  {product.name}.{" "}
                  <em className="not-italic" style={{
                    background: `linear-gradient(105deg in oklch, ${hue}, oklch(0.85 0.16 75))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {product.short.replace(/\.$/, "")}.
                  </em>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-7 text-lg sm:text-xl text-[var(--ink-on-dark-muted)] text-pretty max-w-xl leading-relaxed">
                  {product.detail}
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
                  <Button asChild size="xl" variant="accent" className="w-full sm:w-auto">
                    <Link href={`/waitlist?product=${product.slug}`}>
                      Reserve your spot
                    </Link>
                  </Button>
                  <Button asChild size="xl" variant="glass" className="w-full sm:w-auto">
                    <Link href="/apply">Apply for early access</Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Outcome + mechanism callout */}
            <Reveal delay={300} className="hidden lg:block">
              <div
                className="relative rounded-[var(--radius-xl)] p-10 backdrop-blur-md"
                style={{
                  background: `linear-gradient(135deg, color-mix(in oklch, ${hue} 18%, transparent), oklch(1 0 0 / 0.04))`,
                  border: `1px solid color-mix(in oklch, ${hue} 30%, transparent)`,
                }}
              >
                <ProductIcon
                  slug={product.slug as Slug}
                  className="h-14 w-14"
                  tone="on-dark"
                />
                <p className="mt-7 font-mono text-xs uppercase tracking-wider text-[var(--ink-on-dark-muted)]">
                  Outcome
                </p>
                <div className="mt-2 flex items-baseline gap-3 flex-wrap">
                  <span
                    className="font-display font-semibold tracking-[-0.035em]"
                    style={{
                      fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                      lineHeight: 0.96,
                      color: hue,
                    }}
                  >
                    {product.metric}
                  </span>
                  <span className="font-display text-2xl tracking-[-0.02em] text-[var(--ink-on-dark)]">
                    {product.metricLabel}
                  </span>
                </div>
                <p className="mt-5 text-[var(--ink-on-dark-muted)] text-pretty leading-relaxed">
                  {product.mechanism}
                </p>
                <p className="mt-5 pt-5 border-t border-[oklch(1_0_0_/_0.1)] font-mono text-xs uppercase tracking-wider text-[var(--ink-on-dark-muted)]">
                  {product.setup}
                </p>
              </div>
            </Reveal>
          </div>
        </header>

        {/* How it works — interactive, vertically-stacked walkthrough */}
        <Section tone="light">
          <div className="container-page">
            <HowItWorks
              slug={product.slug as ProductSlug}
              hue={hue}
              steps={product.valueProps}
              eyebrow={`${product.name} · how it works`}
              title={product.valuePropsTitle}
              description={product.valuePropsDescription}
            />
          </div>
        </Section>

        {/* Other products */}
        <Section tone="sunken">
          <div className="container-page">
            <Reveal>
              <SectionHeader
                eyebrow="Layer the platform"
                title="The other three Boosters."
                description="Each one fixes a separate leak. Most operators run two or three side by side. The lifts stack."
              />
            </Reveal>
            <div className="mt-16">
              <ProductGrid omit={product.slug as Slug} />
            </div>
          </div>
        </Section>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
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
