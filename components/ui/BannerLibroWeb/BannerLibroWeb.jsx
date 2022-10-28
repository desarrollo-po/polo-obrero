import React from "react";
import styles from "./bannerLibroWeb.module.scss";

export const BannerLibroWeb = () => {
  return (
    <section className={styles.bannerLibro}>
      <picture className={styles.imagenContainer}>
        <a href="https://revistaedm.com/producto/preventa-una-historia-del-movimiento-piquetero/">
          <img src="../../../imgs/BANNER-HDMP-web.png" />
        </a>
      </picture>
    </section>
  );
};
