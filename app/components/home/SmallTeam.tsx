import smallTeamMobile from "@/public/assets/home/mobile/image-small-team.jpg";
import smallTeamTablet from "@/public/assets/home/tablet/image-small-team.jpg";
import smallTeamDesktop from "@/public/assets/home/desktop/image-small-team.jpg";

import ResponsiveImage from "../ui/ResponsiveImage";
import Button from "../ui/Button";

const smallTeam = {
  mobile: smallTeamMobile,
  tablet: smallTeamTablet,
  desktop: smallTeamDesktop,
  alt: "Small architecture team reviewing plans in a bright modern room.",
} as const;

export default function SmallTeam() {
  return (
    <section className="media-container mt-28 md:mt-58 xl:mt-50">
      <div className="relative h-140 overflow-hidden bg-arch-black">
        <ResponsiveImage
          image={smallTeam}
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
