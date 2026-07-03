"use client";

import { SITE } from "@/lib/Constants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 600));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-5 right-5 z-40 flex flex-col gap-3"
        >
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl shadow-black/30 transition-transform duration-200 hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`tel:${SITE.phone}`}
            aria-label="Call us"
            className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-xl text-navy-900 shadow-xl shadow-black/30 transition-transform duration-200 hover:scale-110"
          >
            <FaPhoneAlt />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
