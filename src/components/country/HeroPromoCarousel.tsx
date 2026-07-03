"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaWhatsapp,
  FaPencilAlt,
  FaGraduationCap,
  FaHandHoldingUsd,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type Promo = {
  key: string;
  label: string;
  Icon: IconType;
  title: string;
  subtitle?: string;
  body: string;
  cta: { href: string; label: string };
  cardBg: string;
  archBg: string;
  iconColor: string;
  image?: string;
};

const PROMOS: Promo[] = [
  {
    key: "testprep",
    label: "Test preparation",
    Icon: FaPencilAlt,
    title: "Test Prep",
    subtitle: "IELTS · TOEFL · PTE · GRE · GMAT",
    body: "Worried about the score you need? Get live classes, free mock tests and one-on-one doubt clearing with our trainers — and walk into your exam confident.",
    cta: { href: "/test-prep", label: "Book a free demo" },
    cardBg: "from-gold-300/30 via-gold-300/15 to-paper border-gold-400/30",
    archBg: "bg-gold-300/40",
    iconColor: "text-gold-500",
    image: "/images/destination/cards/ielts-hero-img.png",
  },
  {
    key: "scholarships",
    label: "Funding",
    Icon: FaGraduationCap,
    title: "Scholarships",
    subtitle: "From partial discounts to full waivers",
    body: "With our expert guidance, students regularly win awards — from partial tuition discounts all the way up to full tuition-fee waivers. Talk to us and apply.",
    cta: { href: "#scholarships", label: "Explore scholarships" },
    cardBg: "from-rose-200/50 via-rose-100/30 to-paper border-rose-300/40",
    archBg: "bg-rose-300/45",
    iconColor: "text-rose-500",
    image: "/images/destination/cards/scholars-hero-img.png",
  },
  {
    key: "loan",
    label: "Education loan",
    Icon: FaHandHoldingUsd,
    title: "Education Loan",
    subtitle: "Unsecured loans up to ₹1 crore",
    body: "Financing that can cover tuition, travel and living costs. We help you secure the best deals on education loans — including unsecured loans up to ₹1 crore — through our partners.",
    cta: { href: "/contact", label: "Get loan help" },
    cardBg: "from-lime-200/50 via-lime-100/30 to-paper border-lime-300/50",
    archBg: "bg-lime-300/50",
    iconColor: "text-lime-600",
    image: "/images/destination/cards/education-loan-hero.png",
  },
];

const HeroPromoCarousel = ({ waHref }: { waHref: string }) => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = PROMOS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  const active = PROMOS[i];
  const Icon = active.Icon;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-132">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className={`overflow-hidden rounded-3xl border bg-linear-to-br ${active.cardBg} p-6 shadow-card sm:p-7`}
          >
            {active.image ? (
              <div className="-mx-6 -mt-6 mb-5 sm:-mx-7 sm:-mt-7">
                <Image
                  src={active.image}
                  alt={active.title}
                  width={1200}
                  height={1000}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority={active.key === "testprep"}
                  className="block h-auto w-full object-cover"
                />
              </div>
            ) : (
              <div className="relative mx-auto mb-5 flex h-44 w-40 items-end justify-center">
                <div
                  className={`absolute inset-0 rounded-[5rem_5rem_1.25rem_1.25rem] ${active.archBg}`}
                />
                {/* floating paper decor */}
                <div className="pointer-events-none absolute -right-3 top-4 h-6 w-9 rotate-12 rounded-md bg-paper/70 shadow-card" />
                <div className="pointer-events-none absolute -left-3 top-10 h-5 w-8 -rotate-12 rounded-md bg-paper/60 shadow-card" />
                <Icon
                  className={`relative z-1 mb-6 text-6xl ${active.iconColor}`}
                />
              </div>
            )}

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink shadow-card">
                <Icon className="text-blue-600" /> {active.label}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                {active.title}
              </h3>
              {active.subtitle && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate">
                  {active.subtitle}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {active.body}
              </p>

              <div className="mt-5 flex flex-col gap-2">
                <Link
                  href={active.cta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper transition hover:bg-navy-deep"
                >
                  {active.cta.label} <FaArrowRight className="text-sm" />
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate transition hover:text-blue-700"
                >
                  <FaWhatsapp className="text-[#25D366]" /> Or ask us on
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {PROMOS.map((p, idx) => (
          <button
            key={p.key}
            type="button"
            aria-label={`Show ${p.title}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-6 bg-blue-600" : "w-2 bg-line hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroPromoCarousel;
