import React, { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Full Stack', 'JavaScript'];

  // --- 1. MAIN FEATURED PROJECT: SMART TASK SLIDER IMAGES ---
  const smartTaskImages = [
    { src: "5.jpg", alt: "Next Gen Task Manager Landing" },
    { src: "6.jpg", alt: "Secure Login Page" },
    { src: "4.jpg", alt: "Create New Project Workflow" },
    { src: "1.jpg", alt: "Interactive Kanban Board" },
    { src: "2.jpg", alt: "Task Workflow Analytics Dashboard" },
    { src: "3.jpg", alt: "Custom Deadline Calendar" }
  ];

  // --- 2. GRID PROJECT 1: WAREHOUSEFLOW SLIDER IMAGES ---
  const warehouseImages = [
    { src: "M1.png", alt: "WarehouseFlow Dashboard Analytics" },
    { src: "M2.png", alt: "Secure Glassmorphism Sign In" },
    { src: "M3.png", alt: "Low Stock Alerts Monitoring" },
    { src: "M4.png", alt: "Products Management & SKUs" },
    { src: "M5.png", alt: "Active Warehouses Overview" },
    { src: "M6.png", alt: "Current Stock Inventory Levels" },
    { src: "M7.png", alt: "Inter-Warehouse Stock Transfer" },
    { src: "M8.png", alt: "Stock Transfer Audit Logs" }
  ];

  // --- 3. GRID PROJECT 2: ONLINE WEB GALLERY SLIDER IMAGES ---
  const galleryImages = [
    { src: "O1.png", alt: "Web Gallery Main Interface & Grid Layout" },
    { src: "O2.png", alt: "Media Category Filters & Collections" },
    { src: "O3.png", alt: "Advanced Cloudinary Media Pipeline" },
    { src: "O4.png", alt: "Image Detailed Analytics View" },
    { src: "O5.png", alt: "User Preferences & Settings Panel" }
  ];

  // --- 4. GRID PROJECT 3: SPORTS CAR WEBSITE SLIDER IMAGES ---
  const sportsCarImages = [
    { src: "S1.png", alt: "Hypercar Premium Showcase Hero Section" },
    { src: "S2.png", alt: "Interactive Vehicle Trailer & Cinematic Video Shorts" },
    { src: "S3.png", alt: "Aerodynamics & Performance Metrics Panel" },
    { src: "S4.png", alt: "Luxury Sports Car Spec Details Grid" },
    { src: "S5.png", alt: "Fleet Selection & Technical Specs Board" }
  ];

const movieImages = [
    { src: "f1.png", alt: "Cinematic Blurred Movie Backdrop Hero View" },
    { src: "f2.png", alt: "Immersive Depth Effect Title & Metadata Layout" },
    { src: "f3.png", alt: "Full Screen Theater Carousel Experience" },
    { src: "f4.png", alt: "Dynamic Movie Info & Synopses Showcase" },
    { src: "f5.png", alt: "Curated Media Collections Grid" }
  ];

  const [mainSlide, setMainSlide] = useState(0);
  const [warehouseSlide, setWarehouseSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);
  const [carSlide, setCarSlide] = useState(0);
  const [movieSlide, setMovieSlide] = useState(0);

  useEffect(() => {
    const mainTimer = setInterval(() => {
      setMainSlide((prev) => (prev + 1) % smartTaskImages.length);
    }, 1600);

    const warehouseTimer = setInterval(() => {
      setWarehouseSlide((prev) => (prev + 1) % warehouseImages.length);
    }, 1800);

    const galleryTimer = setInterval(() => {
      setGallerySlide((prev) => (prev + 1) % galleryImages.length);
    }, 1700);

    const carTimer = setInterval(() => {
      setCarSlide((prev) => (prev + 1) % sportsCarImages.length);
    }, 1900);

    const movieTimer = setInterval(() => {
      setMovieSlide((prev) => (prev + 1) % movieImages.length);
    }, 1800);

    return () => {
      clearInterval(mainTimer);
      clearInterval(warehouseTimer);
      clearInterval(galleryTimer);
      clearInterval(carTimer);
      clearInterval(movieTimer);
    };
  }, [smartTaskImages.length, warehouseImages.length, galleryImages.length, sportsCarImages.length]);

  return (
    <section id="projects"className="relative overflow-hidden w-full py-16 bg-white flex flex-col items-center px-4 sm:px-6 md:px-10 font-sans">
      

{/* Top Left Edge Effect */}
<div className="absolute -top-44 -left-44 w-[550px] h-[550px] rounded-full bg-gray-400/25 blur-[150px] pointer-events-none" />

{/* Bottom Right Edge Effect */}
<div className="absolute -bottom-44 -right-44 w-[550px] h-[550px] rounded-full bg-gray-400/25 blur-[150px] pointer-events-none" />

      {/* 1. HEADERS */}
      <div className="text-center mb-12">
        <h2 className="text-[38px] font-bold text-gray-900 tracking-tight mb-1">Projects</h2>
        <p className="text-[17px] text-gray-600 font-normal">Some things I've built</p>
      </div>

      {/* 2. CATEGORIES */}
      <div className="flex items-center gap-3 mb-12">
        {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`group relative overflow-hidden px-5 py-1.5 rounded-full text-[13px] font-medium border cursor-pointer transition-all duration-300
                
                ${
                  activeTab === tab
                    ? "bg-[#3b3734] text-white border-[#3b3734] shadow-xs"
                    : "bg-white text-gray-600 border-gray-300 hover:text-white hover:border-[#3b3734]"
                }`}
              >
                {activeTab !== tab && (
                    <span className="absolute inset-0 bg-[#3b3734] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  )}                  
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* INNER ALIGNED WRAPPER */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10">
        
        {/* 3. MAIN FEATURED CAPSULE */}
        {(activeTab === 'All' || activeTab === 'Full Stack') && (
          <div className="w-full grid grid-cols-1 md:grid-cols-12 bg-[#f9f9f9] border border-gray-200/90 rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gray-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.12),0_0_40px_-10px_rgba(0,0,0,0.05)]">
            
            {/* Left Side: Image Slider Window */}
            <div className="md:col-span-6 h-[240px] sm:h-[280px] md:h-[360px] bg-white flex items-center justify-start p-0 border-b md:border-b-0 md:border-r border-gray-200/60 relative overflow-hidden">
              <div 
                className="w-full h-full flex transition-transform duration-400 ease-out"
                style={{ transform: `translateX(-${mainSlide * 100}%)` }}
              >
                {smartTaskImages.map((img, idx) => (
                  <div key={idx} className="w-full h-full flex-shrink-0 relative bg-white">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-contain bg-white" />
                    <div className="absolute bottom-3 left-4 bg-black/70 backdrop-blur-md text-[10px] text-gray-200 px-2.5 py-1 rounded-md font-medium tracking-wide z-20">
                      {img.alt}
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-3 right-4 flex items-center gap-1.5 z-10 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                {smartTaskImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer
                      ${idx === mainSlide ? 'w-3 bg-white' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Content Area */}

            <div className="md:col-span-6 p-6 sm:p-10 md:p-10 flex flex-col justify-center items-start text-left bg-[#f9f9f9] ">
              <span className="inline-block text-[10px] font-semibold tracking-wider text-gray-500 border border-gray-300 bg-white px-2.5 py-0.5 rounded-md mb-3 shadow-2xs transition-all duration-300 hover:border-gray-500 hover:text-gray-700">
                FEATURED PROJECT
              </span>
              <h3 className="text-[24px] font-bold text-[#111] tracking-tight mb-3 flex items-center gap-2">
                <span>🎯</span> Smart Task Administration System
              </h3>
              <p className="text-[14px] text-gray-600 font-normal leading-relaxed mb-4 max-w-xl">
                Architected a dark-themed project coordination application featuring an interactive Kanban Board with drag-and-drop states to streamline team workflows. Implemented Workflow Analytics via Donut Charts, custom Deadline Calendars, and an encrypted media pipeline.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Next.js (v14)", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "JWT"].map((tech, index) => (
                 <span
                  key={index}
                  className="text-[11px] font-normal text-gray-600 bg-white border border-gray-300 px-2.5 py-0.5 rounded-full shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:text-gray-900 hover:shadow-md cursor-default"
                >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-5 text-[13px] font-medium text-gray-500 pt-1">
                <a href="https://github.com/diwakarr135" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
                  <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                  GitHub
                </a>
                <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
                  <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Live
                </a>
              </div>
            </div>
          </div>
        )}


        {/* 4. LOWER GRID - THREE PROJECTS SECTION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">

          
          {/* CARD 1: MULTI WAREHOUSE INVENTORY PLATFORM */}
          {(activeTab === 'All' || activeTab === 'Full Stack') && (
            <div className="flex flex-col bg-[#f9f9f9] border border-gray-200/90 rounded-2xl overflow-hidden group w-full transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.10),0_0_40px_-10px_rgba(0,0,0,0.04)]">
              <div className="h-[260px] bg-white border-b border-gray-200/60 relative overflow-hidden p-2">
                <div 
                  className="w-full h-full flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${warehouseSlide * 100}%)` }}
                >
                  {warehouseImages.map((img, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 relative bg-white">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-contain bg-white" 
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-xs text-[10px] text-gray-200 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {img.alt}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute top-3 right-3 flex gap-1 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {warehouseImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`h-1 transition-all duration-300 ${idx === warehouseSlide ? 'w-2.5 bg-white' : 'w-1 bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow text-left">
                <h4 className="text-[16px] font-bold text-gray-900 mb-2.5 flex items-center gap-1.5">
                  <span>📦</span> Multi Warehouse Inventory Platform
                </h4>
                <p className="text-[13px] text-gray-600 font-normal leading-relaxed mb-5 line-clamp-2 h-[40px]">
                  Architected a full-stack supply ecosystem to manage product workflows, stock tracking, and supplier data across geographic locations with automated reorder triggers...
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["React.js", "Node.js", "Express.js", "MySQL"].map((tech, idx) => (
                   <span
                    key={idx}
                    className="text-[11px] font-normal text-gray-600 bg-white border border-gray-300 px-2.5 py-0.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:text-gray-900 hover:shadow-[0_10px_25px_-8px_rgba(0,0,0,0.15)] cursor-default"
                >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5 text-[13px] font-medium text-gray-500 pt-4 border-t border-gray-200/50 mt-auto">
                  <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
                    <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                    GitHub
                  </a>
                  <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
                    <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* CARD 2: ONLINE WEB GALLERY APPLICATION */}
          {(activeTab === 'All' || activeTab === 'Full Stack') && (
            <div className="flex flex-col bg-[#f9f9f9] border border-gray-200/90 rounded-2xl overflow-hidden group w-full transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.10),0_0_40px_-10px_rgba(0,0,0,0.04)]">
              <div className="h-[260px] bg-white border-b border-gray-200/60 relative overflow-hidden p-2">
                <div 
                  className="w-full h-full flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${gallerySlide * 100}%)` }}
                >
                  {galleryImages.map((img, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 relative bg-white">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-contain bg-white" 
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-xs text-[10px] text-gray-200 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {img.alt}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute top-3 right-3 flex gap-1 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {galleryImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`h-1 transition-all duration-300 ${idx === gallerySlide ? 'w-2.5 bg-white' : 'w-1 bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow text-left">
                <h4 className="text-[16px] font-bold text-gray-900 mb-2.5 flex items-center gap-1.5">
                  <span>🖼️</span> Online Web Gallery Application
                </h4>
                <p className="text-[13px] text-gray-600 font-normal leading-relaxed mb-4 line-clamp-2 h-[40px]">
                  Designed a high-performance web gallery optimized for fluid image layout distributions, instant multi-category filtering, and Cloudinary media pipelines.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Cloudinary"].map((tech, idx) => (
                    <span
                    key={idx}
                    className="text-[11px] font-normal text-gray-600 bg-white border border-gray-300 px-2.5 py-0.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:text-gray-900 hover:shadow-[0_10px_25px_-8px_rgba(0,0,0,0.15)] cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5 text-[13px] font-medium text-gray-500 pt-4 border-t border-gray-200/50 mt-auto">
                  <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
                    <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                    GitHub
                  </a>
                  <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
                    <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* CARD 3: SPORTS CAR SPECIFICATION WEBSITE (DYNAMIC SLIDER INTEGRATED HERE ⚡) */}
          {(activeTab === 'All' || activeTab === 'JavaScript') && (
            <div className="flex flex-col bg-[#f9f9f9] border border-gray-200/90 rounded-2xl overflow-hidden group w-full transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.10),0_0_40px_-10px_rgba(0,0,0,0.04)]">
              
              {/* Dynamic Image Canvas Slider Window for Sports Car Project */}
              <div className="h-[260px] bg-white border-b border-gray-200/60 relative overflow-hidden p-2">
                <div 
                  className="w-full h-full flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${carSlide * 100}%)` }}
                >
                  {sportsCarImages.map((img, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 relative bg-white">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-contain bg-white" 
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-xs text-[10px] text-gray-200 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {img.alt}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute top-3 right-3 flex gap-1 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {sportsCarImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`h-1 transition-all duration-300 ${idx === carSlide ? 'w-2.5 bg-white' : 'w-1 bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Card Details Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h4 className="text-[16px] font-bold text-gray-900 mb-2.5 flex items-center gap-1.5">
                  <span>🏎️</span> Immersive Sports Car Hub
                </h4>
                <p className="text-[13px] text-gray-600 font-normal leading-relaxed mb-5 line-clamp-2 h-[40px]">
                  Developed an interactive automotive portal featuring cinematic trailer video integrations, immersive specifications panels, performance analytics, and dynamic fleet catalogs.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["JavaScript", "HTML5", "CSS3", "Responsive Architecture"].map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-normal text-gray-600 bg-white border border-gray-300 px-2.5 py-0.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:text-gray-900 hover:shadow-[0_10px_25px_-8px_rgba(0,0,0,0.15)] cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5 text-[13px] font-medium text-gray-500 pt-4 border-t border-gray-200/50 mt-auto">
                  <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
                    <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                    GitHub
                  </a>
                  <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
                    <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
         )}

          {/* CARD 4: MODERN MOVIE WEBSITE (DYNAMIC SLIDER INTEGRATED HERE ⚡) */}
{(activeTab === 'All' || activeTab === 'JavaScript') && (
  <div className="flex flex-col bg-[#f9f9f9] border border-gray-200/90 rounded-2xl overflow-hidden group w-full transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.10),0_0_40px_-10px_rgba(0,0,0,0.04)]">
    
    {/* Dynamic Image Canvas Slider Window for Movie Project */}
    <div className="h-[260px] bg-white border-b border-gray-200/60 relative overflow-hidden p-2">
      <div 
        className="w-full h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${movieSlide * 100}%)` }}
      >
        {movieImages.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 relative bg-white">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-contain bg-white" 
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-xs text-[10px] text-gray-200 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-3 right-3 flex gap-1 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
        {movieImages.map((_, idx) => (
          <span 
            key={idx} 
            className={`h-1 transition-all duration-300 ${idx === movieSlide ? 'w-2.5 bg-white' : 'w-1 bg-white/40'}`}
          />
        ))}
      </div>
    </div>

    {/* Card Details Content */}
    <div className="p-5 flex flex-col flex-grow text-left">
      <h4 className="text-[15px] font-bold text-gray-900 mb-2 flex items-center gap-1.5">
        <span>🎬</span> Modern Movie Platform
      </h4>
      <p className="text-[12.5px] text-gray-600 font-normal leading-relaxed mb-4 line-clamp-2 h-[36px]">
        Engineered a slick media platform showcasing a responsive blurred backdrop interface, immersive depth effect layouts, and automated theater carousels.
      </p>
      <div className="flex flex-wrap gap-1 mb-5">
        {["JavaScript", "HTML5", "CSS3", "UI Depth Layout"].map((tech, idx) => (
          <span
            key={idx}
            className="text-[11px] font-normal text-gray-600 bg-white border border-gray-300 px-2.5 py-0.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:text-gray-900 hover:shadow-[0_10px_25px_-8px_rgba(0,0,0,0.15)] cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[12px] font-medium text-gray-500 pt-3 border-t border-gray-200/50 mt-auto">
        <a href="https://github.com/rahul-diw/Animated-Movie-Website" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
          <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
          </svg>
          GitHub
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer no-underline">
          <svg className="w-3.5 h-3.5 fill-none stroke-[2]" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Live
        </a>
      </div>
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
}