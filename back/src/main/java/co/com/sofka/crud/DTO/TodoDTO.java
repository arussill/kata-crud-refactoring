package co.com.sofka.crud.DTO;


import java.io.Serializable;

public class TodoDTO implements Serializable {

    private Long id;
    private String name;
    private boolean completed;
    private Long grupListId;

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

    public Long getGrupListId() {
        return grupListId;
    }

    public void setGrupListId(Long grupListId) {
        this.grupListId = grupListId;
    }
}
