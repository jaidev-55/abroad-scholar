import Image from "next/image";
import {
  FaAward,
  FaGraduationCap,
  FaUniversity,
  FaMedal,
} from "react-icons/fa";
import { Reveal } from "@/components/home/Reveal";

interface Scholarship {
  name: string;
  desc: string;
}

interface CountryData {
  name: string;
  slug: string;
  scholarships: Scholarship[];
}

const CARD_ICONS = [FaMedal, FaGraduationCap, FaUniversity, FaAward];

export default function ScholarshipsSection({ data }: { data: CountryData }) {
  return (
    <section className="bg-tint py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-stretch lg:gap-16">
          {/* ── Left: heading + cards ── */}
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Funding
              </span>
              <div className="mt-2 flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-400 text-xl text-ink shadow-card">
                  <FaAward />
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Scholarships &amp; aid
                </h2>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate">
                Reduce your study costs with government, university, and
                merit-based funding available to international students.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {data.scholarships.map((s, i) => {
                const Icon = CARD_ICONS[i % CARD_ICONS.length];
                return (
                  <Reveal key={s.name} delay={i * 0.07}>
                    <div className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-paper p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-soft">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/15 text-lg text-gold-500 transition-colors group-hover:bg-gold-400/30">
                        <Icon />
                      </span>
                      <div>
                        <h3 className="font-display text-[15px] font-bold text-ink">
                          {s.name}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ── Right: image ── */}
          <Reveal delay={0.08}>
            <div className="hidden lg:block">
              <div className="relative h-full min-h-130 overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src={`/images/destination/overview/schloarship/uk-scholarship-award.png`}
                  alt={`Scholarship award for studying in uk`}
                  fill
                  className="object-cover object-top"
                  sizes="420px"
                  priority
                />
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-navy/80 px-4 py-3 backdrop-blur-sm">
                  <p className="text-center text-sm font-semibold text-cloud">
                    🎓 Scholarships up to £30,000 available
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
