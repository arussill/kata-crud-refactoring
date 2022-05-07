import  React ,{ useContext, useRef, useState } from "react";
import {Store} from './Store'
import { HOST_API } from "../App";

export const Form = ({ groupId }) => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasWritten, setHasWritten] = useState(false);

  const onAdd = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setHasWritten(false);

    const request = {
      name: state.name,
      id: null,
      completed: false,
      id_group: groupId,
    };

    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      completed: item.completed,
      id_group: groupId,
    };

    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  return (
    <div>
      <form ref={formRef}>
        <input
          type="text"
          name="name"
          placeholder="¿Qué deseas hacer?"
          defaultValue={item.id_group === groupId ? item.name : ""}
          onChange={(event) => {
            setHasWritten(true);
            setIsDisabled(event.target.value.length > null ? false : true);
            setState({ ...state, name: event.target.value });
          }}
        />
        {item.id && item.id_group === groupId && (
          <button className="editar" onClick={onEdit}>
            Actualizar
          </button>
        )}
        {!item.id && (
          <button
            dissbled={isDisabled}
            className="crear"
            onClick={onAdd}
          >
            Crear
          </button>
        )}
      </form>
      {isDisabled && hasWritten && (
        <span className="campo-obligatorio">Campo requerido</span>
      )}
    </div>
  );
};

