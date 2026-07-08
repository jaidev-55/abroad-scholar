"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DESTINATIONS } from "@/lib/Constants";

gsap.registerPlugin(ScrollTrigger);

type Setter = ((value: number) => void) | null;
type Dest = (typeof DESTINATIONS)[number];

function DestinationCard({ d }: { d: Dest }) {
  const link = useRef<HTMLAnchorElement>(null);
  const spot = useRef<HTMLSpanElement>(null);
  const setRotX = useRef<Setter>(null);
  const setRotY = useRef<Setter>(null);
  const setSpotX = useRef<Setter>(null);
  const setSpotY = useRef<Setter>(null);
  const reduce = useRef(false);

  useGSAP(
    () => {
      reduce.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce.current) return;

      setRotX.current = gsap.quickTo(link.current, "rotationX", {
        duration: 0.5,
        ease: "power3.out",
      });
      setRotY.current = gsap.quickTo(link.current, "rotationY", {
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.set(spot.current, { xPercent: -50, yPercent: -50 });
      setSpotX.current = gsap.quickTo(spot.current, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      setSpotY.current = gsap.quickTo(spot.current, "y", {
        duration: 0.4,
        ease: "power3.out",
      });
    },
    { scope: link },
  );

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce.current || !link.current) return;
    const b = link.current.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width;
    const py = (e.clientY - b.top) / b.height;
    setRotY.current?.(gsap.utils.mapRange(0, 1, -6.5, 6.5, px));
    setRotX.current?.(gsap.utils.mapRange(0, 1, 5, -5, py));
    setSpotX.current?.(e.clientX - b.left);
    setSpotY.current?.(e.clientY - b.top);
  }
  function onEnter() {
    if (reduce.current) return;
    gsap.to(link.current, { y: -6, duration: 0.35, ease: "power3.out" });
    gsap.to(spot.current, { opacity: 1, duration: 0.3 });
  }
  function onLeave() {
    if (reduce.current) return;
    setRotX.current?.(0);
    setRotY.current?.(0);
    gsap.to(link.current, { y: 0, duration: 0.5, ease: "power3.out" });
    gsap.to(spot.current, { opacity: 0, duration: 0.4 });
  }

  return (
    <div className="dest-card" style={{ perspective: "900px" }}>
      <Link
        ref={link}
        href={`/countries/${d.slug}`}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative flex items-center gap-4 overflow-hidden rounded-3xl border border-line bg-paper p-5 shadow-card transition-colors duration-300 hover:border-blue-300 hover:shadow-soft"
      >
        {/* cursor-following spotlight */}
        <span
          ref={spot}
          className="pointer-events-none absolute left-0 top-0 h-44 w-44 rounded-full bg-blue-400/25 opacity-0 blur-2xl"
        />
        {/* top sheen on hover */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* flag tile */}
        <span className="relative shrink-0">
          <span className="absolute inset-0 -z-10 rounded-2xl bg-blue-400/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-tint text-3xl shadow-card ring-1 ring-line transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            {d.flag}
          </span>
        </span>

        {/* text */}
        <span className="relative min-w-0 flex-1">
          <span className="block font-display text-lg font-bold text-ink">
            {d.country}
          </span>
          <span className="mt-0.5 block text-sm text-slate">{d.hook}</span>
        </span>

        {/* arrow */}
        <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}

const Destinations = () => {
  const root = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-head]", {
        autoAlpha: 0,
        y: 22,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });

      gsap.from(".dest-card", {
        autoAlpha: 0,
        y: 36,
        duration: 0.6,
        ease: "power2.out",
        stagger: { each: 0.06 },
        scrollTrigger: { trigger: grid.current, start: "top 85%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-paper py-20"
    >
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-gold-300/20 blur-[120px]" />

      <div ref={root} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div data-head className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Where you can go
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Eleven destinations, one trusted guide
            </h2>
          </div>
          <a
            data-head
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
          >
            Not sure which fits you? Ask us
            <FaArrowRight className="text-xs" />
          </a>
        </div>

        <div
          ref={grid}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DESTINATIONS.map((d) => (
            <DestinationCard key={d.country} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
