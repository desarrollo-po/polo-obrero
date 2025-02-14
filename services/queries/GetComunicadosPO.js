import { gql } from "@apollo/client";
import { clientPO } from "../../pages/_app";

export async function getComunicadosPO(tag, notas) {
  const { data } = await clientPO.query({
    query: gql`
        query NewQuery {
           posts(
            where: {
                taxQuery: {
                    taxArray:{
                        taxonomy: TAG
                        terms: "${tag}"
                        field:SLUG
                        }
                    }
                }
            first: ${notas}        
            ) {
               edges {
                  node {
                       id
                       title
                       slug
                       date
                       featuredImage {
                          node {
                              sourceUrl
                            }
                        }
                        campos {
                            bajada
                            descripcion
                            volanta
                            }
                    }
                }
            }
        }
        `,
    });
    
    return data;
  }
  