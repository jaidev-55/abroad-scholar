"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { NAV, SITE } from "@/lib/Constants";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center"
      aria-label={`${SITE.name} — home`}
    >
      <Image
        src="/images/logo.webp"
        alt="Abroad Scholars — International Education Experts"
        width={240}
        height={68}
        priority
        className="h-11 w-auto brightness-0 invert sm:h-14"
      />
    </Link>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-lg transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_-12px_rgba(6,22,58,0.6)]" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative rounded-lg px-3.5 py-2 text-sm font-medium text-cloud/80 transition-colors hover:text-cloud"
                >
                  {item.label}
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-cloud/80 transition-colors hover:text-gold-400"
            >
              <FaPhoneAlt className="text-xs" />
              {SITE.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-5 py-2.5 text-sm font-semibold text-ink shadow-lg shadow-gold-500/25 transition-transform duration-200 hover:scale-[1.03]"
            >
              Get Free Help
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-cloud lg:hidden"
          >
            <FaBars />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-100 bg-navy-deep/80 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 z-110 flex h-full w-[78%] max-w-sm flex-col gap-1 overflow-y-auto border-l border-white/10 bg-navy p-6 shadow-2xl lg:hidden"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="mb-6 grid h-10 w-10 place-items-center self-end rounded-lg border border-white/10 text-cloud"
              >
                <FaTimes />
              </button>
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-cloud/90 transition-colors hover:bg-white/5 hover:text-gold-400"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-5 py-3 text-center font-semibold text-ink"
              >
                Get Free Help
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
