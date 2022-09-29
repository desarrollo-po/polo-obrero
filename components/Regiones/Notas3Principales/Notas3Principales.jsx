import Link from "next/link";
import React from "react";
import { TarjetaGrandeConFoto } from "../../Tarjetas/TarjetaGrandeConFoto/TarjetaGrandeConFoto";

export const Notas3Principales = ({ notas3Principales }) => {
  console.log("notas3Principales", notas3Principales);
  return (
    <>
      {notas3Principales.edges.map((item) => (
        <TarjetaGrandeConFoto
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
