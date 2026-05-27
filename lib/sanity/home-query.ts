import { groq } from "next-sanity";

export const HOME_QUERY = groq`
  *[_id == "home"][0]{
    "heroSlides": coalesce(heroSlides[]{
      _key,
      title,
      description,
      image{
        alt,
        mobile{ ..., asset->{ _id, metadata { lqip } } },
        tablet{ ..., asset->{ _id, metadata { lqip } } },
        desktop{ ..., asset->{ _id, metadata { lqip } } }
      }
    }, []),

    welcome{
      alt,
      image{
        ...,
        asset->{
          _id,
          metadata { lqip }
        }
      }
    },

    smallTeam{
      alt,
      mobile{ ..., asset->{ _id, metadata { lqip } } },
      tablet{ ..., asset->{ _id, metadata { lqip } } },
      desktop{ ..., asset->{ _id, metadata { lqip } } }
    },

    featured{
      "projects": coalesce(projects[]{
        _key,
        slug,
        title,
        date,
        image{
          alt,
          mobile{ ..., asset->{ _id, metadata { lqip } } },
          tablet{ ..., asset->{ _id, metadata { lqip } } },
          desktop{ ..., asset->{ _id, metadata { lqip } } }
        }
      }, [])
    }
  }
`;
