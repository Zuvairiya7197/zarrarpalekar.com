import { siteConfig } from "@/lib/site";

import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="pb-10 pt-2">
      <Container>
        <div className="border-t border-[color:rgb(var(--border)/0.55)] pt-6 text-center text-sm text-[rgb(var(--muted-foreground))]">
          <p>© 2026 Made with ❤️ by {siteConfig.name}</p>
        </div>
      </Container>
    </footer>
  );
}
