import { gql } from "@apollo/client";
import { client } from "../../pages/_app";
import { tarjetaNota } from "../models/tarjetaNota";

export async function getUltimasNoticias(notas) {
  const { data } = await client.query({
    query: gql`
      query UltimasNoticias {
        posts(
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
