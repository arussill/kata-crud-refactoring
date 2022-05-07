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
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasWritten, sethasWritten] = useState(false);

  const onAdd = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    sethasWritten(false);
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
        <h3 id="Listas">Grupo de Listas</h3>
        <input
          className="form-control me-2"
          type="text"
          name="name"
          placeholder="Nombre de la lista"
          defaultValue={item.name}
          id="listForms"
          onChange={(event) => {
            sethasWritten(true);
            setIsDisabled(event.target.value.length > null ? false : true);
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        {!item.id && (
          <button
            disabled={isDisabled}
            onClick={onAdd}
          >
            Crear
          </button>
        )}

        {isDisabled && hasWritten && (
          <p >Campo requerido</p>          
        )}
      </form>
    </Fragment>
  );
};


