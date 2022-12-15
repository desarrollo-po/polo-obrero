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
        <h3>Organizate para hacer la auditoría. Defendé tu plan</h3>
        <p>El gobierno pretende dar bajas masivas del programa Potenciar Trabajo. La auditoría a
        través de la aplicación Mi Argentina quiere dejar afuera a todos los que no tienen los
        medios técnicos para poder hacerla. El Polo Obrero está en campaña para que ningún
        compañero ni compañera quede afuera. Si tenés dificultades, acercate a cualquiera de
        nuestras sedes y comedores para hacer la auditoría. Y organizate con el Polo Obrero para
        luchar por trabajo genuino, por la defensa de los comedores populares y el acceso al
        alimento y por todos los reclamos.</p>
        <h3>¿Qué sucede si no realizo la auditoria?</h3>
        <p className={styles.p}>El gobierno puede dar de baja a las personas que no actualicen sus datos mediante la aplicación.</p>
        <h3>¿Dónde realizo la auditoria?</h3>
        <p className={styles.p}>En tu celular desgargando la aplicacion Mi Argentina o ingresando por internet a la web de Mi Argentina.</p>
        <h3>¿Cómo realizo la auditoria?</h3>
        <p className={styles.p}>Completando la encuesta en Mi Argentina.</p>
        <h3>¿Cómo descargo la app MiArgentina?</h3>
        <p className={styles.p}>Podés ingresar descargarla <a className={styles.link} href="https://play.google.com/store/apps/details?id=ar.gob.argentinagobar">acá</a> tambien podes ingresar desde tu navegador <a className={styles.link} href="https://id.argentina.gob.ar/ingresar/">acá</a>.</p>
        <h3>¿Qué hago si tengo problemas para ingresar a Mi Argentina, si perdí la clave o no logro completar las preguntas?</h3>
        <p>Comunicate con nosotros por whatsapp para que te ayudemos en tu barrio o provincia y asi poder defender tu plan social</p>
        <div className={styles.contactos}>
          <ul>
            <li className={styles.region}>CABA</li>
            <li><a href="">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ZONA SUR</li>
            <li><a href="">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ZONA NORTE</li>
            <li><a href="">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ZONA OESTE</li>
            <li><a href="">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>MATANZA</li>
            <li><a href="">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>BAHÍA BLANCA</li>
            <li><a href="">2914328188</a></li>
          </ul>
          <ul>
            <li className={styles.region}>MAR DEL PLATA</li>
            <li><a href="">1164217714</a></li>
          </ul>
          <ul>
            <li className={styles.region}>SAN NICOLAS</li>
            <li><a href="">3364260825</a></li>
          </ul>
          <ul>
            <li className={styles.region}>LA PLATA</li>
            <li><a href="">2215084221</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ENSENADA</li>
            <li><a href="">2215084221</a></li>
          </ul>
          <ul>
            <li className={styles.region}>BERISSO</li>
            <li><a href="">2215084221</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ENTRE RIOS (LA PAZ)</li>
            <li><a href="">3437518914</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ENTRE RIOS (PARANÁ)</li>
            <li><a href="">3434065203</a></li>
            </ul>
          <ul>
            <li className={styles.region}>ENTRE RIOS (CONCEPCIÓN DEL URUGUAY)</li>
            <li><a href="">3442459465</a></li>
          </ul>
          <ul>
            <li className={styles.region}>CHUBUT</li>
            <li><a href="">2944217627</a></li>
          </ul>
          <ul>
            <li className={styles.region}>RÍO NEGRO</li>
            <li><a href="">2984366812</a></li>
          </ul>
          <ul>
            <li className={styles.region}>TIERRA DEL FUEGO</li>
            <li><a href="">2964668039</a></li>
          </ul>
          <ul>
            <li className={styles.region}>SANTA CRUZ</li>
            <li><a href="">2975900928</a> 
            <br></br>         
            <a href="">2974252059</a>
            <br></br>
            <a href="">2974167968</a></li>
          </ul>
          <ul>
            <li className={styles.region}>NEUQUEN</li>
            <li><a href="">2994120889</a></li>
          </ul>
          <ul>
            <li className={styles.region}>RAMALLO</li>
            <li><a href="">3364495071</a></li>
          </ul>
          <ul>
            <li className={styles.region}>NECOCHEA</li>
            <li><a href="">1123474823</a></li>
          </ul>
          <ul>
            <li className={styles.region}>PERGAMINO</li>
            <li><a href="">2477221298</a></li>
          </ul>
          <ul>
            <li className={styles.region}>TANDIL</li>
            <li><a href="">249353597</a></li>
          </ul>
          <ul>
            <li className={styles.region}>FORMOSA</li>
            <li><a href="">3704356449</a></li>
          </ul>
          <ul>
            <li className={styles.region}>MISIONES</li>
            <li><a href="">3751330512</a></li>
          </ul>
          <ul>
            <li className={styles.region}>MENDOZA</li>
            <li><a href="">2612401457</a></li>
          </ul>
          <ul>
            <li className={styles.region}>LA RIOJA</li>
            <li><a href="">3804356066</a></li>
          </ul>
          <ul>
            <li className={styles.region}>SAN JUAN</li>
            <li><a href="">2644838046</a></li>
          </ul>
        </div>
      </div>
      </MainContainer>
      <BotonWsp />
      <Footer />
    </>
  )
}

export default auditorias