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
              <a href="/ultimas-noticias">ÚLTIMAS NOTICIAS</a>
            </li>
            <li>
              <a href="/comunicados">COMUNICADOS DE PRENSA</a>
            </li>
            <li>
              <a href="/videos">VIDEOS</a>
            </li>
            <li>
              <a href="/cursos-y-talleres">CURSOS Y TALLERES</a>
            </li>
            <li>
              <a href="/juventud">JUVENTUD</a>
            </li>
            <li>
              <a href="/historia">HISTORIA</a>
            </li>
            <li>
              <a href="/contacto">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </footer>
    </MainContainer>
  );
};
