import type { SanityImageWithLqip, SanityResponsiveImage } from "./home";

export interface AboutHeritageSection {
  image: SanityImageWithLqip;
  alt: string;
}

export interface AboutLeader {
  _key: string;
  name: string;
  role: string;
  avatar: SanityImageWithLqip;
}

export interface AboutPageData {
  heroImage: SanityResponsiveImage;
  heritage: AboutHeritageSection | null;
  leaders: AboutLeader[];
}
