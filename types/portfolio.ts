import type { SanityResponsiveImage } from "./home";

export interface PortfolioProject {
  _key: string;
  slug: string;
  title: string;
  date: string;
  images: SanityResponsiveImage;
}

export interface PortfolioPageData {
  projects: PortfolioProject[];
}

export interface PortfolioSlug {
  slug: string;
}
