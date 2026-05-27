import { ResponsiveImage } from "@/types/home";
import { urlFor } from "../sanity/image";
import { SanityImageSource } from "@sanity/image-url";

type SanityImageWithLqip = SanityImageSource & {
  asset?: {
    metadata?: {
      lqip?: string;
    };
  };
};

type SanityResponsiveImage = {
  mobile: SanityImageWithLqip;
  tablet: SanityImageWithLqip;
  desktop: SanityImageWithLqip;
  alt: string;
};

export function transformSanityImage(
  sanityImage: SanityResponsiveImage,
): ResponsiveImage {
  return {
    mobile: urlFor(sanityImage.mobile).url(),
    tablet: urlFor(sanityImage.tablet).url(),
    desktop: urlFor(sanityImage.desktop).url(),
    alt: sanityImage.alt,
    blurDataUrl:
      sanityImage.mobile.asset?.metadata?.lqip ??
      sanityImage.tablet.asset?.metadata?.lqip ??
      sanityImage.desktop.asset?.metadata?.lqip,
  };
}

export function transformSanitySingleImage(image: SanityImageWithLqip) {
  return {
    src: urlFor(image).url(),
    blurDataUrl: image.asset?.metadata?.lqip,
  };
}
