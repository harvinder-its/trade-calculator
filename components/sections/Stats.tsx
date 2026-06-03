"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { statsData } from "@/data/stats";

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-white/5 py-16 backdrop-blur-sm dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <li className="text-center">
                <p className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  {stat.label}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
