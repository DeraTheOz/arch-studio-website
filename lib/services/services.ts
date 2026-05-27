import type { HomePageData } from "@/types/home";
import { client } from "../sanity/client";
import { HOME_QUERY } from "../sanity/home-query";
import { ABOUT_QUERY } from "../sanity/about-query";
import { CONTACT_QUERY } from "../sanity/contact-query";
import type { AboutPageData } from "@/types/about";
import type { ContactPageData } from "@/types/contact";
import {
  PORTFOLIO_PROJECT_QUERY,
  PORTFOLIO_QUERY,
  PORTFOLIO_SLUGS_QUERY,
} from "../sanity/portfolio-query";
import {
  PortfolioPageData,
  PortfolioProject,
  PortfolioSlug,
} from "@/types/portfolio";

export async function getHomePageData(): Promise<HomePageData> {
  try {
    const data = await client.fetch<HomePageData | null>(HOME_QUERY);

    if (!data) {
      throw new Error("Home page data was not found.");
    }

    return {
      heroSlides: data.heroSlides ?? [],
      welcome: data.welcome ?? null,
      smallTeam: data.smallTeam ?? null,
      featured: data.featured ?? null,
    };
  } catch (error) {
    console.error("Failed to fetch home page data:", error);

    throw new Error("Unable to load home page data.");
  }
}

export async function getAboutPageData(): Promise<AboutPageData> {
  try {
    const data = await client.fetch<AboutPageData | null>(ABOUT_QUERY);

    if (!data?.heroImage) {
      throw new Error("About page data was not found.");
    }

    return {
      heroImage: data.heroImage,
      heritage: data.heritage ?? null,
      leaders: data.leaders ?? [],
    };
  } catch (error) {
    console.error("Failed to fetch about page data:", error);

    throw new Error("Unable to load about page data.");
  }
}

export async function getContactPageData(): Promise<ContactPageData> {
  try {
    const data = await client.fetch<ContactPageData | null>(CONTACT_QUERY);

    if (!data?.heroImage) {
      throw new Error("Contact page data was not found.");
    }

    return {
      heroImage: data.heroImage,
    };
  } catch (error) {
    console.error("Failed to fetch contact page data:", error);

    throw new Error("Unable to load contact page data.");
  }
}

export function formatPortfolioDate(date: string) {
  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

export async function getPortfolioPageData(): Promise<PortfolioPageData> {
  try {
    const data = await client.fetch<PortfolioPageData | null>(PORTFOLIO_QUERY);

    if (!data) {
      throw new Error("Portfolio page data was not found.");
    }

    return {
      projects: data.projects ?? [],
    };
  } catch (error) {
    console.error("Failed to fetch portfolio page data:", error);

    throw new Error("Unable to load portfolio page data.");
  }
}

export async function getPortfolioProject(
  slug: string,
): Promise<PortfolioProject | null> {
  try {
    return await client.fetch<PortfolioProject | null>(
      PORTFOLIO_PROJECT_QUERY,
      { slug },
    );
  } catch (error) {
    console.error(`Failed to fetch portfolio project "${slug}":`, error);

    throw new Error("Unable to load portfolio project.");
  }
}

export async function getPortfolioSlugs(): Promise<PortfolioSlug[]> {
  try {
    return await client.fetch<PortfolioSlug[]>(PORTFOLIO_SLUGS_QUERY);
  } catch (error) {
    console.error("Failed to fetch portfolio project slugs:", error);

    throw new Error("Unable to load portfolio project slugs.");
  }
}
