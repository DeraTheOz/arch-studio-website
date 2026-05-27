export const singletonTypes = new Set([
  "home",
  "about",
  "contact",
  "portfolio",
]);

export const singletonDocuments = {
  home: {
    id: "home",
    title: "Home Page",
    schemaType: "home",
  },

  about: {
    id: "about",
    title: "About Page",
    schemaType: "about",
  },

  contact: {
    id: "contact",
    title: "Contact Page",
    schemaType: "contact",
  },

  portfolio: {
    id: "portfolio",
    title: "Portfolio Page",
    schemaType: "portfolio",
  },
} as const;
