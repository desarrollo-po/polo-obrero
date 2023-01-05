import Link from "next/link";
import { BotonSumate } from "../BotonSumate/BotonSumate";
import HeaderContainer from "../../Containers/HeaderContainer/HeaderContainer";
import MenuPrincipal from "../MenuPrincipal/MenuPrincipal";
import { Redes } from "../Redes/Redes";
import styles from "./Header.module.scss";
import { LogoPoloObrero } from "../../Logos/LogoPoloObrero";
import { useRouter } from "next/router";
import LupaSearch from "../../Iconos/LupaSearch";


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
          <form onSubmit={handleClickSearch}>
            <div className="containerBuscador">
              <input
                className="buscadorHeader"
                type="text"
                name="textoBusqueda"
                id="textoBusqueda"
                placeholder="Buscar..."
              />
              <button className="btnBuscador" onClick={handleClickSearch}>
                <LupaSearch width="24" height="24" />
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
          <div className={styles.redes}>
            <div className={styles.btnRedes}>
              <BotonSumate />
              <Redes />
            </div>
          </div>
        </header>
      </HeaderContainer>

      <style jsx> {`
      .containerBuscador {
        display: flex;
        align-items:center;
        justify-content: center;
        }
      .buscadorHeader {
        padding: 8px;
        font-size:15px;
      }
      .btnBuscador {
        background: none;
        cursor:pointer;
      }
      `}</style>
    </>
  );
};

