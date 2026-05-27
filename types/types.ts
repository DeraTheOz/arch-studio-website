import { StaticImageData } from "next/image";

export type ResponsiveImageSource = StaticImageData | string;

export type ResponsiveImageSet = {
  mobile: ResponsiveImageSource;
  tablet: ResponsiveImageSource;
  desktop: ResponsiveImageSource;
  alt: string;
  blurDataUrl?: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  images: ResponsiveImageSet;
};
