import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeading
            eyebrow="About"
            title="Design-minded development with a strong bias toward business outcomes."
            description="I help brands show up with more clarity, more authority, and a much stronger path to conversion. The sweet spot is where premium visual polish meets thoughtful product decisions and clean engineering."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="group rounded-[30px] border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.82)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur transition-transform duration-200 hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.24em] text-[rgb(var(--muted-foreground))]">
                Positioning
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[rgb(var(--foreground))]">
                Messaging that supports conversion
              </h3>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted-foreground))]">
                Clear hierarchy, purposeful copy blocks, and friction-aware journeys that turn
                visitors into conversations.
              </p>
            </article>

            <article className="group rounded-[30px] border border-[color:rgb(var(--border)/0.75)] bg-[rgb(var(--surface)/0.82)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur transition-transform duration-200 hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.24em] text-[rgb(var(--muted-foreground))]">
                Craft
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[rgb(var(--foreground))]">
                Refined execution across every breakpoint
              </h3>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted-foreground))]">
                Responsive systems, performance-aware choices, and accessible components that hold
                up in real production environments.
              </p>
            </article>

            <article className="rounded-[30px] border border-[color:rgb(var(--border)/0.75)] bg-[linear-gradient(135deg,rgba(var(--accent),0.12),rgba(var(--surface),0.86))] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.24em] text-[rgb(var(--muted-foreground))]">
                How I Work
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[rgb(var(--foreground))]">
                Strategy first. Clean systems second. Momentum all the way through launch.
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[rgb(var(--muted-foreground))]">
                Whether the goal is lead generation, credibility, or a stronger product presence, I
                focus on building an experience that feels premium, ships fast, and remains easy to
                extend after handoff.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
