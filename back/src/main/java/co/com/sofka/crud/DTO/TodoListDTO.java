package co.com.sofka.crud.DTO;

import java.io.Serializable;

public class TodoListDTO implements Serializable {
    private Long idTodoList;
    private String nameTodoList;

    public Long getIdTodoList() {
        return idTodoList;
    }

    public void setIdTodoList(Long idTodoList) {
        this.idTodoList = idTodoList;
    }

    public String getNameTodoList() {
        return nameTodoList;
    }

    public void setNameTodoList(String nameTodoList) {
        this.nameTodoList = nameTodoList;
    }
}
