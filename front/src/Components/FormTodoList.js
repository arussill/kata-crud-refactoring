import React, { Fragment, useContext, useRef, useState } from "react";
import { HOST_API } from "../App";
import {Store} from './Store'

/**Formulario que genera el grupo de listas de todo */
export const FormTodoList = () => {
  const formRef = useRef(null);
  // Context
  const {
    dispatch,
    state: { todoList },
  } = useContext(Store);
  const item = todoList.item;

  const [state, setState] = useState(item); //state para un grupo de la lista
  const [habilitado, setHabilitado] = useState(true);//state para habilitar el botón nueva lista
  const [escribir, setEscribir] = useState(false);//state que permite escribir en el input

  const onAdd = (event) => {

    event.preventDefault();
    setHabilitado(true);
    setEscribir(false);

    // request que se enviara al back
    const request = {
      id: null,
      name: state.name,      
    };

    // ruta que conecta con el metodo POST del back
    fetch(HOST_API + "/todolist", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "add-grupo", item: list });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  return (
    <Fragment>
      <form ref={formRef}>
      <div className="input-group mb-3">
        <input
        required="required"
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre de la lista"
          defaultValue={item.name}
          onChange={(event) => {
            // Validación para que el input no acepte espacios vacíos
            setEscribir(true);
            setHabilitado(event.target.value.trim().length > 0? false: true); 
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        {!item.id && (
          <div>
          <button className="btn btn-primary"
            disabled={habilitado}
            onClick={onAdd}
          >
            Nueva Lista
          </button>
          <br/>  
          </div> 
        )}
        {/* Mensaje de validación */}
        {habilitado && escribir && (
          
             
          <p className="small">Campo requerido</p>       
          
        )}
      </div>
      </form>
      <hr/>
    </Fragment>
  );
};


