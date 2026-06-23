"use client";

import { useRouter } from "next/navigation";
import { useState, type MouseEventHandler } from "react";

import type { Project } from "@/types/types";
import ProjectCard from "../ui/ProjectCard";
import StaggeredReveal, { RevealItem } from "../ui/StaggeredReveal";

type PortfolioGridProps = {
  projects: Project[];
};

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

  const isLocked = loadingSlug !== null;

  function handleProjectClick(
    slug: string,
  ): MouseEventHandler<HTMLAnchorElement> {
    return (event) => {
      if (isLocked) {
        event.preventDefault();
        return;
      }

      // Intercept project link clicks
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      event.preventDefault();
      setLoadingSlug(slug);
      router.push(`/portfolio/${slug}`);
    };
  }

  return (
    <section aria-busy={isLocked}>
      <StaggeredReveal
        amount={0.15}
        stagger={0.08}
        className="site-container grid gap-6 md:gap-8 xl:grid-cols-3 xl:gap-x-7.5 xl:gap-y-8"
        aria-label="Arch Studio portfolio projects">
        {projects.map((project) => (
          <RevealItem key={project.slug}>
            <ProjectCard
              project={project}
              disabled={isLocked}
              isLoading={loadingSlug === project.slug}
              onClick={handleProjectClick(project.slug)}
            />
          </RevealItem>
        ))}
      </StaggeredReveal>
    </section>
  );
}
