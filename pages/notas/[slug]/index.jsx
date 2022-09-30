import Head from "next/head";
import React, { useEffect } from "react";
import MainContainer from "../../../components/Containers/MainContainer/MainContainer";
import { getPostsBySlug } from "../../../services/queries/PostBySlug";
import { getAllPosts } from "../../../services/queries/Posts";
import styles from "./nota.module.scss";

const index = ({
  post: {
    title,
    bajada,
    content,
    featuredImage: {
      node: { sourceUrl },
    },
  },
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      s.setAttribute("async", "true");
      document.head.appendChild(s);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={bajada} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <section className={styles.nota}>
          <h1>{title}</h1>
          <picture>
            <img width="400" src={sourceUrl} alt={title} />
          </picture>
          {/* <p>Por: {autores.join(", ")}</p> */}
          {/* <p>{categorias}</p> */}
          <p>{bajada}</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </MainContainer>
    </>
  );
};

export default index;

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const paths = allPosts.posts.edges.map(
    ({ node: { slug } }) => `/notas/${slug}`
  );
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostsBySlug(params?.slug);
  return {
    props: {
      post: data.post,
    },
  };
}
