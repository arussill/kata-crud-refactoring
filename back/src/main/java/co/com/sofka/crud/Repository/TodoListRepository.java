package co.com.sofka.crud.Repository;


import co.com.sofka.crud.Model.TodoList;
import org.springframework.data.repository.CrudRepository;

public interface TodoListRepository extends CrudRepository<TodoList, Long> {
}
