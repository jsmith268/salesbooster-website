import { cn } from "@/lib/utils";

/**
 * Self-contained brand-color letter tiles for the four supported FSMs
 * and the adjacent integrations. Renders inline SVG with each company's
 * primary brand color, no external image dependencies.
 */

type IconProps = { className?: string };

function LetterTile({
  className,
  fill,
  letter,
  weight = 700,
  tracking = -0.02,
  size = 20,
}: {
  className?: string;
  fill: string;
  letter: string;
  weight?: number;
  tracking?: number;
  size?: number;
}) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill={fill} />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight={weight}
        fontSize={size}
        letterSpacing={`${tracking}em`}
        fill="#ffffff"
      >
        {letter}
      </text>
    </svg>
  );
}

/* ── Four FSMs — primary brand colors ───────────────────────────── */

export function HousecallProMark({ className }: IconProps) {
  return <LetterTile className={className} fill="#FF6B1F" letter="H" />;
}

export function ServiceTitanMark({ className }: IconProps) {
  return (
    <LetterTile className={className} fill="#E12B27" letter="S" weight={800} tracking={-0.04} size={21} />
  );
}

export function JobberMark({ className }: IconProps) {
  return <LetterTile className={className} fill="#149649" letter="J" />;
}

export function ServiceFusionMark({ className }: IconProps) {
  return (
    <LetterTile className={className} fill="#0066B3" letter="S" weight={600} />
  );
}

export type FsmKey = "housecall-pro" | "servicetitan" | "jobber" | "service-fusion";

export function FsmMark({ fsm, className }: { fsm: FsmKey; className?: string }) {
  switch (fsm) {
    case "housecall-pro":
      return <HousecallProMark className={className} />;
    case "servicetitan":
      return <ServiceTitanMark className={className} />;
    case "jobber":
      return <JobberMark className={className} />;
    case "service-fusion":
      return <ServiceFusionMark className={className} />;
  }
}

/* ── Adjacent integrations — neutral letter tiles ───────────────── */

const ADJACENT_TILES: Record<string, { fill: string; letter: string }> = {
  "Google Reviews": { fill: "#4285F4", letter: "G" },
  "Stripe Billing": { fill: "#635BFF", letter: "S" },
  "Twilio SMS": { fill: "#F22F46", letter: "T" },
  "QuickBooks Online": { fill: "#2CA01C", letter: "Q" },
  "Slack / Teams": { fill: "#4A154B", letter: "S" },
  Zapier: { fill: "#FF4A00", letter: "Z" },
};

export function AdjacentMark({ name, className }: { name: string; className?: string }) {
  const cfg = ADJACENT_TILES[name];
  if (!cfg) return null;
  return <LetterTile className={className} fill={cfg.fill} letter={cfg.letter} />;
}
