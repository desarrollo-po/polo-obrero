import React from "react";
import styles from "./TarjetaGrandeConFoto.module.scss";

export const TarjetaGrandeConFoto = ({ titulo, imagen }) => {
  // const seccion = seccion?.length > 0 && seccion.map((item) => item.name);
  return (
    <>
      <article>
        <div>
          <span>volanta</span>
        </div>
        <picture>
          <img src={imagen || "https://via.placeholder.com/400"} />
        </picture>
        <div>
          <a href="http://google.com">
            <h3>{titulo}</h3>
          </a>
          <p>descripcionDestacada</p>
        </div>
      </article>
    </>
  );
};
