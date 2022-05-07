package co.com.sofka.crud.Service;


import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Model.TodoList;
import co.com.sofka.crud.ModelMapper.MappingTodoList;
import co.com.sofka.crud.Repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoListService {
    @Autowired
    private TodoListRepository repository;
    MappingTodoList map = new MappingTodoList();

    public Iterable<TodoListDTO> list(){
        List<TodoListDTO> todoListIterableDTO = new ArrayList<TodoListDTO>();
        Iterable<TodoList> todoListIterable = repository.findAll();
        todoListIterable.forEach(element -> {
            todoListIterableDTO.add(map.entityToTodoListDTO(element));
        });
        return todoListIterableDTO;
    }

    public TodoListDTO save(TodoListDTO todoDto){
        TodoList todo = map.maptoEntityTodoList(todoDto);
        repository.save(todo);
        todoDto.setId(todo.getId());
        return todoDto;
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public TodoList get(Long id){
        return repository.findById(id).orElseThrow();
    }
}
