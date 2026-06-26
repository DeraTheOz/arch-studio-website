import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  formatPortfolioDate,
  getPortfolioProject,
  getPortfolioSlugs,
} from "@/lib/services/services";
import { transformSanityImage } from "@/lib/services/transformSanityImage";

import Button from "@/app/components/ui/Button";
import SectionReveal from "@/app/components/ui/SectionReveal";
import ResponsiveImage from "@/app/components/ui/ResponsiveImage";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getPortfolioSlugs();

  return slugs.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description = project.description;

  return {
    title: `${project.title} | Arch Studio`,
    description,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Arch Studio`,
      description,
    },
  };
}

export default async function PortfolioProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = await getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const image = transformSanityImage(project.images);
  const date = formatPortfolioDate(project.date);

  return (
    <SectionReveal delay={0.3}>
      <article className="site-container">
        <div className="grid gap-12 xl:grid-cols-[1fr_21.875rem] xl:items-end">
          <div className="relative h-80 md:h-140 overflow-hidden bg-arch-black">
            <ResponsiveImage
              image={image}
              priority
              sizes={{
                mobile: "calc(100vw - 4rem)",
                tablet: "calc(100vw - 12.125rem)",
                desktop: "730px",
              }}
              className="h-full w-full object-cover"
            />

            <span className="project-overlay" aria-hidden="true" />

            <div className="absolute right-8 bottom-8 left-8 z-10">
              <h1 className="hero-title text-arch-white">{project.title}</h1>
              <p className="mt-2 text-lg leading-6 text-white/75">{date}</p>
            </div>
          </div>

          <div>
            <p className="body-copy">{project.description}</p>

            <Button href="/portfolio" className="mt-8">
              Back to Portfolio
            </Button>
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}
