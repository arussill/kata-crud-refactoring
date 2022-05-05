package co.com.sofka.crud.ModelMapper;
import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Model.Todo;
import co.com.sofka.crud.Model.TodoList;

public class Mapping {
    //DTO TODO
    protected Todo mapToEntity(TodoDTO todoDto){
        Todo todo = new Todo();
        todo.setId(todoDto.getId());
        todo.setName(todoDto.getName());
        todo.setCompleted(todoDto.isCompleted());
        todo.setGrupListId(todoDto.getGrupListId());
        return todo;
    }

    protected TodoDTO entityToDTO(Todo todo){
        TodoDTO todoDTO = new TodoDTO();
        todoDTO.setId(todo.getId());
        todoDTO.setName(todo.getName());
        todoDTO.setCompleted(todo.isCompleted());
        todoDTO.setGrupListId(todo.getGrupListId());
        return todoDTO;
    }

//    DTO TODOLIST
    protected TodoList maptoEntityTodoList(TodoListDTO todoListDto){
        TodoList todoList = new TodoList();
        todoList.setId(todoListDto.getIdTodoList());
        todoList.setName(todoListDto.getNameTodoList());
        return todoList;
    }

    protected TodoListDTO entityToTodoListDTO(TodoList toDoList){
        TodoListDTO todoListDTO = new TodoListDTO();
        todoListDTO.setIdTodoList(toDoList.getId());
        todoListDTO.setNameTodoList(toDoList.getName());
        return todoListDTO;
    }

}
