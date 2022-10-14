import { gql } from "@apollo/client";
import { clientPRENSA } from "../../pages/_app";
import { tarjetaNota } from "../models/tarjetaNota";

export async function getPostsCategoriaPrensa(categoria, notas) {
  const { data } = await clientPRENSA.query({
    query: gql`
      query PostsCategoriaPrensa {
        posts(
          where: {taxQuery: {taxArray: {taxonomy: CATEGORY, field: SLUG, terms: "${categoria}"}}}
          first: ${notas}
        ) {
          edges {
            node {
              ${tarjetaNota}
            }
          }
        }
      }
    `,
  });
  return data;
}
