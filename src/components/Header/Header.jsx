import React, { useContext } from "react";
import { Context } from "../../contexts/TodoContext";

const Header = () => {
  const {setTodoForm} = useContext(Context);
    return (
      <div className="title-section">
        <h1>
          <i className="fas fa-clock"></i>To-dos
        </h1>
        <button className="add-todo-btn" onClick={()=>setTodoForm(true)}>
          <i className="fas fa-plus">Add New</i>
        </button>
      </div>
    );
}

export default Header;
