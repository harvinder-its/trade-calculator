"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Gamepad2,
  Layers,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Instant Trade Analysis",
    description:
      "Get fair trade results in seconds. No signup, no downloads — just enter values and calculate.",
    icon: Zap,
    gradient: "from-accent-purple/20 to-accent-pink/20",
  },
  {
    title: "Multi-Game Support",
    description:
      "Works for Roblox, Rocket League, CS2, Pokemon cards, sports cards, and any tradable items.",
    icon: Gamepad2,
    gradient: "from-accent-magenta/20 to-accent-pink/20",
  },
  {
    title: "Accurate Value Comparison",
    description:
      "Percentage-based comparison shows exactly how much you gain or lose in every trade.",
    icon: BarChart3,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Free & Easy To Use",
    description:
      "100% free trade value calculator with a clean interface designed for quick decisions.",
    icon: Layers,
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need to Trade Smarter"
          description="Built for gamers, collectors, and traders who want fair deals every time."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.08}>
              <article
                className={cn(
                  "group relative h-full rounded-2xl border border-white/10 bg-gradient-to-br p-6",
                  "backdrop-blur-sm transition duration-300 hover:border-brand-500/30 hover:shadow-glow",
                  feature.gradient
                )}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-500 transition group-hover:scale-110 group-hover:shadow-glow">
                  <feature.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
