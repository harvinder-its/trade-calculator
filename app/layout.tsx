import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { BackToTop } from "@/components/ui/BackToTop";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  getFAQSchema,
  getSoftwareApplicationSchema,
  getWebSiteSchema,
} from "@/lib/schema";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tradevaluecalculator.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trade Value Calculator | Free Fair Trade Checker for Gamers",
    template: "%s | Trade Value Calculator",
  },
  description:
    "Free trade value calculator for gamers and collectors. Instantly check if Roblox, Rocket League, CS2, sports card, or Pokemon trades are fair. Compare offers and get percentage results.",
  keywords: [
    "trade calculator",
    "trade value calculator",
    "Roblox trade calculator",
    "Rocket League trade calculator",
    "fair trade checker",
    "item trade calculator",
    "CS2 trade calculator",
    "sports card trade calculator",
    "Pokemon trade calculator",
    "gaming trade fairness",
  ],
  authors: [{ name: "Trade Value Calculator" }],
  creator: "Trade Value Calculator",
  publisher: "Trade Value Calculator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Trade Value Calculator",
    title: "Trade Value Calculator | Free Fair Trade Checker",
    description:
      "Check if your gaming or collectible trade is fair instantly. Free Roblox, Rocket League, CS2, and card trade calculator.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Trade Value Calculator - Fair Trade Checker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Value Calculator | Free Fair Trade Checker",
    description:
      "Instantly compare trade values for gaming items, skins, and collectibles. Free fair trade analysis.",
    images: ["/opengraph-image"],
    creator: "@tradevaluecalc",
  },
  category: "gaming",
  applicationName: "Trade Value Calculator",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffafc" },
    { media: "(prefers-color-scheme: dark)", color: "#120a1c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    getFAQSchema(),
    getWebSiteSchema(),
    getSoftwareApplicationSchema(),
  ];

  return (
    <html lang="en-US">
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-screen bg-white">
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
