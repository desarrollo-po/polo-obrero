import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { Footer } from "../components/ui/Footer/Footer";
import { getJuventud } from "../services/queries/GetJuventud";
import styles from "../styles/Juventud.module.scss";

export default function Juventud() {
  return (
    <>
      <Head>
        <title>Juventud del Polo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <h1 className={styles.titulo}>Juventud del Polo Obrero</h1>
      </MainContainer>
      <Footer />
    </>
  );
}
