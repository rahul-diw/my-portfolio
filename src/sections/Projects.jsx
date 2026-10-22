import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "framer-motion";

import { projectsData } from "../data/projectsData";

import { useMotionValue, useSpring} from "framer-motion";

import BackgroundEffects from "../components/projects/BackgroundEffects";
import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectCard from "../components/projects/ProjectCard";
import { cardReveal, staggerContainer } from "../animations/projectMotion";
import { floatingVariants } from "../animations/floatingVariants";

function ScrollRollCard({ children, index }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  /*
    Card viewport mein neeche se enter karega
    → center mein flat hoga
    → upar jaate waqt cylinder ke andar curl hoga
  */

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [32, 16, 0, -16, -32]
  );

  const translateZ = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-80, 30, 140, 30, -80]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.88, 0.96, 1, 0.96, 0.88]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.3, 0.7, 0.88, 1],
    [0.35, 0.65, 1, 1, 0.65, 0.35]
  );

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 100,
    damping: 25,
    mass: 0.7,
  });

  const smoothZ = useSpring(translateZ, {
    stiffness: 100,
    damping: 25,
    mass: 0.7,
  });

  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 25,
    mass: 0.7,
  });

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: smoothRotateX,
        translateZ: smoothZ,
        scale: smoothScale,
        opacity,
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Full Stack", "JavaScript"];

  const [mainSlide, setMainSlide] = useState(0);
  const [warehouseSlide, setWarehouseSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);
  const [carSlide, setCarSlide] = useState(0);
  const [movieSlide, setMovieSlide] = useState(0);

  const [activeCard, setActiveCard] = useState(null);

  const ref = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
  target: ref,
  offset: ["start start", "end end"],
});

const sectionRef = useRef(null);

const { scrollYProgress: bgProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
});


const cardRef = useRef(null);

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
  stiffness: 140,
  damping: 20,
});

const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
  stiffness: 140,
  damping: 20,
});

const handleMouseMove = (e) => {
  const rect = cardRef.current.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  mouseX.set(x - 0.5);
  mouseY.set(y - 0.5);
};

const resetMouse = () => {
  mouseX.set(0);
  mouseY.set(0);
};

  const isInView = useInView(ref, {once: true,amount: 0.15,});

  const featuredScale = useTransform(sectionProgress,[0, 0.18],[1, 0.9]);

const featuredRotateX = useTransform(sectionProgress,[0, 0.18],[0, 12]);

const featuredY = useTransform(sectionProgress,[0, 0.18],[0, -120]);

const featuredOpacity = useTransform(sectionProgress,[0.08, 0.22],[1, 0]);

const featuredBlur = useTransform(sectionProgress,[0.1, 0.22],[0, 20]);

const bgScale = useTransform(bgProgress,[0,1],[1.18,1]);

const bgOpacity = useTransform(bgProgress,[0,0.3,1],[0,1,1]);

