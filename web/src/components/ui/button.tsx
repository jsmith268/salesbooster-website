import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2",
    "whitespace-nowrap font-medium tracking-[-0.01em]",
    "rounded-[var(--radius-pill)] transition-[transform,box-shadow,background,color]",
    "duration-[var(--dur)] ease-[var(--ease-spring)]",
    "focus-visible:outline-2 focus-visible:outline-[var(--ring)] focus-visible:outline-offset-3",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:translate-y-[0.5px]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--ink)] text-[var(--ink-on-dark)]",
          "shadow-[0_8px_24px_-12px_oklch(0.16_0.04_280_/_0.4)]",
          "hover:bg-[var(--brand)] hover:shadow-[var(--shadow-glow-brand)]",
        ].join(" "),
        brand: [
          "bg-[var(--brand)] text-[var(--ink-on-dark)]",
          "shadow-[var(--shadow-glow-brand)]",
          "hover:bg-[var(--brand-bright)]",
        ].join(" "),
        accent: [
          "bg-[var(--accent)] text-[oklch(0.16_0.04_80)]",
          "shadow-[0_10px_30px_-12px_oklch(0.78_0.14_70_/_0.5)]",
          "hover:bg-[var(--accent-bright)]",
        ].join(" "),
        outline: [
          "bg-transparent text-[var(--ink)] border border-[var(--border-strong)]",
          "hover:border-[var(--ink)] hover:bg-[var(--bg-elevated)]",
        ].join(" "),
        ghost: [
          "bg-transparent text-[var(--ink)]",
          "hover:bg-[var(--bg-sunken)]",
        ].join(" "),
        "ghost-on-dark": [
          "bg-transparent text-[var(--ink-on-dark)]",
          "hover:bg-[oklch(1_0_0_/_0.08)]",
        ].join(" "),
        glass: [
          "bg-[oklch(1_0_0_/_0.10)] backdrop-blur-md text-[var(--ink-on-dark)]",
          "border border-[oklch(1_0_0_/_0.18)]",
          "hover:bg-[oklch(1_0_0_/_0.16)]",
        ].join(" "),
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
