import React from "react";
import styles from "./formulario.module.scss";

export const Formulario = () => {
  return (
    <>
      <h1 className={styles.h1}>Contacto</h1>
      <form className={styles.formContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd-JtQSp-ksvGnF8e7wTesL0iovfK9JPxWAPLgwQuJFjyrMbQ/viewform?embedded=true"
          width="1200"
          height="960"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Cargando…
        </iframe>
      </form>
    </>
  );
};
