import Head from 'next/head';
import React from "react";
import MainContainer from '../components/Containers/MainContainer/MainContainer';
import { BotonWsp } from '../components/ui/BotonWsp/BotonWsp';
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
        <h3>¿Qué sucede si no realizo la auditoria?</h3>
        <p className={styles.p}>El gobierno puede dar de baja a las personas que no actualicen sus datos mediante la aplicación.</p>
        <h3>¿Dónde realizo la auditoria?</h3>
        <p className={styles.p}>En tu celular desgargando la aplicacion Mi Argentina o ingresando por internet a la web de Mi Argentina.</p>
        <h3>¿Cómo realizo la auditoria?</h3>
        <p className={styles.p}>Completando la encuesta en Mi Argentina.</p>
        <h3>¿Cómo descargo la app MiArgentina?</h3>
        <p className={styles.p}>Podés ingresar descargarla <a className={styles.link} href="https://play.google.com/store/apps/details?id=ar.gob.argentinagobar">acá</a> tambien podes ingresar desde tu navegador <a className={styles.link} href="https://id.argentina.gob.ar/ingresar/">acá</a>.</p>
        <h3>¿Qué hago si tengo problemas para ingresar a Mi Argentina, si perdí la clave o no logro completar las preguntas?</h3>
        <p>Comunicate con nosotros por whatsapp al <a className={styles.link} href="https://api.whatsapp.com/send/?phone=%2B5491138962853&text&type=phone_number&app_absent=0">1138962853</a> para que te ayudemos en tu barrio o provincia y asi poder defender tu plan social</p>
      </div>
      </MainContainer>
      <BotonWsp />
      <Footer />
    </>
  )
}

export default auditorias