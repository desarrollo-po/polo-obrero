// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// get posts from wordpress
import { getPostsSuplePolo } from "../../services/queries/PostsSuplePolo";

// get posts from wordpress
export default async function handler(req, res) {
  const { edicion, notas } = req.query;
  const { activa } = req.body;
  const data = await getPostsSuplePolo("1655SP", 5);
  res.status(200).send({
    regiones: [
      {
        name: "Suple Polo",
        slug: "suple-polo",
        activa: activa || false,
        posts: data.prensaNumeros.edges[0].node.posts.edges.map((post) => {
          return {
            id: post.node.id,
            title: post.node.title,
          };
        }),
      },
    ],
  });
}

// export default (req, res) => {
//   res.status(200).json({
//     home: {
//       regiones: {
//         id: "notas-3-principales",
//         posts: [
//           {
//             id: "post-1",
//             title: "Post 1",
//             excerpt: "Excerpt 1",
//             link: "https://www.google.com",
//             imagen: {
//               sourceUrl: "https://www.google.com",
//             },
//           },
//           {
//             id: "post-2",
//             title: "Post 2",
//             excerpt: "Excerpt 2",
//             link: "https://www.google.com",
//             imagen: {
//               sourceUrl: "https://www.google.com",
//             },
//           },
//         ],
//       },
//     },
//   });
// };
