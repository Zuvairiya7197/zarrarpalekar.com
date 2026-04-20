"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { openCalendlyPopup, registerCalendlyPageHideCleanup } from "@/lib/calendly";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Container } from "./ui/Container";

export function Navbar() {
  const desktopLinks = useMemo(() => siteConfig.navLinks, []);
  const sectionIds = useMemo(
    () => ["home", "about", "skills", "experience", "testimonials", "projects", "contact"] as const,
    [],
  );
  const activeSection = useScrollSpy(sectionIds);
  const [isOpen, setIsOpen] = useState(false);
  const [useCompactNav, setUseCompactNav] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return registerCalendlyPageHideCleanup();
  }, []);

  useEffect(() => {
    const node = navRef.current;
    if (!node) {
      return;
    }

    const COMPACT_NAV_WIDTH = 1080;

    const observer = new ResizeObserver(([entry]) => {
      const shouldUseCompactNav = entry.contentRect.width < COMPACT_NAV_WIDTH;
      setUseCompactNav((current) => (current === shouldUseCompactNav ? current : shouldUseCompactNav));
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#05040c]">
      <Container>
        <nav
          ref={navRef}
          className="overflow-hidden rounded-[26px] border border-white/14 bg-[rgba(10,12,22,0.82)] px-3 py-2 shadow-[0_20px_40px_rgba(0,0,0,0.28)] backdrop-blur-[14px] sm:px-4 lg:rounded-[30px] lg:px-5 lg:py-2.5"
          aria-label="Primary navigation"
        >
          <div className="flex items-center justify-between gap-2 xl:gap-3">
            <a href="#home" className="flex min-h-10 min-w-0 shrink items-center gap-3 rounded-full px-1 py-0.5">
              <span className="relative block h-10 w-12 shrink-0 sm:h-11 sm:w-[52px]">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  priority
                  fetchPriority="high"
                  loading="eager"
                  sizes="52px"
                  className="scale-[1.5] object-contain"
                />
              </span>
              <span className="hidden min-w-0 sm:block">
                <span className="block truncate text-[18px] leading-none font-semibold text-white 2xl:text-[20px]">
                  {siteConfig.name}
                </span>
                <span className="mt-1 hidden whitespace-nowrap text-[13px] font-medium tracking-[0.05em] text-[#b8bac9] uppercase 2xl:block">
                  Full Stack Developer
                </span>
              </span>
            </a>

            <div
              className={cn(
                "hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex",
                useCompactNav && "xl:hidden",
              )}
            >
              {desktopLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "whitespace-nowrap rounded-full px-2 py-1.5 text-[12px] leading-none font-medium tracking-[0.01em] transition-all duration-200 xl:px-2.5 2xl:px-4 2xl:py-2 2xl:text-[14px]",
                      activeSection === id
                        ? "border border-white/16 bg-[rgba(255,255,255,0.1)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                        : "text-[#a9afc3] hover:bg-white/6 hover:text-white",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className={cn("hidden shrink-0 items-center gap-1.5 xl:flex", useCompactNav && "xl:hidden")}>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex h-[42px] items-center justify-center whitespace-nowrap rounded-full border border-[#45465a] bg-[rgba(10,10,19,0.78)] px-3 text-[12px] font-medium text-white 2xl:h-[46px] 2xl:px-6 2xl:text-[14px]"
              >
                Resume
              </a>
              <button
                type="button"
                onClick={() => void openCalendlyPopup(siteConfig.calendlyUrl)}
                className="inline-flex h-[42px] items-center justify-center whitespace-nowrap rounded-full border border-[#f34a56] bg-[linear-gradient(90deg,#85131e_0%,#b71a27_45%,#d92635_100%)] px-3 text-[12px] font-medium text-white 2xl:h-[46px] 2xl:px-6 2xl:text-[14px]"
              >
                Book Call
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-[rgba(14,15,26,0.74)] text-white",
                useCompactNav ? "xl:inline-flex" : "xl:hidden",
              )}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </nav>

        {isOpen ? (
          <div
            id="mobile-navigation"
            className={cn(
              "mt-2 rounded-[22px] border border-white/12 bg-[linear-gradient(165deg,rgba(10,12,22,0.9)_0%,rgba(7,8,16,0.88)_100%)] p-3 shadow-[0_18px_36px_rgba(0,0,0,0.3)] backdrop-blur-[12px]",
              useCompactNav ? "xl:block" : "xl:hidden",
            )}
          >
            <div className="flex flex-col gap-1.5">
              {desktopLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={cn(
                      "rounded-xl px-4 py-2.5 text-[15px] font-medium",
                      activeSection === id
                        ? "border border-white/14 bg-[rgba(255,255,255,0.1)] text-white"
                        : "text-[#b8bac9]",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-3 flex flex-wrap gap-2.5">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-secondary inline-flex h-11 items-center justify-center rounded-full border border-[#45465a] bg-[rgba(10,10,19,0.78)] px-4 text-[13px] font-medium text-white"
              >
                Resume
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  void openCalendlyPopup(siteConfig.calendlyUrl);
                }}
                className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-[#f34a56] bg-[linear-gradient(90deg,#85131e_0%,#b71a27_45%,#d92635_100%)] px-4 text-[13px] font-medium text-white"
              >
                Book Call
              </button>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
