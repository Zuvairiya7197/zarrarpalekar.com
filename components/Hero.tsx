import { BriefcaseBusiness, Mail } from "lucide-react";

import { heroRoles, trustStats } from "@/lib/site";

import { TypedRoles } from "./TypedRoles";
import { Container } from "./ui/Container";
import { CountUp } from "./ui/CountUp";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-4 pt-4 sm:pb-8 sm:pt-8"
    >
      <div
        className="absolute inset-0 -z-10 bg-contain bg-no-repeat [background-position:center_top] sm:hidden"
        style={{
          backgroundImage: "url('/Images/Mobile hero.png')",
        }}
      />
      <div
        className="absolute inset-0 -z-10 hidden bg-cover bg-position-[72%_95%] sm:block sm:bg-center"
        style={{
          backgroundImage:
            "url(https://lightgoldenrodyellow-fox-787789.hostingersite.com/wp-content/uploads/2026/04/Hero-section-image.png)",
        }}
      />

      <Container className="relative max-w-442.5 px-4 sm:px-6 lg:px-10">
        <div className="relative min-h-0 px-0 py-0 sm:min-h-190 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="relative z-10 mx-auto [margin-top:clamp(240px,74vw,330px)] max-w-117.5 rounded-[28px] border border-[rgba(138,84,255,0.28)] bg-[rgba(16,8,34,0.78)] px-5 py-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-[2px] sm:mx-0 sm:ml-2 sm:mt-2 sm:px-8 sm:py-9 lg:ml-4 lg:mt-4">
            <h1 className="font-(family-name:--font-display) text-[42px] font-bold leading-[0.94] tracking-[-0.05em] text-white max-[390px]:text-[38px] sm:text-[72px] lg:text-[86px]">
              <span className="block">I&apos;m Zarrar</span>
              <span className="mt-2 block bg-[linear-gradient(180deg,#b300ff_0%,#7c11ff_48%,#5f4bff_100%)] bg-clip-text text-transparent">
                Palekar
              </span>
            </h1>

            <div className="mt-4">
              <h2 className="text-[23px] font-semibold leading-none tracking-[-0.03em] text-white max-[390px]:text-[21px] sm:text-[36px]">
                <TypedRoles roles={heroRoles} />
              </h2>
            </div>

            <p className="mt-5 max-w-112.5 text-[16px] leading-[1.6] text-[rgb(var(--muted-foreground))] sm:mt-6 sm:text-[24px] sm:leading-[1.55]">
              I build modern, scalable web applications that solve real-world
              problems.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-6 text-[16px] font-semibold text-white shadow-[0_18px_40px_rgba(108,92,231,0.28)] transition-transform duration-200 hover:scale-[1.03] sm:w-auto sm:text-[17px]"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-1">
                  Explore My Work
                </span>
                <span className="ml-0 inline-flex w-0 items-center justify-center overflow-hidden opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100">
                  <BriefcaseBusiness className="h-4 w-4" />
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full border border-transparent [background:linear-gradient(rgb(var(--background)/0.9),rgb(var(--background)/0.9))_padding-box,linear-gradient(135deg,#6366f1,#06b6d4)_border-box] px-6 text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(99,102,241,0.14)] transition-transform duration-200 hover:scale-[1.03] sm:w-auto sm:text-[17px]"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-1">
                  Get In Touch
                </span>
                <span className="ml-0 inline-flex w-0 items-center justify-center overflow-hidden opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100">
                  <Mail className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-4 grid max-w-117.5 grid-cols-3 gap-2 sm:mt-5 sm:mx-0 sm:ml-2 sm:gap-4 lg:ml-4 lg:mt-5">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[22px] border border-[rgba(138,84,255,0.24)] bg-[rgba(14,8,29,0.72)] px-2 py-4 text-center shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:min-h-46 sm:px-7 sm:py-8"
              >
                <p className="text-[24px] font-bold tracking-[-0.04em] text-white sm:text-[42px]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-[10px] leading-[1.3] text-[rgb(var(--muted-foreground))] sm:mt-3 sm:text-[17px] sm:leading-[1.4]">
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
