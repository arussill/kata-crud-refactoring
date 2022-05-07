package co.com.sofka.crud.Model;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "grupos")
public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    //    Relacion con tabla Todo
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_group")
    private Set<Todo> groupId;

    // GETTERS Y SETTERS

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


//    CONSTRUCTORES

    public TodoList(Long id, String name, Set<Todo> groupId) {
        this.id = id;
        this.name = name;
        this.groupId = groupId;
    }

    public TodoList() {
    }
}
