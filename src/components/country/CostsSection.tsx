import Image from "next/image";
import { FaMoneyBillWave, FaCheckCircle, FaUniversity } from "react-icons/fa";
import { Reveal } from "@/components/home/Reveal";

interface FeeRow {
  university: string;
  fee: string;
}

interface CostData {
  tuition: string;
  living: string;
  note?: string;
  feeTable?: FeeRow[];
}

interface CountryData {
  name: string;
  slug: string;
  cost: CostData;
}

const CostsSection = ({ data }: { data: CountryData }) => {
  const feeTable = data.cost.feeTable;

  return (
    <section id="costs" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-stretch lg:gap-16">
          <div className="flex flex-col">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400 text-ink shadow-card">
                  <FaMoneyBillWave />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Cost of studying
                  </span>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    What it costs
                  </h2>
                </div>
              </div>
            </Reveal>

            {/* Cost Cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-line bg-tint p-7 shadow-card">
                  <p className="text-sm font-medium text-slate">Tuition fees</p>
                  <p className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {data.cost.tuition}
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Varies by university and course.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="h-full rounded-3xl border border-line bg-tint p-7 shadow-card">
                  <p className="text-sm font-medium text-slate">Living costs</p>
                  <p className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {data.cost.living}
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Accommodation, food and transport.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Note */}
            {data.cost.note && (
              <Reveal>
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-900">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                  {data.cost.note}
                </p>
              </Reveal>
            )}
          </div>

          {/* Right: budget image — full left-column height */}
          <Reveal delay={0.08}>
            <div className="hidden h-full lg:flex lg:flex-col">
              <div className="relative min-h-120 flex-1 overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src={`/images/destination/budject/study-cost-planning.png`}
                  alt={`Cost of studying`}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="420px"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-navy/90 to-transparent" />
                {/* Stats badges */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                    <p className="text-xs font-medium text-cloud/80">
                      Tuition from
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-gold-300">
                      {data.cost.tuition.split("–")[0]}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                    <p className="text-xs font-medium text-cloud/80">
                      Living from
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-gold-300">
                      {data.cost.living.split("–")[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── University fee table — full width below ── */}
        {feeTable && feeTable.length > 0 && (
          <Reveal>
            <div className="mt-16">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                Bachelor&apos;s tuition by university in {data.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-slate">
                Indicative annual tuition at popular universities. Exact fees
                depend on your course and year of entry.
              </p>

              <div className="mt-5 overflow-hidden rounded-3xl border border-line shadow-card">
                <div className="grid grid-cols-[1.6fr_1fr] bg-linear-to-r from-navy to-navy-deep text-cloud">
                  <div className="flex items-center gap-2 px-5 py-4 text-sm font-semibold sm:px-7 sm:text-base">
                    <FaUniversity className="shrink-0 text-gold-300" />
                    Universities for Bachelors in {data.name}
                  </div>
                  <div className="px-5 py-4 text-sm font-semibold sm:px-7 sm:text-base">
                    Tuition&nbsp;/&nbsp;year
                  </div>
                </div>

                {feeTable.map((row, i) => (
                  <div
                    key={row.university}
                    className={`grid grid-cols-[1.6fr_1fr] border-t border-line transition-colors hover:bg-blue-50/60 ${
                      i % 2 === 1 ? "bg-tint/50" : "bg-paper"
                    }`}
                  >
                    <div className="px-5 py-4 text-sm text-ink sm:px-7 sm:text-[15px]">
                      {row.university}
                    </div>
                    <div className="px-5 py-4 text-sm font-semibold text-blue-700 sm:px-7 sm:text-[15px]">
                      {row.fee}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-slate/70">
                Figures are illustrative and for guidance only. Contact our
                counsellors for exact, up-to-date fees for your chosen course.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default CostsSection;
