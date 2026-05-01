"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark, Wordmark } from "@/components/marks/logo-mark";
import { ProductIcon } from "@/components/marks/product-icon";
import { PRODUCTS, NAV_RESOURCES, SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// Routes whose hero is on a dark surface — nav should render light-on-dark
// until the user scrolls past the hero.
const DARK_HERO_ROUTES = [/^\/$/, /^\/products(\/|$)/];

function isDarkHeroPath(pathname: string) {
  return DARK_HERO_ROUTES.some((rx) => rx.test(pathname));
}

export function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState<null | "products" | "resources">(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hover, setHover] = React.useState(0);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [pathname]);

  // Render light-on-dark while sitting over a dark hero AND not scrolled past it.
  // Mobile menu open or scrolled past hero → light surface, dark text.
  const onDarkHero = isDarkHeroPath(pathname) && !scrolled && !mobileOpen;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,color]",
        "duration-300 ease-[var(--ease-spring)]",
        scrolled || mobileOpen
          ? "bg-[oklch(0.99_0.005_80_/_0.85)] backdrop-blur-xl backdrop-saturate-150 border-b border-[var(--border)] text-[var(--ink)]"
          : onDarkHero
          ? "bg-transparent border-b border-transparent text-[var(--ink-on-dark)]"
          : "bg-transparent border-b border-transparent text-[var(--ink)]"
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        {/* Brand */}
        <Link
          href="/"
          aria-label="SalesBooster — home"
          className="flex items-center gap-2.5 rounded-md"
        >
          <LogoMark className="h-7 w-7" />
          <Wordmark />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          <NavTrigger
            label="Products"
            active={open === "products"}
            onEnter={() => setOpen("products")}
            onDark={onDarkHero}
          />
          <NavLink href="/pricing" onDark={onDarkHero}>
            Pricing
          </NavLink>
          <NavTrigger
            label="Resources"
            active={open === "resources"}
            onEnter={() => setOpen("resources")}
            onDark={onDarkHero}
          />
          <NavLink href="/about" onDark={onDarkHero}>
            About
          </NavLink>
        </div>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={SITE.applyCta.href}
            className={cn(
              "text-sm font-medium transition-colors px-2",
              onDarkHero
                ? "text-[var(--ink-on-dark-muted)] hover:text-[var(--ink-on-dark)]"
                : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
            )}
          >
            Apply
          </Link>
          <Button
            asChild
            size="sm"
            variant={onDarkHero ? "accent" : "primary"}
          >
            <Link href={SITE.primaryCta.href}>{SITE.primaryCta.label}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className={cn(
            "lg:hidden h-12 w-12 inline-flex items-center justify-center rounded-full border active:scale-95 transition-transform",
            onDarkHero
              ? "border-[oklch(1_0_0_/_0.22)] text-[var(--ink-on-dark)]"
              : "border-[var(--border-strong)] text-[var(--ink)]"
          )}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mega menu — products */}
      {open === "products" && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full"
          onMouseEnter={() => setOpen("products")}
        >
          <div className="container-page pt-3">
            <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-floating)] overflow-hidden grid grid-cols-[260px_1fr]">
              {/* List */}
              <div className="p-2 border-r border-[var(--border)] bg-[var(--bg-sunken)]">
                {PRODUCTS.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    onMouseEnter={() => setHover(i)}
                    className={cn(
                      "flex items-center gap-3 rounded-[var(--radius)] p-3 transition-colors",
                      hover === i
                        ? "bg-[var(--bg)]"
                        : "hover:bg-[var(--bg)]/60"
                    )}
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-[var(--radius-sm)]"
                      style={{
                        background: hover === i ? `color-mix(in oklch, var(${ProductHue(p.slug)}) 18%, transparent)` : "transparent",
                      }}
                    >
                      <ProductIcon slug={p.slug as ProductSlug} className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-display text-[0.95rem] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                        {p.name}
                      </span>
                      <span className="block text-xs text-[var(--ink-subtle)]">
                        {p.tag}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              {/* Detail */}
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <ProductIcon
                    slug={PRODUCTS[hover].slug as ProductSlug}
                    className="h-8 w-8"
                  />
                  <span className="font-display text-lg font-semibold tracking-[-0.02em]">
                    {PRODUCTS[hover].name}
                  </span>
                  <span
                    className="ml-auto px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full whitespace-nowrap"
                    style={{
                      background: `color-mix(in oklch, var(${ProductHue(PRODUCTS[hover].slug)}) 14%, transparent)`,
                      color: `var(${ProductHue(PRODUCTS[hover].slug)})`,
                    }}
                  >
                    {PRODUCTS[hover].metric} · {PRODUCTS[hover].metricLabel}
                  </span>
                </div>
                <p className="text-[0.95rem] text-[var(--ink-muted)] leading-relaxed mb-5 text-pretty">
                  {PRODUCTS[hover].detail}
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {PRODUCTS[hover].features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-[var(--ink-subtle)]"
                    >
                      <span
                        className="block h-1.5 w-1.5 rounded-full"
                        style={{ background: `var(${ProductHue(PRODUCTS[hover].slug)})` }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products/${PRODUCTS[hover].slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-bright)]"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mega menu — resources */}
      {open === "resources" && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full"
          onMouseEnter={() => setOpen("resources")}
        >
          <div className="container-page pt-3 flex justify-center">
            <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-floating)] p-2 w-[280px]">
              {NAV_RESOURCES.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex flex-col gap-0.5 p-3 rounded-[var(--radius)] hover:bg-[var(--bg-sunken)] transition-colors"
                >
                  <span className="text-sm font-semibold text-[var(--ink)]">
                    {r.label}
                  </span>
                  <span className="text-xs text-[var(--ink-subtle)]">
                    {r.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--bg)] border-t border-[var(--border)]">
          <div className="container-page py-6 flex flex-col gap-1">
            <p className="eyebrow mb-2">Products</p>
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="flex items-center gap-3 py-2.5"
              >
                <ProductIcon slug={p.slug as ProductSlug} className="h-7 w-7" />
                <span className="font-display text-lg font-semibold tracking-[-0.02em]">
                  {p.name}
                </span>
              </Link>
            ))}
            <p className="eyebrow mt-5 mb-2">Explore</p>
            <Link href="/pricing" className="py-2.5 font-display text-lg font-semibold tracking-[-0.02em]">Pricing</Link>
            <Link href="/roi" className="py-2.5 font-display text-lg font-semibold tracking-[-0.02em]">ROI calculator</Link>
            <Link href="/integrations" className="py-2.5 font-display text-lg font-semibold tracking-[-0.02em]">Integrations</Link>
            <Link href="/about" className="py-2.5 font-display text-lg font-semibold tracking-[-0.02em]">About</Link>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Button asChild variant="outline" size="lg">
                <Link href={SITE.applyCta.href}>Apply</Link>
              </Button>
              <Button asChild variant="primary" size="lg">
                <Link href={SITE.primaryCta.href}>Reserve spot</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

