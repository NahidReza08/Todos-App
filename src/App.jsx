import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout/Main";
import TodoContext from "./contexts/TodoContext";

function App() {
  
  return (
    <TodoContext>
      <MainLayout />
    </TodoContext>
  );
}

export default App;
