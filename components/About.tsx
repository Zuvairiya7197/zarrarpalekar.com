import Image from "next/image";

import { aboutHighlights, aboutParagraphs } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-[color:rgb(var(--border)/0.78)] bg-[rgb(var(--surface)/0.72)] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.24)]"
              >
                <div className="relative mx-auto h-28 w-28">
                  <Image src={item.image} alt={item.title} fill sizes="112px" className="object-contain" />
                </div>
                <p className="mt-4 text-center text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-center text-sm text-[rgb(var(--muted-foreground))]">
                  {item.subtitle}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[32px] border border-[color:rgb(var(--border)/0.78)] bg-[rgb(var(--surface)/0.72)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
            <SectionHeading
              eyebrow="ABOUT ME"
              title="More Than Code. I Build Impact."
              description=""
            />

            <div className="mt-6 space-y-5 text-sm leading-8 text-[rgb(var(--muted-foreground))] sm:text-base">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={paragraph}>
                  {index === 0 ? (
                    <>
                      <span className="font-semibold text-white">{paragraph.split(".")[0]}.</span>
                      {paragraph.slice(paragraph.split(".")[0].length + 1)}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
