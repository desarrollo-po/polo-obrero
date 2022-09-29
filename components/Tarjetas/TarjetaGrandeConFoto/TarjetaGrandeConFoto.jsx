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
        {volanta?.length > 0 ? (
          <div className={styles.volanta}>
            <span>{volanta}</span>
          </div>
        ) : (
          !volanta
        )}
        <picture>
          <img src={imagen || "https://via.placeholder.com/400"} />
        </picture>
        <div className={styles.data}>
          <Link href={`/notas/${slug}`}>
            <a>
              <h3>{titulo}</h3>
            </a>
          </Link>

          <p>{descripcionDestacado}</p>
        </div>
      </article>
    </>
  );
};
