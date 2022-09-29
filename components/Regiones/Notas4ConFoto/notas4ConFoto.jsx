import React from "react";
import { TarjetaChicaConFoto } from "../../Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto";

export const Notas4ConFoto = ({ notas4ConFoto }) => {
  console.log(notas4ConFoto);
  return (
    <>
      <TarjetaChicaConFoto titulo={notas4ConFoto.edges[0].node.title} />
    </>
  );
};
