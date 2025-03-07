package co.com.sofka.crud.Controller;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.Model.Todo;
import co.com.sofka.crud.Service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService service;

    @CrossOrigin
    @GetMapping(value = "api/todo")
    public Iterable<TodoDTO> list(){
        return service.list();
    }

    @CrossOrigin
    @PostMapping(value = "api/todo")
    public TodoDTO save(@RequestBody TodoDTO todoDto){
        return service.save(todoDto);
    }

    @CrossOrigin
    @PutMapping(value = "api/todo")
    public TodoDTO update(@RequestBody TodoDTO todoDto){
        if(todoDto.getId() != null){
            return service.save(todoDto);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @CrossOrigin
    @DeleteMapping(value = "api/todo/{id}")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @CrossOrigin
    @GetMapping(value = "api/todo/{id}")
    public Todo get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
