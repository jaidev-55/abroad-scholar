import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import { EXAMS } from "@/lib/Exams";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaWhatsapp,
  FaUsers,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaRegClock,
  FaStar,
  FaBullseye,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "IELTS, PTE, TOEFL, GRE & GMAT Coaching | Abroad Scholars",
  description:
    "Small-batch coaching for IELTS, PTE, TOEFL, GRE and GMAT — strategy, practice and full-length mocks that move your score. Book a free diagnostic with Abroad Scholars.",
  alternates: { canonical: "/test-prep" },
};

const HERO_IMAGE = "/images/test-prep/abroad-scholar-test-prep-hero.png";

const CTA_IMAGE = "/images/test-prep/test-prep-diagnostic-cta-illustration.png";

const STEPS = [
  { n: "1", t: "Book a slot", d: "Two minutes, no payment" },
  { n: "2", t: "Sit the diagnostic", d: "30 minutes, real test format" },
  { n: "3", t: "Get your plan", d: "Your level, target and timeline" },
];

const EXAM_IMAGES: Record<string, string> = {
  ielts: "/images/test-prep/ielts-prep-card-illustration.png",
  pte: "/images/test-prep/pte-prep-card-illustration.png",
  toefl: "/images/test-prep/toefl-prep-card-illustration.png",
  gre: "/images/test-prep/gre-prep-card-illustration.png",
  gmat: "/images/test-prep/gmat-prep-card-illustration.png",
};

const TARGETS = [
  { abbr: "IELTS", label: "Band score", score: "8.0" },
  { abbr: "PTE", label: "Academic", score: "85" },
  { abbr: "TOEFL", label: "iBT", score: "112" },
  { abbr: "GRE", label: "General", score: "325" },
  { abbr: "GMAT", label: "Focus Edition", score: "685" },
];

const GROUPS = [
  {
    key: "English" as const,
    title: "English language tests",
    desc: "Prove your English for university admission and your visa.",
  },
  {
    key: "Aptitude" as const,
    title: "Graduate admissions tests",
    desc: "Strengthen your application to master's, PhD and MBA programmes.",
  },
];

const WHY = [
  {
    icon: FaUsers,
    title: "Small batches",
    desc: "Personal attention, not crowded classrooms.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Expert trainers",
    desc: "Coaches who know each test inside out.",
  },
  {
    icon: FaClipboardCheck,
    title: "Real mock tests",
    desc: "Full-length, scored practice with feedback.",
  },
  {
    icon: FaRegClock,
    title: "Flexible timings",
    desc: "Weekday and weekend batches to fit you.",
  },
];

