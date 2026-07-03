import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import { SERVICES_DETAIL, getService } from "@/lib/Services";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowRight,
  FaArrowLeft,
  FaWhatsapp,
  FaCheckCircle,
  FaThLarge,
  FaGraduationCap,
} from "react-icons/fa";

export function generateStaticParams() {
  return SERVICES_DETAIL.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getService(slug);
  if (!data) return { title: "Service not found | Abroad Scholars" };
  const title = `${data.title} — Study Abroad Services | Abroad Scholars`;
  return {
    title,
    description: data.tagline,
    alternates: { canonical: `/services/${data.slug}` },
    openGraph: { title, description: data.tagline, type: "article" },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getService(slug);
  if (!data) notFound();

  const Icon = data.icon;
  const waHref = `https://wa.me/${SITE.whatsapp}`;

  const heroImage = data.heroImage;
  const ctaImage = data.ctaImage;

  const idx = SERVICES_DETAIL.findIndex((s) => s.slug === data.slug);
  const prev =
    SERVICES_DETAIL[
      (idx - 1 + SERVICES_DETAIL.length) % SERVICES_DETAIL.length
    ];
  const next = SERVICES_DETAIL[(idx + 1) % SERVICES_DETAIL.length];

  const PrevIcon = prev.icon;
  const NextIcon = next.icon;

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        {/* ───── Hero ───── */}
        <section className="relative overflow-hidden bg-linear-to-b from-tint2 via-tint to-paper pt-28 pb-14 sm:pt-32 sm:pb-20">
          {/* soft decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-5">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* ── left: copy ── */}
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
                    href="/services"
                    className="transition-colors hover:text-blue-700"
                  >
                    Services
                  </Link>
                  <span className="text-muted">/</span>
                  <span className="text-ink">{data.title}</span>
                </nav>

                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      Service
                    </span>
                    <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                      {data.title}
                    </h1>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl font-display text-xl font-semibold text-ink/90 sm:text-2xl">
                  {data.tagline}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-7 py-3.5 font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:brightness-105"
                  >
                    Get started free
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

              {/* ── right: image / illustration ── */}
              <Reveal delay={0.1}>
                <div className="relative">
                  {/* accent frame glow */}
                  <div
                    aria-hidden
                    className="absolute -inset-3 -z-10 rounded-4xl bg-linear-to-tr from-blue-500/15 to-gold-400/15 blur-xl"
                  />

                  {heroImage ? (
                    /* natural ratio — no crop */
                    <div className="overflow-hidden rounded-3xl border border-line bg-tint shadow-soft">
                      <Image
                        src={heroImage}
                        alt={`${data.title} — Abroad Scholars`}
                        width={1200}
                        height={900}
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-auto w-full"
                      />
                    </div>
                  ) : (
                    /* Fallback illustration — keeps a fixed ratio since there's no real image */
                    <div className="flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-3xl border border-line bg-linear-to-br from-tint2 via-tint to-blue-50 shadow-soft">
                      <div className="flex flex-col items-center gap-4 px-6 text-center">
                        <span className="grid h-20 w-20 place-items-center rounded-3xl bg-blue-600 text-4xl text-white shadow-card">
                          <Icon />
                        </span>
                        <p className="font-display text-lg font-bold text-ink">
                          {data.title}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* floating trust chip */}
                  <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-2xl border border-line bg-paper/95 px-4 py-2.5 shadow-card backdrop-blur sm:left-6">
                    <FaCheckCircle className="text-blue-600" />
                    <span className="text-sm font-semibold text-ink">
                      Free first session
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── Overview + what's included ───── */}
        <section className="py-16 ">
          <div className="mx-auto max-w-7xl px-5 ">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Overview
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  What this covers
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
                <div className="rounded-3xl border border-line bg-tint p-6 shadow-card sm:p-8">
                  <h3 className="font-display text-lg font-bold text-ink">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {data.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-ink/90"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── How it works ───── */}
        <section className="bg-tint py-16 ">
          <div className="mx-auto max-w-7xl px-5 ">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                How it works
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Three simple steps
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {data.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="relative h-full rounded-2xl border border-line bg-paper p-6 shadow-card">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 font-display text-sm font-bold text-white shadow-card">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Prev / next ───── */}

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-5">
            {/* header row */}
            <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Keep exploring
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink">
                  More ways we help
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-blue-300 hover:text-blue-700"
              >
                <FaThLarge className="text-xs" />
                All services
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Previous */}
              <Reveal>
                <Link
                  href={`/services/${prev.slug}`}
                  className="group relative flex h-full items-center gap-4 overflow-hidden rounded-3xl border border-line bg-paper p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-soft sm:p-6"
                >
                  {/* hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -left-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-500/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white sm:h-12 sm:w-12">
                    <FaArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-0.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate">
                      Previous
                    </p>
                    <p className="mt-0.5 flex items-center gap-2 font-display text-base font-bold text-ink transition-colors group-hover:text-blue-700 sm:text-lg">
                      <PrevIcon className="shrink-0 text-blue-600" />
                      <span className="min-w-0 wrap-break-word">
                        {prev.title}
                      </span>
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-slate">
                      {prev.tagline}
                    </p>
                  </div>
                </Link>
              </Reveal>

              {/* Next */}
              <Reveal delay={0.06}>
                <Link
                  href={`/services/${next.slug}`}
                  className="group relative flex h-full items-center gap-4 overflow-hidden rounded-3xl border border-line bg-paper p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-soft sm:justify-end sm:p-6 sm:text-right"
                >
                  {/* hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-500/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  {/* arrow first on mobile, hidden on sm+ (moves to the right) */}
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white sm:hidden">
                    <FaArrowRight className="text-sm" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate">
                      Next
                    </p>
                    <p className="mt-0.5 flex items-center gap-2 font-display text-base font-bold text-ink transition-colors group-hover:text-blue-700 sm:justify-end sm:text-lg">
                      {/* icon leads on mobile, trails on desktop */}
                      <NextIcon className="shrink-0 text-blue-600 sm:order-2" />
                      <span className="min-w-0 wrap-break-word">
                        {next.title}
                      </span>
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-slate">
                      {next.tagline}
                    </p>
                  </div>
                  {/* arrow on the right for sm+ only */}
                  <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white sm:grid">
                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="px-5 pb-20">
          <Reveal>
            <div className="relative mx-auto flex min-h-110 max-w-7xl flex-col overflow-hidden rounded-4xl bg-navy shadow-soft lg:min-h-112.5 lg:flex-row">
              {ctaImage ? (
                <div className="relative h-48 w-full shrink-0 sm:h-60 lg:absolute lg:inset-y-0 lg:left-auto lg:right-0 lg:order-2 lg:h-auto lg:w-3/5">
                  <Image
                    src={ctaImage}
                    alt={`Get started with ${data.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center lg:object-[75%_center]"
                  />
                </div>
              ) : (
                <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-2/5 place-items-center lg:grid">
                  <span className="grid h-28 w-28 place-items-center rounded-4xl bg-white/5 text-6xl text-cloud/40 ring-1 ring-white/10">
                    <Icon />
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="relative order-first flex flex-1 flex-col justify-center p-8 sm:p-10 lg:max-w-xl">
                <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-300">
                  <FaGraduationCap className="text-sm" /> Free 1-on-1 session
                </span>

                <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-cloud sm:text-3xl lg:text-4xl">
                  Ready to get started with {data.title.toLowerCase()}?
                </h2>
                <p className="mt-4 max-w-md text-sm text-cloud/80 sm:text-base">
                  Book a free session and a counsellor will map out your next
                  steps — shortlisting the right universities, checking your
                  eligibility and budget, and building a timeline that fits your
                  goals. No cost, no pressure.
                </p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {[
                    "Personalised university & course shortlist",
                    "Honest profile and eligibility review",
                    "Clear roadmap for tests, deadlines & visa",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-cloud/90"
                    >
                      <FaCheckCircle className="mt-0.5 shrink-0 text-gold-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink shadow-xl shadow-gold-500/25 transition hover:brightness-105 sm:w-auto"
                  >
                    Book free counselling <FaArrowRight />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-cloud transition-colors hover:border-gold-400/50 hover:text-gold-400 sm:w-auto"
                  >
                    <FaWhatsapp className="text-base" /> Chat on WhatsApp
                  </a>
                </div>

                <p className="mt-5 text-xs text-cloud/60">
                  100% free consultation · Replies within 24 hours · Trusted by
                  2,000+ students
                </p>
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
