"use client";

import { LoaderCircle, Mail, Send, CalendarDays } from "lucide-react";
import { FormEvent, useState } from "react";

import { siteConfig } from "@/lib/site";

import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

type StatusState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function Contact() {
  const [status, setStatus] = useState<StatusState>({
    type: "idle",
    message: "Tell me a bit about your project and I’ll get back to you soon.",
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
    setStatus({
      type: "idle",
      message: "Sending your message...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: data.message || "Message received. I’ll follow up shortly.",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";

      setStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-padding pb-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something that feels premium and performs like it matters."
              description="If you need a high-converting portfolio, marketing site, or a frontend partner who can ship fast without sacrificing quality, I’d love to hear what you’re working on."
            />

            <div className="mt-8 grid gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-[28px] border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.84)] p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(var(--accent),0.12)] text-[rgb(var(--accent))]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[rgb(var(--foreground))]">Email</p>
                    <p className="text-sm text-[rgb(var(--muted-foreground))]">{siteConfig.email}</p>
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[28px] border border-[color:rgb(var(--border)/0.75)] bg-[linear-gradient(135deg,rgba(var(--accent),0.12),rgba(var(--surface),0.92))] p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(var(--accent-secondary),0.16)] text-[rgb(var(--accent-secondary))]">
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[rgb(var(--foreground))]">
                      Calendly
                    </p>
                    <p className="text-sm text-[rgb(var(--muted-foreground))]">
                      Book a focused 30-minute intro call
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-[34px] border border-[color:rgb(var(--border)/0.72)] bg-[rgb(var(--surface)/0.9)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] backdrop-blur sm:p-7">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[rgb(var(--foreground))]">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="h-12 rounded-2xl border border-[color:rgb(var(--border)/0.82)] bg-[rgb(var(--background)/0.68)] px-4 text-sm text-[rgb(var(--foreground))] outline-none transition-colors duration-200 placeholder:text-[rgb(var(--muted-foreground))] focus:border-[color:rgb(var(--accent)/0.55)]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[rgb(var(--foreground))]">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="h-12 rounded-2xl border border-[color:rgb(var(--border)/0.82)] bg-[rgb(var(--background)/0.68)] px-4 text-sm text-[rgb(var(--foreground))] outline-none transition-colors duration-200 placeholder:text-[rgb(var(--muted-foreground))] focus:border-[color:rgb(var(--accent)/0.55)]"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-[rgb(var(--foreground))]">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Project scope, timeline, goals, and anything else that helps."
                  className="min-h-[170px] rounded-[24px] border border-[color:rgb(var(--border)/0.82)] bg-[rgb(var(--background)/0.68)] px-4 py-3 text-sm text-[rgb(var(--foreground))] outline-none transition-colors duration-200 placeholder:text-[rgb(var(--muted-foreground))] focus:border-[color:rgb(var(--accent)/0.55)]"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),0.94))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(var(--accent),0.24)] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p
                  aria-live="polite"
                  className={`text-sm ${
                    status.type === "error"
                      ? "text-rose-500"
                      : status.type === "success"
                        ? "text-emerald-500"
                        : "text-[rgb(var(--muted-foreground))]"
                  }`}
                >
                  {status.message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
