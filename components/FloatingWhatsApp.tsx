import { MessageCircleMore } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_35px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:-translate-y-1"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}
