import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import { COUNTRIES } from "@/lib/Countries";
import {
  SUCCESS_STATS,
  SUCCESS_REVIEWS,
  SUCCESS_VIDEOS,
  GOOGLE_REVIEWS_URL,
} from "@/lib/Success";

import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaQuoteLeft,
  FaPlayCircle,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Stories from "./Stories";

export const metadata: Metadata = {
  title: "Success Stories — Student Results & Reviews | Abroad Scholars",
  description:
    "8,000+ students placed across 11 countries. See real IELTS scores, scholarships, university admits and video reviews from students who studied abroad with Abroad Scholars.",
  alternates: { canonical: "/success" },
};

// a selection of real universities our students attend (from destination data)
const UNIVERSITIES = Array.from(
  new Set(
    COUNTRIES.flatMap((c) =>
      c.universities.map((u) => (typeof u === "string" ? u : u.name)),
    ),
  ),
).slice(0, 12);

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function SuccessPage() {
  const waHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        {/* ───── Hero ───── */}
        <section className="relative overflow-hidden bg-linear-to-b from-tint2 via-tint to-paper pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
                <Link
                  href="/"
                  className="transition-colors hover:text-blue-700"
                >
                  Home
                </Link>
                <span className="text-muted">/</span>
                <span className="text-ink">Success</span>
              </nav>

              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Success stories
              </span>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Real students.{" "}
                <span className="text-accent">Real results.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-slate">
                Top IELTS bands, scholarships, dream-university admits and visas
                approved — here&apos;s what studying abroad with Abroad Scholars
                actually looks like for the students who trusted us.
              </p>
            </Reveal>

            {/* stats */}
            <Reveal delay={0.1}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {SUCCESS_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-line bg-paper/70 p-5 text-center shadow-soft backdrop-blur"
                  >
                    <p className="font-display text-2xl font-bold text-blue-700 sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-slate sm:text-sm">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───── Universities strip ───── */}
        <section className="border-y border-line bg-tint py-10">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                Our students have joined universities like
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                {UNIVERSITIES.map((u) => (
                  <span
                    key={u}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink/80"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───── Results wall ───── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                In their words
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Wins worth celebrating
              </h2>
              {/* Google rating */}
              <div className="mt-6 flex justify-center">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-3 shadow-card transition-all hover:border-blue-200 hover:shadow-soft"
                >
                  <FcGoogle className="h-7 w-7 shrink-0" />
                  <div className="flex flex-col items-start leading-tight">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xl font-extrabold text-ink">
                        4.9
                      </span>
                      <span className="flex gap-0.5 text-gold-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <FaStar key={s} className="text-sm" />
                        ))}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate">
                      Based on 19+ Google reviews
                    </span>
                  </div>
                </a>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SUCCESS_REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-soft">
                    <div className="flex items-center justify-between">
                      <FaQuoteLeft className="text-xl text-blue-200" />
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                        {r.result}
                      </span>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
                      {r.quote}
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-blue-500 to-blue-700 text-xs font-bold text-white">
                        {initialsOf(r.name)}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-sm font-semibold text-ink">
                          {r.name}
                        </p>
                        {r.course && (
                          <p className="truncate text-xs text-slate">
                            {r.course}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Video stories ───── */}
        <section className="bg-tint py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                <FaPlayCircle /> Video stories
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Hear it from them
              </h2>
              <p className="mt-4 text-slate">
                Real students sharing how they cracked their tests and landed
                their admits — in their own words.
              </p>
            </Reveal>
            <div className="mt-12">
              <Stories videos={SUCCESS_VIDEOS} />
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-linear-to-br from-navy via-navy to-navy-deep p-8 text-center shadow-soft sm:p-14">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold-400/15 blur-3xl" />
              <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl">
                  Your success story starts here
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted">
                  Join 8,000+ students who made it abroad with us. Book a free
                  counselling session and let&apos;s write your next chapter.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-8 py-4 font-semibold text-ink shadow-xl shadow-gold-500/25 sm:w-auto"
                  >
                    Start your journey
                    <FaArrowRight />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold text-cloud transition-colors hover:border-gold-400/50 hover:text-gold-400 sm:w-auto"
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
