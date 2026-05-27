import { groq } from "next-sanity";

export const ABOUT_QUERY = groq`
  *[_id == "about"][0]{
    heroImage{
      alt,
      mobile{ ..., asset->{ _id, metadata { lqip } } },
      tablet{ ..., asset->{ _id, metadata { lqip } } },
      desktop{ ..., asset->{ _id, metadata { lqip } } }
    },

    heritage{
      alt,
      image{
        ...,
        asset->{
          _id,
          metadata { lqip }
        }
      }
    },

    "leaders": coalesce(leaders[]{
      _key,
      name,
      role,
      avatar{
        ...,
        asset->{
          _id,
          metadata { lqip }
        }
      }
    }, [])

    }
    `;
