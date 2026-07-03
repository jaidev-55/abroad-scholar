"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { DESTINATIONS } from "@/lib/Constants";

const Destinations = () => {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-paper py-20"
    >
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]" />
      <div className="absolute left-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-gold-300/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Where you can go
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Eleven destinations, one trusted guide
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
          >
            Not sure which fits you? Ask us
            <FaArrowRight className="text-xs" />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <Reveal key={d.country} delay={(i % 3) * 0.07}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={`/countries/${d.slug}`}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-line bg-paper p-4 shadow-card transition-colors duration-300 hover:border-blue-300"
                >
                  {/* hover colour wash */}
                  <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* flag tile */}
                  <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-tint text-3xl shadow-card ring-1 ring-line transition-transform duration-300 group-hover:scale-105">
                    {d.flag}
                  </span>

                  {/* text */}
                  <span className="relative min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold text-ink">
                      {d.country}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate">
                      {d.hook}
                    </span>
                  </span>

                  {/* arrow button */}
                  <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>

                  {/* bottom accent */}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-linear-to-r from-transparent via-blue-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
