import project228Mobile from "@/public/assets/portfolio/mobile/image-228b.jpg";
import project228Tablet from "@/public/assets/portfolio/tablet/image-228b.jpg";
import project228Desktop from "@/public/assets/portfolio/desktop/image-228b.jpg";

import projectDelSolMobile from "@/public/assets/portfolio/mobile/image-del-sol.jpg";
import projectDelSolTablet from "@/public/assets/portfolio/tablet/image-del-sol.jpg";
import projectDelSolDesktop from "@/public/assets/portfolio/desktop/image-del-sol.jpg";

import projectPrototypeMobile from "@/public/assets/portfolio/mobile/image-prototype.jpg";
import projectPrototypeTablet from "@/public/assets/portfolio/tablet/image-prototype.jpg";
import projectPrototypeDesktop from "@/public/assets/portfolio/desktop/image-prototype.jpg";

import ProjectCard from "../ui/ProjectCard";
import { Project } from "@/types/types";
import Button from "../ui/Button";

export const projects: Project[] = [
  {
    slug: "project-del-sol",
    title: "Project Del Sol",
    date: "January 2016",
    images: {
      mobile: projectDelSolMobile,
      tablet: projectDelSolTablet,
      desktop: projectDelSolDesktop,
      alt: "Project Del Sol angular building exterior.",
    },
  },
  {
    slug: "le-prototype",
    title: "Le Prototype",
    date: "October 2015",
    images: {
      mobile: projectPrototypeMobile,
      tablet: projectPrototypeTablet,
      desktop: projectPrototypeDesktop,
      alt: "Le Prototype architectural concept building.",
    },
  },
  {
    slug: "228b-tower",
    title: "228B Tower",
    date: "April 2015",
    images: {
      mobile: project228Mobile,
      tablet: project228Tablet,
      desktop: project228Desktop,
      alt: "228B Tower facade at dusk.",
    },
  },
];

export const featuredProjects = [
  projects[0],
  projects[1],
  projects[2],
] as const;

export default function Featured() {
  return (
    <section
      className="site-container mt-18 md:mt-50 grid grid-cols-1 xl:grid-cols-[1fr_auto]"
      aria-labelledby="featured-heading">
      <div className="flex items-center justify-between gap-8">
        <h2 id="featured-heading" className="heading-lg">
          Featured
        </h2>

        {/* DESKTOP BUTTON */}
        <div className="order-2 hidden sm:block">
          <Button
            href="/portfolio"
            variant="featured"
            ariaLabel="View all featured projects">
            See All
          </Button>
        </div>
      </div>

      <div className="order-3 grid grid-cols-1 mt-10 gap-6 md:gap-8 xl:grid-cols-3 xl:col-span-2 xl:gap-7.5">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            featured
          />
        ))}
      </div>

      {/* MOBILE BUTTON */}
      <div className="mt-6 order-4 sm:hidden">
        <Button
          href="/portfolio"
          variant="featured"
          ariaLabel="View all featured projects">
          See All
        </Button>
      </div>
    </section>
  );
}
