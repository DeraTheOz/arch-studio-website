import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Arch Studio",
  description:
    "Browse Arch Studio's complete portfolio of architectural projects. From landmark buildings to innovative stations, explore 15+ years of bold, modern design excellence.",
  openGraph: {
    title: "Arch Studio Portfolio - Landmark Projects",
    description:
      "Discover our award-winning portfolio including Seraph Station, Federal II Tower, and more.",
  },
};

export default function PortfolioPage() {
  return <section>Portfolio page</section>;
}
