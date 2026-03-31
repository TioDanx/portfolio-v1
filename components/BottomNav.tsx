"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#bio", icon: "fingerprint", label: "Bio" },
  { href: "#projects", icon: "developer_mode_tv", label: "Projects" },
  { href: "#stack", icon: "layers", label: "Stack" },
  { href: "#contact", icon: "terminal", label: "Contact" },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("bio");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="lg:hidden bg-[#131313]/90 backdrop-blur-xl fixed bottom-0 w-full z-50 flex justify-around items-center px-4 h-20 shadow-[0_-4px_20px_rgba(0,255,255,0.1)] border-t border-[#3a4a49]">
      {navItems.map(({ href, icon, label }) => {
        const active = activeSection === href.slice(1);
        return (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`flex flex-col items-center justify-center transition-all ${
              active
                ? "text-[#00ffff] scale-110"
                : "text-[#e5e2e1]/40 hover:text-[#00ffff] transition-colors"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {icon}
            </span>
            <span className="text-[10px] uppercase tracking-[0.05rem]">
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
