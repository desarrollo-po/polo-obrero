import Link from "next/link";
import React from "react";
import { TarjetaChicaConFoto } from "../../Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto";

export const NotasSubDestacadas = ({ notasSubDestacadas }) => {
  console.log("notasSubDestacadas", notasSubDestacadas);
  return (
    <>
      {notasSubDestacadas.edges.map((item) => (
        <TarjetaChicaConFoto titulo={item.node.title} />
      ))}
    </>
  );
};
