import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home Page",
  type: "document",

  groups: [
    {
      name: "hero",
      title: "Hero",
      default: true,
    },
    {
      name: "welcome",
      title: "Welcome",
    },
    {
      name: "smallTeam",
      title: "Small Team",
    },
    {
      name: "featured",
      title: "Featured",
    },
  ],

  fields: [
    defineField({
      name: "heroSlides",
      title: "Hero Slides",
      type: "array",
      group: "hero",
      validation: (Rule) => Rule.required().min(1),

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
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

    defineField({
      name: "welcome",
      title: "Welcome Section",
      type: "welcomeSection",
      group: "welcome",
    }),

    defineField({
      name: "smallTeam",
      title: "Small Team Section",
      type: "responsiveImage",
      group: "smallTeam",
    }),

    defineField({
      name: "featured",
      title: "Featured Section",
      type: "featuredSection",
      group: "featured",
    }),
  ],
});
