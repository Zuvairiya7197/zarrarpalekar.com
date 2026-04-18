"use client";

import {
  CalendarDays,
  Github,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { openCalendlyPopup } from "@/lib/calendly";
import { siteConfig } from "@/lib/site";

import { Container } from "./ui/Container";

type StatusState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.18 6.42 2.18 11.85c0 1.74.45 3.44 1.31 4.95L2 22l5.36-1.41a9.8 9.8 0 0 0 4.67 1.19h.01c5.43 0 9.85-4.42 9.85-9.85 0-2.63-1.02-5.1-2.84-6.92Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.18.84.85-3.1-.2-.32a8.13 8.13 0 0 1-1.25-4.35c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.16-8.1 8.16Zm4.47-6.1c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.2-1.4-1.34-1.64-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.41-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.08 3.59.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.11.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const socialBarLinks = [
  { label: "GitHub", href: siteConfig.socialLinks[0].href, icon: Github },
  { label: "LinkedIn", href: siteConfig.socialLinks[1].href, icon: Linkedin },
  { label: "Instagram", href: siteConfig.socialLinks[2].href, icon: Instagram },
  { label: "WhatsApp", href: siteConfig.whatsappUrl, icon: WhatsAppIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Calendly", href: siteConfig.calendlyUrl, icon: CalendarDays, isCalendly: true },
] as const;

const mobileSocialBarLinks = socialBarLinks.filter((link) => link.label !== "WhatsApp");

export function Contact() {
  const [status, setStatus] = useState<StatusState>({
    type: "idle",
    message: "Have a project in mind or just want to say hi? I’d love to hear from you.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: data.message || "Message received. I'll get back to you shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-6 sm:py-8"
    >
      <div className="pointer-events-none fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 items-center xl:flex">
        <div className="pointer-events-auto inline-flex flex-col items-center gap-3 rounded-[34px] border border-[rgba(235,34,62,0.26)] bg-[linear-gradient(165deg,rgba(13,8,22,0.72)_0%,rgba(8,7,16,0.7)_100%)] px-3 py-4 shadow-[0_14px_30px_rgba(0,0,0,0.26)] backdrop-blur-[7px]">
          {socialBarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={`desktop-${link.label}`}
                href={link.href}
                target={link.href.startsWith("http") && !("isCalendly" in link) ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") && !("isCalendly" in link)
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={link.label}
                onClick={(event) => {
                  if ("isCalendly" in link && link.isCalendly) {
                    event.preventDefault();
                    void openCalendlyPopup(link.href);
                  }
                }}
                className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[rgba(215,28,60,0.34)] bg-[rgba(16,10,20,0.45)] text-white/75 shadow-[0_0_0_1px_rgba(215,28,60,0.12)] transition-all duration-200 hover:border-[#d71c3c] hover:bg-[rgba(42,12,30,0.9)] hover:text-white hover:shadow-[0_0_0_1px_rgba(215,28,60,0.28),0_0_20px_rgba(215,28,60,0.22)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      <Container>
        <div className="w-full">
          <div className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
            <div className="flex flex-col px-2 py-1 sm:px-3 lg:px-4 lg:py-3">
            <div className="section-capsule inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium tracking-[0.06em] uppercase sm:text-[13px]">
              <Phone className="section-capsule-icon h-4 w-4" />
              <span>Contact</span>
            </div>

            <h2 className="mt-7 text-[30px] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]">
              <span className="block">Let&apos;s Build Something</span>
              <span className="mt-1 block">
                <span>Amazing </span>
                <span className="font-[family-name:var(--font-script)] text-[1.04em] font-normal leading-[0.9] tracking-normal text-[#ef1f30]">
                  Together.
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.55] text-[#a7a8b7] sm:text-[17px] lg:text-[18px] lg:leading-[1.5]">
              Have a project in mind or just want to say hi? I&apos;d love to hear from you.
            </p>

            <div className="mt-8 inline-flex items-center gap-3">
              <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#eb4b58] bg-[linear-gradient(90deg,#85131e_0%,#b91a26_45%,#d92635_100%)] text-white sm:h-[56px] sm:w-[56px]">
                <MapPin className="h-6 w-6" />
              </span>
              <span className="text-[16px] font-medium text-white sm:text-[18px] lg:text-[20px]">
                {siteConfig.location}
              </span>
            </div>
          </div>

            <div className="w-full rounded-[22px] border border-white/18 bg-[linear-gradient(165deg,rgba(15,13,26,0.82)_0%,rgba(10,10,19,0.75)_100%)] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_22px_50px_rgba(0,0,0,0.38)] backdrop-blur-[8px] sm:rounded-[28px] sm:p-5 xl:ml-auto xl:max-w-[660px] xl:p-5">
              <form className="grid gap-3.5" onSubmit={handleSubmit}>
              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-white sm:text-[16px]">
                  Full Name <span className="text-[#df2434]">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="h-[52px] rounded-[26px] border border-white/35 bg-[linear-gradient(180deg,#f3f0f6_0%,#e8e4ee_100%)] px-4 text-[14px] text-slate-800 outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-[#e43544]/60 sm:h-[58px] sm:rounded-[29px] sm:px-5 sm:text-[15px]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-white sm:text-[16px]">
                  Email <span className="text-[#df2434]">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="h-[52px] rounded-[26px] border border-white/35 bg-[linear-gradient(180deg,#f3f0f6_0%,#e8e4ee_100%)] px-4 text-[14px] text-slate-800 outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-[#e43544]/60 sm:h-[58px] sm:rounded-[29px] sm:px-5 sm:text-[15px]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-white sm:text-[16px]">
                  Message <span className="text-[#df2434]">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, goals, or anything you’d like to discuss."
                  className="min-h-[90px] rounded-[20px] border border-white/35 bg-[linear-gradient(180deg,#f3f0f6_0%,#e8e4ee_100%)] px-4 py-3 text-[14px] leading-[1.5] text-slate-800 outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-[#e43544]/60 sm:min-h-[105px] sm:rounded-[22px] sm:px-5 sm:py-3.5 sm:text-[15px] lg:min-h-[118px]"
                />
              </label>

              <div className="pt-0.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-[46px] items-center justify-center rounded-full border border-[#ef4d59] bg-[linear-gradient(90deg,#85131e_0%,#b91a26_45%,#d92635_100%)] px-6 text-[14px] font-semibold text-white disabled:opacity-75 sm:h-[50px] sm:px-7 sm:text-[15px]"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

              <p
                aria-live="polite"
                className={`text-[14px] ${
                  status.type === "error"
                    ? "text-rose-400"
                    : status.type === "success"
                      ? "text-emerald-400"
                      : "text-[#a7a8b7]"
                }`}
              >
                {status.message}
              </p>
              </form>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 pt-7 pb-3 sm:pb-0">
            <div className="w-full rounded-[24px] border border-white/18 bg-[linear-gradient(160deg,rgba(15,12,26,0.85)_0%,rgba(10,10,19,0.82)_100%)] p-2.5 sm:rounded-[32px] sm:p-3 lg:hidden">
              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              {mobileSocialBarLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") && !("isCalendly" in link) ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") && !("isCalendly" in link)
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={link.label}
                    onClick={(event) => {
                      if ("isCalendly" in link && link.isCalendly) {
                        event.preventDefault();
                        void openCalendlyPopup(link.href);
                      }
                    }}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-[rgba(255,255,255,0.05)] text-white hover:bg-[rgba(255,255,255,0.12)] sm:h-[52px] sm:w-[52px]"
                  >
                    <Icon className="h-[18px] w-[18px] sm:h-6 sm:w-6" />
                  </a>
                );
              })}
              </div>
            </div>

            <p className="w-full pt-3 text-center text-[15px] text-[#adafbf] sm:ml-auto sm:w-auto sm:pt-0 sm:text-left sm:text-[17px]">
              © 2026 Made by <span className="font-semibold text-white">{siteConfig.name}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
