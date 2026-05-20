import { StaticImageData } from "next/image";

export type ResponsiveImageSet = {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  images: ResponsiveImageSet;
};
