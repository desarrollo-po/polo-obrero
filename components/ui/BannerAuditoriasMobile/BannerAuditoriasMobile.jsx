import React from "react";
import styles from "../BannerAuditoriasMobile/auditoriasMobile.module.scss";

export const BannerAuditoriasMobile = () => {
  return (
    <section className={styles.bannerAuditoriasMobile}>
      <picture className={styles.imagenContainer}>
      <a href="auditoria-potenciar-trabajo">
          <img src="https://po-proyecto.tk/wp-content/uploads/2022/12/banners-polo-auditorias_800-x-800.jpg" alt="auditoría potenciar trabajo preguntas consultas dudas datos" />
        </a>
      </picture>
    </section>
  );
};
