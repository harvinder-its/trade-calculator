"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-google-blue text-white shadow-button-blue hover:bg-[#1765CC]",
  secondary:
    "bg-white text-google-dark border border-google-gray-border shadow-sm hover:bg-google-gray-light hover:border-google-gray",
  ghost:
    "text-google-dark hover:bg-google-gray-light",
  outline:
    "border border-google-blue text-google-blue hover:bg-google-blue-light",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px] rounded-full",
  md: "px-6 py-2.5 text-[14px] rounded-full",
  lg: "px-7 py-3.5 text-[15px] rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
