"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.classList.contains("light") ? "light" : "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={toggle}
      className="relative h-10 w-[68px] rounded-full glass flex items-center px-1 transition"
    >
      <span
        className={
          "absolute top-1 h-8 w-8 rounded-full shadow-[0_4px_14px_-4px_rgba(0,0,0,0.45)] transition-all duration-300 " +
          (isLight
            ? "left-[34px] bg-gradient-to-br from-[#fbbf24] to-[#ef4444]"
            : "left-1 bg-gradient-to-br from-[#1d4ed8] to-[#2563eb]")
        }
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1.5 text-[12px]">
        <span aria-hidden className={isLight ? "opacity-40" : "opacity-100"}>🌙</span>
        <span aria-hidden className={isLight ? "opacity-100" : "opacity-40"}>☀️</span>
      </span>
      {!mounted && <span className="sr-only">loading theme</span>}
    </button>
  );
}
