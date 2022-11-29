import { gql } from "@apollo/client";
import { clientPRENSA } from "../../pages/_app";
import { tarjetaNota } from "../models/tarjetaNota";

export async function getPostsByTag(tag) {
  const { data } = await clientPRENSA.query({
    query: gql`
      query PostsByTag {
        posts(
          where: {
            taxQuery: {
              taxArray: {
                taxonomy: TAG
                terms: "${tag}"
                field: SLUG
              }
            }
          }
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
