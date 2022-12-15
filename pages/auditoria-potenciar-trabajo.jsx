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
        <p>Comunicate con nosotros por whatsapp para que te ayudemos en tu barrio o provincia y asi poder defender tu plan social. Hacé click en el número de teléfono.</p>
        <div className={styles.contactos}>
          <ul>
            <li className={styles.region} target="_blank">CABA</li>
            <li className={styles.telefono}><a  href="https://wa.me/+5491138962853">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region} target="_blank">ZONA SUR</li>
            <li className={styles.telefono}><a href="https://wa.me/+5491138962853">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ZONA NORTE</li>
            <li className={styles.telefono}><a href="https://wa.me/+5491138962853">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ZONA OESTE</li>
            <li className={styles.telefono}><a href="https://wa.me/+5491138962853">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>MATANZA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5491138962853">1138962853</a></li>
          </ul>
          <ul>
            <li className={styles.region}>BAHÍA BLANCA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492914328188">2914328188</a></li>
          </ul>
          <ul>
            <li className={styles.region}>MAR DEL PLATA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5491164217714">1164217714</a></li>
          </ul>
          <ul>
            <li className={styles.region}>SAN NICOLAS</li>
            <li className={styles.telefono}><a href="https://wa.me/+5493364260825">3364260825</a></li>
          </ul>
          <ul>
            <li className={styles.region}>LA PLATA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492215084221">2215084221</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ENSENADA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492215084221">2215084221</a></li>
          </ul>
          <ul>
            <li className={styles.region}>BERISSO</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492215084221">2215084221</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ENTRE RIOS (LA PAZ)</li>
            <li className={styles.telefono}><a href="https://wa.me/+5493437518914">3437518914</a></li>
          </ul>
          <ul>
            <li className={styles.region}>ENTRE RIOS (PARANÁ)</li>
            <li className={styles.telefono}><a href="https://wa.me/+5493434065203">3434065203</a></li>
            </ul>
          <ul>
            <li className={styles.region}>ENTRE RIOS (CONCEPCIÓN DEL URUGUAY)</li>
            <li className={styles.telefono}><a href="https://wa.me/+5493442459465">3442459465</a></li>
          </ul>
          <ul>
            <li className={styles.region}>CHUBUT</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492944217627">2944217627</a></li>
          </ul>
          <ul>
            <li className={styles.region}>RÍO NEGRO</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492984366812">2984366812</a></li>
          </ul>
          <ul>
            <li className={styles.region}>TIERRA DEL FUEGO</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492964668039">2964668039</a></li>
          </ul>
          <ul>
            <li className={styles.region}>SANTA CRUZ</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492975900928">2975900928</a> 
            <br></br>         
            <a href="https://wa.me/+5492974252059">2974252059</a>
            <br></br>
            <a href="https://wa.me/+5492974167968">2974167968</a></li>
          </ul>
          <ul>
            <li className={styles.region}>NEUQUEN</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492994120889">2994120889</a></li>
          </ul>
          <ul>
            <li className={styles.region}>RAMALLO</li>
            <li className={styles.telefono}><a href="https://wa.me/+5493364495071">3364495071</a></li>
          </ul>
          <ul>
            <li className={styles.region}>NECOCHEA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5491123474823">1123474823</a></li>
          </ul>
          <ul>
            <li className={styles.region}>PERGAMINO</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492477221298">2477221298</a></li>
          </ul>
          <ul>
            <li className={styles.region}>TANDIL</li>
            <li className={styles.telefono}><a href="https://wa.me/+549249353597">249353597</a></li>
          </ul>
          <ul>
            <li className={styles.region}>FORMOSA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5493704356449">3704356449</a></li>
          </ul>
          <ul>
            <li className={styles.region}>MISIONES</li>
            <li className={styles.telefono}><a href="https://wa.me/+5493751330512">3751330512</a></li>
          </ul>
          <ul>
            <li className={styles.region}>MENDOZA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492612401457">2612401457</a></li>
          </ul>
          <ul>
            <li className={styles.region}>LA RIOJA</li>
            <li className={styles.telefono}><a href="https://wa.me/+5493804356066">3804356066</a></li>
          </ul>
          <ul>
            <li className={styles.region}>SAN JUAN</li>
            <li className={styles.telefono}><a href="https://wa.me/+5492644838046">2644838046</a></li>
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