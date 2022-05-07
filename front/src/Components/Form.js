import React, { useContext, useRef, useState } from "react";
import { Store } from "./Store";
import { HOST_API } from "../App";

/**Formulario que genera las tareitas */
export const Form = ({ groupId }) => {
  const formRef = useRef(null);
  // Context
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;

  const [state, setState] = useState(item); //state para un grupo de la lista
  const [habilitado, setHabilitado] = useState(true); //state para habilitar el botón crear
  const [escribir, setEscribir] = useState(false); //state que permite escribir en el input

  const onAdd = (event) => {
    event.preventDefault();
    setHabilitado(true);
    setEscribir(false);

    // request de tareitas que se enviara al back
    const request = {
      name: state.name,
      id: null,
      completed: false,
      id_group: groupId,
    };

    // ruta que conecta con el método POST del back para agregar las tareitas
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
    setHabilitado(true);
    // request de tareitas editado que se enviara al back
    const request = {
      name: state.name,
      id: item.id,
      completed: item.completed,
      id_group: groupId,
    };

    // ruta que conecta con el método PUT del back para actualizar las tareitas
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
        <div className="input-group mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="¿Qué deseas hacer?"
            defaultValue={item.id_group === groupId ? item.name : ""}
            onChange={(event) => {
              // Validación para que el input no acepte espacios vacíos
              setEscribir(true);
              setHabilitado(
                event.target.value.trim().length > 0 ? false : true
              );
              setState({ ...state, name: event.target.value });
            }}
          />
          <div className="input-group-append"></div>
          {item.id && item.id_group === groupId && (
            <button className="btn btn-success" onClick={onEdit}>Actualizar</button>
          )}
          <div />
          <div className="input-group-append">
            {!item.id && (
              <button className="btn btn-primary" disabled={habilitado} onClick={onAdd}>
                Crear
              </button>
            )}
          </div>
        </div>
      </form>
      {/* Mensaje de validación */}
      {habilitado && escribir && <span>Campo requerido</span>}
    </div>
  );
};
