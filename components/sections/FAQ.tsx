"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-[13px] font-semibold uppercase tracking-widest text-google-blue">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="mt-3 text-[2rem] font-bold tracking-tight text-google-dark sm:text-[2.5rem]"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[1rem] text-google-gray">
            Everything you need to know about our trade value calculator.
          </p>
        </div>

        <dl className="space-y-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={item.question} delay={index * 0.04}>
                <div className={cn(
                  "rounded-2xl border transition-colors",
                  isOpen
                    ? "border-google-blue/30 bg-google-blue-light/30"
                    : "border-google-gray-border bg-white hover:border-google-gray"
                )}>
                  <dt>
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                    >
                      <span className={cn(
                        "text-[15px] font-medium transition-colors",
                        isOpen ? "text-google-blue" : "text-google-dark"
                      )}>
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 transition-transform duration-200",
                          isOpen ? "rotate-180 text-google-blue" : "text-google-gray"
                        )}
                        aria-hidden
                      />
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-google-blue/20 px-6 py-4 text-[14px] leading-relaxed text-google-gray">
                          {item.answer}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
