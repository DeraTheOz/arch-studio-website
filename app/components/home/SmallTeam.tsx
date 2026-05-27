import ResponsiveImage from "../ui/ResponsiveImage";
import Button from "../ui/Button";
import { SanityResponsiveImage } from "@/types/home";
import { transformSanityImage } from "@/lib/services/transformSanityImage";

interface SmallTeamProps {
  smallTeam: SanityResponsiveImage | null;
}

export default function SmallTeam({ smallTeam }: SmallTeamProps) {
  if (!smallTeam) return null;

  const image = transformSanityImage(smallTeam);

  return (
    <section className="media-container mt-28 md:mt-58 xl:mt-50">
      <div className="relative h-140 overflow-hidden bg-arch-black">
        <ResponsiveImage
          image={image}
          sizes={{
            mobile: "100vw",
            tablet: "calc(100vw - 12.125rem)",
            desktop: "1110px",
          }}
          className="h-full w-full object-cover"
        />
        <span className="image-overlay" aria-hidden="true" />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="ml-8 md:ml-14 xl:ml-47.5">
            <h2 className="heading-lg text-arch-white mb-8">
              Small team, <br /> big ideas
            </h2>

            <Button
              href="/about"
              variant="about"
              ariaLabel="Learn more about our team">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
