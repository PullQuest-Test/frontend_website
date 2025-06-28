"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [animating, setAnimating] = useState(false);
  const prev = useRef(isDark);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefers)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    if (animating) return;        // lock while animating
    setAnimating(true);

    prev.current = isDark;        // keep old for exit
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    // allow exit animation to finish
    setTimeout(() => setAnimating(false), 200);
  };

  // Decide which icons to render:
  // - The “current” one always
  // - The “previous” one if we're in the 200ms exit window
  const showOld = animating;
  const showNew = true;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="relative h-9 w-9 overflow-hidden"
    >
      <div className="relative h-4 w-4 mx-auto">
        {/* Old Icon (fades out) */}
        {showOld && (
          <span
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
            style={{ opacity: prev.current === false && showOld ? 1 : 0 }}
          >
            <Sun className="h-4 w-4 text-yellow-500" />
          </span>
        )}

        {/* New Icon (fades in) */}
        {showNew && (
          <span
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
            style={{ opacity: isDark ? 1 : 0 }}
          >
            <Moon className="h-4 w-4 text-blue-200" />
          </span>
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
