import { gql } from "@apollo/client";
import { clientPO } from "../../pages/_app";
import { tarjetaComunicado } from "../models/tarjetaComunicado";

export async function getComunicadosPO(notas) {
  const { data } = await clientPO.query({
    query: gql`
      query ComunicadosPO {
        posts(
          first: ${notas}
          where: {
            taxQuery: { 
              taxArray: { 
                taxonomy: TAG, field: SLUG, terms: "polo-obrero" 
              }
            }
          }
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
