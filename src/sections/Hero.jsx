import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

// Pehle se chal rahe imports ke thik niche lagao:
import PicReal from "../assets/Rahul-pic1.png"; // White background professional pic
import PicAvatar from "../assets/Rahul-pic2.png"; // Cartoon/Vector look pic

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Max width increased to 1440px and vertical padding increased to pt-40 pb-20 for a grander size feel
    <section
      id="home"
     className="relative min-h-screen md:min-h-[115vh] pt-28 md:pt-50 pb-20 flex flex-col justify-between items-center px-5 md:px-12 max-w-[1440px] mx-auto overflow-hidden"
    >
      {/* Grid split adjusted to 6 & 6 for maximum horizontal span and layout size expansion */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center my-auto">
        {/* Left Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        className="order-2 md:order-1 md:col-span-6 space-y-7 text-center md:text-left md:-translate-y-12"
        >
          {/* 1. WELCOME BADGE - Dark Gray Slide from Left on Hover */}

          <div className="flex justify-center md:justify-start">
          <div
            className="group relative -top-8 inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-500 rounded-full text-xs font-semibold tracking-wide border border-gray-200/60 shadow-sm cursor-pointer overflow-hidden transition-colors duration-300 hover:text-white relative -top-8"
          >
            {/* Sliding Background Cover */}
            <span className="absolute inset-0 w-full h-full bg-[#333333] scale-x-0 origin-left transition-normal duration-500 ease-out group-hover:scale-x-100 z-0"></span>
            {/* Content stays on top */}
            <span className="relative z-20 h-full items-baseline gap-2">
              ✨ Welcome to my portfolio
            </span>
          </div>
          </div>

          {/* Name Panel - Colors swapped perfectly */}
          <div className="space-y-2">
            {/* "Hi, I'm" now gets the bold dark look */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-800">
              Hi, I'm
            </h1>

            {/* "Rahul Diwakar" now gets the stylish soft gray look */}
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold tracking-tight text-gray-600 relative inline-block group cursor-pointer pb-1">
              {personalInfo.name}

              {/* Bottom underline accent color adjusted to match the gray look smoothly */}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gray-700 transition-all duration-500 ease-out group-hover:w-full"></span>
            </h1>
          </div>

          {/* Subheading Tagline */}
          <div className="relative py-1 inline-block">
            <p className="text-base md:text-xl font-normal text-gray-500 tracking-tight md:border-l-4 border-gray-900 md:pl-5 leading-snug">
              Building scalable web apps & exploring full-stack development
            </p>
          </div>

          {/* Summary Text */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl text-justify font-medium">
            I'm an MCA graduate passionate about building modern, scalable web
            applications. I enjoy converting ideas into polished products with
            clean interfaces and seamless user experiences.
          </p>

          {/* BUTTONS WITH SLIDING HOVER EFFECTS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-3">
            {/* 2. VIEW MY WORK BUTTON - White Slide from Left on Hover (Opposite Effect) */}
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 bg-[#333333] text-white px-7 py-3.5 rounded-full font-medium overflow-hidden border border-transparent hover:border-gray-300 transition-colors duration-300 hover:text-black text-sm tracking-wide shadow-sm"
            >
              {/* Sliding White Background */}
              <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-left transition-transform duration-600 ease-out group-hover:scale-x-100 z-0"></span>

              {/* Real Text Content on top layer */}
              <span className="w-full sm:w-auto relative z-10 flex items-center gap-3">
                View My Work
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>

            {/* 3. LET'S CONNECT BUTTON - Dark Gray Slide from Left on Hover */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 border border-gray-300 bg-white text-gray-700 px-7 py-3.5 rounded-full font-medium overflow-hidden transition-colors duration-300 hover:text-white text-sm tracking-wide shadow-sm"
            >

              {/* Sliding Dark Gray Background */}
              <span className="absolute inset-0 w-full h-full bg-[#333333] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>

              {/* Real Text Content on top layer */}
              <span className="w-full sm:w-auto relative z-10 flex items-center gap-3">
                Let's Connect
                <svg
                  className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 20 25"
                  stroke="currentColor"
                  strokeWidth={2} 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Social Links Block in Hero Section */}
          <div className="flex justify-center md:justify-start items-center gap-4 mt-6">

            {/* 1. GITHUB ICON - Circle border reveal on hover */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-transparent hover:border-gray-200 bg-transparent text-gray-700 hover:text-black transition-all duration-300 ease-out hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            {/* 2. LINKEDIN ICON - Circle border reveal on hover */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-transparent hover:border-gray-200 bg-transparent text-gray-700 hover:text-black transition-all duration-300 ease-out hover:scale-110"
            >

              <svg
                className="w-[22px] h-[22px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >

                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right Content Side - Balanced col-span-6 for scaling up the terminal block and container alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
         className="order-1 md:order-2 md:col-span-6 flex flex-col items-center justify-center gap-8 md:gap-14 relative w-full"
        >

          {/* 3D PROFILE PICTURE FLIP CONTAINER - Size Boosted to w-80 h-80 */}
          <div className="flex justify-center items-center mb-8 md:mb-0">

            {/* Perspective Wrapper - Width and Height bumped to w-80 h-80 */}
            <div
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 group/card cursor-pointer"
              style={{ perspective: "1000px" }}
            >

              {/* Inner Card Layer */}
              <div
                className="relative w-full h-full transition-transform duration-700 group-hover/card:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >

                {/* FRONT SIDE - Real Pic */}
                <div
                  className="absolute inset-0 w-full h-full rounded-full shadow-lg bg-transparent overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={PicReal}
                    alt="Rahul Diwakar Real"
                    className="w-full h-full object-cover object-center scale-[1.08]"
                  />
                </div>

                {/* BACK SIDE - Avatar Pic */}
                <div
                  className="absolute inset-0 w-full h-full rounded-full shadow-lg bg-transparent overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <img
                    src={PicAvatar}
                    alt="Rahul Diwakar Avatar"
                    className="w-full h-full object-cover object-center scale-[1.08]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CODE TERMINAL BLOCK - Max stretched to fill its 6-column boundary beautifully */}
          <div className="w-full max-w-2xl bg-[#FBFBFB] text-[#333333] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.04)] overflow-hidden font-mono text-[11px] sm:text-[13px] md:text-[14px] border border-gray-200/60 transform hover:-translate-y-1 transition-all duration-300">
          
            {/* Top Window Bar */}
            <div className="bg-[#F3F3F3] px-6 py-4 flex items-center gap-2 border-b border-gray-200/80">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="text-[13px] font-normal text-gray-600 font-mono ml-2 tracking-wide">
                developer.ts
              </span>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-6 md:p-8 whitespace-pre overflow-hidden text-left leading-loose select-none bg-[#FAFAFA]">
              <code className="block">
                <span className="text-blue-600 font-bold">const</span>{" "}
                <span className="text-purple-600">developer</span> = &#123;
                <br />
                &nbsp;&nbsp;<span className="text-teal-600">title</span>:{" "}
                <span className="text-amber-600">"{personalInfo.name}"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-teal-600">role</span>:{" "}
                <span className="text-amber-600">"Full-Stack Developer"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-teal-600">Degree</span>:{" "}
                <span className="text-amber-600">"MCA"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-teal-600">
                  experience
                </span>:{" "}
                <span className="text-amber-600">
                  "Real-world Projects (Individual)"
                </span>
                ,
                <br />
                &nbsp;&nbsp;<span className="text-teal-600">
                  projects
                </span>: <span className="text-amber-600">"11+"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-teal-600">skills</span>: [
                <span className="text-amber-600">"React.js"</span>,{" "}
                <span className="text-amber-600">"Next.js"</span>,{" "}
                <span className="text-amber-600">"Node.js"</span>,{" "}
                <span className="text-amber-600">"MongoDB"</span>,{" "}
                <span className="text-amber-600">"MySQL"</span>,{" "}
                <br/>
                <span className="text-amber-600">"Git"</span>,{" "}
                <span className="text-amber-600">"GitHub"</span>],
                  
                <br />
                &nbsp;&nbsp;<span className="text-teal-600">
                  dsaProblems
                </span>: <span className="text-amber-600">"240+ Solved"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-teal-600">passion</span>:{" "}
                <span className="text-amber-600">
                  "Building scalable Full stack Projects"
                </span>
                <br />
                &#125;;
              </code>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Unchanged original arrow down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-full flex justify-center pt-6 mt-10 md:mt-20"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs text-gray-400 hover:text-black transition-colors font-medium tracking-widest uppercase cursor-pointer group"
        >
          {/* <span className="group-hover:text-black transition-colors">Scroll Down</span> */}
          <div className="relative w-6 h-8 flex flex-col items-center overflow-visible">
            <svg
              className="absolute top-0 w-6 h-6 text-gray-400 group-hover:text-black transition-colors animate-line-slide"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
            </svg>
            <svg
              className="absolute bottom-0 w-5 h-5 text-gray-400 group-hover:text-black transition-colors animate-bow-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 13l-7 7-7-7"
              />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
