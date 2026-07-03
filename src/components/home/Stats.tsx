"use client";

import { CountUp } from "./Countup";
import { Reveal } from "./Reveal";
import {
  FaUserGraduate,
  FaGlobeAmericas,
  FaUniversity,
  FaPassport,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { STATS } from "@/lib/Constants";

// icons map to STATS order: students, destinations, universities, visa
const ICONS: IconType[] = [
  FaUserGraduate,
  FaGlobeAmericas,
  FaUniversity,
  FaPassport,
];

export default function Stats() {
  return (
    <section className="relative border-y border-line bg-tint">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 ">
        <Reveal className="mx-auto mb-11 max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            By the numbers
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            A track record families trust
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 sm:p-6">
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-blue-200/0 blur-2xl transition-colors duration-300 group-hover:bg-blue-200/50" />
                  <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="text-xl" />
                  </span>
                  <p className="relative mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="relative mt-1.5 text-sm font-medium text-slate">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
