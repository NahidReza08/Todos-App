import React from "react";
import Todo from "../Todo/Todo";

const Todos = ({todos, count, removeTodo, updateTodo}) => {
  return (
      <div className="todos-section">
        <h1>All To-dos</h1>
        <h3>{count>0?`${count} todos available`:`No todos available`}</h3>
        {console.log(todos)}
        <div className="cards">
        {todos.map((todo) =>(
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
          
            //const {id,username,email,title,description} = todo;
        ))}
        </div>


      </div>
    );
  }

export default Todos;
