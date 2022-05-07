import React, { useReducer } from "react";
import { initialState} from "../Components/Store";
import {Store} from "./Store"
import reducer from "./Reducer"

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
