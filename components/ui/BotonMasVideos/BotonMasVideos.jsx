import React from 'react'
import styles from "./BotonMasVideos.module.scss";

export const BotonMasVideos = () => {
  return (
    <div className={styles.btn}>
      <a classname={styles.linkBoton} href="/videos">Ver más videos</a>
    </div>
  )
}