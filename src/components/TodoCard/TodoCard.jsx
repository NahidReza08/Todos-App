import React from "react";

export default function TodoCard({ todo, removeTodo, editMode, setEditMode }) {

  function deleteTodo(id) {
    removeTodo(id);
  }

  function editOption() {
    setEditMode((editMode+1)%2);
  }

  return (
    <div>
      <div className="card">
        <div className="title">
          <h2>{todo.title}</h2>
          <span>
            <i
              className="fas fa-edit"
              onClick={() => editOption()}
            ></i>
            <i
              className="fas fa-trash-alt"
              onClick={() => deleteTodo(todo.id)}
            ></i>
          </span>
        </div>

        <b>Username:</b>
        <br />
        <p>{todo.username}</p>
        <br />

        <b>Email:</b>
        <br />
        <p>{todo.email}</p>
        <br />

        <b>Description:</b>
        <br />
        <div className="scroll">
          {todo.description}
        </div>
      </div>
    </div>
  );
}
