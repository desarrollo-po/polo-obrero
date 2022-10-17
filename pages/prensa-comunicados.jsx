import Head from 'next/head'
import React from 'react'
import MainContainer from '../components/Containers/MainContainer/MainContainer'
import { Footer } from '../components/ui/Footer/Footer'

export const prensaComunicados = () => {
  return (
    <>
      <Head>
        <title>Comunicados de Prensa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <h1 className={styles.titulo}>Comunicados de Prensa</h1>
        
      </MainContainer>
      <Footer />
    </>
  );
}
