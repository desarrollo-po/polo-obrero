import Link from "next/link";
import React from "react";
import styles from "../BannerAuditoriasMobile/auditoriasMobile.module.scss";

export const BannerAuditoriasMobile = () => {
  return (
    <section className={styles.bannerAuditoriasMobile}>
      <picture className={styles.imagenContainer}>
        <Link href="auditoria-potenciar-trabajo">
          <img
            src="https://po-proyecto.tk/wp-content/uploads/2022/12/banners-polo-auditorias_800-x-800.jpg"
            alt="auditoría potenciar trabajo preguntas consultas dudas datos"
          />
        </Link>
      </picture>
      <Link href="/auditoria-potenciar-trabajo">
        <p className={styles.texto}>TENÉS TIEMPO HASTA EL 15/2</p>
      </Link>
    </section>
  );
};
