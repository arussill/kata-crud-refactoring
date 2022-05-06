import React from "react";
import { Fragment } from "react/cjs/react.development";
import { FormTodoList } from "./Components/FormTodoList";
import { List } from "./Components/List";
import { StoreProvider } from "./Components/StoreProvider";

export const HOST_API = "http://localhost:8080/api";

function App() {
  return (
    <Fragment>
      <h1>To-Do List</h1>
      <StoreProvider>
        <h2>Grupo de Listas</h2>
        <FormTodoList />
        <List />
      </StoreProvider>
    </Fragment>
  );
}

export default App;
