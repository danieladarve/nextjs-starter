import { fetchAPI } from "./api";
import { PageBlocks } from "./fragments";

export async function getHome() {
  const data = await fetchAPI(`
    {
      entry {
        id
        uri
        slug
        ... on home_home_Entry {
          id
          title
          pageBlockContent {
            ${PageBlocks}
          }
          titulo
          subtitulo
          imagen {
            url
            ... on images_Asset {
              optimised: url @imagerSrcset (handle:"optimised")
              webp: url @imagerSrcset (handle:"webp")
              jpg: url @imagerSrcset (handle:"jpg")
            }
          }
          seo {
            title
            description
            keywords {
              keyword
              rating
            }
            social {
              twitter {
                title
                image {
                  url
                }
                description
              }
              facebook {
                title
                image {
                  url
                }
                description
              }
            }
            advanced {
              robots
              canonical
            }
          }
        }
      }
    }
  `,
  {}
  );
  return data;
}
