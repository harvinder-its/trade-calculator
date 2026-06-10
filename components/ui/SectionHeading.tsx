"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  titleId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  titleId,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-widest text-google-blue">
          {eyebrow}
        </span>
      )}
      <h2
        id={titleId}
        className={cn(
          "text-[2rem] font-bold tracking-tight sm:text-[2.5rem]",
          titleClassName ?? "text-google-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[1rem] text-google-gray">{description}</p>
      )}
    </motion.div>
  );
}
