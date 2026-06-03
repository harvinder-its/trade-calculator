"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { defaultSample, tradePresets } from "@/data/presets";
import {
  calculateTrade,
  parseTradeValue,
  type TradeResult,
} from "@/lib/calculator";
import { cn, formatNumber } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Calculator,
  Scale,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useCallback, useState } from "react";

const verdictStyles = {
  fair: {
    bg: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/40",
    text: "text-yellow-600 dark:text-yellow-400",
    icon: Scale,
  },
  win: {
    bg: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/40",
    text: "text-green-600 dark:text-green-400",
    icon: TrendingUp,
  },
  lose: {
    bg: "from-red-500/20 to-rose-500/10",
    border: "border-red-500/40",
    text: "text-red-600 dark:text-red-400",
    icon: TrendingDown,
  },
};

function ResultCard({ result }: { result: TradeResult }) {
  const style = verdictStyles[result.verdict];
  const Icon = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm",
        style.bg,
        style.border
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10",
            style.text
          )}
        >
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <p className={cn("text-lg font-bold", style.text)}>{result.label}</p>
          <p className="mt-1 text-foreground">{result.message}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Difference:{" "}
            <span className="font-mono font-semibold text-foreground">
              {result.percentageDiff >= 0 ? "+" : ""}
              {result.percentageDiff.toFixed(1)}%
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TradeCalculator() {
  const [yourOffer, setYourOffer] = useState(defaultSample.yourOffer);
  const [theirOffer, setTheirOffer] = useState(defaultSample.theirOffer);
  const [yourItemName, setYourItemName] = useState("");
  const [theirItemName, setTheirItemName] = useState("");
  const [result, setResult] = useState<TradeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = useCallback(() => {
    setError(null);
    setResult(null);

    const your = parseTradeValue(yourOffer);
    const their = parseTradeValue(theirOffer);

    if (your === null || their === null) {
      setError("Please enter valid positive numbers for both offers.");
      return;
    }

    if (yourOffer.trim() === "" || theirOffer.trim() === "") {
      setError("Both offer fields are required.");
      return;
    }

    const tradeResult = calculateTrade({
      yourOffer: your,
      theirOffer: their,
      yourItemName: yourItemName || undefined,
      theirItemName: theirItemName || undefined,
    });

    setResult(tradeResult);
  }, [yourOffer, theirOffer, yourItemName, theirItemName]);

  const applyPreset = (preset: (typeof tradePresets)[0]) => {
    setYourOffer(preset.yourOffer);
    setTheirOffer(preset.theirOffer);
    setYourItemName(preset.yourItemName);
    setTheirItemName(preset.theirItemName);
    setResult(null);
    setError(null);
  };

  return (
    <section
      id="calculator"
      className="relative scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="calculator-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-card-glow" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trade Calculator"
          title="Check Your Trade Fairness"
          description="Enter item values from any marketplace or price guide. Get an instant fair trade analysis."
        />

        {/* Category presets */}
        <ScrollReveal className="mb-8">
          <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
            Quick presets
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tradePresets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-400"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:bg-white/[0.03] sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Your Offer */}
              <div className="space-y-3">
                <label
                  htmlFor="your-offer"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-red-500/20 text-xs text-red-500">
                    OUT
                  </span>
                  Your Offer
                </label>
                <input
                  id="your-offer"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 5000"
                  value={yourOffer}
                  onChange={(e) => setYourOffer(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                  aria-describedby="your-offer-hint"
                />
                <input
                  id="your-item"
                  type="text"
                  placeholder="Item name (optional)"
                  value={yourItemName}
                  onChange={(e) => setYourItemName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-500 focus:outline-none"
                />
                <p id="your-offer-hint" className="text-xs text-muted-foreground">
                  Total value you are giving
                </p>
              </div>

              {/* Their Offer */}
              <div className="space-y-3">
                <label
                  htmlFor="their-offer"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-green-500/20 text-xs text-green-500">
                    IN
                  </span>
                  Their Offer
                </label>
                <input
                  id="their-offer"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 5500"
                  value={theirOffer}
                  onChange={(e) => setTheirOffer(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                  aria-describedby="their-offer-hint"
                />
                <input
                  id="their-item"
                  type="text"
                  placeholder="Item name (optional)"
                  value={theirItemName}
                  onChange={(e) => setTheirItemName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-500 focus:outline-none"
                />
                <p id="their-offer-hint" className="text-xs text-muted-foreground">
                  Total value you are receiving
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
                onClick={handleCalculate}
              >
                <Calculator className="h-5 w-5" aria-hidden />
                Calculate Trade
              </Button>

              {yourOffer && theirOffer && (
                <p className="text-sm text-muted-foreground">
                  Comparing{" "}
                  <span className="font-mono font-medium text-foreground">
                    ${formatNumber(Number(yourOffer.replace(/,/g, "")) || 0)}
                  </span>{" "}
                  vs{" "}
                  <span className="font-mono font-medium text-foreground">
                    ${formatNumber(Number(theirOffer.replace(/,/g, "")) || 0)}
                  </span>
                </p>
              )}
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
                {error}
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {result && (
                <div className="mt-6">
                  <ResultCard result={result} />
                </div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
