import Link from "next/link";
import React from "react";
import styles from "./TarjetaGrandeConFoto.module.scss";

export const TarjetaGrandeConFoto = ({
  titulo,
  imagen,
  slug,
  volanta,
  bajada,
}) => {
  // const seccion = seccion?.length > 0 && seccion.map((item) => item.name);
  return (
    <>
      <article>
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

          <p>{bajada}</p>
        </div>
      </article>
    </>
  );
};
