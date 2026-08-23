// src/animations/projectMotion.js

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardReveal = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
    filter: "blur(18px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const floatingAnimation = {
  y: [0, -8, 0, 8, 0],
  rotate: [0, 0.4, 0, -0.4, 0],

  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};