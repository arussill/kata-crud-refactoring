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

    @CrossOrigin
    @GetMapping(value = "api/todolist")
    public Iterable<TodoListDTO> list(){
        return service.list();
    }

    @CrossOrigin
    @PostMapping(value = "api/todolist")
    public TodoListDTO save(@RequestBody TodoListDTO todoDto){
        return service.save(todoDto);
    }

    @CrossOrigin
    @PutMapping(value = "api/todolist")
    public TodoListDTO update(@RequestBody TodoListDTO todoDto){
        if(todoDto.getId() != null){
            return service.save(todoDto);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @CrossOrigin
    @DeleteMapping(value = "api/todolist/{id}")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @CrossOrigin
    @GetMapping(value = "api/todolist/{id}")
    public TodoList get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
