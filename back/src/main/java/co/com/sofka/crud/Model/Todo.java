package co.com.sofka.crud.Model;

import javax.persistence.*;

//items
@Entity
@Table(name = "Todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "completed")
    private boolean completed;

    @Column(name = "groupListId")
    private Long groupListId;


//    CONSTRUCTOR

    public Todo(Long id, String name, boolean completed, Long grupListId) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.grupListId = grupListId;
    }

    public Todo() {

    }

    public Long getGrupListId() {
        return grupListId;
    }

    public void setGrupListId(Long grupListId) {
        this.grupListId = grupListId;
    }

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
}
