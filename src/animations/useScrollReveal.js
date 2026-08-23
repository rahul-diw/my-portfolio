import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function useScrollReveal(offset) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 1]);

  const blur = useTransform(scrollYProgress, [0, 0.25], [20, 0]);

  const rotateX = useTransform(scrollYProgress, [0, 1], [35, 0]);

  const rotateY = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);

  return {
    ref,
    scrollYProgress,
    opacity,
    blur,
    rotateX,
    rotateY,
    scale,
    y,
  };
}