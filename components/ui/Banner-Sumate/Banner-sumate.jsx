import React from "react";
import styles from "./banner-sumate.module.scss";

export const BannerSumate = () => {
  return (
    <section className={styles.bannerSumate}>
      <picture className={styles.imagenContainer}>
        <img src="../../../imgs/banner-sumate.png" />
      </picture>
    </section>
  );
};
