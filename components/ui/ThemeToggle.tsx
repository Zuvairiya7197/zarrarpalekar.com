"use client";

import { Monitor, MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const isDark = mounted && resolvedTheme === "dark";
  const Icon = mounted ? (isDark ? SunMedium : MoonStar) : Monitor;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--surface)/0.82)] text-[rgb(var(--foreground))] shadow-[0_12px_32px_rgba(12,18,28,0.08)] backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
