import React, { useState } from "react";
import Form from "../Form/Form";
import TodoCard from "../TodoCard/TodoCard";

export default function Todo({ todo, removeTodo, updateTodo }) {
  const [editMode, setEditMode] = useState(0);

  return (
    <div>
      {/* {console.log("Todo:",editmode)} */}
      {editMode === 1 ? (
        <Form
          todo={todo}
          mode={editMode}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      ) : (
        <TodoCard
          todo={todo}
          removeTodo={removeTodo}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      )}
    </div>
  );
}
