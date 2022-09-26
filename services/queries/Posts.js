import { gql } from "@apollo/client";
import { client } from "../../pages/_app";

export async function getAllPosts() {
  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });
  return data;
}
