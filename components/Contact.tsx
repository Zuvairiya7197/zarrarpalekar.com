"use client";

import {
  CalendarDays,
  MessageCircleMore,
  Github,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  BadgeCheck,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { openCalendlyPopup } from "@/lib/calendly";
import { siteConfig } from "@/lib/site";

import { Container } from "./ui/Container";

type StatusState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const socialBarLinks = [
  { label: "GitHub", href: siteConfig.socialLinks[0].href, icon: Github },
  { label: "WhatsApp", href: siteConfig.whatsappUrl, icon: MessageCircleMore },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
  { label: "Trust", href: "#testimonials", icon: BadgeCheck },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Calendly", href: siteConfig.calendlyUrl, icon: CalendarDays, isCalendly: true },
  {
    label: "Location",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.location)}`,
    icon: MapPin,
  },
] as const;

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
      <div className="pointer-events-none fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 items-center 2xl:flex">
        <div className="pointer-events-auto inline-flex flex-col items-center gap-3 rounded-[34px] border border-[rgba(235,34,62,0.26)] bg-[linear-gradient(165deg,rgba(13,8,22,0.72)_0%,rgba(8,7,16,0.7)_100%)] px-3 py-4 shadow-[0_14px_30px_rgba(0,0,0,0.26)] backdrop-blur-[7px]">
          {socialBarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={`desktop-${link.label}`}
                href={link.href}
                target={link.href.startsWith("http") && !("isCalendly" in link) ? "_blank" : undefined}
                rel={link.href.startsWith("http") && !("isCalendly" in link) ? "noreferrer" : undefined}
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

      <Container className="max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
            <div className="flex flex-col px-2 py-1 sm:px-3 lg:px-4 lg:py-3">
            <div className="section-capsule inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium tracking-[0.06em] uppercase sm:text-[13px]">
              <Phone className="section-capsule-icon h-4 w-4" />
              <span>Contact</span>
            </div>

            <h2 className="mt-7 text-[30px] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]">
              <span className="block">Let&apos;s Build</span>
              <span className="block">Something</span>
              <span className="block">Amazing</span>
              <span className="mt-1 block font-[family-name:var(--font-script)] text-[1.04em] font-normal leading-[0.9] tracking-normal text-[#ef1f30]">
                Together.
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

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 pt-7">
            <div className="w-full rounded-[24px] border border-white/18 bg-[linear-gradient(160deg,rgba(15,12,26,0.85)_0%,rgba(10,10,19,0.82)_100%)] p-2.5 sm:rounded-[32px] sm:p-3 lg:hidden">
              <div className="grid grid-cols-4 place-items-center gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
              {socialBarLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") && !("isCalendly" in link) ? "_blank" : undefined}
                    rel={link.href.startsWith("http") && !("isCalendly" in link) ? "noreferrer" : undefined}
                    aria-label={link.label}
                    onClick={(event) => {
                      if ("isCalendly" in link && link.isCalendly) {
                        event.preventDefault();
                        void openCalendlyPopup(link.href);
                      }
                    }}
                    className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/18 bg-[rgba(255,255,255,0.05)] text-white hover:bg-[rgba(255,255,255,0.12)] sm:h-[52px] sm:w-[52px]"
                  >
                    <Icon className="h-[18px] w-[18px] sm:h-6 sm:w-6" />
                  </a>
                );
              })}
              </div>
            </div>

            <p className="ml-auto text-[15px] text-[#adafbf] sm:text-[17px]">
              © 2026 Made by <span className="font-semibold text-white">{siteConfig.name}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
