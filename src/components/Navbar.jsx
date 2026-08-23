import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const { personalInfo } = portfolioData;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });

  // New States
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  const linksRef = useRef({});

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  /* -----------------------------
        SCROLL STATE
  ------------------------------*/

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -----------------------------
      ACTIVE SECTION OBSERVER
  ------------------------------*/

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-120px 0px -45% 0px",
        threshold: 0,
      }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* -----------------------------
      ACTIVE CAPSULE POSITION
  ------------------------------*/

  useEffect(() => {
    const current =
      linksRef.current[hovered || activeSection];

    if (!current) return;

    setLineStyle({
      left: current.offsetLeft,
      width: current.offsetWidth,
    });
  }, [activeSection, hovered]);

  /* -----------------------------
      SMOOTH SCROLL
  ------------------------------*/

  const handleNavLinkClick = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const offset = 70;

    const bodyTop =
      document.body.getBoundingClientRect().top;

    const elementTop =
      element.getBoundingClientRect().top;

    const position =
      elementTop - bodyTop - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    setActiveSection(id);

    setMobileMenuOpen(false);
  };

  /* -----------------------------
      ANIMATIONS
  ------------------------------*/

  const navAnimation = {
    initial: {
      opacity: 0,
      y: -40,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const drawerAnimation = {
    hidden: {
      opacity: 0,
      y: -30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
      },
    },

    exit: {
      opacity: 0,
      y: -25,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <motion.nav
      variants={navAnimation}
      initial="initial"
      animate="animate"
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-700
      ${
        scrolled
          ? "top-4 w-[92%] max-w-[1380px]"
          : "top-7 w-[96%] max-w-[1450px]"
      }`}
    >
      {/* Glass Container */}

      <div
        className={`
          relative
          flex
          items-center
          justify-between
          rounded-[26px]
          border
          transition-all
          duration-700

          ${
            scrolled
              ? "bg-black/45 backdrop-blur-3xl border-white/10 shadow-[0_25px_80px_rgba(0,0,0,.45)] px-8 py-3"
              : "bg-black/20 backdrop-blur-2xl border-white/5 px-10 py-4"
          }
        `}
      >
        {/* LOGO */}

        <button
          onClick={(e) => handleNavLinkClick(e, "home")}
          className="text-white font-semibold tracking-[0.15em] uppercase text-sm md:text-base transition-opacity hover:opacity-80"
        >
          {personalInfo.name}
        </button>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex relative items-center gap-12">
                    {/* Active Glass Capsule */}
          <motion.span
            className="absolute h-11 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl"
            animate={{
              left: lineStyle.left,
              width: lineStyle.width,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 28,
            }}
          />

          {navLinks.map((link) => {
            const active = activeSection === link.id;

            return (
              <button
                key={link.id}
                ref={(el) => (linksRef.current[link.id] = el)}
                onMouseEnter={() => setHovered(link.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={(e) => handleNavLinkClick(e, link.id)}
                className={`relative z-10 px-4 py-2 rounded-full transition-all duration-300 text-sm tracking-wide
                ${
                  active
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Github */}

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.08,
              rotate: 8,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              hidden
              lg:flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              text-white
              transition-all
              duration-300
              hover:bg-white/10
              hover:border-white/20
            "
          >
            <FaGithub size={19} />
          </motion.a>

          {/* Mobile Toggle */}

          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="
              lg:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
            "
          >
            {mobileMenuOpen ? (
              <HiX size={22} />
            ) : (
              <HiOutlineMenuAlt3 size={22} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}

      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            variants={drawerAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              lg:hidden
              mt-4
              rounded-[24px]
              border
              border-white/10
              bg-black/50
              backdrop-blur-3xl
              shadow-[0_25px_60px_rgba(0,0,0,.45)]
              overflow-hidden
            "
          >

            <div className="flex flex-col py-3">

              {navLinks.map((link) => {

                const active =
                  activeSection === link.id;

                return (

                  <button
                    key={link.id}
                    onClick={(e) =>
                      handleNavLinkClick(e, link.id)
                    }
                    className={`
                      px-6
                      py-4
                      text-left
                      transition-all
                      duration-300

                      ${
                        active
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    {link.label}
                  </button>

                );
              })}

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="
                  mx-4
                  mt-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  py-3
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-white
                "
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}