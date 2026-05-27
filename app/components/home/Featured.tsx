import ProjectCard from "../ui/ProjectCard";
import { Project } from "@/types/types";
import Button from "../ui/Button";
import { FeaturedSection } from "@/types/home";
import { transformSanityImage } from "@/lib/services/transformSanityImage";

interface FeaturedProps {
  featured: FeaturedSection | null;
}

function formatProjectDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function Featured({ featured }: FeaturedProps) {
  if (!featured?.projects.length) return null;

  const featuredProjects: Project[] = featured.projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    date: formatProjectDate(project.date),
    images: transformSanityImage(project.image),
  }));

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
