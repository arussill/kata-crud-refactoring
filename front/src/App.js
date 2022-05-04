import React, { useReducer, createContext } from 'react';
import { Form } from './Form';
import { List } from './List';
import { reducer } from './reducer';

export const HOST_API = "http://localhost:8080/api";
const initialState = {
  todo: { list: [], item: {} }
};
export const Store = createContext(initialState)

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>

}

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
