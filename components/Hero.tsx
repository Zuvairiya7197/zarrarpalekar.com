 "use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { trustStats } from "@/lib/site";

import { CountUp } from "./ui/CountUp";
import { Container } from "./ui/Container";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const nebulaOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.84]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -92]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 0.95]);

  return (
    <section ref={sectionRef} id="home" className="hero-scene relative overflow-hidden">
      <motion.div className="hero-nebula absolute inset-0 -z-20" style={{ opacity: nebulaOpacity }} />
      <motion.div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/red-hero-image.png')",
          opacity: bgOpacity,
        }}
      />

      <Container className="relative max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex min-h-[calc(100vh-92px)] items-center py-6 sm:py-8 lg:py-12">
          <div className="grid w-full items-center gap-6 lg:grid-cols-[minmax(0,560px)_minmax(320px,1fr)] lg:gap-8 xl:gap-10">
            <motion.div className="w-full max-w-[560px]" style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}>
            <div className="hero-glass-card rounded-[26px] px-5 py-6 sm:rounded-[36px] sm:px-8 sm:py-9 lg:px-[44px] lg:py-[44px]">
              <h1 className="text-[36px] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[72px]">
                <span className="block">
                  I&apos;m <span className="text-[#d31b28]">Zarrar</span>
                </span>
                <span className="mt-1 block text-[#d31b28]">Palekar</span>
              </h1>

              <p className="mt-5 text-[18px] leading-[1.1] font-semibold tracking-[-0.02em] text-white sm:mt-6 sm:text-[24px] lg:text-[30px]">
                Full Stack Developer
              </p>

              <p className="mt-5 max-w-[540px] text-[15px] leading-[1.55] text-[#b6b8c7] sm:mt-7 sm:text-[18px] lg:text-[22px]">
                I build modern, scalable web applications that solve real-world
                problems.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#ee4b57] bg-[linear-gradient(90deg,#81101a_0%,#b71825_45%,#d92534_100%)] px-8 text-[15px] font-semibold text-white sm:h-[56px] sm:px-10 sm:text-[17px]"
                >
                  Explore My Work
                </a>
                <a
                  href="#contact"
                  className="btn-secondary inline-flex h-[52px] items-center justify-center rounded-full border border-[#41465f] bg-[rgba(10,11,20,0.82)] px-8 text-[15px] font-semibold text-white sm:h-[56px] sm:px-10 sm:text-[17px]"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            <motion.div className="mt-4 grid w-full grid-cols-3 gap-2 sm:gap-2.5" style={{ y: statsY }}>
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="hero-glass-card rounded-[16px] px-2.5 py-3 text-center sm:px-3 sm:py-4"
                >
                  <p className="text-[21px] font-bold leading-none text-white sm:text-[26px]">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-[11px] leading-[1.25] text-[#b6b8c7] sm:text-[13px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

            <motion.div className="relative mx-auto hidden w-full max-w-[620px] lg:block" style={{ y: imageY, scale: imageScale }}>
              <div className="hero-apple-frame relative aspect-[6/5] w-full overflow-hidden">
                <div className="hero-apple-glow pointer-events-none absolute inset-0 z-10" />
                <Image
                  src="/Images/Zarru.png"
                  alt="Zarrar Palekar"
                  fill
                  priority
                  sizes="(min-width: 1280px) 620px, (min-width: 1024px) 46vw, 100vw"
                  className="scale-[1.01] object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
