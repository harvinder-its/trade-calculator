"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AUTO_INTERVAL = 5000;

const stories = [
  {
    name: "Alex R.",
    handle: "Rocket League",
    trade: "TW Octane → Credits + Extra",
    result: "+18% gain",
    verdict: "win",
    quote: "Used TVC to check if my offer was fair before confirming. Saved me from a bad deal.",
    visual: {
      bg: "linear-gradient(135deg, #0f1b3d 0%, #1a3a6b 50%, #0d2952 100%)",
      accent: "#1A73E8",
      shapes: [
        { type: "circle", size: 220, x: "60%", y: "-10%", color: "rgba(26,115,232,0.18)", blur: 60 },
        { type: "circle", size: 120, x: "80%", y: "50%", color: "rgba(66,165,245,0.12)", blur: 40 },
        { type: "circle", size: 80, x: "20%", y: "70%", color: "rgba(26,115,232,0.1)", blur: 30 },
      ],
      icon: "rocket",
      badgeBg: "#1A73E8",
      label: "ROCKET LEAGUE",
    },
  },
  {
    name: "Priya M.",
    handle: "Pokémon Cards",
    trade: "Charizard VMAX → 3 Rares",
    result: "+5% gain",
    verdict: "fair",
    quote: "Showed my friend the calculator result so we both felt confident about the trade.",
    visual: {
      bg: "linear-gradient(135deg, #2d1f00 0%, #5c3d00 50%, #3d2800 100%)",
      accent: "#FBBC04",
      shapes: [
        { type: "circle", size: 200, x: "65%", y: "-15%", color: "rgba(251,188,4,0.2)", blur: 60 },
        { type: "circle", size: 100, x: "15%", y: "60%", color: "rgba(255,213,79,0.1)", blur: 35 },
        { type: "circle", size: 150, x: "75%", y: "65%", color: "rgba(251,188,4,0.08)", blur: 50 },
      ],
      icon: "pokeball",
      badgeBg: "#F29900",
      label: "POKÉMON",
    },
  },
  {
    name: "Dope Skins",
    handle: "CS2 Trader",
    trade: "Fire Serpent → Knife + Cash",
    result: "+22% gain",
    verdict: "win",
    quote: "I run a trading community — TVC is the first thing I send new members.",
    visual: {
      bg: "linear-gradient(135deg, #1f0a0a 0%, #4a1010 50%, #2d0808 100%)",
      accent: "#EA4335",
      shapes: [
        { type: "circle", size: 240, x: "55%", y: "-20%", color: "rgba(234,67,53,0.18)", blur: 70 },
        { type: "circle", size: 90, x: "25%", y: "55%", color: "rgba(234,67,53,0.1)", blur: 30 },
        { type: "circle", size: 130, x: "80%", y: "70%", color: "rgba(255,100,80,0.08)", blur: 45 },
      ],
      icon: "crosshair",
      badgeBg: "#EA4335",
      label: "CS2",
    },
  },
  {
    name: "Jordan K.",
    handle: "Sports Cards",
    trade: "PSA 10 Rookie → Two PSA 9s",
    result: "Fair trade",
    verdict: "fair",
    quote: "Perfect for beginners who don't know market values yet.",
    visual: {
      bg: "linear-gradient(135deg, #052110 0%, #0a3d1f 50%, #052e16 100%)",
      accent: "#34A853",
      shapes: [
        { type: "circle", size: 200, x: "60%", y: "-10%", color: "rgba(52,168,83,0.18)", blur: 60 },
        { type: "circle", size: 110, x: "20%", y: "65%", color: "rgba(52,168,83,0.1)", blur: 35 },
        { type: "circle", size: 160, x: "85%", y: "60%", color: "rgba(52,168,83,0.08)", blur: 50 },
      ],
      icon: "trophy",
      badgeBg: "#34A853",
      label: "SPORTS CARDS",
    },
  },
  {
    name: "MintCondition",
    handle: "Roblox",
    trade: "Limited Hat → 12,000 Robux",
    result: "+9% gain",
    verdict: "win",
    quote: "Checked three trades in one session. Avoided two bad ones instantly.",
    visual: {
      bg: "linear-gradient(135deg, #1a0533 0%, #3d0d6e 50%, #270947 100%)",
      accent: "#9334E6",
      shapes: [
        { type: "circle", size: 220, x: "58%", y: "-15%", color: "rgba(147,52,230,0.2)", blur: 65 },
        { type: "circle", size: 100, x: "18%", y: "58%", color: "rgba(147,52,230,0.12)", blur: 35 },
        { type: "circle", size: 140, x: "82%", y: "68%", color: "rgba(180,90,255,0.08)", blur: 50 },
      ],
      icon: "cube",
      badgeBg: "#9334E6",
      label: "ROBLOX",
    },
  },
  {
    name: "Sara T.",
    handle: "Trading Cards",
    trade: "Full Playset → Foil Singles",
    result: "Fair trade",
    verdict: "fair",
    quote: "My trade partner and I both ran the numbers — no arguments, just data.",
    visual: {
      bg: "linear-gradient(135deg, #001433 0%, #002966 50%, #001f4d 100%)",
      accent: "#4285F4",
      shapes: [
        { type: "circle", size: 230, x: "62%", y: "-12%", color: "rgba(66,133,244,0.18)", blur: 65 },
        { type: "circle", size: 95, x: "22%", y: "62%", color: "rgba(66,133,244,0.1)", blur: 30 },
        { type: "circle", size: 155, x: "78%", y: "72%", color: "rgba(66,133,244,0.08)", blur: 50 },
      ],
      icon: "cards",
      badgeBg: "#4285F4",
      label: "TRADING CARDS",
    },
  },
];

