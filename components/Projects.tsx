"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { projects } from "@/lib/site";

import { Container } from "./ui/Container";

function getProjectDateBadge(input: string) {
  const normalized = input.replace("-", " ").trim();
  const parsed = new Date(`01 ${normalized}`);

  if (Number.isNaN(parsed.getTime())) {
    return normalized;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(parsed);
}

export function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="w-full">
          <div className="max-w-3xl">
            <p className="section-capsule inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium tracking-[0.06em] uppercase sm:text-[13px]">
              Projects
            </p>
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[54px]">
              Featured <span className="text-[#ff3346]">Projects</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.65] text-white/72 sm:text-[18px]">
              Minimal overview. Open any project card to explore full details.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const sourceCode = "sourceCode" in project ? project.sourceCode : undefined;
              const isOpen = openProject === project.title;

              return (
                <article key={project.title} className="[perspective:1400px]">
                  <div
                    className={`relative h-[400px] w-full transition-transform duration-500 [transform-style:preserve-3d] sm:h-[415px] lg:h-[430px] ${
                      isOpen ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex h-full flex-col justify-center rounded-[24px] border border-white/12 bg-[linear-gradient(165deg,rgba(16,14,28,0.9)_0%,rgba(8,8,16,0.86)_100%)] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.32)] [backface-visibility:hidden] sm:p-5">
                      <div className="overflow-hidden rounded-[16px] border border-white/12 bg-[rgba(8,10,18,0.9)] p-2.5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1200}
                          height={700}
                          sizes="(min-width: 1024px) 32vw, 100vw"
                          className="h-[152px] w-full rounded-[12px] object-cover sm:h-[162px] lg:h-[168px]"
                        />
                      </div>

                      <div className="mt-4 flex items-start justify-between gap-3">
                        <h3 className="text-[24px] font-semibold leading-tight text-white sm:text-[28px]">
                          {project.title}
                        </h3>
                        <div className="mt-0.5 shrink-0 rounded-full border border-[rgba(255,98,118,0.35)] bg-[linear-gradient(90deg,rgba(142,24,39,0.92)_0%,rgba(192,42,62,0.9)_100%)] px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-white uppercase">
                          {getProjectDateBadge(project.date)}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpenProject(project.title)}
                        className="btn-secondary mt-4 inline-flex h-[52px] w-full items-center justify-between rounded-full border px-6 text-[14px] font-medium text-white/88 sm:h-[54px] sm:px-8 sm:text-[15px]"
                      >
                        <span>Project Details</span>
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-[rgba(255,255,255,0.04)]">
                          <ChevronDown className="-rotate-90 h-3.5 w-3.5 text-white/78 transition-transform duration-200" />
                        </span>
                      </button>
                    </div>

                    <div className="absolute inset-0 rounded-[24px] border border-white/12 bg-[linear-gradient(165deg,rgba(16,14,28,0.92)_0%,rgba(8,8,16,0.9)_100%)] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.32)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5">
                      <div className="flex h-full flex-col overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <h3 className="text-[24px] font-semibold leading-tight text-white sm:text-[28px]">
                          {project.title}
                        </h3>

                        <p className="mt-4 text-[16px] leading-[1.6] text-[#d1d4df] sm:text-[17px]">
                          {project.description}
                        </p>

                        <p className="mt-4 text-[16px] font-semibold text-[#f0f2f8] sm:text-[17px]">
                          Technologies Used:
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[12px] font-medium text-[#e3e7f0]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <ul className="mt-5 space-y-2.5 text-[14px] leading-[1.5] text-[#dce0ea] sm:text-[15px]">
                          {project.details.map((detail) => (
                            <li key={`${project.title}-${detail}`} className="flex items-start gap-2.5">
                              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d2d6de]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => setOpenProject((current) => (current === project.title ? null : current))}
                            className="btn-secondary inline-flex h-[46px] items-center justify-center rounded-full border px-5 text-[13px] font-medium text-white/88"
                          >
                            Back
                          </button>
                          {sourceCode ? (
                            <a
                              href={sourceCode}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-[46px] items-center gap-2 rounded-full border border-[#f36b79] bg-[linear-gradient(90deg,#6f141f_0%,#992130_50%,#bc3343_100%)] px-6 text-[13px] font-semibold text-white"
                            >
                              Source Code <ArrowRight className="h-4 w-4 text-white" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
