import { gql } from "@apollo/client";
import { client } from "../../pages/_app";
import { nota } from "../models/nota";

export async function getPostsBySlugComunicado(slug) {
  const { data } = await client.query({
    query: gql`
    query Comunicado($id: ID = ${slug}) {
      comunicado(id: $id, idType: DATABASE_ID) {
        slug
        title
        date
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
    `,
    variables: {
      id: slug,
    },
  });

  return data;
}
