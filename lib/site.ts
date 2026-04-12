export const siteConfig = {
  name: "Zarrar Palekar",
  shortName: "ZP",
  title: "Zarrar Palekar | Frontend Architect & Next.js Developer",
  description:
    "Premium, conversion-focused websites and web apps for founders, agencies, and ambitious brands.",
  url: "https://zarrarpalekar.com",
  location: "India",
  email: "hello@zarrarpalekar.com",
  calendlyUrl: "https://calendly.com/zarrarpalekar/30min",
  resumeUrl: "/resume",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/zarrarpalekar",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zarrarpalekar",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/zarrarpalekar",
    },
  ],
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const heroHighlights = [
  "Conversion-first landing pages",
  "High-performance Next.js builds",
  "Design systems that scale cleanly",
];

export const trustStats = [
  { value: "7+", label: "Years building web experiences" },
  { value: "35+", label: "Launches across product and marketing" },
  { value: "96%", label: "Average Lighthouse performance target" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS Architecture",
      "Accessibility",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "REST APIs",
      "Server Actions",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Authentication",
      "CMS Integrations",
    ],
  },
  {
    title: "Tools",
    items: [
      "Figma",
      "GitHub",
      "Vercel",
      "Lighthouse",
      "Sanity",
      "Notion",
      "Calendly",
      "Analytics",
    ],
  },
] as const;

export const services = [
  {
    icon: "layout",
    title: "Conversion-Focused Websites",
    description:
      "Single-page and multi-page sites designed to turn qualified traffic into booked calls and leads.",
    points: ["Positioning-led copy blocks", "Premium responsive UI", "Fast handoff and launch"],
  },
  {
    icon: "sparkles",
    title: "Product & Marketing Interfaces",
    description:
      "Scalable interfaces for SaaS, internal tools, dashboards, and modern product marketing surfaces.",
    points: ["Reusable design systems", "Accessible component patterns", "Performance-first builds"],
  },
  {
    icon: "rocket",
    title: "Technical Partner for Agencies",
    description:
      "Senior-level execution for teams that need a reliable frontend architect without adding headcount.",
    points: ["White-label delivery", "Clean code architecture", "Async-friendly collaboration"],
  },
] as const;

export const projects = [
  {
    title: "Danube Luxury Launch",
    description:
      "A cinematic real-estate microsite designed to capture premium leads with immersive visuals and strong CTA placement.",
    stack: ["Next.js", "Tailwind CSS", "Motion", "SEO"],
    href: "https://danubeproperties.com/",
    image: "/projects/danube-luxury-launch.svg",
    metric: "+41% qualified inquiries",
  },
  {
    title: "Emlak Design Studio",
    description:
      "A refined portfolio site for a design-led studio, balancing editorial storytelling with lead generation.",
    stack: ["Next.js", "TypeScript", "CMS", "Performance"],
    href: "https://emlakdesign.com/",
    image: "/projects/emlak-design-studio.svg",
    metric: "1.8s mobile LCP",
  },
  {
    title: "Zuvi Lead Engine",
    description:
      "A high-converting landing experience built for clarity, trust, and measurable acquisition improvements.",
    stack: ["React", "Analytics", "A/B Testing", "UI Systems"],
    href: "https://alcenza.ae/",
    image: "/projects/zuvi-lead-engine.svg",
    metric: "+28% booked calls",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Zarrar blends strong product instincts with polished frontend execution. We shipped faster and the final experience felt far more premium.",
    name: "Aisha Khan",
    role: "Founder",
    company: "Northline Studio",
  },
  {
    quote:
      "What stood out most was the thinking. Every section had a purpose, every interaction felt intentional, and the build quality was excellent.",
    name: "Rohan Mehta",
    role: "Growth Lead",
    company: "LaunchCraft",
  },
  {
    quote:
      "Reliable, fast, and deeply detail-oriented. Zarrar was the rare technical partner who elevated both the design and the conversion strategy.",
    name: "Nadia Arif",
    role: "Creative Director",
    company: "ModeHaus",
  },
] as const;
