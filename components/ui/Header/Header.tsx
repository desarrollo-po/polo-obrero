import Link from "next/link";
import { BotonSumate } from "../BotonSumate/BotonSumate";
import HeaderContainer from "../../Containers/HeaderContainer/HeaderContainer";
import MenuPrincipal from "../MenuPrincipal/MenuPrincipal";
import styles from "./Header.module.scss";
import { LogoPoloObrero } from "../../Logos/LogoPoloObrero";
import { useRouter } from "next/router";
import LupaSearch from "../../Iconos/LupaSearch";
import { Redes } from "../Redes/Redes";


export const Header = () => {
  const router = useRouter();
    const handleClickSearch = (
      event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
      const textoBusqueda = (
        document.querySelector("#textoBusqueda") as HTMLInputElement
      ).value;
      router.push(`/buscador?q=${textoBusqueda}`);
    };
  return (
    <>
      <HeaderContainer>
        <header className={styles.header}>
          <div className={styles.menu}>
            <MenuPrincipal />
            
          </div>
          <form className={styles.buscador} onSubmit={handleClickSearch}>
            <div className={styles.containerBuscador}>
              <input
                className={styles.buscadorHeader}
                type="text"
                name="textoBusqueda"
                id="textoBusqueda"
                placeholder="Buscar..."
              />
              <button className={styles.btnBuscador} onClick={handleClickSearch}>
                <LupaSearch color="#4f5b66" width="20" height="20" />
              </button>
            </div>
          </form>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <LogoPoloObrero wsize="350" wheight="60" color="white" />
              </a>
            </Link>
          </div>
          
          <div className={styles.btnSumate}>
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

