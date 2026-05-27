import { SanityImageSource } from "@sanity/image-url";

export type SanityImageWithLqip = SanityImageSource & {
  asset?: {
    metadata?: {
      lqip?: string;
    };
  };
};

export interface SanityResponsiveImage {
  mobile: SanityImageWithLqip;
  tablet: SanityImageWithLqip;
  desktop: SanityImageWithLqip;
  alt: string;
}

export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
  blurDataUrl?: string;
}

export interface HeroSlide {
  _key: string;
  title: string;
  description: string;
  image: SanityResponsiveImage;
}

export interface WelcomeImage {
  image: SanityImageWithLqip;
  alt: string;
}

export interface FeaturedProject {
  _key: string;
  slug: string;
  title: string;
  date: string;
  image: SanityResponsiveImage;
}

export interface FeaturedSection {
  projects: FeaturedProject[];
}

export interface HomePageData {
  heroSlides: HeroSlide[];
  welcome: WelcomeImage | null;
  smallTeam: SanityResponsiveImage | null;
  featured: FeaturedSection | null;
}
