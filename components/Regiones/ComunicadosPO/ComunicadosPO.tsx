import React, { useState } from "react";
import { TarjetaComunicados } from "../../Tarjetas/TarjetaComunicados/TarjetaComunicados";
import styles from "./comunicadosPO.module.scss";

export const ComunicadosPO = ({ comunicadosPO }) => {
  return (
    <>
      <div className={styles.containerTitulo}>
        <h2 className={styles.h2}>Comunicados</h2>
      </div>
      <section className={styles.containerComunicados}>
        {comunicadosPO.edges.map(
          ({
            node: {
              id,
              title,
              slug,
              date,
              featuredImage: {
                node: { sourceUrl },
              },
              campos: { volanta },
            },
          }) => (
            <TarjetaComunicados
              key={id}
              titulo={title}
              imagen={sourceUrl}
              slug={slug}
              date={date}
              volanta={volanta}
            />
          )
        )}
      </section>
    </>
  );
};
