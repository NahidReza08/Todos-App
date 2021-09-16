import React, { useState } from "react";

export default function TodoUpdateForm({ todo, removeTodo, updateTodo, editMode, setEditMode }) {
  const [state, setState] = useState(todo);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function editOption() {
    setEditMode((editMode+1)%2);
  }

  function deleteTodo(id) {
    removeTodo(id);
  }

  function update(e){
    e.preventDefault();
    updateTodo(state);
    editOption();
  }

  return (
    <div>
      <div className="card">
        <form onSubmit={(e) => update(e)}>
          <div className="title">
            <span>
              <b>Title</b>
              <input
                type="text"
                name="title"
                value={state.title}
                onChange={onChange}
              />
            </span>
            <span>
              <i className="fas fa-edit" onClick={() => editOption()}></i>
              <i
                className="fas fa-trash-alt"
                onClick={() => deleteTodo(todo.id)}
              ></i>
            </span>
          </div>

          <b>Username:</b>
          <br />
          <input
            type="text"
            name="username"
            onChange={onChange}
            value={state.username}
          />

          <b>Email:</b>
          <br />
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={state.email}
          />

          <b>Description:</b>
          <br />
          <textarea
            onChange={onChange}
            name="description"
            rows="8"
            value={state.description}
          >
          </textarea>

          <button className="btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
