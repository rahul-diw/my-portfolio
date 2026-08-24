import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEngine from "./EngineStore";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollController() {
  const setSection = useEngine((s) => s.setSection);
  const setScrollProgress = useEngine((s) => s.setScrollProgress);
  const setSectionProgress = useEngine((s) => s.setSectionProgress);

  const progressFrame = useRef(null);
  const sectionFrame = useRef(null);

  const latestProgress = useRef(0);
  const latestSectionProgress = useRef(0);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];

    // -----------------------------------------
    // Whole page progress
    // -----------------------------------------

    const pageTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",

      onUpdate(self) {
        latestProgress.current = self.progress;

        // Prevent multiple store updates inside
        // the same browser frame.
        if (progressFrame.current !== null) return;

        progressFrame.current = requestAnimationFrame(() => {
          setScrollProgress(latestProgress.current);
          progressFrame.current = null;
        });
      },
    });

    // -----------------------------------------
    // Individual section progress
    // -----------------------------------------

    const triggers = sections
      .map((id) => {
        const element = document.getElementById(id);

        if (!element) return null;

        return ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",

          onUpdate(self) {
            latestSectionProgress.current = self.progress;

            // Prevent excessive Zustand updates
            // while scrolling.
            if (sectionFrame.current !== null) return;

            sectionFrame.current = requestAnimationFrame(() => {
              setSectionProgress(latestSectionProgress.current);
              sectionFrame.current = null;
            });
          },

          onEnter() {
            setSection(id);
          },

          onEnterBack() {
            setSection(id);
          },
        });
      })
      .filter(Boolean);

    // -----------------------------------------
    // Cleanup
    // -----------------------------------------

    return () => {
      pageTrigger.kill();

      triggers.forEach((trigger) => {
        trigger.kill();
      });

      if (progressFrame.current !== null) {
        cancelAnimationFrame(progressFrame.current);
        progressFrame.current = null;
      }

      if (sectionFrame.current !== null) {
        cancelAnimationFrame(sectionFrame.current);
        sectionFrame.current = null;
      }
    };
  }, [setSection, setScrollProgress, setSectionProgress]);

  return null;
}