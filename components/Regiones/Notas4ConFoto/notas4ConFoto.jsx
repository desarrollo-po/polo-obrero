import React from "react";

export const Notas4ConFoto = ({ notas4ConFoto }) => {
  console.log(notas4ConFoto);
  return (
    <ul>
      {notas4ConFoto.edges.map((item) => (
        <li>{item.node.title}</li>
      ))}
    </ul>
  );
};
