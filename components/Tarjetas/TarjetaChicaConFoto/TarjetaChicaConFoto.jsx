import React from "react";
import styles from "./TarjetaChicaConFoto.module.scss";

export const TarjetaChicaConFoto = ({ titulo }) => {
  // const seccion = seccion?.length > 0 && seccion.map((item) => item.name);
  return (
    <>
      <article className={styles.tarjetaChicaConFoto}>
        <div>
          <span>volanta</span>
        </div>
        <picture>
          <img src="https://via.placeholder.com/400" />
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
