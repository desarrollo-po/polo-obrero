import Head from 'next/head';
import React from "react";
import MainContainer from '../components/Containers/MainContainer/MainContainer';
import { Footer } from '../components/ui/Footer/Footer';
import styles from "../styles/Historia.module.scss";

const historia = () => {
  return (
    < >
      <Head>
        <title>Historia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
      <h1 className={styles.titulo}>Historia del Polo Obrero</h1>
      </MainContainer>
      <Footer />
    </>
  )
}

export default historia

