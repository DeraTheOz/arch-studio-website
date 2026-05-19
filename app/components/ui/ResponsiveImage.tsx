import { getImageProps, type StaticImageData } from "next/image";
import { ResponsiveImageSet } from "../home/Featured";

type ResponsiveImageProps = {
  image: ResponsiveImageSet;
  className?: string;
  priority?: boolean;
  sizes: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

function getOptimizedImage(
  src: StaticImageData,
  alt: string,
  sizes: string,
  priority: boolean,
) {
  const {
    props: { srcSet, ...rest },
  } = getImageProps({
    src,
    alt,
    sizes,
    priority,
  });

  return { srcSet, rest };
}

export default function ResponsiveImage({
  image,
  className,
  priority = false,
  sizes,
}: ResponsiveImageProps) {
  const mobile = getOptimizedImage(
    image.mobile,
    image.alt,
    sizes.mobile,
    priority,
  );
  const tablet = getOptimizedImage(
    image.tablet,
    image.alt,
    sizes.tablet,
    priority,
  );
  const desktop = getOptimizedImage(
    image.desktop,
    image.alt,
    sizes.desktop,
    priority,
  );

  return (
    <picture>
      <source
        media="(min-width: 75rem)"
        srcSet={desktop.srcSet}
        sizes={sizes.desktop}
      />
      <source
        media="(min-width: 48rem)"
        srcSet={tablet.srcSet}
        sizes={sizes.tablet}
      />
      <img
        {...mobile.rest}
        alt={image.alt}
        className={className}
        decoding="async"
      />
    </picture>
  );
}
