import React, { useContext, useState } from "react";
import { Context } from "../../contexts/TodoContext";

const Form = ({ todo, mode, editMode, setEditMode }) => {
  const {
    createTodo,
    removeTodo,
    updateTodo,
  } = useContext(Context);

  const [state, setState] = useState(todo);


  const onChange = (e) => {
    const { name, value } = e.target;
    setState(() => ({ ...state, [name]: value }));
  };

  function createNew(e) {
    e.preventDefault();
    createTodo(state);
  }

  function editOption() {
    setEditMode(0);
    
  }

  function deleteTodo(id) {
    removeTodo(id);
  }

  function update(e) {
    e.preventDefault();
    updateTodo(state);
    editOption();
  }

  const style = [
    {
      class: "form-section",
      heading: "Create A New To-dos",
      button: "Create",
      onSubmit: (e) => createNew(e)
    },
    {
      class: "card",
      heading: "Update Todo",
      button: "Update",
      onSubmit: (e) => update(e)
    },
  ];

  return (
    <div className={style[mode].class}>
      <form onSubmit={(e) => style[mode].onSubmit(e)}>
        {mode === 0 ? (
          <h1>{style[mode].heading}</h1>
        ) : (
          <div className="title">
            <span>
              <h2>{style[mode].heading}</h2>
            </span>
            <span>
              <i className="fas fa-edit" onClick={() => editOption()}></i>
              <i
                className="fas fa-trash-alt"
                onClick={() => deleteTodo(todo.id)}
              ></i>
            </span>
          </div>
        )}

        <div className="name-email-div">
          <div className="input-group">
            <label id="username_label">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={state.username}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="hidden"></div>

          <div className="input-group">
            <label id="email_label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>

        <label id="title_label">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={state.title}
          onChange={(e) => onChange(e)}
        />
        <br />

        <label id="description_label">Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          rows="8"
          cols="50"
          value={state.description}
          onChange={(e) => onChange(e)}
        ></textarea>
        <br />
        <button className="btn" type="submit">
          {style[mode].button}
        </button>
      </form>
    </div>
  );
};

export default Form;
