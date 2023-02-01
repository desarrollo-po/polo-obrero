import Link from "next/link";
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
              <details className={styles.item}>
                <summary>
                  <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
                  <Link className={styles.link} href="/comunicados">COMUNICADOS DE PRENSA</Link>
                </summary>
              </details>   
            <hr className={styles.linea}></hr>
            </li>
            <li>
            <details className={styles.item}>
                <summary>
                  <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
                  <Link className={styles.link} href="/auditoria-potenciar-trabajo">AUDITORIAS</Link>
                  </summary>
              </details>   
            <hr className={styles.linea}></hr>
            </li>
            <li>
            <details className={styles.item}>
                <summary >
                  <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
              <Link className={styles.link} href="/videos">VIDEOS</Link>
              </summary>
              </details>   
            <hr className={styles.linea}></hr>
            </li>
            <li>
            <details className={styles.item}>
                <summary>
                  <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
              <Link className={styles.link} href="/congreso">CONGRESO</Link>
              </summary>
              </details>   
            <hr className={styles.linea}></hr>
            </li>
            {/* <li>
              <a href="/cursos-y-talleres">CURSOS Y TALLERES</a>
            </li> */}
            <li>
            <details className={styles.item}>
                <summary >
                  <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
              <Link href="/juventud">JUVENTUD</Link>
              </summary>
              </details>   
            <hr className={styles.linea}></hr>
            </li>
            {/* <li>
            <details className={styles.item}>
                <summary >
                  <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
              <Link href="/historia">HISTORIA</Link>
              </summary>
              </details>   
            <hr className={styles.linea}></hr>
            </li> */}
            {/* <li>
            <details className={styles.item}>
                <summary>
                  <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
              <Link href="/locales">LOCALES</Link>
              </summary>
              </details>   
            <hr className={styles.linea}></hr>
            </li> */}
            <li>
            <details className={styles.item}>
                <summary>
                  <span>
                  <svg className={styles.icono} width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
              <Link className={styles.link} href="/contacto">CONTACTO</Link>
              </summary>
              </details>
              <hr className={styles.linea}></hr>
            </li>
            <li>
            <details>
                <summary className={styles.item}>
                  <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5.06544L1.12966 9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </span>
              <Link href="/buscador">BUSCAR</Link>
              </summary>
              </details>   
            <hr className={styles.linea}></hr>
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
