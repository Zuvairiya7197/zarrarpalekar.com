"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

import { aboutHighlights, aboutParagraphs, experienceYears } from "@/lib/site";

import { Container } from "./ui/Container";

function HighlightCard({
  title,
  subtitle,
  image,
}: (typeof aboutHighlights)[number]) {
  return (
    <article className="flex min-h-[178px] flex-col items-center justify-center rounded-[22px] border border-[rgba(122,24,255,0.34)] bg-[rgba(15,6,28,0.84)] px-5 py-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
      <div className="relative h-[76px] w-[76px] overflow-hidden rounded-full">
        <Image src={image} alt={title} fill sizes="82px" className="object-cover" />
      </div>

      <h3 className="mt-4 text-[20px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[22px]">
        {title}
      </h3>
      <p className="mt-2 text-[16px] leading-none text-[rgba(173,176,210,0.8)] sm:text-[17px]">
        {subtitle}
      </p>
    </article>
  );
}

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [leftHighlights, rightHighlights] = useMemo(
    () => [aboutHighlights.slice(0, 3), aboutHighlights.slice(3)],
    [],
  );

  const primaryParagraph = aboutParagraphs[0];
  const secondaryParagraph = aboutParagraphs[1];
  const extendedParagraphs = aboutParagraphs.slice(2);

  return (
    <section id="about" className="section-padding">
      <Container className="max-w-[1760px]">
        <div className="rounded-[26px] border border-[rgba(101,17,204,0.35)] bg-[rgba(5,2,12,0.94)] px-5 py-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:px-7 sm:py-7 lg:px-10 lg:py-7">
          <div className="grid gap-5 xl:grid-cols-[300px_minmax(0,1fr)_300px] xl:items-stretch">
            <div className="grid gap-5">
              {leftHighlights.map((item) => (
                <HighlightCard key={item.title} {...item} />
              ))}
            </div>

            <div className="rounded-[22px] border border-[rgba(122,24,255,0.34)] bg-[rgba(14,6,22,0.94)] px-6 py-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:px-7 sm:py-6 lg:px-8 lg:py-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#7f1dff_0%,#8f32ff_50%,#6519d5_100%)] px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.02em] text-white">
                <Heart className="h-4 w-4 fill-current" />
                <span>About Me</span>
              </div>

              <h2 className="mt-8 max-w-[620px] text-[36px] font-semibold leading-[1.06] tracking-[-0.05em] text-white sm:text-[46px] lg:text-[54px]">
                <span>More Than </span>
                <span className="bg-[linear-gradient(180deg,#d13bff_0%,#7423ff_100%)] bg-clip-text text-transparent">
                  Code.
                </span>
                <br />
                <span>I Build </span>
                <span className="bg-[linear-gradient(180deg,#d13bff_0%,#7423ff_100%)] bg-clip-text text-transparent">
                  Impact.
                </span>
              </h2>

              <div className="mt-6 max-w-[800px] space-y-4">
                <p className="text-[19px] font-medium leading-[1.42] text-white sm:text-[21px]">
                  <span className="mr-2 inline-block">👋</span>
                  <span>Hi there! I am </span>
                  <span className="font-semibold uppercase text-[#8b22ff]">ZARRAR PALEKAR.</span>
                </p>

                <p className="max-w-[800px] text-[16px] leading-[1.48] tracking-[-0.015em] text-[rgba(233,236,255,0.9)] sm:text-[17px]">
                  <span>With over </span>
                  <span className="font-semibold text-[#8b22ff]">{experienceYears} years</span>
                  <span>{primaryParagraph.replace(`With over ${experienceYears} years`, "")}</span>
                </p>

                <p className="max-w-[800px] text-[16px] leading-[1.48] tracking-[-0.015em] text-[rgba(233,236,255,0.9)] sm:text-[17px]">
                  {secondaryParagraph.replace("With over years", `With over ${experienceYears} years`)}
                </p>

                {isExpanded
                  ? extendedParagraphs.map((paragraph, index) => (
                      <p
                        key={`${index}-${paragraph.slice(0, 18)}`}
                        className="max-w-[800px] text-[16px] leading-[1.48] tracking-[-0.015em] text-[rgba(233,236,255,0.9)] sm:text-[17px]"
                      >
                        {paragraph}
                      </p>
                    ))
                  : null}

                <button
                  type="button"
                  onClick={() => setIsExpanded((current) => !current)}
                  className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#7f1dff_0%,#9f2eff_100%)] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_14px_34px_rgba(127,29,255,0.32)] hover:scale-[1.02] hover:shadow-[0_18px_36px_rgba(127,29,255,0.4)]"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>

            <div className="grid gap-5">
              {rightHighlights.map((item) => (
                <HighlightCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
