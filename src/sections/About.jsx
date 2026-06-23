import React from "react";
import rahulPic from "../assets/rahul-pic3.png"; // Aapki photo ka path
import { portfolioData } from "../data/portfolioData";

export default function About() {
  // Naye structure ke hisab se data extract kar rahe hain
  const { personalInfo, about } = portfolioData;

  // Stats grid ke liye items
  const stats = [
    { value: "11+", label: "PROJECTS" },
    { value: "240+", label: "DSA SOLVED" },
    {
      value: about.education[0]?.score?.replace("CGPA: ", "") || "6.86",
      label: "MCA CGPA",
    },
    { value: "React / Node", label: "PRIMARY STACK" },
  ];

  // Icons ki mapping (Label ke hisab se)
  const getIcon = (label) => {
    switch (label.toUpperCase()) {
      case "PROJECTS":
        return (
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        );
      case "DSA SOLVED":
        return (
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        );
      case "MCA CGPA":
        return (
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        );
      case "PRIMARY STACK":
        return (
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden w-full min-h-screen bg-[#FCFCFC] py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center font-sans selection:bg-gray-100"
    >
      {/* Top Left Edge Effect */}
      <div className="absolute -top-44 -left-44 w-[550px] h-[550px] rounded-full bg-gray-400/25 blur-[150px] pointer-events-none" />

      {/* Bottom Right Edge Effect */}
      <div className="absolute -bottom-44 -right-44 w-[550px] h-[550px] rounded-full bg-gray-400/25 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: PROFILE CARD */}
        <div className="hidden lg:flex lg:col-span-5 w-full justify-start sticky top-0 transform hover:-translate-y-2 transition-all duration-400 ">
          <div className="w-full max-w-[450px] bg-[#FBFBFB] border border-gray-200 rounded-[32px] p-6 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08),0_0_50px_-10px_rgba(0,0,0,0.02)]">
            {/* Image Wrapper */}
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-[24px] overflow-hidden bg-white relative transform hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08),0_0_50px_-10px_rgba(0,0,0,0.02)]">
              <img
                src={rahulPic}
                alt={personalInfo.name}
                className="absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] max-w-none object-cover object-top pointer-events-none "
              />
            </div>

            {/* Profile Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-950 mt-4">
                Rahul Diwakar
              </h1>
              <p className="text-sm text-gray-500 font-normal mt-3">
                Full-Stack / Software Developer
              </p>
            </div>

            {/* Line Separator */}
            <div className="w-full border-t border-gray-100 my-2"></div>

            {/* 
   Yahan badlaav hai: 'pl-*' sab hata diya hai.
   'w-fit mx-auto' lagane se ye poora block automatically 'Full-Stack' text ke natural center-start line par align ho jayega.
*/}
            <div className="flex flex-col gap-3 text-[13px] text-gray-600 font-normal w-full mx-auto text-left">
              {/* 1. Education */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gray-700 stroke-[1.5] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span>MCA Graduate ('24)</span>
              </div>

              {/* 2. Location */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gray-700 stroke-[1.5] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span>Agra, Uttar Pradesh</span>
              </div>

              {/* 3. Email */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gray-700 stroke-[1.5] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:diwakarr135@gmail.com"
                  className="hover:underline break-all"
                >
                  diwakarr135@gmail.com
                </a>
              </div>

              {/* 4. Availability */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-gray-700 stroke-[1.5] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 w-full flex flex-col gap-10">
          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group bg-[#f4f4f5] border border-gray-300 rounded-[20px] p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.01)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-gray-400 hover:bg-white cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-3 border border-gray-300/70 transition-all duration-300 group-hover:bg-white">
                  {getIcon(stat.label)}
                </div>
                <div className="text-xl font-bold tracking-tight text-gray-950 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ABOUT ME */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-950">
              About Me
            </h2>
            <div className="text-[15px] leading-relaxed text-gray-500 font-normal flex flex-col gap-5">
              <p>{about?.description}</p>
              <p>
                On the front-end, I specialize in building highly interactive
                architectures using React.js, Next.js, and Tailwind CSS,
                focusing heavily on dynamic layouts and centralized state
                configurations.
              </p>
              <p>
                Beyond standard product feature implementation, I enjoy deep
                problem-solving challenges. Having validated core engineering
                foundations with over {personalInfo?.dsaStats}, I always aim to
                write clean, optimized, and dry code patterns.
              </p>
            </div>
          </div>

          {/* KEY HIGHLIGHTS BOXES WITH ADJUSTED BACKGROUND COLORS & GAPS */}
          {about?.highlights?.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center gap-2 text-gray-950 font-medium tracking-tight text-2xl mb-5">
                <svg
                  className="w-5 h-5 text-gray-950"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <h4>Key Highlights</h4>
              </div>

              {/* space-y-6 se saare boxes ke beech perfect gap maintain rahega */}
              <div className="space-y-6 w-full">
                {about.highlights.map((item, idx) => {
                  const highlightText =
                    typeof item === "object" ? item?.text : item;
                  const highlightTag =
                    typeof item === "object" ? item?.tag : null;

                  return (
                    <div
                      key={idx}
                      className="group w-full bg-[#f6f6f7] border border-gray-200 rounded-[18px] p-5 md:p-6 pl-7 md:pl-8 shadow-[0_2px_10px_rgba(0,0,0,0.005)] relative flex flex-col items-start gap-2 transition-all duration-300 hover:border-gray-300 hover:bg-white hover:-translate-y-0.5 cursor-pointer"
                    >
                      {/* Left Dot - Hover par black ho jayega */}
                      <span className="absolute left-4 top-[28px] w-1.5 h-1.5 rounded-full bg-gray-400 transition-all duration-300 ease-out group-hover:scale-150 group-hover:bg-gray-950" />

                      {/* pl-3 added for separation from dot */}
                      <p className="text-md font-normal text-gray-700 leading-relaxed pr-4 pl-3 transition-colors duration-300 group-hover:text-gray-950">
                        {highlightText}
                      </p>

                      {highlightTag && (
                        <div className="pl-3">
                          <span className="text-[8px] font-normal text-gray-700 bg-white px-2.5 py-1 rounded-[15px] border border-gray-200 uppercase tracking-wider transition-colors duration-300 group-hover:border-gray-300">
                            {highlightTag}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* --- PROJECTS CONTAINER KE THEEK NICHE ISS LAYOUT KO PASTE KAREIN --- */}
          <div className="w-full mt-12 sm:mt-12 text-left px-0 sm:px-4">
            {/* Section Heading with Icon Code */}
            <div className="flex items-center gap-2 mb-6 text-gray-900">
              <svg
                className="w-5 h-5 text-gray-800 stroke-[2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              <h2 className="text-xl font-bold tracking-tight">
                Tech Stack & Tools
              </h2>
            </div>

            {/* Tags Layout */}
            <div className="flex flex-wrap gap-x-3 gap-y-3.5 items-center w-full">
              {/* Common classes handle custom slide effect using pseudo classes */}
              {/* React */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                  before:absolute before:inset-0
                  before:bg-gray-800
                  before:translate-x-[-100%]
                  before:transition-transform
                  before:duration-300
                  before:ease-out
                  hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  React
                </span>                 
              </div>

              {/* JavaScript */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                  before:absolute before:inset-0
                  before:bg-gray-800
                  before:translate-x-[-100%]
                  before:transition-transform
                  before:duration-300
                  before:ease-out
                  hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  JavaScript
                </span>                 
              </div>

              {/* TypeScript */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                  before:absolute before:inset-0
                  before:bg-gray-800
                  before:translate-x-[-100%]
                  before:transition-transform
                  before:duration-300
                  before:ease-out
                  hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  TypeScript
                </span>
              </div>

              {/* Node.js */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                before:absolute before:inset-0
                before:bg-gray-800
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-300
                before:ease-out
                hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Node.js
                </span>
              </div>

              {/* Express.js */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                before:absolute before:inset-0
                before:bg-gray-800
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-300
                before:ease-out
                hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Express.js
                </span>
              </div>

              {/* MongoDB */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                before:absolute before:inset-0
                before:bg-gray-800
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-300
                before:ease-out
                hover:before:translate-x-0"
              >                 
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  MongoDB
                </span>
              </div>

              {/* MySQL */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                before:absolute before:inset-0
                before:bg-gray-800
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-300
                before:ease-out
                hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  MySQL
                </span>
              </div>

              {/* JWT Auth */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                before:absolute before:inset-0
                before:bg-gray-800
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-300
                before:ease-out
                hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  JWT Auth
                </span>
              </div>

              {/* REST APIs */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                before:absolute before:inset-0
                before:bg-gray-800
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-300
                before:ease-out
                hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  REST APIs
                </span>
              </div>

              {/* HTML */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300  rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                before:absolute before:inset-0
                before:bg-gray-800
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-300
                before:ease-out
                hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  HTML
                </span>
              </div>

              {/* CSS */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                before:absolute before:inset-0
                before:bg-gray-800
                before:translate-x-[-100%]
                before:transition-transform
                before:duration-300
                before:ease-out
                hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  CSS
                </span>
              </div>

              {/* Tailwind */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                  before:absolute before:inset-0
                  before:bg-gray-800
                  before:translate-x-[-100%]
                  before:transition-transform
                  before:duration-300
                  before:ease-out
                  hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Tailwind
                </span>
              </div>

              {/* Git & GitHub */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                  before:absolute before:inset-0
                  before:bg-gray-800
                  before:translate-x-[-100%]
                  before:transition-transform
                  before:duration-300
                  before:ease-out
                  hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Git & GitHub
                </span>
              </div>

              {/* PostMan */}
              <div
                className="group relative overflow-hidden bg-white border border-gray-300 rounded-full px-5 py-2 text-[13px] font-normal text-gray-600 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md

                  before:absolute before:inset-0
                  before:bg-gray-800
                  before:translate-x-[-100%]
                  before:transition-transform
                  before:duration-300
                  before:ease-out
                  hover:before:translate-x-0"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  PostMan
                </span>
              </div>
            </div>
          </div>

          {/* --- SKILLS/TAGS BLOCK KE THEEK NICHE ISS LAYOUT KO PASTE KAREIN --- */}
          <div className="w-full mt-12 sm:mt-16 text-left px-0 max-w-full">
            {/* Side-by-Side Grid with optimized close gap for max card width */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-6 w-full items-start">
              {/* ================= LEFT SIDE: EDUCATION ================= */}
              <div className="flex flex-col w-full">
                {/* Section Title */}
                <div className="flex items-center gap-2.5 mb-6 text-gray-900 border-b border-gray-300 pb-3 pl-1">
                  <svg
                    className="w-4 h-4 text-gray-800 stroke-[1.8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.174L10.74 14m-6.48-3.826A2.5 2.5 0 002 12.5v7A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.24-2.486M4.26 10.174L12 2.75l7.74 7.424M12 2.75v11.25"
                    />
                  </svg>
                  <h2 className="text-[18px] font-bold tracking-tight">
                    Education
                  </h2>
                </div>

                {/* Timeline Wrapper Line */}
                <div className="relative border-l border-gray-200/80 ml-4 pl-7 flex flex-col gap-6 w-full pr-1">
                  {/* Box 1: MCA */}
                  <div className="relative w-full">
                    <div className="absolute -left-[40px] top-5 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-10">
                      <svg
                        className="w-3.5 h-3.5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                    </div>

                    <div
                      className="group relative overflow-hidden bg-gray-50/40 border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transform transition-all duration-300 ease-out hover:translate-x-1.5 hover:border-gray-300 w-full
            before:absolute before:inset-0 before:w-full before:h-full before:bg-slate-100/50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
                    >
                      <div className="relative z-10 flex flex-col gap-1.5 w-full">
                        <span className="text-[11px] text-gray-600 tracking-wide font-medium">
                          Present
                        </span>
                        <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 tracking-tight block w-full">
                          Master of Computer Applications
                        </h3>
                        <p className="text-[12px] text-gray-500 font-normal leading-loose mt-0.5">
                          Current University : AKTU <br />
                          Passed out | 6.86
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Box 2: BCA */}
                  <div className="relative w-full">
                    <div className="absolute -left-[40px] top-5 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-10">
                      <svg
                        className="w-3.5 h-3.5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                    </div>

                    <div
                      className="group relative overflow-hidden bg-gray-50/40 border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transform transition-all duration-300 ease-out hover:translate-x-1.5 hover:border-gray-300 w-full
            before:absolute before:inset-0 before:w-full before:h-full before:bg-slate-100/50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
                    >
                      <div className="relative z-10 flex flex-col gap-1.5 w-full">
                        <span className="text-[11px] text-gray-600 tracking-wide font-medium">
                          2018 - 2022
                        </span>
                        <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 tracking-tight block w-full">
                          Bachelor of Computer Applications
                        </h3>
                        <p className="text-[12px] text-gray-500 font-normal leading-loose mt-0.5">
                          University : DBRAU <br />
                          Passed out | 6.84
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Box 3: Class 12th */}
                  <div className="relative w-full">
                    <div className="absolute -left-[40px] top-5 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-10">
                      <svg
                        className="w-3.5 h-3.5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                      </svg>
                    </div>

                    <div
                      className="group relative overflow-hidden bg-gray-50/40 border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transform transition-all duration-300 ease-out hover:translate-x-1.5 hover:border-gray-300 w-full
            before:absolute before:inset-0 before:w-full before:h-full before:bg-slate-100/50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
                    >
                      <div className="relative z-10 flex flex-col gap-1.5 w-full">
                        <span className="text-[11px] text-gray-600 tracking-wide font-medium">
                          2017 - 2018
                        </span>
                        <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 tracking-tight block w-full">
                          Class 12th
                        </h3>
                        <p className="text-[12px] text-gray-500 font-normal leading-loose mt-0.5">
                          UP Board (RBIC) <br />
                          Score 60%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Box 4: Class 10th */}
                  <div className="relative w-full">
                    <div className="absolute -left-[40px] top-5 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-10">
                      <svg
                        className="w-3.5 h-3.5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                      </svg>
                    </div>

                    <div
                      className="group relative overflow-hidden bg-gray-50/40 border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transform transition-all duration-300 ease-out hover:translate-x-1.5 hover:border-gray-300 w-full
            before:absolute before:inset-0 before:w-full before:h-full before:bg-slate-100/50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
                    >
                      <div className="relative z-10 flex flex-col gap-1.5 w-full">
                        <span className="text-[11px] text-gray-600 tracking-wide font-medium">
                          2015 - 2016
                        </span>
                        <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 tracking-tight block w-full">
                          Class 10th
                        </h3>
                        <p className="text-[12px] text-gray-500 font-normal leading-loose mt-0.5">
                          UP Board (RBIC) <br />
                          Score 62%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT SIDE: JOURNEY ================= */}
              <div className="flex flex-col w-full">
                {/* Section Title */}
                <div className="flex items-center gap-2.5 mb-6 text-gray-900 border-b border-gray-300 pb-3 pl-1">
                  <svg
                    className="w-4 h-4 text-gray-800 stroke-[1.8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h2 className="text-[18px] font-bold tracking-tight">
                    Journey
                  </h2>
                </div>

                {/* Timeline Wrapper Line for Journey */}
                <div className="relative border-l border-gray-200/80 ml-4 pl-7 flex flex-col gap-6 w-full pr-1">
                  {/* Journey Box 1: Started Coding Journey */}
                  <div className="relative w-full">
                    <div className="absolute -left-[40px] top-5 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-10">
                      <svg
                        className="w-3.5 h-3.5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>

                    <div
                      className="group relative overflow-hidden bg-gray-50/40 border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transform transition-all duration-300 ease-out hover:translate-x-1.5 hover:border-gray-300 w-full
            before:absolute before:inset-0 before:w-full before:h-full before:bg-slate-100/50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
                    >
                      <div className="relative z-10 flex flex-col gap-1.5 w-full">
                        <span className="text-[11px] text-gray-600 tracking-wide font-medium">
                          2023
                        </span>
                        <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 tracking-tight block w-full">
                          Started Coding Journey
                        </h3>
                        <p className="text-[12px] text-gray-500 font-normal leading-loose mt-0.5">
                          Bridged my background from data entry operations to
                          software engineering, starting with core frontend
                          workflows and algorithms.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Journey Box 2: Competitive Growth */}
                  <div className="relative w-full">
                    <div className="absolute -left-[40px] top-5 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-10">
                      <svg
                        className="w-3.5 h-3.5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>

                    <div
                      className="group relative overflow-hidden bg-gray-50/40 border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transform transition-all duration-300 ease-out hover:translate-x-1.5 hover:border-gray-300 w-full
            before:absolute before:inset-0 before:w-full before:h-full before:bg-slate-100/50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
                    >
                      <div className="relative z-10 flex flex-col gap-1.5 w-full">
                        <span className="text-[11px] text-gray-600 tracking-wide font-medium">
                          2020
                        </span>
                        <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 tracking-tight block w-full">
                          Competitive Growth
                        </h3>
                        <p className="text-[12px] text-gray-500 font-normal leading-loose mt-0.5">
                          Selected for Smart India Hackathon (SIH) 2020:
                          Developed a tech prototype under a strict 24-hour
                          regional constraint at Hindustan College.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Journey Box 3: First Full-Stack Build */}
                  <div className="relative w-full">
                    <div className="absolute -left-[40px] top-5 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-10">
                      <svg
                        className="w-3.5 h-3.5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>

                    <div
                      className="group relative overflow-hidden bg-gray-50/40 border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transform transition-all duration-300 ease-out hover:translate-x-1.5 hover:border-gray-300 w-full
            before:absolute before:inset-0 before:w-full before:h-full before:bg-slate-100/50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
                    >
                      <div className="relative z-10 flex flex-col gap-1.5 w-full">
                        <span className="text-[11px] text-gray-600 tracking-wide font-medium">
                          2025 - 2026
                        </span>
                        <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 tracking-tight block w-full">
                          First Full-Stack Build
                        </h3>
                        <p className="text-[12px] text-gray-500 font-normal leading-loose mt-0.5">
                          Built 'Smart Task Administration System' using Next.js
                          (v14), Node.js, and MongoDB, integrating an
                          interactive Kanban Board with dynamic workflows.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Journey Box 4: Current Mission */}
                  <div className="relative w-full">
                    <div className="absolute -left-[40px] top-5 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-10">
                      <svg
                        className="w-3.5 h-3.5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>

                    <div
                      className="group relative overflow-hidden bg-gray-50/40 border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transform transition-all duration-300 ease-out hover:translate-x-1.5 hover:border-gray-300 w-full
            before:absolute before:inset-0 before:w-full before:h-full before:bg-slate-100/50 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
                    >
                      <div className="relative z-10 flex flex-col gap-1.5 w-full">
                        <span className="text-[11px] text-gray-600 tracking-wide font-medium">
                          2026
                        </span>
                        <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 tracking-tight block w-full">
                          Current Mission
                        </h3>
                        <p className="text-[12px] text-gray-500 font-normal leading-loose mt-0.5">
                          Focused on full-stack mastery, competitive
                          programming, and building secure, scalable systems
                          that turn ambitious ideas into polished products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- TIMELINE GRID KE THEEK NICHE ISSE PASTE KAREIN --- */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 mb-8">
            <a
              href="/RESUME NEW.pdf"
              download="Rahul_Diwakar_Resume.pdf"
              className="group relative overflow-hidden flex items-center justify-center gap-2 bg-[#44403c] text-white px-7 py-3.5 rounded-full font-medium text-[14px] shadow-sm transition-all duration-300 hover:shadow-lg w-full sm:w-auto cursor-pointer no-underline"
            >
              {/* Sliding White Background */}
              <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

              {/* Content */}
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#44403c] transition-colors duration-300">
                <svg
                  className="w-4 h-4 stroke-[2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download Resume
              </span>
            </a>

            {/* Button 2: Contact Me (Click karte hi direct aapka WhatsApp Open ho jayega) */}
            <a
              href="https://wa.me/917417080079"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center justify-center gap-1.5 bg-white text-gray-800 border border-gray-300 px-7 py-3.5 rounded-full font-medium text-[14px] shadow-sm transition-all duration-300 hover:shadow-lg w-full sm:w-auto cursor-pointer no-underline"
            >
              <span className="absolute inset-0 bg-[#44403c] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

              <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-300">
                <svg
                  className="w-4 h-4 stroke-[1.8] text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25V16.5a2.25 2.25 0 00-1.666-2.17l-3.32-.83a2.25 2.25 0 00-1.422.408l-2.07 1.41a15.115 15.115 0 01-5.69-5.69l1.41-2.07a2.25 2.25 0 00.413-1.417l-.832-3.32A2.25 2.25 0 0011.107 2.25H8.914a2.25 2.25 0 00-2.25 2.25v2.25z"
                  />
                </svg>
                Contact Me
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
