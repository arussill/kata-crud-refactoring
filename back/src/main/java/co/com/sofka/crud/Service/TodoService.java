package co.com.sofka.crud.Service;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.Model.Todo;
import co.com.sofka.crud.ModelMapper.MappingTodo;
import co.com.sofka.crud.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;
    MappingTodo map = new MappingTodo();

    public Iterable<TodoDTO> list(){
        List<TodoDTO> iterableDTO = new ArrayList<TodoDTO>();
        Iterable<Todo> todoIterable = repository.findAll();
        todoIterable.forEach(element -> {
            iterableDTO.add(map.entityToDTO(element));
        });
        return iterableDTO;
    }

    public TodoDTO save(TodoDTO todoDto){
        Todo todo = map.mapToEntity(todoDto);
        repository.save(todo);
        todoDto.setId(todo.getId());
        return todoDto;
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public Todo get(Long id){
        return repository.findById(id).orElseThrow();
    }

}
