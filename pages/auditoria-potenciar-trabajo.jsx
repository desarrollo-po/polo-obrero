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
      <img src='https://po-proyecto.tk/wp-content/uploads/2022/11/1200-x-2000.jpg' className={styles.banner} alt="Auditoria Potenciar Trabajo" />
      </MainContainer>
      <Footer />
    </>
  )
}

export default auditorias