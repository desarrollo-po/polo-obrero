import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { TarjetaChicaConFoto } from "../components/Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto";
import { Footer } from "../components/ui/Footer/Footer";
import { getPostsByTag } from "../services/queries/PostsByTag";
import styles from "../styles/Juventud.module.scss";

export default function Juventud({ notasTagJuventud }) {
  return (
    <>
      <Head>
        <title>Juventud del Polo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <div className={styles.containerTitulo}>
        <h1 className={styles.titulo}>Juventud del Polo Obrero</h1>
        </div>
        <div className={styles.containerNota}>
          {notasTagJuventud.edges.map(
            ({
              node: {
                id,
                title,
                slug,
                campos: { volanta, descripcionDestacado },
                featuredImage: {
                  node: { sourceUrl },
                },
              },
            }) => (
              <TarjetaChicaConFoto
                key={id}
                titulo={title}
                imagen={sourceUrl}
                slug={slug}
                volanta={volanta}
                descripcionDestacado={descripcionDestacado}
              />
            )
          )}
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const notasTagJuventud = await getPostsByTag("juventud-del-polo");
  return {
    props: {
      notasTagJuventud: notasTagJuventud.posts,
    },
  };
}
