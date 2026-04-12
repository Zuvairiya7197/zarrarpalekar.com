import { siteConfig } from "@/lib/site";

import { Container } from "./ui/Container";
import { SocialLinks } from "./ui/SocialLinks";

export function Footer() {
  return (
    <footer className="px-3 pb-8 sm:px-5">
      <Container className="rounded-[32px] border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.84)] px-6 py-8 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[rgb(var(--foreground))]">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-[rgb(var(--muted-foreground))]">
              Building modern, conversion-focused digital experiences with Next.js, clarity, and a
              premium eye for detail.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-8">
            <nav aria-label="Footer quick links" className="flex flex-wrap gap-4 text-sm">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[rgb(var(--muted-foreground))] transition-colors duration-200 hover:text-[rgb(var(--foreground))]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <SocialLinks links={siteConfig.socialLinks} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-[color:rgb(var(--border)/0.65)] pt-6 text-sm text-[rgb(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.location}</p>
        </div>
      </Container>
    </footer>
  );
}
