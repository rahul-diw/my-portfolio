import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectSlider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="
              group
              relative
              w-full
              h-[420px]
              sm:h-[520px]
              lg:h-[620px]
              overflow-hidden
              rounded-[28px]
              border
             border-white/10
              bg-[#090909]
              shadow-[0_30px_80px_rgba(0,0,0,.45)]
              transition-all
              duration-700
             hover:border-cyan-400/30
              "
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-[2500ms]
                      ease-out
                      group-hover:scale-110
                      "
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/20" />

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="
                      absolute
                      left-5
                      top-1/2
                      -ztranslate-y-1/2
                      w-12
                      h-12
                      flex 
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.06]
                      backdrop-blur-2xl
                      text-white
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      hover:scale-110
                      hover:border-cyan-400/50
                      hover:bg-cyan-500/10
                      hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
                      z-30
                      "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/70 border border-neutral-700/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-800 hover:scale-110 z-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    currentIndex === idx
                      ? "w-8 h-2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,.8)]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/60"
                  }
                  `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
