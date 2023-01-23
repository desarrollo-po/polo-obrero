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
      <div className={styles.containerTitulo}>
        <h2 className={styles.h2}>COMUNICADOS DE PRENSA</h2>
      </div>
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
