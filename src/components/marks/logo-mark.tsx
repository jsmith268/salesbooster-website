import { cn } from "@/lib/utils";

/**
 * Brand mark — three ascending bars (revenue lift) with an off-grid amber accent.
 * Uses currentColor so the same SVG renders correctly on light and dark surfaces.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      {/* Three ascending bars */}
      <rect x="3.5" y="20" width="6" height="9" rx="1.5" fill="currentColor" opacity="0.55" />
      <rect x="13" y="13" width="6" height="16" rx="1.5" fill="currentColor" opacity="0.8" />
      <rect x="22.5" y="5" width="6" height="24" rx="1.5" fill="currentColor" />
      {/* Accent burst above the tallest bar — always amber for brand recall */}
      <circle cx="25.5" cy="2.5" r="1.9" fill="var(--accent)" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.05rem] font-semibold tracking-[-0.03em]",
        className
      )}
    >
      SalesBooster
    </span>
  );
}

/**
 * Brand lockup — uses currentColor on the wrapper so consumers control tone.
 * Pass `text-[var(--ink)]` for light surfaces, `text-[var(--ink-on-dark)]` for dark.
 */
export function BrandLockup({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <Wordmark />
    </div>
  );
}
