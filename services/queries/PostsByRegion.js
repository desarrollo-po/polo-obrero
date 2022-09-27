import { gql } from "@apollo/client";
import { client } from "../../pages/_app";

export async function getPostsByRegion(region, notas) {
  const { data } = await client.query({
    query: gql`
      query PostsByRegion {
        posts(
          first: ${notas}
          where: {
            taxQuery: {
              taxArray: {
                taxonomy: REGION
                terms: "${region}"
                field: SLUG
              }
            }
          }
        ) {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `,
  });
  return data;
}
