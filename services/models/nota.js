export const nota = `
  id
  postId
  slug
  title
  date
  uri
  seo {
    opengraphTitle
    opengraphUrl
    metaDesc
  }
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
`;
