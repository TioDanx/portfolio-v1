"use client";

import { useEffect, useState } from "react";

const LINES = [
  "> INITIALIZING_SYSTEM...",
  "> LOADING_MODULES:  [████████████] 100%",
  "> PORTFOLIO_v1.0 READY",
];

export default function BootLoader() {
  const [visible, setVisible] = useState(false);
  const [shownLines, setShownLines] = useState<string[]>([]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) return;
    setVisible(true);

    let i = 0;
    const show = () => {
      if (i < LINES.length) {
        const line = LINES[i];
        i++;
        setShownLines((prev) => [...prev, line]);
        setTimeout(show, 500);
      } else {
        sessionStorage.setItem("booted", "1");
        window.dispatchEvent(new Event("boot:complete"));
        setTimeout(() => setFading(true), 400);
        setTimeout(() => setVisible(false), 1000);
      }
    };

    setTimeout(show, 200);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1, pointerEvents: fading ? "none" : "all" }}
    >
      <div className="font-mono text-sm space-y-3 px-8">
        {shownLines.map((line, i) => (
          <p
            key={i}
            className="text-[#00dddd] tracking-widest animate-fade-in"
            style={{
              textShadow: "0 0 10px rgba(0,221,221,0.6)",
            }}
          >
            {line}
          </p>
        ))}
        {shownLines.length < LINES.length && (
          <span className="text-[#00dddd] terminal-cursor" />
        )}
      </div>
    </div>
  );
}
