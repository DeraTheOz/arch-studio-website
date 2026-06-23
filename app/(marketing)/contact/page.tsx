import type { Metadata } from "next";

import ConnectWithUs from "@/app/components/contact/ConnectWithUs";
import ContactDetails from "@/app/components/contact/ContactDetails";
import MapSection from "@/app/components/contact/MapSection";
import SectionReveal from "@/app/components/ui/SectionReveal";
import SubpageHero from "@/app/components/ui/SubpageHero";
import { getContactPageData } from "@/lib/services/services";
import { transformSanityImage } from "@/lib/services/transformSanityImage";

export const metadata: Metadata = {
  title: "Contact Us | Arch Studio",
  description:
    "Get in touch with Arch Studio. Contact our offices in Texas and Tennessee, or use our contact form to discuss your architectural project. We'd love to hear about your vision.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Arch Studio",
    description:
      "Reach out to discuss your project. Located in Texas and Tennessee with multiple ways to connect.",
  },
};

export default async function ContactPage() {
  const data = await getContactPageData();
  const heroImage = transformSanityImage(data.heroImage);

  return (
    <>
      <SubpageHero
        label="Contact"
        heading="Tell us about your project"
        image={heroImage}>
        <p>
          We&apos;d love to hear more about your project. Please, leave a
          message below or give us a call. We have two offices, one in Texas and
          one in Tennessee. If you find yourself nearby, come say hello!
        </p>
      </SubpageHero>

      <SectionReveal delay={0.3}>
        <ContactDetails />
      </SectionReveal>

      <SectionReveal delay={0.3}>
        <MapSection />
      </SectionReveal>

      <SectionReveal delay={0.3}>
        <ConnectWithUs />
      </SectionReveal>
    </>
  );
}
