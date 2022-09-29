import Link from "next/link";
import React from "react";
import styles from "./subDestacadas2.module.scss";
import { TarjetaChicaConFoto } from "../../Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto";

export const SubDestacadas2 = ({ subDestacadas2 }) => {
  console.log("subdestacadas2", subDestacadas2);
  return (
    <>
      {subDestacadas2.edges.map((item) => (
        <TarjetaChicaConFoto titulo={item.node.title} />
      ))}
    </>
  );
};
