"use client";

import { motion } from "framer-motion";
import {
  FaHeadset,
  FaLayerGroup,
  FaBalanceScale,
  FaAward,
  FaHeadphonesAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { Reveal } from "./Reveal";
import { WHY } from "@/lib/Constants";

const ICONS: IconType[] = [FaHeadset, FaLayerGroup, FaBalanceScale, FaAward];

const WhyUs = () => {
  return (
    <section className="relative bg-tint py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: thesis */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why students choose us
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Guidance that feels personal, not like a{" "}
              <span className="text-accent">call centre</span>
            </h2>
            <p className="mt-5 text-slate">
              Choosing a country, a course and a loan is one of the biggest
              decisions a family makes. We treat it that way — a dedicated
              counsellor stays with you from your first question to your first
              day on campus.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-6 py-3 font-semibold text-ink shadow-soft transition-transform duration-200 hover:scale-[1.03]"
            >
              Book a free counselling session
              <FaArrowRight />
            </a>
            <p className="mt-3 flex items-center gap-2 text-xs font-medium text-slate">
              <FaCheckCircle className="text-emerald-500" />
              Free 30-minute session · No obligation
            </p>
          </Reveal>

          {/* Right: pillars */}
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY.map((w, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={w.title} delay={(i % 2) * 0.1}>
                  <div className="group h-full rounded-2xl border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-soft">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="text-xl" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {w.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Test Prep teaser — dark band for emphasis */}
        <Reveal className="mt-16">
          <div
            id="test-prep"
            className="relative overflow-hidden rounded-3xl bg-linear-to-r from-navy to-navy-deep p-8 shadow-soft sm:p-10"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold-400/15 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold-400/15 text-2xl text-gold-400 ring-1 ring-gold-400/25">
                  <FaHeadphonesAlt />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-cloud">
                    IELTS, PTE, GRE & GMAT coaching
                  </h3>
                  <p className="mt-2 max-w-xl text-muted">
                    Small batches, certified trainers and 20+ real mock tests.
                    Most of our students score the band they need on the first
                    attempt.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "20+ mock tests",
                      "Small batches",
                      "Certified trainers",
                    ].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cloud ring-1 ring-white/15"
                      >
                        <FaCheckCircle className="text-[11px] text-gold-400" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="flex shrink-0 items-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-6 py-3 font-semibold text-ink"
              >
                Book your class
                <FaArrowRight />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyUs;
