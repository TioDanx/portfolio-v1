"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
}: Props) {
  const reduce = useReducedMotion();
  const y = direction === "up" ? 32 : 0;
  const x = direction === "left" ? -32 : direction === "right" ? 32 : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, x: reduce ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
