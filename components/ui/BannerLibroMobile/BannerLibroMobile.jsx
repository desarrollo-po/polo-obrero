import React from "react";
import styles from "./bannerLibroMobile.module.scss";

export const BannerLibroMobile = () => {
  return (
    <section className={styles.bannerLibro}>
      <picture className={styles.imagenContainer}>
        <a href="https://revistaedm.com/producto/preventa-una-historia-del-movimiento-piquetero/">
          <img src="../../../imgs/BANNER-HDMP-MOBILE.png" />
        </a>
      </picture>
    </section>
  );
};
