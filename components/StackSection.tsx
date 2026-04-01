"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./animations/RevealOnScroll";
import StaggerGrid from "./animations/StaggerGrid";

const stackItems = [
  { label: "React.js", icon: null, text: null, materialIcon: null, svgPath: "M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" },
  { label: "Next.js", text: "N", svgPath: null, materialIcon: null },
  { label: "TypeScript", text: "TS", svgPath: null, materialIcon: null },
  { label: "Tailwind", text: null, materialIcon: "brush", svgPath: null },
  { label: "Claude Code", text: null, materialIcon: "smart_toy", svgPath: null },
  { label: "Firestore", text: null, materialIcon: "database", svgPath: null },
  { label: "Vercel", text: null, materialIcon: "rocket_launch", svgPath: null },
  { label: "Gemini", text: null, materialIcon: "auto_awesome", svgPath: null },
];

const mobileStackIcons = [
  "code",
  "data_object",
  "database",
  "smart_toy",
  "rocket_launch",
  "api",
  "auto_awesome",
  "layers",
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="py-20 lg:py-32 px-6 lg:px-16 bg-[#0e0e0e]"
    >
      <div className="hidden lg:block max-w-4xl mx-auto space-y-16">
        <RevealOnScroll direction="up">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold uppercase tracking-tight">
              TECH_STACK_OVERRIDE
            </h2>
            <p className="text-xs text-[#00dddd] tracking-[0.4em] uppercase">
              Verified_System_Capabilities
            </p>
          </div>
        </RevealOnScroll>

        <StaggerGrid
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#3a4a49]/20 border border-[#3a4a49]/20"
          staggerDelay={0.07}
        >
          {stackItems.map(({ label, text, materialIcon, svgPath }) => (
            <StaggerGrid.Item key={label}>
              <motion.div
                className="bg-[#131313] p-12 flex flex-col items-center gap-6 group"
                whileHover={{ backgroundColor: "#201f1f", transition: { duration: 0.15 } }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full border border-[#00dddd]/20 flex items-center justify-center"
                  whileHover={{ borderColor: "#00dddd", scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {svgPath && (
                    <svg className="w-8 h-8 text-[#00dddd]" fill="currentColor" viewBox="0 0 24 24">
                      <path d={svgPath} />
                    </svg>
                  )}
                  {text && <span className="font-bold text-xl">{text}</span>}
                  {materialIcon && (
                    <span className="material-symbols-outlined text-3xl">{materialIcon}</span>
                  )}
                </motion.div>
                <span className="text-sm uppercase tracking-widest">{label}</span>
              </motion.div>
            </StaggerGrid.Item>
          ))}
        </StaggerGrid>
      </div>

      <div className="lg:hidden">
        <RevealOnScroll direction="up">
          <h2 className="text-xs uppercase tracking-[0.3em] text-center mb-12 opacity-50">
            Core_Engine_Components
          </h2>
        </RevealOnScroll>

        <StaggerGrid
          className="grid grid-cols-4 gap-4 max-w-sm mx-auto"
          staggerDelay={0.05}
        >
          {mobileStackIcons.map((icon) => (
            <StaggerGrid.Item key={icon}>
              <motion.div
                className="aspect-square bg-[#1c1b1b] border border-[#3a4a49]/20 flex items-center justify-center"
                whileHover={{ borderColor: "#00fbfb", transition: { duration: 0.15 } }}
              >
                <span className="material-symbols-outlined text-[#b9cac9] group-hover:text-[#00fbfb] transition-colors">
                  {icon}
                </span>
              </motion.div>
            </StaggerGrid.Item>
          ))}
        </StaggerGrid>

        <RevealOnScroll direction="none" delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-[10px] text-[#28ff1d] tracking-widest animate-pulse uppercase">
              Status: Systems_Optimal
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
