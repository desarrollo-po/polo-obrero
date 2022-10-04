import React from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import styles from "./MenuPrincipal.module.scss";

const MenuPrincipal = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/ultimas-noticias">ÚLTIMAS NOTICIAS</a>
        </li>
        <li>
          <a href="/medios">MEDIOS</a>
        </li>
        <li>
          <a href="/cursos-y-talleres">CURSOS Y TALLERES</a>
        </li>
        <li>
          <a href="/juventud">JUVENTUD</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuPrincipal;
