"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BarChart3, Gamepad2, Layers, Zap } from "lucide-react";

const features = [
  {
    title: "Instant Analysis",
    description:
      "Get fair trade results in seconds. No signup, no downloads — just enter values and calculate.",
    icon: Zap,
    iconBg: "#E8F0FE",
    iconColor: "#1A73E8",
  },
  {
    title: "Multi-Game Support",
    description:
      "Works for Roblox, Rocket League, CS2, Pokémon cards, sports cards, and any tradable items.",
    icon: Gamepad2,
    iconBg: "#E6F4EA",
    iconColor: "#34A853",
  },
  {
    title: "Accurate Comparison",
    description:
      "Percentage-based comparison shows exactly how much you gain or lose in every trade.",
    icon: BarChart3,
    iconBg: "#FEF7E0",
    iconColor: "#F29900",
  },
  {
    title: "Free & Easy",
    description:
      "100% free trade value calculator with a clean interface designed for quick decisions.",
    icon: Layers,
    iconBg: "#FCE8E6",
    iconColor: "#EA4335",
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
        <div className="mb-14 max-w-2xl mx-auto text-center">
          <span className="text-[13px] font-semibold uppercase tracking-widest text-google-blue">
            Features
          </span>
          <h2
            id="features-heading"
            className="mt-3 text-[2rem] font-bold tracking-tight text-google-dark sm:text-[2.5rem]"
          >
            Everything you need to trade smarter
          </h2>
          <p className="mt-4 text-[1rem] text-google-gray">
            Built for gamers, collectors, and traders who want fair deals every time.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.07}>
              <article className="group h-full rounded-2xl border border-google-gray-border bg-white p-6 shadow-card transition hover:shadow-card-hover hover:-translate-y-0.5">
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition group-hover:scale-105"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <feature.icon className="h-5 w-5" style={{ color: feature.iconColor }} aria-hidden />
                </div>
                <h3 className="text-[15px] font-semibold text-google-dark">{feature.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-google-gray">
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
