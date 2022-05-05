package co.com.sofka.crud.Controller;

import co.com.sofka.crud.Model.TodoList;
import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {

   @Autowired
   private TodoListService service;

    @GetMapping(value = "api/todoslist")
    public Iterable<TodoListDTO> list(){
        return service.list();
    }

    @PostMapping(value = "api/todolist")
    public TodoListDTO save(@RequestBody TodoListDTO todoDto){
        return service.save(todoDto);
    }

    @PutMapping(value = "api/todolist")
    public TodoListDTO update(@RequestBody TodoListDTO todoDto){
        if(todoDto.getIdTodoList() != null){
            return service.save(todoDto);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todolist")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todolist")
    public TodoList get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
