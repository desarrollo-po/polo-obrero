import React, { useContext, useEffect } from "react";
import { NotasGuardadasContext } from "../../context/NotasGuardadasContext";

export const ListaNotasGuardadas = () => {
  const { notasGuardadas } = useContext(NotasGuardadasContext);
  useEffect(() => {
    localStorage.setItem(
      "notasGuardadas",
      JSON.stringify(notasGuardadas || [])
    );
  }, [notasGuardadas]);
  return (
    <>
      {notasGuardadas.map(({ nota }) => (
        <div key={nota.id}>
          <span>{nota.title}</span>
        </div>
      ))}
    </>
  );
};
