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

                {/* IMAGE OVERLAY */}
                <div className="absolute bottom-0 right-0 flex items-center justify-center gap-4 bg-arch-black/70 px-4 py-3 opacity-100 transition-opacity xl:inset-0 xl:gap-8 xl:bg-arch-black/50 xl:px-0 xl:py-0 xl:opacity-0 xl:group-hover:opacity-100 xl:group-focus-within:opacity-100">
                  <SocialsLink
                    label={`${leader.name} on LinkedIn`}
                    type="linkedin"
                    href="https://www.linkedin.com/in/emmanuel-ihemedu"
                  />
                  <SocialsLink
                    label={`${leader.name} on Twitter`}
                    type="twitter"
                    href="https://x.com/deraamaobi"
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
