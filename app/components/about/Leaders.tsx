import Image from "next/image";

import { transformSanitySingleImage } from "@/lib/services/transformSanityImage";
import { AboutLeader } from "@/types/about";
import SocialsLink from "./SocialsLink";

type LeadersProps = {
  leaders: AboutLeader[];
};

export default function Leaders({ leaders }: LeadersProps) {
  if (!leaders.length) return null;

  return (
    <section className="site-container mt-28 grid gap-14 md:mt-50 md:gap-16 xl:grid-cols-[21.875rem_45.625rem] xl:gap-7.5">
      <h2 className="heading-lg">The Leaders</h2>

      <div className="grid gap-20 md:grid-cols-2 md:gap-x-2.75 md:gap-y-26 xl:gap-x-7.5 xl:gap-y-16">
        {leaders.map((leader) => {
          const avatar = transformSanitySingleImage(leader.avatar);

          return (
            <article key={leader._key}>
              <div className="group relative aspect-35/32 overflow-hidden bg-arch-very-light-grey">
                <Image
                  src={avatar.src}
                  alt={`${leader.name}, ${leader.role}`}
                  placeholder={avatar.blurDataUrl ? "blur" : "empty"}
                  blurDataURL={avatar.blurDataUrl}
                  fill
                  sizes="(min-width: 75rem) 350px, (min-width: 48rem) 280px, calc(100vw - 4rem)"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-8 bg-arch-black/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                  <SocialsLink
                    label={`${leader.name} on LinkedIn`}
                    type="linkedin"
                  />
                  <SocialsLink
                    label={`${leader.name} on Twitter`}
                    type="twitter"
                  />
                </div>
              </div>

              <h3 className="heading-md mt-4">{leader.name}</h3>
              <p className="body-copy">{leader.role}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
