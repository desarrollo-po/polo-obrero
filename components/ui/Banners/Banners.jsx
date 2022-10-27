import React, { useState } from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";

import styles from "./banners.module.scss";

export const Banners = () => {
  const [showText, setShowText] = useState(true);
  const onShowText = () => {
    setShowText(!showText);
  };

  return (
    <>
      <MainContainer className={styles.banner}>
        <div className={styles.texto}>
          <p className={`${styles.data} ${showText && styles.active}`}>
          </p>
          <button onClick={onShowText} className={styles.btn}>
            {`${showText ? "Ver Más" : "Ver Menos"}`}
          </button>
        </div>
        <a href="https://revistaedm.com/producto/preventa-una-historia-del-movimiento-piquetero/">
        <picture className={styles.imagen}>
          <img src="../../../imgs/BANNER-HDMP-HORIZONTAL.png" />
        </picture>
        </a>
      </MainContainer>
      <a
        className={styles.comprar}
        href="https://revistaedm.com/producto/preventa-una-historia-del-movimiento-piquetero/"
      >
        Comprar
      </a>
    </>
  );
};
