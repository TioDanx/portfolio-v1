"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "./animations/RevealOnScroll";
import StaggerGrid from "./animations/StaggerGrid";

export default function BioSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [12, -12]);
  const rotateY = useTransform(springX, [0, 1], [-12, 12]);
  const glowX = useTransform(springX, [0, 1], [0, 100]);
  const glowY = useTransform(springY, [0, 1], [0, 100]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <section
      id="bio"
      className="py-20 lg:py-32 px-6 lg:px-16 bg-[#1c1b1b]"
    >
      <StaggerGrid
        className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        staggerDelay={0.15}
      >
        {/* Left — image */}
        <StaggerGrid.Item>
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#00dddd]/20 pointer-events-none" />
            <div className="absolute top-0 right-0 p-2 text-[10px] text-[#00dddd]/40 z-10">
              FRM_0442
            </div>
            <motion.div
              ref={imgRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 800,
              }}
              className="bg-[#353534] overflow-hidden p-1 aspect-square relative cursor-crosshair"
            >
              <Image
                src="/daniel.jpg"
                alt="Daniel Campuzano — Developer portrait"
                width={600}
                height={600}
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,221,221,0.04) 2px, rgba(0,221,221,0.04) 4px)",
                }}
              />
              {/* Moving glare */}
              <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: useTransform(
                    [glowX, glowY],
                    ([x, y]) =>
                      `radial-gradient(circle at ${x}% ${y}%, rgba(0,221,221,0.18) 0%, transparent 60%)`
                  ),
                }}
              />
              {/* RGB split on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none mix-blend-screen"
                initial={{ opacity: 0, x: 0 }}
                whileHover={{ opacity: 0.35, x: [0, 3, -3, 2, 0] }}
                transition={{ duration: 0.4, times: [0, 0.25, 0.5, 0.75, 1] }}
                style={{ filter: "url(#rgb-r)" }}
              />
            </motion.div>
            {/* Identity badge */}
            <div className="absolute -bottom-4 -left-4 p-6 bg-[#131313] border border-[#3a4a49]/30 glow-primary neon-pulse">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00dddd]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#00dddd]">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="text-[10px] text-[#b9cac9]/50">
                    IDENTITY_CONFIRMED
                  </p>
                  <p className="text-sm text-white uppercase tracking-widest font-bold">
                    DANIEL_V1.EXE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StaggerGrid.Item>

        {/* Right — text */}
        <StaggerGrid.Item>
          <div className="space-y-8 mt-8 lg:mt-0">
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight">
              The Human Behind
              <br />
              The{" "}
              <span className="text-[#00dddd]">Machine</span>
            </h2>
            <div className="space-y-6 text-[#b9cac9] leading-relaxed text-lg">
              <p>
                I specialize in crafting interfaces that are both{" "}
                <span className="text-white">visually precise and faithful</span>{" "}
                to the design, pixel-perfect, fast, and optimized from the ground up.
              </p>
              <p>
                My stack of choice is <span className="text-white">React, Next.js, and Tailwind</span>.
                Lately I&apos;ve been integrating AI tools like{" "}
                <span className="text-white">Claude and Cursor</span> into my workflow
                to ship better work, faster.
              </p>
            </div>
            <StaggerGrid className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              <StaggerGrid.Item>
                <div className="p-4 border border-[#3a4a49]/30 bg-[#131313]">
                  <p className="text-[10px] text-[#00dddd] uppercase">Experience</p>
                  <p className="text-2xl font-bold">05+ YEARS</p>
                </div>
              </StaggerGrid.Item>
              <StaggerGrid.Item>
                <div className="p-4 border border-[#3a4a49]/30 bg-[#131313]">
                  <p className="text-[10px] text-[#00dddd] uppercase">Uptime</p>
                  <p className="text-2xl font-bold">99.9%</p>
                </div>
              </StaggerGrid.Item>
            </StaggerGrid>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#28ff1d] animate-pulse shadow-[0_0_8px_#28ff1d]" />
              <span className="text-[10px] text-[#b9cac9]/60 uppercase tracking-widest">
                SYSTEM_ONLINE
              </span>
            </div>
          </div>
        </StaggerGrid.Item>

        {/* Mobile about — identity matrix */}
        <RevealOnScroll direction="up" delay={0.1}>
          <div className="lg:hidden bg-[#0e0e0e] p-6 border-l-2 border-[#28ff1d]">
            <p className="text-xs text-[#edffe1]/60 mb-2">system.log_bio</p>
            <p className="text-sm leading-relaxed text-[#e5e2e1]">
              Building at the intersection of aesthetics and efficiency. My
              approach combines pixel-perfect precision with robust backend
              engineering. Focused on creating digital environments that respond
              with kinetic intent.
            </p>
          </div>
        </RevealOnScroll>
      </StaggerGrid>
      {/* SVG filter for RGB glitch */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="rgb-r" x="-10%" y="-10%" width="120%" height="120%">
            <feColorMatrix type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
