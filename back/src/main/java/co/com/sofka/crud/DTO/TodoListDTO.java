package co.com.sofka.crud.DTO;

import co.com.sofka.crud.Model.Todo;

import java.io.Serializable;
import java.util.Set;

public class TodoListDTO implements Serializable {
//    ATRIBUTOS
    private Long id;
    private String name;
    private Set<Todo> groupId;

//    CONSTRUCTORES

    public TodoListDTO() {
    }

    public TodoListDTO(Long id, String name, Set<Todo> groupId) {
        this.id = id;
        this.name = name;
        this.groupId = groupId;
    }

//    GETTERS Y SETTERS


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Todo> getGroupId() {
        return groupId;
    }

    public void setGroupId(Set<Todo> groupId) {
        this.groupId = groupId;
    }
}
