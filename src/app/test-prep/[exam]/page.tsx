import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import { EXAMS, getExam } from "@/lib/Exams";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowRight,
  FaWhatsapp,
  FaCheckCircle,
  FaListUl,
  FaBullseye,
  FaUserGraduate,
  FaThLarge,
} from "react-icons/fa";
import Faq from "./Faq";

export function generateStaticParams() {
  return EXAMS.map((e) => ({ exam: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ exam: string }>;
}): Promise<Metadata> {
  const { exam } = await params;
  const data = getExam(exam);
  if (!data) return { title: "Exam not found | Abroad Scholars" };
  const title = `${data.abbr} Coaching — Format, Scoring & Prep | Abroad Scholars`;
  return {
    title,
    description: `${data.name} (${data.abbr}): ${data.tagline} See the format, scoring and how Abroad Scholars prepares you.`,
    alternates: { canonical: `/test-prep/${data.slug}` },
    openGraph: { title, description: data.tagline, type: "article" },
  };
}

export default async function ExamPage({
  params,
}: {
  params: Promise<{ exam: string }>;
}) {
  const { exam } = await params;
  const data = getExam(exam);
  if (!data) notFound();

  const waHref = `https://wa.me/${SITE.whatsapp}`;
  const others = EXAMS.filter((e) => e.slug !== data.slug);

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        {/* ───── Hero ───── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-tint2 via-tint to-paper pt-28 pb-14 sm:pt-32 sm:pb-20">
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
            <Reveal>
              <nav className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate">
                <Link
                  href="/"
                  className="transition-colors hover:text-blue-700"
                >
                  Home
                </Link>
                <span className="text-muted">/</span>
                <Link
                  href="/test-prep"
                  className="transition-colors hover:text-blue-700"
                >
                  Test Prep
                </Link>
                <span className="text-muted">/</span>
                <span className="text-ink">{data.abbr}</span>
              </nav>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                <span className="grid shrink-0 place-items-center rounded-2xl bg-blue-600 px-5 py-3 font-display text-2xl font-bold text-white shadow-card">
                  {data.abbr}
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    {data.category === "English"
                      ? "English language test"
                      : "Graduate admissions test"}
                  </span>
                  <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                    {data.name}
                  </h1>
                </div>
              </div>

              <p className="mt-5 max-w-2xl font-display text-xl font-semibold text-ink/90 sm:text-2xl">
                {data.tagline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-7 py-3.5 font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:brightness-105"
                >
                  Start {data.abbr} prep free
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

        {/* ───── Overview + who/score ───── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  About the test
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  What {data.abbr} is
                </h2>
                <div className="mt-5 space-y-4 text-slate">
                  {data.overview.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <div className="rounded-3xl border border-line bg-tint p-6 shadow-card">
                    <div className="flex items-center gap-2 text-blue-700">
                      <FaUserGraduate />
                      <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                        Who it&apos;s for
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {data.whoFor}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-line bg-tint p-6 shadow-card">
                    <div className="flex items-center gap-2 text-blue-700">
                      <FaBullseye />
                      <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                        Scoring
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {data.scoreInfo}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── Format ───── */}
        <section className="bg-tint py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-card">
                  <FaListUl />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Test format
                  </span>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    How {data.abbr} is structured
                  </h2>
                </div>
              </div>
            </Reveal>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {data.format.map((f, i) => (
                <Reveal key={f.section} delay={i * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl border border-line bg-paper p-6 shadow-card">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 font-display text-sm font-bold text-blue-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-ink">
                        {f.section}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate">
                        {f.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Our coaching ───── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  How we prepare you
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  Our {data.abbr} coaching
                </h2>
                <p className="mt-4 leading-relaxed text-slate">
                  Small batches, real strategy and honest feedback — built to
                  move your score, with full-length mocks so test day holds no
                  surprises.
                </p>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-6 py-3 font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:brightness-105"
                >
                  Book a free diagnostic
                  <FaArrowRight className="text-sm" />
                </Link>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-line bg-tint p-6 shadow-card sm:p-8">
                  <h3 className="font-display text-lg font-bold text-ink">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {data.coaching.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 text-sm text-ink/90"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <section className="bg-tint py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto mb-10 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                FAQ
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {data.abbr}, answered
              </h2>
            </Reveal>
            <Reveal>
              <Faq items={data.faqs} />
            </Reveal>
          </div>
        </section>

        {/* ───── Other exams ───── */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                Other tests we coach
              </h2>
              <Link
                href="/test-prep"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
              >
                <FaThLarge className="text-xs" />
                All test prep
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {others.map((e) => (
                <Link
                  key={e.slug}
                  href={`/test-prep/${e.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 font-display text-sm font-bold text-ink transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {e.abbr}
                  <FaArrowRight className="text-xs text-blue-600 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="px-5 pb-20 lg:px-8">
          <Reveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy to-navy-deep p-8 text-center shadow-soft sm:p-14">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold-400/15 blur-3xl" />
              <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl">
                  Ready to start your {data.abbr} prep?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted">
                  Take a free diagnostic and we&apos;ll map out your target
                  score and the quickest, surest way to reach it.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-8 py-4 font-semibold text-ink shadow-xl shadow-gold-500/25 sm:w-auto"
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
