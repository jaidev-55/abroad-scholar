import Image from "next/image";
import { Reveal } from "@/components/home/Reveal";
import { FaGraduationCap } from "react-icons/fa";
import ProgramsExplorer from "./ProgramsExplorer";

interface CountryData {
  name: string;
  slug: string;
  programs?: { intro: string[]; masters: string[] };
}

const ProgramsSection = ({ data }: { data: CountryData }) => {
  if (!data.programs || data.programs.masters.length === 0) return null;
  const { intro, masters } = data.programs;

  console.log(data.slug,"datata");

  return (
    <section id="programs" className="scroll-mt-28 bg-tint/40 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Courses &amp; programs
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Top programs to study in {data.name}
              </h2>
              {intro.length > 0 && (
                <div className="mt-5 max-w-3xl space-y-4 text-slate">
                  {intro.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Right: image — natural size, no cropping */}
            <div className="hidden shrink-0 lg:block lg:w-md">
              <Image
                src={`/images/destination/programs/top-${data.slug}-masters-programs.png`}
                alt={`Top Master's programs in ${data.name}`}
                width={720}
                height={540}
                className="w-full rounded-2xl shadow-card"
                sizes="448px"
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-paper shadow-card">
            <div className="flex items-center gap-3 border-b border-line bg-linear-to-br from-tint to-paper p-6 sm:p-8">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-card">
                <FaGraduationCap />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  Top Master&apos;s programs in {data.name}
                </h3>
                <p className="text-sm text-slate">
                  {masters.length}+ specialisations our students apply for.
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <ProgramsExplorer programs={masters} country={data.name} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProgramsSection;
