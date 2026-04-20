"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function useScrollSpy(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");
  const activeRef = useRef(activeSection);

  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const id = (entry.target as HTMLElement).id;
          if (activeRef.current !== id) {
            activeRef.current = id;
            setActiveSection(id);
          }
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-45% 0px -45% 0px",
      },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [idsKey, sectionIds]);

  return activeSection;
}
