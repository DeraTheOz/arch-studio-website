import { groq } from "next-sanity";

const projectFields = groq`
  _key,
  "slug": slug.current,
  title,
  date,
  description,
  images{
    alt,
    mobile{ ..., asset->{ _id, metadata { lqip } } },
    tablet{ ..., asset->{ _id, metadata { lqip } } },
    desktop{ ..., asset->{ _id, metadata { lqip } } }
  }
`;

export const PORTFOLIO_QUERY = groq`
  *[_id == "portfolio"][0]{
    "projects": coalesce(projects[]{
      ${projectFields}
    }, [])
  }
`;

export const PORTFOLIO_PROJECT_QUERY = groq`
  *[_id == "portfolio"][0].projects[slug.current == $slug][0]{
    ${projectFields}
  }
`;

export const PORTFOLIO_SLUGS_QUERY = groq`
  *[_id == "portfolio"][0].projects[defined(slug.current)][]{
    "slug": slug.current
  }
`;
