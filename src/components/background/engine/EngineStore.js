import { create } from "zustand";

const useEngine = create((set) => ({
  // Current Section
  section: "hero",

  // Progress of entire page (0 → 1)
  scrollProgress: 0,

  // Progress of current section (0 → 1)
  sectionProgress: 0,

  // Mouse
  mouse: {
    x: 0,
    y: 0,
  },

  // Camera
  camera: {
    x: 0,
    y: 0,
    z: 10,
  },

  transition: 0,

  setSection: (value) =>
    set({
      section: value,
    }),

  setScrollProgress: (value) =>
    set({
      scrollProgress: value,
    }),

  setSectionProgress: (value) =>
    set({
      sectionProgress: value,
    }),

  setMouse: (value) =>
    set({
      mouse: value,
    }),

  setCamera: (value) =>
    set({
      camera: value,
    }),

  setTransition: (value) =>
    set({
      transition: value,
    }),
}));

export default useEngine;