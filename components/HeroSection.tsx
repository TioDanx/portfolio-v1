"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 72;
    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number; opacity: number;
    };

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const LINK_DIST = 140;
    const COLOR = "0,221,221";

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.18;
            ctx.strokeStyle = `rgba(${COLOR},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR},${p.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative h-screen flex flex-col justify-center px-6 lg:px-16 border-b border-[#3a4a49]/10 overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <ParticleCanvas />

      {/* System status — desktop top-right */}
      <motion.div variants={item} className="absolute top-12 right-12 text-right hidden lg:block">
        <p className="text-[10px] text-[#00dddd]/40 tracking-[0.3em] uppercase">
          SYSTEM_STATUS: OPTIMIZED
        </p>
        <p className="text-[10px] text-[#00dddd]/40 tracking-[0.3em] uppercase">
          LOCAL_TIME: 04:21:00_PST
        </p>
      </motion.div>

      <div className="max-w-4xl space-y-6 relative">
        {/* Initialize label */}
        <motion.div variants={item} className="inline-flex items-center gap-4 text-[#00dddd]">
          <span className="h-px w-12 bg-[#00dddd]" />
          <span className="text-sm uppercase tracking-[0.4em]">
            Initialize_Protocol
          </span>
        </motion.div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tighter uppercase">
          <motion.div variants={item}>DANIEL_</motion.div>
          <motion.div variants={item}>
            <span
              data-text="CAMPUZANO"
              className="glitch-text text-transparent border-b-4 border-[#00dddd]"
              style={{ WebkitTextStroke: "1px white" }}
            >
              CAMPUZANO
            </span>
          </motion.div>
        </h1>

        {/* Subtitle */}
        <motion.p variants={item} className="text-xl md:text-2xl text-[#b9cac9] max-w-2xl leading-relaxed">
          Frontend Engineer.{" "}
          <span className="text-white">
            Building fast, scalable, and precise interfaces
          </span>{" "}
          with an engineered focus on performance.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="bg-white px-8 py-4 font-bold text-[#003737] tracking-widest hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow text-center"
          >
            VIEW_PROJECTS
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="border border-[#3a4a49] px-8 py-4 font-bold text-white tracking-widest hover:bg-[#3a3939]/10 transition-colors text-center"
          >
            GET_IN_TOUCH_
          </motion.a>
        </motion.div>
      </div>

      {/* Bounce indicator */}
      <motion.div variants={item} className="absolute bottom-12 left-6 lg:left-16 animate-bounce">
        <span className="material-symbols-outlined text-[#00dddd]">
          expand_more
        </span>
      </motion.div>

      {/* Mobile metadata footer */}
      <motion.div variants={item} className="absolute bottom-12 right-6 lg:hidden text-right opacity-40">
        <p className="text-[10px] text-[#00dddd] tracking-widest">
          LOC: 40.7128° N
        </p>
        <p className="text-[10px] text-[#00dddd] tracking-widest">
          VER: 0.9.2-STABLE
        </p>
      </motion.div>
    </motion.section>
  );
}
