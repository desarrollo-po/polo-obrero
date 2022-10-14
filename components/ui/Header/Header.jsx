import Link from "next/link";
import React from "react";
import HeaderContainer from "../../Containers/HeaderContainer/HeaderContainer";
import MenuPrincipal from "../MenuPrincipal/MenuPrincipal";
import { Redes } from "../Redes/Redes";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <header className={styles.header}>
          <MenuPrincipal />
          <Link href="/">
            <a>
              <img
                width="200"
                className={styles.logo}
                src="/imgs/logo-polo-obrero.png"
              />
            </a>
          </Link>
          <Redes />
        </header>
      </HeaderContainer>
    </>
  );
};
