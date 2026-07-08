"use client";

import { SITE } from "@/lib/Constants";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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
    currency: "£",
    amount: 12000,
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    uni: "Top Canadian University",
    programme: "MEng Data Science",
    intake: "Winter 2026",
    currency: "CA$",
    amount: 15000,
  },
  {
    flag: "🇺🇸",
    country: "United States",
    uni: "Top US University",
    programme: "MS Information Systems",
    intake: "Fall 2026",
    currency: "$",
    amount: 18000,
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    uni: "Top Australian University",
    programme: "Master of IT",
    intake: "Feb 2026",
    currency: "A$",
    amount: 20000,
  },
];

type Setter = ((value: number) => void) | null;
const ADVANCE = 4.6; // seconds per offer

/** Signature element: an interactive, GSAP-driven "Offer of Admission" showcase */
function AdmitCard() {
  const root = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const glare = useRef<HTMLDivElement>(null);
  const amount = useRef<HTMLSpanElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  const setRotX = useRef<Setter>(null);
  const setRotY = useRef<Setter>(null);
  const setGlareX = useRef<Setter>(null);
  const setGlareY = useRef<Setter>(null);
  const reduce = useRef(false);

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const offer = OFFERS[i];

  // one-time: reduced-motion check, entrance, idle float, tilt/glare setters
  useGSAP(
    () => {
      reduce.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduce.current) {
        gsap.set(card.current, { autoAlpha: 1 });
        return;
      }

      setRotX.current = gsap.quickTo(card.current, "rotationX", {
        duration: 0.6,
        ease: "power3.out",
      });
      setRotY.current = gsap.quickTo(card.current, "rotationY", {
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.set(glare.current, { xPercent: -50, yPercent: -50 });
      setGlareX.current = gsap.quickTo(glare.current, "x", {
        duration: 0.5,
        ease: "power3.out",
      });
      setGlareY.current = gsap.quickTo(glare.current, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.from(card.current, {
        autoAlpha: 0,
        y: 48,
        rotationY: -16,
        duration: 1,
        ease: "power3.out",
        delay: 0.15,
        onComplete: () => {
          gsap.to(card.current, {
            y: "+=10",
            duration: 3.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        },
      });
    },
    { scope: root },
  );

  // per-offer: reset progress, stagger content in, pop the stamp, count the number
  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      if (progress.current)
        gsap.set(progress.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });

      if (reduce.current) {
        if (amount.current)
          amount.current.textContent =
            offer.currency + offer.amount.toLocaleString();
        return;
      }

      gsap.fromTo(
        q("[data-slide]"),
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
        },
      );
      gsap.fromTo(
        q("[data-stamp]"),
        { scale: 0.4, rotation: -24, autoAlpha: 0 },
        {
          scale: 1,
          rotation: -8,
          autoAlpha: 1,
          duration: 0.6,
          ease: "back.out(2.2)",
          delay: 0.12,
        },
      );

      const obj = { v: 0 };
      gsap.to(obj, {
        v: offer.amount,
        duration: 1,
        ease: "power1.out",
        onUpdate: () => {
          if (amount.current)
            amount.current.textContent =
              offer.currency + Math.round(obj.v).toLocaleString();
        },
      });
    },
    { scope: root, dependencies: [i] },
  );

  // auto-advance progress bar (freezes on hover / reduced motion)
  useGSAP(
    () => {
      if (reduce.current || paused || !progress.current) return;
      const start = Number(gsap.getProperty(progress.current, "scaleX")) || 0;
      const tw = gsap.to(progress.current, {
        scaleX: 1,
        duration: ADVANCE * (1 - start),
        ease: "none",
        onComplete: () => setI((p) => (p + 1) % OFFERS.length),
      });
      return () => {
        tw.kill();
      };
    },
    { scope: root, dependencies: [i, paused] },
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce.current || !card.current) return;
    const r = card.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setRotY.current?.(gsap.utils.mapRange(0, 1, -11, 11, px));
    setRotX.current?.(gsap.utils.mapRange(0, 1, 9, -9, py));
    setGlareX.current?.(e.clientX - r.left);
    setGlareY.current?.(e.clientY - r.top);
  }
  function onEnter() {
    setPaused(true);
    if (!reduce.current) gsap.to(glare.current, { opacity: 1, duration: 0.3 });
  }
  function onLeave() {
    setPaused(false);
    if (reduce.current) return;
    setRotX.current?.(0);
    setRotY.current?.(0);
    gsap.to(glare.current, { opacity: 0, duration: 0.4 });
  }

  return (
    <div
      ref={root}
      style={{ perspective: "1200px" }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* ambient glows */}
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gold-300/30 blur-3xl" />
      <div className="absolute -right-12 top-8 -z-10 h-60 w-60 rounded-full bg-blue-300/40 blur-3xl" />

      <div
        ref={card}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* ghost cards → "stack of offers" depth */}
        <div className="absolute inset-0 translate-x-5 translate-y-4 rotate-[5deg] rounded-[1.9rem] border border-line bg-white/55 shadow-soft" />
        <div className="absolute inset-0 translate-x-2.5 translate-y-2 rotate-[2.5deg] rounded-[1.9rem] border border-line bg-white/80 shadow-soft" />

        {/* main card */}
        <div className="relative overflow-hidden rounded-[1.9rem] border border-line bg-linear-to-br from-white via-white to-blue-50/60 p-6 shadow-soft">
          {/* cursor-following glare */}
          <div
            ref={glare}
            className="pointer-events-none absolute left-0 top-0 h-44 w-44 rounded-full bg-white/50 opacity-0 blur-2xl"
          />
          {/* top accent bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500 via-blue-400 to-gold-400" />
          {/* watermark ring */}
          <div className="pointer-events-none absolute -bottom-14 -right-14 h-48 w-48 rounded-full border-18 border-blue-100/40" />

          <div className="relative z-10">
            {/* eyebrow + admitted stamp */}
            <div className="flex items-center justify-between gap-2">
              <span
                data-slide
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700"
              >
                <span className="grid h-4 w-4 place-items-center rounded-full bg-blue-600 text-[8px] text-white">
                  <FaCheckCircle />
                </span>
                Offer of Admission
              </span>
              <span
                data-stamp
                className="inline-flex items-center gap-1 rounded-full border-2 border-emerald-500/70 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-emerald-600"
              >
                <FaCheckCircle className="text-[11px]" />
                Admitted
              </span>
            </div>

            {/* flag + university */}
            <div data-slide className="mt-4 flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tint text-2xl shadow-card ring-1 ring-line">
                {offer.flag}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-slate">
                  {offer.country}
                </p>
                <p className="flex items-center gap-1.5 font-display text-lg font-bold leading-tight text-ink">
                  {offer.uni}
                  <FaCheckCircle className="shrink-0 text-sm text-blue-500" />
                </p>
              </div>
            </div>

            {/* programme / intake */}
            <div
              data-slide
              className="mt-5 grid grid-cols-2 gap-4 border-t border-dashed border-line pt-4"
            >
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

            {/* scholarship highlight (count-up) */}
            <div
              data-slide
              className="mt-4 flex items-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-gold-300/40 to-gold-400/20 p-3.5 ring-1 ring-gold-400/40"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-gold-300 to-gold-500 text-ink shadow-card">
                <FaAward className="text-lg" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate">
                  Scholarship secured
                </p>
                <p className="font-display text-xl font-extrabold text-ink">
                  <span ref={amount}>
                    {offer.currency}
                    {offer.amount.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-slate"> / year</span>
                </p>
              </div>
            </div>

            {/* trust footer */}
            <div
              data-slide
              className="mt-4 flex items-center gap-3 rounded-2xl bg-tint px-4 py-3"
            >
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

            {/* auto-advance progress */}
            <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-blue-100/70">
              <div
                ref={progress}
                className="h-full w-full origin-left rounded-full bg-linear-to-r from-blue-500 to-gold-400"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* slide controls */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {OFFERS.map((_, d) => (
          <button
            key={d}
            onClick={() => setI(d)}
            aria-label={`Show offer ${d + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              d === i ? "w-7 bg-blue-600" : "w-2 bg-blue-200 hover:bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-32">
      {/* light background with soft blue + warm glows */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-tint to-paper" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-70 mask-[radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="absolute -top-24 left-1/4 -z-10 h-105 w-170 -translate-x-1/2 rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="absolute -top-10 right-0 -z-10 h-75 w-95 rounded-full bg-gold-300/30 blur-[120px]" />

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
              className="group flex items-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-7 py-3.5 font-semibold text-ink shadow-soft transition-transform duration-200 hover:scale-[1.04]"
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
