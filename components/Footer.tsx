import { siteConfig } from "@/lib/site";

import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <Container className="max-w-[1760px]">
        <div className="rounded-[24px] border border-[rgba(185,28,28,0.28)] bg-[rgba(8,4,16,0.92)] px-6 py-5 text-center text-sm text-[rgb(var(--muted-foreground))] shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
          <p>
            © 2026 Made with <span className="text-[20px] leading-none text-[#ef4444]">♥</span> by {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
