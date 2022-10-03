import Head from 'next/head'
import React from 'react'
import MainContainer from '../components/Containers/MainContainer/MainContainer'
import { Footer } from '../components/ui/Footer/Footer'
import styles from "../styles/Medios.module.scss"

const medios = () => {
  return (
    <>
      <Head>
        <title>Polo Obrero - Medios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <h1 className={styles.titulo}>El Polo Obrero en los medios</h1>
        <div className={styles.videos}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/_jj3M8PZOqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/iwp6KiQe_Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/PNd5euXK-7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}

export default medios