"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calculator, CheckCircle2, Scale } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Enter Trade Values",
    description:
      "Input the total value of your offer and what you receive. Add optional item names for reference.",
    icon: Calculator,
  },
  {
    step: 2,
    title: "Compare Both Offers",
    description:
      "Our calculator analyzes the difference and computes the percentage gain or loss instantly.",
    icon: Scale,
  },
  {
    step: 3,
    title: "Get Instant Fairness Result",
    description:
      "See if the trade is fair, favorable, or unfavorable with clear color-coded feedback.",
    icon: CheckCircle2,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-white/5 py-20 backdrop-blur-sm dark:bg-white/[0.02] sm:py-28"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Fair Trade Analysis in 3 Steps"
          description="Simple, fast, and accurate — no account required."
        />

        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 0.12}>
              <li className="relative flex flex-col items-center text-center">
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-brand-500/50 to-transparent md:block"
                    aria-hidden
                  />
                )}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-600 shadow-glow dark:text-brand-400">
                  <item.icon className="h-8 w-8" aria-hidden />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-instagram text-sm font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 max-w-xs text-muted-foreground">{item.description}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
