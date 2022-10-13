import { gql } from "@apollo/client";
import { client } from "../../pages/_app";
import { tarjetaNota } from "../models/tarjetaNota";

export async function getPostsByTag(tag, notas) {
  const { data } = await client.query({
    query: gql`
      query PostsByTag {
        posts(
          first: ${notas}
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
