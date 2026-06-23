import React, { useEffect, useRef, useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

/**
 * PageTransitionWrapper:
 * Yeh local component har section ko slow slide-up aur scale-in animation deta hai
 * jab user scroll karke us section par aata hai.
 */
function PageTransitionWrapper({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Ek baar render hone ke baad observer unobserve kar deta hai taaki fluid experience rahe
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Jab element 10% dikhega tabhi slide trigger hoga
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity' // Hardware acceleration enabled for ultimate smoothness
      }}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-6 scale-[0.99]' // Very subtle scale and slide for organic feel
      }`}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#fafafa] min-h-screen text-gray-900 antialiased selection:bg-neutral-200">
      <Navbar />
      <main>
        {/* Hero (Home) Section with instant transition */}
        <PageTransitionWrapper delay={0}>
          <Hero />
        </PageTransitionWrapper>

        {/* About Section with 100ms slow buttery delay */}
        <PageTransitionWrapper delay={100}>
          <About />
        </PageTransitionWrapper>

        {/* Projects Section with 150ms delay */}
        <PageTransitionWrapper delay={150}>
          <Projects />
        </PageTransitionWrapper>

        {/* Contact Section with 200ms delay */}
        <PageTransitionWrapper delay={200}>
          <Contact />
        </PageTransitionWrapper>
      </main>
    </div>
  );
}