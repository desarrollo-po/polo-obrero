import Link from "next/link";
import React from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import IconFacebook from "../../Iconos/IconFacebook";
import IconInstagram from "../../Iconos/IconInstagram";
import IconTwitter from "../../Iconos/IconTwitter";
import MenuPrincipal from "../MenuPrincipal/MenuPrincipal";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <MainContainer>
        <header className={styles.header}>
          <Link href="/">
            <a>
              <img
                width="200"
                className={styles.logo}
                src="imgs/logo-polo-obrero.png"
              />
            </a>
          </Link>
          <MenuPrincipal />
          <ul>
            <li>
              <a href="https://www.instagram/polo.obrero">
                <IconFacebook size="30" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/polo.obrero.3">
                <IconInstagram size="30" />
              </a>
            </li>
          </ul>
        </header>
      </MainContainer>
    </>
  );
};
