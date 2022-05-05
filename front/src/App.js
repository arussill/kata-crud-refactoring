import React from 'react';
import { FormTodoList } from './Components/FormTodoList';
import { List } from './Components/List';
import { StoreProvider } from './Components/StoreProvider';

export const HOST_API = "http://localhost:8080/api";


function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <FormTodoList/>
    <List />
  </StoreProvider>
}

export default App;
