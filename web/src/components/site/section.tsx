import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "sunken" | "ink";
  id?: string;
}) {
  const toneClass =
    tone === "ink"
      ? "bg-[var(--surface-ink)] text-[var(--ink-on-dark)]"
      : tone === "sunken"
      ? "bg-[var(--bg-sunken)]"
      : "bg-[var(--bg)]";
  return (
    <section
      id={id}
      className={cn("relative py-24 sm:py-32", toneClass, className)}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "ink",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "ink" | "on-dark";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-5",
            tone === "on-dark" && "text-[var(--ink-on-dark-muted)]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display tracking-[-0.03em] leading-[0.96] text-balance",
          "text-4xl sm:text-5xl lg:text-6xl",
          tone === "on-dark" ? "text-[var(--ink-on-dark)]" : "text-[var(--ink)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed text-pretty",
            tone === "on-dark"
              ? "text-[var(--ink-on-dark-muted)]"
              : "text-[var(--ink-muted)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
