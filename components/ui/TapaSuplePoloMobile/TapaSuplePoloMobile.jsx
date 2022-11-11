import React from "react";
import styles from "./TapaSuplePoloMobile.module.scss";

export const TapaSuplePolo = () => {
  return (
    <section className={styles.tapaSuplePolo}>
      <picture className={styles.imagenContainer}>
        <a href="https://prensaobrera.com/prensa-numeros/1657sp">
          <img src="../../../imgs/tapa-suplemento-polo-1657.jpg" />
        </a>
      </picture>
    </section>
  );
};
