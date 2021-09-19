import React, { createContext, useState } from "react";

export const Context = createContext();

export default function TodoContext({ children }) {
  const initialTodo = {
    id: "",
    username: "",
    email: "",
    title: "",
    description: "",
  };
  const [todo, setTodo] = useState(initialTodo);
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [todoForm, setTodoForm] = useState(false);

//   const setTodoValue = (key, value) => {
//     const copyTodo = { ...todo, [key]: value };
//     setTodo(() => copyTodo);
//   };

  const createTodo = (todo) => {
    if (JSON.stringify(todo) === JSON.stringify(initialTodo)) {
      alert("Please, fill the fields.");
      return;
    }
    const copyTodos = [...todos];
    const date = new Date();
    const newTodo = {
      ...todo,
      id: `${date.getTime()}${Math.floor(Math.random() * 10000000)}`,
    };
    copyTodos.push(newTodo);
    setTodos(() => copyTodos);
    setTodoCount(() => todoCount + 1);
    setTodo(initialTodo);
    setTodoForm(false);
  };

  const removeTodo = (id) => {
    const copyTodos = todos.filter((todo) => todo["id"] !== id);
    setTodos(() => copyTodos);
    setTodoCount(() => todoCount - 1);
  };

  const updateTodo = (updatedTodo) => {
    const { id } = updatedTodo;
    const copyTodos = [...todos];
    const index = copyTodos.findIndex((todo) => todo["id"] === id);
    if (index !== -1) {
      copyTodos[index] = updatedTodo;
      setTodos(() => copyTodos);
    }
  };

  return (
    <Context.Provider
      value={{
        todo,
        todos,
        todoCount,
        todoForm,
        createTodo,
        removeTodo,
        updateTodo,
        setTodoForm,
        setTodoCount
      }}
    >
      {children}
    </Context.Provider>
  );
}
