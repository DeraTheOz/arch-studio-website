import Link from "next/link";
import ResponsiveImage from "./ResponsiveImage";
import { Project } from "../home/Featured";

type ProjectCardProps = {
  project: Project;
  index?: number;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <article>
      <Link
        href={featured ? "/portfolio" : `/portfolio/${project.slug}`}
        className="group relative block h-60 overflow-hidden bg-arch-black text-arch-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black xl:h-140"
        aria-label={
          featured
            ? `View ${project.title} in the portfolio`
            : `${project.title}, ${project.date}`
        }>
        <ResponsiveImage
          image={project.images}
          sizes={{
            mobile: "calc(100vw - 4rem)",
            tablet: "calc(100vw - 12.125rem)",
            desktop: "350px",
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* IMAGE OVERLAY */}
        <span className="project-overlay" aria-hidden="true" />

        {/* NUMBER ON IMAGE */}
        {typeof index === "number" ? (
          <span
            className="pointer-events-none absolute top-7 right-4 hidden text-[15.625rem] font-bold leading-50 tracking-[-0.3125rem] text-white/50 md:block xl:-right-4 xl:top-11"
            aria-hidden="true">
            {index + 1}
          </span>
        ) : null}

        <span className="absolute right-6 bottom-6 left-6 z-10 md:right-10 md:bottom-10 md:left-10 xl:right-8 xl:bottom-10 xl:left-10">
          <span className="heading-md block text-arch-white">
            {project.title}
          </span>
          <span className="mt-1 block text-lg leading-6 text-white/75">
            {featured ? "View All Projects" : project.date}
          </span>
        </span>
      </Link>
    </article>
  );
}
