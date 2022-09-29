import Link from "next/link";
import React from "react";
import styles from "./TarjetaChicaConFoto.module.scss";

export const TarjetaChicaConFoto = ({
  titulo,
  imagen,
  volanta,
  descripcionDestacado,
  slug,
}) => {
  // const seccion = seccion?.length > 0 && seccion.map((item) => item.name);
  return (
    <>
      <article className={styles.tarjetaChicaConFoto}>
        <div>
          <span>{volanta}</span>
        </div>
        <picture>
          <img src={imagen || "https://via.placeholder.com/400"} />
        </picture>
        <div>
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
