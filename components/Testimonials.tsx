"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";
import Image from "next/image";

import { testimonials } from "@/lib/site";

import { Container } from "./ui/Container";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-6 sm:py-8">
      <Container className="max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-[980px]">
          <div className="section-capsule inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.06em] sm:text-[13px]">
            <Star className="section-capsule-icon h-4 w-4" />
            <span>Testimonials</span>
          </div>

          <h2 className="mt-7 text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[38px] lg:text-[48px]">
            What People <span className="text-[#ff2537]">Say.</span>
          </h2>

          <p className="mt-4 max-w-[950px] text-[17px] leading-[1.6] text-[#aaadb9] sm:text-[19px] lg:text-[21px]">
            Feedback from teammates and collaborators I&apos;ve had the privilege of working with.
          </p>
        </div>

        <div className="mt-6 rounded-[22px] border border-white/12 bg-[rgba(8,10,18,0.84)]">
          <div className="flex items-center border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ff4f66]" />
              <span className="h-2 w-2 rounded-full bg-[#ff9d3f]" />
              <span className="h-2 w-2 rounded-full bg-[#3ccf7a]" />
            </div>
            <MessageSquareQuote className="ml-auto h-4 w-4 text-white/55" />
          </div>

          <div className="h-[460px] space-y-3 overflow-y-auto bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(255,93,112,0.06),transparent_42%)] px-3 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:h-[520px] sm:px-4 sm:py-4 lg:h-[640px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${testimonial.date}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28, ease: "easeOut", delay: Math.min(index * 0.03, 0.3) }}
                className="space-y-1.5"
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
      </Container>
    </section>
  );
}
