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

import { siteConfig } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

type StatusState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const connectLinks = [
  { label: "GitHub", href: siteConfig.socialLinks[0].href, icon: Github },
  { label: "WhatsApp", href: siteConfig.whatsappUrl, icon: MessageCircleMore },
  { label: "Instagram", href: siteConfig.socialLinks[2].href, icon: Instagram },
  { label: "Calendly", href: siteConfig.calendlyUrl, icon: CalendarDays },
  { label: "LinkedIn", href: siteConfig.socialLinks[1].href, icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Phone", href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`, icon: Phone },
] as const;

export function Contact() {
  const [status, setStatus] = useState<StatusState>({
    type: "idle",
    message: "Have a project in mind or just want to say hi? I'd love to hear from you.",
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
    <section id="contact" className="section-padding pb-20">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.05fr_0.75fr]">
          <div className="rounded-[28px] border border-[color:rgb(var(--border)/0.78)] bg-[rgb(var(--surface)/0.72)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
            <SectionHeading
              eyebrow="CONTACT"
              title="Let’s Build Something Amazing Together."
              description="Have a project in mind or just want to say hi? I’d love to hear from you."
            />

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[color:rgb(var(--border)/0.72)] px-4 py-2 text-sm text-[rgb(var(--muted-foreground))]">
              <MapPin className="h-4 w-4 text-[rgb(var(--accent-secondary))]" />
              {siteConfig.location}
            </div>
          </div>

          <div className="rounded-[28px] border border-[color:rgb(var(--border)/0.78)] bg-[rgb(var(--surface)/0.72)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-white">Full Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="h-12 rounded-2xl border border-[color:rgb(var(--border)/0.82)] bg-[rgb(var(--background)/0.72)] px-4 text-sm text-white outline-none focus:border-[color:rgb(var(--accent-secondary)/0.8)]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-white">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="h-12 rounded-2xl border border-[color:rgb(var(--border)/0.82)] bg-[rgb(var(--background)/0.72)] px-4 text-sm text-white outline-none focus:border-[color:rgb(var(--accent-secondary)/0.8)]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-white">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="min-h-[150px] rounded-[24px] border border-[color:rgb(var(--border)/0.82)] bg-[rgb(var(--background)/0.72)] px-4 py-3 text-sm text-white outline-none focus:border-[color:rgb(var(--accent-secondary)/0.8)]"
                />
              </label>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),1))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(108,92,231,0.24)] disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p
                  aria-live="polite"
                  className={`text-sm ${
                    status.type === "error"
                      ? "text-rose-400"
                      : status.type === "success"
                        ? "text-emerald-400"
                        : "text-[rgb(var(--muted-foreground))]"
                  }`}
                >
                  {status.message}
                </p>
              </div>
            </form>
          </div>

          <div className="rounded-[28px] border border-[color:rgb(var(--border)/0.78)] bg-[rgb(var(--surface)/0.72)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
            <h3 className="text-2xl font-semibold text-white">Let&apos;s Connect</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {connectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={link.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:rgb(var(--border)/0.78)] bg-[rgb(var(--background)/0.72)] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[color:rgb(var(--accent-secondary)/0.8)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
