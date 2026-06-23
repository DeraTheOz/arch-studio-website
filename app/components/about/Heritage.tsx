import Image from "next/image";

import { transformSanitySingleImage } from "@/lib/services/transformSanityImage";
import { HERITAGE_CONTENT } from "@/lib/helpers";
import { AboutHeritageSection } from "@/types/about";

type HeritageProps = {
  heritage: AboutHeritageSection | null;
};

export default function Heritage({ heritage }: HeritageProps) {
  const image = heritage?.image
    ? transformSanitySingleImage(heritage.image)
    : null;

  return (
    <section className="site-container mt-19 grid gap-12 md:mt-50 xl:grid-cols-[27.875rem_33.75rem] xl:justify-between xl:gap-16">
      <div className="eyebrow-line">
        <h2 className="heading-lg">Our Heritage</h2>
        <div className="body-copy mt-6 flex flex-col gap-6">
          {HERITAGE_CONTENT.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      {heritage && image ? (
        <div className="relative hidden h-142 xl:block">
          <Image
            src={image.src}
            alt={heritage?.alt}
            placeholder={image.blurDataUrl ? "blur" : "empty"}
            blurDataURL={image.blurDataUrl}
            fill
            sizes="540px"
            className="object-cover"
          />
        </div>
      ) : null}
    </section>
  );
}
