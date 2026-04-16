import Image from "next/image";
import { Star } from "lucide-react";

import { skillGroups } from "@/lib/site";

import { Container } from "./ui/Container";

type SkillItem = (typeof skillGroups)[number]["items"][number];

function SkillTile({ name, icon }: SkillItem) {
  return (
    <div className="group flex h-[108px] w-[112px] shrink-0 flex-col items-center justify-center rounded-[16px] border border-white/12 bg-[linear-gradient(165deg,rgba(14,16,28,0.76)_0%,rgba(9,11,20,0.7)_100%)] px-2.5 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_22px_rgba(0,0,0,0.24)] transition-all duration-300 hover:scale-[1.03] hover:border-[rgba(255,82,98,0.34)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.34),0_0_0_1px_rgba(255,58,74,0.16)] sm:h-[118px] sm:w-[124px] sm:rounded-[18px]">
      <Image
        src={icon}
        alt={name}
        width={44}
        height={44}
        sizes="44px"
        className="h-10 w-10 object-contain grayscale brightness-110 contrast-110 saturate-0 opacity-90 transition-all duration-300 group-hover:saturate-100 group-hover:grayscale-0 group-hover:opacity-100 sm:h-11 sm:w-11"
      />
      <p className="mt-2.5 text-[12px] font-medium leading-[1.2] tracking-[0.01em] text-[#c0c4d2] sm:mt-3 sm:text-[13px]">{name}</p>
    </div>
  );
}

function GroupTitle({ title }: { title: string }) {
  return (
    <div className="section-capsule inline-flex whitespace-nowrap rounded-full border px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.06em] text-white/88 sm:px-5 sm:py-2 sm:text-[13px]">
      {title}
    </div>
  );
}

function CompactGroup({ title, items }: { title: string; items: readonly SkillItem[] }) {
  const marqueeItems = [...items, ...items];

  return (
    <article className="min-w-0 rounded-[22px] border border-white/12 bg-[linear-gradient(165deg,rgba(14,16,28,0.72)_0%,rgba(9,11,20,0.68)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_14px_30px_rgba(0,0,0,0.28)] sm:rounded-[26px] sm:p-5">
      <GroupTitle title={title} />

      <div className="skills-marquee mt-5 overflow-hidden">
        <div className="skills-marquee-track skills-marquee-track-compact flex w-max gap-2.5 sm:gap-3">
          {marqueeItems.map((item, index) => (
            <div key={`${title}-${item.name}-${index}`} aria-hidden={index >= items.length} className="py-1">
              <SkillTile {...item} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Skills() {
  const frontendGroup = skillGroups[0];
  const otherGroups = skillGroups.slice(1);
  const marqueeItems = [...frontendGroup.items, ...frontendGroup.items];

  return (
    <section id="skills" className="relative overflow-hidden py-6 sm:py-8">

      <Container className="max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-[940px]">
          <div className="section-capsule inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.06em] sm:text-[13px]">
            <Star className="section-capsule-icon h-4 w-4" />
            <span>Tech Skills</span>
          </div>

          <h2 className="mt-6 text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[46px]">
            Technologies <span className="text-[#ff2537]">I work</span> with.
          </h2>

          <p className="mt-3.5 max-w-[880px] text-[16px] leading-[1.62] text-[#b4b7c4] sm:text-[18px] lg:text-[20px]">
            I use modern technologies, and tools to build fast, scalable, and
            high-performance web applications.
          </p>
        </div>

        <div className="mt-8 rounded-[24px] border border-white/12 bg-[linear-gradient(165deg,rgba(14,16,28,0.74)_0%,rgba(9,11,20,0.68)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_32px_rgba(0,0,0,0.3)] sm:rounded-[28px] sm:p-5 lg:rounded-[32px]">
          <GroupTitle title={frontendGroup.title} />

          <div className="skills-marquee mt-6 overflow-hidden">
            <div className="skills-marquee-track flex w-max gap-3 sm:gap-4">
              {marqueeItems.map((item, index) => (
                <div
                  key={`${frontendGroup.title}-${item.name}-${index}`}
                  aria-hidden={index >= frontendGroup.items.length}
                  className="py-1"
                >
                  <SkillTile {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-3.5 xl:gap-4">
          {otherGroups.map((group) => (
            <CompactGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </Container>
    </section>
  );
}
