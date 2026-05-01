"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Launch pricing closes 2026-08-31 23:59:59 PT (UTC-7 during DST)
const TARGET = new Date("2026-08-31T23:59:59-07:00").getTime();

function diff(now: number) {
  const ms = Math.max(0, TARGET - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds, ms };
}

type Props = {
  variant?: "inline" | "block" | "pill";
  tone?: "ink" | "on-dark";
  className?: string;
};

export function LaunchCountdown({
  variant = "inline",
  tone = "ink",
  className,
}: Props) {
  const [now, setNow] = React.useState<number | null>(null);

  React.useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  // SSR-safe fallback rendered until the client tick lands.
  const t = now == null ? null : diff(now);

  if (variant === "pill") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider whitespace-nowrap",
          tone === "on-dark"
            ? "bg-[oklch(1_0_0_/_0.08)] backdrop-blur-md border border-[oklch(1_0_0_/_0.16)] text-[var(--ink-on-dark)]"
            : "bg-[var(--bg)] border border-[var(--border-strong)] text-[var(--ink)]",
          className
        )}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent-bright)] opacity-70 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
        </span>
        <span>
          {t == null
            ? "Launch pricing — limited time"
            : t.ms === 0
            ? "Launch pricing closed"
            : (
              <>
                Launch pricing ends in{" "}
                <span className="tabular-nums">
                  {t.days}d {String(t.hours).padStart(2, "0")}h{" "}
                  {String(t.minutes).padStart(2, "0")}m{" "}
                  {String(t.seconds).padStart(2, "0")}s
                </span>
              </>
            )}
        </span>
      </span>
    );
  }

  if (variant === "inline") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider tabular-nums",
          tone === "on-dark" ? "text-[var(--accent-bright)]" : "text-[var(--brand)]",
          className
        )}
      >
        {t == null
          ? "Limited-time launch pricing"
          : t.ms === 0
          ? "Launch pricing closed"
          : (
            <>
              <span aria-hidden>●</span>
              Ends in {t.days}d {String(t.hours).padStart(2, "0")}h{" "}
              {String(t.minutes).padStart(2, "0")}m{" "}
              {String(t.seconds).padStart(2, "0")}s
            </>
          )}
      </span>
    );
  }

  // block
  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-[var(--radius)] px-5 py-3",
        tone === "on-dark"
          ? "bg-[oklch(1_0_0_/_0.08)] border border-[oklch(1_0_0_/_0.14)] text-[var(--ink-on-dark)]"
          : "bg-[var(--bg)] border border-[var(--border-strong)] text-[var(--ink)]",
        className
      )}
    >
      <span
        className={cn(
          "font-mono text-[10px] uppercase tracking-wider",
          tone === "on-dark" ? "text-[var(--accent-bright)]" : "text-[var(--brand)]"
        )}
      >
        Launch pricing ends in
      </span>
      <span className="flex items-baseline gap-2 font-display tracking-[-0.02em] tabular-nums">
        {t == null ? (
          <span className="text-base text-[var(--ink-subtle)]">
            Aug 31, 2026
          </span>
        ) : t.ms === 0 ? (
          <span className="text-base">Closed</span>
        ) : (
          <>
            <Unit n={t.days} u="d" />
            <Sep />
            <Unit n={t.hours} u="h" />
            <Sep />
            <Unit n={t.minutes} u="m" />
            <Sep />
            <Unit n={t.seconds} u="s" />
          </>
        )}
      </span>
    </div>
  );
}

function Unit({ n, u }: { n: number; u: string }) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <span className="text-2xl font-semibold">{String(n).padStart(2, "0")}</span>
      <span className="text-xs font-mono uppercase opacity-70">{u}</span>
    </span>
  );
}

function Sep() {
  return <span className="opacity-30">·</span>;
}

export const LAUNCH_DEADLINE_LABEL = "Aug 31, 2026";
