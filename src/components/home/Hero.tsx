"use client";

import { SITE } from "@/lib/Constants";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaWhatsapp,
  FaCheckCircle,
  FaAward,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const OFFERS = [
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    uni: "Top UK University",
    programme: "MSc Computer Science",
    intake: "Fall 2026",
    scholarship: "£12,000 / year",
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    uni: "Top Canadian University",
    programme: "MEng Data Science",
    intake: "Winter 2026",
    scholarship: "CA$15,000 / year",
  },
  {
    flag: "🇺🇸",
    country: "United States",
    uni: "Top US University",
    programme: "MS Information Systems",
    intake: "Fall 2026",
    scholarship: "$18,000 / year",
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    uni: "Top Australian University",
    programme: "Master of IT",
    intake: "Feb 2026",
    scholarship: "A$20,000 / year",
  },
];

/** Signature element: an auto-sliding 3D "Offer of Admission" showcase */
function AdmitCard() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % OFFERS.length), 4000);
    return () => clearInterval(id);
  }, [reduce, paused]);

  // mouse parallax tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-11, 11]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [0, 1], [9, -9]), {
    stiffness: 150,
    damping: 18,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onEnter() {
    setPaused(true);
  }
  function onLeave() {
    setPaused(false);
    mx.set(0.5);
    my.set(0.5);
  }

  const offer = OFFERS[i];

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ perspective: "1200px" }}
      className="relative mx-auto w-full max-w-md anim-floaty-slow"
    >
      {/* ambient glows */}
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gold-300/35 blur-3xl anim-glow" />
      <div className="absolute -right-12 top-8 -z-10 h-60 w-60 rounded-full bg-blue-300/40 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -14 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        style={{
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* slide stage */}
        <div className="relative h-[392px] w-full sm:h-[400px]">
          {/* ghost cards behind -> "multiple offers" depth */}
          <div
            style={{
              transform: "translateZ(-70px) translate(24px, 20px) rotate(5deg)",
            }}
            className="absolute inset-0 rounded-[1.9rem] border border-line bg-white/60 shadow-soft"
          />
          <div
            style={{
              transform:
                "translateZ(-35px) translate(12px, 10px) rotate(2.5deg)",
            }}
            className="absolute inset-0 rounded-[1.9rem] border border-line bg-white/80 shadow-soft"
          />

          {/* the sliding offer card */}
          <AnimatePresence>
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, x: 44, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={
                reduce ? { opacity: 0 } : { opacity: 0, x: -44, scale: 0.96 }
              }
              transition={{ duration: reduce ? 0.2 : 0.6, ease: EASE }}
              className="absolute inset-0 overflow-hidden rounded-[1.9rem] border border-line bg-gradient-to-br from-white via-white to-blue-50/50 p-5 shadow-soft sm:p-6"
            >
              {/* decorative watermark ring */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full border-[18px] border-blue-100/50" />
              {/* top accent bar */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-gold-400" />

              <div className="relative z-10 flex h-full flex-col">
                {/* ADMITTED seal */}
                <div className="absolute right-0 top-0 flex items-center gap-1 rotate-[-8deg] rounded-full border-2 border-emerald-500/70 bg-emerald-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-600">
                  <FaCheckCircle className="text-[11px]" />
                  Admitted
                </div>

                {/* header */}
                <div className="flex items-center gap-3 pr-24">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tint text-2xl shadow-card ring-1 ring-line">
                    {offer.flag}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                      Offer of Admission · {offer.country}
                    </p>
                    <p className="flex items-center gap-1.5 font-display text-lg font-bold leading-tight text-ink">
                      {offer.uni}
                      <FaCheckCircle className="shrink-0 text-sm text-blue-500" />
                    </p>
                  </div>
                </div>

                {/* programme / intake */}
                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-dashed border-line pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate">
                      Programme
                    </p>
                    <p className="font-semibold text-ink">{offer.programme}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate">
                      Intake
                    </p>
                    <p className="font-semibold text-ink">{offer.intake}</p>
                  </div>
                </div>

                {/* scholarship highlight */}
                <div className="mt-4 flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-gold-300/40 to-gold-400/20 p-3.5 ring-1 ring-gold-400/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-ink shadow-card">
                    <FaAward className="text-lg" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate">
                      Scholarship secured
                    </p>
                    <p className="font-display text-xl font-extrabold text-ink">
                      {offer.scholarship}
                    </p>
                  </div>
                </div>

                {/* trust footer (built in — no floating chips) */}
                <div className="mt-auto flex items-center gap-3 rounded-2xl bg-tint px-4 py-3">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                    <FaShieldAlt className="text-emerald-500" />
                    Visa ready
                  </span>
                  <span className="h-4 w-px bg-line" />
                  <span className="flex items-center gap-1 text-sm font-semibold text-ink">
                    <FaStar className="text-gold-400" />
                    4.9
                  </span>
                  <span className="ml-auto text-xs font-medium text-slate">
                    8,000+ admits
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* slide indicators */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {OFFERS.map((_, d) => (
            <button
              key={d}
              onClick={() => setI(d)}
              aria-label={`Show offer ${d + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                d === i
                  ? "w-7 bg-blue-600"
                  : "w-2 bg-blue-200 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-32">
      {/* light background with soft blue + warm glows */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-tint to-paper" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="absolute -top-24 left-1/4 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="absolute -top-10 right-0 -z-10 h-[300px] w-[380px] rounded-full bg-gold-300/30 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Study Abroad · 2026 Intake
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Apply for <span className="text-accent">2026 Admissions</span> to
            Top Global Universities
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg"
          >
            From shortlisting the right course to visa approval and landing
            support, Abroad Scholars guides you through every step — trusted by{" "}
            <span className="font-semibold text-ink">8,000+ students</span>{" "}
            since {SITE.since}.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-7 py-3.5 font-semibold text-ink shadow-soft transition-transform duration-200 hover:scale-[1.04]"
            >
              Start Your Journey
              <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-line bg-paper px-7 py-3.5 font-semibold text-ink shadow-card transition-colors duration-200 hover:border-blue-400 hover:text-blue-700"
            >
              <FaWhatsapp className="text-lg text-[#25D366]" />
              Chat with a Counsellor
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate"
          >
            {[
              "95% visa success",
              "11 study destinations",
              "Free first counselling",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <AdmitCard />
      </div>
    </section>
  );
}
