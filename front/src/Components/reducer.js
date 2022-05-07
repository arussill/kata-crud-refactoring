export function Reducer(state, action) {
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

    case "edit-item":
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit };

    case "add-item":
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: { list: todoUp, item: {} } };

    case "update-list":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };

    case "delete-list":
      const listUpDelete = state.todoList;
      const listOfListUpdate = listUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      listUpDelete.list = listOfListUpdate;
      return { ...state, todoList: listUpDelete };
      
    case "update-listOfList":
      const listUpList = state.todoList;
      listUpList.list = action.list;
      return { ...state, todoList: listUpList };

    case "add-list":
      const listUp = state.todoList.list;
      listUp.push(action.item);
      return { ...state, todoList: { list: listUp, item: {} } };

    default:
      return state;
  }
}
export default Reducer;
