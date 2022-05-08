import React, { useContext, useEffect, useState, Fragment } from "react";
import { HOST_API } from "../App";
import { Form } from "./Form";
import { Store } from "./Store";

/**Componente que muestra la tabla con todas las tareitas de cada grupo respectivo */
export const List = () => {
  // Context
  const {
    dispatch,
    state: { todo, todoList },
  } = useContext(Store);
  const currentTodos = todo.list;
  const currentList = todoList.list;

  // const [habilitado, setHabilitado] = useState(true);//state para habilitar el botón nueva lista

  /**Metodo GET trae todas las tareitas de base de datos */
  useEffect(() => {
    fetch(HOST_API + "/todo")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [dispatch]);

  /**Método DELETE borra la tareitas */
  const onDelete = (id) => {
    fetch(HOST_API + "/todo/" + id, {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", id });
    });
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo });
  };

  /**Método PUT actualiza las tareitas */
  const onChange = (event, todo, groupId) => {
    // console.log(todo)
    // setHabilitado(todo.completed ? false : true);
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
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
      });
  };

  /**Método GET trae el grupo de listas */
  useEffect(() => {
    fetch(HOST_API + "/todolist")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-grupo", list });
      });
  }, [dispatch]);

  /**Método DELETE borra un grupo de lista */
  const onDeleteList = (id) => {
    fetch(HOST_API + "/todolist/" + id, {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-grupo", id });
    });
  };

  /**Estilo que permite tachar la tarea cuando se marca completada */
  const decorationDone = {
    textDecoration: "line-through",
  };

  return (
    <Fragment>
      <table className="table table-striped">
        {currentList.map((list) => {
          return (
            <Fragment key={list.id}>
              <thead >
                <tr>
                  <th id="tituloTabla" scope="col">
                   <td > {list.name}</td>
                    <td id="eliminarX">
                    <button
                      id="eliminarLista"
                      className="btn btn-danger btn-sm ms-5"
                      onClick={() => onDeleteList(list.id)}
                    >
                      x
                    </button>
                  </td>
                  </th>
                </tr>
                <tr>
                  <td>
                    <Form groupId={list.id} />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">Tarea</th>
                  <th scope="col">¿Completa?</th>
                  <th scope="col">Eliminar</th>
                  <th scope="col">Editar</th>
                </tr>
                {currentTodos.map((todo) => {
                  if (todo.id_group === list.id) {
                    return (
                      <tr
                        key={todo.id}
                        style={todo.completed ? decorationDone : {}}
                      >
                        <td >{todo.name}</td>
                        <td>
                          <input
                            type="checkbox"
                            defaultChecked={todo.completed}
                            onChange={(event) => {
                              onChange(event, todo, list.id);
                            }}
                          ></input>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDelete(todo.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-warning"
                            // disabled={habilitado}
                            onClick={() => onEdit(todo)}
                          >
                            Editar
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <br/>
            </Fragment>
          );
        })}
      </table>
    </Fragment>
  );
};