const verdictConfig = {
  win:  { text: "#34A853", bg: "rgba(52,168,83,0.15)",  border: "rgba(52,168,83,0.35)",  label: "You Win" },
  fair: { text: "#F29900", bg: "rgba(242,153,0,0.15)", border: "rgba(242,153,0,0.35)",  label: "Fair Trade" },
  lose: { text: "#EA4335", bg: "rgba(234,67,53,0.15)", border: "rgba(234,67,53,0.35)",  label: "You Lose" },
};

const icons: Record<string, React.ReactNode> = {
  rocket: (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <path d="M24 4C24 4 14 14 14 26c0 5.5 4.5 10 10 10s10-4.5 10-10C34 14 24 4 24 4Z" fill="white" fillOpacity={0.9}/>
      <circle cx="24" cy="26" r="4" fill="white" fillOpacity={0.3}/>
      <path d="M18 34l-4 8 6-2 4 4 4-4 6 2-4-8" fill="white" fillOpacity={0.5}/>
      <path d="M14 22l-6 4 4 2M34 22l6 4-4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity={0.6}/>
    </svg>
  ),
  pokeball: (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="3" strokeOpacity={0.8}/>
      <path d="M4 24h40" stroke="white" strokeWidth="3" strokeOpacity={0.8}/>
      <circle cx="24" cy="24" r="6" fill="white" fillOpacity={0.2} stroke="white" strokeWidth="3" strokeOpacity={0.8}/>
      <circle cx="24" cy="24" r="3" fill="white" fillOpacity={0.9}/>
    </svg>
  ),
  crosshair: (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="2.5" strokeOpacity={0.8}/>
      <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="2.5" strokeOpacity={0.8}/>
      <circle cx="24" cy="24" r="2.5" fill="white" fillOpacity={0.9}/>
      <line x1="24" y1="4" x2="24" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.8}/>
      <line x1="24" y1="34" x2="24" y2="44" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.8}/>
      <line x1="4" y1="24" x2="14" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.8}/>
      <line x1="34" y1="24" x2="44" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.8}/>
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <path d="M14 6h20v18a10 10 0 01-20 0V6Z" fill="white" fillOpacity={0.15} stroke="white" strokeWidth="2.5" strokeLinejoin="round" strokeOpacity={0.8}/>
      <path d="M14 12H8a4 4 0 004 4h2M34 12h6a4 4 0 01-4 4h-2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.7}/>
      <path d="M24 34v6M18 40h12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.8}/>
      <path d="M20 20l2.5 5 5.5.8-4 3.9.9 5.3L24 32.5l-4.9 2.5.9-5.3-4-3.9 5.5-.8L20 20Z" fill="white" fillOpacity={0.85}/>
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <path d="M24 6L42 16v16L24 42 6 32V16L24 6Z" fill="white" fillOpacity={0.1} stroke="white" strokeWidth="2.5" strokeLinejoin="round" strokeOpacity={0.85}/>
      <path d="M24 6v36M6 16l18 10 18-10" stroke="white" strokeWidth="2.5" strokeLinejoin="round" strokeOpacity={0.6}/>
    </svg>
  ),
  cards: (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <rect x="6" y="12" width="24" height="32" rx="3" fill="white" fillOpacity={0.1} stroke="white" strokeWidth="2.5" strokeOpacity={0.6}/>
      <rect x="14" y="6" width="24" height="32" rx="3" fill="white" fillOpacity={0.15} stroke="white" strokeWidth="2.5" strokeOpacity={0.85}/>
      <path d="M26 16l2 4 4 .6-3 2.9.7 4.1-3.7-2-3.7 2 .7-4.1-3-2.9 4-.6L26 16Z" fill="white" fillOpacity={0.9}/>
    </svg>
  ),
};

