import Image from "next/image";
import Link from "next/link";
import {
  FaUniversity,
  FaMapMarkerAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { Reveal } from "@/components/home/Reveal";

type University =
  | string
  | {
      name: string;
      image?: string;
      location?: string;
      rank?: string;
      note?: string;
    };

interface CountryData {
  name: string;
  universities: University[];
}

function normalize(u: University) {
  return typeof u === "string" ? { name: u } : u;
}

export default function UniversitiesSection({ data }: { data: CountryData }) {
  return (
    <section id="universities" className="scroll-mt-28 bg-tint py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-card">
              <FaUniversity />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Top universities
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Where you could study
              </h2>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-slate">
            Some of the most sought-after universities in {data.name}. We match
            your profile, budget and goals to the right institutions — and help
            you apply with confidence.
          </p>
        </Reveal>

        {/* University cards */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.universities.map((raw, i) => {
            const u = normalize(raw);
            const initial = u.name.replace(/^The\s+/i, "").charAt(0);
            return (
              <Reveal key={u.name} delay={i * 0.05}>
                <div className="group h-full overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-soft">
                  <div className="relative aspect-video overflow-hidden bg-linear-to-br from-navy to-navy-deep">
                    {u.image ? (
                      <Image
                        src={u.image}
                        alt={`${u.name} campus`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center">
                        <FaUniversity className="text-5xl text-cloud/25" />
                        <span className="absolute font-display text-2xl font-bold text-cloud/70">
                          {initial}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 font-display text-sm font-bold text-blue-700">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display font-semibold leading-snug text-ink">
                          {u.name}
                        </p>
                        {u.location && (
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-slate">
                            <FaMapMarkerAlt className="shrink-0 text-blue-500" />
                            {u.location}
                          </p>
                        )}
                      </div>
                    </div>

                    {(u.rank || u.note) && (
                      <div className="mt-3 space-y-2">
                        {u.rank && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                            <FaStar className="text-gold-400" /> {u.rank}
                          </span>
                        )}
                        {u.note && (
                          <p className="text-sm leading-relaxed text-slate">
                            {u.note}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-9 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-navy-deep"
            >
              Get a free university shortlist{" "}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
