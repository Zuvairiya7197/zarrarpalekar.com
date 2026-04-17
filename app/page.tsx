import dynamic from "next/dynamic";
import Script from "next/script";

import { About } from "@/components/About";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

const Skills = dynamic(() => import("@/components/Skills").then((module) => module.Skills));
const ExperienceProjects = dynamic(() =>
  import("@/components/ExperienceProjects").then((module) => module.ExperienceProjects),
);
const Projects = dynamic(() => import("@/components/Projects").then((module) => module.Projects));
const Contact = dynamic(() => import("@/components/Contact").then((module) => module.Contact));

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

export default function HomePage() {
  return (
    <>
      <Script
        id="person-json-ld-data"
        type="application/ld+json"
        strategy="beforeInteractive"
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
