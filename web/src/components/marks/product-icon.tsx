import { cn } from "@/lib/utils";

type ProductSlug =
  | "sales-booster"
  | "referral-booster"
  | "review-booster"
  | "support-booster";

/**
 * Custom product marks. Single stroke weight, off-grid, occluded composition.
 * Each mark uses its product hue token from globals.css.
 * No emojis, no generic icons — these are bespoke per /graphics-forge.
 */
export function ProductIcon({
  slug,
  className,
  tone = "color",
}: {
  slug: ProductSlug;
  className?: string;
  tone?: "color" | "ink" | "on-dark";
}) {
  const color =
    tone === "ink"
      ? "var(--ink)"
      : tone === "on-dark"
      ? "var(--ink-on-dark)"
      : `var(${hueOf(slug)})`;

  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-10 w-10", className)}
      aria-hidden="true"
    >
      {marks[slug](color)}
    </svg>
  );
}

function hueOf(slug: ProductSlug) {
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

const marks: Record<ProductSlug, (c: string) => React.ReactNode> = {
  // Sales — three ascending bars, slanted, with a node — proposal tiers
  "sales-booster": (c) => (
    <g
      stroke={c}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M7 30 L7 22" />
      <path d="M15 30 L15 17" />
      <path d="M23 30 L23 12" />
      <path d="M5 33 L31 33" />
      <circle cx="29" cy="9" r="2.5" fill={c} stroke="none" />
    </g>
  ),
  // Referral — two interlocking arcs forming a chain
  "referral-booster": (c) => (
    <g
      stroke={c}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M11 16 a 7 7 0 1 0 12 0" />
      <path d="M17 24 a 7 7 0 1 1 12 0" transform="rotate(180 23 24)" />
      <circle cx="32" cy="11" r="2" fill={c} stroke="none" />
    </g>
  ),
  // Review — asymmetric star fragment + arc tracking sentiment
  "review-booster": (c) => (
    <g
      stroke={c}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M20 7 L23 14 L31 15 L25 21 L26.5 29 L20 25.5 L13.5 29 L15 21 L9 15 L17 14 Z" />
      <path d="M6 33 Q 20 28 34 33" opacity="0.6" />
    </g>
  ),
  // Support — concentric sweep lines + center node = AI agents pulsing
  "support-booster": (c) => (
    <g
      stroke={c}
      strokeWidth="2.25"
      strokeLinecap="round"
      fill="none"
    >
      <circle cx="20" cy="20" r="3.5" fill={c} stroke="none" />
      <path d="M10 20 a 10 10 0 0 1 4 -7" />
      <path d="M30 20 a 10 10 0 0 1 -4 7" />
      <path d="M6 20 a 14 14 0 0 1 6 -10" opacity="0.55" />
      <path d="M34 20 a 14 14 0 0 1 -6 10" opacity="0.55" />
    </g>
  ),
};
