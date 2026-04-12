import { ArrowRight, Sparkles } from "lucide-react";

import { heroHighlights, trustStats } from "@/lib/site";

import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-3 pb-16 pt-10 sm:px-5 sm:pb-20 sm:pt-12"
    >
      <Container className="relative overflow-hidden rounded-[36px] border border-[color:rgb(var(--border)/0.7)] bg-[linear-gradient(180deg,rgba(var(--surface),0.96),rgba(var(--surface-elevated),0.92))] px-6 py-16 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--accent),0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(var(--accent-secondary),0.18),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent),0.45),transparent)]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--background)/0.72)] px-4 py-2 text-sm font-medium text-[rgb(var(--muted-foreground))] backdrop-blur">
              <Sparkles className="h-4 w-4 text-[rgb(var(--accent))]" />
              Available for selected freelance and agency partnerships
            </div>

            <h1 className="mt-6 max-w-4xl text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[rgb(var(--foreground))] sm:text-5xl lg:text-7xl">
              I build premium digital experiences that turn attention into
              <span className="block bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),1))] bg-clip-text text-transparent">
                inquiries, trust, and growth.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgb(var(--muted-foreground))] sm:text-xl">
              Senior frontend architect focused on high-converting marketing sites, modern web
              apps, and polished user experiences for founders, agencies, and ambitious brands.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(var(--accent),1),rgba(var(--accent-secondary),0.94))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(var(--accent),0.25)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-[color:rgb(var(--border)/0.8)] bg-[rgb(var(--background)/0.62)] px-6 py-3.5 text-sm font-semibold text-[rgb(var(--foreground))] backdrop-blur transition-colors duration-200 hover:border-[color:rgb(var(--accent)/0.35)]"
              >
                View Work
              </a>
            </div>

            <ul className="mt-8 flex flex-col gap-3 text-sm text-[rgb(var(--muted-foreground))] sm:flex-row sm:flex-wrap sm:gap-5">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-6 hidden h-20 w-20 rounded-full bg-[rgba(var(--accent),0.18)] blur-2xl lg:block" />
            <div className="absolute right-0 top-1/2 hidden h-28 w-28 rounded-full bg-[rgba(var(--accent-secondary),0.18)] blur-3xl lg:block" />
            <div className="relative rounded-[32px] border border-[color:rgb(var(--border)/0.65)] bg-[linear-gradient(180deg,rgba(var(--surface),0.92),rgba(var(--background),0.82))] p-5 shadow-[0_30px_80px_rgba(15,23,42,0.1)]">
              <div className="rounded-[28px] border border-[color:rgb(var(--border)/0.65)] bg-[rgb(var(--background)/0.76)] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted-foreground))]">
                      Working With
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[rgb(var(--foreground))]">
                      Founders, agencies, and product teams
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="rounded-2xl bg-[rgba(var(--accent),0.12)] px-3 py-2 text-xs font-medium text-[rgb(var(--foreground))]">
                      UX Strategy
                    </span>
                    <span className="rounded-2xl bg-[rgba(var(--accent-secondary),0.12)] px-3 py-2 text-xs font-medium text-[rgb(var(--foreground))]">
                      CRO
                    </span>
                    <span className="rounded-2xl bg-[rgba(var(--foreground),0.08)] px-3 py-2 text-xs font-medium text-[rgb(var(--foreground))]">
                      App Router
                    </span>
                    <span className="rounded-2xl bg-[rgba(var(--accent),0.12)] px-3 py-2 text-xs font-medium text-[rgb(var(--foreground))]">
                      SEO
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {trustStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[24px] border border-[color:rgb(var(--border)/0.6)] bg-[rgb(var(--surface-elevated)/0.72)] p-4"
                    >
                      <p className="text-3xl font-semibold tracking-tight text-[rgb(var(--foreground))]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-[rgb(var(--muted-foreground))]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-dashed border-[color:rgb(var(--accent)/0.4)] bg-[rgba(var(--accent),0.08)] p-4">
                  <p className="text-sm font-medium text-[rgb(var(--foreground))]">
                    Conversion-focused by default
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted-foreground))]">
                    Every page is designed around clarity, momentum, trust, and a strong next
                    step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
