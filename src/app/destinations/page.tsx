import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import { COUNTRIES } from "@/lib/Countries";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp, FaGlobeAmericas } from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Study Abroad Destinations — Universities, Costs & Visas | Abroad Scholars",
  description:
    "Explore top study-abroad destinations with Abroad Scholars. Compare universities, tuition, intakes, visa rules and post-study work rights, then book free counselling.",
  alternates: { canonical: "/destinations" },
};

const DestinationsPage = () => {
  const waHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        {/* ───── Hero ───── */}
        <section className="relative overflow-hidden  pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              {/* ── Left: copy ── */}
              <Reveal>
                <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
                  <Link
                    href="/"
                    className="transition-colors hover:text-blue-700"
                  >
                    Home
                  </Link>
                  <span className="text-muted">/</span>
                  <span className="text-ink">Destinations</span>
                </nav>

                <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  <FaGlobeAmericas />
                  Study abroad · 2026 intake
                </span>
                <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                  Find your{" "}
                  <span className="text-accent">study destination</span>
                </h1>
                <p className="mt-5 max-w-2xl text-slate">
                  Explore the world&apos;s top student destinations — top
                  universities, affordable tuition and clear paths to work and
                  stay. Open any one for the full guide.
                </p>
              </Reveal>

              {/* ── Right: hero image ── */}
              <Reveal delay={0.15}>
                <div className="relative aspect-4/3 w-full lg:aspect-5/4">
                  <Image
                    src="/images/destination/abroad-scholar-study-destinations-hero.png"
                    alt="Students exploring study-abroad destinations"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── Destination cards ───── */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.07} className="h-full">
                  <Link
                    href={`/destinations/${c.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                  >
                    <div className="relative h-56 overflow-hidden bg-linear-to-br from-navy to-navy-deep">
                      {c.cardImg && (
                        <Image
                          src={c.cardImg}
                          alt={`Study in ${c.name}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={i === 0}
                        />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/10 transition-all duration-500 group-hover:from-black/65" />

                      {/* overlay title */}
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <span className="font-display text-sm font-medium text-white/80">
                          Study in
                        </span>
                        <h2 className="font-display text-4xl font-extrabold leading-none text-white drop-shadow-lg">
                          {c.name}
                        </h2>
                      </div>
                    </div>

                    {/* body */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-blue-700">
                        Study in {c.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate line-clamp-3">
                        {c.blurb}
                      </p>

                      {/* mini stats */}
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                        {c.stats.slice(0, 2).map((s) => (
                          <div key={s.label} className="text-xs">
                            <span className="font-display font-bold text-blue-700">
                              {s.value}
                            </span>{" "}
                            <span className="text-slate">{s.label}</span>
                          </div>
                        ))}
                      </div>

                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                        Explore destination
                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="px-5 py-16 ">
          <Reveal>
            <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-4xl bg-linear-to-br from-navy via-navy to-navy-deep shadow-soft lg:grid-cols-2">
              {/* ── Left: copy ── */}
              <div className="relative z-10 p-8 text-center sm:p-10 lg:text-left">
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl">
                  Not sure which country is{" "}
                  <span className="text-gold-300">right for you?</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted lg:mx-0">
                  Tell us your goals and budget — we&apos;ll recommend the
                  destinations and universities that fit you best, at no cost.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-5 py-3  font-semibold text-ink shadow-xl  transition-transform hover:scale-[1.03] sm:w-auto"
                  >
                    Get free guidance
                    <FaArrowRight />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3  font-semibold text-cloud transition-colors hover:border-gold-400/50 hover:text-gold-400 sm:w-auto"
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* trust chips */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                  <span className="inline-flex items-center gap-2 text-sm text-muted">
                    <FaGlobeAmericas className="text-gold-300" />
                    50+ universities
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-muted">
                    <FaWhatsapp className="text-gold-300" />
                    Reply within 24h
                  </span>
                </div>
              </div>

              <div className="relative min-h-65 lg:min-h-full">
                <Image
                  src="/images/destination/study-abroad-destination-guidance-cta.png"
                  alt="Counsellor guiding a student to the right study destination"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default DestinationsPage;
