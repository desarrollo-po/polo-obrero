import Link from "next/link";
import React from "react";
import styles from "./notas4SinFoto.module.scss";

export const Notas4SinFoto = ({ notas4SinFoto }) => {
  return (
    <ul className={styles.notas4sinfoto}>
      {notas4SinFoto.edges.map((item) => (
        <li>{item.node.title}</li>
      ))}
    </ul>
  );
};
