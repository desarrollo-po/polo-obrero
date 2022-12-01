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
      <img src='https://po-proyecto.tk/wp-content/uploads/2022/12/banners-polo-auditorias_corregido_1200-x-200.jpg' className={styles.banner} alt="Auditoria Potenciar Trabajo" />
      <div className={styles.contenedor}>
        El objetivo de las auditorías es avanzar con un ajuste por medio de bajas masivas para cumplir con los recortes que pide el Fondo Monetario Internacional en la asistencia social. Es lo que ocurre en las localidades donde se viene realizando, como Lanús, Morón, Ituzaingó y Santa Fe capital, donde se avanzó en las suspensiones de miles de compañeros que finalmente quedarán fuera del programa a pesar de continuar sin trabajo u otro ingreso de subsistencia.
        Las principales víctimas fueron personas que figuran en padrones de municipios o que no se encuentran organizadas. Quienes nos organizamos en Polo Obrero llegamos preparados para enfrentar esta ofensiva contra los más pobres.
        <h3 className={styles.p}>¿Cómo realizo la auditoria?</h3>
        <h3 className={styles.p}>¿Dónde realizo la auditoria?</h3>
        <h3 className={styles.p}>¿Qué sucede si no realizo la auditoria?</h3>
        <h3 className={styles.p}>¿Cómo descargo la app MiArgentina?</h3>
        <p className={styles.p}>Podés ingresar descargarla <a href="https://play.google.com/store/apps/details?id=ar.gob.argentinagobar">acá</a> tambien podes ingresar desde tu navegador <a href="https://id.argentina.gob.ar/ingresar/"acá /></p>
      </div>
      </MainContainer>
      <Footer />
    </>
  )
}

export default auditorias