import Link from "next/link";
import React from "react";
import styles from "./TarjetaSuplePolo.module.scss";

export const TarjetaSuplePolo = ({
  titulo,
  imagen,
  volanta,
  descripcionDestacado,
  link,
}) => {
  // const seccion = seccion?.length > 0 && seccion.map((item) => item.name);
  return (
    <>
      <article className={styles.tarjetaSuplePolo}>
        {volanta?.length > 0 ? (
          <div className={styles.volanta}>
            <span>{volanta.toUpperCase()}</span>
          </div>
        ) : (
          !volanta
        )}
        <picture>
          <img src={imagen || "https://via.placeholder.com/400"} />
        </picture>
        <div className={styles.data}>
          <a target="_blank" href={link}>
            <h3>{titulo}</h3>
          </a>

          <p>{descripcionDestacado}</p>
        </div>
      </article>
    </>
  );
};
