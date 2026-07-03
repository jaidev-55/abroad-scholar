import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import { EXAMS } from "@/lib/Exams";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaWhatsapp,
  FaUsers,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaRegClock,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "IELTS, PTE, TOEFL, GRE & GMAT Coaching | Abroad Scholars",
  description:
    "Small-batch coaching for IELTS, PTE, TOEFL, GRE and GMAT — strategy, practice and full-length mocks that move your score. Book a free diagnostic with Abroad Scholars.",
  alternates: { canonical: "/test-prep" },
};

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
        {/* ───── Header ───── */}
        <section className="relative overflow-hidden bg-linear-to-b from-tint2 via-tint to-paper pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
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

              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Coaching that scores
              </span>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Crack the test.{" "}
                <span className="text-accent">Open the door.</span>
              </h1>
              <div className="mt-6 max-w-2xl space-y-4 text-slate">
                <p>
                  Your test score decides which universities and scholarships
                  are within reach. Our trainers coach every major exam in small
                  batches — with real strategy, honest feedback and full-length
                  mocks, not generic worksheets.
                </p>
                <p>
                  Pick your test below to see the format, scoring and exactly
                  how we&apos;ll prepare you for it.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-7 py-3.5 font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:brightness-105"
                >
                  Book a free diagnostic
                  <FaArrowRight className="text-sm" />
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-7 py-3.5 font-semibold text-ink transition hover:border-blue-300 hover:text-blue-700"
                >
                  <FaWhatsapp className="text-lg text-[#25D366]" />
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───── Exam groups ───── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl space-y-16 px-5 lg:px-8">
            {GROUPS.map((g) => (
              <div key={g.key}>
                <Reveal>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {g.title}
                  </h2>
                  <p className="mt-2 text-slate">{g.desc}</p>
                </Reveal>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {EXAMS.filter((e) => e.category === g.key).map((e, i) => (
                    <Reveal key={e.slug} delay={i * 0.06}>
                      <Link
                        href={`/test-prep/${e.slug}`}
                        className="group relative flex h-full flex-col rounded-3xl border border-line bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-soft"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="rounded-2xl bg-blue-50 px-4 py-2 font-display text-xl font-bold text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                            {e.abbr}
                          </span>
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                            <FaArrowRight className="text-sm" />
                          </span>
                        </div>
                        <h3 className="mt-5 font-display text-base font-bold leading-snug text-ink">
                          {e.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                          {e.tagline}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                          Prepare for {e.abbr}
                          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
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
        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-linear-to-br from-navy via-navy to-navy-deep p-8 text-center shadow-soft sm:p-14">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold-400/15 blur-3xl" />
              <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl">
                  Find out where you stand — free
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted">
                  Take a free diagnostic and we&apos;ll tell you your current
                  level, a realistic target, and the fastest way to get there.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-8 py-4 font-semibold text-ink shadow-xl shadow-gold-500/25 sm:w-auto"
                  >
                    Book a free diagnostic
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
