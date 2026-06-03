"use client";

import { AdPlaceholder } from "@/components/ui/AdPlaceholder";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { affiliatePartners } from "@/data/affiliate";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export function Monetization() {
  return (
    <section className="py-20 sm:py-28" aria-label="Marketplace partners and advertisements">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* AdSense banner — recommended below main content blocks */}
        <ScrollReveal className="mb-16 flex justify-center">
          <AdPlaceholder slot="banner" label="Sponsored" />
        </ScrollReveal>

        <SectionHeading
          eyebrow="Marketplaces"
          title="Check Prices Before You Trade"
          description="Compare values on trusted gaming and collectible marketplaces. Affiliate links may earn us a commission at no extra cost to you."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {affiliatePartners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 0.08}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br p-6",
                  "backdrop-blur-sm transition hover:border-brand-500/40 hover:shadow-glow",
                  partner.accent
                )}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-500 transition group-hover:scale-110">
                  <partner.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-semibold text-foreground">{partner.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {partner.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                  {partner.cta}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* In-content ad placement */}
        <ScrollReveal className="mt-16 flex justify-center">
          <AdPlaceholder slot="in-content" className="max-w-2xl" />
        </ScrollReveal>
      </div>
    </section>
  );
}
