import React from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import styles from "./MenuPrincipal.module.scss";

const MenuPrincipal = () => {
  return (
    <MainContainer>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/ultimas-noticias">ÚLTIMAS NOTICIAS</a>
          </li>
          <li>
            <a href="/medios">MEDIOS</a>
          </li>
          <li>
            <a href="#">CURSOS Y TALLERES</a>
          </li>
          <li>
            <a href="#">CONTACTO</a>
          </li>
        </ul>
      </nav>
    </MainContainer>
  );
};

export default MenuPrincipal;
