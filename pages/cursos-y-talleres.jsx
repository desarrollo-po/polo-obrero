import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { IconVideo } from "../components/Iconos/IconVideo";
import { Footer } from "../components/ui/Footer/Footer";
import styles from "../styles/Cursos.module.scss";
// import ReactLogo from "../svgs/1608470_video_file_icon.svg"

const cursos = () => {
  return (
    <>
      <Head>
        <title>Polo Obrero - Medios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <h1 className={styles.titulo}>Cursos y talleres</h1>
        <div className={styles.cursos}>
          <div className={styles.curso}>
            <img src="/imgs/curso-lucha-hambre-socialismo.jpg" />
            <h2>titulo</h2>
          </div>
          <div className={styles.curso}>
            <img src="/imgs/curso-introduccion-capital-marx.jpg" />
            <h2>titulo</h2>
          </div>
          <div className={styles.curso}>
            <img src="/imgs/curso-peronismo-socialismo.jpg" />
            <h2>Peronismo y Socialismo</h2>
            <h3>En la lucha de clases argentina</h3>
            <IconVideo size="40" color="white" />
            <p>3 Clases</p>
            <p>Bibliografía</p>
            <p>Duración por clase: 21-23 minutos</p>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default cursos;
