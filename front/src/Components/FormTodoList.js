import React, { useContext, useRef, useState } from 'react';
import { HOST_API } from '../App';
import { Store } from "./Store";

export const FormTodoList = () => {
  const formRef = useRef(null);
  const { dispatch, state: { todoList } } = useContext(Store);
  const item = todoList.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();
    
    const request = {
      nameTodoList: state.name,
      idTodoList: null,
    };


    fetch(HOST_API + "/todolist", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todolist) => {
        dispatch({ type: "add-todolist", item: todolist });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  return <form ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="Nombre de la lista"
      defaultValue={item.name}
      onChange={(event) => {
        setState({ ...state, name: event.target.value });
      }}></input>
    {!item.id && <button onClick={onAdd}>Nueva Lista</button>}
  </form>;
};
