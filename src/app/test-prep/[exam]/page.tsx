import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import { EXAMS, getExam } from "@/lib/Exams";

import type { Metadata } from "next";
import Image from "next/image";
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
  FaStar,
} from "react-icons/fa";
import Faq from "./Faq";

const EXAM_HERO_IMAGES: Record<string, string> = {
  ielts: "/images/test-prep/ielts/ielts-hero-study-preparation.png",
  pte: "/images/test-prep/pte/pte-test-prep-hero.png",
  toefl: "/images/test-prep/toefl/toefl-test-prep-hero.png",
  gre: "/images/test-prep/gre/gre-test-prep-hero.png",
  gmat: "/images/test-prep/gmat/gmat-test-prep-hero.png",
};

const EXAM_CTA_IMAGES: Record<string, string> = {
  ielts: "/images/test-prep/ielts/ielts-test-prep-cta-illustration.png",
  pte: "/images/test-prep/pte/pte-test-prep-cta-illustration.png",
  toefl: "/images/test-prep/toefl/toefl-test-prep-cta-illustration.png",
  gre: "/images/test-prep/gre/gre-test-prep-cta-illustration.png",
  gmat: "/images/test-prep/gmat/gmat-test-prep-cta-illustration.png",
};

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
  const heroImg = EXAM_HERO_IMAGES[data.slug];
  const ctaImg = EXAM_CTA_IMAGES[data.slug];

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        {/* ───── Hero ───── */}
        <section className="relative overflow-hidden  pt-24 pb-14 sm:pt-32 sm:pb-20">
          <div className="relative mx-auto max-w-7xl px-4  ">
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
            </Reveal>

            <div className="mt-7 grid items-center gap-10 sm:mt-8 lg:mt-10 lg:grid-cols-2 lg:gap-14">
              {/* Left — message */}
              <Reveal>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <span className="grid w-fit shrink-0 place-items-center rounded-2xl bg-blue-600 px-4 py-2.5 font-display text-xl font-bold text-white shadow-card sm:px-5 sm:py-3 sm:text-2xl">
                    {data.abbr}
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 sm:text-xs sm:tracking-[0.2em]">
                      {data.category === "English"
                        ? "English language test"
                        : "Graduate admissions test"}
                    </span>
                    <h1 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
                      {data.name}
                    </h1>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl font-display text-lg font-semibold leading-snug text-ink/90 sm:text-xl lg:text-2xl">
                  {data.tagline}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:-translate-y-0.5 hover:brightness-105 sm:px-7 sm:text-base"
                  >
                    Start {data.abbr} prep free
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

                {/* trust strip */}
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

              {/* Right — image slot, or "At a glance" card built from Exams.ts */}
              <Reveal delay={0.12}>
                <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:mx-0 lg:max-w-none">
                  <Image
                    src={heroImg}
                    alt={`${data.name} coaching at Abroad Scholars`}
                    width={1000}
                    height={1000}
                    priority
                    sizes="(max-width: 1024px) 90vw, 46vw"
                    className="h-auto w-full"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── Overview + who/score ───── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  About the test
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
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
          <div className="mx-auto max-w-7xl px-4 ">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-card">
                  <FaListUl />
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 sm:text-xs sm:tracking-[0.2em]">
                    Test format
                  </span>
                  <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-3xl">
                    How {data.abbr} is structured
                  </h2>
                </div>
              </div>
            </Reveal>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {data.format.map((f, i) => (
                <Reveal key={f.section} delay={i * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl border border-line bg-paper p-5 shadow-card sm:p-6">
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
          <div className="mx-auto max-w-7xl px-4 ">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  How we prepare you
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                  Our {data.abbr} coaching
                </h2>
                <p className="mt-4 leading-relaxed text-slate">
                  Small batches, real strategy and honest feedback — built to
                  move your score, with full-length mocks so test day holds no
                  surprises.
                </p>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-6 py-3 font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:-translate-y-0.5 hover:brightness-105"
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
          <div className="mx-auto max-w-7xl px-4 ">
            <Reveal className="mx-auto mb-10 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                FAQ
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
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
          <div className="mx-auto max-w-5xl px-4 ">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2 className="font-display text-lg font-bold text-ink sm:text-2xl">
                Other tests we coach
              </h2>
              <Link
                href="/test-prep"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700"
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
        <section className="px-4 pb-20 sm:px-5 ">
          <Reveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-navy via-navy to-navy-deep shadow-soft sm:rounded-4xl lg:min-h-104">
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />

              <div
                className={`relative z-10 p-6 sm:p-10  ${
                  ctaImg
                    ? "lg:flex lg:min-h-104 lg:max-w-xl lg:flex-col lg:justify-center lg:text-left"
                    : "text-center"
                }`}
              >
                <span
                  className={`inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-cloud backdrop-blur sm:px-4 sm:text-xs ${
                    ctaImg ? "self-start" : "mx-auto"
                  }`}
                >
                  <FaStar className="text-gold-400" />
                  4.9 · 8,000+ students coached
                </span>

                <h2
                  className={`mt-4 max-w-2xl font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight text-cloud sm:mt-5 sm:text-4xl ${
                    ctaImg ? "" : "mx-auto"
                  }`}
                >
                  Ready to start your{" "}
                  <span className="text-gold-gradient">{data.abbr} prep?</span>
                </h2>
                <p
                  className={`mt-3 max-w-xl text-sm leading-relaxed text-cloud/70 sm:mt-4 sm:text-base ${
                    ctaImg ? "" : "mx-auto"
                  }`}
                >
                  Take a free diagnostic and we&apos;ll map out your target
                  score and the quickest, surest way to reach it.
                </p>

                <div
                  className={`mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row ${
                    ctaImg ? "" : "items-center justify-center"
                  }`}
                >
                  <Link
                    href="/#contact"
                    className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-4 py-3 text-sm font-semibold text-ink shadow-xl shadow-gold-500/25 transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
                  >
                    Book a free diagnostic
                    <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/3 px-4 py-3 text-sm font-semibold text-cloud transition hover:-translate-y-0.5 hover:border-gold-400/50 hover:text-gold-400 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
                  >
                    <FaWhatsapp className="text-lg text-[#25D366]" />
                    Chat on WhatsApp
                  </a>
                </div>

                <p
                  className={`mt-5 text-[11px] text-cloud/55 sm:mt-6 sm:text-xs ${
                    ctaImg ? "" : "mx-auto"
                  }`}
                >
                  Free 1-on-1 session · No obligation · 100% confidential
                </p>
              </div>

              {/* Image — banner below the copy on mobile, bleeds right on desktop */}
              {ctaImg && (
                <div className="relative aspect-4/3 w-full sm:aspect-2/1 lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-3/5">
                  <Image
                    src={ctaImg}
                    alt={`Start your ${data.abbr} preparation with Abroad Scholars`}
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
