package co.com.sofka.crud.Service;


import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Model.TodoList;
import co.com.sofka.crud.ModelMapper.Mapping;
import co.com.sofka.crud.Repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoListService extends Mapping {
    @Autowired
    private TodoListRepository repository;

    public Iterable<TodoListDTO> list(){
        List<TodoListDTO> todoListIterableDTO = new ArrayList<TodoListDTO>();
        Iterable<TodoList> todoListIterable = repository.findAll();
        todoListIterable.forEach(e -> {
            todoListIterableDTO.add(entityToTodoListDTO(e));
        });
        return todoListIterableDTO;
    }

    public TodoListDTO save(TodoListDTO todoDto){
        TodoList todo = maptoEntityTodoList(todoDto);
        repository.save(todo);
        todoDto.setIdTodoList(todo.getId());
        return todoDto;
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public TodoList get(Long id){
        return repository.findById(id).orElseThrow();
    }
}
