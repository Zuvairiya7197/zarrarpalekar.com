import Image from "next/image";
import { Star } from "lucide-react";

import { skillGroups } from "@/lib/site";

import { Container } from "./ui/Container";

type SkillItem = (typeof skillGroups)[number]["items"][number];

function SkillTile({ name, icon }: SkillItem) {
  return (
    <div className="group flex size-[80px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[14px] border border-[rgba(105,18,214,0.48)] bg-[rgba(15,6,28,0.84)] px-2 py-2.5 text-center shadow-[0_16px_36px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(193,96,255,0.72)] hover:bg-[linear-gradient(180deg,rgba(212,36,255,0.95)_0%,rgba(123,24,255,0.96)_58%,rgba(96,21,227,0.98)_100%)] hover:shadow-[0_0_18px_rgba(202,68,255,0.65),0_0_40px_rgba(141,30,255,0.48)] sm:size-[84px] md:size-[70px] lg:size-[72px] xl:size-[88px]">
      <div className="relative h-[24px] w-[24px] sm:h-[27px] sm:w-[27px] md:h-[22px] md:w-[22px] lg:h-[23px] lg:w-[23px] xl:h-[28px] xl:w-[28px]">
        <Image src={icon} alt={name} fill sizes="38px" className="object-contain" />
      </div>
      <p className="mt-2 text-[9px] font-semibold leading-[1.2] text-white transition-colors duration-300 group-hover:text-white sm:mt-2 sm:text-[9px] md:text-[7px] lg:text-[8px] xl:mt-2.5 xl:text-[10px]">
        {name}
      </p>
    </div>
  );
}

function SkillGroup({
  title,
  items,
  fullWidth = false,
  className = "",
}: {
  title: string;
  items: readonly SkillItem[];
  fullWidth?: boolean;
  className?: string;
}) {
  const tileLayoutClass = fullWidth
    ? "mt-7 grid grid-cols-3 justify-items-center gap-3 sm:gap-4 md:grid-cols-6 xl:grid-cols-12"
    : items.length === 3
      ? "mt-7 mx-auto grid w-fit grid-cols-3 justify-items-center gap-3"
      : "mt-7 mx-auto grid w-fit grid-cols-2 justify-items-center gap-3";
  const titleClass =
    title.length > 18
      ? "whitespace-nowrap px-3 py-2 text-[8px] sm:text-[10px] md:text-[7px] lg:text-[9px] xl:px-4 xl:text-[12px]"
      : title.length > 14
        ? "whitespace-nowrap px-3 py-2 text-[10px] sm:text-[11px] md:text-[8px] lg:text-[10px] xl:px-4 xl:text-[13px]"
        : "whitespace-nowrap px-3 py-2 text-[11px] sm:text-[12px] md:text-[9px] lg:text-[11px] xl:px-4 xl:text-[13px]";
  const titleBackgroundClass = "bg-[rgb(var(--accent-secondary))]";

  return (
    <article
      className={`h-full w-full min-w-0 overflow-hidden rounded-[22px] border border-[rgba(105,18,214,0.42)] bg-[rgba(10,4,18,0.84)] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.22)] sm:p-5 ${className}`}
    >
      <div
        className={`inline-flex max-w-full rounded-full font-semibold leading-none text-white ${titleBackgroundClass} ${titleClass}`}
      >
        {title}
      </div>

      <div className={tileLayoutClass}>
        {items.map((item) => (
          <SkillTile key={`${title}-${item.name}`} {...item} />
        ))}
      </div>
    </article>
  );
}

export function Skills() {
  const frontendGroup = skillGroups[0];
  const secondaryGroups = skillGroups.slice(1);
  const primarySecondaryGroups = secondaryGroups.filter((group) => group.title !== "Database");
  const databaseGroup = secondaryGroups.find((group) => group.title === "Database");

  return (
    <section id="skills" className="section-padding">
      <Container className="max-w-[1760px]">
        <div className="rounded-[26px] border border-[rgba(101,17,204,0.35)] bg-[rgba(5,2,12,0.94)] px-4 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:px-6 sm:py-8 lg:px-7">
          <div className="max-w-[640px] px-2 sm:px-3">
            <div className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.02em] text-white">
              <Star className="h-4 w-4 fill-current" />
              <span>Tech Skills</span>
            </div>

            <h2 className="mt-9 text-[38px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[50px]">
              <span>Technologies </span>
              <span className="bg-[linear-gradient(180deg,#d13bff_0%,#7423ff_100%)] bg-clip-text text-transparent">
                I work with.
              </span>
            </h2>

            <p className="mt-4 max-w-[520px] text-[17px] leading-[1.7] text-[rgba(173,176,210,0.84)] sm:text-[18px]">
              I use modern technologies, and tools to build fast, scalable, and
              high-performance web applications.
            </p>
          </div>

          <div className="mt-10">
            <SkillGroup {...frontendGroup} fullWidth />
          </div>

          <div className="mt-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-4 xl:grid-cols-[repeat(4,minmax(0,1fr))_1.18fr]">
              {primarySecondaryGroups.map((group) => (
                <SkillGroup key={group.title} {...group} className="min-w-0" />
              ))}

              {databaseGroup ? (
                <SkillGroup key={`${databaseGroup.title}-desktop`} {...databaseGroup} className="hidden xl:block" />
              ) : null}
            </div>

            {databaseGroup ? (
              <div className="xl:hidden">
                <SkillGroup {...databaseGroup} />
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
