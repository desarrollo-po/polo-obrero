import Head from 'next/head';
import React from "react";
import MainContainer from '../components/Containers/MainContainer/MainContainer';
import { Footer } from '../components/ui/Footer/Footer';
import styles from "../styles/Auditoria-potenciar-trabajo.module.scss";

const auditorias = () => {
  return (
    < >
      <Head>
        <title>Auditoria Potenciar Trabajo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
      <h1 className={styles.titulo}>Auditoria Potenciar Trabajo</h1>
      </MainContainer>
      <Footer />
    </>
  )
}

export default auditorias