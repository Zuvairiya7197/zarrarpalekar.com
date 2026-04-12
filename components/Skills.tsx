import { skillGroups } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for polished interfaces, scalable systems, and fast iteration."
          description="From frontend architecture to launch tooling, every piece is chosen to help projects move quickly without compromising quality."
          centered
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[30px] border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.84)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-[rgb(var(--foreground))]">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex rounded-full border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--background)/0.75)] px-3.5 py-2 text-sm font-medium text-[rgb(var(--foreground))]"
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
