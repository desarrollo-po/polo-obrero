import Link from "next/link";
import React from "react";
import { TarjetaChicaConFoto } from "../../Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto";
import styles from "./notasSubDestacadas.module.scss";

export const NotasSubDestacadas = ({ notasSubDestacadas }) => {
  console.log("notasSubDestacadas", notasSubDestacadas);
  return (
    <section className={styles.notasSubDestacadas}>
      {notasSubDestacadas.edges.map((item) => (
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
  );
};
