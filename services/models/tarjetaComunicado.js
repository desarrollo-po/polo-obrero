export const tarjetaComunicado = `
  id
  slug
  title
  featuredImage {
    node {
      sourceUrl(size: MEDIUM)
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
