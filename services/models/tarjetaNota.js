export const tarjetaNota = `
  id
  slug
  title
  date
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
