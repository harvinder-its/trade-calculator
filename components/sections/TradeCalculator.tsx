"use client";

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
  Download,
  Scale,
  Share2,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

const verdictStyles = {
  fair: {
    bg: "#FEF7E0",
    border: "#FBBC04",
    color: "#F29900",
    icon: Scale,
    label: "Fair Trade",
  },
  win: {
    bg: "#E6F4EA",
    border: "#34A853",
    color: "#137333",
    icon: TrendingUp,
    label: "You Win",
  },
  lose: {
    bg: "#FCE8E6",
    border: "#EA4335",
    color: "#C5221F",
    icon: TrendingDown,
    label: "You Lose",
  },
};

interface ResultCardProps {
  result: TradeResult;
  yourOffer: string;
  theirOffer: string;
  yourItemName: string;
  theirItemName: string;
}

function ResultCard({ result, yourOffer, theirOffer, yourItemName, theirItemName }: ResultCardProps) {
  const style = verdictStyles[result.verdict];
  const Icon = style.icon;

  const buildReportText = () => {
    const yourLabel = yourItemName ? `${yourItemName} ($${yourOffer})` : `$${yourOffer}`;
    const theirLabel = theirItemName ? `${theirItemName} ($${theirOffer})` : `$${theirOffer}`;
    const diff = `${result.percentageDiff >= 0 ? "+" : ""}${result.percentageDiff.toFixed(1)}%`;
    return (
      `🔄 *Trade Value Report*\n\n` +
      `Your Offer: ${yourLabel}\n` +
      `Their Offer: ${theirLabel}\n\n` +
      `Verdict: *${result.label}*\n` +
      `${result.message}\n` +
      `Difference: *${diff}*\n\n` +
      `Check your trades free at tradevaluecalculator.com`
    );
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(buildReportText());
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const downloadPDF = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    const blue = [26, 115, 232] as [number, number, number];
    const dark = [32, 33, 36] as [number, number, number];
    const gray = [95, 99, 104] as [number, number, number];
    const verdictColor = {
      fair: [242, 153, 0] as [number, number, number],
      win: [52, 168, 83] as [number, number, number],
      lose: [234, 67, 53] as [number, number, number],
    }[result.verdict];

    const pageW = doc.internal.pageSize.getWidth();

    // Header bar
    doc.setFillColor(...blue);
    doc.rect(0, 0, pageW, 22, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Trade Value Calculator", 14, 14);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text("tradevaluecalculator.com", pageW - 14, 14, { align: "right" });

    // Title
    doc.setTextColor(...dark);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Trade Report", 14, 36);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...gray);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 43);

    // Divider
    doc.setDrawColor(232, 234, 237);
    doc.setLineWidth(0.4);
    doc.line(14, 47, pageW - 14, 47);

    // Trade comparison
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...dark);
    doc.text("Trade Summary", 14, 56);

    const rows = [
      ["Your Offer", yourItemName ? `${yourItemName}  —  $${yourOffer}` : `$${yourOffer}`],
      ["Their Offer", theirItemName ? `${theirItemName}  —  $${theirOffer}` : `$${theirOffer}`],
    ];

    let y = 63;
    for (const [label, value] of rows) {
      doc.setFillColor(248, 249, 250);
      doc.roundedRect(14, y, pageW - 28, 12, 2, 2, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...gray);
      doc.text(label, 20, y + 7.5);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...dark);
      doc.text(value, pageW - 20, y + 7.5, { align: "right" });
      y += 15;
    }

    // Verdict card
    y += 4;
    doc.setFillColor(...verdictColor.map((c) => Math.round(c * 0.15 + 240)) as [number, number, number]);
    doc.roundedRect(14, y, pageW - 28, 30, 3, 3, "F");
    doc.setDrawColor(...verdictColor);
    doc.setLineWidth(0.6);
    doc.roundedRect(14, y, pageW - 28, 30, 3, 3, "S");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...verdictColor);
    doc.text(result.label, 20, y + 11);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...dark);
    doc.text(result.message, 20, y + 20);

    const diff = `${result.percentageDiff >= 0 ? "+" : ""}${result.percentageDiff.toFixed(1)}%`;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...verdictColor);
    doc.text(`Difference: ${diff}`, 20, y + 27);

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 12;
    doc.setDrawColor(232, 234, 237);
    doc.line(14, footerY - 4, pageW - 14, footerY - 4);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...gray);
    doc.text("Free trade value calculator for gamers and collectors.", 14, footerY);
    doc.text("tradevaluecalculator.com", pageW - 14, footerY, { align: "right" });

    doc.save("trade-report.pdf");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="rounded-2xl border-2 p-5"
      style={{ backgroundColor: style.bg, borderColor: `${style.border}50` }}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${style.border}20` }}
        >
          <Icon className="h-5 w-5" style={{ color: style.color }} aria-hidden />
        </div>
        <div className="flex-1">
          <p className="text-[15px] font-semibold" style={{ color: style.color }}>
            {result.label}
          </p>
          <p className="mt-1 text-[14px] text-google-dark">{result.message}</p>
          <p className="mt-1.5 text-[13px] text-google-gray">
            Difference:{" "}
            <span className="font-semibold" style={{ color: style.color }}>
              {result.percentageDiff >= 0 ? "+" : ""}
              {result.percentageDiff.toFixed(1)}%
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2 border-t pt-4" style={{ borderColor: `${style.border}30` }}>
        <button
          type="button"
          onClick={shareOnWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border py-2.5 text-[13px] font-medium transition hover:opacity-90"
          style={{ borderColor: `${style.border}40`, backgroundColor: `${style.border}12`, color: style.color }}
        >
          <Share2 className="h-4 w-4" aria-hidden />
          Share on WhatsApp
        </button>
        <button
          type="button"
          onClick={downloadPDF}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border py-2.5 text-[13px] font-medium transition hover:opacity-90"
          style={{ borderColor: `${style.border}40`, backgroundColor: `${style.border}12`, color: style.color }}
        >
          <Download className="h-4 w-4" aria-hidden />
          Download PDF
        </button>
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

  useEffect(() => {
    if (!yourOffer.trim() || !theirOffer.trim()) {
      setResult(null);
      setError(null);
      return;
    }

    const your = parseTradeValue(yourOffer);
    const their = parseTradeValue(theirOffer);

    if (your === null || their === null) {
      setError("Please enter valid positive numbers for both offers.");
      setResult(null);
      return;
    }

    setError(null);
    setResult(
      calculateTrade({
        yourOffer: your,
        theirOffer: their,
        yourItemName: yourItemName || undefined,
        theirItemName: theirItemName || undefined,
      })
    );
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
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trade Calculator"
          title="Check your trade fairness"
          description="Enter item values from any marketplace or price guide. Get instant fair trade analysis."
          titleId="calculator-heading"
        />

        <ScrollReveal className="mb-6">
          <p className="mb-3 text-center text-[13px] font-medium text-google-gray">
            Quick presets
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tradePresets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className="rounded-full border border-google-gray-border bg-white px-4 py-1.5 text-[13px] font-medium text-google-gray shadow-sm transition hover:border-google-blue hover:bg-google-blue-light hover:text-google-blue"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="rounded-3xl border border-google-gray-border bg-white p-6 shadow-card sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2.5">
                <label
                  htmlFor="your-offer"
                  className="flex items-center gap-2 text-[13px] font-semibold text-google-dark"
                >
                  <span className="flex h-5 w-8 items-center justify-center rounded bg-[#FCE8E6] text-[11px] font-semibold text-google-red">
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
                  className="w-full rounded-xl border border-google-gray-border bg-white px-4 py-3 text-[15px] text-google-dark placeholder:text-google-gray/50 transition focus:border-google-blue focus:outline-none focus:ring-2 focus:ring-google-blue/20"
                  aria-describedby="your-offer-hint"
                />
                <input
                  id="your-item"
                  type="text"
                  placeholder="Item name (optional)"
                  value={yourItemName}
                  onChange={(e) => setYourItemName(e.target.value)}
                  className="w-full rounded-xl border border-google-gray-border bg-google-gray-light px-4 py-2.5 text-[14px] text-google-dark placeholder:text-google-gray/50 focus:border-google-blue focus:outline-none"
                />
                <p id="your-offer-hint" className="text-[12px] text-google-gray">
                  Total value you are giving
                </p>
              </div>

              <div className="space-y-2.5">
                <label
                  htmlFor="their-offer"
                  className="flex items-center gap-2 text-[13px] font-semibold text-google-dark"
                >
                  <span className="flex h-5 w-8 items-center justify-center rounded bg-[#E6F4EA] text-[11px] font-semibold text-google-green">
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
                  className="w-full rounded-xl border border-google-gray-border bg-white px-4 py-3 text-[15px] text-google-dark placeholder:text-google-gray/50 transition focus:border-google-blue focus:outline-none focus:ring-2 focus:ring-google-blue/20"
                  aria-describedby="their-offer-hint"
                />
                <input
                  id="their-item"
                  type="text"
                  placeholder="Item name (optional)"
                  value={theirItemName}
                  onChange={(e) => setTheirItemName(e.target.value)}
                  className="w-full rounded-xl border border-google-gray-border bg-google-gray-light px-4 py-2.5 text-[14px] text-google-dark placeholder:text-google-gray/50 focus:border-google-blue focus:outline-none"
                />
                <p id="their-offer-hint" className="text-[12px] text-google-gray">
                  Total value you are receiving
                </p>
              </div>
            </div>

            {yourOffer && theirOffer && (
              <p className="mt-5 text-center text-[13px] text-google-gray">
                Comparing{" "}
                <span className="font-semibold text-google-dark">
                  ${formatNumber(Number(yourOffer.replace(/,/g, "")) || 0)}
                </span>{" "}
                vs{" "}
                <span className="font-semibold text-google-dark">
                  ${formatNumber(Number(theirOffer.replace(/,/g, "")) || 0)}
                </span>
              </p>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-5 flex items-center gap-2 rounded-xl border border-google-red/30 bg-[#FCE8E6] px-4 py-3 text-[14px] text-google-red"
                role="alert"
              >
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
                {error}
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {result && (
                <div className="mt-5">
                  <ResultCard
                    result={result}
                    yourOffer={yourOffer}
                    theirOffer={theirOffer}
                    yourItemName={yourItemName}
                    theirItemName={theirItemName}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
