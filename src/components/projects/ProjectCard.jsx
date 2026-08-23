import React, { useState } from "react";
import { motion } from "framer-motion";

// import { cardReveal, floatingAnimation } from "../../animations/projectMotion";

export default function ProjectCard({
  badge,
  title,
  description,
  images,
  currentSlide,
  onSelectSlide,
  techs,
  github,
  live,
  index,
  activeCard,
  setActiveCard,
}) {
  const [hovered, setHovered] = useState(false);

  return (
<motion.div
  viewport={{ once: true, amount: 0.2 }}

  onHoverStart={() => {
    setHovered(true);
    setActiveCard(index);
  }}

  onHoverEnd={() => {
    setHovered(false);
    setActiveCard(null);
  }}
animate={{
  opacity:
    activeCard === null || activeCard === index
      ? 1
      : 0.55,

  scale:
    activeCard === index
      ? 1.02
      : 1,
}}

transition={{
  duration: 0.35,
}}
      className="group relative overflow-hidden rounded-[30px] border border-cyan-500/10 bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#050505] backdrop-blur-2xl hover:border-cyan-400/40"
    >
      <motion.div
  transition={{
    duration: 9,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
      {/* Top Border Glow Bar */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Browser Frame */}
      <div className="absolute top-0 left-0 right-0 h-9 bg-[#0f0f12] border-b border-white/10 flex items-center justify-between px-4 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
        </div>

        <div className="h-2 w-28 rounded-full bg-white/10"></div>

        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
        </div>
      </div>

      <motion.div
        animate={{
          opacity: hovered ? 0.9 : 0.3,
          scale: hovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -left-24 -top-24 w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none"
      />

      {/* Image Slider */}
      <div className="relative h-[280px] sm:h-[320px] overflow-hidden border-b border-white/10 bg-black">
        <div
          className="w-full h-full flex transition-transform duration-700 ease-in-out bg-[#050505]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images &&
            images.map((img, idx) => (
              <div
                key={idx}
                className="w-full h-full flex-shrink-0 relative bg-black/20 flex items-center justify-center p-4"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-b-xl pt-9 transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-125"
                />
              </div>
            ))}
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        >
          <div
            className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl animate-[shine_2s_linear_infinite]"
          />
        </div>

        {/* Dynamic Dots */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/80 px-3 py-1.5 rounded-full border border-white/10 z-10 backdrop-blur-md">
          {images &&
            images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectSlide(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? "w-5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          <span className="inline-block text-[10px] font-mono tracking-wider text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-full uppercase mb-3 font-medium">
            {badge}
          </span>
          <h4 className="text-2xl font-black leading-tight tracking-[-0.03em] text-white mb-3 transition-all duration-500 group-hover:text-cyan-300">
            {title}
          </h4>
          <p className="text-sm text-gray-400 leading-7 font-light tracking-[0.01em] mb-7 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {techs &&
              techs.map((tech, idx) => (
                <span
                  key={idx}
                  className="group/tag px-3.5 py-1.5 rounded-full border border-cyan-500/15 bg-cyan-500/[0.05] text-[11px] font-medium tracking-wide text-gray-200 transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,.15)]"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-3 pt-6 border-t border-white/10">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0112 6.84a9.5 9.5 0 012.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.85v2.74c0 .27.18.58.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
            Github
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,.45)] transition-all duration-300"
          >
            Live Demo
            <svg
              className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5h5m0 0v5m0-5L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
}
