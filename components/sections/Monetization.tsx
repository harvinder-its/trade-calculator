"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { affiliatePartners } from "@/data/affiliate";
import { ExternalLink } from "lucide-react";

const partnerColors = [
  { color: "#1A73E8", bg: "#E8F0FE" },
  { color: "#34A853", bg: "#E6F4EA" },
  { color: "#EA4335", bg: "#FCE8E6" },
  { color: "#F29900", bg: "#FEF7E0" },
];

export function Monetization() {
  return (
    <section className="bg-google-gray-light py-20 sm:py-28" aria-labelledby="marketplaces-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Marketplaces"
          title="Check prices before you trade"
          description="Compare values on trusted gaming and collectible marketplaces. Affiliate links may earn us a commission at no extra cost to you."
          titleId="marketplaces-heading"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {affiliatePartners.map((partner, index) => {
            const palette = partnerColors[index % partnerColors.length];
            return (
              <ScrollReveal key={partner.name} delay={index * 0.07}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group flex h-full flex-col rounded-2xl border border-google-gray-border bg-white p-6 shadow-card transition hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition group-hover:scale-105"
                    style={{ backgroundColor: palette.bg }}
                  >
                    <partner.icon className="h-5 w-5" style={{ color: palette.color }} aria-hidden />
                  </div>
                  <h3 className="text-[15px] font-semibold text-google-dark">{partner.name}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-google-gray">
                    {partner.description}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium"
                    style={{ color: palette.color }}
                  >
                    {partner.cta}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
