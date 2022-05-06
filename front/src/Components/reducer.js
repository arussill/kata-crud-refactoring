export function reducer(state, action) {
  switch (action.type) {
    case "update-item":
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      todoUpItem.list = listUpdateEdit;
      todoUpItem.item = {};
      return { ...state, todo: todoUpItem };
    case "delete-item":
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      return { ...state, todo: todoUpDelete };
    case "update-list":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };
    case "edit-item":
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit };
    case "add-item":
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: { list: todoUp, item: {} } };


      // Para el grupo de listas
    case "add-todolist":
      const todolistUp = state.todoList.list;
      todolistUp.push(action.item);
      return { ...state, todoList: { list: todolistUp, item: {} } };
    case "update-todolist":
      const todolistUpDate = state.todoList;
      todolistUpDate.list = action.list;
      return { ...state, todoList: todolistUpDate };
    case "delete-todolist":
      const todoListDelete = state.todoList;
      const todoListUpdate = todoListDelete.list.filter((item) => {
        return item.idTodoList !== action.id;
      });
      todoListDelete.list = todoListUpdate;
      return { ...state, todo: todoListDelete };
    default:
      return state;
  }
}
