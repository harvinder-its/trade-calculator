"use client";

import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const platforms = ["Roblox", "Rocket League", "CS2", "Pokémon", "Sports Cards", "Any Item"];

const stats = [
  { value: "50K+", label: "Trades checked" },
  { value: "100%", label: "Free forever" },
  { value: "5 sec", label: "Avg. result time" },
];

/* Dot-grid SVG background */
function DotGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
      aria-hidden
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#1A73E8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

/* Right-side: realistic calculator mockup */
function CalculatorMockup() {
  return (
    <div className="relative">
      {/* Glow behind card */}
      <div
        className="absolute -inset-6 -z-10 rounded-[3rem] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(26,115,232,0.35), rgba(52,168,83,0.15) 60%, transparent)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      {/* Main card */}
      <div className="overflow-hidden rounded-3xl border border-[#E8EAED] bg-white shadow-[0_8px_48px_rgba(60,64,67,0.12)]">
        {/* App top bar */}
        <div className="flex items-center justify-between border-b border-[#F1F3F4] bg-[#FAFAFA] px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="ml-1 text-[12px] font-semibold text-[#202124]">Trade Calculator</span>
          </div>
          <span className="rounded-full bg-[#E6F4EA] px-2.5 py-0.5 text-[11px] font-medium text-[#137333]">
            Live
          </span>
        </div>

        <div className="p-5 space-y-3">
          {/* Your offer */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5F6368]">Your Offer</span>
              <span className="rounded bg-[#FCE8E6] px-1.5 py-0.5 text-[10px] font-bold text-[#C5221F]">OUT</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[#E8EAED] bg-[#F8F9FA] px-4 py-3">
              <span className="text-[22px] font-bold text-[#202124]">$5,000</span>
              <span className="text-[13px] text-[#5F6368]">· Rocket League Credits</span>
            </div>
          </div>

          {/* VS divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E8EAED]" />
            <span className="rounded-full border border-[#E8EAED] bg-white px-3 py-1 text-[11px] font-semibold text-[#5F6368]">VS</span>
            <div className="h-px flex-1 bg-[#E8EAED]" />
          </div>

          {/* Their offer */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5F6368]">Their Offer</span>
              <span className="rounded bg-[#E6F4EA] px-1.5 py-0.5 text-[10px] font-bold text-[#137333]">IN</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[#E8EAED] bg-[#F8F9FA] px-4 py-3">
              <span className="text-[22px] font-bold text-[#202124]">$5,500</span>
              <span className="text-[13px] text-[#5F6368]">· Titanium White Octane</span>
            </div>
          </div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-2xl border-2 border-[#34A853]/30 bg-[#E6F4EA] p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#34A853]/15">
                  <TrendingUp className="h-5 w-5 text-[#137333]" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#137333]">Fair Trade — You Win</p>
                  <p className="text-[12px] text-[#34A853]">Their offer is worth more</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[22px] font-bold text-[#137333]">+10%</p>
                <p className="text-[11px] text-[#34A853]">gain</p>
              </div>
            </div>
          </motion.div>

          {/* Share / PDF row */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="flex items-center justify-center gap-1.5 rounded-xl border border-[#E8EAED] py-2.5 text-[12px] font-medium text-[#5F6368]">
              <span>📱</span> WhatsApp
            </div>
            <div className="flex items-center justify-center gap-1.5 rounded-xl border border-[#E8EAED] py-2.5 text-[12px] font-medium text-[#5F6368]">
              <span>📄</span> Download PDF
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -top-4 flex items-center gap-2 rounded-2xl border border-[#E8EAED] bg-white px-3.5 py-2.5 shadow-[0_4px_16px_rgba(60,64,67,0.12)]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1A73E8] text-[13px] text-white">⚡</span>
        <div>
          <p className="text-[11px] font-semibold text-[#202124]">Instant result</p>
          <p className="text-[10px] text-[#5F6368]">No signup needed</p>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl border border-[#E8EAED] bg-white px-3.5 py-2.5 shadow-[0_4px_16px_rgba(60,64,67,0.12)]"
      >
        <span className="text-[18px]">🎮</span>
        <div>
          <p className="text-[11px] font-semibold text-[#202124]">Multi-game</p>
          <p className="text-[10px] text-[#5F6368]">6+ platforms</p>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <DotGrid />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#EA4335]" aria-hidden />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow chip */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1A73E8]/20 bg-[#E8F0FE] px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#1A73E8] animate-pulse" />
              <span className="text-[13px] font-semibold text-[#1A73E8]">Free Fair Trade Checker</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-[3rem] font-bold leading-[1.05] tracking-tight text-[#202124] sm:text-[3.75rem] lg:text-[4.25rem]"
            >
              Know if your
              <br />
              trade is{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #1A73E8 0%, #34A853 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                actually fair
              </span>
            </h1>

            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[#5F6368]">
              Enter your item values, get an instant percentage comparison.
              No signup, no downloads — just a clear answer in seconds.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("calculator")}
                className="inline-flex items-center gap-2 rounded-full bg-[#1A73E8] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_1px_6px_rgba(26,115,232,0.4)] transition hover:bg-[#1765CC] hover:shadow-[0_2px_12px_rgba(26,115,232,0.45)]"
              >
                Try it free
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("how-it-works")}
                className="inline-flex items-center gap-2 rounded-full border border-[#E8EAED] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#202124] shadow-sm transition hover:bg-[#F8F9FA] hover:border-[#DADCE0]"
              >
                See how it works
              </button>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[1.35rem] font-bold text-[#202124]">{s.value}</p>
                  <p className="text-[12px] text-[#5F6368]">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Platform chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] text-[#5F6368] self-center mr-1">Works with:</span>
              {platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-[#E8EAED] bg-white px-3 py-1 text-[12px] font-medium text-[#5F6368] shadow-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column — mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative px-4 lg:px-0"
          >
            <CalculatorMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
