"use client";

import { motion, useReducedMotion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const reducedItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  viewportMargin?: string;
}

interface ItemProps {
  children: React.ReactNode;
  className?: string;
}

function Item({ children, className }: ItemProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? reducedItemVariants : itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerGrid({
  children,
  className,
  staggerDelay = 0.12,
  viewportMargin = "-80px",
}: ContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

StaggerGrid.Item = Item;
export default StaggerGrid;
