export default function notasGuardadasReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTA":
      return {
        notasGuardadas: [...state.notasGuardadas, action.payload],
      };
    case "DELETE_NOTA":
      return {
        notasGuardadas: state.notasGuardadas.filter(
          (nota) => nota.id !== action.payload
        ),
      };
    default:
      break;
  }
  return {
    notasGuardadas: [...state.notasGuardadas, action.payload],
  };
}
