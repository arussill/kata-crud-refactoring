import  React ,{ useContext, useRef, useState } from "react";
import {Store} from './Store'
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

  const [state, setState] = useState(item);//state para un grupo de la lista
  const [habilitado, setHabilitado] = useState(true);//state para habilitar el botón crear
  const [escribir, setEscribir] = useState(false);//state que permite escribir en el input

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
        <input
          type="text"
          name="name"
          placeholder="¿Qué deseas hacer?"
          defaultValue={item.id_group === groupId ? item.name : ""}
          onChange={(event) => {
              // Validación para que el input no acepte espacios vacíos
            setEscribir(true);
            setHabilitado(event.target.value.trim().length > 0? false: true); 
            setState({ ...state, name: event.target.value });
          }}
        />
        {item.id && item.id_group === groupId && (
          <button onClick={onEdit}>
            Actualizar 
          </button>
        )}
        {!item.id && (
          <button
            disabled={habilitado}
            onClick={onAdd}
          >
            Crear
          </button>
        )}
      </form>
           {/* Mensaje de validación */}
      {habilitado && escribir && (
        <span>Campo requerido</span>
      )}
    </div>
  );
};

