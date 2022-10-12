import { gql } from "@apollo/client";
import { client } from "../../pages/_app";
import { tarjetaNota } from "../models/tarjetaNota";

export async function getPostsByRegion(region, notas) {
  const { data } = await client.query({
    query: gql`
      query PostsByRegion {
        regiones(where: {slug: "${region}"}) {
          nodes {
            estado_de_la_region {
              estadoDeLaRegion
            }
          }
        }
        posts(
          first: ${notas}
          where: {
            taxQuery: {
              taxArray: {
                taxonomy: REGION
                terms: "${region}"
                field: SLUG
              }
            }
          }
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
