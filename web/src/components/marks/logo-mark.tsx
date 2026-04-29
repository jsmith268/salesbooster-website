import { cn } from "@/lib/utils";

/**
 * Custom brand mark — a slanted, layered "boost" glyph.
 * Two stacked chevrons + a small accent square = motion + precision.
 * Hand-authored asymmetry per /graphics-forge anti-AI principles.
 */
export function LogoMark({
  className,
  monochrome,
}: {
  className?: string;
  monochrome?: "ink" | "on-dark";
}) {
  const fill = monochrome
    ? monochrome === "ink"
      ? "var(--ink)"
      : "var(--ink-on-dark)"
    : "url(#lm-grad)";
  const accent = monochrome
    ? monochrome === "ink"
      ? "var(--ink)"
      : "var(--ink-on-dark)"
    : "var(--accent)";

  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.32 0.18 285)" />
          <stop offset="60%" stopColor="oklch(0.55 0.22 305)" />
          <stop offset="100%" stopColor="oklch(0.78 0.14 70)" />
        </linearGradient>
      </defs>
      {/* Lower wedge — slanted, off-axis */}
      <path
        d="M5 22 L17 4 L23 4 L11 22 Z"
        fill={fill}
        opacity={monochrome ? 1 : 0.65}
      />
      {/* Upper wedge — overlapping, occlusion implies depth */}
      <path d="M11 28 L23 10 L29 10 L17 28 Z" fill={fill} />
      {/* Accent dot — off-grid */}
      <rect x="25" y="22.5" width="4" height="4" rx="1" fill={accent} />
    </svg>
  );
}

export function Wordmark({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "on-dark";
}) {
  return (
    <span
      className={cn(
        "font-display text-[1.05rem] font-semibold tracking-[-0.03em]",
        tone === "ink" ? "text-[var(--ink)]" : "text-[var(--ink-on-dark)]",
        className
      )}
    >
      SalesBooster
    </span>
  );
}

export function BrandLockup({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "on-dark";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark monochrome={tone === "on-dark" ? "on-dark" : undefined} />
      <Wordmark tone={tone} />
    </div>
  );
}
