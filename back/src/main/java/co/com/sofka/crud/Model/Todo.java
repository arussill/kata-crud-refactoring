package co.com.sofka.crud.Model;

import javax.persistence.*;

@Entity
@Table(name = "tareitas")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "completed")
    private boolean completed;

    @Column(name = "id_group")
    private Long id_group;


//    CONSTRUCTORES

    public Todo() {
    }

    public Todo(Long id, String name, boolean completed, Long id_group) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.id_group = id_group;
    }

//    SETTERS y GETTERS

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
