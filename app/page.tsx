import Script from "next/script";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
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
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.28),transparent_26%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%)]" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
