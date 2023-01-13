import Link from "next/link";
import React from "react";
import styles from "../BannerAuditoriasWeb/auditoriasWeb.module.scss";

export const BannerAuditoriasWeb = () => {
  return (
    <section className={styles.bannerAuditoriasWeb}>
      <picture className={styles.imagenContainer}>
        <Link href="auditoria-potenciar-trabajo">
          <img
            src="https://po-proyecto.tk/wp-content/uploads/2022/12/banners-polo-auditorias_1200-x-480.jpg"
            alt="auditoría potenciar trabajo preguntas consultas dudas datos"
          />
        </Link>
      </picture>
      <Link href="/auditoria-potenciar-trabajo">
        <p className={styles.texto}>TENÉS TIEMPO HASTA EL 15/1</p>
      </Link>
    </section>
  );
};
