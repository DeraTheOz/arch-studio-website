import { defineField, defineType } from "sanity";

export const heritageSection = defineType({
  name: "heritageSection",
  title: "Heritage Section",
  type: "object",

  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
