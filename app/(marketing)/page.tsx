import type { Metadata } from "next";

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
  return <section>Home page</section>;
}
