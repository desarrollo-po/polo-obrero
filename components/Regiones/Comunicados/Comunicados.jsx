import React, { useState } from "react";
import { TarjetaComunicados } from "../../Tarjetas/TarjetaComunicados/TarjetaComunicados";
import styles from "./comunicados.module.scss";

export const Comunicados = ({ comunicadosPO }) => {
  // const [showComunicados, setShowComunicados] = useState(true);
  // const onShowComunicados = () => {
  //   setShowComunicados(!showComunicados);
  // };
  return (
    <>
      <section className={styles.containerComunicados}>
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
        <a href="/comunicados">Ver más comunicados</a>
      </div>
    </>
  );
};
