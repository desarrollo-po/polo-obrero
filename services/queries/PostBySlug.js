import { gql } from "@apollo/client";
import { client } from "../../pages/_app";
import { nota } from "../models/nota";

export async function getPostsBySlug(slug) {
  const { data } = await client.query({
    query: gql`
      query Post($id: ID!) {
        post(id: $id, idType: SLUG) {
          ${nota}
        }
      }
    `,
    variables: {
      id: slug,
    },
  });

  return data;
}
