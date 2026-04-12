import { Quote } from "lucide-react";

import { testimonials } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from teams who needed execution they could trust."
          description="The projects change, but the pattern stays consistent: thoughtful communication, high standards, and a final product that feels intentional."
          centered
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-[30px] border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.86)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(var(--accent),0.12)] text-[rgb(var(--accent))]">
                <Quote className="h-5 w-5" />
              </div>
              <p className="mt-6 flex-1 text-base leading-8 text-[rgb(var(--foreground))]">
                “{testimonial.quote}”
              </p>
              <div className="mt-8 border-t border-[color:rgb(var(--border)/0.65)] pt-5">
                <p className="text-sm font-semibold text-[rgb(var(--foreground))]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-[rgb(var(--muted-foreground))]">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
