import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Trade Value Calculator.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-32">
      <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: June 2026</p>
      <p className="mt-6 text-muted-foreground">
        Trade Value Calculator does not collect personal data beyond standard
        analytics. Calculator inputs are processed locally in your browser and
        are not stored on our servers.
      </p>
      <p className="mt-4 text-muted-foreground">
        Third-party services (such as Google AdSense) may use cookies per their
        respective policies. See Google&apos;s privacy policy for AdSense data
        practices.
      </p>
      <Link href="/" className="mt-8 inline-block text-brand-500 hover:underline">
        &larr; Back to calculator
      </Link>
    </article>
  );
}
