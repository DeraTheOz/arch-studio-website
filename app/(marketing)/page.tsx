import type { Metadata } from "next";

import Welcome from "../components/home/Welcome";
import SmallTeam from "../components/home/SmallTeam";
import Featured from "../components/home/Featured";
import Slider from "../components/home/Slider";
import SectionReveal from "../components/ui/SectionReveal";
import { getHomePageData } from "@/lib/services/services";

export const metadata: Metadata = {
  title: "Home | Arch Studio",
  description:
    "Discover Arch Studio's innovative approach to modern architecture. Featuring award-winning projects like Project Paramour, Seraph Station, and Federal II Tower. 10+ years of creating exceptional spaces.",
  openGraph: {
    title: "Arch Studio - Bold, Modern Architecture",
    description:
      "Innovative architectural solutions that inspire. Explore our portfolio of landmark projects.",
  },
};

export default async function HomePage() {
  const { heroSlides, welcome, smallTeam, featured } = await getHomePageData();

  return (
    <>
      <Slider slides={heroSlides} />

      <SectionReveal delay={0.3}>
        <Welcome welcome={welcome} />
      </SectionReveal>

      <SectionReveal delay={0.3}>
        <SmallTeam smallTeam={smallTeam} />
      </SectionReveal>

      <SectionReveal delay={0.3}>
        <Featured featured={featured} />
      </SectionReveal>
    </>
  );
}
