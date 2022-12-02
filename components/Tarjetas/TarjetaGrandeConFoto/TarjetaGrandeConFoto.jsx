import Link from "next/link";
import React from "react";
import styles from "./TarjetaGrandeConFoto.module.scss";

export const TarjetaGrandeConFoto = ({
  titulo,
  imagen,
  slug,
  volanta,
  descripcionDestacado,
}) => {
  // const seccion = seccion?.length > 0 && seccion.map((item) => item.name);
  return (
    <>
      <article className={styles.tarjetaGrandeConFoto}>
      <Link href={`/notas/${slug}`}>
            <a target="_blank">
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
          
              <h3>{titulo}</h3>
            
          <p>{descripcionDestacado}</p>
        </div>
        </a>
          </Link>
      </article>
    </>
  );
};
