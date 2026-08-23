import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEngine from "./EngineStore";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollController() {
  const setSection = useEngine((s) => s.setSection);
  const setScrollProgress = useEngine((s) => s.setScrollProgress);
  const setSectionProgress = useEngine((s) => s.setSectionProgress);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];

    // Whole page progress
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",

      onUpdate(self) {
        setScrollProgress(self.progress);
      },
    });

    // Individual sections
    const triggers = sections.map((id) => {
      const element = document.getElementById(id);

      if (!element) return null;

      return ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",

        onUpdate(self) {
          setSectionProgress(self.progress);
        },

        onEnter() {
          setSection(id);
        },

        onEnterBack() {
          setSection(id);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}