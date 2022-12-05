import { gql } from "@apollo/client";
import { client } from "../../pages/_app";
import { nota } from "../models/nota";

export async function getPostsBySlugComunicado(slug) {
  const { data } = await client.query({
    query: gql`
    query Comunicado($slug: String) {
      comunicados(
        where: {
          name: $slug
        }
      ) {
        edges {
          node {
            slug
            title
            date
            camposComunicados {
              volanta
            }
            autores {
              nodes {
                name
              }
            }
            content
            featuredImage {
              node {
                sourceUrl(size: MEDIUM_LARGE)
              }
            }
          }
        }
      }
    }
    `,
    variables: {
      slug,
    },
  });

  return data;
}
