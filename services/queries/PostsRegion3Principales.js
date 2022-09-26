import { gql } from "@apollo/client";
import { client } from "../../pages/_app";

export async function getPostsRegion3Principales() {
  const { data } = await client.query({
    query: gql`
      query PostsRegion2Subdestacados {
        posts(
          where: {
            taxQuery: {
              taxArray: {
                taxonomy: REGION
                terms: "3-notas-principales"
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
