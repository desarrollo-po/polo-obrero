import { gql } from "@apollo/client";
import { client } from "../../pages/_app";

export async function getPostsRegion2Subdestacados() {
  const { data } = await client.query({
    query: gql`
      query PostsRegion2Subdestacados {
        posts(
          where: {
            taxQuery: {
              taxArray: {
                taxonomy: REGION
                terms: "2-sub-destacado-4"
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
