"use client";

import {
  CalendarDays,
  Github,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircleMore,
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

const connectLinks = [
  { label: "GitHub", href: siteConfig.socialLinks[0].href, icon: Github },
  { label: "WhatsApp", href: siteConfig.whatsappUrl, icon: MessageCircleMore },
  { label: "Instagram", href: siteConfig.socialLinks[2].href, icon: Instagram },
  { label: "Calendly", href: siteConfig.calendlyUrl, icon: CalendarDays, isCalendly: true },
  { label: "LinkedIn", href: siteConfig.socialLinks[1].href, icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Phone", href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`, icon: Phone },
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
    <section id="contact" className="section-padding pb-4 sm:pb-6">
      <Container className="max-w-[1760px]">
        <div className="rounded-[30px] border border-[rgba(101,17,204,0.35)] bg-[rgba(5,2,12,0.94)] px-5 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[0.88fr_1.06fr_0.42fr] xl:items-stretch">
            <div className="flex h-full flex-col px-2 py-2 sm:px-4 lg:px-6 lg:py-6">
              <div className="inline-flex w-fit items-center gap-3 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-4 py-3 text-[14px] font-bold uppercase tracking-[0.02em] text-white">
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </div>

              <h2 className="mt-9 max-w-[420px] text-[30px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[56px]">
                <span className="block">Let&apos;s Build</span>
                <span className="block">Something</span>
                <span className="block">
                  Amazing{" "}
                  <span className="bg-[linear-gradient(90deg,#6366f1,#06b6d4)] bg-clip-text font-[family-name:var(--font-script)] text-[1.08em] font-bold text-transparent tracking-normal [text-shadow:0_10px_28px_rgba(99,102,241,0.22)]">
                    Together.
                  </span>
                </span>
              </h2>

              <p className="mt-6 max-w-[420px] text-[16px] leading-[1.65] text-[rgba(173,176,210,0.84)] sm:mt-8 sm:text-[18px]">
                Have a project in mind or just want to say hi? I&apos;d love to hear from you.
              </p>

              <div className="mt-8 inline-flex max-w-full flex-wrap items-center gap-3 rounded-full pt-4 sm:mt-auto sm:gap-4 sm:pt-12">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] text-white shadow-[0_14px_34px_rgba(108,92,231,0.28)]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-[16px] font-medium text-white sm:text-[20px]">{siteConfig.location}</span>
              </div>
            </div>

            <div className="rounded-[24px] border border-[rgba(122,24,255,0.34)] bg-[rgba(14,6,22,0.94)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-7">
              <form className="grid h-full gap-4" onSubmit={handleSubmit}>
                <label className="grid gap-2.5">
                  <span className="text-[15px] font-semibold text-white">
                    Full Name <span className="text-rose-400">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="h-12 rounded-[18px] border border-white/12 bg-[linear-gradient(180deg,rgba(244,246,255,0.96)_0%,rgba(227,232,245,0.96)_100%)] px-4 text-[15px] text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-[#b80cff] focus:ring-4 focus:ring-[rgba(184,12,255,0.16)]"
                  />
                </label>

                <label className="grid gap-2.5">
                  <span className="text-[15px] font-semibold text-white">
                    Email <span className="text-rose-400">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="h-12 rounded-[18px] border border-white/12 bg-[linear-gradient(180deg,rgba(244,246,255,0.96)_0%,rgba(227,232,245,0.96)_100%)] px-4 text-[15px] text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-[#b80cff] focus:ring-4 focus:ring-[rgba(184,12,255,0.16)]"
                  />
                </label>

                <label className="grid gap-2.5">
                  <span className="text-[15px] font-semibold text-white">
                    Message <span className="text-rose-400">*</span>
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, goals, or anything you'd like to discuss."
                    className="min-h-[132px] rounded-[20px] border border-white/12 bg-[linear-gradient(180deg,rgba(244,246,255,0.96)_0%,rgba(227,232,245,0.96)_100%)] px-4 py-3.5 text-[15px] leading-7 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-[#b80cff] focus:ring-4 focus:ring-[rgba(184,12,255,0.16)]"
                  />
                </label>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] px-6 text-[17px] font-semibold text-white shadow-[0_18px_40px_rgba(108,92,231,0.28)] transition-transform duration-200 hover:scale-[1.03] disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">
                          Send Message
                        </span>
                        <span className="ml-0 inline-flex w-0 items-center justify-center overflow-hidden opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100">
                          <Send className="h-4 w-4" />
                        </span>
                      </>
                    )}
                  </button>
                </div>

                <p
                  aria-live="polite"
                  className={`break-words text-[14px] ${
                    status.type === "error"
                      ? "text-rose-400"
                      : status.type === "success"
                        ? "text-emerald-400"
                        : "text-[rgba(173,176,210,0.84)]"
                  }`}
                >
                  {status.message}
                </p>
              </form>
            </div>

            <div className="rounded-[24px] border border-[rgba(122,24,255,0.34)] bg-[rgba(14,6,22,0.94)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:col-span-2 xl:col-span-1">
              <h3 className="text-center text-[22px] font-semibold text-white sm:text-[24px]">
                Let&apos;s Connect
              </h3>

              <div className="mt-8 grid grid-cols-4 justify-items-center gap-2.5 sm:gap-3 md:grid-cols-8 md:gap-2 xl:grid-cols-2 xl:gap-4">
                {connectLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                    key={link.label}
                      href={link.href}
                      target={
                        !("isCalendly" in link && link.isCalendly) && link.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        !("isCalendly" in link && link.isCalendly) && link.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      onClick={(event) => {
                        if ("isCalendly" in link && link.isCalendly) {
                          event.preventDefault();
                          void openCalendlyPopup(link.href);
                        }
                      }}
                      aria-label={link.label}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--accent))_0%,rgb(var(--accent-secondary))_100%)] text-white shadow-[0_14px_28px_rgba(108,92,231,0.22)] transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_22px_44px_rgba(108,92,231,0.34)] sm:h-14 sm:w-14 md:h-12 md:w-12 xl:h-16 xl:w-16"
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-[22px] md:w-[22px] xl:h-7 xl:w-7" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
