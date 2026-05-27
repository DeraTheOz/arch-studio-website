import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",

  groups: [
    {
      name: "hero",
      title: "Hero",
      default: true,
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
  ],
});
