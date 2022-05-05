package co.com.sofka.crud.Service;

import co.com.sofka.crud.Model.TodoList;
import co.com.sofka.crud.Repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {
    @Autowired
    private TodoListRepository repository;

    public Iterable<TodoList> list(){
        return repository.findAll();
    }

    public TodoList save(TodoList todolist){
        return repository.save(todolist);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public TodoList get(Long id){
        return repository.findById(id).orElseThrow();
    }
}
