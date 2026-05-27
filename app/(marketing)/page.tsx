import type { Metadata } from "next";

import Welcome from "../components/home/Welcome";
import SmallTeam from "../components/home/SmallTeam";
import Featured from "../components/home/Featured";
import { getHomePageData } from "@/lib/services/services";
import Slider from "../components/home/Slider";

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
      <Welcome welcome={welcome} />
      <SmallTeam smallTeam={smallTeam} />
      <Featured featured={featured} />
    </>
  );
}
