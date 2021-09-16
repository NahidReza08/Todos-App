import React from "react";

const Header = () => {
    return (
      <div className="title-section">
        <h1>
          <i className="fas fa-clock"></i>To-dos
        </h1>
        <button className="add-todo-btn">
          <i className="fas fa-plus">Add New</i>
        </button>
      </div>
    );
}

export default Header;
