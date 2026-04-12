import { ArrowUpRight } from "lucide-react";
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
          title="Selected work shaped around clarity, trust, and conversion."
          description="A few examples of the kind of polished, high-intent work I enjoy building for brands that care about both aesthetics and outcomes."
          centered
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-6 overflow-hidden rounded-[34px] border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.88)] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.07)] backdrop-blur md:grid-cols-[0.98fr_1.02fr] md:p-6"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-[color:rgb(var(--border)/0.72)] bg-[rgb(var(--background)/0.7)] p-2">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--accent),0.1),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(var(--accent-secondary),0.12),transparent_38%)]" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  className="relative h-full w-full rounded-[24px] object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
                    {project.metric}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[rgb(var(--foreground))] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgb(var(--muted-foreground))] sm:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--background)/0.72)] px-3.5 py-2 text-sm font-medium text-[rgb(var(--foreground))]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--foreground))] px-5 py-3 text-sm font-semibold text-[rgb(var(--background))] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    View Live Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
