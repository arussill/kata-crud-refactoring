import { createContext } from "react";

export const initialState = {
  // Estado inicial para las tareitas
  todo: { list: [], item: {} },
  // Estado inicial para el grupo de listas de tareas
  todoList: { list: [], item: {} },
};
export const Store = createContext(initialState);
