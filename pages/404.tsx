import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import styles from "../styles/404.module.scss";
import { Comunicados } from "../components/Regiones/Comunicados/Comunicados";
import { getComunicadosPolo } from "../services/queries/PostsComunicados";
import { Footer } from "../components/ui/Footer/Footer";

const pageNotFound = ({ comunicadosPolo }) => {
  return (
    <>
      <Head>
        <title>😅 404. Ouch! Página no encontrada.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <div className={styles.paginaNoEncontrada}>
          <h3>404 - Ouch! Página no encontrada. 😅</h3>
        </div>
        <div className={styles.volver}>
          <a href="/">Volver a la página principal 🏠</a>
        </div>
        <p className={styles.texto}>o quizás te interese leer...</p>
        <Comunicados comunicadosPolo={comunicadosPolo} />
      </MainContainer>
      <Footer />
    </>
  );
};

export default pageNotFound;

export async function getStaticProps() {
  const comunicadosPolo = await getComunicadosPolo(4);

  return {
    props: {
      comunicadosPolo: comunicadosPolo.comunicados,
    },
  };
}
