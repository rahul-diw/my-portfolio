import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const { personalInfo } = portfolioData;
  
  // Track karne ke liye ki abhi screen par kaun sa section active hai
  const [activeSection, setActiveSection] = useState('home');
  
  // Indicator line ki dynamic positioning (Width aur Left offset) ke liye state
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  
  // Saare nav links ke DOM element references ko store karne ke liye refs container
  const linksRef = useRef({});

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // 1. SCROLL TRACKING LOGIC (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px', // Screen ke middle aur top edge ke beech trigger karega
      threshold: 0, 
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 2. SLIDING LINE ANIMATION POSITIONING LOGIC
  useEffect(() => {
    // Jab bhi activeSection badlega, hum us link ka actual width aur left coordinate measure karenge
    const activeLinkEl = linksRef.current[activeSection];
    if (activeLinkEl) {
      const { offsetLeft, offsetWidth } = activeLinkEl;
      setLineStyle({
        left: offsetLeft,
        width: offsetWidth
      });
    }
  }, [activeSection]);

  // 3. SMOOTH SCROLL CLICK HANDLER (Navbar height offset ke sath)
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Navbar ke peeche heading na chupe isliye gap padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-300/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] z-50 py-3 transition-all duration-300 font-jakarta">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-0 w-full">
        
        {/* LEFT SIDE: Logo / Name */}
        <div className="flex-shrink-0">
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, 'home')}
            className="text-xl font-bold tracking-tight text-gray-950 uppercase cursor-pointer"
          >
            {personalInfo.name}
          </a>
        </div>

        {/* CENTER SIDE: Nav Links with Real Smooth Sliding Line */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight relative py-2">
          
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                ref={(el) => (linksRef.current[link.id] = el)} // DOM Node reference calculate karne ke liye save kar rahe hain
                onClick={(e) => handleNavLinkClick(e, link.id)}
                className={`relative py-1 transition-colors duration-300 select-none ${
                  isActive ? 'text-black font-semibold' : 'text-gray-400 hover:text-black'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* SINGLE SLIDING LINE: Yeh line poore navbar mein left-right smoothly slide karegi */}
          <span
            className="absolute bottom-0 h-[2px] bg-black transition-all duration-300 ease-in-out"
            style={{
              left: `${lineStyle.left}px`,
              width: `${lineStyle.width}px`,
            }}
          />
        </div>

        {/* RIGHT SIDE: GITHUB ICON */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-[14px] border border-transparent hover:border-gray-300 bg-transparent transition-all duration-300 group"
        >
          <svg
            className="w-5 h-5 text-black transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

      </div>
    </nav>
  );
}