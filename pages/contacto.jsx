import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { BotonWsp } from "../components/ui/BotonWsp/BotonWsp";
import { Footer } from "../components/ui/Footer/Footer";
import { Formulario } from "../components/ui/Formulario/Formulario";
import styles from "../styles/Contacto.module.scss";

const contacto = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <h1 className={styles.titulo}>Organizate junto a nosotros para por el derecho al trabajo, la vivienda y todas nuestra reivindicaciones</h1>
        <Formulario />
      </MainContainer>
      <BotonWsp />
      <Footer />
    </>
  );
};

export default contacto;
