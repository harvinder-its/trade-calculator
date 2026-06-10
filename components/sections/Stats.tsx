"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { statsData } from "@/data/stats";

export function Stats() {
  return (
    <section className="border-y border-google-gray-border bg-google-gray-light py-14" aria-label="Platform statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.08}>
              <li className="text-center">
                <p className="text-[2.5rem] font-bold text-google-dark leading-none sm:text-[3rem]">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="mt-2 text-[14px] text-google-gray">{stat.label}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
