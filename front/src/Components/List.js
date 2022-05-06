import React, { useContext, useEffect } from "react";
import { Fragment } from "react/cjs/react.development";
import { HOST_API } from "../App";
import { Form } from "./Form";
import { Store } from "./Store";

export const List = () => {
  const {
    dispatch,
    state: { todo, todoList },
  } = useContext(Store);
  const currentList = todo.list;
  const currentTodoList = todoList.list;

  /**
   * Este useEffect permite obtener la lista de tareas o todos
   */
  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [dispatch]);

  /**
   * Este useEffect permite obtener el grupo de listas (las grandes)
   */
  useEffect(() => {
    fetch(HOST_API + "/todoslist")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-todolist", list });
      });
  }, [dispatch]);

  /**
   * Este onDelete permite la eliminación de un item de las tareas o todos
   */
  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", id });
    });
  };

  /**
   * Este onDelete permite la eliminación de un grupo o lista grande
   */
  const onDeleteTodoList = (id) => {
    fetch(HOST_API + "/" + id + "/todolist", {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-todolist", id });
    });
  };

  /*edita items de la lista*/
  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo });
  };

  /**
   * actualiza los item de la lista después de editados
   */
  const onChange = (event, todo, groupid) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
      grupListId: groupid,
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

  const decorationDone = {
    textDecoration: "line-through",
  };


  return (
    <div>
      {currentTodoList.map((group) => (
        <div key={group.idTodoList}>
          <h3>{group.nameTodoList}</h3>
          <button onClick={() => onDeleteTodoList(group.idTodoList)}>x</button>
          <Form groupListId={group.idTodoList} />
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Tarea</td>
                <td>¿Completado?</td>
              </tr>
            </thead>
            <tbody>
              {currentList.map((todo) => {
               
                  return (
                    <tr
                      key={todo.id}
                      style={todo.completed ? decorationDone : {}}
                    >
                      <td>{todo.id}</td>
                      <td>{todo.name}</td>
                      <td>
                        <input
                          type="checkbox"
                          defaultChecked={todo.completed}
                          onChange={(event) => onChange(event, todo, group.idTodoList)}
                        ></input>
                      </td>
                      <td>
                        <button onClick={() => onDelete(todo.id)}>
                          Eliminar
                        </button>
                      </td>
                      <td>
                        <button onClick={() => onEdit(todo)}>Editar</button>
                      </td>
                    </tr>
                  );
                
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
