import Link from "next/link";
import React from "react";
import { TarjetaChicaConFoto } from "../../Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto";

export const NotasSubDestacadas = ({ notasSubDestacadas }) => {
  console.log("notasSubDestacadas", notasSubDestacadas);
  return (
    <>
      {notasSubDestacadas.edges.map((item) => (
        <TarjetaChicaConFoto
          titulo={item.node.title}
          imagen={item.node.featuredImage.node.sourceUrl}
          slug={item.node.slug}
          volanta={item.node.campos.volanta}
          descripcionDestacado={item.node.campos.descripcionDestacado}
        />
      ))}
    </>
  );
};
