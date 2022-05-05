package co.com.sofka.crud.Service;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.Model.Todo;
import co.com.sofka.crud.ModelMapper.Mapping;
import co.com.sofka.crud.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService extends Mapping {

    @Autowired
    private TodoRepository repository;

    public Iterable<TodoDTO> list(){
        List<TodoDTO> iterableDTO = new ArrayList<TodoDTO>();
        Iterable<Todo> todoIterable = repository.findAll();
        todoIterable.forEach(e -> {
            iterableDTO.add(entityToDTO(e));
        });
        return iterableDTO;
    }

    public TodoDTO save(TodoDTO todoDto){
        Todo todo = mapToEntity(todoDto);
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
