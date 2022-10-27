import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { TarjetaChicaConFoto } from "../components/Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto";
import { Footer } from "../components/ui/Footer/Footer";
import { getUltimasNoticias } from "../services/queries/GetUltimasNoticias";
import { getPostsByRegion } from "../services/queries/PostsByRegion";
import styles from "../styles/UltimasNoticias.module.scss";

export default function UltimasNoticias({ ultimasNoticias }) {
  return (
    <>
      <Head>
        <title>Ultimas Noticias</title>
      </Head>
      <MainContainer>
        <div className={styles.contenedorTitulo}>
          <h3 className={styles.titulo}>Noticias del Movimiento Piquetero</h3>
        </div>

        <section className={styles.ultimasNoticias}>
          {ultimasNoticias.edges.map(
            ({
              node: {
                id,
                title,
                slug,
                featuredImage: {
                  node: { sourceUrl },
                },
                campos: { volanta, descripcionDestacado },
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
        </section>
        <Footer />
      </MainContainer>
    </>
  );
}
export async function getServerSideProps() {
  const ultimasNoticias = await getUltimasNoticias(12);
  return {
    props: {
      ultimasNoticias: ultimasNoticias.posts,
    },
  };
}
