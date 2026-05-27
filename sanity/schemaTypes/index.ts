import { type SchemaTypeDefinition } from "sanity";
import { home } from "./documents/home";
import { responsiveImage } from "./objects/responsiveImage";
import { welcomeSection } from "./objects/home/welcomeSection";
import { smallTeamSection } from "./objects/home/smallTeamSection";
import { featuredSection } from "./objects/home/featuredSection";
import { about } from "./documents/about";
import { heritageSection } from "./objects/about/heritageSection";
import { contact } from "./documents/contact";
import { portfolio } from "./documents/portfolio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    responsiveImage,
    welcomeSection,
    smallTeamSection,
    featuredSection,
    about,
    heritageSection,
    contact,
    portfolio,
  ],
};
