import Head from 'next/head';
import React from "react";
import MainContainer from '../components/Containers/MainContainer/MainContainer';
import { Footer } from '../components/ui/Footer/Footer';
import styles from "../styles/Locales.module.scss";

const locales = () => {
  return (
    < >
      <Head>
        <title>Locales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
      <h1 className={styles.titulo}>Locales del Polo Obrero</h1>
      </MainContainer>
      <Footer />
    </>
  )
}

export default locales