import  {createContext} from 'react'


export const initialState = {
    todo: { list: [], item: {} },
    /**
     * nuevo lists
     */
    todoList: { list: [], item: {}}
    
  };
export const Store = createContext(initialState);