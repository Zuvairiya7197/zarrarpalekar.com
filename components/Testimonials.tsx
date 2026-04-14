"use client";

import { ChevronLeft, ChevronRight, MessageSquareQuote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { testimonials } from "@/lib/site";

import { Container } from "./ui/Container";

const PREVIEW_LENGTH = 430;

function chunkTestimonials<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  );
}

export function Testimonials() {
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({});

  useEffect(() => {
    function updateCardsPerPage() {
      setCardsPerPage(window.innerWidth >= 1280 ? 2 : 1);
    }

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const pages = useMemo(() => chunkTestimonials(testimonials, cardsPerPage), [cardsPerPage]);
  const safePageIndex = pages.length ? pageIndex % pages.length : 0;

  useEffect(() => {
    if (pages.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setPageIndex((current) => (current + 1) % pages.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [pages.length]);

  function showPrevious() {
    setPageIndex((current) => (current - 1 + pages.length) % pages.length);
  }

  function showNext() {
    setPageIndex((current) => (current + 1) % pages.length);
  }

  return (
    <section id="testimonials" className="section-padding">
      <Container className="max-w-[1760px]">
        <div className="rounded-[26px] border border-[rgba(101,17,204,0.35)] bg-[rgba(5,2,12,0.94)] px-4 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col gap-6 px-2 sm:px-3 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-[760px]">
              <div className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.02em] text-white">
                <Star className="h-4 w-4 fill-current" />
                <span>Testimonials</span>
              </div>

              <h2 className="mt-9 text-[38px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[50px]">
                <span>What People </span>
                <span className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text text-transparent">
                  Say.
                </span>
              </h2>

              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.7] text-[rgba(173,176,210,0.84)] sm:text-[18px]">
                Feedback from teammates, managers, and collaborators I&apos;ve had the privilege of
                working with across product, engineering, and delivery.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous testimonials"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(122,24,255,0.34)] bg-[rgba(14,6,22,0.92)] text-white shadow-[0_16px_38px_rgba(0,0,0,0.2)] hover:border-[rgba(203,104,255,0.72)] hover:bg-[rgba(35,12,57,0.96)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next testimonials"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] text-white shadow-[0_16px_38px_rgba(108,92,231,0.28)] hover:-translate-y-0.5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${safePageIndex * 100}%)` }}
            >
              {pages.map((page, pageNumber) => (
                <div key={`testimonial-page-${pageNumber}`} className="w-full shrink-0">
                  <div className={`grid items-stretch gap-5 ${cardsPerPage === 2 ? "xl:grid-cols-2" : ""}`}>
                    {page.map((testimonial) => {
                      const isExpanded = expandedTestimonials[testimonial.name] ?? false;
                      const isLong = testimonial.quote.length > PREVIEW_LENGTH;
                      const previewQuote = `${testimonial.quote.slice(0, PREVIEW_LENGTH).trimEnd()}...`;
                      const fullParagraphs = testimonial.quote.split("\n\n");

                      return (
                        <article
                          key={`${testimonial.name}-${testimonial.date}`}
                          className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(122,24,255,0.34)] bg-[rgba(14,6,22,0.92)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(203,104,255,0.72)] hover:bg-[linear-gradient(180deg,rgba(32,11,54,0.98)_0%,rgba(18,8,34,0.98)_100%)] hover:shadow-[0_0_28px_rgba(189,73,255,0.14),0_24px_70px_rgba(0,0,0,0.34)] sm:p-6"
                        >
                          <div className="pointer-events-none absolute right-4 top-4 text-[#c861ff]/20 transition-colors duration-300 group-hover:text-[#e7a4ff]/28">
                            <MessageSquareQuote className="h-10 w-10" />
                          </div>

                          <div className="flex items-start gap-4 pr-10">
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[rgba(184,12,255,0.4)] bg-[rgba(32,12,52,0.82)] shadow-[0_14px_28px_rgba(0,0,0,0.18)]">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-white sm:text-[22px]">
                                {testimonial.name}
                              </h3>
                              <p className="mt-1 text-[13px] leading-6 text-[rgba(219,223,246,0.84)] sm:text-[14px]">
                                {testimonial.headline}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="rounded-full border border-[rgba(135,49,214,0.55)] bg-[rgba(39,18,61,0.92)] px-3 py-1.5 text-[12px] font-semibold text-white/92">
                              {testimonial.date}
                            </span>
                            <span className="rounded-full border border-[rgba(135,49,214,0.4)] bg-[rgba(23,10,37,0.9)] px-3 py-1.5 text-[12px] font-medium text-[rgba(219,223,246,0.82)]">
                              {testimonial.relationship}
                            </span>
                          </div>

                          <div className={`mt-4 flex flex-col ${isExpanded ? "flex-1" : ""}`}>
                            <div
                              className={`space-y-3 text-[14px] leading-6 text-[rgba(220,222,235,0.84)] sm:text-[15px] ${
                                isExpanded ? "flex-1 overflow-y-auto pr-2" : ""
                              }`}
                            >
                              {isExpanded ? (
                                fullParagraphs.map((paragraph) => (
                                  <p key={`${testimonial.name}-${paragraph.slice(0, 28)}`}>
                                    {paragraph}
                                  </p>
                                ))
                              ) : (
                                <p>{isLong ? previewQuote : testimonial.quote}</p>
                              )}
                            </div>

                            {isLong ? (
                              <div className="mt-4">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedTestimonials((current) => ({
                                      ...current,
                                      [testimonial.name]: !current[testimonial.name],
                                    }))
                                  }
                                  className="inline-flex h-10 items-center rounded-full border border-[rgba(176,104,255,0.46)] bg-[rgba(22,10,36,0.92)] px-4 text-[13px] font-semibold text-white hover:border-[rgba(214,151,255,0.8)] hover:bg-[rgba(34,14,52,0.98)]"
                                >
                                  {isExpanded ? "Show Less" : "Show More"}
                                </button>
                              </div>
                            ) : null}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {pages.length > 1 ? (
            <div className="mt-7 flex items-center justify-center gap-2.5">
              {pages.map((_, index) => (
                <button
                  key={`testimonial-dot-${index}`}
                  type="button"
                  onClick={() => setPageIndex(index)}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    safePageIndex === index
                      ? "w-8 bg-[linear-gradient(90deg,#8a15f7_0%,#b117f9_100%)]"
                      : "w-2.5 bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
