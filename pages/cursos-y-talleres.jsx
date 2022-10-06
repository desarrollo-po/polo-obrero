import Head from 'next/head'
import React from 'react'
import MainContainer from '../components/Containers/MainContainer/MainContainer'
import { Footer } from '../components/ui/Footer/Footer'
import styles from "../styles/Cursos.module.scss"

const cursos = () => {
  return (
    <>
      <Head>
        <title>Polo Obrero - Medios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <h1 className={styles.titulo}>Cursos y talleres</h1>
          <div className={styles.curso}>
            <div className={styles.curso}>
              <img src="/imgs/curso-lucha-hambre-socialismo.jpg" />
            </div>
            <div>
              <img src="/imgs/curso-lucha-hambre-socialismo.jpg" />
            </div>
            <div>
              <img src="/imgs/curso-lucha-hambre-socialismo.jpg" />
            </div>
          </div>
      </MainContainer>
      <Footer />
    </>
  )
}

export default cursos