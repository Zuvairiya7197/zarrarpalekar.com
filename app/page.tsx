import { About } from "@/components/About";
import { DeferredBelowFold } from "@/components/DeferredBelowFold";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
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
          <DeferredBelowFold />
        </main>
        <FloatingWhatsApp />
      </div>
    </>
  );
}
