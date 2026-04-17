import Script from "next/script";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceProjects } from "@/components/ExperienceProjects";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { siteConfig } from "@/lib/site";

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
        <main className="space-y-6 sm:space-y-8 lg:space-y-10">
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
