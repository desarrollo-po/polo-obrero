// import { getAllPosts } from "../../services/queries/Posts";

export default async function handler(req, res) {
  // Check for the secret token
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // Check that body is not empty
    // const body = req.body;
    // if (!body) {
    //   return res.status(400).json({ message: "No body" });
    // }
    // Get the slug to revalidate from the body
    // const slugToRevalidate = body.post.post_name;

    await res.revalidate(`/notas/${req.query.slug}`);
    return res.json({ revalidated: "req, res" });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
