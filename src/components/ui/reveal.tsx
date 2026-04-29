"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Reveal({
  children,
  className,
  delay = 0,
  threshold = 0.15,
  as = "div",
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const Tag = as as keyof React.JSX.IntrinsicElements;
  return React.createElement(
    Tag,
    {
      ref: ref as React.Ref<HTMLElement>,
      className: cn("reveal", visible && "visible", className),
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
}
