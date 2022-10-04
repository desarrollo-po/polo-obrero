import { getAllPosts } from "../../services/queries/Posts";

export default async function handler(req, res) {
  const allPosts = await getAllPosts();
  const paths = allPosts.posts.edges.map(
    ({ node: { slug } }) => `/notas/${slug}`
  );

  // Check for the secret token
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
