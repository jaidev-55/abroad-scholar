"use client";

import Image from "next/image";

const UNIVERSITY_LOGOS: Record<string, string> = {
  "University of Manchester":
    "/images/success/universities/university-of-manchester-logo.png",
  "Massachusetts Institute of Technology (MIT)":
    "/images/success/universities/massachusetts-institute-of-technology-logo.png",
  "University of Edinburgh":
    "/images/success/universities/university-of-edinburgh-logo.png",
  "University College London (UCL)":
    "/images/success/universities/university-collage-london-logo.png",
  "Stanford University":
    "/images/success/universities/stanford-university-logo.png",
  "University of California, Berkeley":
    "/images/success/universities/university-of-California-Berkeley.png",
  "Georgia Institute of Technology":
    "/images/success/universities/georgia-Institute-of-Technology.png",
  "University of Texas at Austin":
    "/images/success/universities/University-of-exas-at-Austin.png",
  "University of Toronto":
    "/images/success/universities/University-of-Toronto.png",
  "University of British Columbia":
    "/images/success/universities/University-of-British-Columbia.png",
  "Carnegie Mellon University":
    "/images/success/universities/Carnegie-Mellon-University.png",
  "McGill University":
    "/images/success/universities/McGill-University-logo.png",
};

function LogoItem({ u, duplicate }: { u: string; duplicate: boolean }) {
  const logo = UNIVERSITY_LOGOS[u];
  return (
    <li
      title={u}
      aria-hidden={duplicate || undefined}
      className="mx-6 flex shrink-0 items-center justify-center sm:mx-9"
    >
      {logo ? (
        <span className="relative h-16 w-48 sm:h-20 sm:w-60">
          <Image
            src={logo}
            alt={u}
            fill
            sizes="256px"
            className="object-contain"
          />
        </span>
      ) : (
        <span className="whitespace-nowrap text-sm font-medium text-ink/70 sm:text-base">
          {u}
        </span>
      )}
    </li>
  );
}

export default function UniversitiesMarquee({ items }: { items: string[] }) {
  const half = Math.ceil(items.length / 2);
  const rowA = items.slice(0, half);
  const rowB = items.slice(half);

  const trackA = [...rowA, ...rowA];
  const trackB = [...rowB, ...rowB];

  return (
    <div className="as-uni group relative mt-6 select-none space-y-8 sm:mt-8 sm:space-y-12">
      <div className="as-uni-mask overflow-hidden py-1">
        <ul className="as-uni-track-a flex w-max items-center">
          {trackA.map((u, i) => (
            <LogoItem key={`a-${u}-${i}`} u={u} duplicate={i >= rowA.length} />
          ))}
        </ul>
      </div>

      <div className="as-uni-mask overflow-hidden py-1">
        <ul className="as-uni-track-b flex w-max items-center">
          {trackB.map((u, i) => (
            <LogoItem key={`b-${u}-${i}`} u={u} duplicate={i >= rowB.length} />
          ))}
        </ul>
      </div>

      <style>{`
        .as-uni-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
        }
        .as-uni-track-a {
          animation: as-uni-left 42s linear infinite;
          will-change: transform;
        }
        .as-uni-track-b {
          animation: as-uni-right 42s linear infinite;
          will-change: transform;
        }
        /* pause both rows on hover */
        .as-uni:hover .as-uni-track-a,
        .as-uni:hover .as-uni-track-b {
          animation-play-state: paused;
        }
        @keyframes as-uni-left {
          to { transform: translateX(-50%); }
        }
        @keyframes as-uni-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .as-uni-mask { overflow-x: auto; }
          .as-uni-track-a, .as-uni-track-b { animation: none; }
        }
      `}</style>
    </div>
  );
}
