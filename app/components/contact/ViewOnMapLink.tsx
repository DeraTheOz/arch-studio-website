"use client";

import Button from "../ui/Button";
import { type OfficeId } from "@/lib/helpers";

interface ViewOnMapLinkProps {
  officeId: OfficeId;
  officeName: string;
}

export default function ViewOnMapLink({
  officeId,
  officeName,
}: ViewOnMapLinkProps) {
  function handleClick() {
    window.dispatchEvent(
      new CustomEvent<OfficeId>("office-map:select", {
        detail: officeId,
      }),
    );
  }

  return (
    <Button
      href={`#map-${officeId}`}
      variant="map"
      className="mt-12 hover:underline underline-offset-8 decoration-arch-medium-grey"
      ariaLabel={`View ${officeName} on map`}>
      <span onClick={handleClick}>View on Map</span>
    </Button>
  );
}
