import Image from "next/image";
import { ResponsiveImageSet } from "@/types/types";

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

export default function ResponsiveImage({
  image,
  className,
  priority = false,
  sizes,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source
        media="(min-width: 75rem)"
        srcSet={image.desktop.src}
        sizes={sizes.desktop}
      />
      <source
        media="(min-width: 48rem)"
        srcSet={image.tablet.src}
        sizes={sizes.tablet}
      />
      <Image
        src={image.mobile}
        alt={image.alt}
        className={className}
        priority={priority}
        placeholder="blur"
        sizes={`(min-width: 75rem) ${sizes.desktop}, (min-width: 48rem) ${sizes.tablet}, ${sizes.mobile}`}
      />
    </picture>
  );
}
