import Head from "next/head";
import React, { useContext, useEffect } from "react";
import MainContainer from "../../../components/Containers/MainContainer/MainContainer";
import { ListaNotasGuardadas } from "../../../components/NotasGuardadas/ListaNotasGuardadas";
import { NotasGuardadasContext } from "../../../context/NotasGuardadasContext";
import { getAllComunicados } from "../../../services/queries/Comunicados";
import { getPostsBySlugComunicado } from "../../../services/queries/PostBySlugComunicados";
import styles from "./comunicados.module.scss";

const index = ({
  comunicado: {
    title,
    slug,
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <section className={styles.nota}>
          {/* <button onClick={handleGuardarNota}>Guardar nota</button> */}

          <h1 className={styles.titulo}>{title}</h1>
          
          <picture className={styles.picture}>
            <img width="500" src={sourceUrl} alt={title} />
        
          </picture>
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
  const allComunicados = await getAllComunicados();
  const paths =  allComunicados.comunicados.edges.map(
    ({ node: { slug } }) => `/comunicados/${slug}`
  ); 
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostsBySlugComunicado(params?.id);
  return {
    props: {
      comunicado: data.comunicado,
    },
    // revalidate: 300,
  };
}
