package co.com.sofka.crud.DTO;


import java.io.Serializable;

public class TodoDTO implements Serializable {
//    ATRIBUTOS
    private Long id;
    private String name;
    private boolean completed;
    private Long id_group;

//    CONSTRUCTORES
    public TodoDTO() {
    }

    public TodoDTO(Long id, String name, boolean completed, Long id_group) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.id_group = id_group;
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

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Long getId_group() {
        return id_group;
    }

    public void setId_group(Long id_group) {
        this.id_group = id_group;
    }
}