type ProductSlug = "sales-booster" | "referral-booster" | "review-booster" | "support-booster";

function ProductHue(slug: string) {
  switch (slug) {
    case "sales-booster": return "--hue-sales";
    case "referral-booster": return "--hue-referral";
    case "review-booster": return "--hue-review";
    case "support-booster": return "--hue-support";
    default: return "--brand";
  }
}

function NavLink({
  href,
  children,
  onDark,
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-sm font-medium transition-colors",
        onDark
          ? "text-[var(--ink-on-dark-muted)] hover:text-[var(--ink-on-dark)]"
          : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
      )}
    >
      {children}
    </Link>
  );
}

function NavTrigger({
  label,
  active,
  onEnter,
  onDark,
}: {
  label: string;
  active: boolean;
  onEnter: () => void;
  onDark?: boolean;
}) {
  return (
    <button
      type="button"
      aria-expanded={active}
      aria-haspopup="true"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className={cn(
        "px-3 py-2 inline-flex items-center gap-1 text-sm font-medium transition-colors rounded-md",
        onDark
          ? active
            ? "text-[var(--ink-on-dark)]"
            : "text-[var(--ink-on-dark-muted)] hover:text-[var(--ink-on-dark)]"
          : active
          ? "text-[var(--ink)]"
          : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
      )}
    >
      {label}
      <ChevronDown className="h-3 w-3 opacity-60" />
    </button>
  );
}
