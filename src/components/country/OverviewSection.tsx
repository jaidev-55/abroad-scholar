import Image from "next/image";
import { Reveal } from "@/components/home/Reveal";
import type { Country } from "@/lib/Countries";
import CountryCallback from "./Countrycallback";

const OverviewSection = ({ data }: { data: Country }) => {
  return (
    <section id="overview" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* wider right column: 1fr left, 1.2fr right */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* ── main column ── */}
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Overview
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Why study in {data.name}?
              </h2>
              <div className="mt-5 space-y-4 text-slate">
                {data.overview.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h3 className="mt-10 font-display text-2xl font-bold tracking-tight text-ink">
                Highlights of studying in {data.name}
              </h3>
              <ol className="mt-6 space-y-3">
                {data.highlights.map((h, i) => (
                  <li
                    key={h}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-4 shadow-card transition-colors duration-300 hover:border-blue-200 hover:bg-tint/60"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-600 font-display text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-ink/90 sm:text-[15px]">
                      {h}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          {/* ── sticky lead sidebar ── */}
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-3xl border border-gold-400/30 bg-linear-to-b from-gold-400/10 to-paper shadow-card">
                {/* Image flush to top, full width of the wider column */}
                <div className="overflow-hidden rounded-t-3xl">
                  <Image
                    src="/images/destination/overview/uk-study-abroad-services.png"
                    alt="Our services — personalised guidance, IELTS coaching, university shortlist and visa assurance"
                    width={1000}
                    height={1000}
                    className="w-full"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    priority
                  />
                </div>

                {/* Text + CTA below image */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-center font-display text-xl font-bold leading-snug text-ink">
                    Everything you need for your {data.name} journey
                  </h3>
                  <p className="mt-3 text-center text-sm text-slate">
                    Get a free, personalised plan and expert guidance for
                    studying in {data.name}.
                  </p>
                  <div className="mt-4">
                    <CountryCallback country={data.name} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
