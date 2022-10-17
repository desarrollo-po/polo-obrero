import Link from "next/link";
import React from "react";
import { BotonSumate } from "../BotonSumate/BotonSumate";
import HeaderContainer from "../../Containers/HeaderContainer/HeaderContainer";
import MenuPrincipal from "../MenuPrincipal/MenuPrincipal";
import { Redes } from "../Redes/Redes";
import styles from "./Header.module.scss";
import { LogoPoloObrero } from "../../Logos/LogoPoloObrero";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <header className={styles.header}>
          <div>
            <MenuPrincipal/>
          </div>
          <div>
            <Link href="/">
            <a>
              <LogoPoloObrero wsize="350" wheight="60" color="white"/>
            </a>
          </Link>
          </div>
          <div className={styles.btnRedes}>
            <BotonSumate className={styles.btn}/>
          <Redes/> 
          </div>
        </header>
      </HeaderContainer>
    </>
  );
};
