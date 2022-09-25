import Head from "next/head";
import React from "react";
import MainContainer from "../../../components/Containers/MainContainer/MainContainer";
import styles from "./nota.module.scss";

const index = ({ post }) => {
  console.log("🚀 ~ file: index.jsx ~ line 7 ~ index ~ post", post);

  const {
    title: { rendered: title },
    content: { rendered: content },
    acf: { bajada },
    _embedded,
  } = post;
  const autores = _embedded["wp:term"][2].map((autor) => autor.name);
  const categorias = _embedded["wp:term"][0].map((categoria) => categoria.name);
  const imagen = _embedded["wp:featuredmedia"][0].source_url;
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
          <p>Por: {autores.join(", ")}</p>
          <p>{categorias}</p>
          <p>{bajada}</p>
          <img src={imagen} alt={title} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </MainContainer>
    </>
  );
};

export default index;

export async function getStaticPaths() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL +
      process.env.NEXT_PUBLIC_WORDPRESS_API_POSTS
  );
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL +
      process.env.NEXT_PUBLIC_WORDPRESS_API_POSTS +
      "/" +
      id +
      "?_embed"
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
