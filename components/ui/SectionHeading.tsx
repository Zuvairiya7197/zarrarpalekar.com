import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--accent-secondary))]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[rgb(var(--foreground))] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[rgb(var(--muted-foreground))] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
