"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          aria-hidden={!loading}
          role="status"
          aria-label="Loading"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-instagram text-white shadow-glow"
          >
            <Calculator className="h-8 w-8" />
          </motion.div>
          <p className="mt-4 text-sm text-muted-foreground">Loading calculator...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
