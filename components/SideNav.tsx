"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#bio", icon: "person_outline", label: "Bio" },
  { href: "#projects", icon: "code", label: "Projects" },
  { href: "#stack", icon: "layers", label: "Stack" },
  { href: "#contact", icon: "terminal", label: "Contact" },
];

const navItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("bio");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.aside
      initial={{ x: -288, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="overflow-hidden fixed left-0 top-0 h-full hidden lg:flex flex-col z-50 w-72 bg-[#131313] border-r border-[#3a4a49]/30 neon-pulse overflow-y-auto"
    >
      <div className="p-8 space-y-2">
        <span className="text-lg font-bold font-mono text-[#00ffff] uppercase tracking-tighter">
          DANIEL_DEV_SYS_v1.0
        </span>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#b9cac9]/60">
          ENGINEERED_PORTFOLIO
        </p>
      </div>

      <motion.nav
        className="flex-1 mt-8 space-y-1"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
        }}
      >
        {navItems.map(({ href, icon, label }) => {
          const active = activeSection === href.slice(1);
          return (
            <motion.a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
              }}
              variants={navItemVariants}
              whileHover={{ x: 4, transition: { type: "spring", stiffness: 500, damping: 35 } }}
              className={
                active
                  ? "flex items-center gap-3 px-8 py-4 text-[#00ffff] bg-[#2a2a2a] border-l-2 border-[#00ffff] font-bold transition-colors scale-[0.99] brightness-125"
                  : "flex items-center gap-3 px-8 py-4 text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:bg-[#2a2a2a] transition-colors duration-200"
              }
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="text-sm uppercase tracking-widest">{label}</span>
            </motion.a>
          );
        })}
      </motion.nav>

    </motion.aside>
  );
}
