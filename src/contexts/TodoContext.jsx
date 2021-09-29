import React, { createContext, useReducer } from "react";
import todoReducer from "../Reducer/todoReducer";

export const Context = createContext();

export default function TodoContext({ children }) {
  const initialTodo = {
    id: "",
    username: "",
    email: "",
    title: "",
    description: "",
  };
  const initialState = {
    todo: initialTodo,
    todos: [],
    todoCount: 0,
    todoForm: false,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <Context.Provider  value={{state,dispatch}}>
      {children}
    </Context.Provider>
  );
}
