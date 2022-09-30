export const tarjetaNota = `
  id
  slug
  title
  date
  campos {
    bajada
    descripcionAutor
    descripcionDestacado
    epigrafe
    volanta
  }
  featuredImage {
    node {
      sourceUrl(size: MEDIUM_LARGE)
    }
  }
  categories {
    edges {
      node {
        slug
      }
    }
  }
`;
