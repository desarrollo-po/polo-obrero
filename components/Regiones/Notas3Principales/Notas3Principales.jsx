import Link from "next/link";
import React from "react";
import { TarjetaGrandeConFoto } from "../../Tarjetas/TarjetaGrandeConFoto/TarjetaGrandeConFoto";

export const Notas3Principales = ({ notas3Principales }) => {
  return (
    <>
      {notas3Principales.edges.map((item) => (
        <TarjetaGrandeConFoto
          titulo={item.node.title}
          imagen={item.node.featuredImage.node.sourceUrl}
        />
      ))}
    </>
  );
};
