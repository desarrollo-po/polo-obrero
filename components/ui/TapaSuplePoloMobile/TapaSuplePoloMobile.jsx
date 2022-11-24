import React from "react";
import styles from "./TapaSuplePoloMobile.module.scss";

export const TapaSuplePolo = ({ tapaSuplePolo, slug }) => {
  return (
    <section className={styles.tapaSuplePolo}>
      <picture className={styles.imagenContainer}>
        <a href={`https://prensaobrera.com/prensa-numeros/${slug}`}>
          <img src={tapaSuplePolo} />
        </a>
      </picture>
    </section>
  );
};
