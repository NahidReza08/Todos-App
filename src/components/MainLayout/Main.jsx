import React, { useContext } from "react";
import { Context } from "../../contexts/TodoContext";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Todos from "../Todos/Todos";

function Main() {
  const { todo,todoForm } = useContext(Context);
  //console.log(useContext(Context),todoForm);

  return (
    <div className="main">
      <Header />
      {todoForm ? <Form todo={todo} mode={0} /> : null}
      <Todos />
    </div>
  );
}

export default Main;
