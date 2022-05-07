package co.com.sofka.crud.ModelMapper;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.Model.Todo;


public class MappingTodo {
    //DTO TODO
    //De DTO a entidad
    public Todo mapToEntity(TodoDTO todoDto) {
        Todo todo = new Todo();
        todo.setId(todoDto.getId());
        todo.setName(todoDto.getName());
        todo.setCompleted(todoDto.isCompleted());
        todo.setId_group(todoDto.getId_group());
        return todo;
    }

    //De entidad a DTO
    public TodoDTO entityToDTO(Todo todo) {
        TodoDTO todoDTO = new TodoDTO();
        todoDTO.setId(todo.getId());
        todoDTO.setName(todo.getName());
        todoDTO.setCompleted(todo.isCompleted());
        todoDTO.setId_group(todo.getId_group());
        return todoDTO;
    }


}
