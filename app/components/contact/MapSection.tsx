import { officeLocations } from "@/lib/helpers";
import MapShell from "./MapShell";

export default function MapSection() {
  return (
    <section
      id="office-map"
      className="media-container relative mt-18 md:mt-50"
      aria-labelledby="office-map-heading">
      <h2 id="office-map-heading" className="sr-only">
        Office locations
      </h2>

      {/* 
      Gives each "View on Map" link a real hash target.
      */}
      {officeLocations.map((office) => (
        <span
          key={office.id}
          id={`map-${office.id}`}
          className="absolute -top-24"
          aria-hidden="true"
        />
      ))}

      <MapShell />
    </section>
  );
}
