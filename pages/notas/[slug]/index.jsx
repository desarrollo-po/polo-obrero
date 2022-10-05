import Head from "next/head";
import React, { useEffect } from "react";
import MainContainer from "../../../components/Containers/MainContainer/MainContainer";
import { getPostsBySlug } from "../../../services/queries/PostBySlug";
import { getAllPosts } from "../../../services/queries/Posts";
import styles from "./nota.module.scss";

const index = ({
  post: {
    title,
    campos: { bajada, epigrafe, volanta },
    slug,
    content,
    seo,
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
  console.log("opengraphTitle", seo.metaDesc);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={bajada} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={process.env.NEXT_PUBLIC_FACEBOOK} />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_PROD_URL + "/notas/" + slug}
        />
        <meta property="og:title" content={seo.opengraphTitle} />
        <meta property="og:description" content={seo.metaDesc} />
        <meta property="og:image" itemProp="image" content={sourceUrl} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={process.env.NEXT_PUBLIC_TWITTER}
        />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_PROD_URL + "/notas/" + slug}
        />
        <meta property="twitter:title" content={seo.opengraphTitle} />
        <meta property="twitter:description" content={seo.metaDesc} />
        <meta property="twitter:image" content={sourceUrl} />
        <meta name="description" content={seo.metaDesc} />
      </Head>
      <MainContainer>
        <section className={styles.nota}>
          {volanta && <h3 className={styles.volanta}>{volanta}</h3>}
          <h1 className={styles.titulo}>{title}</h1>
          <p className={styles.bajada}>{bajada}</p>
          <picture className={styles.picture}>
            <img width="500" src={sourceUrl} alt={title} />
            <p className={styles.epigrafe}>{epigrafe}</p>
          </picture>

          {/* <p>Por: {autores.join(", ")}</p> */}
          {/* <p>{categorias}</p> */}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
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
    // revalidate: 300,
  };
}
