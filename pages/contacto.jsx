import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { Footer } from "../components/ui/Footer/Footer";
import styles from "../styles/Contacto.module.scss";

const contacto = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <h1 className={styles.titulo}>Sumate a luchar con el Polo Obrero</h1>
        <p className={styles.texto}>Incluir acá iFrame de google form</p>
      </MainContainer>
      <Footer />
    </>
  );
};

export default contacto;
