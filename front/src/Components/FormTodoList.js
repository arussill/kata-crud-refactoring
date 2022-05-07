import React, { Fragment, useContext, useRef, useState } from "react";
import { HOST_API } from "../App";
import {Store} from './Store'

export const FormTodoList = () => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todoList },
  } = useContext(Store);
  
  const item = todoList.item;
  const [state, setState] = useState(item);
  const [habilitado, setHabilitado] = useState(true);
  const [escribir, setEscribir] = useState(false);

  const onAdd = (event) => {
    event.preventDefault();
    setHabilitado(true);
    setEscribir(false);

    const request = {
      id: null,
      name: state.name,      
    };

    fetch(HOST_API + "/todolist", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "add-list", item: list });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  return (
    <Fragment>
      <form ref={formRef}>
        <h3>Grupo de Listas</h3>
        <input
          type="text"
          name="name"
          placeholder="Nombre de la lista"
          defaultValue={item.name}
          onChange={(event) => {
            setEscribir(true);
            setHabilitado(event.target.value.trim().length > 0? false: true);
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        {!item.id && (
          <button
            disabled={habilitado}
            onClick={onAdd}
          >
            Nueva Lista
          </button>
        )}
        {habilitado && escribir && (
          <p>Campo requerido</p>          
        )}
      </form>
    </Fragment>
  );
};


