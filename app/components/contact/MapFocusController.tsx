"use client";

import { type RefObject, useEffect } from "react";
import { type Marker as LeafletMarker } from "leaflet";
import { useMap } from "react-leaflet";

import { mapBounds, type OfficeId, officeLocations } from "@/lib/helpers";

interface MapFocusControllerProps {
  activeOfficeId: OfficeId | null;
  markerRefs: RefObject<Partial<Record<OfficeId, LeafletMarker>>>;
}

export default function MapFocusController({
  activeOfficeId,
  markerRefs,
}: MapFocusControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (!activeOfficeId) {
      map.fitBounds(mapBounds, {
        maxZoom: 8,
        padding: [48, 48],
      });
      return;
    }

    const selectedOffice = officeLocations.find(
      (office) => office.id === activeOfficeId,
    );

    if (!selectedOffice) return;

    // Move to the selected office then force the final view and open the popup
    map.flyTo(selectedOffice.coordinates, 13, {
      duration: 0.75,
      animate: true,
    });

    const popupTimer = window.setTimeout(() => {
      map.setView(selectedOffice.coordinates, 13, {
        animate: false,
      });

      markerRefs.current[activeOfficeId]?.openPopup();
    }, 800);

    return () => window.clearTimeout(popupTimer);
  }, [activeOfficeId, map, markerRefs]);

  return null;
}
