"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useScrollSpy(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");
  const activeRef = useRef(activeSection);
  const rafRef = useRef(0);
  const tickingRef = useRef(false);

  const setActiveIfChanged = useCallback((id: string) => {
    if (!id || activeRef.current === id) {
      return;
    }

    activeRef.current = id;
    setActiveSection(id);
  }, []);

  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const markerOffset = 120;

    const updateActiveSection = () => {
      let nextActive = activeRef.current;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top <= markerOffset && rect.bottom > markerOffset) {
          nextActive = id;
          break;
        }
      }

      setActiveIfChanged(nextActive);
    };

    const onScroll = () => {
      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;
      rafRef.current = window.requestAnimationFrame(() => {
        updateActiveSection();
        tickingRef.current = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      tickingRef.current = false;
    };
  }, [idsKey, sectionIds, setActiveIfChanged]);

  return {
    activeSection,
    setActiveSection: setActiveIfChanged,
  };
}
