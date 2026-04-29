/**
 * Source of truth for all content.
 * Voice: operator-grade, anti-AI prose. Pre-launch positioning.
 */

export type Product = {
  slug: string;
  name: string;
  short: string;
  detail: string;
  tag: string;
  hue: string;
  features: string[];
  metric: string;
  metricLabel: string;
  setup: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "sales-booster",
    name: "Sales Booster",
    tag: "Upsell engine",
    hue: "--hue-sales",
    short: "Inspections become three-tier proposals.",
    detail:
      "On site, your tech runs the inspection on a tablet. Photos get tagged, the issues are scored, and a Good/Better/Best proposal generates from your live Housecall Pro pricebook. The customer picks a tier. The estimate fires back to HCP in one tap.",
    features: [
      "Digital inspection forms",
      "Good/Better/Best engine",
      "AI follow-up portal",
      "Programmatic video proposals",
      "Customer chat agent",
      "One-click HCP sync",
    ],
    metric: "37%",
    metricLabel: "average ticket lift",
    setup: "Live in 24–48 hours",
  },
  {
    slug: "referral-booster",
    name: "Referral Booster",
    tag: "Ambassador engine",
    hue: "--hue-referral",
    short: "Customers become tracked referral sources.",
    detail:
      "After every completed job, the customer gets enrolled by SMS. They receive a personal phone extension and email alias they can hand out at the next dinner party. Every referral that closes is attributed back to them — and rewarded — automatically.",
    features: [
      "Auto post-job enrollment",
      "Unique tracking per ambassador",
      "Shareable contact cards",
      "Full revenue attribution",
      "Configurable rewards",
      "Ambassador portal",
    ],
    metric: "24%",
    metricLabel: "referral close rate",
    setup: "Fully automated after setup",
  },
  {
    slug: "review-booster",
    name: "Review Booster",
    tag: "Reputation engine",
    hue: "--hue-review",
    short: "Five-star reviews. Bad ones intercepted.",
    detail:
      "After every job, an agent texts the customer and reads the reply. If they're happy, it sends them straight to Google. If they're not, it opens a ticket for the manager before anything goes public.",
    features: [
      "AI sentiment detection",
      "Per-location Google routing",
      "Negative feedback shield",
      "Tech bonus system",
      "Manager resolution flow",
      "Re-engagement campaigns",
    ],
    metric: "3.2×",
    metricLabel: "review volume",
    setup: "Starts with your next job",
  },
  {
    slug: "support-booster",
    name: "Support Booster",
    tag: "Recovery engine",
    hue: "--hue-support",
    short: "Cold estimates and lapsed memberships, recovered.",
    detail:
      "Cold estimates get a follow-up. Overdue invoices get a reminder. Lapsed memberships get a renewal nudge. SMS and email, TCPA-clean, with a manager escalation path the moment something needs a person.",
    features: [
      "Unsold estimate recovery",
      "AR collection agent",
      "Membership re-engagement",
      "Self-learning knowledge base",
      "Manager escalation",
      "Admin conversation takeover",
    ],
    metric: "18%",
    metricLabel: "estimate recovery",
    setup: "Auto-detects from HCP",
  },
];

export type Plan = {
  name: string;
  monthly: number;
  annual: number;
  per: string;
  popular?: boolean;
  description: string;
  locations: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaKind: "waitlist" | "apply";
  applyTier?: "pro" | "enterprise";
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    monthly: 199,
    annual: 179,
    per: "/loc/mo",
    description: "One Booster. Up to three locations.",
    locations: "Up to 3 locations",
    items: [
      "Any 1 Booster product",
      "Housecall Pro sync",
      "Core analytics",
      "Email support",
    ],
    ctaLabel: "Join the waitlist",
    ctaHref: "/waitlist?plan=starter",
    ctaKind: "waitlist",
  },
  {
    name: "Growth",
    monthly: 299,
    annual: 269,
    per: "/loc/mo",
    popular: true,
    description: "Two Boosters. Everything turned on.",
    locations: "Up to 5 locations",
    items: [
      "Any 2 Booster products",
      "Housecall Pro sync",
      "Advanced analytics",
      "AI chatbot & portals",
      "Priority support",
    ],
    ctaLabel: "Join the waitlist",
    ctaHref: "/waitlist?plan=growth",
    ctaKind: "waitlist",
  },
  {
    name: "Pro",
    monthly: 499,
    annual: 449,
    per: "/loc/mo",
    description: "All four Boosters. Everything we ship.",
    locations: "Up to 10 locations",
    items: [
      "All 4 Booster products",
      "Full analytics suite",
      "Custom templates",
      "Dedicated onboarding",
      "Phone & chat support",
    ],
    ctaLabel: "Apply for early access",
    ctaHref: "/apply?tier=pro",
    ctaKind: "apply",
    applyTier: "pro",
  },
];

export const ENTERPRISE = {
  name: "Enterprise",
  description:
    "For multi-brand operators, PE-backed rollups, and franchise networks. We write a custom contract, run on dedicated infrastructure, and assign a named integration team.",
  ctaLabel: "Apply for founding-customer access",
  ctaHref: "/apply?tier=enterprise",
};

