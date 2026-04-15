import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { projects } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects."
          description="Some of the selected work that showcases my skills and passion."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[30px] border border-[color:rgb(var(--border)/0.78)] bg-[rgb(var(--surface)/0.72)] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.24)]"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-[color:rgb(var(--border)/0.72)] bg-[rgb(var(--background)/0.78)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  quality={68}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[rgb(var(--accent-secondary))]">
                  {project.date}
                </p>
                <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted-foreground))]">
                  {project.description}
                </p>

                <div className="mt-5 rounded-[22px] border border-[color:rgb(var(--border)/0.7)] bg-[rgb(var(--background)/0.65)] p-4">
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    Project Details
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
