import { createContext } from "react";

export const initialState = {
  notasGuardadas: [
    {
      id: "1",
      title: "La Unidad Piquetera resolvió un plan de lucha contra el ajuste",
      slug: "la-unidad-piquetera-discute-un-plan-de-lucha-contra-el-ajuste",
      imagen: "https://picsum.photos/200/300",
    },
    {
      id: "2",
      title:
        "El Polo Obrero de José C. Paz se volvió a movilizar por tierra y vivienda",
      slug:
        "el-polo-obrero-de-jose-c-paz-se-volvio-a-movilizar-por-tierra-y-vivienda",
      imagen: "https://picsum.photos/200/300",
    },
  ],
};

export const NotasGuardadasContext = createContext(initialState);
