import React from "react";
import { motion } from "framer-motion";
import rahulPic from "../assets/rahul-pic3.png";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personalInfo, about } = portfolioData;

  const techStack = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js",
    "React Three Fiber",
    "REST API",
    "JWT",
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-6 md:px-14 py-32"
    >
{/* ================= PREMIUM BACKGROUND ================= */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Main Aurora */}

  <motion.div
    animate={{
      scale: [1, 1.12, 1],
      rotate: [0, 8, -8, 0],
      opacity: [0.18, 0.28, 0.18],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-1/2 top-[-18%] -translate-x-1/2 w-[1300px] h-[1300px] rounded-full blur-[180px]"
    style={{
      background:
        "radial-gradient(circle,rgba(139,92,246,.18),transparent 70%)",
    }}
  />

  {/* Cyan Orb */}

  <motion.div
    animate={{
      x: [-40, 30, -40],
      y: [0, 80, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-56 top-60 w-[700px] h-[700px] rounded-full blur-[170px]"
    style={{
      background:
        "radial-gradient(circle,rgba(6,182,212,.12),transparent 70%)",
    }}
  />

  {/* Violet Orb */}

  <motion.div
    animate={{
      x: [30, -30, 30],
      y: [0, -70, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -right-52 bottom-20 w-[750px] h-[750px] rounded-full blur-[170px]"
    style={{
      background:
        "radial-gradient(circle,rgba(168,85,247,.12),transparent 70%)",
    }}
  />

  {/* Vertical Beam */}

  <motion.div
    animate={{
      opacity: [0.15, 0.4, 0.15],
      scaleY: [1, 1.15, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
    }}
    className="absolute left-1/2 top-0 h-full w-px"
  >
    <div className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm" />
  </motion.div>

  {/* Left Beam */}

  <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-500/10 to-transparent" />

  {/* Right Beam */}

  <div className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />

  {/* Noise */}

  <div
    className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://grainy-gradients.vercel.app/noise.svg')",
    }}
  />

  {/* Grid */}

  <div
    className="absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
      `,
      backgroundSize: "120px 120px",
    }}
  />

  {/* Vignette */}

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,.78)_100%)]" />

</div>

      {/* CONTAINER */}
      <div className="relative max-w-[1450px] mx-auto">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="uppercase tracking-[0.35em] text-[11px] text-gray-400">
              About Me
            </span>
          </div>

          <h2 className="mt-10 leading-[0.88]">
            <span className="block text-[60px] md:text-[90px] lg:text-[110px] font-black uppercase tracking-[-0.05em] text-white">
              PASSIONATE
            </span>
            <span className="block text-[60px] md:text-[90px] lg:text-[110px] font-black uppercase tracking-[-0.05em] bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
              DEVELOPER
            </span>
          </h2>

          <p className="mt-10 max-w-3xl text-[18px] leading-9 text-gray-400">
            I specialize in building immersive web experiences, scalable
            full-stack applications and premium user interfaces using modern
            JavaScript technologies.
          </p>
        </motion.div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid lg:grid-cols-12 gap-14 mt-20">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <motion.div
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl"
              >
                <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-violet-500/10 blur-[150px]" />

                <div className="relative p-8">
                  <div className="flex justify-between">
                    <div>
                      <p className="uppercase tracking-[0.35em] text-[11px] text-gray-500">
                        Profile
                      </p>
                      <h3 className="mt-4 text-3xl font-bold text-white">
                        Rahul Diwakar
                      </h3>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                <div className="px-8">
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 1.5, 0, -1.5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 7,
                    }}
                    className="rounded-[28px] overflow-hidden border border-white/10"
                  >
                    <img
                      src={rahulPic}
                      alt={personalInfo.name}
                      className="w-full h-[540px] object-cover object-top"
                    />
                  </motion.div>
                </div>

                <div className="p-8 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                        Experience
                      </p>
                      <h4 className="mt-3 text-white font-semibold">
                        Full Stack
                      </h4>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                        Education
                      </p>
                      <h4 className="mt-3 text-white font-semibold">MCA</h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-gray-500">Location</span>
                      <span className="text-white">Agra, India</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-gray-500">Email</span>
                      <span className="text-white text-sm">
                        {personalInfo.email}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status</span>
                      <span className="text-emerald-400">Available</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-16">
            {/* ================= STATS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                {[
                  {
                    value: "11+",
                    label: "Projects",
                  },
                  {
                    value: "240+",
                    label: "DSA Solved",
                  },
                  {
                    value:
                      about.education?.[0]?.score?.replace("CGPA: ", "") ||
                      "6.86",
                    label: "CGPA",
                  },
                  {
                    value: "MERN",
                    label: "Stack",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.25 }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <h3 className="text-4xl font-black text-white">
                        {item.value}
                      </h3>
                      <p className="mt-3 uppercase tracking-[0.28em] text-[11px] text-gray-500">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ================= ABOUT ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-violet-400" />
                <span className="uppercase tracking-[0.35em] text-[11px] text-gray-500">
                  Who I Am
                </span>
              </div>
              <h2 className="mt-7 text-5xl md:text-6xl font-bold text-white leading-tight">
                Building products people actually enjoy using.
              </h2>
              <div className="mt-8 space-y-7 text-[17px] leading-9 text-gray-400">
                <p>{about.description}</p>
                <p>
                  I focus on building scalable full-stack applications with
                  React, Next.js, Node.js and MongoDB while maintaining beautiful
                  user experiences and clean architecture.
                </p>
                <p>
                  I enjoy solving complex engineering problems, creating reusable
                  systems, and developing premium interfaces that feel modern and
                  effortless.
                </p>
              </div>
            </motion.div>

            {/* ================= HIGHLIGHTS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-violet-400" />
                <span className="uppercase tracking-[0.35em] text-[11px] text-gray-500">
                  Highlights
                </span>
              </div>
              <div className="space-y-5">
                {about.highlights?.map((item, index) => {
                  const text = typeof item === "object" ? item.text : item;
                  const tag = typeof item === "object" ? item.tag : null;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 8,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7"
                    >
                      <div className="absolute left-0 top-0 h-full w-[4px] bg-violet-500 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500" />
                      <div className="relative">
                        <p className="text-gray-300 leading-8">{text}</p>
                        {tag && (
                          <span className="inline-flex mt-5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-gray-400">
                            {tag}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ================= TECH STACK ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-violet-400" />
                <span className="uppercase tracking-[0.35em] text-[11px] text-gray-500">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 py-3 cursor-default"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/15 via-transparent to-cyan-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative text-[14px] text-gray-300 group-hover:text-white transition-colors duration-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ================= WHAT I BUILD ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-violet-400" />
                <span className="uppercase tracking-[0.35em] text-[11px] text-gray-500">
                  What I Build
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Modern UI",
                    desc: "Interactive user interfaces with smooth animations and premium design language.",
                  },
                  {
                    title: "Full Stack Apps",
                    desc: "Scalable MERN applications following reusable architecture patterns.",
                  },
                  {
                    title: "3D Experiences",
                    desc: "Immersive websites powered by Three.js and React Three Fiber.",
                  },
                  {
                    title: "Performance",
                    desc: "Fast loading, optimized code and production-ready engineering.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-2xl mb-6">
                        ✦
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-8">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ================= CORE EXPERTISE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
            >
              <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.015] backdrop-blur-3xl p-10">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                  <div>
                    <p className="uppercase tracking-[0.35em] text-[11px] text-gray-500 mb-5">
                      Core Expertise
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl">
                      Turning ideas into modern digital products.
                    </h2>
                  </div>
                  <div className="space-y-5">
                    {[
                      "Responsive Design",
                      "REST API Integration",
                      "Authentication & Security",
                      "Reusable Components",
                      "Modern Architecture",
                      "Clean Code Principles",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= EDUCATION ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="grid xl:grid-cols-2 gap-14"
            >
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-[1px] bg-violet-400" />
                  <span className="uppercase tracking-[0.35em] text-[11px] text-gray-500">
                    Education
                  </span>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-white/10 to-transparent" />
                  {about.education.map((edu, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 10,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="relative mb-10 last:mb-0"
                    >
                      <div className="absolute -left-[40px] top-6 w-6 h-6 rounded-full border border-violet-400/40 bg-black flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                      </div>
                      <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                          <p className="uppercase tracking-[0.28em] text-[11px] text-gray-500">
                            {edu.year}
                          </p>
                          <h3 className="mt-4 text-2xl font-semibold text-white">
                            {edu.degree}
                          </h3>
                          <p className="mt-3 text-gray-400 leading-8">
                            {edu.institution}
                          </p>
                          <div className="mt-6 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2">
                            <span className="text-sm text-violet-300">
                              {edu.score}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-[1px] bg-cyan-400" />
                  <span className="uppercase tracking-[0.35em] text-[11px] text-gray-500">
                    Journey
                  </span>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-white/10 to-transparent" />
                  {about.journey.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 10,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="relative mb-10 last:mb-0"
                    >
                      <div className="absolute -left-[40px] top-6 w-6 h-6 rounded-full border border-cyan-400/40 bg-black flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      </div>
                      <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                          <p className="uppercase tracking-[0.28em] text-[11px] text-gray-500">
                            {item.year}
                          </p>
                          <h3 className="mt-4 text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-4 text-gray-400 leading-8">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ================= EXPERIENCE STRIP ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="rounded-[34px] border border-white/10 bg-gradient-to-r from-violet-500/10 via-white/[0.03] to-cyan-500/10 backdrop-blur-3xl p-10"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-5xl font-black text-white">11+</h2>
                  <p className="mt-3 uppercase tracking-[0.25em] text-[11px] text-gray-500">
                    Projects Built
                  </p>
                </div>
                <div>
                  <h2 className="text-5xl font-black text-white">240+</h2>
                  <p className="mt-3 uppercase tracking-[0.25em] text-[11px] text-gray-500">
                    DSA Solved
                  </p>
                </div>
                <div>
                  <h2 className="text-5xl font-black text-white">MERN</h2>
                  <p className="mt-3 uppercase tracking-[0.25em] text-[11px] text-gray-500">
                    Core Stack
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================= CTA ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.03] backdrop-blur-3xl p-10 lg:p-14"
            >
              <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-violet-500/10 blur-[160px]" />
              <div className="relative">
                <p className="uppercase tracking-[0.35em] text-[11px] text-gray-500">
                  Let's Build Something Amazing
                </p>
                <h2 className="mt-5 text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl">
                  Looking for a developer who can build premium, scalable and
                  immersive digital experiences?
                </h2>
                <p className="mt-8 max-w-2xl text-gray-400 leading-8">
                  I'm passionate about creating modern web applications with
                  exceptional user experience, clean architecture and
                  production-ready engineering. If you have an exciting project or
                  opportunity, let's connect.
                </p>
                <div className="mt-12 flex flex-wrap gap-5">
                  <motion.a
                    whileHover={{
                      y: -5,
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href="/RESUME NEW.pdf"
                    download="Rahul_Diwakar_Resume.pdf"
                    className="group relative overflow-hidden rounded-full bg-violet-600 px-9 py-4 font-medium text-white"
                  >
                    <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-violet-400 to-fuchsia-500 transition-transform duration-500 group-hover:translate-y-0" />
                    <span className="relative flex items-center gap-3">
                      Download Resume
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14"
                        />
                      </svg>
                    </span>
                  </motion.a>
                  <motion.a
                    whileHover={{
                      y: -5,
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href="https://wa.me/917417080079"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl px-9 py-4 font-medium text-white hover:border-violet-500/40 transition-all duration-300"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* ================= FOOTER ================= */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="pt-20 pb-10"
            >
              <div className="mb-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Rahul Diwakar
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Full Stack Developer • React • Next.js • Node.js
                  </p>
                </div>
                <div className="flex items-center gap-10">
                  <div>
                    <h3 className="text-4xl font-black text-white">2026</h3>
                    <p className="mt-2 uppercase tracking-[0.25em] text-[10px] text-gray-500">
                      Portfolio Version
                    </p>
                  </div>
                  <div className="h-14 w-px bg-white/10" />
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-400">
                      Available
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Open for Freelance & Full-Time
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}