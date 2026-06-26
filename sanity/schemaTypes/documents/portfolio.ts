import { defineField, defineType } from "sanity";

type PortfolioProjectInput = {
  slug?: {
    current?: string;
  };
  title?: string;
};

const monthYearPattern = /^\d{4}-(0[1-9]|1[0-2])$/;

function formatMonthYear(date?: string) {
  if (!date || !monthYearPattern.test(date)) return date;

  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio Page",
  type: "document",

  groups: [
    {
      name: "projects",
      title: "Projects",
      default: true,
    },
  ],

  fields: [
    defineField({
      name: "projects",
      title: "Portfolio Projects",
      type: "array",
      group: "projects",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .custom((projects) => {
            if (!Array.isArray(projects)) return true;

            const slugs = projects
              .map(
                (project) => (project as PortfolioProjectInput).slug?.current,
              )
              .filter(Boolean);

            return slugs.length === new Set(slugs).size
              ? true
              : "Project slugs must be unique.";
          }),
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
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: (_, context) =>
                  String((context.parent as PortfolioProjectInput).title ?? ""),
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "date",
              title: "Date",
              description: "Use YYYY-MM format, for example 2019-09.",
              type: "string",
              validation: (Rule) =>
                Rule.required().custom((date) =>
                  typeof date === "string" && monthYearPattern.test(date)
                    ? true
                    : "Use YYYY-MM format, for example 2019-09.",
                ),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required().min(80),
            }),

            defineField({
              name: "images",
              title: "Images",
              type: "responsiveImage",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              date: "date",
              media: "images.desktop",
            },
            prepare(selection) {
              const { title, date, media } = selection;

              return {
                title,
                subtitle:
                  typeof date === "string" ? formatMonthYear(date) : undefined,
                media,
              };
            },
          },
        },
      ],
    }),
  ],
});
