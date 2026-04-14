import {
  Github,
  Instagram,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

type SocialLink = {
  label: string;
  href: string;
};

export function SocialLinks({
  links,
  className,
}: {
  links: readonly SocialLink[];
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.label];

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--surface)/0.78)] text-[rgb(var(--foreground))] shadow-[0_10px_30px_rgba(12,18,28,0.06)] backdrop-blur transition-all duration-200 hover:scale-[1.04] hover:border-[color:rgb(var(--accent)/0.5)] hover:text-[rgb(var(--accent))]"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
