import React, { useState } from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import { IconClose } from "../../Iconos/IconClose";
import { Redes } from "../Redes/Redes";
import styles from "./MenuPrincipal.module.scss";

const MenuPrincipal = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {showMenu && (
        <nav className={styles.nav} onClick={onShowMenu}>
          <div className={styles.close1}>
            <IconClose size="3em" />
          </div>
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
              <a href="/congreso">CONGRESO</a>
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
          <div className={styles.redes}>
            <Redes />
          </div>
        </nav>
      )}

      {showMenu && (
        <div className={styles.overlay} onClick={onShowMenu}>
          <div className={styles.close}>
            <IconClose size="3em" />
          </div>
        </div>
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
