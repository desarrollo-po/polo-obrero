import React from "react";
import styles from "./formulario.module.scss";

export const Formulario = () => {
  return (
    <>
      <form>
        <div className="mt-10">
          <div className="flex justify-center  mb-5">
            <h1 className="font-mont text-center text-4xl text-rojoprensa font-black items-center flex">
              Contacto
            </h1>
          </div>
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
        </div>
      </form>
    </>
  );
};
