import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

export const metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <>
      <SiteNav />
      <main className="container-page pt-28 sm:pt-40 pb-32 max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-5xl tracking-[-0.03em] leading-[0.96]">
          Privacy
        </h1>
        <div className="mt-10 space-y-5 text-[var(--ink-muted)] text-pretty leading-relaxed">
          <p>
            SalesBooster is in pre-launch. The waitlist and application forms on this site collect only the information you submit voluntarily — typically your name, work email, company, role, and a few qualifying details about your operation.
          </p>
          <p>
            We use that information for one purpose: to reach out when access opens and to evaluate whether early-access slots are a fit. We do not sell, rent, or share it with third parties. We will publish a full privacy policy before public launch.
          </p>
          <p>
            Questions? Email <a className="text-[var(--brand)] underline" href="mailto:hello@salesbooster.app">hello@salesbooster.app</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
