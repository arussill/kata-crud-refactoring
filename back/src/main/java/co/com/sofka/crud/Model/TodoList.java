package co.com.sofka.crud.Model;

import javax.persistence.*;
import java.util.Set;

//Padre
@Entity
@Table(name = "TodoList")
public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long idTodoList;

    @Column(name = "nameTodoList")
    private String nameTodoList;

    //    Relacion con tabla Todo
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "grupListId")
    private Set<Todo> id_TodoList;

    // GETTERS AND SETTERS
    public Long getId() {
        return idTodoList;
    }

    public void setId(Long idTodoList) {
        this.idTodoList = idTodoList;
    }

    public String getName() {
        return nameTodoList;
    }

    public void setName(String nameTodoList) {
        this.nameTodoList = nameTodoList;
    }

//    CONSTRUCTOR

    public TodoList(Long idTodoList, String nameTodoList) {
        this.idTodoList = idTodoList;
        this.nameTodoList = nameTodoList;
    }

    public TodoList() {
    }
}
