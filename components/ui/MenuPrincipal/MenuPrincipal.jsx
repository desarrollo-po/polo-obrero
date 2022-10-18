import React, { useState } from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import styles from "./MenuPrincipal.module.scss";

const MenuPrincipal = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {showMenu && (
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/ultimas-noticias">ÚLTIMAS NOTICIAS</a>
            </li>
            <li>
              <a href="/comunicados">COMUNICADOS DE PRENSA</a>
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
            <li>
              <a href="/contacto">CONTACTO</a>
            </li>
          </ul>
        </nav>
      )}

      <div className={styles.hamb} onClick={onShowMenu}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </>
  );
};

export default MenuPrincipal;
