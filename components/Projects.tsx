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
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
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

          <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const sourceCode = "sourceCode" in project ? project.sourceCode : undefined;
              const isOpen = openProject === project.title;

              return (
                <article key={project.title} className="h-full [perspective:1400px]">
                  <div
                    className={`relative h-[357px] w-full transition-transform duration-500 [transform-style:preserve-3d] sm:h-[374px] lg:h-[391px] ${
                      isOpen ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex h-full flex-col rounded-[24px] border border-white/12 bg-[linear-gradient(165deg,rgba(16,14,28,0.9)_0%,rgba(8,8,16,0.86)_100%)] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.32)] [backface-visibility:hidden] sm:p-5 lg:p-6">
                      <div className="overflow-hidden rounded-[16px] border border-white/12 bg-[rgba(8,10,18,0.9)] p-2.5 sm:p-3">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1200}
                          height={700}
                          sizes="(min-width: 1024px) 32vw, 100vw"
                          className="h-[152px] w-full rounded-[12px] object-cover sm:h-[162px] lg:h-[168px]"
                        />
                      </div>

                      <div className="mt-5 flex items-start justify-between gap-3">
                        <h3 className="truncate whitespace-nowrap text-[24px] font-semibold leading-tight text-white sm:text-[28px]">
                          {project.title}
                        </h3>
                        <div className="mt-0.5 shrink-0 rounded-full border border-[rgba(255,98,118,0.35)] bg-[linear-gradient(90deg,rgba(142,24,39,0.92)_0%,rgba(192,42,62,0.9)_100%)] px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-white uppercase">
                          {getProjectDateBadge(project.date)}
                        </div>
                      </div>

                      <div className="mt-auto pt-5">
                        <button
                          type="button"
                          onClick={() => setOpenProject(project.title)}
                          className="btn-secondary inline-flex h-[52px] w-full items-center justify-between rounded-full border px-6 text-[14px] font-medium text-white/88 sm:h-[54px] sm:px-8 sm:text-[15px]"
                        >
                          <span>Project Details</span>
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-[rgba(255,255,255,0.04)]">
                            <ChevronDown className="-rotate-90 h-3.5 w-3.5 text-white/78 transition-transform duration-200" />
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-[24px] border border-white/12 bg-[linear-gradient(165deg,rgba(16,14,28,0.92)_0%,rgba(8,8,16,0.9)_100%)] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.32)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5">
                      <div className="flex h-full flex-col overflow-y-auto pr-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex items-start justify-between gap-2.5">
                          <h3 className="truncate whitespace-nowrap text-[20px] font-semibold leading-tight text-white sm:text-[22px]">
                            {project.title}
                          </h3>
                          <div className="shrink-0 rounded-full border border-[rgba(255,98,118,0.35)] bg-[linear-gradient(90deg,rgba(142,24,39,0.92)_0%,rgba(192,42,62,0.9)_100%)] px-2.5 py-1 text-[10px] font-semibold tracking-[0.05em] text-white uppercase">
                            {getProjectDateBadge(project.date)}
                          </div>
                        </div>

                        <p className="mt-2.5 break-words text-[14px] leading-[1.5] text-[#d4d8e4] sm:text-[15px]">
                          {project.description}
                        </p>

                        <p className="mt-3 text-[11px] font-semibold tracking-[0.05em] text-[#f0f2f8] uppercase">
                          Technologies Used:
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[11px] font-medium text-[#e3e7f0]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <p className="mt-3 text-[11px] font-semibold tracking-[0.05em] text-[#f0f2f8] uppercase">
                          Highlights:
                        </p>
                        <ul className="mt-2.5 space-y-2 text-[13px] leading-[1.45] text-[#dce0ea] sm:text-[14px]">
                          {project.details.map((detail) => (
                            <li key={`${project.title}-${detail}`} className="flex items-start gap-2.5">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d2d6de]" />
                              <span className="break-words">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-3">
                          <div className="mb-3 h-px w-full bg-white/10" />
                          <div className="flex w-full flex-wrap items-center gap-2.5">
                          {sourceCode ? (
                            <a
                              href={sourceCode}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-[42px] items-center gap-2 rounded-full border border-[#f36b79] bg-[linear-gradient(90deg,#6f141f_0%,#992130_50%,#bc3343_100%)] px-5 text-[12px] font-semibold text-white"
                            >
                              Source Code <ArrowRight className="h-4 w-4 text-white" />
                            </a>
                          ) : null}
                          <button
                            type="button"
                            onClick={() => setOpenProject((current) => (current === project.title ? null : current))}
                            className="btn-secondary ml-auto inline-flex h-[42px] items-center justify-center rounded-full border px-4 text-[12px] font-medium text-white/88"
                          >
                            Back
                          </button>
                          </div>
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
