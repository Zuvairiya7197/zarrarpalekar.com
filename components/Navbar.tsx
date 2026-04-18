"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { openCalendlyPopup, registerCalendlyPageHideCleanup } from "@/lib/calendly";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Container } from "./ui/Container";

export function Navbar() {
  const desktopLinks = useMemo(() => siteConfig.navLinks, []);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const navOffset = 96;
    const targetTop = Math.max(0, element.getBoundingClientRect().top + window.scrollY - navOffset);
    window.scrollTo({ top: targetTop, behavior: "smooth" });

    window.history.replaceState(null, "", href);
    setActiveSection(id);
  };

  useEffect(() => {
    return registerCalendlyPageHideCleanup();
  }, []);

  useEffect(() => {
    const getSections = () =>
      desktopLinks
        .map((link) => {
          const id = link.href.replace("#", "");
          const element = document.getElementById(id);
          return element ? { id, element } : null;
        })
        .filter(Boolean) as Array<{ id: string; element: HTMLElement }>;

    let ticking = false;

    const updateActiveSection = () => {
      const sections = getSections();
      if (sections.length === 0) {
        ticking = false;
        return;
      }

      const navOffset = 120;
      const scrollPosition = window.scrollY + navOffset;
      const isNearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      let currentSection = sections[0]?.id ?? "home";
      const sectionPositions = sections.map((section) => ({
        id: section.id,
        top: section.element.getBoundingClientRect().top + window.scrollY,
      }));

      for (const section of sectionPositions) {
        if (scrollPosition >= section.top - 1) {
          currentSection = section.id;
        }
      }

      // Ensure the last section (Contact) can become active at the bottom.
      if (isNearPageBottom) {
        currentSection = sections[sections.length - 1]?.id ?? currentSection;
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [desktopLinks]);

  return (
    <header className="sticky top-0 z-50 bg-[#05040c]">
      <Container>
        <nav
          className="rounded-[26px] border border-white/14 bg-[rgba(10,12,22,0.82)] px-3 py-2 shadow-[0_20px_40px_rgba(0,0,0,0.28)] backdrop-blur-[14px] sm:px-4 lg:rounded-[30px] lg:px-5 lg:py-2.5"
          aria-label="Primary navigation"
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex min-h-10 items-center gap-4 rounded-full px-1.5 py-0.5">
              <span className="relative block h-10 w-12 shrink-0 sm:h-11 sm:w-[52px]">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  sizes="52px"
                  className="scale-[1.5] object-contain"
                  priority
                />
              </span>
              <span className="hidden sm:block">
                <span className="block text-[20px] leading-none font-semibold text-white">
                  {siteConfig.name}
                </span>
                <span className="mt-1 block whitespace-nowrap text-[13px] font-medium tracking-[0.05em] text-[#b8bac9] uppercase">
                  Full Stack Developer
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-2 xl:flex">
              {desktopLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={cn(
                      "rounded-full px-4 py-2 text-[14px] leading-none font-medium tracking-[0.01em] transition-all duration-200",
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

            <div className="hidden items-center gap-2.5 2xl:flex">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex h-[46px] items-center justify-center rounded-full border border-[#45465a] bg-[rgba(10,10,19,0.78)] px-6 text-[14px] font-medium text-white"
              >
                Resume
              </a>
              <button
                type="button"
                onClick={() => void openCalendlyPopup(siteConfig.calendlyUrl)}
                className="inline-flex h-[46px] items-center justify-center whitespace-nowrap rounded-full border border-[#f34a56] bg-[linear-gradient(90deg,#85131e_0%,#b71a27_45%,#d92635_100%)] px-6 text-[14px] font-medium text-white"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-[rgba(14,15,26,0.74)] text-white xl:hidden"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </nav>

        {isOpen ? (
          <div
            id="mobile-navigation"
            className="mt-2 rounded-[22px] border border-white/12 bg-[linear-gradient(165deg,rgba(10,12,22,0.9)_0%,rgba(7,8,16,0.88)_100%)] p-3 shadow-[0_18px_36px_rgba(0,0,0,0.3)] backdrop-blur-[12px] xl:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {desktopLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
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
