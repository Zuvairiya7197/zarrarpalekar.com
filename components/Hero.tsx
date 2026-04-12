import { BriefcaseBusiness, Mail } from "lucide-react";

import { heroRoles, trustStats } from "@/lib/site";

import { TypedRoles } from "./TypedRoles";
import { Container } from "./ui/Container";
import { CountUp } from "./ui/CountUp";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-12 pt-6 sm:pb-16 sm:pt-8">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://lightgoldenrodyellow-fox-787789.hostingersite.com/wp-content/uploads/2026/04/Hero-section-image.png)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(220,0,255,0.22),transparent_16%),linear-gradient(180deg,rgba(6,4,18,0.32),rgba(6,4,18,0.78))]" />

      <Container className="relative max-w-[1770px] px-4 sm:px-6 lg:px-10">
        <div className="relative min-h-[720px] px-5 py-6 sm:min-h-[760px] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="relative z-10 max-w-[560px] rounded-[28px] border border-[rgba(138,84,255,0.28)] bg-[rgba(16,8,34,0.78)] px-7 py-8 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-[2px] sm:ml-2 sm:mt-2 sm:px-8 sm:py-9 lg:ml-4 lg:mt-4">
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
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#9f14ff_0%,#6d43ff_100%)] px-6 text-[17px] font-semibold text-white shadow-[0_18px_40px_rgba(148,39,255,0.34)] transition-transform duration-200 hover:-translate-y-0.5"
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

          <div className="relative z-10 mt-5 grid max-w-[610px] gap-4 sm:grid-cols-3 lg:ml-4 lg:mt-5 lg:max-w-[570px]">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[22px] border border-[rgba(138,84,255,0.24)] bg-[rgba(14,8,29,0.72)] px-7 py-8 text-center shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:min-h-[184px]"
              >
                <p className="text-[38px] font-bold tracking-[-0.04em] text-white sm:text-[42px]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-[17px] leading-[1.4] text-[rgb(var(--muted-foreground))]">
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
