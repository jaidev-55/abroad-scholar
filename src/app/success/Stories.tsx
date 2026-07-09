"use client";

import { useState } from "react";
import { IoPlayCircle, IoClose } from "react-icons/io5";
import { PiTimerBold } from "react-icons/pi";

export default function Stories({
  videos,
}: {
  videos: { videoId: string; label: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {videos.slice(0, 8).map((v, i) => {
        const id = `${v.videoId}-${i}`;
        return (
          <div
            key={id}
            className="relative aspect-9/14 overflow-hidden rounded-2xl bg-ink shadow-card"
          >
            {active === id ? (
              <>
                <iframe
                  src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={`Student story — ${v.label}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-2 top-2 z-10 grid h-7 w-7 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                  aria-label="Close video"
                >
                  <IoClose className="h-4 w-4" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setActive(id)}
                className="group absolute inset-0"
                aria-label={`Play story — ${v.label}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
                  alt={`Student story — ${v.label}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/10" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25 sm:h-14 sm:w-14">
                    <IoPlayCircle className="h-8 w-8 text-white drop-shadow sm:h-9 sm:w-9" />
                  </span>
                </span>
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-lg bg-gold-400 px-2.5 py-1 text-[11px] font-bold text-ink shadow-sm">
                  🎓 {v.label}
                </span>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                  <PiTimerBold className="h-3 w-3 text-white/70" />
                  Watch
                </span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
