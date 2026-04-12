"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Container } from "./ui/Container";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = siteConfig.navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-30% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:rgb(var(--border)/0.45)] bg-[rgb(var(--background)/0.82)] backdrop-blur-xl">
      <Container>
        <nav className="flex items-center justify-between gap-4 py-4" aria-label="Primary navigation">
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),1))] text-base font-bold text-white shadow-[0_18px_34px_rgba(108,92,231,0.35)]">
              {siteConfig.shortName}
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-white">{siteConfig.name}</span>
              <span className="block text-xs text-[rgb(var(--muted-foreground))]">
                Full Stack Developer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.7)] px-2 py-1 lg:flex">
            {siteConfig.navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    activeSection === id
                      ? "bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),1))] text-white"
                      : "text-[rgb(var(--muted-foreground))] hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden xl:flex">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),1))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(108,92,231,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Connect Via Calendly
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--surface)/0.82)] text-white xl:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div id="mobile-navigation" className="border-t border-[color:rgb(var(--border)/0.7)] pb-4 pt-4 xl:hidden">
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
                        ? "bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),1))] text-white"
                        : "text-[rgb(var(--muted-foreground))]",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-4">
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),1))] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Connect Via Calendly
              </a>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
