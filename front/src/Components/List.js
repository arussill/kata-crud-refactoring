import React, { useContext, useEffect, Fragment  } from "react";
import { HOST_API } from "../App";
import { Form } from "./Form";
import { Store } from "./Store";

export const List = () => {
  
  const {
    dispatch,
    state: { todo, todoList },
  } = useContext(Store);
  const currentTodos = todo.list;
  const currentList = todoList.list;

  useEffect(() => {
    fetch(HOST_API + "/todo")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [dispatch]);

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

  const onChange = (event, todo, groupId) => {
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

  useEffect(() => {
    fetch(HOST_API + "/todolist")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-listOfList", list });
      });
  }, [dispatch]);

  const onDeleteList = (id) => {
    todo.list.map((item) => {
      if (item.id_tareas === id) {
        onDelete(item.id_tareas);
      }
    });
   
    fetch(HOST_API + "/todolist/" + id, {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-list", id });
    });
  };

  const decorationDone = {
    textDecoration: "line-through",
  };

  return (
    <Fragment>
      <table cellSpacing="0">
        <tbody>
          {currentList.map((list) => {
            return (
              <Fragment key={list.id}>
                <div className="listDiv">
                  <tr>
                    <td id="TitleText">{list.name}</td>
                    <td>
                      <button
                      className="eliminar"
                        onClick={() => onDeleteList(list.id)}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form groupId={list.id} />
                    </td>
                  </tr>

                  <tr>
                    <td className="td">Id</td>
                    <td className="td">Tarea</td>
                    <td className="td">¿Completa?</td>
                  </tr>
                  {currentTodos.map((todo) => {
                    if (todo.id_group=== list.id) {
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
                              onChange={(event) =>
                                onChange(event, todo, list.id)
                              }
                            ></input>
                          </td>
                          <td>
                            <button
                              className="eliminar"
                              onClick={() => onDelete(todo.id)}
                            >
                              Eliminar
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => onEdit(todo)}
                              className="editar"
                            >
                              Editar
                            </button>
                          </td>
                        </tr>
                      );
                    }
                    return;
                  })}
                </div>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};


