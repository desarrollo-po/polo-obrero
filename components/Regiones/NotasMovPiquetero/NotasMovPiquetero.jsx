import Link from "next/link";
import React from "react";
import { TarjetaChicaConFoto } from "../../Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto";
import styles from "./NotasMovPiquetero.module.scss";

export const NotasMovPiquetero = ({ notasMovPiquetero }) => {
  return (
    <>
      <section className={styles.notasMovPiquetero}>
        {notasMovPiquetero.edges.map((item) => (
          <TarjetaChicaConFoto
            key={item.node.id}
            titulo={item.node.title}
            imagen={item.node.featuredImage.node.sourceUrl}
            slug={item.node.slug}
            volanta={item.node.campos.volanta}
            descripcionDestacado={item.node.campos.descripcionDestacado}
          />
        ))}
      </section>
    </>
  );
};
