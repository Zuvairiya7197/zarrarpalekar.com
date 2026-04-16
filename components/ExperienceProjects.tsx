"use client";

import { motion, useInView, useScroll, type Variants } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, CheckCircle2, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { experiences, testimonials } from "@/lib/site";

import { Container } from "./ui/Container";

function formatExperiencePeriod(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = end === "present" ? new Date() : new Date(end);

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const duration = [
    years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "",
    months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `${formatter.format(startDate)} - ${
    end === "present" ? "Till Now" : formatter.format(endDate)
  } | ${duration}`;
}

function SectionPill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="section-capsule inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.06em] sm:text-[13px]">
      <span className="section-capsule-icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

const experienceCardVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 46,
    filter: "blur(3px)",
    scale: 0.98,
    transition: { duration: 0.38, ease: "easeOut", delay: index * 0.03 },
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.52,
      ease: "easeOut",
      delay: index * 0.05,
    },
  }),
};

function ExperiencePanel() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 24%"],
  });

  return (
    <section id="experience" className="rounded-[20px] bg-[rgba(4,8,20,0.6)] p-4 sm:p-5 lg:p-6">
      <SectionPill icon={<BriefcaseBusiness className="h-4 w-4" />} label="Experience" />

      <h2 className="mt-6 text-[26px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[32px] lg:text-[42px]">
        My Professional <span className="text-[#ff2a3a]">Journey.</span>
      </h2>

      <p className="mt-4 max-w-[500px] text-[15px] leading-[1.65] text-[#a8adbd] lg:text-[17px]">
        A timeline of growth, challenges, and impactful solutions across leading companies.
      </p>

      <div ref={timelineRef} className="relative mt-7 pl-7 sm:pl-9">
        <div className="absolute bottom-4 left-2 top-3 w-[2px] rounded-full bg-[linear-gradient(180deg,rgba(255,107,122,0.2)_0%,rgba(255,107,122,0.04)_100%)]" />
        <motion.div
          className="absolute bottom-4 left-2 top-3 w-[2px] origin-top rounded-full bg-[linear-gradient(180deg,#ff7a89_0%,#ff4f66_42%,rgba(255,79,102,0.2)_100%)] shadow-[0_0_20px_rgba(255,92,112,0.4)]"
          style={{ scaleY: scrollYProgress }}
        />

        <div className="space-y-5 lg:space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.start}`}
              className="group relative"
              variants={experienceCardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.28 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <span className="timeline-dot-pulse absolute left-[-27px] top-6 h-4 w-4 rounded-full border-2 border-[#ff7686] bg-[#ff5f73] shadow-[0_0_0_4px_rgba(255,95,115,0.18)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_0_7px_rgba(255,95,115,0.24),0_0_22px_rgba(255,95,115,0.44)] sm:left-[-37px] sm:h-5 sm:w-5" />

              <div className="origin-left rounded-[22px] border border-white/12 bg-[rgba(11,14,26,0.84)] px-5 py-5 shadow-[0_12px_26px_rgba(0,0,0,0.24)] backdrop-blur-[2px] transition-all duration-300 group-hover:scale-[1.01] group-hover:border-[rgba(248,84,98,0.42)] group-hover:shadow-[0_16px_34px_rgba(0,0,0,0.34),0_0_0_1px_rgba(248,84,98,0.2)] lg:px-6 lg:py-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/12 bg-[rgba(255,255,255,0.95)] p-2">
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      fill
                      sizes="64px"
                      className="object-contain p-1.5"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[20px] font-semibold leading-none text-white sm:text-[24px] lg:text-[28px]">
                      {experience.company}
                    </h3>
                    <span className="mt-2 inline-flex rounded-full border border-white/14 bg-[rgba(255,255,255,0.06)] px-3 py-1 text-[12px] font-medium text-[#e8ebf4] sm:text-[13px] lg:text-[15px]">
                      {experience.title}
                    </span>
                    <p className="mt-3 text-[15px] font-semibold text-white sm:text-[16px] lg:text-[20px]">
                      {experience.specialization}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={`${experience.company}-${tech}`}
                      className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.05)] px-3 py-1 text-[12px] font-medium text-[#d9ddea] lg:text-[14px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4 flex items-center gap-2 text-[14px] text-[#cdd2de] lg:text-[16px]">
                  <CalendarDays className="h-4 w-4 text-[#f15a68]" />
                  {formatExperiencePeriod(experience.start, experience.end)}
                </p>

                <p className="mt-4 text-[15px] font-semibold tracking-[0.02em] text-[#f0f2f8] lg:text-[16px]">
                  Key Contributions
                </p>

                <ul className="mt-2 space-y-2 text-[14px] leading-[1.5] text-[#e2e6ef] sm:text-[15px] lg:text-[17px]">
                  {experience.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6f7d]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPanel() {
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(testimonialsRef, { amount: 0.35 });
  const [hasDismissedUnread, setHasDismissedUnread] = useState(false);
  const [showUnreadPopup, setShowUnreadPopup] = useState(false);

  useEffect(() => {
    if (!isInView || hasDismissedUnread) {
      return;
    }

    setShowUnreadPopup(true);
  }, [isInView, hasDismissedUnread]);

  return (
    <section
      ref={testimonialsRef}
      id="testimonials"
      className="relative rounded-[20px] bg-[rgba(4,8,20,0.6)] p-4 sm:p-5 lg:p-6"
    >
      <SectionPill icon={<MessageSquareQuote className="h-4 w-4" />} label="Testimonials" />

      <h2 className="mt-6 text-[26px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[32px] lg:text-[42px]">
        What People <span className="text-[#ff2a3a]">Say.</span>
      </h2>

      <p className="mt-4 max-w-[540px] text-[15px] leading-[1.65] text-[#a8adbd] lg:text-[17px]">
        Feedback from teammates and collaborators I&apos;ve had the privilege of working with.
      </p>

      <div className="relative mt-6 rounded-[22px] border border-white/12 bg-[rgba(8,10,18,0.84)]">
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          animate={
            showUnreadPopup
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -12, scale: 0.96 }
          }
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2"
        >
          <div className="relative rounded-[18px] border border-[rgba(255,96,118,0.34)] bg-[linear-gradient(90deg,rgba(128,22,36,0.92)_0%,rgba(185,39,58,0.9)_100%)] px-4 py-2.5 text-[11px] font-semibold tracking-[0.05em] text-white uppercase shadow-[0_12px_26px_rgba(0,0,0,0.34)] sm:text-[12px]">
            <span className="absolute -top-3 left-1/2 inline-flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(255,140,156,0.58)] bg-[rgba(30,7,13,0.95)] text-white">
              <MessageSquareQuote className="h-3.5 w-3.5" />
            </span>
            <span className="mt-2 block whitespace-nowrap">7 Unseen Messages • Catch Up Now</span>
          </div>
        </motion.div>

        <div className="flex items-center border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff4f66]" />
            <span className="h-2 w-2 rounded-full bg-[#ff9d3f]" />
            <span className="h-2 w-2 rounded-full bg-[#3ccf7a]" />
          </div>
          <MessageSquareQuote className="ml-auto h-4 w-4 text-white/55" />
        </div>

        <div
          onScroll={(event) => {
            const element = event.currentTarget;
            const reachedBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 8;

            if (reachedBottom && !hasDismissedUnread) {
              setHasDismissedUnread(true);
              setShowUnreadPopup(false);
            }
          }}
          className="h-[460px] snap-y snap-mandatory space-y-4 overflow-y-auto scroll-smooth bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(255,93,112,0.06),transparent_42%)] px-3 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:h-[520px] sm:px-4 sm:py-4 lg:h-[640px]"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${testimonial.date}`}
              initial={{ opacity: 0.5, y: 14, scale: 0.98, filter: "blur(1.2px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                boxShadow: "0 0 0 1px rgba(255,104,123,0.2), 0 14px 30px rgba(0,0,0,0.3)",
              }}
              viewport={{ once: false, amount: 0.28, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.42, ease: "easeOut", delay: Math.min(index * 0.02, 0.18) }}
              className="snap-start space-y-1.5"
            >
              <div className="flex items-center gap-2 px-1">
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <Image src={testimonial.image} alt={testimonial.name} fill sizes="32px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-semibold text-white sm:text-[13px]">{testimonial.name}</p>
                  <p className="truncate text-[10px] text-[#f26b79] sm:text-[11px]">{testimonial.date}</p>
                </div>
              </div>

              <div className="max-w-[92%] rounded-[16px] rounded-tl-[6px] border border-white/12 bg-[rgba(255,255,255,0.06)] px-3 py-2.5 text-[13px] leading-[1.55] text-[#e1e5f1] sm:text-[14px]">
                {testimonial.quote}
              </div>

              <div className="ml-auto max-w-[80%] rounded-[16px] rounded-tr-[6px] border border-[rgba(255,98,118,0.35)] bg-[linear-gradient(90deg,rgba(142,24,39,0.92)_0%,rgba(192,42,62,0.9)_100%)] px-3 py-2 text-[12px] leading-[1.45] text-white sm:text-[13px]">
                {testimonial.relationship}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceProjects() {
  return (
    <section className="py-5 sm:py-7 lg:py-8">
      <Container className="max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-4 2xl:grid-cols-[0.94fr_1.06fr]">
          <ExperiencePanel />
          <TestimonialsPanel />
        </div>
      </Container>
    </section>
  );
}
