export const tarjetaComunicado = `
  id
  slug
  title
  featuredImage {
    node {
      sourceUrl(size: MEDIUM_LARGE)
    }
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
