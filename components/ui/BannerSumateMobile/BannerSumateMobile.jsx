import React from "react";
import styles from "./bannerSumateMobile.module.scss";

export const BannerSumateMobile = () => {
  return (
    <section className={styles.bannerSumate}>
      <picture className={styles.imagenContainer}>
        <a href="/contacto">
          <img src="../../../imgs/banner-sumate.png" />
        </a>
      </picture>
    </section>
  );
};
