import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import { SERVICES_DETAIL } from "@/lib/Services";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaWhatsapp,
  FaCheckCircle,
  FaUsers,
  FaBalanceScale,
  FaAward,
  FaStar,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Our Services — Study Abroad & IELTS Support | Abroad Scholars",
  description:
    "From profile assessment and university shortlisting to SOPs, IELTS coaching, education loans, visas and post-landing support — Abroad Scholars guides you end to end.",
  alternates: { canonical: "/services" },
};

const HERO_IMAGE =
  "/images/services/abroad-scholar-study-abroad-hero-image.png";

const CTA_IMAGE = "/images/services/study-abroad-counselling-cta.png";

const DIFFERENTIATORS = [
  {
    icon: FaUsers,
    title: "One team, end to end",
    desc: "No handoffs between agencies and no being passed from desk to desk. The same counsellors who assess your profile see you all the way to your first day on campus.",
  },
  {
    icon: FaBalanceScale,
    title: "Honest, never salesy",
    desc: "We recommend what genuinely fits your profile, goals and budget — even when that means a cheaper option, a different country, or telling you to wait a year.",
  },
  {
    icon: FaAward,
    title: "Trusted since 2009",
    desc: "More than 8,000 students placed across 11 countries. That's a decade and a half of applications, visa files and intakes behind every piece of advice we give.",
  },
];

