import { skillGroups } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="TECH SKILLS"
          title="Technologies I work with."
          description="I use modern technologies, and tools to build fast, scalable, and high-performance web applications."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-[color:rgb(var(--border)/0.78)] bg-[rgb(var(--surface)/0.72)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.24)]"
            >
              <div className="inline-flex rounded-full border border-[color:rgb(var(--border)/0.8)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {group.title}
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex rounded-full border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--background)/0.72)] px-3.5 py-2 text-sm font-medium text-white/92"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
