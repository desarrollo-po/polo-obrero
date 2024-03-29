import Head from "next/head";
import React from "react";
import { Icon } from "@iconify/react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { Contactos } from "../components/Regiones/Contactos/Contactos";
import { BotonWsp } from "../components/ui/BotonWsp/BotonWsp";
import { Footer } from "../components/ui/Footer/Footer";
import styles from "../styles/Auditoria-potenciar-trabajo.module.scss";

const auditorias = () => {
  return (
    <>
      <Head>
        <title>Auditoria Potenciar Trabajo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <img
          src="https://ujspo.ar/wp-content/uploads/2022/12/banners-polo-auditorias_corregido_1200-x-200.jpg"
          className={styles.banner}
          alt="Auditoria Potenciar Trabajo"
        />
        <div className={styles.contenedor}>
          <h3>Organizate para hacer la auditoría. Defendé tu plan</h3>
          <p>
            El gobierno pretende dar bajas masivas del programa Potenciar
            Trabajo. La auditoría a través de la aplicación Mi Argentina está
            dejando afuera alrededor 154 mil beneficiarios de planes Potenciar
            Trabajo, cuando hay desocupados que se encuentran sin los medios
            técnicos para poder hacerla. El Polo Obrero está en campaña para que
            ningún compañero ni compañera quede afuera. Por el momento, quienes
            no hayan podido realizarla, se encontraran con su plan suspendido y
            cobrara apenas el 50% de la ya miserable cifra que perciben. Si
            tenés dificultades, acercate a cualquiera de nuestras sedes y
            comedores para hacer la auditoría y organizarte con el Polo Obrero
            para luchar contra la baja de planes, por el reclamo de trabajo
            genuino, la defensa de los comedores populares y el acceso al
            alimento y por todos nuestros reclamos.
          </p>
          <h3>¿Qué sucede si no realizo la auditoria?</h3>
          <p className={styles.p}>
            El gobierno dará de baja a las personas que no actualicen sus datos
            mediante la aplicación.
          </p>
          <h3>No llegué a actualizar mis datos a tiempo ¿Que puedo hacer?</h3>
          <p className={styles.p}>
            Realizá igualmente la actualización para poder reclamar nuevamente
            el cobro el 100% del monto de tu plan social
          </p>
          <h3>¿Dónde realizo la auditoria?</h3>
          <p className={styles.p}>
            En tu celular{" "}
            <a
              className={styles.link}
              href="https://play.google.com/store/apps/details?id=ar.gob.argentinagobar"
            >
              descargando la aplicación Mi Argentina
            </a>{" "}
            o ingresando por internet a la{" "}
            <a
              className={styles.link}
              href="https://id.argentina.gob.ar/ingresar/"
            >
              web de Mi Argentina
            </a>
            .
          </p>
          <h3>¿Cómo realizo la auditoria?</h3>
          <p className={styles.p}>Completando la encuesta en Mi Argentina.</p>
          <h3>¿Cómo descargo la app MiArgentina?</h3>
          <p className={styles.p}>
            Podés ingresar descargarla{" "}
            <a
              className={styles.link}
              href="https://play.google.com/store/apps/details?id=ar.gob.argentinagobar"
            >
              acá
            </a>{" "}
            tambien podes ingresar desde tu navegador{" "}
            <a
              className={styles.link}
              href="https://id.argentina.gob.ar/ingresar/"
            >
              acá
            </a>
            .
          </p>
          <h3>
            ¿Qué hago si tengo problemas para ingresar a Mi Argentina, si perdí
            la clave o no logro completar las preguntas?
          </h3>
          <p>
            Comunicate con nosotros por whatsapp para que te ayudemos en tu
            barrio o provincia y asi poder defender tu plan social. Hacé clic en
            el número de teléfono.
          </p>

          <Contactos />
        </div>
      </MainContainer>
      <BotonWsp />
      <Footer />
    </>
  );
};

export default auditorias;
