import L from "leaflet";

import iconRetina from "@/public/assets/icons/marker-icon-2x.svg";
import icon from "@/public/assets/icons/marker-icon.svg";
import shadow from "@/public/assets/icons/marker-shadow.png";

// NextJs needs marker assets imported explicitly so Leaflet can resolve the icon URLs correctly after bundling
export const officeMarkerIcon = L.icon({
  iconRetinaUrl: iconRetina.src,
  iconUrl: icon.src,
  shadowUrl: shadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
