import Link from "next/link";
import React from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <MainContainer>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </MainContainer>
      </header>
    </>
  );
};