export default function TestPrepPage() {
  const waHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        {/* ───── Hero ───── */}
        <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pb-24">
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
                <span className="text-ink">Test Prep</span>
              </nav>
            </Reveal>

            <div className="mt-7 grid items-center gap-10 sm:mt-8 lg:mt-12 lg:grid-cols-2 lg:gap-16">
              {/* Left — message */}
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                  Coaching that scores
                </span>
                <h1 className="mt-4 font-display text-[1.9rem] font-bold leading-[1.08] tracking-tight text-ink sm:mt-5 sm:text-5xl lg:text-6xl">
                  Crack the test.{" "}
                  <span className="text-accent">Open the door.</span>
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate sm:mt-6 sm:text-lg">
                  Your score decides which universities and scholarships are
                  within reach. We coach every major exam in small batches —
                  with real strategy, honest feedback and full-length mocks that
                  move your score.
                </p>
                <p className="mt-3 max-w-xl text-sm text-muted">
                  Pick your test below for its format, scoring and your prep
                  plan.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:-translate-y-0.5 hover:brightness-105 sm:px-7 sm:text-base"
                  >
                    Book a free diagnostic
                    <FaArrowRight className="text-sm" />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 sm:px-7 sm:text-base"
                  >
                    <FaWhatsapp className="text-lg text-[#25D366]" />
                    Ask on WhatsApp
                  </a>
                </div>

                {/* Trust strip — 3-up grid on mobile, inline row with dividers from sm.
                The `hidden` dividers take no grid cell, so both layouts work. */}
                <dl className="mt-8 grid grid-cols-3 gap-x-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-x-7">
                  <div>
                    <dt className="flex items-center gap-1 font-display text-xl font-bold text-ink sm:gap-1.5 sm:text-2xl">
                      <FaStar className="text-base text-gold-400 sm:text-lg" />
                      4.9
                    </dt>
                    <dd className="mt-0.5 text-[10px] leading-tight text-slate sm:text-xs">
                      Google rating
                    </dd>
                  </div>
                  <div className="hidden h-9 w-px bg-line sm:block" />
                  <div>
                    <dt className="font-display text-xl font-bold text-ink sm:text-2xl">
                      8,000+
                    </dt>
                    <dd className="mt-0.5 text-[10px] leading-tight text-slate sm:text-xs">
                      students coached
                    </dd>
                  </div>
                  <div className="hidden h-9 w-px bg-line sm:block" />
                  <div>
                    <dt className="font-display text-xl font-bold text-ink sm:text-2xl">
                      2009
                    </dt>
                    <dd className="mt-0.5 text-[10px] leading-tight text-slate sm:text-xs">
                      trusted since
                    </dd>
                  </div>
                </dl>
              </Reveal>

              {/* Right — image slot, or "Target scores" fallback card */}
              <Reveal delay={0.12}>
                {HERO_IMAGE ? (
                  <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:mx-0 lg:max-w-none">
                    <Image
                      src={HERO_IMAGE}
                      alt="Abroad Scholars test-prep coaching — IELTS, PTE, TOEFL, GRE and GMAT"
                      width={1024}
                      height={1024}
                      priority
                      sizes="(max-width: 1024px) 90vw, 46vw"
                      className="h-auto w-full"
                    />
                  </div>
                ) : (
                  <div className="relative mx-auto w-full max-w-md lg:mx-0">
                    <div className="rounded-3xl border border-line bg-paper/90 p-5 shadow-soft backdrop-blur sm:rounded-4xl sm:p-8">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-700 sm:px-3.5 sm:text-xs">
                          <FaBullseye className="text-sm" />
                          Scores we coach toward
                        </span>
                        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-ink">
                          <FaStar className="text-gold-400" />
                          4.9
                        </span>
                      </div>

                      <ul className="mt-5 space-y-2.5 sm:mt-6">
                        {TARGETS.map((t) => (
                          <li
                            key={t.abbr}
                            className="flex items-center justify-between gap-2 rounded-2xl border border-line/70 bg-white px-3.5 py-3 transition-colors hover:border-blue-200 sm:px-4"
                          >
                            <div>
                              <p className="font-display text-sm font-bold text-ink">
                                {t.abbr}
                              </p>
                              <p className="text-[11px] text-slate">
                                {t.label}
                              </p>
                            </div>
                            <div className="flex shrink-0 items-center gap-2">
                              <span className="hidden text-[11px] font-medium text-muted sm:inline">
                                aim for
                              </span>
                              <span className="rounded-lg bg-navy px-2.5 py-1 font-display text-sm font-bold text-cloud">
                                {t.score}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <p className="mt-5 text-xs leading-relaxed text-muted">
                        Your personal target is set from a free diagnostic —
                        then we build the plan to hit it.
                      </p>
                    </div>

                    {/* floating stat chip — only with the fallback card */}
                    <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-line bg-paper px-4 py-3 shadow-card sm:block">
                      <p className="font-display text-lg font-bold text-ink">
                        100%
                      </p>
                      <p className="text-[11px] text-slate">
                        full-length mocks
                      </p>
                    </div>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── Exam groups ───── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-8">
            {GROUPS.map((g) => (
              <div key={g.key}>
                <Reveal>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {g.title}
                  </h2>
                  <p className="mt-2 text-slate">{g.desc}</p>
                </Reveal>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {EXAMS.filter((e) => e.category === g.key).map((e, i) => {
                    const img = EXAM_IMAGES[e.slug];
                    return (
                      <Reveal key={e.slug} delay={i * 0.06}>
                        <Link
                          href={`/test-prep/${e.slug}`}
                          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-soft"
                        >
                          {img && (
                            <div className="relative aspect-16/10 overflow-hidden border-b border-line bg-linear-to-b from-tint2 to-tint">
                              <Image
                                src={img}
                                alt={e.name}
                                fill
                                className="object-cover  transition-transform duration-500 group-hover:scale-[1.04]"
                              />
                              <span className="absolute bottom-3 left-3 rounded-xl border border-line bg-white/95 px-3 py-1.5 font-display text-lg font-bold text-blue-700 shadow-sm backdrop-blur">
                                {e.abbr}
                              </span>
                              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-line bg-white/90 text-blue-600 shadow-sm backdrop-blur transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                              </span>
                            </div>
                          )}

                          <div className="flex flex-1 flex-col p-7">
                            {/* Badge layout — the fallback when no image */}
                            {!img && (
                              <div className="mb-5 flex items-start justify-between gap-3">
                                <span className="rounded-2xl bg-blue-50 px-4 py-2 font-display text-xl font-bold text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                  {e.abbr}
                                </span>
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                                  <FaArrowRight className="text-sm" />
                                </span>
                              </div>
                            )}
                            <h3 className="font-display text-base font-bold leading-snug text-ink">
                              {e.name}
                            </h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                              {e.tagline}
                            </p>
                            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                              Prepare for {e.abbr}
                              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </div>
                        </Link>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───── Why our coaching ───── */}
        <section className="bg-tint py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Why our coaching works
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Built around your score, not a syllabus
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-xl text-white shadow-card">
                      <w.icon />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {w.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}

        <section className=" py-16 sm:px-5 ">
          <Reveal>
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-navy via-navy to-navy-deep shadow-soft sm:rounded-4xl lg:min-h-120">
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />

              <div
                className={`relative z-10 p-6  lg:p-10 ${
                  CTA_IMAGE
                    ? "lg:flex lg:min-h-120 lg:max-w-xl lg:flex-col lg:justify-center lg:text-left"
                    : "text-center"
                }`}
              >
                {/* eyebrow */}
                <span
                  className={`inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-cloud backdrop-blur sm:px-4 sm:text-xs ${
                    CTA_IMAGE ? "self-start" : "mx-auto"
                  }`}
                >
                  <FaStar className="text-gold-400" />
                  4.9 · 8,000+ students coached
                </span>

                <h2
                  className={`mt-4 max-w-2xl font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight text-cloud sm:mt-5 sm:text-4xl lg:text-[2.6rem] ${
                    CTA_IMAGE ? "" : "mx-auto"
                  }`}
                >
                  Know your score before{" "}
                  <span className="text-gold-gradient">
                    you pay for coaching
                  </span>
                </h2>
                <p
                  className={`mt-3 max-w-lg text-sm leading-relaxed text-cloud/70 sm:mt-4 sm:text-base ${
                    CTA_IMAGE ? "" : "mx-auto"
                  }`}
                >
                  A free 30-minute diagnostic tells you exactly where you stand,
                  the band or score you can realistically reach, and how long
                  it&apos;ll take.
                </p>

                <ol
                  className={`mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3 ${
                    CTA_IMAGE ? "" : "mx-auto max-w-3xl"
                  }`}
                >
                  {STEPS.map((s) => (
                    <li
                      key={s.n}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 text-left backdrop-blur sm:block sm:p-4"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-400 font-display text-xs font-extrabold text-ink">
                        {s.n}
                      </span>
                      <div className="sm:mt-3">
                        <p className="font-display text-sm font-bold text-cloud">
                          {s.t}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-cloud/60 sm:mt-1">
                          {s.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* buttons */}
                <div
                  className={`mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row ${
                    CTA_IMAGE ? "" : "items-center justify-center"
                  }`}
                >
                  <Link
                    href="/#contact"
                    className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-5 py-3 text-sm font-semibold text-ink shadow-xl  transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:text-base"
                  >
                    Book my free diagnostic
                    <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/3 px-5 py-3 text-sm font-semibold text-cloud transition hover:-translate-y-0.5 hover:border-gold-400/50 hover:text-gold-400 sm:w-auto sm:text-base"
                  >
                    <FaWhatsapp className="text-lg text-[#25D366]" />
                    Ask a question first
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
                    alt="Free diagnostic test with an Abroad Scholars trainer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-bottom lg:object-right"
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
