import { gql } from "@apollo/client";
import { client } from "../../pages/_app";
import { tarjetaComunicado } from "../models/tarjetaComunicado";

export async function getComunicadosPO(notas) {
  const { data } = await client.query({
    query: gql`
      query ComunicadosPO {
        posts(
          first: ${notas}
        ) {
          edges {
            node {
              ${tarjetaComunicado}
            }
          }
        }
      }
    `,
  });
  return data;
}
