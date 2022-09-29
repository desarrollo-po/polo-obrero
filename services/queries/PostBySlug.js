import { gql } from "@apollo/client";
import { client } from "../../pages/_app";

export async function getPostsBySlug(slug) {
  const { data } = await client.query({
    query: gql`
      query Post($id: ID!) {
        post(id: $id, idType: SLUG) {
          id
          postId
          slug
          title
          date
          uri
          prensaNumeros {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
          tags {
            edges {
              node {
                slug
                name
                id
              }
            }
          }
          autores {
            edges {
              node {
                name
                slug
                camposAutor {
                  facebook
                  instagram
                  twitter
                  imagen {
                    mediaItemUrl
                  }
                }
              }
            }
          }
          campos {
            bajada
            descripcionAutor
            epigrafe
            volanta
            descripcionDestacado
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    `,
    variables: {
      id: slug,
    },
  });

  return data;
}
