import React, { useContext } from "react";
import { Context } from "../../contexts/TodoContext";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Todos from "../Todos/Todos";

function Main() {
  const { state } = useContext(Context);
  const {todo, todoForm} = state;

  return (
    <div className="main">
      <Header />
      {todoForm ? <Form todo={todo} mode={0} /> : null}
      <Todos />
    </div>
  );
}

export default Main;
