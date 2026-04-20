"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function useScrollSpy(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const ratiosRef = useRef<Map<string, number>>(new Map());
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

    ratiosRef.current.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          const ratio = entry.intersectionRatio;

          if (ratio === 0) {
            ratiosRef.current.delete(id);
          } else {
            ratiosRef.current.set(id, ratio);
          }
        }

        let nextActive = activeRef.current;
        let maxRatio = -1;

        for (const id of sectionIds) {
          const ratio = ratiosRef.current.get(id);
          if (ratio !== undefined && ratio > maxRatio) {
            maxRatio = ratio;
            nextActive = id;
          }
        }

        if (nextActive && nextActive !== activeRef.current) {
          activeRef.current = nextActive;
          setActiveSection(nextActive);
        }
      },
      {
        root: null,
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "-20% 0px -40% 0px",
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
