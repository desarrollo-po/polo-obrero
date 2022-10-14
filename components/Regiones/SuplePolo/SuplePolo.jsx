import Link from "next/link";
import React from "react";
import { TarjetaGrandeConFoto } from "../../Tarjetas/TarjetaGrandeConFoto/TarjetaGrandeConFoto";
import styles from "./SuplePolo.module.scss";

export const SuplePolo = ({ notasSuplePolo }) => {
  return (
    <section className={styles.notas3Principales}>
      {notasSuplePolo.edges
        // .filter((nota) => nota.node.title !== "NOTIPOLO")
        .map(
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
