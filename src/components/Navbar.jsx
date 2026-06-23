import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from "../data/portfolioData";
import { FaGithub } from "react-icons/fa";


export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-0 w-full">
        
        {/* LEFT SIDE: Logo / Name */}
        <div className="flex-shrink-0">
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, 'home')}
            className="text-lg sm:text-xl font-bold tracking-tight text-gray-950 uppercase cursor-pointer"
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
      <div className="flex items-center gap-2">
  
  {/* GitHub Icon */}
  <a
    href={personalInfo.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-[14px] border border-transparent hover:border-gray-300 bg-transparent transition-all duration-300 group"
  >
   <FaGithub className="w-5 h-5 text-black transition-transform duration-300 group-hover:scale-110" />
  </a>

{/* Mobile Hamburger */}
<button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
>
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

</div>

      </div>

      {mobileMenuOpen && (
  <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl">
    <div className="flex flex-col px-6 py-4">

      {navLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          onClick={(e) => {
            handleNavLinkClick(e, link.id);
            setMobileMenuOpen(false);
          }}
          className="py-3 text-gray-700 font-medium border-b border-gray-100 last:border-0"
        >
          {link.label}
        </a>
      ))}

    </div>
  </div>
)}
    </nav>
  );
}