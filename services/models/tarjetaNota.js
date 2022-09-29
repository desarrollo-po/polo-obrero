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
      sourceUrl(size: MEDIUM)
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
