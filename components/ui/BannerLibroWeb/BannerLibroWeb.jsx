import React from "react";
import styles from "./bannerLibroWeb.module.scss";

export const BannerLibroWeb = () => {
  return (
    <section className={styles.bannerLibro}>
      <picture className={styles.imagenContainer}>
        <a href="/contacto">
          <img src="../../../imgs/BANNER-HDMP-WEB.png" />
        </a>
      </picture>
    </section>
  );
};
