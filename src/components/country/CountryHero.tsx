import Link from "next/link";
import {
  FaArrowRight,
  FaChevronRight,
  FaWhatsapp,
  FaStar,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";
import { Reveal } from "@/components/home/Reveal";
import HeroPromoCarousel from "./HeroPromoCarousel";

interface CountryData {
  name: string;
  flag: string;
  tagline: string;
  blurb: string;
  stats: Array<{ label: string; value: string }>;
}

const HELP_POINTS = [
  "Free profile evaluation & university shortlist",
  "Application, SOP & document support",
  "Visa filing and interview preparation",
  "Scholarship & education-loan guidance",
];

export default function CountryHero({
  data,
  waHref,
}: {
  data: CountryData;
  waHref: string;
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-tint2 via-tint to-paper pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Breadcrumb */}
        <Reveal>
          <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
            <Link href="/" className="transition-colors hover:text-blue-700">
              Home
            </Link>
            <FaChevronRight className="text-[8px] text-muted" />
            <Link
              href="/destinations"
              className="transition-colors hover:text-blue-700"
            >
              Destinations
            </Link>
            <FaChevronRight className="text-[8px] text-muted" />
            <span className="text-ink">{data.name}</span>
          </nav>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* ── LEFT: intro ── */}
          <Reveal>
            <div>
              <div className="flex items-center ">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Study in
                  </span>
                  <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                    {data.name}
                  </h1>
                </div>
              </div>

              <p className="mt-5 max-w-2xl font-display text-xl font-semibold text-ink/90 sm:text-2xl">
                {data.tagline}
              </p>
              <p className="mt-3 max-w-2xl text-slate">{data.blurb}</p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
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

              {/* Trust row */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
                <span className="inline-flex items-center gap-1.5">
                  <FaStar className="text-gold-400" />
                  <strong className="font-semibold text-ink">4.9</strong> Google
                  rating
                </span>
                <span className="hidden h-4 w-px bg-line sm:block" />
                <span className="inline-flex items-center gap-1.5">
                  <FaUserGraduate className="text-blue-600" />
                  <strong className="font-semibold text-ink">
                    8,000+
                  </strong>{" "}
                  students placed
                </span>
              </div>

              {/* How we help */}
              <div className="mt-8 max-w-xl rounded-2xl border border-line bg-paper/60 p-5 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold text-ink">
                  Here&apos;s how we help you get to {data.name}:
                </p>
                <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {HELP_POINTS.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-slate"
                    >
                      <FaCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: auto-scrolling promo carousel ── */}
          <Reveal delay={0.1}>
            <HeroPromoCarousel waHref={waHref} />
          </Reveal>
        </div>

        {/* Quick Stats */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {data.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-paper/70 p-4 text-center shadow-soft backdrop-blur sm:p-5"
              >
                <p className="font-display text-xl font-bold text-blue-700 sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-slate">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
