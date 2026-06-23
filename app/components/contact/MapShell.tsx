"use client";

import dynamic from "next/dynamic";

// Leaflet touches browser APIs, so the actual map is dynamically loaded on the client instead of during server rendering
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="grid h-92 place-items-center bg-arch-very-light-grey md:h-140">
      <p className="body-copy text-sm font-bold">Loading map...</p>
    </div>
  ),
});

export default function MapShell() {
  return <Map />;
}
