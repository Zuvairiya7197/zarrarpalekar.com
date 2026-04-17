"use client";

import Image from "next/image";
import { Cloud, Code2, Database, FolderGit2, Layers, Server, Sparkles, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { skillGroups } from "@/lib/site";

import { Container } from "./ui/Container";

type SkillGroup = (typeof skillGroups)[number];

type CategoryMeta = {
  icon: LucideIcon;
  displayTitle?: string;
};

const categoryMetaMap: Record<string, CategoryMeta> = {
  Frontend: { icon: Layers },
  Backend: { icon: Server },
  Database: { icon: Database },
  "Hosting Platform": { icon: Cloud, displayTitle: "Hosting" },
  "Version Control": { icon: FolderGit2 },
  "Programming Languages": { icon: Code2, displayTitle: "Languages" },
};

function getCategoryTitle(group: SkillGroup) {
  return categoryMetaMap[group.title]?.displayTitle ?? group.title;
}

export function Skills() {
  const groups = skillGroups;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeGroup = groups[activeTabIndex] ?? groups[0];
  const baseLoopItems = useMemo(() => {
    const minVisibleSet = 12;
    const copies = Math.max(2, Math.ceil(minVisibleSet / activeGroup.items.length));
    return Array.from({ length: copies }, () => activeGroup.items).flat();
  }, [activeGroup.items]);

  return (
    <section id="skills" className="relative overflow-hidden py-6 sm:py-8">
      <Container className="max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-[940px]">
          <div className="section-capsule inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.06em] sm:text-[13px]">
            <Sparkles className="section-capsule-icon h-4 w-4" />
            <span>Tech Skills</span>
          </div>

          <h2 className="mt-6 text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[46px]">
            Technologies <span className="text-[#ff2738]">I work</span> with.
          </h2>

          <p className="mt-3.5 max-w-[860px] text-[16px] leading-[1.62] text-[#b4b7c4] sm:text-[18px] lg:text-[20px]">
            Explore each category to view its relevant technologies.
          </p>
        </div>

        <div className="mt-8 rounded-[22px] border border-white/12 bg-[linear-gradient(165deg,rgba(12,14,25,0.82)_0%,rgba(9,11,20,0.84)_100%)] p-4 sm:p-5">
          <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4">
            {groups.map((group, index) => {
              const Icon = categoryMetaMap[group.title]?.icon ?? Layers;
              const isActive = activeTabIndex === index;

              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveTabIndex(index)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-left !font-medium transition-all duration-200 ${
                    isActive
                      ? "!border-white/22 !bg-white/10 !text-white !shadow-none"
                      : "btn-secondary !text-[#a3a9bb] hover:!text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-white/70"}`} />
                    <span className="text-[13px] font-medium sm:text-[14px]">{getCategoryTitle(group)}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeGroup.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-4 rounded-[18px] border border-white/12 bg-[rgba(11,14,26,0.72)] p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[24px]">
                    {getCategoryTitle(activeGroup)}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#9ea5ba]">{activeGroup.items.length} Technologies</p>
                </div>
              </div>

              <div className="skills-marquee mt-4 overflow-hidden">
                <div className="skills-marquee-track flex w-max items-stretch gap-4 py-2 sm:gap-5">
                  {[...baseLoopItems, ...baseLoopItems].map((item, index) => (
                    <div
                      key={`${activeGroup.title}-${item.name}-${index}`}
                      aria-hidden={index >= baseLoopItems.length}
                      className="shrink-0"
                    >
                      <div className="group flex h-[108px] w-[112px] shrink-0 flex-col items-center justify-center rounded-[16px] border border-white/12 bg-[linear-gradient(165deg,rgba(14,16,28,0.76)_0%,rgba(9,11,20,0.7)_100%)] px-2.5 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_22px_rgba(0,0,0,0.24)] transition-all duration-250 hover:scale-[1.04] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_26px_rgba(0,0,0,0.3)] sm:h-[118px] sm:w-[124px] sm:rounded-[18px]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)]">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={36}
                            height={36}
                            sizes="36px"
                            className="h-9 w-9 object-contain grayscale brightness-110 contrast-110 saturate-0 opacity-90 transition-all duration-300 group-hover:saturate-100 group-hover:grayscale-0 group-hover:opacity-100"
                          />
                        </div>
                        <p className="mt-2.5 flex h-[34px] items-center justify-center px-1 text-center text-[12px] font-medium leading-[1.2] tracking-[0.01em] text-[#c0c4d2] sm:mt-3 sm:h-[36px] sm:text-[13px]">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
