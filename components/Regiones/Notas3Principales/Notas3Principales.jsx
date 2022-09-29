import Link from "next/link";
import React from "react";
import { TarjetaGrandeConFoto } from "../../Tarjetas/TarjetaGrandeConFoto/TarjetaGrandeConFoto";
import styles from "./notas3Principales.module.scss";

export const Notas3Principales = ({ notas3Principales }) => {
  console.log("notas3Principales", notas3Principales);

  return (
    <section className={styles.notas3Principales}>
      {notas3Principales.edges.map(
        ({
          node: {
            id,
            title,
            slug,
            featuredImage: {
              node: { sourceUrl },
            },
            campos: { volanta, descripcionDestacado },
          },
        }) => (
          <TarjetaGrandeConFoto
            key={id}
            titulo={title}
            imagen={sourceUrl}
            slug={slug}
            volanta={volanta}
            descripcionDestacado={descripcionDestacado}
          />
        )
      )}
    </section>
  );
};
