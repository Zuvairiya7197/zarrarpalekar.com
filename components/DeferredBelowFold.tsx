"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Skills = dynamic(() => import("@/components/Skills").then((module) => module.Skills), {
  ssr: false,
});

const ExperienceProjects = dynamic(
  () => import("@/components/ExperienceProjects").then((module) => module.ExperienceProjects),
  {
    ssr: false,
  },
);

const Projects = dynamic(() => import("@/components/Projects").then((module) => module.Projects), {
  ssr: false,
});

const Contact = dynamic(() => import("@/components/Contact").then((module) => module.Contact), {
  ssr: false,
});

type DeferredKey = "skills" | "experienceProjects" | "projects" | "contact";
type SectionId = "skills" | "experience" | "testimonials" | "projects" | "contact";

const sectionToKey: Record<SectionId, DeferredKey> = {
  skills: "skills",
  experience: "experienceProjects",
  testimonials: "experienceProjects",
  projects: "projects",
  contact: "contact",
};

const initialLoadedState: Record<DeferredKey, boolean> = {
  skills: false,
  experienceProjects: false,
  projects: false,
  contact: false,
};

export function DeferredBelowFold() {
  const [loaded, setLoaded] = useState(initialLoadedState);
  const loadedRef = useRef(loaded);
  const sentinelRefs = useRef<Record<SectionId, HTMLElement | null>>({
    skills: null,
    experience: null,
    testimonials: null,
    projects: null,
    contact: null,
  });

  useEffect(() => {
    loadedRef.current = loaded;
  }, [loaded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const id = entry.target.id as SectionId;
          const key = sectionToKey[id];

          if (!loadedRef.current[key]) {
            setLoaded((current) => {
              if (current[key]) {
                return current;
              }

              return {
                ...current,
                [key]: true,
              };
            });
          }
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "700px 0px",
      },
    );

    const sentinelNodes = Object.values(sentinelRefs.current).filter(Boolean) as HTMLElement[];

    for (const node of sentinelNodes) {
      observer.observe(node);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {loaded.skills ? (
        <Skills />
      ) : (
        <section
          id="skills"
          ref={(node) => {
            sentinelRefs.current.skills = node;
          }}
          className="py-6 sm:py-8"
          aria-hidden="true"
        />
      )}

      {loaded.experienceProjects ? (
        <ExperienceProjects />
      ) : (
        <>
          <section
            id="experience"
            ref={(node) => {
              sentinelRefs.current.experience = node;
            }}
            className="py-5 sm:py-7 lg:py-8"
            aria-hidden="true"
          />
          <section
            id="testimonials"
            ref={(node) => {
              sentinelRefs.current.testimonials = node;
            }}
            className="py-5 sm:py-7 lg:py-8"
            aria-hidden="true"
          />
        </>
      )}

      {loaded.projects ? (
        <Projects />
      ) : (
        <section
          id="projects"
          ref={(node) => {
            sentinelRefs.current.projects = node;
          }}
          className="py-12 sm:py-16 lg:py-20"
          aria-hidden="true"
        />
      )}

      {loaded.contact ? (
        <Contact />
      ) : (
        <section
          id="contact"
          ref={(node) => {
            sentinelRefs.current.contact = node;
          }}
          className="py-6 sm:py-8"
          aria-hidden="true"
        />
      )}
    </>
  );
}
