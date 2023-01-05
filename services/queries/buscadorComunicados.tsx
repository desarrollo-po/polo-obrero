import { gql } from "@apollo/client";
export const GET_COMUNICADOS_BUSCADOR = gql`
  query buscadorComunicados(
    $textoSearch: String
  ) {
    comunicados(where: {search: $textoSearch}) {
      edges {
      node {
        date
        slug
        title
        id
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
          }
        }
        camposComunicados {
          volanta
        }
      }
    }
    pageInfo {
      offsetPagination {
        hasMore
        hasPrevious
        total
      }
    }
  }
}`;