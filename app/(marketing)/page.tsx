import type { Metadata } from "next";

import Slider from "../components/home/Slider";
import Welcome from "../components/home/Welcome";
import SmallTeam from "../components/home/SmallTeam";
import Featured from "../components/home/Featured";

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

export default function HomePage() {
  return (
    <>
      <Slider />
      <Welcome />
      <SmallTeam />
      <Featured />
    </>
  );
}
