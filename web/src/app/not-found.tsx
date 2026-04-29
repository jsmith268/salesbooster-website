import Link from "next/link";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="container-page pt-28 sm:pt-40 pb-32 max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl tracking-[-0.03em] leading-[0.96] text-balance">
          That page didn't make it to launch.
        </h1>
        <p className="mt-6 text-lg text-[var(--ink-muted)] text-pretty max-w-xl">
          We haven't built this one. Or it's been moved. Either way — the rest of the site is over here.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="primary">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/products">See the four Boosters</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
