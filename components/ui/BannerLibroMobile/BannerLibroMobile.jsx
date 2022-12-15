import React from "react";
import styles from "./bannerLibroMobile.module.scss";

export const BannerLibroMobile = () => {
  return (
    <section className={styles.bannerLibro}>
      <picture className={styles.imagenContainer}>
        <a href="https://revistaedm.com/producto/preventa-una-historia-del-movimiento-piquetero/">
          <img src="https://po-proyecto.tk/wp-content/uploads/2022/12/BANNER-HDMP-800-x-1080.jpg" />
        </a>
      </picture>
    </section>
  );
};
