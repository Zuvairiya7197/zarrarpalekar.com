import { BriefcaseBusiness, Mail } from "lucide-react";

import { heroRoles, trustStats } from "@/lib/site";

import { TypedRoles } from "./TypedRoles";
import { Container } from "./ui/Container";
import { CountUp } from "./ui/CountUp";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-12 pt-4 sm:pb-16 sm:pt-8">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[position:72%_95%] sm:bg-center"
        style={{
          backgroundImage:
            "url(https://lightgoldenrodyellow-fox-787789.hostingersite.com/wp-content/uploads/2026/04/Hero-section-image.png)",
        }}
      />

      <Container className="relative max-w-[1770px] px-4 sm:px-6 lg:px-10">
        <div className="relative min-h-[960px] px-0 py-0 sm:min-h-[760px] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="relative z-10 mx-auto mt-[730px] max-w-[470px] rounded-[28px] border border-[rgba(138,84,255,0.28)] bg-[rgba(16,8,34,0.78)] px-7 py-8 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-[2px] sm:mx-0 sm:ml-2 sm:mt-2 sm:px-8 sm:py-9 lg:ml-4 lg:mt-4">
            <h1 className="font-[family-name:var(--font-display)] text-[56px] font-bold leading-[0.92] tracking-[-0.05em] text-white sm:text-[72px] lg:text-[86px]">
              <span className="block">I&apos;m Zarrar</span>
              <span className="mt-2 block bg-[linear-gradient(180deg,#b300ff_0%,#7c11ff_48%,#5f4bff_100%)] bg-clip-text text-transparent">
                Palekar
              </span>
            </h1>

            <div className="mt-4">
              <h2 className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[36px]">
                <TypedRoles roles={heroRoles} />
              </h2>
            </div>

            <p className="mt-6 max-w-[450px] text-[18px] leading-[1.65] text-[rgb(var(--muted-foreground))] sm:text-[24px] sm:leading-[1.55]">
              I build modern, scalable web applications that solve real-world problems.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-6 text-[17px] font-semibold text-white shadow-[0_18px_40px_rgba(108,92,231,0.28)] transition-transform duration-200 hover:scale-[1.03]"
              >
                Explore My Work
                <BriefcaseBusiness className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/70 bg-transparent px-6 text-[17px] font-semibold text-white transition-colors duration-200 hover:border-white"
              >
                Get In Touch
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-5 grid max-w-[470px] grid-cols-3 gap-2.5 sm:mx-0 sm:ml-2 sm:gap-4 lg:ml-4 lg:mt-5">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[22px] border border-[rgba(138,84,255,0.24)] bg-[rgba(14,8,29,0.72)] px-3 py-6 text-center shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:min-h-[184px] sm:px-7 sm:py-8"
              >
                <p className="text-[28px] font-bold tracking-[-0.04em] text-white sm:text-[42px]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-[11px] leading-[1.35] text-[rgb(var(--muted-foreground))] sm:text-[17px] sm:leading-[1.4]">
                  {stat.label === "Years Experience" ? (
                    <>
                      Years
                      <br />
                      Experience
                    </>
                  ) : stat.label === "Project Completed" ? (
                    <>
                      Project
                      <br />
                      Completed
                    </>
                  ) : (
                    <>
                      Technical
                      <br />
                      Skills
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
