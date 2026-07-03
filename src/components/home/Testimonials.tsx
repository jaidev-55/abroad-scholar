"use client";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { IoStarSharp, IoPlayCircle, IoCloseCircle } from "react-icons/io5";
import { PiQuotesBold, PiVideoFill, PiTimerBold } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const textReviews = [
  {
    name: "Rakshitha",
    achievement: "IELTS Band 8.0",
    quote:
      "Grateful to Abroad Scholars for guiding me to an overall 8.0 in IELTS! Their expert trainers and tailored mentoring truly set them apart. If you're aiming for top scores, they're the best choice!",
  },
  {
    name: "Dyana Pariskha",
    achievement: "₹7L Scholarship",
    quote:
      "Dhyana from Abroad Scholars guided me throughout the process and helped me secure admission to the University of Dundee along with a ₹7L scholarship.",
  },
  {
    name: "Monish Kumar",
    achievement: "GRE Success",
    quote:
      "Monish from Abroad Scholars provided excellent training and guidance for my GRE preparation, which helped me achieve a strong score.",
  },
  {
    name: "Jagadev",
    achievement: "GRE Top Score",
    quote:
      "Jagadev from Abroad Scholars supported me with focused GRE preparation and valuable strategies that led to great results.",
  },
];

const videoTestimonials = [
  { videoId: "fgIQOMLZHBU", duration: "0:58", score: "Student Review" },
  { videoId: "hDNY-53db_8", duration: "0:35", score: "IELTS 7.0" },
  { videoId: "2QPHKRa8N64", duration: "0:47", score: "IELTS 7.0" },
  { videoId: "-LcoHDQ_Vyo", duration: "0:51", score: "IELTS 8.0" },
  { videoId: "AVOvvyGAUTs", duration: "1:02", score: "IELTS 8.0" },
  { videoId: "R7ThSdxJmao", duration: "0:59", score: "IELTS 8.0" },
  { videoId: "VGGo88MmhcM", duration: "0:54", score: "IELTS 8.0" },
];

const Stars = ({ size = "sm" }: { size?: "sm" | "md" }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <IoStarSharp
        key={i}
        className={`${
          size === "md" ? "w-4 h-4 sm:w-5 sm:h-5" : "w-3.5 h-3.5 sm:w-4 sm:h-4"
        } text-gold-400`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="testimonials" className="relative bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-16 sm:py-20">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 sm:mb-5">
            <PiQuotesBold className="w-3.5 h-3.5 text-blue-700" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
              Student Stories
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink leading-tight tracking-tight">
            Real Students,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-700">Real Results.</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 sm:h-2.5 bg-blue-600/10 rounded-sm -skew-x-2" />
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base text-slate leading-relaxed">
            Don&apos;t just take our word for it — watch real students share
            their IELTS success stories trained with Abroad Scholars.
          </p>

          {/* Google Rating Badge */}
          <div className="mt-5 sm:mt-6 flex justify-center">
            <a
              href="https://www.google.com/maps/place/Abroad+Scholar/@13.0849714,80.2139796,16z/data=!4m6!3m5!1s0x3a5265e5507597a1:0xa3a181aaabcd9fe7!8m2!3d13.0849793!4d80.2162509!16s%2Fg%2F11x2n066db?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-paper border border-line shadow-card hover:shadow-soft hover:border-blue-200 transition-all duration-200 cursor-pointer"
            >
              <FcGoogle className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-ink">
                    4.9
                  </span>
                  <Stars size="md" />
                </div>
                <span className="text-[11px] sm:text-xs text-slate font-medium">
                  Based on 19+ Google Reviews
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* ══ Video testimonials — horizontal scroll ══ */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <div className="flex items-center gap-2">
              <PiVideoFill className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
              <h3 className="font-display text-sm sm:text-base font-bold text-ink">
                Video Stories
              </h3>
              <span className="hidden sm:inline-flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-semibold text-blue-700">
                {videoTestimonials.length} videos
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate/70">
              Swipe to see more →
            </span>
          </div>

          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 -mx-3 px-3 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-hide">
            {videoTestimonials.map((video, i) => (
              <div
                key={i}
                className="shrink-0 w-45 sm:w-52.5 lg:w-57.5 snap-start"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-ink aspect-9/14 group">
                  {activeVideo === `${video.videoId}-${i}` ? (
                    <>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={`Student Testimonial — ${video.score}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                      <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-2 right-2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors"
                        aria-label="Stop video"
                      >
                        <IoCloseCircle className="w-5 h-5 text-white" />
                      </button>
                    </>
                  ) : (
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={`Student achieved ${video.score}`}
                        fill
                        sizes="230px"
                        className="object-cover"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/5 z-1" />

                      {/* Duration badge — top-right */}
                      <div className="absolute top-2.5 right-2.5 z-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm">
                        <PiTimerBold className="w-3 h-3 text-white/70" />
                        <span className="text-[10px] font-semibold text-white/90">
                          {video.duration}
                        </span>
                      </div>

                      {/* Play button */}
                      <button
                        onClick={() => setActiveVideo(`${video.videoId}-${i}`)}
                        className="absolute inset-0 z-3 flex items-center justify-center cursor-pointer group/play"
                        aria-label={`Play video — ${video.score}`}
                      >
                        <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 transition-all duration-300 group-hover/play:bg-white/25 group-hover/play:scale-110">
                          <IoPlayCircle className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-lg" />
                        </span>
                      </button>

                      {/* Bottom info — score badge */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 z-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-gold-400 text-[10px] sm:text-[11px] font-bold text-ink shadow-sm">
                          🎓 {video.score}
                        </span>
                        <p className="mt-1.5 text-white/50 text-[10px]">
                          Trained with Abroad Scholars
                        </p>
                      </div>

                      {/* Inner border */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-white/10 pointer-events-none z-1" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Text reviews grid ══ */}
        <div>
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <RiDoubleQuotesL className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
            <h3 className="font-display text-sm sm:text-base font-bold text-ink">
              Written Reviews
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {textReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex cursor-pointer items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-linear-to-r from-gold-300 to-gold-400 text-ink text-sm sm:text-base font-bold shadow-lg shadow-gold-500/25 transition-all duration-300 hover:brightness-105 active:scale-[0.97] group"
          >
            Get Offer in 24Hrs
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="w-full h-px bg-linear-to-r from-transparent via-line to-transparent" />
    </section>
  );
};

/* ── Review card ── */
const ReviewCard = ({
  review,
}: {
  review: { name: string; achievement: string; quote: string };
}) => (
  <div className="relative bg-tint hover:bg-blue-50 border border-line hover:border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-200">
    <RiDoubleQuotesL className="w-6 h-6 sm:w-7 sm:h-7 text-blue-700/10 mb-2 sm:mb-3" />
    <Stars />
    <p className="mt-2.5 sm:mt-3 text-[12px] sm:text-[13px] text-slate leading-relaxed">
      &ldquo;{review.quote}&rdquo;
    </p>
    <div className="mt-3 sm:mt-4 pt-3 border-t border-line flex items-center justify-between">
      <div>
        <p className="font-display text-sm font-bold text-ink">{review.name}</p>
        <p className="text-[10px] sm:text-[11px] text-slate/70">Student</p>
      </div>
      <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-[10px] sm:text-[11px] font-semibold text-emerald-700">
        {review.achievement}
      </span>
    </div>
  </div>
);

export default TestimonialsSection;
