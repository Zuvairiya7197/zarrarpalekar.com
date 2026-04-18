import { BriefcaseBusiness, Mail } from "lucide-react";
import Image from "next/image";
import zarruProfessional from "@/public/Images/Zarru Professional.png";

import { heroRoles, trustStats } from "@/lib/site";

import { CountUp } from "./ui/CountUp";
import { Container } from "./ui/Container";
import { TypedRoles } from "./TypedRoles";

export function Hero() {
  return (
    <section id="home" className="hero-scene relative overflow-hidden">
      <div className="hero-nebula absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10">
        <Image
          src="/red-hero-image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex min-h-[calc(100vh-92px)] items-center py-6 sm:py-8 lg:py-12">
          <div className="grid w-full items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] md:gap-6 lg:grid-cols-[minmax(0,560px)_minmax(320px,1fr)] lg:gap-8 xl:gap-10">
            <div className="w-full max-w-[560px]">
            <div className="relative mx-auto mb-2 w-full max-w-[380px] md:hidden">
              <div className="relative aspect-[6/5] w-full overflow-hidden rounded-[26px]">
                <Image
                  src={zarruProfessional}
                  alt="Zarrar Palekar"
                  fill
                  sizes="(max-width: 767px) 82vw, 380px"
                  className="object-cover"
                  style={{ objectPosition: "50% calc(40% + 20px)" }}
                />
              </div>
            </div>

            <div className="hero-glass-card relative z-10 -mt-6 rounded-[26px] px-5 py-6 sm:-mt-8 sm:rounded-[36px] sm:px-8 sm:py-9 md:mt-0 lg:px-[44px] lg:py-[44px]">
              <h1 className="text-[36px] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[72px]">
                <span className="block">
                  I&apos;m <span className="text-[#d31b28]">Zarrar</span>
                </span>
                <span className="mt-1 block text-[#d31b28]">Palekar</span>
              </h1>

              <p className="mt-5 text-[18px] leading-[1.1] font-semibold tracking-[-0.02em] text-white sm:mt-6 sm:text-[24px] lg:text-[30px]">
                <TypedRoles roles={heroRoles} />
              </p>

              <p className="mt-5 max-w-[540px] text-[15px] leading-[1.55] text-[#b6b8c7] sm:mt-7 sm:text-[18px] lg:text-[22px]">
                I build modern, scalable web applications that solve real-world
                problems.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                <a
                  href="#projects"
                  className="group inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-full border border-[#ee4b57] bg-[linear-gradient(90deg,#81101a_0%,#b71825_45%,#d92534_100%)] px-8 text-[15px] font-semibold text-white sm:h-[56px] sm:px-10 sm:text-[17px]"
                >
                  Explore My Work
                  <span className="ml-0 inline-flex w-0 translate-x-[-6px] overflow-hidden opacity-0 transition-all duration-250 group-hover:ml-2 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="btn-secondary group inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-full border border-[#41465f] bg-[rgba(10,11,20,0.82)] px-8 text-[15px] font-semibold text-white sm:h-[56px] sm:px-10 sm:text-[17px]"
                >
                  Get In Touch
                  <span className="ml-0 inline-flex w-0 translate-x-[-6px] overflow-hidden opacity-0 transition-all duration-250 group-hover:ml-2 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100">
                    <Mail className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-4 grid w-full grid-cols-3 gap-2 sm:gap-2.5">
              {trustStats.map((stat) => (
                <div key={stat.label} className="hero-glass-card rounded-[16px] px-2.5 py-5 text-center sm:px-3 sm:py-6">
                  <p className="text-[21px] font-bold leading-none text-white sm:text-[26px]">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-[11px] leading-[1.25] text-[#b6b8c7] sm:text-[13px]">
                    <span className="block">{stat.label.split(" ")[0]}</span>
                    <span className="block">{stat.label.split(" ").slice(1).join(" ")}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

            <div className="relative mx-auto hidden w-full max-w-[460px] md:block lg:max-w-[620px]">
              <div className="relative aspect-[6/5] w-full overflow-hidden rounded-[26px]">
                <Image
                  src={zarruProfessional}
                  alt="Zarrar Palekar"
                  fill
                  sizes="(min-width: 1280px) 620px, (min-width: 1024px) 46vw, (min-width: 768px) 460px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "50% calc(40% + 20px)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
