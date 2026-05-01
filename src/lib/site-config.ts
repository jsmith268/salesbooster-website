/**
 * Source of truth for all content.
 * Voice: operator-grade, evidence-and-mechanism based. Built. Live. Selecting launch partners.
 */

export type ValueProp = {
  /** Where in the operator's day this hits. */
  category: string;
  /** Benefit-led headline. Not the feature noun. */
  title: string;
  /** Two to three sentences: what it does, why it works, why it matters. */
  body: string;
  /** One sentence on what makes our version different. */
  edge: string;
};

export type Product = {
  slug: string;
  name: string;
  short: string;
  detail: string;
  tag: string;
  hue: string;
  /** Short feature labels — used by the nav mega-menu bullets. */
  features: string[];
  /** Directional outcome word — not a fabricated stat. */
  metric: string;
  /** What the outcome is about. */
  metricLabel: string;
  /** Single-line mechanism — why this works. */
  mechanism: string;
  setup: string;
  /** H2 for the value-props section on the product page. */
  valuePropsTitle: string;
  /** Subtitle for the value-props section. */
  valuePropsDescription: string;
  /** Six rich value propositions rendered as the product page's main body. */
  valueProps: ValueProp[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "sales-booster",
    name: "Sales Booster",
    tag: "Upsell engine",
    hue: "--hue-sales",
    short: "Inspections become three-tier proposals.",
    detail:
      "On site, your tech runs the inspection on a tablet. Photos get tagged, the issues are scored, and a Good/Better/Best proposal generates from your live pricebook. The customer picks a tier. The estimate fires back to your field-service software in one tap.",
    features: [
      "Digital inspection forms",
      "Good/Better/Best engine",
      "AI follow-up portal",
      "Programmatic video proposals",
      "Customer chat agent",
      "One-click FSM sync",
    ],
    metric: "Larger",
    metricLabel: "average ticket size",
    mechanism:
      "Three priced options with photos and line items beat a verbal estimate. Customers self-select up.",
    setup: "Live in 24–48 hours",
    valuePropsTitle: "Six engines. Every one closes a sale.",
    valuePropsDescription:
      "From the clipboard at the door to the signed proposal in the truck — six mechanisms that compound, in the order revenue is actually won.",
    valueProps: [
      {
        category: "Diagnosis · at the door",
        title: "Findings the customer can see, not just hear.",
        body:
          "Every issue gets photographed, severity-scored, and tagged to a location on the equipment. The customer watches the inspection happen on the tablet — they see the rust, the corrosion, the worn fitting, the failed sensor. Trust at the door is what makes the bigger ticket possible later.",
        edge: "Trade-specific templates ship pre-built for HVAC, plumbing, electrical, and garage door — calibrated to the failure modes each trade actually sees.",
      },
      {
        category: "Proposal · the moment of decision",
        title: "Three priced options, generated from your live pricebook.",
        body:
          "Rules per category build out a Good / Better / Best proposal automatically from the inspection findings. The pricing is yours — pulled in real time from your pricebook — never our markup. The customer chooses between options instead of accepting or refusing one verbal price.",
        edge: "When the value at each tier is visible side-by-side, customers self-select up. The middle option stops feeling like an upsell.",
      },
      {
        category: "Closing · after \"let me think\"",
        title: "Estimates that follow themselves up.",
        body:
          "When a customer says 'let me think,' a personal portal goes out the same evening with the proposal, photos, and a chat agent that knows the diagnosis specifics. Estimates that would have died quietly come back warm — without a human remembering to call.",
        edge: "Cadence respects the human. It backs off when the customer signals 'no' and drops cleanly when they say 'went with someone else.'",
      },
      {
        category: "Decision · the spouse's chair",
        title: "A video walkthrough that closes the people who weren't on site.",
        body:
          "Auto-generated video of the diagnosis and tier comparison, sent with the proposal. The customer can re-watch and forward to whoever else needs to weigh in. Decision-makers who weren't on the truck-roll get the same visual context the tech gave at the door.",
        edge: "No filming, no editing — videos are generated programmatically from inspection data with brand templates per trade.",
      },
      {
        category: "Late-stage objections · 24/7",
        title: "Answers the question that would have killed the deal.",
        body:
          "A chat agent embedded in the proposal portal that knows your specific pricebook, warranties, and scheduling availability. When a customer's doubt surfaces at 8pm Sunday, the answer comes back before they text three competitors for a counter-quote.",
        edge: "Cleanly hands off to a human when the issue is genuinely complex — no AI dead-ends, no customer frustration.",
      },
      {
        category: "Back office · zero-friction adoption",
        title: "Lives inside the system you already run.",
        body:
          "Pricebook, customers, jobs, estimates, and invoices stay in sync, both ways, in real time. The platform is invisible to your back office — no double-entry, no CSV exports, no spreadsheets, no second login your office staff has to learn.",
        edge: "First-class integration with Housecall Pro, ServiceTitan, Jobber, and Service Fusion — connection happens in the first 24–48 hours.",
      },
    ],
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
    metric: "Tracked",
    metricLabel: "referral attribution",
    mechanism:
      "Word-of-mouth becomes measurable when every customer has a unique referral path back to a paid invoice.",
    setup: "Fully automated after setup",
    valuePropsTitle: "Six engines. Every customer becomes a channel.",
    valuePropsDescription:
      "Word-of-mouth stops being a guess. Every customer becomes an attributable, measurable, automatically-rewarded source of new revenue — without anyone in your shop chasing it.",
    valueProps: [
      {
        category: "Enrollment · automatic",
        title: "Every customer enrolled. Without anyone asking.",
        body:
          "After every completed job, the customer is invited into the ambassador program by SMS — automatically. No tech reminders, no admin task, no awkward 'so, do you know anyone…' conversation. The most reliable referral mechanism is the one that doesn't require a human to remember to fire it.",
        edge: "TCPA-compliant. Trade-aware timing — never an enrollment text after a 1am emergency call or a difficult job.",
      },
      {
        category: "Identity · per-customer",
        title: "A real phone number, not a discount code.",
        body:
          "Each customer gets a personal phone extension and email alias they can hand out at a dinner party or share in a neighborhood group. Friends and neighbors call your business directly, but the call is routed through that customer's identity — so the credit lands on the right name when the job closes.",
        edge: "Looks like a real referral, not a marketing campaign. Customers feel like they're recommending a friend's business — because they are.",
      },
      {
        category: "Distribution · OS-level",
        title: "Saved to the phone, shared in two taps.",
        body:
          "Customers receive a native iOS / Android contact card with your branding and their attribution embedded. The system share sheet is wired up so it goes from their contacts to a friend's phone in two taps. People share contacts. They don't share coupon codes.",
        edge: "OS-level contact distribution beats every email-link or QR-code referral program — it lives where customers actually communicate.",
      },
      {
        category: "Attribution · end-to-end",
        title: "Every referred dollar tied back to a name.",
        body:
          "From the moment a referred lead comes in to the moment the invoice is paid, the platform tracks the relationship and posts the dollar amount back to the source customer's profile. You can finally answer the question every operator should ask: 'where do my best leads come from?'",
        edge: "Closes the loop with your FSM — knows when the invoice was actually paid, not just when the estimate was sent.",
      },
      {
        category: "Incentive · pay-on-close",
        title: "Pay only for what closed.",
        body:
          "Cash, gift card, account credit, ladder, milestone — pick the structure that fits your trade and your margin. Rewards fire automatically when the closing conditions are met, and never before. No accidental payouts on bid-only leads or cancelled jobs.",
        edge: "Rules engine built around your jobs, not a one-size-fits-all 'refer a friend, get $25' template.",
      },
      {
        category: "Engagement · second referrals",
        title: "Customers see their own scoreboard.",
        body:
          "A branded portal under your domain shows each customer their referrals, the status of each, and the rewards earned to date. Customers feel like a partner instead of a marketing target — and engaged ambassadors are the ones who refer a second, third, and fourth time.",
        edge: "The compounding referral loop most programs miss: it's the same customer who refers three times that drives the long-tail revenue.",
      },
    ],
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
    metric: "Higher",
    metricLabel: "review velocity",
    mechanism:
      "Asking every customer — and routing detractors privately — produces more public reviews and fewer surprise one-stars.",
    setup: "Starts with your next job",
    valuePropsTitle: "Six engines. Every job earns its rating.",
    valuePropsDescription:
      "Volume goes up. Surprise one-stars go down. Local rank climbs as a side effect — and the techs who earn the praise get paid for it.",
    valueProps: [
      {
        category: "Filtering · sentiment-aware",
        title: "Reads the room before the customer goes public.",
        body:
          "An agent texts the customer after the job and reads their reply in plain English. The model is trained on home-service language — it knows the difference between mild annoyance ('a little late') and a real problem ('the guy was rude') — and routes the conversation accordingly before anyone hits the public form.",
        edge: "Trade-aware sentiment, not a generic NLP classifier. Tuned on the way real homeowners actually describe their experience.",
      },
      {
        category: "Local SEO · multi-location",
        title: "Reviews land on the Google profile that actually ranks you.",
        body:
          "Multi-location operators get reviews mapped from job → service location → correct Google Business Profile, automatically. The lift compounds at the local level — every neighborhood listing gets stronger — instead of getting diluted across one corporate listing nobody searches.",
        edge: "Works for franchise networks, multi-brand rollups, and equity-group portfolios — each location's rank rises on its own.",
      },
      {
        category: "Reputation defense · pre-emptive",
        title: "The one-star review that never happens.",
        body:
          "Detractors are intercepted before they ever see the public review form and routed into a private resolution flow. The manager gets a ticket with the customer's full context — job notes, tech, history — and a chance to fix it before it goes public. Most of those tickets convert to a happy customer and, weeks later, a 5-star review.",
        edge: "A surprise one-star review costs a multiple of what it costs to resolve a private complaint. This is the highest-leverage workflow in the platform.",
      },
      {
        category: "Tech retention · gamified",
        title: "Pays the tech for the 5-star they earned.",
        body:
          "Reviews mentioning a tech by name automatically post a bonus to that tech's record. Public recognition plus a paycheck nudge drives the behavior you want — and gives techs a real reason to ask for the review at the door, every time.",
        edge: "Tied to retention. The techs you want to keep stay longer when the system rewards them for the work that gets them praised.",
      },
      {
        category: "Detractor recovery · with context",
        title: "Every problem caught with the receipts attached.",
        body:
          "When a detractor surfaces, the manager queue holds the full message thread, the job notes, the tech who ran the call, and the customer's history with you. Resolution happens fast because the context is already there — no rummaging through three systems to figure out who said what.",
        edge: "SLA-tracked. You can measure how often detractors are converted into advocates — and the conversion rate is high.",
      },
      {
        category: "Volume · re-engagement",
        title: "Asks the customers you forgot to ask.",
        body:
          "Past customers who never reviewed get a polite, TCPA-compliant nudge weeks after the work — when they've had time to feel the result. Most reviews come from customers who were happy, but never quite got around to leaving one. This is the silent majority.",
        edge: "Knows when to ask: job age, sentiment classification, frequency rules, opt-out respect — every signal your team would weigh, automated.",
      },
    ],
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
    metric: "Recovered",
    metricLabel: "estimates, AR & memberships",
    mechanism:
      "Revenue you've already earned the right to ask for. Automated follow-up surfaces it; humans close it.",
    setup: "Auto-detects from your FSM",
    valuePropsTitle: "Six engines. Every dollar you already earned, recovered.",
    valuePropsDescription:
      "Cold estimates, lapsed memberships, overdue invoices — worked while you sleep. The revenue you've already done the work to earn, surfaced and chased without anyone in your shop having to remember it exists.",
    valueProps: [
      {
        category: "Cold estimates · revival",
        title: "The follow-up call that always happens.",
        body:
          "Cold estimates get automated SMS and email follow-up that knows the diagnosis specifics, can answer questions about the proposal, and reads the customer's tone. Cadence respects the human — it backs off when they say 'thinking on it,' drops cleanly when they say 'went with someone else.'",
        edge: "Most operators leave thousands of dollars in dead estimates each quarter because nobody had time to chase. This works them while you're on the next job.",
      },
      {
        category: "Receivables · automated",
        title: "Your AR aging report, but actually worked.",
        body:
          "Overdue invoices get reminders and one-click payment links automatically, with cadence that respects the customer's history with you — polite for first-time slips, firm for chronic offenders, escalation to a manager when the situation calls for a human voice.",
        edge: "Pulls aging directly from your FSM. Does the work no admin has had time to do consistently for years.",
      },
      {
        category: "Recurring revenue · save",
        title: "Memberships that renew themselves.",
        body:
          "Lapsed memberships get a renewal nudge tied to what the customer actually used — the maintenance visits, the discounts, the priority scheduling. Expiring memberships get pre-renewal outreach personalized to the value they extracted. Recurring revenue is the asset you don't want walking out the door.",
        edge: "Knows what each member used, so the pitch is specific instead of generic — and the renewal rate reflects that.",
      },
      {
        category: "Customer chat · self-improving",
        title: "A knowledge base that writes itself.",
        body:
          "The system watches how your team actually answers customers in real conversations and surfaces new KB articles when patterns emerge. The chat agent learns to answer the way you'd answer — in your voice, with your rules, your warranties, your scheduling — without anyone writing a single doc.",
        edge: "Most knowledge bases die because they require maintenance. This one improves itself every time someone on your team picks up a thread.",
      },
      {
        category: "Human handoff · clean",
        title: "Knows when to call a human.",
        body:
          "When sentiment, complexity, or customer value crosses a threshold, the conversation escalates to a manager with the full thread and a recommended action attached. The 80% the AI handles cleanly stays handled; the 20% that needs a person gets one — fast, with full context already loaded.",
        edge: "Threshold-based escalation, configurable by trade, by customer tier, and by job value. No AI dead-ends, no customer waiting on a frustrated bot.",
      },
      {
        category: "Control · admin override",
        title: "Type into any thread, anytime.",
        body:
          "A single inbox spans SMS, email, and web chat across all four Boosters. Admins can jump into any conversation, take over, and hand back to the agent — without breaking thread continuity for the customer. When you want to close a deal personally, you can.",
        edge: "One inbox. No swivel-chair across five systems trying to figure out who said what to whom on which channel.",
      },
    ],
  },
];

