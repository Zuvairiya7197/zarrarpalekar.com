"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Container } from "./ui/Container";
import { SocialLinks } from "./ui/SocialLinks";
import { ThemeToggle } from "./ui/ThemeToggle";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sectionElements = siteConfig.navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-45% 0px -45% 0px",
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <Container className="rounded-[28px] border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--surface)/0.72)] shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <nav
          className="flex items-center justify-between gap-4 py-3"
          aria-label="Primary navigation"
        >
          <Link href="#home" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),0.95),rgba(var(--accent-secondary),0.95))] font-[family-name:var(--font-display)] text-base font-semibold text-white shadow-[0_16px_35px_rgba(var(--accent),0.22)]">
              {siteConfig.shortName}
            </span>
            <span className="hidden min-[440px]:block">
              <span className="block text-sm font-semibold text-[rgb(var(--foreground))]">
                {siteConfig.name}
              </span>
              <span className="block text-xs text-[rgb(var(--muted-foreground))]">
                Frontend Architect
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.88)] px-2 py-1 lg:flex">
            {siteConfig.navLinks.map((link) => {
              const id = link.href.replace("#", "");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    activeSection === id
                      ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                      : "text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))]",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <SocialLinks links={siteConfig.socialLinks} />
            <ThemeToggle />
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center justify-center rounded-full border border-[color:rgb(var(--border)/0.8)] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--foreground))] transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:rgb(var(--accent)/0.4)]"
            >
              Resume
            </a>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),0.92))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(var(--accent),0.25)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book a Call
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--surface)/0.82)] text-[rgb(var(--foreground))]"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {isOpen ? (
          <div
            id="mobile-navigation"
            className="border-t border-[color:rgb(var(--border)/0.7)] pb-4 pt-4 xl:hidden"
          >
            <div className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => {
                const id = link.href.replace("#", "");

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200",
                      activeSection === id
                        ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                        : "text-[rgb(var(--muted-foreground))]",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <SocialLinks links={siteConfig.socialLinks} />
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-[color:rgb(var(--border)/0.8)] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--foreground))]"
                >
                  Resume
                </a>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),0.92))] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
