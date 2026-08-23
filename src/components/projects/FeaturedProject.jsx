import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import ProjectSlider from "./ProjectSlider";
import ProjectStats from "./ProjectStats";
import useScrollReveal from "../../animations/useScrollReveal";
import { FEATURED_SCROLL } from "../../animations/scrollEffects";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Safe Github SVG Component (Exports issue avoid karne ke liye)

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export default function FeaturedProject({ project, variants }) {
  const reveal = useScrollReveal(FEATURED_SCROLL);
  const sectionRef = useRef(null);

  const rotateX = useTransform(scrollYProgress, [0, 1], [65, 0]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.78, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [220, 0]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const blur = useTransform(scrollYProgress, [0, 1], [18, 0]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });
  return (
    <motion.div
      ref={sectionRef}
      className="relative preserve-3d"
      style={{
        rotateX,
        scale,
        y,
        opacity,
        filter: blur.to((v) => `blur(${v}px)`),
        transformPerspective: 2200,
        transformStyle: "preserve-3d",
        transformOrigin: "center top",
      }}
    >
      {/* Glass Reflection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

        <div className="absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute -bottom-52 -right-52 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[160px]" />

        <div className="absolute inset-[1px] rounded-[35px] border border-white/[0.04]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="lg:col-span-7 w-full"
        >
          <ProjectSlider images={project.images} title={project.title} />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-300 text-[11px] font-semibold tracking-[0.25em] uppercase backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {project.year}
              </span>
            </div>

            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[0.95] trackking-[-0.04em] bg-gradient-to-r fron-white via-white to-neutral-500 bg-clip-textbg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]">
              {project.title}
            </h3>

            <p className="mt-2 max-w-xl text-[15px] sm:text-base text-neutral-400 font-light traking-[0.01em]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="group relative flex items-center gap-2 px-4 py-2 rounded-full border boreder-cyan-500/20 bg-gradient-to-r from-white/[0.05] to-white/[0.02] backdrop-blur-xl text-[11px] font-medium tracking-wide text-gray-200 overflow-hidden duration-500 hover;-traslate-y-1 hover:scale-105 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] cursor-default"
                >
                  <Zap className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <ProjectStats stats={project.stats} />

          <div className="flex items-center gap-4 pt-2">
            <a
              href={project.githubUrl}
              className="group realtive overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-white/10  bg-white/[0.04] backdrop-blur-xl text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>

            <a
              href={project.liveUrl}
              className="group/btn relative overflow-hidden flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold shadow-[0_15px_40px_rgba(34,211,238,0.28)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03]"
            >
              <span>Live Application</span>
              <ArrowRight className="w-4 h-4 transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
