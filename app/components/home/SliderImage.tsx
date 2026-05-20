import Image from "next/image";
import { ResponsiveImageSet } from "@/types/types";

export default function SliderImage({
  image,
  priority,
}: {
  image: ResponsiveImageSet;
  priority: boolean;
}) {
  return (
    <picture className="relative block h-full w-full">
      <source media="(min-width: 75rem)" srcSet={image.desktop.src} />
      <source media="(min-width: 48rem)" srcSet={image.tablet.src} />
      <Image
        src={image.mobile}
        alt={image.alt}
        priority={priority}
        placeholder="blur"
        fill
        sizes="(min-width: 75rem) 1110px, (min-width: 48rem) calc(100vw - 12.125rem), 100vw"
        className="object-cover"
      />
    </picture>
  );
}
