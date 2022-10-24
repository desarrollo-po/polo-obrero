import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { Comunicados } from "../components/Regiones/Comunicados/Comunicados";
import { Footer } from "../components/ui/Footer/Footer";
import { getComunicadosPO } from "../services/queries/ComunicadosPO";
import styles from "../styles/ComunicadosPrensa.module.scss";

export default function PrensaComunicados({ comunicadosPO }) {
  return (
    <>
      <Head>
        <title>Comunicados de Prensa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <h1 className={styles.titulo}>Comunicados de Prensa</h1>
        <Comunicados comunicadosPO={comunicadosPO} />
      </MainContainer>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const comunicadosPO = await getComunicadosPO(12);
  return {
    props: {
      comunicadosPO: comunicadosPO.posts,
    },
  };
}
