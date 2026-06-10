"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    word: "Enter",
    subtitle: "Your trade values",
    caption: "Type in what you're giving and what you're getting — item names are optional.",
    infoTitle: "Start in seconds",
    infoBody:
      "No account, no setup. Just enter the value of your offer and theirs. Works with any currency, any game, any marketplace.",
    mockup: <EnterMockup />,
  },
  {
    word: "Compare",
    subtitle: "Both sides of the deal",
    caption: "Instantly see the percentage difference between your offer and theirs.",
    infoTitle: "Percentage-based clarity",
    infoBody:
      "Our calculator computes the exact gain or loss percentage so you always know whether you're getting a fair deal before you commit.",
    mockup: <CompareMockup />,
  },
  {
    word: "Decide",
    subtitle: "With full confidence",
    caption: "Get a clear fair / win / lose verdict with color-coded results you can share or save.",
    infoTitle: "Trade with confidence",
    infoBody:
      "Color-coded verdicts make the result unmissable. Share on WhatsApp or download a PDF report in one click.",
    mockup: <DecideMockup />,
  },
];

/* ─── Mockup components ─────────────────────────────────── */

function MockupShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1a1f2e] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#EA4335]/70" />
        <span className="h-3 w-3 rounded-full bg-[#FBBC04]/70" />
        <span className="h-3 w-3 rounded-full bg-[#34A853]/70" />
        <span className="ml-3 text-[11px] text-white/30">trade-value-calculator.app</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Field({ label, value, tag, tagColor }: { label: string; value: string; tag: string; tagColor: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-white/40">{label}</span>
        <span className="rounded px-2 py-0.5 text-[10px] font-semibold" style={{ background: `${tagColor}22`, color: tagColor }}>{tag}</span>
      </div>
      <p className="mt-1 text-[22px] font-bold text-white">{value}</p>
    </div>
  );
}

function EnterMockup() {
  return (
    <MockupShell>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/30">Trade Calculator</p>
      <div className="space-y-3">
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-[11px] text-white/40">Your offer</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[22px] font-bold text-white">$5,000</span>
            <span className="h-5 w-0.5 animate-pulse rounded-full bg-[#1A73E8]" />
          </div>
          <p className="mt-1 text-[11px] text-white/30">Giving: Rocket League Credits</p>
        </div>
        <div className="rounded-xl border border-[#1A73E8]/30 bg-[#1A73E8]/5 px-4 py-3">
          <p className="text-[11px] text-[#1A73E8]/70">Their offer</p>
          <p className="mt-1 text-[22px] font-bold text-white/30">e.g. 5500</p>
          <p className="mt-1 text-[11px] text-white/20">Receiving: Item name (optional)</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        {["Roblox", "CS2", "Pokémon", "Sports Cards"].map((g) => (
          <span key={g} className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/40">{g}</span>
        ))}
      </div>
    </MockupShell>
  );
}

function CompareMockup() {
  return (
    <MockupShell>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/30">Comparing</p>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Your offer" value="$5,000" tag="OUT" tagColor="#EA4335" />
        <Field label="Their offer" value="$5,500" tag="IN" tagColor="#34A853" />
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <p className="text-[11px] text-white/40">Difference</p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "55%" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="h-2 rounded-full bg-gradient-to-r from-[#34A853] to-[#1A73E8]"
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-white/40">
          <span>$0</span>
          <span className="font-semibold text-[#34A853]">+10% gain</span>
          <span>$10k</span>
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] text-white/30">Comparing $5,000 vs $5,500</p>
    </MockupShell>
  );
}

function DecideMockup() {
  return (
    <MockupShell>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/30">Result</p>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-[#34A853]/30 bg-[#34A853]/10 px-5 py-4"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#34A853]/20 text-xl">✓</span>
          <div>
            <p className="text-[15px] font-bold text-[#34A853]">Fair Trade — You Win</p>
            <p className="text-[12px] text-white/50">Their offer is worth more than yours.</p>
          </div>
        </div>
        <p className="mt-3 text-[12px] text-white/40">Difference: <span className="font-semibold text-[#34A853]">+10.0%</span></p>
      </motion.div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-[12px] font-medium text-white/60">
          <span>📤</span> Share on WhatsApp
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-[12px] font-medium text-white/60">
          <span>📄</span> Download PDF
        </div>
      </div>
    </MockupShell>
  );
}

/* ─── Main Section ──────────────────────────────────────── */

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const next = (activeRef.current + 1) % steps.length;
      setDir(1);
      setActive(next);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (idx: number) => {
    setPaused(true);
    setDir(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => active > 0 && go(active - 1);
  const next = () => go((active + 1) % steps.length);

  const step = steps[active];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-[#0d1117] py-0"
      aria-labelledby="how-it-works-heading"
    >
      {/* Section label */}
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-10">
        <p className="text-center text-[13px] font-medium tracking-widest text-white/30 uppercase">
          Capabilities
        </p>
        {/* Auto-advance progress bar */}
        <div className="mx-auto mt-4 h-0.5 max-w-xs overflow-hidden rounded-full bg-white/10">
          {!paused && (
            <motion.div
              key={active}
              className="h-full rounded-full bg-white/40"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          )}
        </div>
      </div>

      {/* Main content */}
      <div
        className="relative mx-auto max-w-7xl px-6 pt-6 pb-0 lg:px-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:items-start">

          {/* Left: large word + info card */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.h2
                key={step.word}
                id="how-it-works-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="text-[5rem] font-bold leading-none tracking-tight text-white sm:text-[7rem] lg:text-[8rem]"
              >
                {step.word}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={step.infoTitle}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <p className="text-[13px] font-semibold text-white">{step.infoTitle}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">{step.infoBody}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: mockup */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {step.mockup}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Caption + bottom nav */}
        <div className="mt-8 border-t border-white/10 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <AnimatePresence mode="wait">
            <motion.p
              key={step.caption}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[13px] text-white/40 max-w-md"
            >
              {step.caption}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-3">
            {/* Tab pills */}
            <div className="flex gap-1.5 rounded-full border border-white/10 bg-white/5 p-1">
              {steps.map((s, i) => (
                <button
                  key={s.word}
                  type="button"
                  onClick={() => go(i)}
                  className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-all ${
                    i === active
                      ? "bg-white text-[#0d1117]"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {s.word}
                </button>
              ))}
            </div>

            {/* Arrow nav */}
            <div className="flex gap-1">
              <button
                type="button"
                onClick={prev}
                disabled={active === 0}
                aria-label="Previous step"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 disabled:opacity-20"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={active === steps.length - 1}
                aria-label="Next step"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 disabled:opacity-20"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
