import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { ProductGrid } from "@/components/site/product-grid";
import { Reveal } from "@/components/ui/reveal";
import { CTABanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Products — the four Boosters",
  description:
    "Sales, Referral, Review, and Support — the four engines that compound revenue across every job.",
};

export default function ProductsIndex() {
  return (
    <>
      <SiteNav />
      <main>
        <header className="relative pt-28 sm:pt-40 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(circle, oklch(0.55 0.22 305 / 0.5), transparent 70%)",
            }}
          />

          <div className="container-page relative z-10 max-w-3xl">
            <Reveal>
              <p className="eyebrow">The platform · four Boosters</p>
              <h1 className="mt-5 font-display tracking-[-0.04em] leading-[0.96] text-[clamp(2.5rem,5.5vw,5rem)] text-balance">
                Four products.{" "}
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
                  Four leaks fixed.
                </em>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-[var(--ink-muted)] max-w-2xl text-pretty leading-relaxed">
                Each Booster goes after a different place revenue walks out the door. Run one and prove it. Add the next when the first is paying for itself.
              </p>
            </Reveal>
          </div>
        </header>

        <div className="container-page pb-24">
          <ProductGrid />
        </div>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  );
}
