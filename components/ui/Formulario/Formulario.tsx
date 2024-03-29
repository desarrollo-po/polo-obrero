import React from "react";
import styles from "./formulario.module.scss";

export const Formulario = () => {
  return (
    <>
      <form className={styles.formContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd-JtQSp-ksvGnF8e7wTesL0iovfK9JPxWAPLgwQuJFjyrMbQ/viewform?embedded=true"
          width="1200"
          height="960"
        >
          Cargando…
        </iframe>
      </form>
    </>
  );
};
