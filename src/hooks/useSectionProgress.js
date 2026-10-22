import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function useSectionProgress() {
  const [progress, setProgress] = useState({
    global: 0,
    hero: 0,
    about: 0,
    projects: 0,
    contact: 0,
  });

  useEffect(() => {
    const sections = [
      { id: "hero", key: "hero" },
      { id: "about", key: "about" },
      { id: "projects", key: "projects" },
      { id: "contact", key: "contact" },
    ];

    const triggers = [];

    // Global Scroll Progress
    triggers.push(
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          setProgress((prev) => ({
            ...prev,
            global: self.progress,
          }));
        },
      })
    );

    // Individual Section Progress
    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            setProgress((prev) => ({
              ...prev,
              [section.key]: self.progress,
            }));
          },
        })
      );
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return progress;
}