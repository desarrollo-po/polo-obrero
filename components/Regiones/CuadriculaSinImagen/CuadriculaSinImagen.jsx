import React from "react";

export const CuadriculaSinImagen = ({ cuadriculaSinImagen }) => {
  console.log(cuadriculaSinImagen);
  return (
    <ul>
      {cuadriculaSinImagen.edges.map((item) => (
        <li>{item.node.title}</li>
      ))}
    </ul>
  );
};