export const FAQS = [
  {
    q: "Which field service software do you support?",
    a: "Housecall Pro on the MAX plan, today. The full pricebook, customer list, jobs, estimates, and invoices sync both ways in real time.",
  },
  {
    q: "Can I start with just one product?",
    a: "Yes. Most operators start with Sales Booster or Review Booster, prove the lift on one, then layer the next.",
  },
  {
    q: "How fast is setup?",
    a: "Under 48 hours. Connect Housecall Pro and your pricebook syncs in real time. We ship pre-built templates for HVAC, plumbing, electrical, and garage door.",
  },
  {
    q: "What ROI should I expect?",
    a: "Early operators average 37% ticket lift in the first 30 days. Your number depends on team size and how hard you push the proposal flow. At $199 a location, most pay the platform back inside the first month.",
  },
  {
    q: "What if my techs resist it?",
    a: "Simple form → three options → customer picks. Operators see 90%+ tech adoption in week one.",
  },
  {
    q: "What about SMS compliance?",
    a: "TCPA compliance is built in. Opt-out, quiet hours, frequency limits, and the required disclosures all run on rails.",
  },
  {
    q: "Why aren't you selling yet?",
    a: "We're onboarding 25 design partners before public sales open. Join the waitlist and your founding price is locked. Apply and we'll consider you for the next cohort.",
  },
];

export type TimelineStep = {
  stage: string;
  num: string;
  without: { head: string; body: string };
  with: { head: string; body: string; product: string; gain: string };
};

export const TIMELINE: TimelineStep[] = [
  {
    stage: "On-site diagnosis",
    num: "01",
    without: {
      head: "Clipboard and guesswork.",
      body: "The tech eyeballs the problem and scribbles notes. No photos. The customer never sees what's wrong, so they have no reason to spend more.",
    },
    with: {
      head: "Documented proof on a tablet.",
      body: "Every issue gets photographed, tagged, and shown to the customer in real time. Once they see the evidence, the bigger jobs get approved.",
      product: "Sales Booster",
      gain: "Trust drives larger tickets",
    },
  },
  {
    stage: "Presenting the repair",
    num: "02",
    without: {
      head: "One verbal price. Take it or leave it.",
      body: "\"About twelve hundred.\" No options. No comparison. The customer has nothing to evaluate, so most of them say no or shop the price.",
    },
    with: {
      head: "Three options. Customer picks.",
      body: "Good, Better, Best with real line items. When the value at each tier is visible, most customers choose Better or Best. That's where the 37% lift comes from.",
      product: "Sales Booster",
      gain: "Average ticket: $380 → $520",
    },
  },
  {
    stage: "Customer says \"let me think\"",
    num: "03",
    without: {
      head: "Tech drives away. Deal dies.",
      body: "The estimate sits in your FSM. Nobody follows up. Forty-eight hours later, somebody else has the job.",
    },
    with: {
      head: "An agent re-engages on its own.",
      body: "A personal portal goes out the same evening. A chat agent answers questions at 11pm. Eighteen percent of dead estimates come back as paid jobs.",
      product: "Support Booster",
      gain: "18% of lost estimates recovered",
    },
  },
  {
    stage: "After the job is done",
    num: "04",
    without: {
      head: "Nothing happens. Money walks out.",
      body: "The invoice goes out. Then silence. No review request, no referral ask, no membership pitch. Three doors close on every job.",
    },
    with: {
      head: "Three doors open instead.",
      body: "Review request by SMS. Ambassador enrollment. Unsold items queued for follow-up. All automatic. All revenue.",
      product: "SalesBooster Platform",
      gain: "Three revenue channels per job",
    },
  },
  {
    stage: "Getting Google reviews",
    num: "05",
    without: {
      head: "\"Leave us a review?\" — 1 in 10 jobs.",
      body: "The tech occasionally remembers. Two reviews a month. Unhappy customers post one-star reviews with no warning.",
    },
    with: {
      head: "Every customer texted. Filtered first.",
      body: "An agent reads the reply. Happy customers go to Google. Unhappy ones land in a ticket queue and never see the public form. The rating climbs and the leads follow.",
      product: "Review Booster",
      gain: "3.2× more reviews · higher local rank",
    },
  },
  {
    stage: "Word-of-mouth referrals",
    num: "06",
    without: {
      head: "\"Tell your friends!\" Zero tracking.",
      body: "No tracking. No reward. No attribution. Word-of-mouth might be working. You literally cannot tell.",
    },
    with: {
      head: "Every referral attributed to the dollar.",
      body: "A unique phone extension and email alias per customer. Full attribution from referral to paid invoice. The reward fires automatically when the job closes.",
      product: "Referral Booster",
      gain: "15+ tracked referrals a month",
    },
  },
  {
    stage: "Money on the table",
    num: "07",
    without: {
      head: "Invoices and memberships vanish.",
      body: "One awkward call. Then silence. Lapsed memberships disappear off the radar. Thousands in estimates gather dust every quarter.",
    },
    with: {
      head: "Agents working through the night.",
      body: "Follow-up on every estimate. Reminder on every invoice. Renewal outreach for every membership. $47K+ recovered per quarter is the median.",
      product: "Support Booster",
      gain: "Median $47K/quarter recovered",
    },
  },
];

export const NAV_RESOURCES = [
  { label: "ROI calculator", href: "/roi", description: "What you're leaving on the truck" },
  { label: "Integrations", href: "/integrations", description: "Housecall Pro, and what's next" },
  { label: "About", href: "/about", description: "Why we're building this" },
];

export const SITE = {
  name: "SalesBooster",
  domain: "salesbooster.app",
  tagline: "Revenue software for home-service operators.",
  primaryCta: { label: "Reserve your spot", href: "/waitlist" },
  secondaryCta: { label: "Watch the 90-second tour", href: "#tour" },
  applyCta: { label: "Apply for early access", href: "/apply" },
  status: {
    label: "Onboarding 25 design partners — Q3 2026",
    short: "Design-partner program",
  },
};
