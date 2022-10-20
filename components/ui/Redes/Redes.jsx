import React from "react";
import IconFacebook from "../../Iconos/IconFacebook";
import IconInstagram from "../../Iconos/IconInstagram";
import styles from "./redes.module.scss";

export const Redes = () => {
  return (
    <div className={styles.redes}>
      <li className={styles.fb}>
        <a href="https://www.instagram/polo.obrero">
          <IconFacebook size="30" />
        </a>
      </li>
      <li>
        <div className={styles.ig}>
          <a href="https://www.facebook.com/polo.obrero.3">
            <IconInstagram size="30" />
          </a>
        </div>
      </li>
    </div>
  );
};
