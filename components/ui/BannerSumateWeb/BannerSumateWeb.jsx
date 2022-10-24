import React from "react";
import styles from "./bannerSumateWeb.module.scss";

export const BannerSumateWeb = () => {
  return (
    <section className={styles.bannerSumate}>
      <picture className={styles.imagenContainer}>
        <a href="/contacto">
          <img src="../../../imgs/BANNER-WEB-POLO.png" />
        </a>
      </picture>
    </section>
  );
};
