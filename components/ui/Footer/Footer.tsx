import React from "react";
import styles from "./Footer.module.scss";
import MainContainer from "../../Containers/MainContainer/MainContainer";

export const Footer = () => {
  return (
    <MainContainer>
      <footer className={styles.footer}>
        <nav>
          <ul>
            <li>
              <a href="/comunicados">COMUNICADOS DE PRENSA</a>
            </li>
            <li>
              <a href="/auditoria-potenciar-trabajo">AUDITORIAS</a>
            </li>            
            <li>
              <a href="/videos">VIDEOS</a>
            </li>
            <li>
              <a href="/congreso">CONGRESO</a>
            </li>            
            {/* <li>
              <a href="/cursos-y-talleres">CURSOS Y TALLERES</a>
            </li> */}
            <li>
              <a href="/juventud">JUVENTUD</a>
            </li>
            {/* <li>
              <a href="/historia">HISTORIA</a>
            </li> */}
            {/* <li>
              <a href="/locales">LOCALES</a>
            </li> */}
            <li>
              <a href="/contacto">CONTACTO</a>
            </li>
          </ul>
        </nav>
        <div className={styles.contenedorLicenses}>
        <div className={styles.contenedorLicense}>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"> <img alt="Licencia Creative Commons" src="https://i.creativecommons.org/l/by/4.0/80x15.png"></img> Polo Obrero está distribuido bajo una<br></br>Licencia Creative Commons Atribución 4.0 Internacional</a>
        </div>
        <div className={styles.license}>
          <a href="/licencia"><p className={styles.license}>Como usar esta licencia</p></a>
        </div>
        </div>
      </footer>
    </MainContainer>
  );
};
