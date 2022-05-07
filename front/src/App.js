import React from "react";
import {List} from "./Components/List.js";
import { StoreProvider } from "./Components/StoreProvider";
import {FormTodoList} from "./Components/FormTodoList";

export const HOST_API = "http://localhost:8080/api";
function App() {
  return (
    <StoreProvider>
      <h1>To-Do List</h1>
      <br/>
      <div >
        <FormTodoList />
      </div>
      <div>
        <List />
      </div>
    </StoreProvider>
  );
}

export default App;
