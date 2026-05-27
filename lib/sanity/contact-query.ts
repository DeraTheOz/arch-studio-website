import { groq } from "next-sanity";

export const CONTACT_QUERY = groq`
  *[_id == "contact"][0]{
    heroImage{
      alt,
      mobile{ ..., asset->{ _id, metadata { lqip } } },
      tablet{ ..., asset->{ _id, metadata { lqip } } },
      desktop{ ..., asset->{ _id, metadata { lqip } } }
    }
  }
`;
