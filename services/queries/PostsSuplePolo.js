import { gql } from "@apollo/client";
import { clientPRENSA } from "../../pages/_app";
import { tarjetaNota } from "../models/tarjetaNota";

export async function getPostsSuplePolo(edicion, notas) {
  const { data } = await clientPRENSA.query({
    query: gql`
      query PostsSuplePolo {
        prensaNumeros(where: { slug: "${edicion}" }) {
          edges {
            node {
              id
              slug
              datosDePrensaNumero {
                imagenTapa {
                  sourceUrl
                }
              }
              posts(first: ${notas}) {
                edges {
                  node {
                    ${tarjetaNota}
                    link
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  return data;
}
