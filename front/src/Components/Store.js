import { createContext } from 'react';

export const initialState = {
  todo: { list: [], item: {} },
  todoList: { list: [], item: {} }
};
export const Store = createContext(initialState);
