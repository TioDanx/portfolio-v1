"use client";

import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9997] h-[2px] origin-left"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: "#00dddd",
        boxShadow: "0 0 8px rgba(0,221,221,0.8), 0 0 16px rgba(0,221,221,0.4)",
      }}
    />
  );
}
