import nextDynamic from "next/dynamic";

import { About } from "@/components/About";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

const Skills = nextDynamic(() => import("@/components/Skills").then((module) => module.Skills), {
  loading: () => <section id="skills" className="py-6 sm:py-8" aria-hidden="true" />,
});

const ExperienceProjects = nextDynamic(
  () => import("@/components/ExperienceProjects").then((module) => module.ExperienceProjects),
  {
    loading: () => <section className="py-5 sm:py-7 lg:py-8" aria-hidden="true" />,
  },
);

const Projects = nextDynamic(() => import("@/components/Projects").then((module) => module.Projects), {
  loading: () => <section id="projects" className="py-12 sm:py-16 lg:py-20" aria-hidden="true" />,
});

const Contact = nextDynamic(() => import("@/components/Contact").then((module) => module.Contact), {
  loading: () => <section id="contact" className="py-6 sm:py-8" aria-hidden="true" />,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Full Stack Developer & MERN Stack Developer",
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  sameAs: siteConfig.socialLinks.map((link) => link.href),
  knowsAbout: ["MERN Stack", "React", "Node.js", "MongoDB", "GraphQL", ".NET"],
};

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <script
        id="person-json-ld-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative overflow-x-clip">
        <Navbar />
        <main className="space-y-8 sm:space-y-10 lg:space-y-12">
          <Hero />
          <About />
          <Skills />
          <ExperienceProjects />
          <Projects />
          <Contact />
        </main>
        <FloatingWhatsApp />
      </div>
    </>
  );
}