export type Plan = {
  name: string;
  monthly: number;
  annual: number;
  per: string;
  popular?: boolean;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaKind: "waitlist" | "apply";
  applyTier?: "pro" | "enterprise";
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    monthly: 299,
    annual: 269,
    per: "/loc/mo",
    description: "One Booster. Pick the area where you most want to grow.",
    items: [
      "Up to 100 jobs / location / month",
      "Any 1 Booster product",
      "$2.99 per additional job",
      "Field-service software sync",
      "Core analytics",
      "Email support",
    ],
    ctaLabel: "Reserve my launch spot",
    ctaHref: "/waitlist?plan=starter",
    ctaKind: "waitlist",
  },
  {
    name: "Pro",
    monthly: 799,
    annual: 719,
    per: "/loc/mo",
    popular: true,
    description: "All four Boosters. Full revenue support across every channel.",
    items: [
      "Up to 500 jobs / location / month",
      "All 4 Booster products",
      "$1.99 per additional job",
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
  {
    name: "Growth",
    monthly: 499,
    annual: 449,
    per: "/loc/mo",
    description: "Any two Boosters. Combine the focuses that work best together.",
    items: [
      "Up to 250 jobs / location / month",
      "Any 2 Booster products",
      "$2.49 per additional job",
      "Field-service software sync",
      "Advanced analytics",
      "AI chatbot & portals",
      "Priority support",
    ],
    ctaLabel: "Reserve my launch spot",
    ctaHref: "/waitlist?plan=growth",
    ctaKind: "waitlist",
  },
];

export const ENTERPRISE = {
  name: "Enterprise",
  description:
    "For companies, equity groups, and agencies managing service across more than 10 locations. We write a custom contract, run on dedicated infrastructure, and assign a named integration team.",
  pricingHint: "Volume pricing · unlimited locations · launch-rate protection",
  ctaLabel: "Apply for launch access",
  ctaHref: "/apply?tier=enterprise",
};

export const FAQS = [
  {
    q: "Which field-service software do you support?",
    a: "Housecall Pro, ServiceTitan, Jobber, and Service Fusion are first-class today. Pricebook, customer list, jobs, estimates, and invoices sync both ways in real time. Other systems can be on-boarded by request — we run an integration sprint per launch partner.",
  },
  {
    q: "Can I start with just one product?",
    a: "Yes. Most operators start with Sales Booster or Review Booster, prove the lift on one, then layer the next.",
  },
  {
    q: "What counts as a job?",
    a: "A job is one completed service appointment in your FSM — one truck-roll, one customer, one ticket. Whatever Boosters you have running — proposals, reviews, ambassador tracking, AR recovery, customer chat — all of it works against that job. One job, one count.",
  },
  {
    q: "How fast is setup?",
    a: "Under 48 hours. Connect your FSM and your pricebook syncs in real time. We ship pre-built templates for HVAC, plumbing, electrical, and garage door.",
  },
  {
    q: "What kind of lift should I expect?",
    a: "It depends on you. The platform makes the right things happen automatically — three priced options at the door, every customer asked for a review, every cold estimate followed up — but the size of the lift is a function of how aggressively your team uses it. We don't quote a number we can't back up. We can model your potential on the ROI page using your own assumptions.",
  },
  {
    q: "What if my techs resist it?",
    a: "Three priced options with real photos is simpler than a verbal estimate. Most techs adopt the proposal flow inside their first week because it makes their conversation easier, not harder.",
  },
  {
    q: "What if I go over my monthly job allotment?",
    a: "Extra jobs bill at your tier's per-job rate: $2.99 on Starter, $2.49 on Growth, $1.99 on Pro. You set a monthly overage ceiling in your account, so you control the maximum spend.",
  },
  {
    q: "What about SMS compliance?",
    a: "TCPA compliance is built in. Opt-out, quiet hours, frequency limits, and the required disclosures all run on rails.",
  },
  {
    q: "Will my price ever go up?",
    a: "Public pricing rises as we add capacity and capability. Operators who join during launch are protected: you always pay 50% of the public rate, for the life of your account. As public pricing rises, your dollar discount grows with it.",
  },
  {
    q: "Why is access limited right now?",
    a: "The product is built and live. We're enrolling a small launch group so each partner gets dedicated onboarding for their trade and FSM. The 50%-off-for-life launch pricing only applies to this group; once it closes, public pricing kicks in.",
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
      body: "Every issue gets photographed, tagged, and shown to the customer in real time. Once they see the evidence, they're choosing between options instead of accepting or refusing one price.",
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
      body: "Good, Better, Best with real line items. When the value at each tier is visible, customers self-select up — the higher tiers stop feeling like an upsell and start feeling like the obvious choice.",
      product: "Sales Booster",
      gain: "Higher tier selection",
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
      body: "A personal portal goes out the same evening. A chat agent answers questions at 11pm. Estimates that would have died quietly come back warm.",
      product: "Support Booster",
      gain: "Higher recovery rate",
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
      gain: "Multiple revenue channels per job",
    },
  },
  {
    stage: "Getting Google reviews",
    num: "05",
    without: {
      head: "\"Leave us a review?\" — 1 in 10 jobs.",
      body: "The tech occasionally remembers. A handful of reviews a month. Unhappy customers post one-star reviews with no warning.",
    },
    with: {
      head: "Every customer texted. Filtered first.",
      body: "An agent reads the reply. Happy customers go to Google. Unhappy ones land in a ticket queue and never see the public form. Public rating climbs; unfiltered surprise complaints disappear.",
      product: "Review Booster",
      gain: "More reviews · stronger local rank",
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
      gain: "Tracked referral attribution",
    },
  },
  {
    stage: "Money on the table",
    num: "07",
    without: {
      head: "Invoices and memberships vanish.",
      body: "One awkward call. Then silence. Lapsed memberships disappear off the radar. Estimates gather dust every quarter.",
    },
    with: {
      head: "Agents working through the night.",
      body: "Follow-up on every estimate. Reminder on every invoice. Renewal outreach for every membership. Revenue you'd already earned the right to ask for, surfaced automatically.",
      product: "Support Booster",
      gain: "Recovered revenue across categories",
    },
  },
];

export const NAV_RESOURCES = [
  { label: "ROI calculator", href: "/roi", description: "Model your own potential lift" },
  { label: "Integrations", href: "/integrations", description: "The four FSMs we connect to" },
  { label: "About", href: "/about", description: "How and why we built it" },
];

export const SITE = {
  name: "SalesBooster",
  domain: "salesbooster.app",
  tagline: "Revenue software for home-service operators.",
  primaryCta: { label: "Reserve your spot", href: "/waitlist" },
  secondaryCta: { label: "Watch the 90-second tour", href: "#tour" },
  applyCta: { label: "Apply for early access", href: "/apply" },
  status: {
    label: "Limited-time launch pricing — 50% off for life",
    short: "Limited-time launch pricing",
  },
};