const bgRotate = useTransform(bgProgress,[0,1],[6,0]);

  useEffect(() => {
    const mainTimer = setInterval(() => {
      setMainSlide((prev) => (prev + 1) % projectsData.smartTask.length);
    }, 2500);

    const warehouseTimer = setInterval(() => {
      setWarehouseSlide((prev) => (prev + 1) % projectsData.warehouse.length);
    }, 2500);

    const galleryTimer = setInterval(() => {
      setGallerySlide((prev) => (prev + 1) % projectsData.gallery.length);
    }, 2500);

    const carTimer = setInterval(() => {
      setCarSlide((prev) => (prev + 1) % projectsData.sportsCar.length);
    }, 2500);

    const movieTimer = setInterval(() => {
      setMovieSlide((prev) => (prev + 1) % projectsData.movie.length);
    }, 2500);

    return () => {
      clearInterval(mainTimer);
      clearInterval(warehouseTimer);
      clearInterval(galleryTimer);
      clearInterval(carTimer);
      clearInterval(movieTimer);
    };
  }, []);

  // ... baaki aapka bilkul same code rahega

  return (
    <motion.section
     ref={cardRef}

onMouseMove={handleMouseMove}

onMouseLeave={resetMouse}

style={{
    rotateX,
    rotateY,
    transformPerspective:1200,
}}
      id="projects"
      className="relative w-full py-28 bg-transparent text-white flex flex-col items-center px-4 sm:px-6 md:px-12 font-sans overflow-hidden"
    >
      <BackgroundEffects />

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          filter: "blur(12px)",
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
            : {}
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Hero-Matching Large Header Section */}
        <div className="flex flex-col items-center text-center mb-16 z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400"></span>
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-400 font-mono font-bold">
              FEATURED WORK
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-400"></span>
          </div>

          {/* Large Bold Heading matching Hero/About scale */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 uppercase">
            PROJECTS ARCHIVE<span className="text-cyan-400">.</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-light tracking-wide leading-relaxed">
            Production-ready applications engineered with scalable
            architectures, modern tech stacks, and refined user interfaces.
          </p>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
            : {}
        }
        transition={{
          delay: 0.18,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex items-center justify-center gap-2 sm:gap-3 mb-20 bg-[#0a0a0c]/80 p-2 rounded-full border border-white/10 backdrop-blur-2xl z-10 shadow-2xl"
      >
        {tabs.map((tab) => (
          <motion.div
            key={tab}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.25 + tabs.indexOf(tab) * 0.08,
              duration: 0.45,
            }}
          >
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-medium tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-black font-bold shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-105"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-14 z-10">
        {/* Main Featured Card - Enlarged Dimensions */}
        {(activeTab === "All" || activeTab === "Full Stack") && (
          <motion.div
            variants={cardReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="group relative w-full grid grid-cols-1 lg:grid-cols-12 bg-[#0c0c0e]/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] hover:-translate-y-1"
          >
            {/* Top Glow Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image Slider Side (Bigger Height) */}
            <div className="lg:col-span-7 h-[320px] sm:h-[420px] lg:h-[500px] bg-black/40 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
              <div
                className="w-full h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${mainSlide * 100}%)` }}
              >
                {projectsData.smartTask.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full flex-shrink-0 relative bg-black/20 flex items-center justify-center p-4 sm:p-6"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute bottom-6 left-6 bg-black/80 border border-white/10 backdrop-blur-md text-xs text-gray-300 px-4 py-2 rounded-xl font-mono tracking-wide shadow-xl">
                      {img.alt}
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Dots Indicator */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20 bg-black/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                {projectsData.smartTask.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === mainSlide
                        ? "w-6 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Main Content Side (Expanded Padding & Font Sizes) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 rounded-full uppercase font-medium">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    FEATURED ARCHITECTURE
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 group-hover:text-cyan-300 transition-colors">
                  Smart Task Administration Platform
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8">
                  Architected a dark-themed project coordination application
                  featuring an interactive Kanban Board with drag-and-drop
                  states to streamline team workflows. Integrated workflow
                  analytics donut charts and an encrypted media pipeline.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Next.js v14",
                    "Node.js",
                    "Express",
                    "Tailwind",
                    "MongoDB",
                    "JWT",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-8 text-xs sm:text-sm font-mono border-t border-white/10 pt-6 text-gray-400">
                <a
                  href="https://github.com/rahul-diw/Smart-Task-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group/link"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="group-hover/link:underline">
                    SOURCE CODE
                  </span>
                </a>
                <a
                  href="https://smart-task-platform-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link font-semibold"
                >
                  <span className="group-hover/link:underline">LIVE DEMO</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Lower Grid Projects - Enlarged Grid Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={staggerContainer}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
       className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-20"
       style={{
  perspective: "2800px",
  transformStyle: "preserve-3d",
}}
        >
{/* Warehouse */}
{(activeTab === "All" || activeTab === "Full Stack") && (
  <ScrollRollCard
    index={0}
  >
    <ProjectCard
      index={0}
      activeCard={activeCard}
      setActiveCard={setActiveCard}
      badge="FULL STACK"
      title="Multi Warehouse Inventory Platform"
      description="Full-stack supply ecosystem managing product workflows, stock tracking, and supplier data across geographic locations with automated reorder triggers."
      images={projectsData.warehouse}
      currentSlide={warehouseSlide}
      onSelectSlide={setWarehouseSlide}
      techs={["React.js", "Node.js", "Express.js", "MySQL"]}
      github="https://github.com/rahul-diw/multi-warehouse-system"
      live="https://multi-warehouse-system.vercel.app/"
    />
  </ScrollRollCard>
)}

          {/* Gallery */}
          {(activeTab === "All" || activeTab === "Full Stack") && (
            <ScrollRollCard
              index={1}
            >
            <ProjectCard
            index={1}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
              badge="FULL STACK"
              title="Online Web Gallery Application"
              description="High-performance web gallery optimized for fluid image layout distributions, instant multi-category filtering, and Cloudinary media pipelines."
              images={projectsData.gallery}
              currentSlide={gallerySlide}
              onSelectSlide={setGallerySlide}
              techs={["React.js", "Node.js", "Tailwind CSS", "MongoDB"]}
              github="#"
              live="#"
            />
            </ScrollRollCard>
          )}

          {/* Sports Car */}
          {(activeTab === "All" || activeTab === "JavaScript") && (
            <ScrollRollCard
             index={2}
            >
            <ProjectCard
            index={2}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
              badge="JAVASCRIPT"
              title="Immersive Sports Car Hub"
              description="Interactive automotive portal featuring cinematic trailer video integrations, specifications panels, and dynamic fleet catalogs."
              images={projectsData.sportsCar}
              currentSlide={carSlide}
              onSelectSlide={setCarSlide}
              techs={["JavaScript", "HTML5", "CSS3", "UI Animations"]}
              github="https://github.com/rahul-diw/Sports-Cars-Website"
              live="https://diwa-sports-car.netlify.app/"
            />
            </ScrollRollCard>
          )}

          {/* Movie */}
          {(activeTab === "All" || activeTab === "JavaScript") && (
            <ScrollRollCard
           index={3}
          >
            <ProjectCard
            index={3}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
              badge="JAVASCRIPT"
              title="Modern Movie Platform"
              description="Engineered media platform showcasing a responsive blurred backdrop interface, depth effect layouts, and automated theater carousels."
              images={projectsData.movie}
              currentSlide={movieSlide}
              onSelectSlide={setMovieSlide}
              techs={["JavaScript", "HTML5", "CSS3", "DOM API"]}
              github="https://github.com/rahul-diw/Animated-Movie-Website"
              live="https://diwa-modern-movie-website.netlify.app/"
            />
            </ScrollRollCard>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}


