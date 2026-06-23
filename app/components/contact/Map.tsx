"use client";

import { useEffect, useRef, useState } from "react";
import { type Marker as LeafletMarker } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { officeMarkerIcon } from "@/lib/leaflet-config";
import {
  getOfficeIdFromHash,
  type OfficeId,
  officeLocations,
} from "@/lib/helpers";

import OfficePopup from "./OfficePopup";
import MapFocusController from "./MapFocusController";

export default function Map() {
  const position: [number, number] = [32.8605, -89.6452];

  const mapRegionRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<Partial<Record<OfficeId, LeafletMarker>>>({});
  const [activeOfficeId, setActiveOfficeId] = useState<OfficeId | null>(null);

  useEffect(() => {
    // Syncs active office
    function syncActiveOffice() {
      const nextOfficeId = getOfficeIdFromHash();

      setActiveOfficeId(nextOfficeId);

      if (nextOfficeId) {
        mapRegionRef.current?.focus({ preventScroll: true });
      }
    }

    // Handles office selection on map
    function selectOffice(event: Event) {
      const newOfficeId = (event as CustomEvent<OfficeId>).detail;

      setActiveOfficeId(newOfficeId);
      mapRegionRef.current?.focus({ preventScroll: true });
    }

    syncActiveOffice();

    window.addEventListener("hashchange", syncActiveOffice);
    window.addEventListener("office-map:select", selectOffice);

    return () => {
      window.removeEventListener("hashchange", syncActiveOffice);
      window.removeEventListener("office-map:select", selectOffice);
    };
  }, []);

  return (
    <div
      ref={mapRegionRef}
      className="office-map h-92 overflow-hidden bg-arch-very-light-grey outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black md:h-140"
      aria-label="Office locations map"
      tabIndex={-1}>
      <MapContainer
        center={position}
        zoom={5}
        attributionControl={false}
        className="h-full w-full contrast125 saturate100">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {officeLocations.map((office) => (
          <Marker
            key={office.id}
            position={office.coordinates}
            icon={officeMarkerIcon}
            ref={(marker) => {
              if (marker) {
                markerRefs.current[office.id] = marker;
              }
            }}>
            <Popup>
              <OfficePopup office={office} />
            </Popup>
          </Marker>
        ))}

        <MapFocusController
          activeOfficeId={activeOfficeId}
          markerRefs={markerRefs}
        />
      </MapContainer>
    </div>
  );
}
