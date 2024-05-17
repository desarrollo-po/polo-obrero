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
            <a target="_blank" href={link}>
              <span>{volanta.toUpperCase()}</span>
            </a>
          </div>
        ) : (
          !volanta
        )}
        <picture>
          <a target="_blank" href={link}>
            <img src={imagen || "https://via.placeholder.com/400"} />
          </a>
        </picture>
        <div className={styles.data}>
          <a target="_blank" href={link}>
            <h3>{titulo}</h3>
            <p>{descripcionDestacado}</p>
          </a>
        </div>
      </article>
    </>
  );
};
