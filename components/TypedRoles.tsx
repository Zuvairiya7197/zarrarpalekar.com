"use client";

import { useEffect, useRef } from "react";

export function TypedRoles({ roles }: { roles: readonly string[] }) {
  const firstRole = roles[0] ?? "";
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (roles.length === 0) {
      return;
    }

    let timeout = 0;
    let roleIndex = 0;
    let displayed = firstRole;
    let isDeleting = false;

    const writeDisplayed = () => {
      if (textRef.current) {
        textRef.current.textContent = displayed;
      }
    };

    const tick = () => {
      const current = roles[roleIndex] ?? "";

      if (!isDeleting && displayed !== current) {
        displayed = current.slice(0, displayed.length + 1);
        writeDisplayed();
        timeout = window.setTimeout(tick, 85);
        return;
      }

      if (!isDeleting && displayed === current) {
        isDeleting = true;
        timeout = window.setTimeout(tick, 1400);
        return;
      }

      if (isDeleting && displayed.length > 0) {
        displayed = current.slice(0, displayed.length - 1);
        writeDisplayed();
        timeout = window.setTimeout(tick, 35);
        return;
      }

      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      timeout = window.setTimeout(tick, 85);
    };

    writeDisplayed();
    timeout = window.setTimeout(tick, 550);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [firstRole, roles]);

  return (
    <span className="inline-flex items-center">
      <span ref={textRef}>{firstRole}</span>
      <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-[rgb(var(--accent-secondary))]" />
    </span>
  );
}