const ServicesPage = () => {
  const waHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20">
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <Reveal>
                <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
                  <Link
                    href="/"
                    className="transition-colors hover:text-blue-700"
                  >
                    Home
                  </Link>
                  <span className="text-muted">/</span>
                  <span className="text-ink">Services</span>
                </nav>

                <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  What we do
                </span>
                <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl xl:text-6xl">
                  From your first question to your{" "}
                  <span className="text-accent">first day abroad</span>
                </h1>
                <div className="mt-6 max-w-2xl space-y-4 text-slate">
                  <p>
                    Studying overseas has dozens of moving parts — choosing the
                    right course, writing applications that stand out, clearing
                    tests, arranging finances, securing a visa and finding
                    somewhere to live. Miss one, and the whole plan can stall.
                  </p>
                  <p>
                    That&apos;s why we handle all of it under one roof. Below is
                    everything we do for you, laid out in the order you&apos;ll
                    actually need it — so you always know what comes next.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-7 py-3.5 font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:brightness-105"
                  >
                    Book free counselling
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

              {HERO_IMAGE && (
                <Reveal delay={0.1}>
                  <div className="mx-auto w-full max-w-md lg:max-w-none">
                    <Image
                      src={HERO_IMAGE}
                      alt="Abroad Scholars guiding a student from first question to first day abroad"
                      width={1024}
                      height={1280}
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* ───── Feature showcase ───── */}
        <section className="py-16 ">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Our services
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Everything we do for you
              </h2>
              <p className="mt-4 text-slate">
                Eight services that cover the whole journey. Take the ones you
                need, or let us run the entire process for you.{" "}
                <span className="font-semibold text-ink">
                  Tap any service to see its full page.
                </span>
              </p>
            </Reveal>

            <div className="mt-16 space-y-16 lg:space-y-36">
              {SERVICES_DETAIL.map((s, i) => {
                const Icon = s.icon;
                const flip = i % 2 === 1;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <Reveal key={s.slug}>
                    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                      <div className={flip ? "lg:order-2" : ""}>
                        {s.image ? (
                          <Link
                            href={`/services/${s.slug}`}
                            aria-label={`View ${s.title} page`}
                            className="group relative block aspect-4/3 overflow-hidden rounded-3xl bg-tint shadow-soft ring-1 ring-transparent transition duration-300 hover:ring-blue-300"
                          >
                            <Image
                              src={s.image}
                              alt={s.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 45vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-paper/90 font-display text-sm font-bold text-navy shadow-card backdrop-blur">
                              {num}
                            </span>
                            <span className="absolute inset-0 flex items-end justify-end bg-linear-to-t from-navy/45 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-navy shadow-card">
                                View page <FaArrowRight className="text-xs" />
                              </span>
                            </span>
                          </Link>
                        ) : (
                          <Link
                            href={`/services/${s.slug}`}
                            aria-label={`View ${s.title} page`}
                            className="group relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-navy to-navy-deep shadow-soft ring-1 ring-transparent transition duration-300 hover:ring-white/20"
                          >
                            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-blue-500/20 blur-2xl" />
                            <div className="absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-gold-400/10 blur-2xl" />
                            <span className="absolute right-5 top-3 font-display text-6xl font-bold leading-none text-white/10">
                              {num}
                            </span>
                            <span className="relative grid h-20 w-20 place-items-center rounded-2xl bg-white/10 text-4xl text-cloud ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
                              <Icon />
                            </span>
                            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cloud opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                              View page <FaArrowRight className="text-xs" />
                            </span>
                          </Link>
                        )}
                      </div>

                      {/* content */}
                      <div className={flip ? "lg:order-1" : ""}>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                          Service {num}
                        </span>
                        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                          <Link
                            href={`/services/${s.slug}`}
                            className="transition-colors hover:text-blue-700"
                          >
                            {s.title}
                          </Link>
                        </h3>
                        <p className="mt-2 font-display text-lg font-semibold text-blue-700 sm:text-xl">
                          {s.tagline}
                        </p>
                        <p className="mt-4 leading-relaxed text-slate">
                          {s.overview[0]}
                        </p>
                        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {s.included.slice(0, 4).map((it) => (
                            <li
                              key={it}
                              className="flex items-start gap-2.5 text-sm text-ink/90"
                            >
                              <FaCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                          <Link
                            href={`/services/${s.slug}`}
                            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
                          >
                            See full details
                            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                          <Link
                            href={`/services/${s.slug}`}
                            className="text-sm font-medium text-slate underline-offset-4 transition hover:text-blue-700 hover:underline"
                          >
                            How it works, what&apos;s included &amp; steps
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───── Differentiators ───── */}
        <section className="bg-tint py-16 ">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Why us
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Why families choose Abroad Scholars
              </h2>
              <p className="mt-4 text-slate">
                Plenty of consultants can file an application. Here&apos;s what
                makes working with us different.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {DIFFERENTIATORS.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-line bg-paper p-7 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-xl text-white shadow-card">
                      <d.icon />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {d.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="px-5 pt-16 lg:px-8 ">
          <Reveal>
            <div
              className={`relative mx-auto flex max-w-6xl flex-col overflow-hidden rounded-4xl bg-linear-to-br from-navy via-navy to-navy-deep shadow-soft ${
                CTA_IMAGE ? "lg:flex-row lg:min-h-104" : ""
              }`}
            >
              {CTA_IMAGE && (
                <div className="relative h-48 w-full shrink-0 sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:order-2 lg:h-auto lg:w-1/2">
                  <Image
                    src={CTA_IMAGE}
                    alt="Book a free counselling session with Abroad Scholars"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 hidden lg:block lg:bg-linear-to-r lg:from-navy lg:via-navy/65 lg:to-transparent" />
                </div>
              )}

              <div
                className={`relative order-first flex flex-1 flex-col justify-center p-8 sm:p-10 ${
                  CTA_IMAGE ? "lg:max-w-xl" : ""
                }`}
              >
                {/* social-proof eyebrow */}
                <div className={CTA_IMAGE ? "" : "text-center"}>
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cloud backdrop-blur">
                    <span className="flex items-center gap-1 text-gold-300">
                      <FaStar className="text-[0.7rem]" />
                      4.9
                    </span>
                    <span className="h-3 w-px bg-white/20" />
                    <span>8,000+ students placed</span>
                  </span>
                </div>

                <h2
                  className={`mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl ${
                    CTA_IMAGE ? "" : "mx-auto max-w-2xl text-center"
                  }`}
                >
                  Not sure where to start?
                </h2>
                <p
                  className={`mt-4 leading-relaxed text-muted ${
                    CTA_IMAGE ? "max-w-md" : "mx-auto max-w-xl text-center"
                  }`}
                >
                  Book a free counselling session and we&apos;ll map out exactly
                  which of these services you need and which you can skip based
                  on your profile, budget and timeline.
                </p>

                <div
                  className={`mt-8 flex flex-col gap-3 sm:flex-row ${
                    CTA_IMAGE ? "" : "items-center justify-center"
                  }`}
                >
                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-5 py-3 font-semibold text-ink shadow-xl transition duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
                  >
                    Book free counselling
                    <FaArrowRight />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-5 py-3 font-semibold text-cloud transition duration-200 hover:-translate-y-0.5 hover:border-gold-400/50 hover:bg-white/5 hover:text-gold-400 sm:w-auto"
                  >
                    <FaWhatsapp className="text-lg text-[#25D366]" />
                    Chat on WhatsApp
                  </a>
                </div>

                <p
                  className={`mt-4 text-xs text-muted ${
                    CTA_IMAGE ? "" : "text-center"
                  }`}
                >
                  Free 1-on-1 session <span className="text-muted/40">·</span>{" "}
                  No obligation <span className="text-muted/40">·</span> 100%
                  confidential
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <div className="mx-auto max-w-3xl px-5 py-12 text-center lg:px-8">
          <p className="text-xs leading-relaxed text-slate/70">
            Abroad Scholars provides counselling, preparation and application
            support. Admission offers, scholarships, loan approvals and visa
            decisions are made solely by the respective universities, lenders
            and government authorities, and are not guaranteed. Outcomes vary
            based on each student&apos;s individual profile.
          </p>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default ServicesPage;
