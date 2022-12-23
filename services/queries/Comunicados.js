import { gql } from "@apollo/client";
import { client } from "../../pages/_app";

export async function getAllComunicados() {
  const { data } = await client.query({
    query: gql`
      query AllComunicados {
        comunicados {
          edges {
            node {
              date
              slug
            }
          }
        }
      }
    `,
  });
  return data;
}
