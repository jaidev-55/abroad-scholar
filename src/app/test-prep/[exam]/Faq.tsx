"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-line bg-paper shadow-card">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={i > 0 ? "border-t border-line" : ""}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-tint sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-display text-[15px] font-semibold text-ink sm:text-base">
                {it.q}
              </span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown className="text-xs" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate sm:px-6">
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
