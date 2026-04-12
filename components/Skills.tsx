import Image from "next/image";
import { Star } from "lucide-react";

import { skillGroups } from "@/lib/site";

import { Container } from "./ui/Container";

type SkillItem = (typeof skillGroups)[number]["items"][number];

function SkillTile({ name, icon }: SkillItem) {
  return (
    <div className="flex min-h-[94px] w-full min-w-0 flex-col items-center justify-center rounded-[14px] border border-[rgba(105,18,214,0.48)] bg-[rgba(15,6,28,0.84)] px-3 py-3 text-center shadow-[0_16px_36px_rgba(0,0,0,0.2)]">
      <div className="relative h-[38px] w-[38px]">
        <Image src={icon} alt={name} fill sizes="38px" className="object-contain" />
      </div>
      <p className="mt-3 text-[11px] font-semibold leading-[1.35] text-white sm:text-[12px]">
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
  return (
    <article
      className={`w-full min-w-0 rounded-[22px] border border-[rgba(105,18,214,0.42)] bg-[rgba(10,4,18,0.84)] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.22)] sm:p-5 ${className}`}
    >
      <div className="inline-flex max-w-full rounded-full bg-[linear-gradient(90deg,#6120be_0%,#6c27d8_100%)] px-4 py-2 text-[12px] font-semibold text-white sm:text-[13px]">
        {title}
      </div>

      <div
        className={
          fullWidth
            ? "mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12"
            : "mt-7 grid grid-cols-2 gap-4 sm:grid-cols-2"
        }
      >
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

  return (
    <section id="skills" className="section-padding">
      <Container className="max-w-[1760px]">
        <div className="rounded-[26px] border border-[rgba(101,17,204,0.35)] bg-[rgba(5,2,12,0.94)] px-4 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:px-6 sm:py-8 lg:px-7">
          <div className="max-w-[640px] px-2 sm:px-3">
            <div className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#6120be_0%,#6c27d8_100%)] px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.02em] text-white">
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

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:flex-nowrap">
            {secondaryGroups.map((group) => (
              <SkillGroup key={group.title} {...group} className="lg:flex-1" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
