import Image from "next/image";
import { FaPassport, FaBriefcase } from "react-icons/fa";
import { Reveal } from "@/components/home/Reveal";

interface VisaStep {
  title: string;
  desc: string;
}

interface CountryData {
  name: string;
  slug: string;
  visaName: string;
  visaSteps: VisaStep[];
  workRights: string;
}

export default function VisaSection({ data }: { data: CountryData }) {
  return (
    <section id="visa" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_480px] lg:items-stretch lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-card">
                  <FaPassport />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    {data.visaName}
                  </span>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    The visa, step by step
                  </h2>
                </div>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {data.visaSteps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl border border-line bg-tint p-6 shadow-card">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 font-display text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-6 flex flex-col gap-4 rounded-3xl bg-linear-to-br from-navy to-navy-deep p-7 shadow-soft sm:flex-row sm:items-center sm:p-8">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-400 text-ink">
                  <FaBriefcase className="text-lg" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-cloud">
                    Work rights
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {data.workRights}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: image fills full left-column height ── */}
          <Reveal delay={0.08}>
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src="/images/destination/visa/student-visa-application.png"
                    alt="Student visa application"
                    fill
                    sizes="480px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
