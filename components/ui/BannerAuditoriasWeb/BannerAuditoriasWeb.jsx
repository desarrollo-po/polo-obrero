import React from "react";
import styles from "../BannerAuditoriasWeb/auditoriasWeb.module.scss";

export const BannerAuditoriasWeb = () => {
  return (
    <section className={styles.bannerAuditoriasWeb}>
      <picture className={styles.imagenContainer}>
        <a href="auditoria-potenciar-trabajo">
          <img src="https://po-proyecto.tk/wp-content/uploads/2022/11/1200-x-480.jpg" />
        </a>
      </picture>
    </section>
  );
};

