import React from 'react'
import styles from "./BotonMasComunicados.module.scss";

export const BotonMasComunicados = () => {
  return (
    <div className={styles.btn}>
      <a classname= {styles.linkboton} href="/comunicados">Ver más comunicados</a>
    </div>
  )
}