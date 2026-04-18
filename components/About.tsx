import {
  type LucideIcon,
  BriefcaseBusiness,
  Braces,
  Code2,
  Gauge,
  Layers,
  Palette,
  UserRound,
} from "lucide-react";

import { aboutHighlights, aboutParagraphs, experienceYears } from "@/lib/site";

import { Container } from "./ui/Container";

const highlightIcons: Record<string, LucideIcon> = {
  "Full Stack": Code2,
  Performance: Gauge,
  Experience: BriefcaseBusiness,
  "Clean Code": Braces,
  "UI\\UX": Palette,
  Scalable: Layers,
};

function HighlightCard({
  title,
  subtitle,
}: (typeof aboutHighlights)[number]) {
  const Icon = highlightIcons[title] ?? Code2;

  return (
    <article className="hero-glass-card flex h-full flex-col items-center justify-center rounded-[16px] px-2.5 py-3 text-center sm:px-3 sm:py-4">
      <div className="mx-auto inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.04)] sm:h-[48px] sm:w-[48px]">
        <Icon className="h-5 w-5 text-white/82 sm:h-6 sm:w-6" aria-hidden="true" />
      </div>

      <p className="mt-2 text-[18px] font-semibold leading-tight text-white sm:text-[20px]">{title}</p>
      <p className="mt-1 text-[11px] leading-[1.25] text-[#b6b8c7] sm:text-[12px]">{subtitle}</p>
    </article>
  );
}

export function About() {
  const leftHighlights = aboutHighlights.slice(0, 3);
  const rightHighlights = aboutHighlights.slice(3);

  const primaryParagraph = aboutParagraphs[0];
  const secondaryParagraph = aboutParagraphs[1];
  const extendedParagraphs = aboutParagraphs.slice(2);

  return (
    <section id="about" className="relative overflow-hidden py-2">

      <Container>
        <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)_220px] md:items-stretch xl:grid-cols-[280px_minmax(0,1fr)_280px]">
          <div className="border-none px-1 py-1 md:px-3 md:py-3 xl:px-4 xl:py-4">
            <div className="grid h-full auto-rows-fr gap-4">
              {leftHighlights.map((item) => (
                <HighlightCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="border-none px-1 py-1 md:px-3 md:py-3 xl:px-4 xl:py-4">
            <div className="hero-glass-card h-full rounded-[28px] px-5 py-6 sm:px-7 sm:py-7">
              <div className="section-capsule inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.06em] sm:text-[13px]">
                <UserRound className="section-capsule-icon h-4 w-4" />
                <span>About Me</span>
              </div>

              <h2 className="mt-5 text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[34px] lg:text-[40px]">
                <span className="block">More Than Code.</span>
                <span className="block">
                  I Build <span className="text-[#ff2738]">Impact.</span>
                </span>
              </h2>

              <div className="mt-5 space-y-3 sm:space-y-4">
                <p className="text-[19px] font-medium leading-[1.3] text-white sm:text-[22px] lg:text-[25px]">
                  <span className="mr-2">👋</span>
                  <span>Hi there! I am </span>
                  <span className="uppercase">ZARRAR PALEKAR.</span>
                </p>

                <p className="max-w-[950px] text-[16px] leading-[1.55] text-[#e3e5ee] sm:text-[17px] lg:text-[18px]">
                  <span>With over </span>
                  <span className="font-semibold text-[#ff2738]">{experienceYears} years</span>
                  <span>{primaryParagraph.replace(`With over ${experienceYears} years`, "")}</span>
                </p>

                <p className="max-w-[950px] text-[16px] leading-[1.55] text-[#e3e5ee] sm:text-[17px] lg:text-[18px]">{secondaryParagraph}</p>

                <details className="group flex flex-col pt-2">
                  <summary className="btn-secondary order-2 mt-3 inline-flex h-[46px] cursor-pointer list-none items-center justify-center rounded-full border px-6 text-[15px] font-medium text-white/88 sm:mt-4 sm:h-[52px] sm:px-7 sm:text-[16px] [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">Show More</span>
                    <span className="hidden group-open:inline">Show Less</span>
                  </summary>

                  <div className="order-1 space-y-3 sm:space-y-4">
                    {extendedParagraphs.map((paragraph, index) => (
                      <p
                        key={`${index}-${paragraph.slice(0, 16)}`}
                        className="max-w-[950px] text-[16px] leading-[1.55] text-[#e3e5ee] sm:text-[17px] lg:text-[18px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="border-none px-1 py-1 md:px-3 md:py-3 xl:px-4 xl:py-4">
            <div className="grid h-full auto-rows-fr gap-4">
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
