import React, { useState } from "react";
import { TarjetaComunicados } from "../../Tarjetas/TarjetaComunicados/TarjetaComunicados";
import styles from "./comunicados.module.scss";

export const Comunicados = ({ comunicadosPolo }) => {
  // const [showComunicados, setShowComunicados] = useState(true);
  // const onShowComunicados = () => {
  //   setShowComunicados(!showComunicados);
  // };
  console.log(comunicadosPolo);
  return (
    <>
      <h2 className={styles.h2}>Comunicados de prensa</h2>
      <section className={styles.containerComunicados}>
        {comunicadosPolo.nodes.map(
          ({
            id,
            title,
            slug,
            date,
            camposComunicados: { volanta },
            featuredImage: {
              node: { sourceUrl },
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
