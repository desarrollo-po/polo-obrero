import Link from "next/link";
import { BotonSumate } from "../BotonSumate/BotonSumate";
import HeaderContainer from "../../Containers/HeaderContainer/HeaderContainer";
import MenuPrincipal from "../MenuPrincipal/MenuPrincipal";
import styles from "./Header.module.scss";
import { LogoPoloObrero } from "../../Logos/LogoPoloObrero";
import { useRouter } from "next/router";
import LupaSearch from "../../Iconos/LupaSearch";
import { Redes } from "../Redes/Redes";
import LupaSearchMobile from "../../Iconos/LupaSearchMobile";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <header className={styles.header}>
          <div className={styles.menu}>
            <MenuPrincipal />
          </div>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <LogoPoloObrero wsize="350" wheight="60" color="white" />
              </a>
            </Link>
          </div>
          <div className={styles.buscadorMobile}>
            <Link href="/buscador">
              <LupaSearchMobile color="white" width="20" height="20" />
            </Link>
          </div>
          <div className={styles.containerBtn}>
            <Link href="/buscador">
              <div className={styles.lupa}>
                <LupaSearch color="#FFF" width="25" height="25" />
              </div>
            </Link>
            <BotonSumate />
          </div>

          <div className={styles.redes}>
            <Redes />
          </div>
        </header>
      </HeaderContainer>
    </>
  );
};
