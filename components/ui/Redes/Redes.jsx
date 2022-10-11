import React from "react";
import IconFacebook from "../../Iconos/IconFacebook";
import IconInstagram from "../../Iconos/IconInstagram";
import styles from "./redes.module.scss";

export const Redes = () => {
  return (
    <ul className={styles.redes}>
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
  );
};
