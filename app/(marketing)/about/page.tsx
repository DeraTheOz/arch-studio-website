import type { Metadata } from "next";

import { getAboutPageData } from "@/lib/services/services";
import { transformSanityImage } from "@/lib/services/transformSanityImage";
import SubpageHero from "@/app/components/ui/SubpageHero";
import Heritage from "@/app/components/about/Heritage";
import Leaders from "@/app/components/about/Leaders";
import SectionReveal from "@/app/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "About Us | Arch Studio",
  description:
    "Learn about Arch Studio's journey since 2007. Meet our world-class team of architects and designers dedicated to creating exceptional structures in harmony with their surroundings.",
  openGraph: {
    title: "About Arch Studio - World-Class Architects",
    description:
      "Founded in 2007, our boutique firm specializes in urban design and landmark structures. Meet our leadership team.",
  },
};

export default async function AboutPage() {
  const data = await getAboutPageData();
  const heroImage = transformSanityImage(data.heroImage);

  return (
    <>
      <SubpageHero
        label="About"
        heading="Your team of professionals"
        image={heroImage}>
        <p>
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </SubpageHero>

      <SectionReveal delay={0.3}>
        <Heritage heritage={data.heritage} />
      </SectionReveal>

      <SectionReveal delay={0.3}>
        <Leaders leaders={data.leaders} />
      </SectionReveal>
    </>
  );
}
