import Image from "next/image";

import { transformSanitySingleImage } from "@/lib/services/transformSanityImage";
import type { WelcomeImage } from "@/types/home";

const WELCOME_CONTENT = [
  "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
  "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
  "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
];

interface WelcomeProps {
  welcome: WelcomeImage | null;
}

export default function Welcome({ welcome }: WelcomeProps) {
  const image = welcome?.image
    ? transformSanitySingleImage(welcome.image)
    : null;

  return (
    <section className="site-container mt-18 md:mt-22 xl:mt-27">
      <p
        className="hidden md:block text-[7.5rem] font-bold text-arch-very-light-grey leading-50 tracking-[-0.1875rem] xl:text-[15.625rem] z-50"
        aria-hidden="true">
        Welcome
      </p>

      <div className="grid gap-16 justify-between md:-mt-9 xl:grid-cols-[minmax(0,35rem)_21.875rem]">
        <div className="eyebrow-line md:before:hidden xl:ml-47.5">
          <h2 className="heading-lg max-w-md">
            Welcome to <br /> Arch Studio
          </h2>
          <div className="body-copy mt-6 flex xl:w-111.5 flex-col gap-6">
            {WELCOME_CONTENT.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {image ? (
          <div className="relative hidden h-142 xl:ml-12 xl:block -translate-y-18.5 -z-50">
            <Image
              src={image.src}
              alt={welcome?.alt ?? ""}
              placeholder={image.blurDataUrl ? "blur" : "empty"}
              blurDataURL={image.blurDataUrl}
              fill
              sizes="350px"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
