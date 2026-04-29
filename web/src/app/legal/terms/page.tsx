import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

export const metadata = { title: "Terms" };

export default function Terms() {
  return (
    <>
      <SiteNav />
      <main className="container-page pt-28 sm:pt-40 pb-32 max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-5xl tracking-[-0.03em] leading-[0.96]">
          Terms of use
        </h1>
        <div className="mt-10 space-y-5 text-[var(--ink-muted)] text-pretty leading-relaxed">
          <p>
            This website is informational. SalesBooster is in pre-launch. Nothing on this site is an offer to sell, a contract, or a binding commitment to deliver software by a specific date.
          </p>
          <p>
            Joining the waitlist or submitting an application is an expression of interest. Founding-customer pricing is offered in good faith to operators we onboard before public launch and is documented in a separate written agreement.
          </p>
          <p>
            We will publish full terms of service before public launch.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
