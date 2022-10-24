import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { IconVideo } from "../components/Iconos/IconVideo";
import { IconTextos } from "../components/Iconos/IconTextos";
import { Footer } from "../components/ui/Footer/Footer";
import styles from "../styles/Cursos.module.scss";
import { IconDuracion } from "../components/Iconos/IconDuracion";
import { IconPreguntas } from "../components/Iconos/IconPreguntas";

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
            <div className="texto"><IconVideo size="20" color="white" /> 4 Clases</div>
            <div className="texto"><IconPreguntas size="20" color="white" /> Glosario</div>
            <div className="texto"><IconTextos size="20" color="white" /> Bibliografía</div>
            <div className="texto"><IconDuracion size="20" color="white" /> Duración por clase: 12-15 minutos</div>
          </div>
          <div className={styles.curso}>
          <a href="https://revistaedm.com/cursos/curso-online-una-introduccion-a-el-capital-de-karl-marx/"><img src="/imgs/curso-introduccion-capital-marx.jpg" /></a>
            <h2>El Capital de Karl Marx: Introducción a su estudio</h2>
            <h3>Herramientas para entender la crisis mundial</h3>
            <div className="texto"><IconVideo size="20" color="white" /> 6 Clases</div>
            <div className="texto"><IconPreguntas size="20" color="white" /> 6 intercambios de preguntas</div>
            <div className="texto"><IconTextos size="20" color="white" /> Bibliografía</div>
            <div className="texto"><IconDuracion size="20" color="white" /> Duración por clase: 18-29 minutos</div>
          </div>
          <div className={styles.curso}>
            <a href="https://revistaedm.com/cursos/curso-online-peronismo-y-socialismo-en-la-lucha-de-clases/"><img src="/imgs/curso-peronismo-socialismo.jpg" /></a>
            <h2>Peronismo y Socialismo <br/><br/></h2>
            <h3>En la lucha de clases argentina</h3>
            <div className="texto"><IconVideo size="20" color="white" /> 3 Clases</div>
            <div className="texto"><IconTextos size="20" color="white" /> Bibliografía</div>
            <div className="texto"><IconDuracion size="20" color="white" /> Duración por clase: 21-23 minutos</div>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default cursos;
