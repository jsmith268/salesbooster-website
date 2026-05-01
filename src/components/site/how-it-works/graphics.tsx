import * as React from "react";
import { SalesGraphics } from "./graphics/sales";
import { ReferralGraphics } from "./graphics/referral";
import { ReviewGraphics } from "./graphics/review";
import { SupportGraphics } from "./graphics/support";

export type ProductSlug =
  | "sales-booster"
  | "referral-booster"
  | "review-booster"
  | "support-booster";

export type GraphicProps = { hue: string };
export type GraphicComponent = (props: GraphicProps) => React.JSX.Element;

const REGISTRY: Record<ProductSlug, GraphicComponent[]> = {
  "sales-booster": SalesGraphics,
  "referral-booster": ReferralGraphics,
  "review-booster": ReviewGraphics,
  "support-booster": SupportGraphics,
};

export function getGraphicFor(slug: ProductSlug, index: number): GraphicComponent {
  const list = REGISTRY[slug] ?? [];
  return list[index] ?? Fallback;
}

function Fallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink-faint)]">
        graphic
      </span>
    </div>
  );
}