/* Visual art panel for each story */
function StoryVisual({ story }: { story: typeof stories[0] }) {
  const v = story.visual;
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ background: v.bg, minHeight: 280 }}
    >
      {/* Blurred glow shapes */}
      {v.shapes.map((s, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            transform: "translate(-50%, -50%)",
            background: s.color,
            filter: `blur(${s.blur}px)`,
          }}
          aria-hidden
        />
      ))}

      {/* Grid overlay for texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      {/* Top-left: game label */}
      <div className="absolute left-5 top-5">
        <span
          className="rounded-full px-3 py-1 text-[10px] font-bold tracking-widest"
          style={{ background: `${v.badgeBg}28`, color: v.accent, border: `1px solid ${v.accent}30` }}
        >
          {v.label}
        </span>
      </div>

      {/* Center: large emoji badge */}
      <div className="flex h-full min-h-[280px] items-center justify-center">
        <motion.div
          key={story.name}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-3"
        >
          <div
            className="flex h-24 w-24 items-center justify-center rounded-3xl shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${v.badgeBg}40, ${v.badgeBg}18)`,
              border: `1px solid ${v.badgeBg}50`,
              backdropFilter: "blur(12px)",
            }}
          >
            {icons[v.icon]}
          </div>
          <p className="text-[13px] font-semibold text-white/60">{story.handle}</p>
        </motion.div>
      </div>

      {/* Bottom: trade summary bar */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-4"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
        }}
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30">Trade</p>
            <p className="mt-0.5 text-[14px] font-medium text-white/80">{story.trade}</p>
          </div>
          <div
            className="rounded-full px-3 py-1.5 text-[12px] font-bold"
            style={{
              background: verdictConfig[story.verdict as keyof typeof verdictConfig].bg,
              color: verdictConfig[story.verdict as keyof typeof verdictConfig].text,
              border: `1px solid ${verdictConfig[story.verdict as keyof typeof verdictConfig].border}`,
            }}
          >
            {story.result}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TraderStories() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0); // 0 → 1
  const smoothProgress = useSpring(progress, { stiffness: 50, damping: 18 });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const story = stories[active];
  const vc = verdictConfig[story.verdict as keyof typeof verdictConfig];

  const go = (d: 1 | -1, manual = false) => {
    setDir(d);
    if (manual) setPaused(false);
    setActive((p) => (p + d + stories.length) % stories.length);
    progress.set(0);
  };

  const goTo = (i: number) => {
    setDir(i > active ? 1 : -1);
    setActive(i);
    progress.set(0);
    setPaused(false);
  };

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    progress.set(0);
    animate(progress, 1, { duration: AUTO_INTERVAL / 1000, ease: "linear" });
    timerRef.current = setTimeout(() => go(1), AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", background: "#05080f" }}
      aria-labelledby="trader-stories-heading"
      onMouseEnter={() => { setPaused(true); animate(progress, progress.get(), { duration: 0 }); }}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background gradient orbs — matching Google Flow Sessions */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 100%, rgba(17,60,130,0.65) 0%, rgba(10,30,80,0.3) 40%, transparent 70%), " +
            "radial-gradient(ellipse 60% 50% at 100% 80%, rgba(40,15,60,0.4) 0%, transparent 60%), " +
            "radial-gradient(ellipse 40% 30% at 50% 50%, rgba(10,20,50,0.2) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 py-20 lg:px-10">
        <div className="grid flex-1 gap-12 lg:grid-cols-[420px_1fr] lg:gap-16 lg:items-start">

          {/* ── Left column ─────────────────────────────── */}
          <div className="flex flex-col">
            <h2
              id="trader-stories-heading"
              className="text-[4.5rem] font-bold leading-[1] tracking-tight text-white sm:text-[6rem] lg:text-[7rem]"
            >
              Trader<br />Stories
            </h2>

            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/40">
              Real traders share how the Trade Value Calculator helped them make smarter deals.
            </p>

            {/* Progress bar */}
            <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full origin-left rounded-full"
                style={{ scaleX: smoothProgress, background: story.visual.accent }}
              />
            </div>

            {/* Name list */}
            <ul className="mt-4 space-y-0.5">
              {stories.map((s, i) => (
                <li key={s.name}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200"
                    style={i === active ? { background: "rgba(255,255,255,0.05)" } : {}}
                  >
                    {/* Progress fill for active row */}
                    <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
                      <span
                        className="absolute inset-0 rounded-full transition-all duration-300"
                        style={{
                          background: i === active ? story.visual.accent : "rgba(255,255,255,0.15)",
                          transform: i === active ? "scale(1.5)" : "scale(1)",
                        }}
                      />
                    </span>
                    <span
                      className="text-[1rem] font-semibold transition-colors duration-300"
                      style={{ color: i === active ? "#fff" : "rgba(255,255,255,0.28)" }}
                    >
                      {s.name}
                    </span>
                    {i === active && (
                      <motion.span
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto text-[11px]"
                        style={{ color: story.visual.accent }}
                      >
                        {s.handle}
                      </motion.span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto pt-12">
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Try it yourself
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden>
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right column ────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {/* Visual art panel */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active + "-visual"}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, y: d * 40, scale: 0.97 }),
                  center: { opacity: 1, y: 0, scale: 1 },
                  exit: (d: number) => ({ opacity: 0, y: d * -30, scale: 0.97 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <StoryVisual story={story} />
              </motion.div>
            </AnimatePresence>

            {/* Quote + details card */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active + "-card"}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, y: d * 20 }),
                  center: { opacity: 1, y: 0 },
                  exit: (d: number) => ({ opacity: 0, y: d * -12 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${story.visual.badgeBg}25` }}
                    >
                      <span className="scale-[0.55]">{icons[story.visual.icon]}</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white">{story.name}</p>
                      <p className="text-[12px] text-white/35">{story.handle}</p>
                    </div>
                  </div>
                  <div
                    className="shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold"
                    style={{ color: vc.text, background: vc.bg, borderColor: vc.border }}
                  >
                    {story.result}
                  </div>
                </div>

                <p className="mt-4 border-t border-white/8 pt-4 text-[14px] italic leading-relaxed text-white/45">
                  "{story.quote}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Counter + arrows */}
            <div className="flex items-center justify-between pt-1">
              <p className="text-[12px] text-white/20">{active + 1} / {stories.length}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1, true)}
                  aria-label="Previous story"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => go(1, true)}
                  aria-label="Next story"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
