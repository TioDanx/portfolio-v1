"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./animations/RevealOnScroll";
import StaggerGrid from "./animations/StaggerGrid";

const contactItems = [
  {
    icon: "mail",
    label: "EMAIL_PROTOCOL",
    href: "mailto:danicampu56@gmail.com",
    active: true,
    external: false,
  },
  {
    icon: "link",
    label: "LINKEDIN_ID",
    href: "https://www.linkedin.com/in/daniel-campuzano-7149552b7",
    active: false,
    external: true,
  },
  {
    icon: "terminal",
    label: "GIT_REPOSITORY",
    href: "https://github.com/TioDanx/",
    active: false,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-24 px-6 lg:px-8 xl:px-16 border-t border-[#3a4a49]/20"
    >
      <RevealOnScroll direction="up">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-[#0e0e0e] border border-[#3a4a49]/30 overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Terminal header bar */}
            <div className="bg-[#2a2a2a] px-6 py-2 flex items-center justify-between border-b border-[#3a4a49]/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
                <div className="w-3 h-3 rounded-full bg-[#77ff61]" />
                <div className="w-3 h-3 rounded-full bg-[#00dddd]" />
              </div>
              <div className="text-[10px] text-[#b9cac9] uppercase tracking-widest hidden lg:block">
                SECURE_CHANNEL_v4.2
              </div>
              <div className="text-[9px] uppercase tracking-tighter opacity-50 lg:hidden">
                bash — 80x24
              </div>
            </div>

            {/* Contact content */}
            <div className="p-6 lg:p-12 space-y-8 lg:space-y-12">
              <div>
                <h2 className="text-2xl lg:text-4xl font-black text-white uppercase mb-4 tracking-tighter">
                  INITIATE_CONTACT
                </h2>
                <p className="text-[#b9cac9] max-w-lg">
                  Send a direct transmission for collaboration inquiries, project
                  proposals, or technical discussions.
                </p>
              </div>

              <StaggerGrid className="space-y-6" staggerDelay={0.12}>
                {contactItems.map(({ icon, label, href, active, external }) => (
                  <StaggerGrid.Item key={label}>
                    <motion.a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className={`group relative flex items-center gap-4 pl-4 py-2 overflow-hidden hover:bg-[#1c1b1b] transition-colors`}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      {/* animated left border */}
                      <span
                        className={`absolute left-0 top-0 w-0.5 h-full origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 bg-[#00dddd]`}
                      />
                      <span
                        className={`absolute left-0 top-0 w-0.5 h-full ${active ? "bg-[#00dddd]" : "bg-[#3a4a49]"}`}
                        style={{ transformOrigin: "top" }}
                      />
                      <span className="material-symbols-outlined text-[#00dddd]">
                        {icon}
                      </span>
                      <div className="text-lg text-white uppercase tracking-tight group-hover:text-[#00dddd] transition-colors duration-200">
                        {label}
                      </div>
                      <span className="material-symbols-outlined text-[#00dddd]/0 group-hover:text-[#00dddd]/60 transition-colors text-sm ml-auto mr-2">
                        north_east
                      </span>
                    </motion.a>
                  </StaggerGrid.Item>
                ))}
              </StaggerGrid>

              <div className="pt-8 flex items-center gap-4 text-xs">
                <span className="text-[#28ff1d] animate-pulse phosphor-flicker">&gt;</span>
                <span className="text-[#b9cac9] terminal-cursor">AWAITING_INPUT_</span>
              </div>
            </div>

          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
