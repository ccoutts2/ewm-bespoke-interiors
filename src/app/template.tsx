"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  {
    return (
      <>
        <AnimatePresence mode="wait">
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[2] h-screen w-full origin-bottom bg-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
          />
          {children}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[2] h-screen w-full origin-top bg-black"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
          />
        </AnimatePresence>
      </>
    );
  }
}
