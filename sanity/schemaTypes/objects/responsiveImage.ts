import { defineField, defineType } from "sanity";

export const responsiveImage = defineType({
  name: "responsiveImage",
  title: "Responsive Image",
  type: "object",

  fields: [
    defineField({
      name: "mobile",
      title: "Mobile",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tablet",
      title: "Tablet",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "desktop",
      title: "Desktop",
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
