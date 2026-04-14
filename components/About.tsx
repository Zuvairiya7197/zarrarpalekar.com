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
    <article className="flex min-h-[128px] flex-col items-center justify-center rounded-[18px] border border-[rgba(122,24,255,0.34)] bg-[rgba(15,6,28,0.84)] px-2 py-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.26)] sm:min-h-[142px] sm:px-3 sm:py-4 xl:min-h-[178px] xl:rounded-[22px] xl:px-5 xl:py-5">
      <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full sm:h-[58px] sm:w-[58px] xl:h-[76px] xl:w-[76px]">
        <Image src={image} alt={title} fill sizes="82px" className="object-cover" />
      </div>

      <h3 className="mt-3 text-[14px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[16px] xl:mt-4 xl:text-[22px]">
        {title}
      </h3>
      <p className="mt-1.5 text-[11px] leading-tight text-[rgba(173,176,210,0.8)] sm:text-[12px] xl:mt-2 xl:text-[17px]">
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
            <div className="grid grid-cols-3 gap-3 sm:gap-4 xl:grid-cols-1 xl:gap-5">
              {leftHighlights.map((item) => (
                <HighlightCard key={item.title} {...item} />
              ))}
            </div>

            <div className="rounded-[22px] border border-[rgba(122,24,255,0.34)] bg-[rgba(14,6,22,0.94)] px-6 py-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:px-7 sm:py-6 lg:px-8 lg:py-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.02em] text-white">
                <Heart className="h-4 w-4 fill-current" />
                <span>About Me</span>
              </div>

              <h2 className="mt-8 max-w-[620px] text-[36px] font-semibold leading-[1.06] tracking-[-0.05em] text-white sm:text-[46px] lg:text-[54px]">
                <span>More Than </span>
                <span className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-transparent">
                  Code.
                </span>
                <br />
                <span>I Build </span>
                <span className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-transparent">
                  Impact.
                </span>
              </h2>

              <div className="mt-6 max-w-[800px] space-y-4">
                <p className="text-[19px] font-medium leading-[1.42] text-white sm:text-[21px]">
                  <span className="mr-2 inline-block">👋</span>
                  <span>Hi there! I am </span>
                  <span className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text font-semibold uppercase text-transparent">
                    ZARRAR PALEKAR.
                  </span>
                </p>

                <p className="max-w-[800px] text-[16px] leading-[1.48] tracking-[-0.015em] text-[rgba(233,236,255,0.9)] sm:text-[17px]">
                  <span>With over </span>
                  <span className="font-semibold text-[#8b22ff]">{experienceYears} years</span>
                  <span>{primaryParagraph.replace(`With over ${experienceYears} years`, "")}</span>
                </p>

                <p className="max-w-[800px] text-[16px] leading-[1.48] tracking-[-0.015em] text-[rgba(233,236,255,0.9)] sm:text-[17px]">
                  {secondaryParagraph}
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

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsExpanded((current) => !current)}
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-5 text-[14px] font-semibold text-white shadow-[0_14px_30px_rgba(108,92,231,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>

                  <a
                    href="/resume"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center rounded-full border border-[rgba(176,104,255,0.6)] bg-transparent px-5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:scale-[1.02] hover:border-[rgba(214,151,255,0.88)] hover:bg-[rgba(38,14,58,0.32)]"
                  >
                    See Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 xl:grid-cols-1 xl:gap-5">
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
