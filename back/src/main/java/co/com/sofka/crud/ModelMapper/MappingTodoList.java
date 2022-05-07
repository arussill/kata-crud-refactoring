package co.com.sofka.crud.ModelMapper;

import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Model.TodoList;

public class MappingTodoList {
    //    DTO TODOLIST
    //    De DTO a entidad
    public TodoList maptoEntityTodoList(TodoListDTO todoListDto) {
        TodoList todoList = new TodoList();
        todoList.setId(todoListDto.getId());
        todoList.setName(todoListDto.getName());
        todoList.setGroupId(todoListDto.getGroupId());
        return todoList;
    }

    //De entidad a DTO
    public TodoListDTO entityToTodoListDTO(TodoList toDoList) {
        TodoListDTO todoListDTO = new TodoListDTO();
        todoListDTO.setId(toDoList.getId());
        todoListDTO.setName(toDoList.getName());
        todoListDTO.setGroupId(toDoList.getGroupId());
        return todoListDTO;
    }
}
