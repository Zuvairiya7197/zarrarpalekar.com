import { LayoutPanelLeft, Rocket, Sparkles, type LucideIcon } from "lucide-react";

import { services } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  layout: LayoutPanelLeft,
  rocket: Rocket,
  sparkles: Sparkles,
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Flexible senior-level support for launches, redesigns, and growth experiments."
          description="Whether you need a full site build or a frontend partner who can plug into an existing workflow, the goal is always the same: elegant execution with a clear commercial purpose."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.title}
                className="rounded-[30px] border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.86)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.06)] backdrop-blur transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(var(--accent),0.12)] text-[rgb(var(--accent))]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[rgb(var(--foreground))]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted-foreground))]">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--background)/0.72)] px-4 py-3 text-sm font-medium text-[rgb(var(--foreground))]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
