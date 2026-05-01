import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Shared illustrative primitives — abstract, brand-aligned shapes
 * the 24 product graphics compose from. They use the marketing site's
 * design tokens so the page feels like one continuous design system.
 */

/** Soft hue-tinted halo behind a card — used for ambient depth. */
export function Halo({ hue, className }: { hue: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl opacity-50", className)}
      style={{
        background: `radial-gradient(circle, color-mix(in oklch, ${hue} 55%, transparent), transparent 70%)`,
      }}
    />
  );
}

/** Off-grid amber accent dot — a recurring brand signature. */
export function AmberSpark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("absolute h-2 w-2 rounded-full", className)}
      style={{ background: "var(--accent)" }}
    />
  );
}

/** Stylized window-chrome bar — three traffic-light dots + optional eyebrow. */
export function WindowChrome({ label, className }: { label?: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--bg-sunken)]",
        className,
      )}
    >
      <span className="block h-2 w-2 rounded-full bg-[oklch(0.72_0.12_25)]" />
      <span className="block h-2 w-2 rounded-full bg-[oklch(0.85_0.13_85)]" />
      <span className="block h-2 w-2 rounded-full bg-[oklch(0.78_0.13_145)]" />
      {label && (
        <span className="ml-3 font-mono text-[9px] uppercase tracking-wider text-[var(--ink-subtle)]">
          {label}
        </span>
      )}
    </div>
  );
}

/** A pill-row that stands in for a line of text without literal copy. */
export function PillRow({
  width = 60,
  tone = "default",
  className,
}: {
  width?: number;
  tone?: "default" | "muted" | "accent";
  className?: string;
}) {
  const bg =
    tone === "accent"
      ? "bg-[var(--accent)]"
      : tone === "muted"
      ? "bg-[var(--ink-faint)]"
      : "bg-[var(--ink)]";
  return (
    <span
      className={cn("block h-1.5 rounded-full", bg, className)}
      style={{ width: `${width}%` }}
    />
  );
}

/** Soft card surface with the marketing site's editorial radius + hairline border. */
export function SurfaceCard({
  children,
  className,
  elevated,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] bg-[oklch(0.99_0.005_80)] border border-[var(--border)] overflow-hidden",
        className,
      )}
      style={{
        boxShadow: elevated
          ? "0 30px 60px -22px oklch(0 0 0 / 0.18), 0 0 0 1px oklch(1 0 0 / 0.04)"
          : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Tiny mono-cased label used as an eyebrow in the illustrations. */
export function Eyebrow({
  children,
  hue,
  className,
}: {
  children: React.ReactNode;
  hue?: string;
  className?: string;
}) {
  return (
    <span
      className={cn("font-mono text-[9px] uppercase tracking-wider", className)}
      style={{ color: hue ?? "var(--ink-subtle)" }}
    >
      {children}
    </span>
  );
}

/** A status pill used inside illustrations — auto-tinted by hue. */
export function StatusPill({
  children,
  hue = "var(--success)",
  className,
}: {
  children: React.ReactNode;
  hue?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-wider whitespace-nowrap",
        className,
      )}
      style={{
        background: `color-mix(in oklch, ${hue} 18%, transparent)`,
        color: hue,
      }}
    >
      <span aria-hidden className="block h-1 w-1 rounded-full" style={{ background: hue }} />
      {children}
    </span>
  );
}

/** Stylized phone-shaped frame for SMS / chat illustrations. */
export function PhoneFrame({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[28px] bg-[oklch(0.18_0.02_280)] p-1.5 overflow-hidden",
        className,
      )}
      style={{
        boxShadow: "0 30px 60px -24px oklch(0 0 0 / 0.4)",
        ...style,
      }}
    >
      <div className="rounded-[22px] bg-[oklch(0.99_0.005_80)] overflow-hidden">{children}</div>
    </div>
  );
}

/** Speech bubble in either inbound (left, light) or outbound (right, hue-tinted) style. */
export function ChatBubble({
  side,
  hue,
  children,
  className,
}: {
  side: "in" | "out";
  hue?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isOut = side === "out";
  return (
    <div className={cn("flex", isOut ? "justify-end" : "justify-start", className)}>
      <div
        className={cn(
          "max-w-[80%] px-3 py-2 rounded-2xl text-[10px] leading-snug",
          isOut ? "rounded-br-md text-[var(--ink-on-dark)]" : "rounded-bl-md text-[var(--ink)] bg-[var(--bg-sunken)] border border-[var(--border)]",
        )}
        style={
          isOut
            ? {
                background: `linear-gradient(135deg in oklch, ${hue}, color-mix(in oklch, ${hue} 70%, oklch(0.32 0.18 285)))`,
              }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}
