import React from "react";
import styles from "../BannerAuditoriasMobile/auditoriasMobile.module.scss";

export const BannerAuditoriasMobile = () => {
  return (
    <section className={styles.bannerAuditoriasMobile}>
      <picture className={styles.imagenContainer}>
        <a href="">
          <img src="https://po-proyecto.tk/wp-content/uploads/2022/11/800-x-800.jpg" />
        </a>
      </picture>
    </section>
  );
};
