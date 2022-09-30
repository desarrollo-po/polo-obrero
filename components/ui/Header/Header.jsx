import Link from "next/link";
import React from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img className={styles.logo} src="imgs/logo-polo-obrero.png" />
          </a>
        </Link>
        <ul>
          <li>
            <a href="https://www.instagram/polo.obrero">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/polo.obrero.3">Facebook</a>
          </li>
        </ul>
      </header>
    </>
  );
};
