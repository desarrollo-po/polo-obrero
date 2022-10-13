import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { IconVideo } from "../components/Iconos/IconVideo";
import { IconTextos } from "../components/Iconos/IconTextos";
import { Footer } from "../components/ui/Footer/Footer";
import styles from "../styles/Cursos.module.scss";

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
            <h2>De la lucha contra el hambre a la lucha por el socialismo</h2>
            <h3>Escuela de formación Polo Obrero</h3>
            <p>4 Clases</p>
            <p>Glosario</p>
            <p>Bibliografía</p>
            <p>Duración por clase: 12-15 minutos</p>
          </div>
          <div className={styles.curso}>
            <img src="/imgs/curso-introduccion-capital-marx.jpg" />
            <h2>El Capital de Karl Marx: Introducción a su estudio</h2>
            <h3>Herramientas para entender la crisis mundial</h3>
            <p>6 Clases</p>
            <p>6 intercambios de preguntas</p>
            <p>Bibliografía</p>
            <p>Duración por clase: 18-29 minutos</p>
          </div>
          <div className={styles.curso}>
            <img src="/imgs/curso-peronismo-socialismo.jpg" />
            <h2>Peronismo y Socialismo</h2>
            <h3>En la lucha de clases argentina</h3>
            <IconVideo size="40" color="white" />
            <p>3 Clases</p>
            <IconTextos size="40" color="white" />
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
