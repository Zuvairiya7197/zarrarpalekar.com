import Image from "next/image";

import { experiences } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

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

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="My Professional Journey."
          description="A timeline of growth, challenges, & impactful solution across leading companies."
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.start}`}
              className="rounded-[28px] border border-[color:rgb(var(--border)/0.9)] bg-[rgb(var(--surface)/0.72)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[color:rgb(var(--border)/0.7)] bg-white/95 p-2">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                  <p className="mt-1 text-sm font-medium text-[rgb(var(--muted-foreground))]">
                    {experience.title}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[rgb(var(--accent-secondary))]">
                    {experience.specialization}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--background)/0.7)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/88"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-[rgb(var(--muted-foreground))]">
                {formatPeriod(experience.start, experience.end)}
              </p>

              <div className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Description
                </p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-[rgb(var(--muted-foreground))]">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--accent))]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
