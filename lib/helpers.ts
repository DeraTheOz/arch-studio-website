// ABOUT PAGE
export const HERITAGE_CONTENT = [
  "Founded in 2007, we started as a trio of architects. Our complementary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",
  "Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.",
  "Our small team of world-class professionals provides input on every project.",
] as const;

export const SOCIAL_ICONS = {
  linkedin: {
    src: "/assets/icons/icon-linkedin.svg",
    width: 40,
    height: 40,
  },
  twitter: {
    src: "/assets/icons/icon-twitter.svg",
    width: 40,
    height: 33,
  },
} as const;

// CONTACT PAGE MAP
export type OfficeId = "main-office" | "office-ii";

export interface OfficeLocation {
  id: OfficeId;
  name: string;
  mail: string;
  address: string;
  phone: string;
  coordinates: [number, number];
  directionsUrl: string;
}

export function createDirectionsUrl(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export const officeLocationData: readonly Omit<
  OfficeLocation,
  "directionsUrl"
>[] = [
  {
    id: "main-office",
    name: "Main office",
    mail: "archone@mail.com",
    address: "200 W Jackson Ave, TN 37902",
    phone: "123-456-3451",
    coordinates: [35.9676, -83.917],
  },
  {
    id: "office-ii",
    name: "Office II",
    mail: "archtwo@mail.com",
    address: "1001 Ross Ave, TX 75202",
    phone: "832-123-4321",
    coordinates: [32.7831, -96.8023],
  },
];

export const officeLocations: readonly OfficeLocation[] =
  officeLocationData.map((office) => ({
    ...office,
    directionsUrl: createDirectionsUrl(office.address),
  }));

export const mapBounds = officeLocations.map((office) => office.coordinates);

export function isOfficeId(value: string): value is OfficeId {
  return officeLocations.some((office) => office.id === value);
}

// Converts #map-main-office into 'main-office' and guards against unknown hashes
export function getOfficeIdFromHash() {
  const activeId = window.location.hash.replace("#map-", "");

  return isOfficeId(activeId) ? activeId : null;
}
