import React from "react";
import styles from "./bannerLibroMobile.module.scss";

export const BannerLibroMobile = () => {
  return (
    <section className={styles.bannerLibro}>
      <picture className={styles.imagenContainer}>
        <a href="/contacto">
          <img src="../../../imgs/BANNER-HDMP-MOBILE.png" />
        </a>
      </picture>
    </section>
  );
};
