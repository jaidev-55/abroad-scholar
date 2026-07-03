import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Reveal } from "@/components/home/Reveal";

interface IntakeData {
  season: string;
  months: string;
  note: string;
}

interface CountryData {
  name: string;
  intakes: IntakeData[];
  intakesImage?: string;
}

const TIMELINE = [
  {
    when: "10–12 months before",
    title: "Research & shortlist",
    desc: "Pick universities and courses that fit your goals, and start your test preparation.",
  },
  {
    when: "8–9 months before",
    title: "Tests & documents",
    desc: "Take IELTS/PTE (and GRE/GMAT if needed) and prepare your SOP, LORs and transcripts.",
  },
  {
    when: "6–8 months before",
    title: "Submit applications",
    desc: "Apply to your shortlist and keep track of each university's deadline.",
  },
  {
    when: "3–5 months before",
    title: "Offers & finances",
    desc: "Accept your offer and arrange funds, scholarships or an education loan.",
  },
  {
    when: "2–3 months before",
    title: "Apply for your visa",
    desc: "Lodge your student visa with all supporting documents in good time.",
  },
  {
    when: "Before you fly",
    title: "Pre-departure",
    desc: "Book flights and accommodation, and join our pre-departure briefing.",
  },
];

export default function IntakesSection({ data }: { data: CountryData }) {
  const hasImage = Boolean(data.intakesImage);

  return (
    <section id="intakes" className="scroll-mt-28 bg-tint py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-card">
              <FaRegCalendarAlt />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Intakes
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                When you can start
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Intake cards */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.intakes.map((it, i) => {
            const isMain = i === 0;
            return (
              <Reveal key={it.season} delay={i * 0.06}>
                <div
                  className={`relative h-full rounded-2xl border bg-paper p-6 shadow-card ${
                    isMain
                      ? "border-blue-300 ring-1 ring-blue-200"
                      : "border-line"
                  }`}
                >
                  {isMain && (
                    <span className="absolute -top-2.5 left-6 rounded-full bg-blue-600 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-bold text-ink">
                      {it.season}
                    </span>
                    <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {it.months}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate">{it.note}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Application timeline */}
        <Reveal>
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
              Plan your {data.name} application
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-slate">
              Most students start around a year ahead. Here&apos;s a simple
              timeline so nothing is left to the last minute.
            </p>

            {hasImage ? (
              /* Two-column: vertical timeline + sticky image */
              <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:items-center">
                <ol className="lg:col-span-7">
                  {TIMELINE.map((t, i) => (
                    <li key={t.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 font-display text-sm font-bold text-white ring-4 ring-tint">
                          {i + 1}
                        </span>
                        {i < TIMELINE.length - 1 && (
                          <span className="mt-2 w-px flex-1 bg-blue-200" />
                        )}
                      </div>
                      <div className="pb-7">
                        <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                          {t.when}
                        </span>
                        <h4 className="mt-1 font-display text-base font-bold text-ink">
                          {t.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate">
                          {t.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <aside className="order-first lg:order-0 lg:col-span-5">
                  <div className="lg:sticky lg:top-28">
                    <div className="overflow-hidden rounded-3xl border border-line shadow-card">
                      <div className="relative w-full">
                        <Image
                          src={data.intakesImage as string}
                          alt={`Planning a study journey to ${data.name}`}
                          width={1024}
                          height={1280}
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="block h-auto w-full"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-navy-deep/80 to-transparent" />
                        <p className="absolute inset-x-0 bottom-0 p-5 font-display text-sm font-semibold text-cloud">
                          Your step-by-step roadmap to {data.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            ) : (
              /* Fallback: full-width card grid */
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {TIMELINE.map((t, i) => (
                  <li
                    key={t.title}
                    className="rounded-2xl border border-line bg-paper p-5 shadow-card transition-colors hover:border-blue-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-600 font-display text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                        {t.when}
                      </span>
                    </div>
                    <h4 className="mt-3 font-display text-base font-bold text-ink">
                      {t.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate">
                      {t.desc}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </Reveal>

        {/* Tip + CTA */}
        <Reveal>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
              <p className="text-sm text-blue-900">
                <strong className="font-semibold">Tip:</strong> popular courses
                and scholarships fill up early — applying for the main intake
                gives you the widest choice and the best funding options.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-navy-deep"
            >
              Plan my timeline <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
