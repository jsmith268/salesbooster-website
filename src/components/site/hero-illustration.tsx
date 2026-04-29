/**
 * Custom hero composition — layered SVG depth per /graphics-forge.
 * Three layers: hard ground, blurred atmospheric blob, crisp geometric line work.
 * Off-axis warm anchor (amber) per /gradient-design.
 * Sits behind the hero copy and a tilted product mockup card.
 */
export function HeroIllustration() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 70% 40%, oklch(0.32 0.18 285) 0%, oklch(0.18 0.04 280) 60%, oklch(0.10 0.02 280) 100%)",
      }}
    >
      {/* Atmospheric warm anchor */}
      <div
        className="absolute h-[640px] w-[640px] rounded-full opacity-65 blur-3xl"
        style={{
          top: "-12%",
          right: "-8%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.78 0.16 70 / 0.85) 0%, oklch(0.62 0.20 30 / 0.5) 40%, transparent 70%)",
        }}
      />
      {/* Cool counter-anchor for tension */}
      <div
        className="absolute h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{
          bottom: "-18%",
          left: "-10%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.55 0.22 305) 0%, oklch(0.32 0.18 285 / 0.5) 50%, transparent 70%)",
        }}
      />

      {/* Crisp orbital grid — Linear-style */}
      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="line-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(1 0 0)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="oklch(1 0 0)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.16 75)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.85 0.16 75)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Curving meridian lines */}
        <g fill="none" stroke="url(#line-fade)" strokeWidth="1">
          <path d="M0,420 Q400,360 800,420 T1440,420" />
          <path d="M0,470 Q400,420 800,490 T1440,470" opacity="0.7" />
          <path d="M0,520 Q400,480 800,560 T1440,520" opacity="0.5" />
          <path d="M0,580 Q400,540 800,620 T1440,580" opacity="0.35" />
        </g>

        {/* Diagonal precision lines */}
        <g fill="none" stroke="oklch(1 0 0)" strokeOpacity="0.07" strokeWidth="1">
          <path d="M180,0 L180,760" />
          <path d="M380,0 L380,760" />
          <path d="M620,0 L620,760" />
          <path d="M880,0 L880,760" />
          <path d="M1100,0 L1100,760" />
          <path d="M1300,0 L1300,760" />
        </g>

        {/* Off-grid accent nodes (asymmetric) */}
        <circle cx="940" cy="220" r="3" fill="oklch(0.85 0.16 75)" />
        <circle cx="940" cy="220" r="14" fill="url(#node-glow)" />
        <circle cx="320" cy="540" r="2" fill="oklch(0.78 0.14 70)" />
        <circle cx="320" cy="540" r="9" fill="url(#node-glow)" opacity="0.6" />
        <circle cx="1180" cy="380" r="2" fill="oklch(0.62 0.24 290)" />

        {/* Subtle line connector — implies system */}
        <path
          d="M320,540 Q620,460 940,220"
          fill="none"
          stroke="oklch(0.85 0.16 75)"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </svg>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 grain-overlay"
        style={{ opacity: 0.7 }}
      />
    </div>
  );
}
