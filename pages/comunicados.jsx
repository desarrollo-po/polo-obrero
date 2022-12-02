import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { Comunicados } from "../components/Regiones/Comunicados/Comunicados";
import { Footer } from "../components/ui/Footer/Footer";
import { getComunicadosPolo } from "../services/queries/PostsComunicados";
import styles from "../styles/ComunicadosPrensa.module.scss";

export default function PrensaComunicados({ comunicadosPolo }) {
  console.log(comunicadosPolo, "COMUNICADOS")
  return (
    <>
      <Head>
        <title>Comunicados de Prensa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <h1 className={styles.titulo}>Comunicados de Prensa</h1>
        <Comunicados comunicadosPolo={comunicadosPolo} />
      </MainContainer>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const comunicadosPolo = await getComunicadosPolo(40);
  return {
    props: {
      comunicadosPolo: comunicadosPolo.comunicados,
    },
  };
}
