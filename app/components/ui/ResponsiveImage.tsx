import Image, { type StaticImageData } from "next/image";
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

function getSrc(image: StaticImageData | string) {
  return typeof image === "string" ? image : image.src;
}

export default function ResponsiveImage({
  image,
  className,
  priority = false,
  sizes,
}: ResponsiveImageProps) {
  const blurDataURL =
    image.blurDataUrl ??
    (typeof image.mobile === "string" ? undefined : image.mobile.blurDataURL);

  return (
    <picture className="absolute inset-0 block">
      <source
        media="(min-width: 75rem)"
        srcSet={getSrc(image.desktop)}
        sizes={sizes.desktop}
      />
      <source
        media="(min-width: 48rem)"
        srcSet={getSrc(image.tablet)}
        sizes={sizes.tablet}
      />
      <Image
        src={image.mobile}
        alt={image.alt}
        fill
        className={className}
        priority={priority}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        sizes={`(min-width: 75rem) ${sizes.desktop}, (min-width: 48rem) ${sizes.tablet}, ${sizes.mobile}`}
      />
    </picture>
  );
}
