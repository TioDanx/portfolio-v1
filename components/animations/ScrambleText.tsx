"use client";

import React, { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_#@!%";

interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  ready?: boolean;
}

export default function ScrambleText({ text, className, style, delay = 0, ready = true }: ScrambleTextProps) {
  const [displayed, setDisplayed] = useState(() => text.replace(/./g, "_"));
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lockedRef = useRef(0);

  useEffect(() => {
    if (!ready) return;
    let started = false;
    const timeout = setTimeout(() => {
      started = true;
      frameRef.current = setInterval(() => {
        const locked = lockedRef.current;
        if (locked >= text.length) {
          clearInterval(frameRef.current!);
          setDisplayed(text);
          return;
        }

        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (i < locked) return char;
              if (char === " ") return " ";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (Math.random() < 0.18) {
          lockedRef.current += 1;
        }
      }, 40);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (started && frameRef.current) clearInterval(frameRef.current);
    };
  }, [text, delay, ready]);

  return (
    <span className={className} style={style} data-text={text}>
      {displayed}
    </span>
  );
}
