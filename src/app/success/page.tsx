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
import Image from "next/image";
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

const HERO_IMAGE = "/images/success/success-stories-hero-illustration.png";
const CTA_IMAGE = "/images/success/success-stories-cta-illustration.png";

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
        <section className="relative overflow-hidden  pt-24 pb-12 sm:pt-32 sm:pb-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
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
            </Reveal>

            <div
              className={`mt-6 grid items-center gap-10 sm:mt-8 lg:gap-14 ${
                HERO_IMAGE ? "lg:grid-cols-2" : ""
              }`}
            >
              {/* Left — message */}
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                  Success stories
                </span>
                <h1 className="mt-4 max-w-3xl font-display text-[1.9rem] font-bold leading-[1.08] tracking-tight text-ink sm:mt-5 sm:text-5xl lg:text-6xl">
                  Real students.{" "}
                  <span className="text-accent">Real results.</span>
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate sm:mt-5 sm:text-base">
                  Top IELTS bands, scholarships, dream-university admits and
                  visas approved here&apos;s what studying abroad with Abroad
                  Scholars actually looks like for the students who trusted us.
                </p>
              </Reveal>

              {/* Right — optional image, shown whole (never cropped) */}
              {HERO_IMAGE && (
                <Reveal delay={0.12}>
                  <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:mx-0 lg:max-w-none">
                    <Image
                      src={HERO_IMAGE}
                      alt="Abroad Scholars students celebrating their university admits"
                      width={1000}
                      height={1000}
                      priority
                      sizes="(max-width: 1024px) 90vw, 46vw"
                      className="h-auto w-full"
                    />
                  </div>
                </Reveal>
              )}
            </div>

            {/* stats — always full width beneath */}
            <Reveal delay={0.1}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {SUCCESS_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-line bg-paper/70 p-4 text-center shadow-soft backdrop-blur sm:p-5"
                  >
                    <p className="font-display text-xl font-bold text-blue-700 sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-slate sm:text-sm">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───── Universities strip ───── */}
        <section className="border-y border-line bg-tint py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
            <Reveal>
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-slate sm:text-xs sm:tracking-[0.2em]">
                Our students have joined universities like
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-2.5">
                {UNIVERSITIES.map((u) => (
                  <span
                    key={u}
                    className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink/80 sm:px-4 sm:py-2 sm:text-sm"
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
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                In their words
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Wins worth celebrating
              </h2>
              {/* Google rating */}
              <div className="mt-6 flex justify-center">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-card transition-all hover:border-blue-200 hover:shadow-soft sm:px-5"
                >
                  <FcGoogle className="h-7 w-7 shrink-0" />
                  <div className="flex flex-col items-start leading-tight">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg font-extrabold text-ink sm:text-xl">
                        4.9
                      </span>
                      <span className="flex gap-0.5 text-gold-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <FaStar key={s} className="text-xs sm:text-sm" />
                        ))}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-slate sm:text-xs">
                      Based on 19+ Google reviews
                    </span>
                  </div>
                </a>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {SUCCESS_REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-soft sm:p-6">
                    <div className="flex items-center justify-between gap-2">
                      <FaQuoteLeft className="shrink-0 text-xl text-blue-200" />
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
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                <FaPlayCircle /> Video stories
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Hear it from them
              </h2>
              <p className="mt-4 text-sm text-slate sm:text-base">
                Real students sharing how they cracked their tests and landed
                their admits — in their own words.
              </p>
            </Reveal>
            <div className="mt-10 sm:mt-12">
              <Stories videos={SUCCESS_VIDEOS} />
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="px-4 py-14 sm:px-5 sm:py-16">
          <Reveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-navy via-navy to-navy-deep shadow-soft sm:rounded-4xl lg:min-h-104">
              <div
                className={`relative z-10 p-6 sm:p-10  ${
                  CTA_IMAGE
                    ? "lg:flex lg:min-h-104 lg:max-w-xl lg:flex-col lg:justify-center lg:text-left"
                    : "text-center"
                }`}
              >
                <span
                  className={`inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-cloud backdrop-blur sm:px-4 sm:text-xs ${
                    CTA_IMAGE ? "self-start" : "mx-auto"
                  }`}
                >
                  <FaStar className="text-gold-400" />
                  4.9 · 8,000+ students placed
                </span>

                <h2
                  className={`mt-4 max-w-2xl font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight text-cloud sm:mt-5 sm:text-4xl ${
                    CTA_IMAGE ? "" : "mx-auto"
                  }`}
                >
                  Your success story{" "}
                  <span className="text-gold-gradient">starts here</span>
                </h2>
                <p
                  className={`mt-3 max-w-xl text-sm leading-relaxed text-cloud/70 sm:mt-4 sm:text-base ${
                    CTA_IMAGE ? "" : "mx-auto"
                  }`}
                >
                  Join 8,000+ students who made it abroad with us. Book a free
                  counselling session and let&apos;s write your next chapter.
                </p>

                <div
                  className={`mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row ${
                    CTA_IMAGE ? "" : "items-center justify-center"
                  }`}
                >
                  <Link
                    href="/#contact"
                    className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-6 py-3.5 text-sm font-semibold text-ink shadow-xl  transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
                  >
                    Start your journey
                    <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/3 px-6 py-3.5 text-sm font-semibold text-cloud transition hover:-translate-y-0.5 hover:border-gold-400/50 hover:text-gold-400 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
                  >
                    <FaWhatsapp className="text-lg text-[#25D366]" />
                    Chat on WhatsApp
                  </a>
                </div>

                <p
                  className={`mt-5 text-[11px] text-cloud/55 sm:mt-6 sm:text-xs ${
                    CTA_IMAGE ? "" : "mx-auto"
                  }`}
                >
                  Free 1-on-1 session · No obligation · 100% confidential
                </p>
              </div>

              {CTA_IMAGE && (
                <div className="relative aspect-4/3 w-full sm:aspect-2/1 lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-3/5">
                  <Image
                    src={CTA_IMAGE}
                    alt="A free counselling session with an Abroad Scholars counsellor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-bottom lg:object-right"
                  />
                  <div className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-linear-to-r lg:from-navy lg:from-5% lg:via-navy/45 lg:via-30% lg:to-transparent lg:to-70%" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-linear-to-b from-navy to-transparent lg:hidden" />
                </div>
              )}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
