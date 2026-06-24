import React, { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    if (e.target.value.length <= 500) {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section id="contact" className="relative overflow-hidden w-full py-20 md:py-30 bg-[#fafafa] flex flex-col items-center px-4 sm:px-8 md:px-16 font-sans">
      {/* Top Left Edge Effect */}
      <div className="absolute -top-44 -left-44 w-[550px] h-[550px] rounded-full bg-gray-400/25 blur-[150px] pointer-events-none" />

      {/* Bottom Right Edge Effect */}
      <div className="absolute -bottom-44 -right-44 w-[550px] h-[550px] rounded-full bg-gray-400/25 blur-[150px] pointer-events-none" />

      {/* BIGGER WRAPPER - MAX-W-7XL FOR THAT LARGE/WIDE LOOK IN YOUR PIC */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT CARD: SEND A MAIL (INCREASED PADDING & SPACING) */}
        <div className="bg-[#fcfcfc] border border-gray-200/80 rounded-[32px] p-6 sm:p-8 md:p-12 flex flex-col justify-between text-left transition-all duration-500 ease-out hover:-translate-y-3 active:scale-[0.98] shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.12),0_0_40px_-10px_rgba(0,0,0,0.06)]">
          <div>
            {/* Bigger Mail Icon Header */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-gray-200/70 shadow-2xs mb-8">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>

            {/* Bigger Headings */}
            <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 tracking-tight mb-2">
              Send a Mail
            </h3>
            <p className="text-[14px] text-gray-500 font-normal mb-10">
              Fill out the form below and I'll respond promptly.
            </p>

            {/* Contact Form with Taller Inputs */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Input */}
              <div className="relative">
                <svg
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full bg-white border border-gray-200/90 rounded-2xl py-4 pl-12 pr-5 text-[14.5px] text-gray-800 placeholder-gray-600 focus:outline-none focus:border-gray-400/80 transition-colors shadow-2xs"
                />
              </div>

              {/* Email Address Input */}
              <div className="relative">
                <svg
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full bg-white border border-gray-200/90 rounded-2xl py-4 pl-12 pr-5 text-[14.5px] text-gray-800 placeholder-gray-600 focus:outline-none focus:border-gray-400/80 transition-colors shadow-2xs"
                />
              </div>

              {/* Your Message Textarea */}
              <div className="relative">
                <svg
                  className="absolute left-5 top-5 w-[18px] h-[18px] text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <textarea
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-white border border-gray-200/90 rounded-2xl py-4.5 pl-12 pr-5 text-[14.5px] text-gray-800 placeholder-gray-600 focus:outline-none focus:border-gray-400/80 transition-colors resize-none shadow-2xs"
                />
              </div>

              {/* Character Limit */}
              <div className="text-right text-[11px] text-gray-400 font-medium tracking-wide -mt-1.5">
                {message.length}/500
              </div>

              {/* Bigger Taller Send Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#3b3734] hover:bg-[#2b2826] text-white text-[14px] font-medium rounded-4xl flex items-center justify-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.25)] cursor-pointer shadow-md mt-4 group active:scale-95"
              >
                Send Message
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT CARD: LET'S WORK TOGETHER (INCREASED SIZES) */}
        <div className="bg-[#fcfcfc] border border-gray-200/80 rounded-[32px] p-10 md:p-12 flex flex-col justify-between text-left transition-all duration-500 ease-out hover:-translate-y-3 active:scale-[0.98] shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.12),0_0_40px_-10px_rgba(0,0,0,0.06)]">
          <div>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f3f3f3]/80 rounded-full text-[12px] font-medium text-gray-600 mb-8 border border-gray-200/20">
              <span className="w-1 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              Open for Internships & Freelance
            </div>

            {/* Massive Header Text */}
            <h3 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-gray-900 tracking-tight mb-5 leading-tight">
              Let's Work Together
            </h3>

            {/* Paragraph Text */}
            <p className="text-[14.5px] md:text-[15.5px] text-gray-500 font-normal leading-relaxed mb-8">
              Actively learning and improving every day. Currently open to
              internships, freelance work, and collaboration opportunities.
              Let's build something great together ✈️
            </p>

            {/* Bigger Stats Counter */}
            <div className="flex flex-col mb-8">
              <span className="text-[34px] sm:text-[42px] font-bold text-gray-900 leading-none">
                11+
              </span>
              <span className="text-[14px] font-semibold tracking-wider text-gray-500 mt-1.5">
                PROJECTS COMPLETED
              </span>
            </div>

            <hr className="border-gray-200/60 w-full mb-8" />

            {/* Bigger Link Cards */}
            <div className="space-y-4">
              {/* GitHub Link Card */}
              <a
                href="https://github.com/rahul-diw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 bg-white border border-gray-200/70 rounded-2xl flex items-center justify-between text-[14.5px] text-gray-800 font-semibold shadow-2xs hover:border-gray-300 hover:bg-gray-50/50 active:scale-[0.98] transition-all cursor-pointer no-underline"
              >
                <span>GitHub</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              {/* LinkedIn Link Card */}
              <a
                href="https://www.linkedin.com/in/rahul-diwakar-7420072b0/"
                className="w-full px-5 py-3 bg-white border border-gray-200/70 rounded-2xl flex items-center justify-between text-[14.5px] text-gray-800 font-semibold shadow-2xs hover:border-gray-300 hover:bg-gray-50/50 active:scale-[0.98] transition-all cursor-pointer no-underline"
              >
                <span>LinkedIn</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Divider and Location Info */}
          <div className="mt-10 pt-6 border-t border-gray-200/60 w-full text-center">
            <span className="inline-flex items-center gap-1 text-[12px] text-gray-400 font-medium">
              📍 India · Global Mindset, Local Roots
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
