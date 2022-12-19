import React from "react";
import styles from "./TapaSuplePoloMobile.module.scss";
import { IconPDF } from "../../Iconos/IconPDF";

export const TapaSuplePolo = ({ tapaSuplePolo, slug }) => {
  return (
    <section className={styles.tapaSuplePolo}>
      <picture className={styles.imagenContainer}>
        <a href={`https://prensaobrera.com/prensa-numeros/${slug}`}>
          <img src={tapaSuplePolo} />
        </a>
      </picture>
      <a
        className={styles.btnPDF}
        target="_blank"
        href={`https://archivo.prensaobrera.com/wp-content/uploads/${slug}.pdf`}
      >
        <IconPDF />
        <span>Descargá la versión PDF</span>
      </a>
    </section>
  );
};
