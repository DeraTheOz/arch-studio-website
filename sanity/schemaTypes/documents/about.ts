import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Page",
  type: "document",

  groups: [
    {
      name: "hero",
      title: "Hero",
      default: true,
    },
    {
      name: "heritage",
      title: "Heritage",
    },
    {
      name: "leaders",
      title: "Leaders",
    },
  ],

  fields: [
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "responsiveImage",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heritage",
      title: "Heritage Section",
      type: "heritageSection",
      group: "heritage",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "leaders",
      title: "Leaders",
      type: "array",
      group: "leaders",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "role",
              title: "Role",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "avatar",
              title: "Avatar",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "role",
              media: "avatar",
            },
          },
        },
      ],
    }),
  ],
});
