import React from 'react'
import styles from "./BotonMasVideos.module.scss";

export const BotonMasVideos = () => {
  return (
    <div className={styles.btn}>
      <a className={styles.linkBoton} href="/videos">Ver más videos</a>
    </div>
  )
}