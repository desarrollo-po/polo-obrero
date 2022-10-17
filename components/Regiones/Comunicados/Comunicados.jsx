import React, { useState } from "react";
import { TarjetaComunicados } from "../../Tarjetas/TarjetaComunicados/TarjetaComunicados";
import styles from "./comunicados.module.scss";

export const Comunicados = ({ comunicadosPO }) => {
  const [showComunicados, setShowComunicados] = useState(true);
  // const onShowComunicados = () => {
  //   setShowComunicados(!showComunicados);
  // };
  return (
    <>
      <h2 className={styles.titulo}>Comunicados:</h2>
      <section
        className={`${styles.containerComunicados} ${
          showComunicados && styles.active
        }`}
      >
        {comunicadosPO.edges.map(
          ({
            node: {
              id,
              title,
              slug,
              featuredImage: {
                node: { sourceUrl },
              },
            },
          }) => (
            <TarjetaComunicados
              key={id}
              titulo={title}
              imagen={sourceUrl}
              slug={slug}
            />
          )
        )}
      </section>
      <div className={styles.btn}>
        Ver más comunicados
      </div>
    </>
  );
};
