import { defineField, defineType } from "sanity";

export const featuredSection = defineType({
  name: "featuredSection",
  title: "Featured Section",
  type: "object",

  fields: [
    defineField({
      name: "projects",
      title: "Featured Projects",
      type: "array",
      validation: (Rule) => Rule.required(),

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "slug",
              title: "Slug",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "date",
              title: "Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "image",
              title: "Images",
              type: "responsiveImage",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
