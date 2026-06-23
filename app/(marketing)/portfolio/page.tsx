import type { Metadata } from "next";

import {
  formatPortfolioDate,
  getPortfolioPageData,
} from "@/lib/services/services";
import { transformSanityImage } from "@/lib/services/transformSanityImage";
import type { Project } from "@/types/types";

import PortfolioGrid from "@/app/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Arch Studio",
  description:
    "Browse Arch Studio's complete portfolio of architectural projects. From landmark buildings to innovative stations, explore 15+ years of bold, modern design excellence.",
  openGraph: {
    title: "Arch Studio Portfolio - Landmark Projects",
    description:
      "Discover our award-winning portfolio including Seraph Station, Federal II Tower, and more.",
  },
};

export default async function PortfolioPage() {
  const { projects } = await getPortfolioPageData();

  const portfolioProjects: Project[] = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    date: formatPortfolioDate(project.date),
    images: transformSanityImage(project.images),
  }));

  return <PortfolioGrid projects={portfolioProjects} />;
}
