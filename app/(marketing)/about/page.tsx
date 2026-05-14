import type { Metadata } from "next";

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

export default function AboutPage() {
  return <section>About page</section>;
}
