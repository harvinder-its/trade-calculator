"use client";

import { cn } from "@/lib/utils";
import { Megaphone } from "lucide-react";

interface AdPlaceholderProps {
  slot: "banner" | "sidebar" | "in-content";
  label?: string;
  className?: string;
}

const slotStyles = {
  banner: "min-h-[90px] w-full max-w-[728px] mx-auto",
  sidebar: "min-h-[250px] w-full max-w-[300px]",
  "in-content": "min-h-[120px] w-full",
};

/**
 * AdSense-ready placeholder. Replace inner content with AdSense script
 * after approval. Recommended: place banner below hero, in-content between sections.
 */
export function AdPlaceholder({
  slot,
  label = "Advertisement",
  className,
}: AdPlaceholderProps) {
  return (
    <aside
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 dark:bg-white/[0.03] backdrop-blur-sm",
        slotStyles[slot],
        className
      )}
      aria-label={label}
      data-ad-slot={slot}
    >
      <Megaphone className="mb-2 h-5 w-5 text-muted-foreground/50" aria-hidden />
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
        {label}
      </span>
      <span className="mt-1 text-[10px] text-muted-foreground/40">
        AdSense placement — {slot}
      </span>
    </aside>
  );
}
