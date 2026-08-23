import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

import PicReal from "../assets/Rahul-pic1.png";
import PicAvatar from "../assets/Rahul-pic2.png";

export default function Hero() {
  const { personalInfo } = portfolioData;

  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [autoFlipping, setAutoFlipping] = useState(true);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const flip1 = setTimeout(() => {
      setIsHovered(true);
    }, 1500);

    const flip2 = setTimeout(() => {
      setIsHovered(false);
    }, 2600);

    const stop = setTimeout(() => {
      setAutoFlipping(false);
    }, 2800);

    return () => {
      clearTimeout(flip1);
      clearTimeout(flip2);
      clearTimeout(stop);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 md:px-14 pt-36 md:pt-44 pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Radial Glow */}
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-white/[0.04] blur-[180px]" />

        {/* Left Glow */}
        <div className="absolute top-40 -left-60 w-[700px] h-[700px] rounded-full bg-violet-500/[0.05] blur-[180px]" />

        {/* Right Glow */}
        <div className="absolute bottom-20 -right-60 w-[700px] h-[700px] rounded-full bg-cyan-400/[0.04] blur-[180px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.65)_100%)]" />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>
      {/* Background Glow */}

      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-white/5 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-[160px]" />

      <div className="relative max-w-[1450px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
            className="relative z-10"
          >
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
              }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-gray-300 text-xs tracking-[0.3em] uppercase mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available For Work
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.9,
              }}
              className="leading-[0.9]"
            >
              <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent font-black uppercase text-[58px] sm:text-[76px] lg:text-[96px] tracking-[-0.05em]">
                FULL STACK
              </span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-black uppercase text-[58px] sm:text-[76px] lg:text-[96px] tracking-[-0.05em]">
                DEVELOPER
              </span>
            </motion.h1>

            {/* Name */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-7"
            >
              <p className="uppercase tracking-[0.45em] text-gray-500 text-xs">
                Rahul Diwakar
              </p>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 max-w-xl text-[17px] leading-8 text-gray-400"
            >
              I build immersive full-stack applications using React, Next.js,
              Node.js and MongoDB while combining clean engineering with premium
              user experiences and modern interactive interfaces.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-5 mt-12"
            >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-white text-black px-8 py-4 font-semibold tracking-wide
              shadow-[0_20px_60px_rgba(255,255,255,.15)]
              hover:shadow-[0_20px_80px_rgba(255,255,255,.25)]
              transition-all
              duration-500"
            >
                <span className="relative z-20">View Projects →</span>

                <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-4 text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-10 mt-16"
            >
              <div>
                <h3 className="text-4xl font-bold text-white">11+</h3>

                <p className="text-gray-500 text-sm mt-2">Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">240+</h3>

                <p className="text-gray-500 text-sm mt-2">DSA Problems</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">MCA</h3>

                <p className="text-gray-500 text-sm mt-2">Post Graduate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION CONTINUES IN PART 2 */}
          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Background Glow */}

            <div className="absolute w-[620px] h-[620px] rounded-full bg-white/5 blur-[170px]" />

            {/* Floating Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[360px] h-[360px] rounded-full border border-white/10"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[430px] h-[430px] rounded-full border border-white/[0.04]"
            />

            {/* Profile Card */}

            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div
                className="relative w-[320px] h-[320px] md:w-[390px] md:h-[390px]"
                style={{
                  perspective: "1500px",
                }}
              >
                <div
                  onClick={() => {
                    if (isTouchDevice) {
                      setIsHovered(!isHovered);
                    }
                  }}
                  className={`relative w-full h-full transition-transform duration-700 ${
                    !isTouchDevice
                      ? "group-hover:[transform:rotateY(180deg)]"
                      : ""
                  }`}
                  style={{
                    transform:
                      autoFlipping || isTouchDevice
                        ? isHovered
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)"
                        : undefined,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[420px] h-[420px] rounded-full bg-white/5 blur-[120px]" />
                  </div>
                  {/* Glass Border */}

                  <div className="absolute -inset-4 rounded-full border border-white/10 backdrop-blur-xl bg-white/[0.03]" />

                  {/* Glow */}

                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl scale-110" />

                  {/* FRONT */}

                  <div
                    className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,.45)]"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <img
                      src={PicReal}
                      alt="Rahul"
                      className="w-full h-full object-cover scale-105"
                    />
                  </div>

                  {/* BACK */}

                  <div
                    className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,.45)]"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={PicAvatar}
                      alt="Rahul Avatar"
                      className="w-full h-full object-cover scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Flip Hint */}

              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-8 text-center text-xs uppercase tracking-[0.35em] text-gray-500"
              >
                {isTouchDevice ? "Tap To Flip" : "Hover To Flip"}
              </motion.div>
            </motion.div>

            {/* Floating Glass Card */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="mt-14 w-full max-w-md rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                    Current Focus
                  </p>

                  <h3 className="mt-3 text-white text-xl font-semibold">
                    Full Stack Development
                  </h3>
                </div>

                <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="mt-7 space-y-5">
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>React / Next.js</span>

                    <span>95%</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full rounded-full bg-white"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Node / MongoDB</span>

                    <span>90%</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{
                        duration: 1.7,
                      }}
                      className="h-full rounded-full bg-gray-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* PART 3 se Developer Terminal shuru hoga */}
        {/* ================= PREMIUM DEVELOPER TERMINAL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.3,
          }}
          whileHover={{
            y: -8,
          }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0B0B0C]/80 backdrop-blur-3xl shadow-[0_30px_90px_rgba(0,0,0,.45)]">
            {/* Glow */}

            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/5 blur-[120px]" />

            {/* Header */}

            <div className="relative flex items-center justify-between px-8 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500" />

                <span className="w-3 h-3 rounded-full bg-yellow-400" />

                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>

              <div className="text-gray-500 text-sm tracking-[0.25em] uppercase">
                developer.ts
              </div>
            </div>

            {/* Terminal */}

            <div className="relative p-8 md:p-10 overflow-x-auto font-mono text-[14px] leading-9">
              <div className="text-gray-500">$ npm run portfolio</div>
              <div className="mt-5 text-emerald-400">
                ✔ Portfolio Started Successfully
              </div>
              <br />
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">developer</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-white">{"{"}</span>
              <br />
              <span className="ml-8 text-cyan-300">name</span>
              <span className="text-white">:</span>{" "}
              <span className="text-amber-300">"{personalInfo.name}"</span>
              ,
              <br />
              <span className="ml-8 text-cyan-300">role</span>
              <span className="text-white">:</span>{" "}
              <span className="text-amber-300">"Full Stack Developer"</span>
              ,
              <br />
              <span className="ml-8 text-cyan-300">education</span>
              <span className="text-white">:</span>{" "}
              <span className="text-amber-300">
                "Master of Computer Applications"
              </span>
              ,
              <br />
              <span className="ml-8 text-cyan-300">experience</span>
              <span className="text-white">:</span>{" "}
              <span className="text-amber-300">"Real World Projects"</span>
              ,
              <br />
              <span className="ml-8 text-cyan-300">projects</span>
              <span className="text-white">:</span>{" "}
              <span className="text-amber-300">"11+"</span>
              ,
              <br />
              <span className="ml-8 text-cyan-300">dsaSolved</span>
              <span className="text-white">:</span>{" "}
              <span className="text-amber-300">"240+"</span>
              ,
              <br />
              <span className="ml-8 text-cyan-300">tech</span>
              <span className="text-white">:</span>{" "}
              <span className="text-white">[</span>
              <br />
              <span className="ml-12 text-amber-300">"React",</span>
              <br />
              <span className="ml-12 text-amber-300">"Next.js",</span>
              <br />
              <span className="ml-12 text-amber-300">"Node.js",</span>
              <br />
              <span className="ml-12 text-amber-300">"Express",</span>
              <br />
              <span className="ml-12 text-amber-300">"MongoDB",</span>
              <br />
              <span className="ml-12 text-amber-300">"MySQL",</span>
              <br />
              <span className="ml-12 text-amber-300">"Tailwind CSS"</span>
              <br />
              <span className="ml-8 text-white">],</span>
              <br />
              <span className="ml-8 text-cyan-300">currentlyBuilding</span>
              <span className="text-white">:</span>{" "}
              <span className="text-amber-300">"Immersive 3D Portfolio"</span>
              ,
              <br />
              <span className="ml-8 text-cyan-300">status</span>
              <span className="text-white">:</span>{" "}
              <span className="text-emerald-400">
                "Available for Opportunities"
              </span>
              <br />
              <span className="text-white">{"}"}</span>
              <br />
              <br />
              <div className="flex items-center gap-2 text-emerald-400">
                <span>$</span>

                <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-4 group">
          <span className="text-[10px] uppercase tracking-[0.45em] text-gray-500">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="w-[2px] h-14 bg-gradient-to-b from-white to-transparent"
          />
        </a>
      </motion.div>
    </section>
  );
}
