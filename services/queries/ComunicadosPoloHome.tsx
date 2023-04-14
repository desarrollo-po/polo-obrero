import { gql } from "@apollo/client";
import { tarjetaComunicado } from "../models/tarjetaComunicado";
export const GET_COMUNICADOS_POLO_HOME = gql`
query NewQuery {
  comunicados(first: 4) {
    nodes {
      ${tarjetaComunicado}
     camposComunicados {
      volanta
    }
  }       
  }
}
`;