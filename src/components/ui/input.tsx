import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "h-12 w-full rounded-[var(--radius)] bg-[var(--bg)]",
        "border border-[var(--border-strong)] px-4",
        "text-base text-[var(--ink)] placeholder:text-[var(--ink-faint)]",
        "transition-[border-color,box-shadow] duration-[var(--dur)] ease-[var(--ease-spring)]",
        "focus-visible:outline-none focus-visible:border-[var(--brand)]",
        "focus-visible:shadow-[0_0_0_4px_oklch(0.48_0.22_285_/_0.12)]",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[120px] w-full rounded-[var(--radius)] bg-[var(--bg)]",
        "border border-[var(--border-strong)] p-4",
        "text-base text-[var(--ink)] placeholder:text-[var(--ink-faint)]",
        "transition-[border-color,box-shadow] duration-[var(--dur)] ease-[var(--ease-spring)]",
        "focus-visible:outline-none focus-visible:border-[var(--brand)]",
        "focus-visible:shadow-[0_0_0_4px_oklch(0.48_0.22_285_/_0.12)]",
        "disabled:cursor-not-allowed disabled:opacity-60 resize-y",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium text-[var(--ink)] tracking-[-0.005em]",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Input, Textarea, Label };
