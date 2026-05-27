import Image from "next/image";

interface SliderImageProps {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
    blurDataUrl?: string;
  };
}

export default function SliderImage({ image }: SliderImageProps) {
  return (
    <picture className="relative block h-full w-full">
      <source media="(min-width: 75rem)" srcSet={image.desktop} />
      <source media="(min-width: 48rem)" srcSet={image.tablet} />
      <Image
        src={image.mobile}
        alt={image.alt}
        placeholder={image.blurDataUrl ? "blur" : "empty"}
        blurDataURL={image.blurDataUrl}
        fill
        sizes="(min-width: 75rem) 1110px, (min-width: 48rem) calc(100vw - 12.125rem), 100vw"
        className="object-cover"
      />
    </picture>
  );
}
