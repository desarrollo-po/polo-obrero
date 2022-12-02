import { gql } from "@apollo/client";
import { client } from "../../pages/_app";
import { tarjetaComunicado } from "../models/tarjetaComunicado";

export async function getComunicadosPolo(comunicados) {
  const { data } = await client.query({
    query: gql`
    query NewQuery {
      comunicados(first: ${comunicados}) {
        nodes {
          ${tarjetaComunicado}
         camposComunicados {
          volanta
        }
      }       
      }
    }
    `,
  });
  return data;
}
