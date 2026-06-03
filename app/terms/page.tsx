import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Trade Value Calculator.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-32">
      <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
      <p className="text-muted-foreground">Last updated: June 2026</p>
      <p className="mt-6 text-muted-foreground">
        Trade Value Calculator is provided &quot;as is&quot; for informational
        purposes only. Results are based on values you enter and do not
        constitute financial or trading advice.
      </p>
      <p className="mt-4 text-muted-foreground">
        Always verify high-value trades on official marketplaces before
        completing them. We are not affiliated with game publishers or trading
        platforms.
      </p>
      <Link href="/" className="mt-8 inline-block text-brand-500 hover:underline">
        &larr; Back to calculator
      </Link>
    </article>
  );
}
