import React, { useContext } from "react";
import { Context } from "../../contexts/TodoContext";
import Todo from "../Todo/Todo";

const Todos = () => {
  const { state } = useContext(Context);
  const {todos, todoCount} = state;
  
  return (
    <div className="todos-section">
      <h1>All To-dos</h1>
      <h3>
        {todoCount > 0 ? `${todoCount} todos available` : `No todos available`}
      </h3>
      {console.log(todos)}
      <div className="cards">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
