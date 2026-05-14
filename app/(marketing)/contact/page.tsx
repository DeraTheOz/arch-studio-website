import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Arch Studio",
  description:
    "Get in touch with Arch Studio. Contact our offices in Texas and Lagos, Nigeria, or use our contact form to discuss your architectural project. We'd love to hear about your vision.",
  openGraph: {
    title: "Contact Arch Studio",
    description:
      "Reach out to discuss your project. Located in Texas and Lagos, Nigeria with multiple ways to connect.",
  },
};

export default function ContactPage() {
  return <section>Contact page</section>;
}
