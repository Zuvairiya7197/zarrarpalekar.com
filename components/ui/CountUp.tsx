"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
};

export function CountUp({ value, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const duration = 1200;

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          setCount(Math.floor(progress * value));

          if (progress < 1) {
            frame = window.requestAnimationFrame(animate);
          }
        };

        frame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
