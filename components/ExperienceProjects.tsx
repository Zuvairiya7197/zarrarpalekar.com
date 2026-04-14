"use client";

import { useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, ChevronDown, FolderOpen } from "lucide-react";
import Image from "next/image";

import { experiences, projects } from "@/lib/site";

import { Container } from "./ui/Container";

function formatPeriod(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = end === "present" ? new Date() : new Date(end);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const duration = [
    years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "",
    months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `Period : ${formatter.format(startDate)} – ${
    end === "present" ? "Till Now" : formatter.format(endDate)
  } | ${duration}`;
}

function SectionPill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.02em] text-white">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function ExperiencePanel() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    function updateTimelineProgress() {
      const timeline = timelineRef.current;

      if (!timeline) {
        return;
      }

      const rect = timeline.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.42;
      const nextProgress = Math.min(
        1,
        Math.max(0, (viewportAnchor - rect.top) / Math.max(rect.height, 1)),
      );

      setTimelineProgress(nextProgress);
    }

    updateTimelineProgress();
    window.addEventListener("scroll", updateTimelineProgress, { passive: true });
    window.addEventListener("resize", updateTimelineProgress);

    return () => {
      window.removeEventListener("scroll", updateTimelineProgress);
      window.removeEventListener("resize", updateTimelineProgress);
    };
  }, []);

  return (
    <section
      id="experience"
      className="rounded-[28px] border border-[rgba(101,17,204,0.35)] bg-[rgba(5,2,12,0.94)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10"
    >
      <SectionPill icon={<BriefcaseBusiness className="h-4 w-4" />} label="Experience" />

      <h2 className="mt-8 text-[38px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[50px]">
        <span>My Professional </span>
        <span className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-transparent">
          Journey.
        </span>
      </h2>

      <p className="mt-4 max-w-[420px] text-[17px] leading-[1.7] text-[rgba(173,176,210,0.84)] sm:text-[18px]">
        A timeline of growth, challenges, & impactful solution across leading companies.
      </p>

      <div ref={timelineRef} className="relative mt-10 pl-8 sm:pl-10">
        <div className="absolute bottom-0 left-[11px] top-0 w-[3px] rounded-full bg-[linear-gradient(180deg,rgba(99,102,241,0.2)_0%,rgba(6,182,212,0.08)_100%)] sm:left-[14px]" />
        <div
          className="absolute left-[11px] top-0 w-[3px] rounded-full bg-[linear-gradient(180deg,#6366f1_0%,#06b6d4_100%)] shadow-[0_0_18px_rgba(99,102,241,0.52)] transition-[height] duration-200 ease-out sm:left-[14px]"
          style={{ height: `${timelineProgress * 100}%` }}
        />

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.start}`}
              className="group relative"
            >
              <div className="absolute left-[-38px] top-4 z-10 flex h-9 w-9 items-center justify-center sm:left-[-42px]">
                <span className="timeline-dot-pulse absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.42)_0%,rgba(6,182,212,0.22)_42%,rgba(6,182,212,0.06)_62%,rgba(6,182,212,0)_78%)]" />
                <span className="absolute h-[18px] w-[18px] rounded-full bg-[linear-gradient(135deg,#6366f1_0%,#06b6d4_100%)] shadow-[0_0_10px_rgba(99,102,241,0.7),0_0_24px_rgba(6,182,212,0.46)]" />
              </div>

              <article className="rounded-[24px] border border-[rgba(122,24,255,0.34)] bg-[rgba(15,6,28,0.84)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.26)] transition-all duration-300 ease-out group-hover:scale-[1.015] group-hover:border-[rgba(99,102,241,0.72)] group-hover:shadow-[0_0_0_1px_rgba(99,102,241,0.22),0_0_28px_rgba(99,102,241,0.28),0_0_56px_rgba(99,102,241,0.16),0_24px_60px_rgba(0,0,0,0.34)] sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/95 p-2">
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      fill
                      sizes="64px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[22px] font-semibold text-white">{experience.company}</h3>
                    <p className="mt-1 bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-[15px] font-semibold text-transparent">
                      {experience.title}
                    </p>
                    <p className="mt-4 text-[18px] font-semibold text-white">
                      {experience.specialization}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(135,49,214,0.55)] bg-[rgba(39,18,61,0.92)] px-3 py-1.5 text-[12px] font-semibold text-white/92"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-[15px] text-[rgba(220,222,235,0.82)]">
                  {formatPeriod(experience.start, experience.end)}
                </p>

                <div className="mt-5">
                  <p className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-[16px] font-semibold text-transparent">
                    Description
                  </p>
                  <ul className="mt-3 space-y-3 text-[15px] leading-7 text-[rgba(220,222,235,0.82)]">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[rgba(220,222,235,0.82)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPanel() {
  const [openProject, setOpenProject] = useState<string | null>(projects[0]?.title ?? null);

  return (
    <section
      id="projects"
      className="rounded-[28px] border border-[rgba(101,17,204,0.35)] bg-[rgba(5,2,12,0.94)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10"
    >
      <SectionPill icon={<FolderOpen className="h-4 w-4" />} label="Projects" />

      <h2 className="mt-8 text-[38px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[50px]">
        <span>Featured </span>
        <span className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-transparent">
          Projects.
        </span>
      </h2>

      <p className="mt-4 max-w-[500px] text-[17px] leading-[1.7] text-[rgba(173,176,210,0.84)] sm:text-[18px]">
        Some of the selected work that showcases my skills and passion.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-[26px] border border-[rgba(122,24,255,0.34)] bg-[rgba(15,6,28,0.84)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.26)] transition-all duration-300 ease-out hover:scale-[1.015] hover:border-[rgba(99,102,241,0.72)] hover:shadow-[0_0_0_1px_rgba(99,102,241,0.22),0_0_28px_rgba(99,102,241,0.28),0_0_56px_rgba(99,102,241,0.16),0_24px_60px_rgba(0,0,0,0.34)]"
          >
            {project.image ? (
              <div className="relative overflow-hidden rounded-[20px] border border-[rgba(122,24,255,0.2)] bg-[rgba(7,3,16,0.95)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex h-[220px] items-center justify-center rounded-[20px] border border-[rgba(122,24,255,0.2)] bg-[linear-gradient(135deg,rgba(160,40,255,0.18),rgba(15,6,28,0.88))] p-6">
                <p className="text-center text-2xl font-semibold text-white">{project.title}</p>
              </div>
            )}

            <div className="mt-5">
              <h3 className="text-[22px] font-semibold tracking-tight text-white sm:text-[24px]">
                {project.title}
              </h3>
              <p className="mt-1.5 bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-[14px] font-semibold text-transparent">
                {project.date}
              </p>
              <p className="mt-4 text-[16px] leading-7 text-[rgba(220,222,235,0.82)]">
                {project.description}
              </p>

              <button
                type="button"
                onClick={() =>
                  setOpenProject((current) => (current === project.title ? null : project.title))
                }
                className="mt-6 flex h-12 w-full items-center justify-between rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-6 text-left text-[17px] font-semibold text-white shadow-[0_18px_40px_rgba(108,92,231,0.28)] transition-transform duration-200 hover:scale-[1.01]"
              >
                <span>Project Details</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] text-white shadow-[0_8px_18px_rgba(108,92,231,0.24)]">
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openProject === project.title ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {openProject === project.title ? (
                <div className="mt-6">
                  <p className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-[16px] font-semibold text-transparent">
                    Technologies Used:
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={`${project.title}-${technology}`}
                        className="rounded-full border border-[rgba(135,49,214,0.55)] bg-[rgba(39,18,61,0.92)] px-3 py-1.5 text-[12px] font-semibold text-white/92"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2.5 text-[15px] leading-7 text-[rgba(220,222,235,0.82)]">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[rgba(220,222,235,0.82)]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {project.sourceCode ? (
                    <div className="mt-6">
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-5 text-[14px] font-semibold text-white shadow-[0_14px_30px_rgba(108,92,231,0.24)] transition-transform duration-200 hover:scale-[1.03]"
                      >
                        {project.title === "Tindog – Tinder for dogs" ||
                        project.title === "My First Website"
                          ? "View Project"
                          : "Source Code"}
                      </a>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceProjects() {
  return (
    <section className="section-padding">
      <Container className="max-w-[1760px]">
        <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <ExperiencePanel />
          <ProjectsPanel />
        </div>
      </Container>
    </section>
  );
}
