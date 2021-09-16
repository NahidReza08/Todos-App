import React, { useState } from "react";
import TodoCard from "../TodoCard/TodoCard";
import TodoUpdateForm from "../TodoUpdateForm/TodoUpdateForm";




export default function Todo({ todo, removeTodo, updateTodo}) {
  const [state, setState] = useState(0);


  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // function deleteTodo(id) {
  //   removeTodo(id);
  // }

  /*function editButtonClicked(id) {
    //console.log("Edit Todo", document.getElementById('title'));
    document.getElementById(`title_${id}`).style.display = "none";
    document.getElementById(`titleLabel_${todo.id}`).style.display = "block";
    document.getElementById(`titleInput_${todo.id}`).style.display = "block";

    document.getElementById(`username_${id}`).style.display = "none";
    document.getElementById(`usernameInput_${todo.id}`).style.display = "block";

    document.getElementById(`email_${id}`).style.display = "none";
    document.getElementById(`emailInput_${todo.id}`).style.display = "block";

    document.getElementById(`description_${id}`).style.display = "none";
    document.getElementById(`descriptionInput_${todo.id}`).style.display = "block";

    document.getElementById(`submit_${todo.id}`).style.display = "block";
  }*/

  return (
    <div>

      {state===1? <TodoUpdateForm todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} editMode={state} setEditMode={setState} />: 
      <TodoCard todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} editMode={state} setEditMode={setState} />}

    </div>
  );
}
