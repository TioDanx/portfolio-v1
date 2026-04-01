"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function NeonCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsTouchDevice(false);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setIsHovering(!!target.closest("a, button, [role='button'], input, textarea"));
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  const ringSize = isClicking ? 18 : isHovering ? 40 : 28;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          backgroundColor: isHovering ? "#ff003c" : "#00dddd",
          boxShadow: isHovering ? "0 0 8px #ff003c" : "0 0 6px #00dddd",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: isHovering ? "rgba(255,0,60,0.8)" : "rgba(0,221,221,0.6)",
          backgroundColor: isHovering ? "rgba(255,0,60,0.05)" : "transparent",
          boxShadow: isHovering ? "0 0 12px rgba(255,0,60,0.4)" : "none",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        initial={{ width: 28, height: 28 }}
      />
    </>
  );
}
