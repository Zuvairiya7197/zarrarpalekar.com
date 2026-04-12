import Script from "next/script";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Frontend Architect & Next.js Developer",
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  sameAs: siteConfig.socialLinks.map((link) => link.href),
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Architecture",
    "Conversion Rate Optimization",
    "SEO",
  ],
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
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top_left,rgba(var(--accent),0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(var(--accent-secondary),0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.75),transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(var(--accent),0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(var(--accent-secondary),0.14),transparent_30%),linear-gradient(180deg,rgba(8,10,16,0.92),transparent)]" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
