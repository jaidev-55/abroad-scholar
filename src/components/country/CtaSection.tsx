import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaWhatsapp,
  FaShieldAlt,
  FaGraduationCap,
  FaPassport,
  FaPlane,
} from "react-icons/fa";
import { Reveal } from "@/components/home/Reveal";

interface CountryData {
  name: string;
  ctaImage?: string;
}

const FEATURES = [
  { icon: FaShieldAlt, label: "Expert Counselling" },
  { icon: FaGraduationCap, label: "Top Universities" },
  { icon: FaPassport, label: "Visa Guidance" },
];

const CtaSection = ({
  data,
  waHref,
}: {
  data: CountryData;
  waHref: string;
}) => {
  return (
    <section className="px-5 pb-20 lg:px-8">
      <Reveal>
        <div className="relative mx-auto flex max-w-6xl flex-col overflow-hidden rounded-4xl bg-navy shadow-soft lg:min-h-104 lg:flex-row">
          {data.ctaImage && (
            <div className="relative h-52 w-full shrink-0 sm:h-64 lg:absolute lg:inset-y-0 lg:right-0 lg:order-2 lg:h-auto lg:w-3/5">
              <Image
                src={data.ctaImage}
                alt={`Study in ${data.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 hidden lg:block lg:bg-linear-to-r lg:from-navy lg:via-navy/60 lg:to-transparent" />
            </div>
          )}

          {/* Flight-path flourish — desktop only */}
          <div className="pointer-events-none absolute right-6 top-6 hidden lg:block">
            <svg
              viewBox="0 0 300 110"
              fill="none"
              className="h-24 w-72 text-cloud/25"
            >
              <path
                d="M4 96 C 70 96, 95 22, 165 44 S 250 64, 296 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="3 7"
                strokeLinecap="round"
              />
            </svg>
            <FaPlane className="absolute right-1 top-1 rotate-[-28deg] text-xl text-cloud/40" />
          </div>

          {/* Content */}
          <div className="relative order-first flex flex-1 flex-col justify-center p-8 sm:p-12 lg:max-w-xl lg:p-14">
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-cloud sm:text-3xl lg:text-4xl">
              Ready to study in{" "}
              <span className="text-gold-gradient">{data.name}</span>?
            </h2>
            <p className="mt-4 max-w-md text-sm text-cloud/80 sm:text-base">
              Get a free, honest plan for your profile — universities, budget
              and visa, mapped out by a counsellor.
            </p>

            {/* Buttons — stack full-width on mobile */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-gold-300 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink shadow-xl shadow-gold-500/25 transition hover:brightness-105 sm:w-auto"
              >
                Book free counselling <FaArrowRight />
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-cloud transition-colors hover:border-gold-400/50 hover:text-gold-400 sm:w-auto"
              >
                <FaWhatsapp className="text-base" /> Chat on WhatsApp
              </a>
            </div>

            {/* Trust features */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-gold-300">
                    <f.icon className="text-sm" />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-cloud">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CtaSection;
