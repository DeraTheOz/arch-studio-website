import { type OfficeLocation } from "@/lib/helpers";

interface OfficePopupProps {
  office: OfficeLocation;
}

export default function OfficePopup({ office }: OfficePopupProps) {
  return (
    <div className="text-sm leading-5 text-arch-dark-grey">
      <p className="text-lg font-bold text-arch-black">{office.name}</p>
      <p>
        {office.name} is located at {office.address}.
      </p>
      <a
        href={office.directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="font-bold text-arch-black underline underline-offset-4 transition-colors hover:text-arch-dark-grey focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arch-black">
        Get Directions
      </a>
    </div>
  );
}
