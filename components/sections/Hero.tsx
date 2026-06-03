"use client";

import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const floatingCards = [
  { label: "Your Offer", value: "$5,000", color: "from-red-500/20 to-orange-500/20" },
  { label: "Their Offer", value: "$5,500", color: "from-green-500/20 to-emerald-500/20" },
  { label: "Result", value: "+10% Gain", color: "from-accent-purple/20 to-accent-pink/20" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32"
      aria-labelledby="hero-heading"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-accent-purple/25 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent-pink/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-full -translate-x-1/2 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
              <Sparkles className="h-4 w-4" aria-hidden />
              Free Fair Trade Checker
            </span>

            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Trade Value{" "}
              <span className="text-gradient-instagram">
                Calculator
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Check if your trade is fair instantly for gaming items, collectibles,
              skins, and cards.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" onClick={() => scrollToSection("calculator")}>
                Calculate Trade
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("how-it-works")}
              >
                How It Works
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-brand-500" aria-hidden />
                Instant results
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-500" aria-hidden />
                100% free
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-brand-500" aria-hidden />
                Multi-game support
              </li>
            </ul>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:bg-white/[0.03] sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-muted-foreground">
                  trade-value-calculator.app
                </span>
              </div>

              <div className="space-y-4">
                {floatingCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`rounded-xl border border-white/10 bg-gradient-to-r ${card.color} p-4 backdrop-blur-sm`}
                  >
                    <p className="text-xs font-medium text-muted-foreground">
                      {card.label}
                    </p>
                    <p className="mt-1 text-xl font-bold text-foreground">
                      {card.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="absolute -right-4 -top-4 rounded-xl border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm font-semibold text-green-600 dark:text-green-400"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Fair Trade ✓
              </motion.div>
            </div>

            <div
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-accent-purple/25 via-accent-pink/20 to-accent-orange/15 blur-2xl"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
