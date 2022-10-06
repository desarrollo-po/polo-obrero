import { useReducer } from "react";
import notasGuardadasReducer from "./NotasGuardadasReducer";
import { initialState, NotasGuardadasContext } from "./NotasGuardadasContext";

export const NotasGuardadasContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    notasGuardadasReducer,
    initialState,
    () => {
      const localData =
        typeof window !== "undefined" && localStorage.getItem("notasGuardadas")
          ? JSON.parse(localStorage.getItem("notasGuardadas"))
          : [];
      return { notasGuardadas: localData };
    }
  );

  const addNota = (nota) => {
    // console.log(task);
    dispatch({
      type: "ADD_NOTA",
      payload: { nota },
    });
  };

  const deleteNota = (id) => {
    dispatch({
      type: "DELETE_NOTA",
      payload: id,
    });
  };
  return (
    <NotasGuardadasContext.Provider value={{ ...state, addNota, deleteNota }}>
      {children}
    </NotasGuardadasContext.Provider>
  );
};
