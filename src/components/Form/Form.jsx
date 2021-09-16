import React from "react";


const Form = ({todo, createTodo, setTodoValue}) => {

  function handleChange(e) {
    setTodoValue(e.target.name,e.target.value)
  }

  function createNew(e) {
    e.preventDefault();
    createTodo();
  }

  //let [username, email, title, description] = todo;

  return (
    <div className="form-section">
      <form onSubmit={(e) => createNew(e)}>
        <h1>Create A New To-dos</h1>

        <div className="name-email-div">
          <div className="input-group">
            <label id="username_label">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={todo.username}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="hidden"></div>

          <div className="input-group">
            <label id="email_label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={todo.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <label id="title_label">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={todo.title}
          onChange={(e) => handleChange(e)}
        />
        <br />

        <label id="description_label">Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          rows="8"
          cols="50"
          value={todo.description}
          onChange={(e) => handleChange(e)}
        >
        </textarea>
        <br />
        <button className="btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
