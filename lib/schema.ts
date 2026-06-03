import { faqItems } from "@/data/faq";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tradevaluecalculator.com";

/** FAQ structured data for rich snippets */
export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** WebSite schema with search action placeholder */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Trade Value Calculator",
    url: SITE_URL,
    description:
      "Free trade value calculator for gamers and collectors. Check if your Roblox, Rocket League, CS2, sports card, or Pokemon trades are fair instantly.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/#calculator`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** SoftwareApplication schema for the calculator tool */
export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Trade Value Calculator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Instantly compare trade values for gaming items, collectibles, skins, and cards.",
    url: SITE_URL,
  };
}
