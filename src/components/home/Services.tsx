"use client";

import { SERVICES } from "@/lib/Constants";
import { Reveal } from "./Reveal";
import TiltCard from "./Tiltcard";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="relative bg-tint py-20 ">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Everything you need, under one roof
          </h2>
          <p className="mt-4 text-slate">
            One team handles your entire journey — so nothing falls through the
            cracks between application, loan, visa and landing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.08}>
                <TiltCard className="h-full">
                  <a
                    href="#contact"
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-soft"
                  >
                    {/* index watermark */}
                    <span className="pointer-events-none absolute right-4 top-3 font-display text-4xl font-extrabold text-blue-100 transition-colors duration-300 group-hover:text-blue-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* icon */}
                    <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600">
                      <Icon className="text-2xl" />
                    </span>

                    <h3 className="relative mt-5 font-display text-lg font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate">
                      {s.body}
                    </p>

                    <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                      Learn more
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
          >
            Not sure where to start? Talk to an advisor
            <FaArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
