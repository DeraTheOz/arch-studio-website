import { defineField, defineType } from "sanity";

export const smallTeamSection = defineType({
  name: "smallTeamSection",
  title: "Small Team Section",
  type: "object",

  fields: [
    defineField({
      name: "image",
      title: "Images",
      type: "responsiveImage",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
